import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Terminal,
  Boxes,
  Layers,
  HardDrive,
  Network,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Play,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lock,
  Activity,
  Tag,
  BookOpen,
  Check,
  Eye,
  Server,
  Database,
  Cpu,
  RefreshCw,
  Zap,
  Globe,
  Radio,
  Flame,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsK8s() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'control-plane-lab' | 'service-lab' | 'sre-gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: KUBERNETES CONTROL LOOP & POD LIFECYCLE SIMULATOR
  // =========================================================================
  const [desiredReplicas, setDesiredReplicas] = useState(3);
  const [node2Status, setNode2Status] = useState("Ready"); // 'Ready' | 'NotReady'
  const [appVersion, setAppVersion] = useState("v1.0.0");
  const [isRollingUpdate, setIsRollingUpdate] = useState(false);
  const [controllerEvents, setControllerEvents] = useState([
    "Deployment controller observed desired replicas: 3",
    "ReplicaSet 'notes-api-7b8f9' synchronized (3/3 ready)",
    "Scheduler placed pod-1 on node-1, pod-2 on node-2, pod-3 on node-1",
    "Kubelet started container 'notes-api:1.0.0' on all assigned nodes",
    "Readiness probes passed: Service endpoints registered",
  ]);

  // Compute active pods based on desired replicas, node status, and rolling update
  const activePods = useMemo(() => {
    const list = [];
    for (let i = 1; i <= desiredReplicas; i++) {
      // If node 2 is down, pods on node 2 are rescheduled to node 1
      const preferredNode = i % 2 === 0 ? "node-2" : "node-1";
      const actualNode = node2Status === "NotReady" && preferredNode === "node-2" ? "node-1 (rescheduled)" : preferredNode;
      const status = node2Status === "NotReady" && preferredNode === "node-2" ? "Terminating -> Recreating" : "Running";
      const ready = node2Status === "NotReady" && preferredNode === "node-2" ? "0/1" : "1/1";

      list.push({
        name: `notes-api-${appVersion.replace(".", "")}-${i}`,
        node: actualNode,
        status: status,
        ready: ready,
        version: appVersion,
        restarts: 0,
        age: "4m22s",
      });
    }
    return list;
  }, [desiredReplicas, node2Status, appVersion]);

  const handleScaleReplicas = (num) => {
    setDesiredReplicas(num);
    setControllerEvents((prev) => [
      `$ kubectl scale deployment notes-api --replicas=${num}`,
      `Deployment controller reconciling: desired=${num}, current=${activePods.length}`,
      ...prev.slice(0, 7),
    ]);
  };

  const handleToggleNode2 = () => {
    if (node2Status === "Ready") {
      setNode2Status("NotReady");
      setControllerEvents((prev) => [
        `[CRITICAL] node-2 missed heartbeat (NodeCondition: Ready=False)`,
        `Node controller started pod eviction after pod-eviction-timeout (300s / lab: instant)`,
        `Scheduler assigned orphaned pods to healthy node-1`,
        ...prev.slice(0, 7),
      ]);
    } else {
      setNode2Status("Ready");
      setControllerEvents((prev) => [
        `[HEALTHY] node-2 registered heartbeat (NodeCondition: Ready=True)`,
        `Kubelet on node-2 ready to accept new pod scheduling assignments`,
        ...prev.slice(0, 7),
      ]);
    }
  };

  const handleTriggerRollingUpdate = () => {
    setIsRollingUpdate(true);
    const nextVer = appVersion === "v1.0.0" ? "v2.0.0" : "v1.0.0";
    setAppVersion(nextVer);
    setControllerEvents((prev) => [
      `$ kubectl set image deployment/notes-api notes-api=notes-api:${nextVer}`,
      `Deployment creating new ReplicaSet for image 'notes-api:${nextVer}'`,
      `Rolling update strategy: maxSurge=25%, maxUnavailable=25%`,
      `New pods starting -> Readiness probes probing /readyz -> Old pods terminating`,
      `Rollout successful: 100% traffic shifted to ${nextVer} with ZERO downtime`,
      ...prev.slice(0, 7),
    ]);
    setTimeout(() => setIsRollingUpdate(false), 2000);
  };

  const handleRolloutUndo = () => {
    setAppVersion("v1.0.0");
    setControllerEvents((prev) => [
      `$ kubectl rollout undo deployment/notes-api`,
      `Deployment rolled back to previous revision (template restored to v1.0.0)`,
      `Rollout undo completed cleanly`,
      ...prev.slice(0, 7),
    ]);
  };

  // =========================================================================
  // SIMULATOR 2: SERVICE DISCOVERY & ENDPOINTSLICE ROUTING SANDBOX
  // =========================================================================
  const [podHealthState, setPodHealthState] = useState({
    podA: true,
    podB: true,
    podC: true,
  });
  const [routedPodHistory, setRoutedPodHistory] = useState([]);
  const [trafficLog, setTrafficLog] = useState([
    "ClusterIP Service 'notes-api' active on virtual IP 10.96.0.100:80",
    "EndpointSlice 'notes-api-7b4f' populated with 3 ready pod IP addresses",
    "CoreDNS resolving 'notes-api.default.svc.cluster.local' -> 10.96.0.100",
  ]);

  const healthyPodCount = Object.values(podHealthState).filter(Boolean).length;

  const handleSendRequest = () => {
    const available = [];
    if (podHealthState.podA) available.push("pod-A (10.244.1.14)");
    if (podHealthState.podB) available.push("pod-B (10.244.2.22)");
    if (podHealthState.podC) available.push("pod-C (10.244.1.19)");

    if (available.length === 0) {
      setTrafficLog((prev) => [
        "HTTP 503 Service Unavailable: No endpoints available in EndpointSlice!",
        ...prev.slice(0, 7),
      ]);
      return;
    }

    const selected = available[Math.floor(Math.random() * available.length)];
    setRoutedPodHistory((prev) => [selected, ...prev.slice(0, 5)]);
    setTrafficLog((prev) => [
      `Request routed: Client -> Service (10.96.0.100:80) -> kube-proxy / EndpointSlice -> ${selected} [200 OK]`,
      ...prev.slice(0, 7),
    ]);
  };

  const handleTogglePodReadiness = (podKey) => {
    const nextState = !podHealthState[podKey];
    setPodHealthState((prev) => ({ ...prev, [podKey]: nextState }));

    if (!nextState) {
      setTrafficLog((prev) => [
        `[READINESS FAILURE] ${podKey} failed /readyz check!`,
        `EndpointSlice controller IMMEDIATELY removed ${podKey} from Service backends`,
        `Zero client requests will be forwarded to ${podKey} while unready`,
        ...prev.slice(0, 7),
      ]);
    } else {
      setTrafficLog((prev) => [
        `[READINESS RESTORED] ${podKey} passed /readyz probe!`,
        `EndpointSlice controller re-added ${podKey} IP to Service backend targets`,
        ...prev.slice(0, 7),
      ]);
    }
  };

  // =========================================================================
  // SIMULATOR 3: SRE INCIDENT TROUBLESHOOTING GAMEDAY (5 SCENARIOS)
  // =========================================================================
  const incidentScenarios = [
    {
      id: "inc-1",
      title: "Incident 1: CrashLoopBackOff: Missing Database Password Secret",
      symptom: "All API pods fail immediately upon start with status CrashLoopBackOff. Restarts counter is incrementing rapidly.",
      codeSnippet: `$ kubectl describe pod notes-api-7b8f9-x2k9
Events:
  Type     Reason     Age                From               Message
  Normal   Scheduled  2m                 default-scheduler  Successfully assigned default/notes-api to worker-1
  Warning  Failed     1m (x4 over 2m)    kubelet            Error: secret "db-credentials" not found
  Warning  BackOff    15s (x8 over 2m)   kubelet            Back-off restarting failed container`,
      question: "What is the root cause of this CrashLoopBackOff, and what is the proper SRE remediation?",
      options: [
        {
          id: "opt-a",
          label: "The worker node ran out of disk space. Re-run 'docker prune' on the node.",
          correct: false,
          explanation: "The event log explicitly states: 'Error: secret \"db-credentials\" not found'. Disk space has nothing to do with this failure."
        },
        {
          id: "opt-b",
          label: "The Pod manifest references a Secret named 'db-credentials' that does not exist in the namespace. Fix: Create the secret via 'kubectl create secret generic db-credentials --from-file=password=...' in that namespace.",
          correct: true,
          explanation: "Authoritative Kubernetes troubleshooting: When a container references a secretKeyRef or secret volume that does not exist, the kubelet cannot start the container runtime and places the pod into CrashLoopBackOff. Creating the Secret allows the kubelet to immediately proceed."
        },
        {
          id: "opt-c",
          label: "Delete the deployment and switch to Docker Swarm.",
          correct: false,
          explanation: "Unconstructive action that doesn't address the missing configuration object."
        }
      ]
    },
    {
      id: "inc-2",
      title: "Incident 2: Pending Pod: Unsatisfiable Resource Requests",
      symptom: "API Pods are stuck indefinitely in 'Pending' state. Nodes are Ready and network is healthy.",
      codeSnippet: `$ kubectl get pods
NAME                         READY   STATUS    RESTARTS   AGE
notes-api-5c94d-h8z12        0/1     Pending   0          8m

$ kubectl describe pod notes-api-5c94d-h8z12
Events:
  Warning  FailedScheduling  8m (x3 over 8m)  default-scheduler
  0/3 nodes are available: 1 node(s) had untolerated taint, 2 Insufficient cpu.
  preemption: 0/3 nodes are available: 3 No preemption victims found for incoming pod.`,
      question: "Why did the kube-scheduler fail to place the pod on any worker node?",
      options: [
        {
          id: "opt-a",
          label: "The container image is corrupted in the registry.",
          correct: false,
          explanation: "Image pulling occurs after scheduling. The pod hasn't even been assigned to a node."
        },
        {
          id: "opt-b",
          label: "The Pod's 'resources.requests.cpu' exceeds the remaining allocatable CPU capacity on all worker nodes. Fix: Lower the CPU request to realistic workload requirements or autoscale cluster nodes.",
          correct: true,
          explanation: "Exact scheduler mechanics: The kube-scheduler's Predicate Filter compares the Pod's CPU and Memory 'requests' against the allocatable capacity of each node. If the requested CPU cannot be satisfied without starving guaranteed workloads, the pod remains Pending indefinitely."
        },
        {
          id: "opt-c",
          label: "Increase CPU limits to 16 cores.",
          correct: false,
          explanation: "Increasing limits does not help; scheduling is determined strictly by 'requests', not 'limits'."
        }
      ]
    },
    {
      id: "inc-3",
      title: "Incident 3: Container OOMKilled with Exit Code 137",
      symptom: "API Pod restarts intermittently under traffic spikes. Container termination state shows Reason: OOMKilled and Exit Code 137.",
      codeSnippet: `$ kubectl describe pod notes-api-7b8f9-4k91a
Containers:
  notes-api:
    State:          Waiting
      Reason:       CrashLoopBackOff
    Last State:     Terminated
      Reason:       OOMKilled
      Exit Code:    137
    Limits:
      memory:       64Mi
    Requests:
      memory:       32Mi`,
      question: "What does Exit Code 137 mean in Kubernetes, and how should it be remediated?",
      options: [
        {
          id: "opt-a",
          label: "Exit Code 137 represents 128 + 9 (SIGKILL). The Linux kernel cgroup memory controller terminated the process because its memory footprint exceeded the 64Mi limit. Fix: Profile application memory and increase memory limit.",
          correct: true,
          explanation: "Exact Linux kernel and container mechanism: Exit code 137 = 128 + signal 9 (SIGKILL). When a container process exceeds its configured memory limit in its cgroup, the kernel Out-Of-Memory killer terminates the process immediately. Remediate by sizing realistic memory limits based on profiling."
        },
        {
          id: "opt-b",
          label: "Exit 137 means a syntax error occurred in Python.",
          correct: false,
          explanation: "Syntax errors in Python produce exit code 1."
        },
        {
          id: "opt-c",
          label: "Restart the node to flush all memory caches.",
          correct: false,
          explanation: "Flushing host caches does not resolve an undersized container cgroup limit."
        }
      ]
    },
    {
      id: "inc-4",
      title: "Incident 4: ImagePullBackOff & ErrImagePull",
      symptom: "Pods cannot start. Status shows ImagePullBackOff. Kubelet events report unauthorized access.",
      codeSnippet: `$ kubectl describe pod notes-api-9f1b-rt8x
Events:
  Warning  Failed   2m (x2 over 2m)   kubelet  Failed to pull image "corp-registry.internal/apps/notes-api:1.0.0":
  rpc error: code = Unknown desc = failed to pull and unpack image:
  failed to resolve reference: unexpected status code 401 Unauthorized
  Warning  Failed   2m (x2 over 2m)   kubelet  Error: ImagePullBackOff`,
      question: "How should an SRE resolve this private registry authentication failure in Kubernetes?",
      options: [
        {
          id: "opt-a",
          label: "Create a 'kubernetes.io/dockerconfigjson' secret with registry credentials and attach it to the Deployment via 'imagePullSecrets'.",
          correct: true,
          explanation: "Standard Kubernetes pattern: Accessing private registries requires a Docker registry secret in the workload namespace, referenced in the Pod spec via 'imagePullSecrets: [{name: regcred}]' or configured on the namespace default ServiceAccount."
        },
        {
          id: "opt-b",
          label: "Disable authentication on the corporate container registry.",
          correct: false,
          explanation: "Disabling security on enterprise registries violates corporate security compliance."
        },
        {
          id: "opt-c",
          label: "Add --privileged to the pod security context.",
          correct: false,
          explanation: "Privileged mode controls host kernel capabilities; it has no effect on registry image pulling."
        }
      ]
    },
    {
      id: "inc-5",
      title: "Incident 5: Service 503 / Connection Refused: Label Selector Mismatch",
      symptom: "Pods are 1/1 Running and healthy, but 'curl http://service-ip' fails with Connection Refused or empty reply. 'kubectl get endpoints' shows <none>.",
      codeSnippet: `# Service manifest:
apiVersion: v1
kind: Service
metadata:
  name: notes-service
spec:
  selector:
    app: web   <-- Note selector!

# Deployment manifest:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: notes-api
spec:
  template:
    metadata:
      labels:
        app: notes-api  <-- Note Pod label!`,
      question: "Why does the Service have zero endpoints, and how is it resolved?",
      options: [
        {
          id: "opt-a",
          label: "The Service selector (app: web) does not match the Pod template label (app: notes-api). The EndpointSlice controller finds 0 matching pods. Fix: Update Service selector to app: notes-api.",
          correct: true,
          explanation: "Crucial Service discovery mechanic: Kubernetes Services route traffic strictly by matching label selectors against Pod labels. A mismatch between 'app: web' and 'app: notes-api' results in empty EndpointSlices (<none>), meaning no traffic can reach the Pods."
        },
        {
          id: "opt-b",
          label: "The Service must be upgraded to a LoadBalancer type.",
          correct: false,
          explanation: "Service type does not fix an internal label selector mismatch."
        },
        {
          id: "opt-c",
          label: "Delete the cluster and rebuild with flannel.",
          correct: false,
          explanation: "CNI plugins do not cause label selector mismatches in EndpointSlices."
        }
      ]
    }
  ];

  const [selectedIncidentIndex, setSelectedIncidentIndex] = useState(0);
  const [incidentAnswers, setIncidentAnswers] = useState({});

  const handleIncidentAnswer = (incId, optId) => {
    setIncidentAnswers((prev) => ({ ...prev, [incId]: optId }));
  };

  // =========================================================================
  // TOPIC CURRICULUM DATA (10 COMPREHENSIVE TOPICS)
  // =========================================================================
  const topics = useMemo(
    () => [
      {
        id: "concept-k8s",
        number: "01",
        title: "Why Kubernetes Exists & The Control Loop Model",
        badge: "Reconciliation & etcd Quorum",
        summary:
          "The limit of manual container management. Desired state vs Observed actual state. The control loop in action: API server, etcd, controllers, scheduler, and kubelet. High availability multi-master topologies.",
        details: [
          {
            heading: "The Multi-Container Operational Wall",
            body: "In Module 3, you ran containers with Docker Compose. But when applications grow to dozens of services, hundreds of replicas, and require self-healing, rolling updates, multi-host scheduling, and automated bin-packing, single-host Docker engines collapse. Kubernetes orchestrates containers across a fleet of physical or virtual machines, providing an abstraction layer over compute, storage, and networking.",
          },
          {
            heading: "Declarative Desired State vs. Observed Actual State",
            body: "In Kubernetes, you never imperatively tell the cluster: 'Go start 3 processes right now.' Instead, you submit a declarative manifest describing your desired state:\n`spec: { replicas: 3 }`\nThe Kubernetes control plane continuously runs reconciliation loops that observe the actual cluster state, compare it against the desired state in `etcd`, and execute corrective actions to eliminate discrepancies.",
          },
          {
            heading: "The Distributed Systems Foundation: etcd & Raft Quorum",
            body: "As taught in MIT 6.824 and Cambridge Concurrent Systems, all cluster state is stored in `etcd`, a strongly consistent, distributed key-value store using the Raft consensus algorithm. To prevent split-brain partition failures, production clusters require an odd number of etcd members ($2N+1$, typically 3 or 5 nodes), allowing the cluster to survive $N$ node failures while maintaining quorum.",
          },
          {
            heading: "Control Plane Architecture",
            body: "The control plane consists of four core components:\n1. `kube-apiserver`: The only component that talks to `etcd`; exposes the REST API.\n2. `kube-scheduler`: Assigns unscheduled Pods to suitable worker nodes based on resource filtering and scoring.\n3. `kube-controller-manager`: Executes control loops (Deployment, ReplicaSet, Node, EndpointSlice controllers).\n4. `cloud-controller-manager`: Optional cloud integration for external load balancers and storage volumes.",
          },
        ],
        codeSnippet: `# Inspect cluster health and control plane components
kubectl cluster-info
kubectl get componentstatuses
kubectl get nodes -o wide

# View etcd member list and health (from control plane node)
etcdctl endpoint health --cluster`,
      },
      {
        id: "cluster-anatomy",
        number: "02",
        title: "Cluster Anatomy: Control Plane & Worker Node Internals",
        badge: "Kubelet, CRI & Data Planes",
        summary:
          "How worker nodes execute workloads. The kubelet node agent, Container Runtime Interface (CRI), and networking data plane (kube-proxy vs eBPF CNI).",
        details: [
          {
            heading: "The Worker Node Architecture",
            body: "Worker nodes are the workhorses of the cluster where application containers run. Each worker node runs three fundamental components:\n1. `kubelet`: The primary node supervisor agent. It watches the API server for PodSpecs assigned to its node and ensures the declared containers are running and healthy.\n2. Container Runtime: The low-level runtime (containerd or CRI-O) that pulls images and runs container processes via the Container Runtime Interface (CRI).\n3. Network Implementation (`kube-proxy` / CNI): Configures iptables, IPVS, or eBPF routes to forward Service traffic to container network namespaces.",
          },
          {
            heading: "The Kubelet Lifecycle Loop",
            body: "The kubelet communicates with the container runtime through gRPC over the CRI socket. It periodically polls the runtime status, executes startup/readiness/liveness probes, monitors cgroup memory/CPU usage, and streams status heartbeats back to the API server. If a container crashes, the kubelet restarts it according to its `restartPolicy`.",
          },
          {
            heading: "Network Data Plane: iptables vs. IPVS vs. eBPF",
            body: "- Legacy iptables: `kube-proxy` writes sequential packet filtering rules. At 10,000+ Services, iptables rule evaluation slows network throughput.\n- IPVS: Hash-table based L4 load balancing with $O(1)$ lookup performance.\n- Modern eBPF (Cilium): Bypasses iptables entirely by attaching eBPF programs directly to Linux network sockets, providing line-rate throughput and cryptographic mutual TLS.",
          },
        ],
        codeSnippet: `# Inspect node telemetry and kubelet status
kubectl describe node <node-name>
kubectl get pods -n kube-system -o wide

# Check kubelet systemd journal on worker node
journalctl -u kubelet -f --no-pager`,
      },
      {
        id: "pods-deployments",
        number: "03",
        title: "Pods, Deployments & Declarative Rolling Updates",
        badge: "Zero-Downtime Rollouts",
        summary:
          "Pods as the atomic scheduling unit. Multi-container sidecar patterns. Deployments managing ReplicaSets. Rolling update surge/unavailable mechanics and rollbacks.",
        details: [
          {
            heading: "The Pod: Atomic Scheduling Unit",
            body: "A Pod is the smallest deployable unit in Kubernetes. It encapsulates one or more closely coupled containers that share:\n1. The same Network namespace (all containers in a Pod share the same IP and communicate over `localhost`).\n2. The same IPC namespace (shared POSIX memory).\n3. Shared storage volumes mounted into container filesystems.\nNever manage individual Pods directly in production; always manage them through workload controllers.",
          },
          {
            heading: "Deployments & ReplicaSets",
            body: "A Deployment provides declarative updates for Pods and ReplicaSets. When you create a Deployment, it creates a ReplicaSet, which creates the Pods. If a worker node crashes, the Deployment controller detects the missing replicas and creates replacement Pods on surviving nodes.",
          },
          {
            heading: "Zero-Downtime Rolling Update Mechanics",
            body: "When you update an image tag, the Deployment executes a rolling update controlled by two parameters:\n- `maxSurge` (default 25%): The maximum number of Pods that can be created ABOVE the desired replica count.\n- `maxUnavailable` (default 25%): The maximum number of Pods that can be offline during the update.\nKubernetes starts new pods, waits for their readiness probes to pass, shifts traffic, and then terminates old pods.",
          },
          {
            heading: "Instant Rollbacks",
            body: "If a new release contains a fatal bug, run `kubectl rollout undo deployment/web`. Kubernetes instantly reverses the Deployment spec back to the previous stable ReplicaSet revision.",
          },
        ],
        codeSnippet: `# Production Deployment Manifest
apiVersion: apps/v1
kind: Deployment
metadata:
  name: notes-api
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: notes-api
  template:
    metadata:
      labels:
        app: notes-api
    spec:
      containers:
        - name: api
          image: notes-api:1.0.0
          ports:
            - containerPort: 8000`,
      },
      {
        id: "services-endpoints",
        number: "04",
        title: "Services, EndpointSlices & Cluster Networking",
        badge: "Virtual IPs & CoreDNS",
        summary:
          "The ephemeral Pod IP dilemma. Virtual IPs (ClusterIP). Label selector routing. EndpointSlices tracking ready backends. Service types: ClusterIP, NodePort, LoadBalancer.",
        details: [
          {
            heading: "The Ephemeral IP Dilemma",
            body: "Pod IP addresses are dynamic and ephemeral. When a Pod restarts or scales, it receives a brand-new IP address. Direct communication between Pods using IP addresses is an operational anti-pattern that leads to immediate breakage.",
          },
          {
            heading: "The Service Abstraction & Virtual IPs",
            body: "A Kubernetes Service provides a permanent, stable virtual IP (ClusterIP) and a stable DNS record (`notes-api.default.svc.cluster.local`). Traffic sent to the Service IP is automatically load-balanced across matching Pods. The Service IP never changes throughout the lifetime of the application.",
          },
          {
            heading: "EndpointSlices: Scalable Backend Tracking",
            body: "Historically, Kubernetes tracked service backends in a single `Endpoints` resource, which caused network storms on large clusters. Modern Kubernetes uses `EndpointSlices`, which group up to 100 backend Pod endpoints per slice. When a Pod fails its readiness probe, the EndpointSlice controller immediately strips its IP from the slice, preventing failed requests.",
          },
          {
            heading: "Service Types Matrix",
            body: "- `ClusterIP` (Default): Exposes the Service on an internal cluster-only virtual IP.\n- `NodePort`: Exposes the Service on each node's IP at a static port (range 30000–32767).\n- `LoadBalancer`: Provisions an external cloud load balancer (AWS NLB/ALB, GCP Cloud LB) pointing to NodePorts.\n- `ExternalName`: Maps the Service to a CNAME DNS record outside the cluster.",
          },
        ],
        codeSnippet: `# Production ClusterIP Service
apiVersion: v1
kind: Service
metadata:
  name: notes-api
spec:
  type: ClusterIP
  selector:
    app: notes-api
  ports:
    - name: http
      port: 80
      targetPort: 8000

# Inspect Endpoints & EndpointSlices
kubectl get service notes-api
kubectl get endpointslices -l kubernetes.io/service-name=notes-api`,
      },
      {
        id: "configs-secrets",
        number: "05",
        title: "Configuration, Secrets & Namespaces",
        badge: "KMS Encryption & RBAC Scoping",
        summary:
          "Decoupling config from images with ConfigMaps. Secrets: Base64 encoding vs etcd encryption at rest. Scoping workloads and policies with Namespaces.",
        details: [
          {
            heading: "ConfigMaps: Externalizing Application Configuration",
            body: "Applications should never be re-built merely because an environment variable changes. A ConfigMap stores non-confidential configuration (log levels, database hosts, timeouts). Pods consume ConfigMaps as environment variables (`envFrom`) or mounted configuration files in a volume.",
          },
          {
            heading: "Secrets: The Base64 Misconception",
            body: "CRITICAL SECURITY FACT: Base64 is NOT encryption! By default, Kubernetes Secrets are stored in plaintext Base64 encoding inside `etcd`. Anyone with read access to etcd or cluster-admin RBAC can decode secrets with `echo '<base64>' | base64 -d`. In production, clusters MUST enable Encryption at Rest in etcd using a KMS provider (AWS KMS, HashiCorp Vault).",
          },
          {
            heading: "Injecting Secrets Safely",
            body: "Prefer mounting Secrets as read-only files (`volumeMounts`) over environment variables. Environment variables often leak into process crash dumps, Docker inspect logs, and child subprocess environments. Mounted secret files update dynamically when the Secret changes.",
          },
          {
            heading: "Namespaces: Logical Boundaries vs. Security Boundaries",
            body: "Namespaces partition resources, quotas, and RBAC permissions across teams (e.g., `development`, `staging`, `production`). WARNING: A namespace is NOT an automatic network or security boundary! Without NetworkPolicies, Pods in `development` can communicate freely with Pods in `production`.",
          },
        ],
        codeSnippet: `# Create ConfigMap and Secret
kubectl create configmap app-config --from-literal=LOG_LEVEL=info
kubectl create secret generic db-secret --from-literal=password=SuperSecret123!

# Consuming Secret as a volume mount in Pod spec
volumeMounts:
  - name: secret-volume
    mountPath: /run/secrets
    readOnly: true
volumes:
  - name: secret-volume
    secret:
      secretName: db-secret`,
      },
      {
        id: "ingress-gateway",
        number: "06",
        title: "Ingress & The Next-Gen Gateway API",
        badge: "HTTPRoute & Layer 7 Routing",
        summary:
          "Routing internet traffic to Services. The Ingress API and Ingress Controllers. Why Ingress is frozen: Introducing the Gateway API (GatewayClass, Gateway, HTTPRoute).",
        details: [
          {
            heading: "Layer 7 Ingress Routing",
            body: "While Services operate at Layer 4 (TCP/UDP), Ingress operates at Layer 7 (HTTP/HTTPS). An Ingress resource defines host-based routing (`api.company.com`) and path-based routing (`/v1/notes`). An Ingress Controller (Nginx, Traefik, HAProxy) monitors the API server and programs the reverse proxy data plane.",
          },
          {
            heading: "Why the Ingress API is Frozen",
            body: "The Kubernetes networking SIG froze the Ingress API because it suffered from structural architectural limitations: it lacked role separation (infrastructure admins vs application developers), relied on non-standardized vendor annotations (`nginx.ingress.kubernetes.io/rewrite-target`), and lacked native support for canary routing, header matching, and gRPC.",
          },
          {
            heading: "The Modern Kubernetes Gateway API",
            body: "Gateway API is the modern successor to Ingress, providing role-oriented decoupled resources:\n1. `GatewayClass`: Defined by infrastructure providers (e.g., AWS, Cilium, Envoy).\n2. `Gateway`: Created by cluster operators; defines ports, TLS certificates, and network attachments.\n3. `HTTPRoute` / `GRPCRoute`: Created by application developers; defines URI routing, path rewrites, header injection, and traffic splitting across multiple Services.",
          },
        ],
        codeSnippet: `# Modern Gateway API HTTPRoute Example
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: notes-route
spec:
  parentRefs:
    - name: prod-gateway
  hostnames:
    - "notes.infrastructure.io"
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /api
      backendRefs:
        - name: notes-api
          port: 80`,
      },
      {
        id: "stateful-workloads",
        number: "07",
        title: "Advanced Workloads: StatefulSets, DaemonSets & Jobs",
        badge: "Ordinal Storage & Batch Schedulers",
        summary:
          "StatefulSets: Stable network identity (db-0, db-1) and dedicated volumeClaimTemplates. DaemonSets for node agents. Jobs & CronJobs for batch tasks.",
        details: [
          {
            heading: "StatefulSets for Persistent Infrastructure",
            body: "Deployments treat Pods as interchangeable cattle. StatefulSets are designed for stateful databases (PostgreSQL, Kafka, Cassandra) where each replica requires:\n1. A stable, predictable ordinal identity (`db-0`, `db-1`, `db-2`).\n2. Stable network identity using a Headless Service (`clusterIP: None`).\n3. Dedicated, persistent storage provisioned via `volumeClaimTemplates` that attaches exclusively to that specific ordinal Pod across reboots.",
          },
          {
            heading: "Storage Subsystem: PV, PVC & StorageClasses",
            body: "- `PersistentVolume` (PV): A piece of actual storage in the cluster provisioned by an admin or CSI driver (AWS EBS, Ceph, local disk).\n- `PersistentVolumeClaim` (PVC): A user's request for storage (e.g. 'Give me 10Gi ReadWriteOnce').\n- `StorageClass`: Defines the dynamic storage provisioner and disk performance tier (SSD vs HDD).",
          },
          {
            heading: "DaemonSets: Node-Local Agents",
            body: "A DaemonSet ensures that an exact copy of a Pod runs on every single eligible node in the cluster (or a subset selected via nodeSelectors). As new nodes are added to the cluster, the DaemonSet controller automatically schedules the pod onto them. Used exclusively for logging agents (Fluentbit), monitoring collectors (Node Exporter), and CNI networking agents.",
          },
          {
            heading: "Jobs & CronJobs",
            body: "Jobs run a batch workload to completion (`restartPolicy: OnFailure`). CronJobs execute Jobs on a scheduled interval (e.g. `0 2 * * *` for nightly backups). Always configure `concurrencyPolicy: Forbid` on database backup CronJobs to prevent simultaneous conflicting backup processes.",
          },
        ],
        codeSnippet: `# StatefulSet with VolumeClaimTemplate
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: "postgres-headless"
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
        - name: postgres
          image: postgres:18
          volumeMounts:
            - name: data
              mountPath: /var/lib/postgresql
  volumeClaimTemplates:
    - metadata:
        name: data
      spec:
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 10Gi`,
      },
      {
        id: "rbac-security",
        number: "08",
        title: "RBAC, Pod Security Standards & Hardening",
        badge: "Restricted PSS & Least Privilege",
        summary:
          "Role-Based Access Control: Roles vs ClusterRoles, RoleBindings vs ClusterRoleBindings. Pod Security Standards (Restricted). Hardening with securityContext.",
        details: [
          {
            heading: "RBAC Architecture & The Principle of Least Privilege",
            body: "Kubernetes authorization evaluates every API request using Role-Based Access Control:\n- `Role`: Sets allowed verbs (`get`, `list`, `watch`, `create`, `delete`) on resources within a namespace.\n- `ClusterRole`: Defines permissions across the entire cluster (nodes, namespaces, PVs).\n- `RoleBinding`: Binds a Role to a User, Group, or ServiceAccount in a namespace.\n- `ClusterRoleBinding`: Binds a ClusterRole cluster-wide (WARNING: Never grant `cluster-admin` casually!).",
          },
          {
            heading: "ServiceAccount Hardening",
            body: "By default, Kubernetes mounts a ServiceAccount API token inside every container at `/var/run/secrets/kubernetes.io/serviceaccount/token`. If your application does not query the Kubernetes API, ALWAYS disable this token mount to prevent credential theft if the container is compromised:\n`automountServiceAccountToken: false`",
          },
          {
            heading: "Pod Security Standards (PSS)",
            body: "Kubernetes enforces three Pod Security admission profiles:\n1. Privileged: Completely unconstrained (root, host network, host mounts).\n2. Baseline: Minimally restrictive; prevents known privilege escalation.\n3. Restricted: Hardened production standard; mandates non-root execution, drops capabilities, and enforces read-only root filesystems.",
          },
          {
            heading: "Production Workload securityContext",
            body: "Every production Pod should declare:\n`runAsNonRoot: true`\n`runAsUser: 10001`\n`allowPrivilegeEscalation: false`\n`readOnlyRootFilesystem: true`\n`capabilities: { drop: [\"ALL\"] }`",
          },
        ],
        codeSnippet: `# Production RBAC Role for Read-Only Pod Inspection
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: devops-lab
  name: pod-reader
rules:
  - apiGroups: [""]
    resources: ["pods", "pods/log"]
    verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  namespace: devops-lab
  name: read-pods-binding
subjects:
  - kind: ServiceAccount
    name: auditor-sa
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io`,
      },
      {
        id: "scheduling-probes",
        number: "09",
        title: "Scheduling, Requests, Limits & Health Probes",
        badge: "CFS Throttling & Probe Triad",
        summary:
          "Scheduler mechanics: Filtering & scoring. Requests (scheduling guarantee) vs Limits (enforced ceiling). The Probe Triad: Startup, Readiness, and Liveness.",
        details: [
          {
            heading: "Two-Phase Scheduling: Predicates & Priorities",
            body: "The `kube-scheduler` selects nodes in two phases:\n1. Filtering (Predicates): Eliminates nodes that do not meet hard constraints (insufficient CPU/memory requests, untolerated taints, missing nodeSelectors).\n2. Scoring (Priorities): Ranks surviving nodes to find the best fit (spreading pods across failure domains, maximizing resource balance).",
          },
          {
            heading: "Requests vs. Limits & Quality of Service (QoS)",
            body: "- CPU Request: Guaranteed CPU share used to schedule the Pod.\n- CPU Limit: Maximum CPU quota enforced via Linux CFS; excess usage results in CPU throttling (latency spikes).\n- Memory Request: Guaranteed RAM allocation.\n- Memory Limit: Hard ceiling; excess usage triggers the kernel OOM killer (Exit Code 137).\nQoS Classes: `Guaranteed` (requests == limits), `Burstable` (requests < limits), `BestEffort` (no requests/limits; evicted first under memory pressure).",
          },
          {
            heading: "The Health Probe Triad",
            body: "- Startup Probe: Gives slow-starting applications time to boot. While active, it disables liveness and readiness checks, preventing premature restart loops.\n- Readiness Probe: Determines if the container is ready to accept user traffic. When it fails, the Pod is removed from Service EndpointSlices (does NOT restart the container).\n- Liveness Probe: Detects if the process has deadlocked or entered an unrecoverable state. When it fails repeatedly, the kubelet restarts the container.",
          },
        ],
        codeSnippet: `# Production Resource & Probe Configuration
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 256Mi

startupProbe:
  httpGet:
    path: /healthz
    port: 8000
  failureThreshold: 30
  periodSeconds: 5

readinessProbe:
  httpGet:
    path: /readyz
    port: 8000
  periodSeconds: 5

livenessProbe:
  httpGet:
    path: /healthz
    port: 8000
  periodSeconds: 10`,
      },
      {
        id: "autoscaling-sre",
        number: "10",
        title: "Autoscaling & SRE Production Troubleshooting",
        badge: "HPA v2 & Incident Triage",
        summary:
          "Horizontal Pod Autoscaling (HPA) vs Node Autoscaling. The SRE triage playbook: Debugging Pending, CrashLoopBackOff, ImagePullBackOff, and OOMKilled.",
        details: [
          {
            heading: "Horizontal Pod Autoscaler (HPA v2)",
            body: "The HPA controller queries the Kubernetes Metrics Server every 15 seconds. It computes the desired replica count based on observed metrics:\n`desiredReplicas = ceil[ currentReplicas * ( currentMetricValue / targetMetricValue ) ]`\nIf average CPU exceeds 60% of requested CPU, HPA scales up replicas up to `maxReplicas`.",
          },
          {
            heading: "HPA vs. Cluster Autoscaler",
            body: "HPA only scales the number of Pod replicas. It CANNOT create physical or virtual machines! If the cluster runs out of CPU capacity, new pods created by HPA will sit in `Pending` state. The Cluster Autoscaler or Karpenter monitors unschedulable Pending pods and calls cloud APIs to launch additional worker nodes.",
          },
          {
            heading: "The SRE Troubleshooting Doctrine",
            body: "When an outage occurs, follow the 4-step triage sequence:\n1. `kubectl get pods -o wide`: Identify failing pods and host node placement.\n2. `kubectl describe pod <name>`: Read the Events table at the bottom (identifies scheduling, volume, image, and probe failures).\n3. `kubectl logs <name> --previous`: Inspect stdout/stderr of the crashed container before it restarted.\n4. `kubectl get events --sort-by=.metadata.creationTimestamp`: Review cluster-wide event timeline.",
          },
        ],
        codeSnippet: `# HorizontalPodAutoscaler Manifest
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: notes-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: notes-api
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 60`,
      },
    ],
    []
  );

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (14 IN-DEPTH QUESTIONS)
  // =========================================================================
  const masteryQuestions = [
    {
      q: "Why is a container not simply a small virtual machine in Kubernetes?",
      options: [
        "Containers share the host operating system kernel and isolate processes using Linux namespaces and cgroups, whereas VMs run a dedicated guest OS kernel atop a hypervisor.",
        "Containers only run Python applications while VMs run C++.",
        "Containers are managed by Docker while VMs are managed by Git.",
        "VMs can only exist on physical tape drives."
      ],
      correctIndex: 0,
      a: "Containers are isolated processes executing directly on the host Linux kernel, sharing kernel memory, system call tables, and page caches while isolated by namespaces and throttled by cgroups. In contrast, virtual machines run an independent guest operating system kernel atop virtualized hardware emulated by a hypervisor, incurring substantial CPU and memory overhead.",
    },
    {
      q: "What roles do namespaces and cgroups play in Linux containerization within Kubernetes nodes?",
      options: [
        "Namespaces isolate what a container can see (PID, network, mounts, IPC, UTS, user), while cgroups control how many resources a container can consume (CPU, RAM, disk I/O, PIDs).",
        "Namespaces manage cloud billing while cgroups manage Git branches.",
        "They are obsolete features replaced by Kubernetes YAML manifests.",
        "cgroups manage DNS records and namespaces manage port forwarding."
      ],
      correctIndex: 0,
      a: "Namespaces provide visibility boundaries, giving the container process its own isolated PID table, virtual network interfaces, filesystem mount tree, IPC queues, and hostname. Control groups (cgroups) provide resource boundaries, enforcing limits on CPU shares, memory ceilings, disk I/O throughput, and process counts to prevent noisy-neighbor host exhaustion.",
    },
    {
      q: "How do the API server, etcd, scheduler, controller-manager, and kubelet coordinate to run a Deployment?",
      options: [
        "User applies manifest to API server -> state stored in etcd -> Deployment controller creates ReplicaSet -> Scheduler assigns pods to nodes -> Kubelet reads PodSpec and commands container runtime to launch containers.",
        "Kubelet directly writes to etcd without using the API server.",
        "The scheduler creates containers and the API server runs the network.",
        "etcd communicates directly with Docker Desktop on worker nodes."
      ],
      correctIndex: 0,
      a: "The API server is the single entry point and state gatekeeper. Applying a Deployment stores the desired state in etcd. The Deployment Controller detects the new spec and creates a ReplicaSet. The ReplicaSet Controller creates Pods in 'Pending' state. The Scheduler scores nodes and binds the Pod to a node. The Kubelet on that node watches for assigned Pods, pulls images via CRI, configures CNI networking, and starts containers.",
    },
    {
      q: "How does the ordering of Dockerfile instructions affect build caching and Kubernetes image rollout speed?",
      options: [
        "Docker caches layers sequentially; changing an instruction invalidates its cache and forces all subsequent layers to rebuild. Copying dependencies before code maximizes cache hits and speeds up node image pulls.",
        "Kubernetes automatically ignores Dockerfile layers during rollouts.",
        "Layer ordering only matters when running on Windows worker nodes.",
        "Putting instructions at the top makes them rebuild slower."
      ],
      correctIndex: 0,
      a: "Docker evaluates instructions from top to bottom, reusing cached layers whose inputs have not changed. Placing infrequently changing dependencies (`requirements.txt`) before frequently changing code (`app.py`) allows dependency installation to be cached across routine code edits, resulting in smaller layer diffs and dramatically faster image pull times across Kubernetes worker nodes.",
    },
    {
      q: "Why would an SRE engineer choose a StatefulSet over a Deployment for a database like PostgreSQL?",
      options: [
        "StatefulSets provide stable ordinal network identities (e.g., db-0), deterministic startup/teardown order, and dedicated volumeClaimTemplates that bind a persistent disk exclusively to that specific replica across restarts.",
        "Deployments cannot run SQL queries.",
        "StatefulSets automatically encrypt all database tables.",
        "StatefulSets do not require Linux kernel memory."
      ],
      correctIndex: 0,
      a: "Deployments treat Pods as interchangeable cattle with random hash names and shared storage. StatefulSets provide stable ordinal identities (`postgres-0`), headless DNS records (`postgres-0.postgres.default.svc.cluster.local`), and persistent storage through `volumeClaimTemplates` that re-attach the exact same persistent disk to the pod even if it is rescheduled to another node.",
    },
    {
      q: "When should an engineer use a PersistentVolumeClaim (PVC) rather than an emptyDir or hostPath?",
      options: [
        "Use PVCs for durable application data that must survive Pod restarts, evictions, and node reboots; use emptyDir for transient caches and hostPath only for node-level daemon agents.",
        "Use hostPath for production databases across all cloud nodes.",
        "emptyDir is permanent and survives cluster deletion.",
        "PVCs can only store HTML files."
      ],
      correctIndex: 0,
      a: "A PersistentVolumeClaim requests durable, networked cloud storage (EBS, Persistent Disk, Ceph) that exists independently of Pod and Node lifecycles. `emptyDir` is ephemeral storage tied to the Pod's lifecycle (wiped upon Pod termination). `hostPath` ties storage to a specific host machine, breaking workload portability.",
    },
    {
      q: "What is the critical operational difference between a container's internal port and a Kubernetes Service port?",
      options: [
        "The containerPort (targetPort) is where the process listens inside the pod; the Service port is the stable virtual port on the ClusterIP that forwards traffic to targetPort across ready backends.",
        "Service ports use UDP while container ports only use TCP.",
        "They must always be the exact same number or the Linux kernel panics.",
        "Service ports are only accessible from outside the cloud VPC."
      ],
      correctIndex: 0,
      a: "A container port (`targetPort`, e.g. 8000) is the socket port opened by the application inside its virtual network namespace. A Service port (e.g. 80) is the virtual port exposed by the Service ClusterIP. When traffic hits `ServiceIP:80`, `kube-proxy` translates and forwards packets to `PodIP:8000` across ready endpoints in the EndpointSlice.",
    },
    {
      q: "Why should an application container NOT need its database Service published as a NodePort or LoadBalancer?",
      options: [
        "Because internal application Pods can reach the database using its internal ClusterIP or DNS name (db:5432) over the overlay network, avoiding unnecessary exposure to the host network or public internet.",
        "Because databases cannot bind to network sockets inside Kubernetes.",
        "Because publishing ports makes databases run out of memory.",
        "Because Kubernetes automatically deletes published database ports."
      ],
      correctIndex: 0,
      a: "In Kubernetes, all Pods can communicate with all other Pods across the cluster overlay network without NAT. Using an internal `ClusterIP` Service allows the API to reach PostgreSQL at `postgres.default.svc.cluster.local:5432` internally. Exposing database ports publicly via NodePort or LoadBalancer creates severe security vulnerabilities.",
    },
    {
      q: "Why is a mutable tag (like :latest or :1.0) less reliable than an image digest (@sha256:...) in production Kubernetes manifests?",
      options: [
        "Tags are mutable references that can be overwritten in the registry, resulting in different nodes pulling different code versions; digests are immutable cryptographic hashes guaranteeing identical binaries.",
        "Tags cannot be read by Kubernetes worker nodes.",
        "Digests change every time a container restarts.",
        "Tags can only have 5 characters while digests have 64."
      ],
      correctIndex: 0,
      a: "An image tag (such as `notes-api:latest` or `1.0`) is a movable text pointer. If a developer pushes an update under the same tag, new nodes or restarted pods will pull the updated image while older nodes run the previous version. An immutable SHA-256 digest (`image@sha256:...`) guarantees that every node runs the exact same cryptographic artifact.",
    },
    {
      q: "Why is placing a secret in a Pod's 'env' or Dockerfile 'ARG' considered a security hazard?",
      options: [
        "Environment variables can leak into process inspection tools (/proc/<pid>/environ), crash dumps, and application logs; ARG values persist in immutable image layer metadata.",
        "Because environment variables cause the Linux kernel to crash.",
        "Because secrets in env variables are automatically emailed to Docker Hub.",
        "Because Kubernetes cannot read environment variables."
      ],
      correctIndex: 0,
      a: "Values passed into Dockerfile `ARG` or `ENV` persist permanently in image layer metadata viewable via `docker history`. In Kubernetes, environment variables leak into container inspect outputs and error tracebacks. Best practice: mount Secrets as read-only files in a tmpfs memory volume.",
    },
    {
      q: "What does a Readiness Probe establish, and what does it NOT guarantee?",
      options: [
        "It verifies whether a Pod is currently ready to receive traffic (controlling EndpointSlice registration); it does not guarantee that the application will not crash or fail under future concurrent load.",
        "It guarantees 100% bug-free code forever.",
        "It proves that the container is running on Kubernetes.",
        "It guarantees that the database has infinite disk space."
      ],
      correctIndex: 0,
      a: "A Readiness Probe tests whether the Pod can serve traffic at that specific moment. If it fails, Kubernetes removes the Pod from Service EndpointSlices so users do not receive errors. It does NOT restart the container, nor does it guarantee the application can handle unexpected traffic surges.",
    },
    {
      q: "How would an SRE diagnose an application Pod displaying 'Running' while users receive HTTP 500 errors?",
      options: [
        "Inspect application stdout/stderr logs via 'kubectl logs', verify database readiness via /readyz probe, inspect downstream connection pools, and check recent ConfigMap/Secret changes.",
        "Restart the Kubernetes cluster immediately.",
        "Delete the namespace and re-install kind.",
        "Change the container name to 'root'."
      ],
      correctIndex: 0,
      a: "'Running' simply means the container process is executing according to the Linux kernel; it does not mean the application logic is functioning. The SRE must run `kubectl logs <pod-name>` to inspect application stack traces, verify database connectivity and credentials, and inspect readiness endpoint responses.",
    },
    {
      q: "How can you prove that PostgreSQL database data survives both Pod recreation and node failure?",
      options: [
        "Write a record to PostgreSQL, delete the database Pod (kubectl delete pod postgres-0), wait for the StatefulSet to recreate it, and verify the record is still present from the mounted PVC.",
        "Take a screenshot of the terminal.",
        "Delete the PVC and check if the database crashes.",
        "Restart kind without volumes."
      ],
      correctIndex: 0,
      a: "Insert a unique row into the database, delete the pod (`kubectl delete pod postgres-0`), and observe the StatefulSet controller create a replacement pod that re-attaches the existing `PersistentVolumeClaim`. Query the table to confirm the data persisted intact.",
    },
    {
      q: "What evidence should an SRE review before promoting a Kubernetes workload manifest to production?",
      options: [
        "Resource requests and limits configured, startup/readiness/liveness probes defined, non-root securityContext enforced, secrets externalized, rolling update strategy validated, and PDB configured.",
        "Only the number of replicas in the YAML file.",
        "Whether the manifest has comments on every line.",
        "Confirmation that the code was generated by an AI model."
      ],
      correctIndex: 0,
      a: "Production review criteria require: 1. CPU/Memory requests & limits to guarantee QoS; 2. Robust startup, readiness, and liveness probes; 3. Hardened securityContext (`runAsNonRoot: true`, `readOnlyRootFilesystem: true`, capabilities dropped); 4. Secrets delivered via encrypted KMS-backed storage; 5. PodDisruptionBudgets (PDB) and rolling update parameters configured.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="k8s"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova K8s AI"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <Boxes size={14} />
              <span>University-Informed Systems Foundations & Workload Orchestration</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Module 4 — Kubernetes & Distributed Systems
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Build, deploy, troubleshoot, secure, scale and operate a Kubernetes cluster across distributed machines.
              Grounded in distributed systems principles from <span className="font-semibold text-stone-900">MIT (6.824)</span>,{" "}
              <span className="font-semibold text-stone-900">Stanford (CS111/CS244)</span>,{" "}
              <span className="font-semibold text-stone-900">Cambridge</span>,{" "}
              <span className="font-semibold text-stone-900">NUS (CS2106)</span>, and the official Kubernetes documentation.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (10 Topics)", icon: BookOpen },
              { id: "control-plane-lab", label: "Lab 1: Control Loop & Pod Lifecycle", icon: Activity },
              { id: "service-lab", label: "Lab 2: Service & EndpointSlice Routing", icon: Network },
              { id: "sre-gameday", label: "Lab 3: SRE Incident Troubleshooting", icon: ShieldCheck },
              { id: "mastery", label: "Mastery Assessment (14 Questions)", icon: CheckCircle2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm ${
                    isActive
                      ? "bg-orange-500 text-white shadow-orange-500/20 shadow-md"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI TUTOR EMBED */}
        {showAiTutor && (
          <div className="mb-10 rounded-2xl border border-orange-200 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-orange-600" />
                <h3 className="text-base font-bold text-stone-900">Nova AI: Kubernetes & Orchestration Mentor</h3>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-xs font-semibold text-stone-500 hover:text-stone-800"
              >
                Close
              </button>
            </div>
            <div className="pt-4">
              <LearningRo
                currentTopic="devops-kubernetes-orchestration"
                moduleName="Module 4 — Kubernetes & Distributed Systems"
              />
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 1: THEORY & CURRICULUM TOPICS (10 TOPICS)                       */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* LEFT TOPIC SELECTOR */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 px-2 block">
                Syllabus Topics
              </span>
              {topics.map((t, idx) => {
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all border ${
                      isSelected
                        ? "bg-[#18181b] text-white border-[#27272a] shadow-lg shadow-stone-900/10"
                        : "bg-white/80 text-stone-800 border-stone-200/80 hover:bg-white hover:border-orange-200"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? "text-orange-400" : "text-stone-600"
                        }`}
                      >
                        Topic {t.number}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-white/10 text-stone-300"
                            : "bg-stone-100 text-stone-600 border border-stone-200"
                        }`}
                      >
                        {t.badge}
                      </span>
                    </div>
                    <div className="font-bold text-sm leading-snug">{t.title}</div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT DETAIL VIEW */}
            <div className="lg:col-span-8 space-y-6">
              <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-100">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-orange-600 tracking-wider">
                      Topic {topics[selectedTopic].number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                      {topics[selectedTopic].title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full">
                    {topics[selectedTopic].badge}
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-stone-700 leading-relaxed font-sans bg-stone-50 p-4 rounded-xl border border-stone-200">
                  {topics[selectedTopic].summary}
                </p>

                {/* Subsections */}
                <div className="mt-8 space-y-6">
                  {topics[selectedTopic].details.map((detail, dIdx) => (
                    <div key={dIdx} className="border-l-2 border-orange-500 pl-4 py-1">
                      <h3 className="text-base font-bold text-stone-900">{detail.heading}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed whitespace-pre-line font-sans">
                        {detail.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CODE DEMONSTRATION SNIPPET */}
                <div className="mt-8">
                  <div className="flex items-center justify-between bg-[#18181b] text-stone-300 px-4 py-2 rounded-t-xl text-xs font-mono">
                    <span className="flex items-center gap-2">
                      <Terminal size={14} className="text-orange-400" />
                      Production Kubernetes Manifest / CLI Reference
                    </span>
                    <span className="text-[10px] text-stone-400">kubectl / yaml</span>
                  </div>
                  <pre className="p-4 bg-[#18181b] text-stone-100 text-xs font-mono rounded-b-xl overflow-x-auto border-t border-stone-800 leading-relaxed">
                    <code>{topics[selectedTopic].codeSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* NEXT / PREV BUTTONS */}
              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={selectedTopic === 0}
                  onClick={() => setSelectedTopic(selectedTopic - 1)}
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 disabled:opacity-40 transition"
                >
                  <ArrowLeft size={14} /> Previous Topic
                </button>
                <button
                  disabled={selectedTopic === topics.length - 1}
                  onClick={() => setSelectedTopic(selectedTopic + 1)}
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-xs font-bold text-white hover:bg-orange-600 disabled:opacity-40 transition"
                >
                  Next Topic <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: LAB 1 - CONTROL LOOP & POD LIFECYCLE SIMULATOR               */}
        {/* =================================================================== */}
        {activeTab === "control-plane-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Activity size={14} />
                <span>Lab 1: Control Loop & Self-Healing Engine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Control Loop & Pod Lifecycle State Machine Simulator
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                As taught in <strong className="text-stone-900 font-semibold">MIT 6.824</strong> and{" "}
                <strong className="text-stone-900 font-semibold">Cambridge Concurrent Systems</strong>, Kubernetes is an
                asynchronous state-reconciliation engine. Test scale adjustments, trigger node outages, and simulate
                zero-downtime rolling updates.
              </p>
            </div>

            {/* CONTROLS TOOLBAR */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Replicas Control */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">
                    Desired Replicas (spec.replicas): <span className="text-orange-600 font-black">{desiredReplicas}</span>
                  </span>
                  <div className="flex gap-2">
                    {[1, 2, 3, 5].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleScaleReplicas(num)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition ${
                          desiredReplicas === num
                            ? "bg-orange-500 text-white shadow-sm"
                            : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                        }`}
                      >
                        {num} Replicas
                      </button>
                    ))}
                  </div>
                </div>

                {/* Node Fault Injection */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">Node Fault Injection:</span>
                  <button
                    onClick={handleToggleNode2}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      node2Status === "Ready"
                        ? "bg-rose-50 text-rose-800 border border-rose-300 hover:bg-rose-100"
                        : "bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100"
                    }`}
                  >
                    <AlertTriangle size={14} />
                    <span>{node2Status === "Ready" ? "Simulate node-2 Failure" : "Restore node-2 to Ready"}</span>
                  </button>
                </div>

                {/* Rolling Update Trigger */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-stone-500 block">Release Rollout:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={handleTriggerRollingUpdate}
                      disabled={isRollingUpdate}
                      className="px-3.5 py-1.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 disabled:opacity-40 transition shadow-sm flex items-center gap-1.5"
                    >
                      <RefreshCw size={12} className={isRollingUpdate ? "animate-spin text-orange-400" : "text-orange-400"} />
                      <span>Rollout {appVersion === "v1.0.0" ? "v2.0.0" : "v1.0.0"}</span>
                    </button>
                    <button
                      onClick={handleRolloutUndo}
                      className="px-3 py-1.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:bg-stone-100 transition"
                    >
                      Rollback
                    </button>
                  </div>
                </div>
              </div>

              {/* NODE STATUS BAR */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-200 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server size={14} className="text-emerald-600" />
                    <span className="font-bold text-stone-900">node-1 (Control + Worker)</span>
                  </div>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold text-[10px]">
                    Status: Ready
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server size={14} className={node2Status === "Ready" ? "text-emerald-600" : "text-rose-600"} />
                    <span className="font-bold text-stone-900">node-2 (Worker)</span>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      node2Status === "Ready"
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-rose-700 bg-rose-50 border border-rose-200 animate-pulse"
                    }`}
                  >
                    Status: {node2Status}
                  </span>
                </div>
              </div>
            </div>

            {/* POD POD-TABLE & EVENT STREAM */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Pod List */}
              <div className="lg:col-span-7 rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-stone-100 pb-2 text-xs font-mono">
                  <span className="font-bold text-stone-900 flex items-center gap-1.5">
                    <Boxes size={14} className="text-orange-500" />
                    <span>Active Pods ({activePods.length} Replicas)</span>
                  </span>
                  <span className="text-stone-500 text-[11px]">Namespace: default</span>
                </div>

                <div className="space-y-2">
                  {activePods.map((pod, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs flex flex-wrap items-center justify-between gap-2"
                    >
                      <div>
                        <div className="font-bold text-stone-900 flex items-center gap-1.5">
                          <span>{pod.name}</span>
                          <span className="text-[10px] bg-orange-100 text-orange-800 px-1.5 py-0.2 rounded font-mono">
                            {pod.version}
                          </span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5">
                          Assigned: <span className="font-semibold text-stone-700">{pod.node}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-stone-500">Ready: {pod.ready}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            pod.status === "Running"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800 animate-pulse"
                          }`}
                        >
                          {pod.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Stream */}
              <div className="lg:col-span-5 rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Activity size={12} className="text-orange-400" />
                    <span>Control Plane Event Stream</span>
                  </span>
                  <span>kube-apiserver</span>
                </div>
                <div className="space-y-1.5 pt-1 max-h-60 overflow-y-auto">
                  {controllerEvents.map((ev, eIdx) => (
                    <div key={eIdx} className="text-stone-300 flex items-start gap-2 text-[11px] leading-relaxed">
                      <span className="text-orange-500 select-none">&gt;</span>
                      <span className={eIdx === 0 ? "text-emerald-400 font-bold" : ""}>{ev}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - SERVICE & ENDPOINTSLICE ROUTING SANDBOX              */}
        {/* =================================================================== */}
        {activeTab === "service-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Network size={14} />
                <span>Lab 2: Virtual IPs & Dynamic Endpoint Registration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Service Discovery & EndpointSlice Routing Sandbox
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Observe how Kubernetes Services route traffic across Pods using virtual ClusterIPs and EndpointSlices.
                Experience how failing a Pod's <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">readinessProbe</code>{" "}
                immediately removes it from the routing table without restarting the container.
              </p>
            </div>

            {/* ROUTING DIAGRAM / TOPOLOGY */}
            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <Network size={16} className="text-orange-600" />
                  <span className="font-bold text-xs sm:text-sm text-stone-900">
                    ClusterIP Service: notes-api (Virtual IP: 10.96.0.100:80)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSendRequest}
                    className="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 transition shadow-sm flex items-center gap-1.5"
                  >
                    <SendRequestIcon />
                    <span>Send HTTP Request (curl)</span>
                  </button>
                </div>
              </div>

              {/* Pod Target Nodes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { key: "podA", name: "notes-api-pod-A", ip: "10.244.1.14" },
                  { key: "podB", name: "notes-api-pod-B", ip: "10.244.2.22" },
                  { key: "podC", name: "notes-api-pod-C", ip: "10.244.1.19" },
                ].map((pod) => {
                  const isHealthy = podHealthState[pod.key];
                  return (
                    <div
                      key={pod.key}
                      className={`p-4 rounded-xl border transition space-y-2 ${
                        isHealthy
                          ? "bg-white border-emerald-300 text-stone-800 shadow-sm"
                          : "bg-rose-50 border-rose-300 text-rose-950"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold">{pod.name}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            isHealthy ? "bg-emerald-100 text-emerald-800" : "bg-rose-200 text-rose-900"
                          }`}
                        >
                          {isHealthy ? "READY (In Slice)" : "UNREADY (Excluded)"}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-stone-500">IP: {pod.ip} :8000</div>
                      <button
                        onClick={() => handleTogglePodReadiness(pod.key)}
                        className={`w-full mt-2 py-1.5 px-3 rounded-lg text-xs font-bold transition border ${
                          isHealthy
                            ? "border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100"
                            : "border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        }`}
                      >
                        {isHealthy ? "Fail /readyz Probe" : "Pass /readyz Probe"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TRAFFIC DISPATCH LOG */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-stone-200 bg-white p-5 space-y-2">
                <span className="font-bold text-xs text-stone-900 block border-b border-stone-100 pb-2">
                  Recent Request Dispatches:
                </span>
                {routedPodHistory.length === 0 ? (
                  <div className="text-xs text-stone-400 font-mono py-4 text-center">
                    Click 'Send HTTP Request' to test load-balanced routing.
                  </div>
                ) : (
                  <div className="space-y-1.5 font-mono text-xs">
                    {routedPodHistory.map((item, idx) => (
                      <div key={idx} className="p-2 bg-stone-50 rounded-lg text-stone-700 flex items-center gap-2">
                        <span className="text-orange-500 font-bold">✓</span>
                        <span>Routed to: {item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                  <span>CoreDNS & EndpointSlice Telemetry</span>
                  <span>10.96.0.100 ClusterIP</span>
                </div>
                <div className="space-y-1 pt-1 max-h-48 overflow-y-auto">
                  {trafficLog.map((log, lIdx) => (
                    <div key={lIdx} className="text-stone-300 flex items-start gap-2 text-[11px]">
                      <span className="text-orange-500 select-none">&gt;</span>
                      <span className={lIdx === 0 ? "text-emerald-400 font-bold" : ""}>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - SRE INCIDENT TROUBLESHOOTING GAMEDAY                 */}
        {/* =================================================================== */}
        {activeTab === "sre-gameday" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <ShieldCheck size={14} />
                <span>Lab 3: SRE Production Incident Diagnostics</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                SRE Incident Troubleshooting & Triage GameDay
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Troubleshoot Kubernetes like a Site Reliability Engineer. Analyze real-world cluster failure states:
                CrashLoopBackOff, Unsatisfiable CPU Requests, OOMKilled containers, Private Registry ImagePullBackOff,
                and Service label selector mismatches.
              </p>
            </div>

            {/* INCIDENT SELECTOR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {incidentScenarios.map((sc, sIdx) => {
                const isSelected = selectedIncidentIndex === sIdx;
                const isAnswered = incidentAnswers[sc.id] !== undefined;
                return (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedIncidentIndex(sIdx)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? "bg-[#18181b] text-white border-stone-800 shadow-md"
                        : "bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isSelected ? "text-orange-400 font-bold" : "text-stone-500 font-bold"}>
                        Case #{sIdx + 1}
                      </span>
                      {isAnswered && (
                        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.5 rounded font-bold">
                          ✓ Solved
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-xs truncate">{sc.title.split(":")[1] || sc.title}</div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE INCIDENT CARD */}
            {(() => {
              const currentInc = incidentScenarios[selectedIncidentIndex];
              const answer = incidentAnswers[currentInc.id];

              return (
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-8 space-y-6">
                  {/* Incident Header */}
                  <div className="pb-4 border-b border-stone-200 space-y-1">
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      Failure Investigation
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">{currentInc.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 pt-1">
                      <strong className="text-stone-800">Observed Symptom: </strong>
                      {currentInc.symptom}
                    </p>
                  </div>

                  {/* Code Snippet Inspection */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-stone-500 block mb-2">
                      kubectl describe / Event Log Output:
                    </span>
                    <pre className="p-4 rounded-xl bg-[#18181b] text-xs font-mono overflow-x-auto text-stone-200 border border-stone-800 leading-relaxed">
                      <code>{currentInc.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Question & Options */}
                  <div className="space-y-4 pt-2">
                    <span className="text-sm font-bold text-stone-900 block">{currentInc.question}</span>

                    <div className="space-y-2.5">
                      {currentInc.options.map((opt) => {
                        const isChosen = answer === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleIncidentAnswer(currentInc.id, opt.id)}
                            className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all ${
                              isChosen
                                ? opt.correct
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm"
                                  : "bg-rose-50 border-rose-300 text-rose-900 shadow-sm"
                                : "bg-white border-stone-200 text-stone-800 hover:bg-stone-100"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono ${
                                  isChosen
                                    ? opt.correct
                                      ? "bg-emerald-600 text-white border-emerald-600"
                                      : "bg-rose-600 text-white border-rose-600"
                                    : "border-stone-300 text-stone-500 bg-stone-50"
                                }`}
                              >
                                {opt.id.slice(-1).toUpperCase()}
                              </span>
                              <div className="space-y-1">
                                <span className="font-semibold block">{opt.label}</span>
                                {isChosen && (
                                  <p
                                    className={`text-xs mt-2 pt-2 border-t leading-relaxed ${
                                      opt.correct
                                        ? "border-emerald-200 text-emerald-800 font-sans"
                                        : "border-rose-200 text-rose-800 font-sans"
                                    }`}
                                  >
                                    <strong className="font-bold">
                                      {opt.correct ? "✓ SRE Remediation Action: " : "✗ Root Cause Defect: "}
                                    </strong>
                                    {opt.explanation}
                                  </p>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: MASTERY ASSESSMENT (14 QUESTIONS)                            */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <CheckCircle2 size={14} />
                <span>Final Mastery Assessment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                14-Question Comprehensive Kubernetes Assessment
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Demonstrate complete systems-level mastery over the Kubernetes control plane, distributed consensus
                with etcd, workload controllers, virtual networking, security contexts, and SRE incident triage.
              </p>
            </div>

            <div className="space-y-4">
              {masteryQuestions.map((mq, idx) => {
                const isOpen = openMasteryIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stone-200 bg-stone-50/40 overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-bold text-stone-800 hover:text-orange-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-orange-600 font-bold">Q{idx + 1}.</span>
                        <span>{mq.q}</span>
                      </span>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white space-y-3">
                        <div className="space-y-1.5 pt-2">
                          <span className="font-mono text-[10px] font-bold uppercase text-stone-400 block">
                            Key Options & Evaluation:
                          </span>
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-2.5 rounded-lg text-xs font-mono flex items-start gap-2 ${
                                oIdx === mq.correctIndex
                                  ? "bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold"
                                  : "text-stone-500"
                              }`}
                            >
                              <span>{oIdx === mq.correctIndex ? "✓" : "•"}</span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-stone-100">
                          <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block mb-1">
                            Authoritative Systems Engineering Answer:
                          </span>
                          <p className="text-stone-700 font-sans">{mq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              DevOps & SRE Track • Module 4 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Kubernetes & Distributed Systems Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand the Kubernetes reconciliation control loop, etcd Raft consensus, zero-downtime rolling
              updates, EndpointSlice routing, StatefulSets with PVC storage, and SRE incident triage.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/docker")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 3: Docker
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/iac")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition flex items-center gap-1.5"
            >
              <span>Next: Module 5 — Infrastructure as Code</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SendRequestIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
