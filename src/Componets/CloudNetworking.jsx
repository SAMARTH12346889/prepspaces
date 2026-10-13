import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  Globe,
  HelpCircle,
  Layers,
  Lightbulb,
  MessageSquare,
  Network,
  Play,
  RefreshCw,
  Server,
  Shield,
  ShieldAlert,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  Sliders,
  AlertTriangle,
  Building2,
  Boxes,
  Copy,
  Activity,
  Award,
  Radio,
  FileCode,
  Share2,
  Lock,
  Search,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* CLOUD COMPUTING MODULE 2: CLOUD NETWORKING                                 */
/* Weeks 3–4: From Packets to a Production-Grade VPC/VNet                      */
/* Theory: Stanford CS144, Kurose & Ross, IETF RFCs (9293, 1034, 9110, 8446) */
/* -------------------------------------------------------------------------- */

export default function CloudNetworking() {
  const navigate = useNavigate();

  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  // CIDR Calculator State
  const [cidrInput, setCidrInput] = useState("10.20.0.0/20");

  // Packet Simulator State
  const [packetScenarioIndex, setPacketScenarioIndex] = useState(0);
  const [packetSelection, setPacketSelection] = useState(null);
  const [packetScore, setPacketScore] = useState(0);
  const [packetHistory, setPacketHistory] = useState({});

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const networkingTopics = useMemo(
    () => [
      {
        id: "entire-networking-stack",
        title: "The Entire Networking Flow in One Picture",
        shortTitle: "1. Networking in One Picture",
        category: "Foundations",
        icon: Globe,
        summary:
          "Trace an HTTPS request from user browser to backend database across every layer: DNS, Edge CDN, Application Load Balancer, Subnets, Route Tables, NAT, and Security Groups.",
        theory: [
          "A cloud architect must never look at cloud resources as isolated islands. Every virtual compute instance, container, and database lives inside a software-defined networking topology.",
          "When a user opens https://www.example.com, their browser doesn't communicate with an abstract 'cloud'. It sends a packet through a precise physical and virtual path:",
          "1. DNS Lookup (Route 53 / Cloudflare) resolves the domain name into an Anycast IP address.",
          "2. The request hits a Point of Presence (PoP) on the Edge CDN (CloudFront / Cloud CDN) for static caching.",
          "3. Dynamic requests pass through to an Internet Gateway (IGW) and terminate on an Application Load Balancer (ALB) across multiple Availability Zones.",
          "4. The ALB inspects Layer 7 HTTP headers and routes traffic across internal VPC subnets to private application servers.",
          "5. Application servers query the isolated database subnet on TCP port 5432.",
          "6. Outbound dependency calls (e.g. third-party Stripe APIs) route from the private app subnet through a managed NAT Gateway to the Internet Gateway without ever exposing the app server to inbound public traffic.",
        ],
        keyPoints: [
          "Networking connects compute, storage, databases, and users into a cohesive architecture.",
          "Inbound path: User → DNS → Edge CDN → Internet Gateway → Public ALB → Private App Subnet → Private DB Subnet.",
          "Outbound private path: Private App → Route Table → NAT Gateway → Internet Gateway → External API.",
          "Stanford CS144 Principle: Clean separation of concerns across layered protocols guarantees internet scalability.",
          "Never assign public IPs to application or database tiers in production.",
        ],
        diagramType: "full-networking-flow",
        architectDecision:
          "Place your Load Balancers in public subnets, but place your compute instances in private subnets with no public IPs. This shrinks your public Internet attack surface from 50 virtual machines down to 1 monitored load balancing gateway.",
        interviewQuestions: [
          {
            q: "Why do we place the Application Load Balancer in a public subnet while placing application VMs in private subnets?",
            a: "Public subnets have direct route table entries to the Internet Gateway (0.0.0.0/0 → igw), allowing internet users to reach the ALB's public IP. The private app subnets only accept connections forwarded by the ALB on internal private IPs (10.20.x.x), blocking all unsolicited internet traffic.",
          },
          {
            q: "If an app server in a private subnet has no public IP, how does it download Linux security updates?",
            a: "Through a Network Address Translation (NAT) Gateway residing in the public subnet. The app subnet's route table sends 0.0.0.0/0 traffic to the NAT Gateway, which translates the private IP to its elastic public IP for outbound requests only.",
          },
        ],
      },

      {
        id: "packet-mental-model",
        title: "The Packet Mental Model & Encapsulation",
        shortTitle: "2. Packets & Encapsulation",
        category: "Protocols & Layers",
        icon: Boxes,
        summary:
          "Everything in networking is packets. Understand protocol encapsulation: wrapping Application Data in TCP segments, IP packets, and Ethernet frames.",
        theory: [
          "Stop thinking of network connections as continuous copper pipes. All network communication consists of discrete, bounded blocks of serialized bytes called packets.",
          "Stanford CS144 emphasizes the OSI & TCP/IP layered abstraction: each layer solves one distinct problem and is oblivious to the contents of the layers above and below it.",
          "Encapsulation is the process where each layer prepends its own header containing metadata necessary for that layer's protocol:",
          "• Application Layer (HTTP/DNS): Contains the payload (e.g. GET /api/orders HTTP/1.1).",
          "• Transport Layer (TCP/UDP): Adds TCP Header with Source Port (e.g. 52314), Destination Port (443), Sequence Numbers, and Acknowledgments.",
          "• Internet Layer (IP): Adds IP Header with Source IP (10.20.1.15), Destination IP (10.20.50.20), TTL, and Protocol type (6 for TCP).",
          "• Link Layer (Ethernet): Adds Ethernet Frame Header with Source MAC, Destination Next-Hop Router MAC, and Frame Check Sequence (CRC).",
          "Decapsulation occurs on the receiving host: the link layer checks the MAC and strips the Ethernet header; the IP layer verifies the destination IP and strips the IP header; the TCP layer reassembles the byte stream and dispatches the payload to the socket listening on the destination port.",
        ],
        keyPoints: [
          "Application produces Data → Transport wraps into Segment → Network wraps into Packet → Link wraps into Frame.",
          "Routers only inspect the IP Header to determine the next hop; they do not decrypt or examine HTTP payloads.",
          "Switches only inspect the Ethernet Frame Header (MAC address).",
          "Maximum Transmission Unit (MTU): The maximum frame size (typically 1500 bytes for standard Ethernet; 9001 bytes for cloud Jumbo Frames).",
        ],
        diagramType: "packet-encapsulation",
        architectDecision:
          "Enable Jumbo Frames (MTU 9001) for inter-instance traffic inside your VPC cluster. By sending 9000 bytes per packet instead of 1500 bytes, you reduce CPU packet processing overhead by 80% for high-throughput database replication and analytics jobs.",
        interviewQuestions: [
          {
            q: "What is the difference between an IP address and a MAC address in packet delivery?",
            a: "An IP address identifies the logical end-to-end destination across the global internet. A MAC address identifies the physical network interface card (NIC) for the immediate next-hop device on the local Ethernet link. As a packet hops across routers, the destination IP stays constant, but the destination MAC address changes at every hop.",
          },
        ],
      },

      {
        id: "tcp-udp-handshake",
        title: "TCP, UDP, Handshakes & Congestion Control",
        shortTitle: "3. TCP/UDP Deep Dive",
        category: "Protocols & Layers",
        icon: Activity,
        summary:
          "RFC 9293 TCP internals: the 3-way handshake (SYN, SYN-ACK, ACK), sequence numbers, acknowledgments, flow control, and network congestion adaptation.",
        theory: [
          "TCP (Transmission Control Protocol, RFC 9293) provides reliable, ordered, error-checked byte-stream delivery between applications over an unreliable IP network.",
          "The 3-Way Handshake: Before sending data, client and server synchronize Initial Sequence Numbers (ISN):",
          "1. Client sends SYN (Synchronize): 'Let us connect; my starting sequence number is X.'",
          "2. Server responds SYN-ACK: 'Acknowledging X+1; my starting sequence number is Y.'",
          "3. Client replies ACK: 'Acknowledging Y+1; connection is ESTABLISHED.' Data can now flow.",
          "Flow Control vs Congestion Control:",
          "• Flow Control protects the RECEIVER. The receiver advertises its available buffer space (Receive Window `rwnd`). If the receiver buffer fills up, the sender must pause.",
          "• Congestion Control protects the NETWORK PATH. If thousands of senders saturate an intermediate router's queue, packets drop. Algorithms like Cubic, Reno, and BBR dynamically calculate a Congestion Window `cwnd` to prevent network collapse.",
          "UDP (User Datagram Protocol): Connectionless, fire-and-forget. Zero handshakes, no acknowledgments, no retransmissions. Ideal for real-time gaming, VoIP, DNS queries, and modern QUIC.",
        ],
        keyPoints: [
          "TCP 3-Way Handshake: SYN → SYN-ACK → ACK (adds 1 round-trip time RTT before any data can be transferred).",
          "Sequence numbers track every individual byte, enabling out-of-order reassembly and retransmission of lost packets.",
          "Flow Control prevents the sender from overwhelming the receiver's memory buffer (Receive Window).",
          "Congestion Control prevents senders from overwhelming intermediate physical internet switches (Congestion Window).",
          "HTTP/3 uses QUIC over UDP to eliminate TCP head-of-line blocking.",
        ],
        diagramType: "tcp-handshake",
        architectDecision:
          "Keep-Alive Connections: Always enable HTTP Keep-Alive (TCP connection pooling) on your reverse proxies and API gateways. Reusing existing established TCP connections avoids repeating the 3-way handshake and TLS handshake for every single API call.",
        interviewQuestions: [
          {
            q: "Why is TCP called a 'reliable' protocol when the underlying IP network is inherently unreliable?",
            a: "Because TCP implements positive acknowledgments (ACKs) and retransmission timers. If an ACK is not received within the Round-Trip Time (RTT) deadline, TCP automatically retransmits the lost segment. It also uses sequence numbers to reconstruct the exact original byte stream even if packets arrive out of order.",
          },
          {
            q: "What is TCP Head-of-Line (HoL) blocking and how does QUIC solve it?",
            a: "In HTTP/2 over TCP, multiple multiplexed requests share one TCP stream. If packet #3 is dropped, all other concurrent streams must pause and wait until packet #3 is retransmitted, because TCP requires strict byte-order delivery. QUIC runs over UDP and handles reliability per-stream, allowing un-impacted streams to continue immediately.",
          },
        ],
      },

      {
        id: "dns-hierarchy-records",
        title: "DNS Architecture, Records & Global Traffic Steering",
        shortTitle: "4. DNS & Traffic Steering",
        category: "Network Services",
        icon: Search,
        summary:
          "RFC 1034 Domain Name System: Root servers, TLDs, Authoritative nameservers, Recursive caching, TTLs, record types (A, AAAA, CNAME, ALIAS), and private VPC DNS.",
        theory: [
          "DNS (Domain Name System, RFC 1034/1035) is the global distributed hierarchical database that maps human-readable names (api.example.com) to machine-routable IP addresses (203.0.113.25).",
          "The Hierarchical Resolution Flow:",
          "1. Client asks its Local Recursive Resolver (e.g. 1.1.1.1 or 8.8.8.8).",
          "2. If not cached, Resolver queries the DNS Root Nameservers (`.`).",
          "3. Root points to the Top-Level Domain (TLD) Nameserver (e.g. `.com`).",
          "4. TLD nameserver points to the domain's Authoritative Nameserver (e.g. Route 53 `ns-123.awsdns.com`).",
          "5. Authoritative server returns the record with a TTL (Time To Live). Resolver caches it and returns it to client.",
          "Core Record Types:",
          "• A Record: Maps hostname to IPv4 (api.example.com → 203.0.113.10).",
          "• AAAA Record: Maps hostname to IPv6 (api.example.com → 2600:1f18::1).",
          "• CNAME: Canonical Name alias from one hostname to another. (Cannot be placed on root apex domain `example.com`).",
          "• ALIAS / ANAME: Cloud-specific virtual record (Route 53 Alias) that points apex domains directly to AWS resources (ALB/CloudFront) with zero performance penalty.",
          "• TXT: Arbitrary text; used for SPF/DKIM email validation and domain ownership verification.",
          "Private Hosted Zones: An internal DNS zone attached to your VPC. Resolves internal microservice names (e.g. `catalog.internal`) to private IP addresses (10.20.15.42) invisible to the public internet.",
        ],
        keyPoints: [
          "DNS hierarchy: Root (.) → TLD (.com) → Authoritative Nameserver (example.com).",
          "Recursive resolver caches results for the duration specified by the TTL (Time-To-Live).",
          "Low TTL (e.g. 60s) allows fast failover; High TTL (e.g. 86400s) improves lookup speed and reduces DNS query costs.",
          "Cloud traffic steering policies: Weighted routing, Latency-based routing, Geolocation routing, and Failover health-check routing.",
        ],
        diagramType: "dns-resolution-tree",
        architectDecision:
          "Before executing a major database migration or IP cutover, reduce your DNS record's TTL to 60 seconds at least 48 hours in advance. Once the migration completes successfully, raise the TTL back to 3600 seconds to conserve resolver cache bandwidth.",
        interviewQuestions: [
          {
            q: "Why can't you put a standard CNAME record on a domain's apex zone (e.g. example.com)?",
            a: "According to DNS RFC 1034, if a CNAME record exists for a node, no other records (like MX, NS, SOA) can coexist for that same node. Because a zone apex MUST have SOA and NS records, standard CNAMEs are prohibited. Cloud providers solve this using proprietary ALIAS or ANAME virtual records.",
          },
        ],
      },

      {
        id: "http-tls-evolution",
        title: "HTTP/1.1 vs HTTP/2 vs HTTP/3 & TLS 1.3",
        shortTitle: "5. HTTP & TLS 1.3",
        category: "Protocols & Layers",
        icon: Lock,
        summary:
          "RFC 9110 HTTP semantics, binary framing, multiplexing, RFC 8446 TLS 1.3 1-RTT cryptographic handshakes, and Public Key Infrastructure (PKI).",
        theory: [
          "HTTP (HyperText Transfer Protocol) is an application-level stateless request-response protocol for distributed collaborative hypermedia systems.",
          "The Evolution of HTTP:",
          "• HTTP/1.1: Plaintext headers. One request per TCP connection at a time. Suffered from head-of-line blocking; browsers opened up to 6 parallel TCP connections per domain.",
          "• HTTP/2 (RFC 7540): Single TCP connection with binary framing. True multiplexing allows hundreds of concurrent requests/responses over one connection without head-of-line blocking at the application layer. Header compression via HPACK.",
          "• HTTP/3 (RFC 9114): Runs over QUIC/UDP. Fixes transport head-of-line blocking on packet loss. Built-in zero-RTT connection resumption and connection migration when switching from Wi-Fi to cellular.",
          "TLS 1.3 (RFC 8446) Security:",
          "• Encrypts application payloads using authenticated symmetric ciphers (AES-GCM / ChaCha20-Poly1305).",
          "• Diffie-Hellman Key Exchange completes in just 1 Round-Trip Time (1-RTT), compared to TLS 1.2's 2-RTT handshake.",
          "• Perfect Forward Secrecy (PFS): Ephemeral keys ensure that even if the server's private certificate is compromised in 5 years, past recorded encrypted traffic cannot be decrypted.",
        ],
        keyPoints: [
          "HTTP/1.1 (Text, connection contention) → HTTP/2 (Binary multiplexing over TCP) → HTTP/3 (QUIC over UDP).",
          "TLS 1.3 provides confidentiality, message integrity, and server authentication in a single 1-RTT handshake.",
          "Public Key Infrastructure (PKI): Digital certificates cryptographically bind domain identity to public keys via trusted Certificate Authorities (CAs).",
        ],
        diagramType: "tls-handshake",
        architectDecision:
          "Terminate TLS at your Cloud Load Balancer (ALB) using managed automated certificates (AWS ACM / Let's Encrypt). This offloads heavy RSA/ECDHE asymmetric cryptography calculations from your application servers and centralizes certificate auto-renewal.",
        interviewQuestions: [
          {
            q: "How did TLS 1.3 reduce handshake latency compared to TLS 1.2?",
            a: "TLS 1.2 required two full round-trips (ClientHello → ServerHello/Cert → KeyExchange → Finished). TLS 1.3 combines key share generation directly into the ClientHello, allowing the server to compute the shared symmetric key and send its response in a single 1-RTT step.",
          },
        ],
      },

      {
        id: "cidr-ip-math",
        title: "IPv4 Addressing, Subnet Masks & CIDR Mathematics",
        shortTitle: "6. CIDR & Subnet Math",
        category: "Cloud IP Planning",
        icon: Terminal,
        summary:
          "Master Classless Inter-Domain Routing (CIDR): 32-bit binary arithmetic, prefix lengths (/16, /20, /24, /28), RFC 1918 private ranges, and cloud provider reserved addresses.",
        theory: [
          "An IPv4 address is a 32-bit integer typically expressed in dotted-decimal format: four 8-bit octets separated by dots (e.g. 10.20.1.15).",
          "CIDR (Classless Inter-Domain Routing) specifies the network prefix using a slash notation: `IP/prefix`.",
          "The prefix length indicates how many leading bits represent the NETWORK portion; the remaining `(32 - prefix)` bits represent the HOST portion.",
          "The Golden Formula: Total Addresses in a CIDR block = 2^(32 - prefix).",
          "• /16: 32 - 16 = 16 host bits → 2^16 = 65,536 addresses (Standard VPC size).",
          "• /20: 32 - 20 = 12 host bits → 2^12 = 4,096 addresses (Standard Subnet size).",
          "• /24: 32 - 24 = 8 host bits → 2^8 = 256 addresses (Small service subnet).",
          "• /28: 32 - 28 = 4 host bits → 2^4 = 16 addresses (Dedicated DB or firewall subnet).",
          "RFC 1918 Private IPv4 Address Blocks (Non-routable on the public internet):",
          "• 10.0.0.0/8 (10.0.0.0 – 10.255.255.255) • 16.7 Million addresses. (Most popular for enterprise clouds).",
          "• 172.16.0.0/12 (172.16.0.0 – 172.31.255.255) • 1 Million addresses.",
          "• 192.168.0.0/16 (192.168.0.0 – 192.168.255.255) • 65,536 addresses. (Common for local home/office networks).",
          "CRITICAL CLOUD RULE: AWS reserves 5 IP addresses in every subnet (Network ID .0, VPC Router .1, DNS server .2, Future use .3, Broadcast .255). An AWS /24 subnet has 251 usable host IPs, not 254!",
        ],
        keyPoints: [
          "Number of addresses = 2^(32 - prefix_length).",
          "Prefix length determines subnet granularity: smaller prefix = huge network; larger prefix = tiny network.",
          "RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.",
          "AWS reserves 5 IPs per subnet (.0, .1, .2, .3, .255); Azure reserves 5 IPs; GCP reserves 4 IPs.",
          "Always design for growth: changing a VPC CIDR after workloads are running is extraordinarily painful.",
        ],
        diagramType: "cidr-calculator",
        architectDecision:
          "Never allocate 192.168.1.0/24 or 10.0.0.0/16 blindly for your enterprise cloud VPC. Corporate on-premise offices almost universally use 10.0.0.0/16 or 192.168.1.0/24. If your cloud VPC CIDR overlaps with your corporate office CIDR, IPsec VPN and Direct Connect routing will fail due to duplicate network collisions!",
        interviewQuestions: [
          {
            q: "How many usable IP addresses are available in an AWS subnet configured with 10.20.1.0/24?",
            a: "251 usable addresses. A /24 has 256 total IP addresses (2^8). However, AWS reserves 5 addresses in every subnet: .0 (Network address), .1 (VPC virtual router), .2 (DNS server mapping), .3 (reserved for future use), and .255 (Network broadcast).",
          },
        ],
      },

      {
        id: "subnets-routing-tables",
        title: "Subnets, Route Tables & Longest Prefix Match",
        shortTitle: "7. Subnets & Routing",
        category: "Cloud IP Planning",
        icon: Network,
        summary:
          "Software-defined routing: Route Tables, Default Route (0.0.0.0/0), Longest Prefix Match algorithms, and Public vs Private subnet rules.",
        theory: [
          "A Subnet is a logical division of an IP network. Subnets enable network segmentation, isolating databases from web servers and establishing strict routing boundaries.",
          "Public vs. Private Subnet Definition:",
          "• Public Subnet: Its associated route table has an explicit route pointing to an Internet Gateway (`0.0.0.0/0 → igw-xxxx`). Instances inside can receive public IPs.",
          "• Private Subnet: Its route table does NOT point to an Internet Gateway. Default outbound internet traffic points to a NAT Gateway (`0.0.0.0/0 → nat-xxxx`).",
          "Longest Prefix Match (LPM): The fundamental routing algorithm used by routers and cloud virtual switches. When multiple route entries match a destination IP, the route with the most specific prefix (longest prefix length) WINS.",
          "Example: Route table has:",
          "1. `10.20.0.0/16 → local` (VPC internal traffic)",
          "2. `10.20.10.0/24 → vpc-peering` (Partner service)",
          "3. `0.0.0.0/0 → igw` (Default internet)",
          "A packet destined for `10.20.10.45` matches all three rules, but rule #2 (`/24`) is the longest prefix match and takes priority!",
          "Geographic Subnet Scope Across Clouds:",
          "• AWS: A Subnet is strictly tied to a SINGLE Availability Zone (AZ).",
          "• Azure: A Subnet spans across the entire VNet region and can host resources across multiple AZs.",
          "• Google Cloud: VPC is Global; Subnets are Regional and span all zones in that region automatically.",
        ],
        keyPoints: [
          "Public subnet = Route table points 0.0.0.0/0 to Internet Gateway.",
          "Private subnet = Route table points 0.0.0.0/0 to NAT Gateway or has no default route.",
          "Longest Prefix Match guarantees that specific internal routes always override the default catch-all route (0.0.0.0/0).",
          "Cloud routing is software-defined; virtual routers run on hypervisor kernel overlays without physical bottleneck routers.",
        ],
        diagramType: "route-table-simulator",
        architectDecision:
          "Maintain at least three distinct subnet tiers across your VPC: Public Tier (Load balancers and NAT gateways), Private Application Tier (Containers, VMs, ECS tasks), and Isolated Database Tier (RDS, Redis, with ZERO route to NAT or IGW).",
        interviewQuestions: [
          {
            q: "If a route table has routes for 10.0.0.0/16 (local), 10.0.1.0/24 (peering), and 0.0.0.0/0 (Internet Gateway), which path does packet 10.0.1.55 take?",
            a: "It takes the peering connection (10.0.1.0/24) because of the Longest Prefix Match rule. /24 has 24 matching bits, which is more specific than /16 (16 bits) and /0 (0 bits).",
          },
        ],
      },

      {
        id: "nat-firewalls-security-groups",
        title: "NAT Gateways, Firewalls & Security Groups",
        shortTitle: "8. NAT & Security Groups",
        category: "Network Security",
        icon: Shield,
        summary:
          "SNAT vs DNAT vs PAT, stateful Security Groups vs stateless Network ACLs, and the critical distinction: Route (Path) vs Firewall (Permission).",
        theory: [
          "NAT (Network Address Translation): Translates private RFC 1918 IP addresses to a public IPv4 address so private instances can access internet APIs without exposing themselves to inbound attacks.",
          "• Source NAT (SNAT): Replaces the internal private source IP with the NAT Gateway's public IP on outbound requests.",
          "• Port Address Translation (PAT / NAPT): Maps thousands of internal private instance connections to unique source ports on a single shared public IP address.",
          "CRITICAL ARCHITECTURAL DISTINCTION: NAT is NOT a Firewall!",
          "• NAT's job: Translate addresses and ports.",
          "• Firewall's job: Inspect packets and enforce permit/deny access control rules.",
          "Stateful Security Groups vs Stateless NACLs (Network Access Control Lists):",
          "• Security Group (Stateful): Attached to instance ENI virtual interfaces. If you allow inbound traffic on port 443, return outbound traffic is AUTOMATICALLY allowed regardless of outbound rules! Connection state is tracked in memory.",
          "• Network ACL (Stateless): Attached to the subnet boundary. Evaluates every packet independently. If you allow inbound port 443, you MUST also explicitly allow outbound ephemeral ports (1024–65535) for return packets!",
          "Security Group Chaining: Instead of allowing IP ranges, allow another Security Group ID. Example: Database SG allows inbound port 5432 ONLY from `sg-app-servers`.",
        ],
        keyPoints: [
          "NAT allows private instances to reach the internet outbound; it completely blocks unsolicited inbound connections.",
          "Route Table dictates WHERE a packet can travel; Firewall dictates WHETHER the packet is permitted.",
          "Stateful firewalls (Security Groups) automatically allow return traffic; stateless firewalls (NACLs) require bidirectional rules.",
          "Security Group chaining eliminates brittle hardcoded IP firewall rules in dynamic auto-scaling clusters.",
        ],
        diagramType: "security-group-chain",
        architectDecision:
          "Multi-AZ NAT High Availability vs Cost Trade-off: AWS NAT Gateways are AZ-specific. If you place only 1 NAT Gateway in AZ-A and AZ-A suffers a power outage, your private instances in AZ-B also lose outbound internet connectivity. For production, deploy 1 NAT Gateway per active AZ.",
        interviewQuestions: [
          {
            q: "What is the difference between a stateful and a stateless firewall in cloud networking?",
            a: "A stateful firewall (AWS Security Group) maintains an active connection state table. When inbound traffic is permitted, the return response traffic is automatically allowed back out. A stateless firewall (AWS NACL) does not track connections; rule evaluation occurs in both directions independently, requiring explicit ephemeral port rules for response packets.",
          },
          {
            q: "If an EC2 instance in a private subnet cannot connect to the internet, what are the three most common causes?",
            a: "1) The subnet's route table is missing a default route (0.0.0.0/0) pointing to a NAT Gateway. 2) The NAT Gateway itself is deployed in a private subnet instead of a public subnet with an Internet Gateway route. 3) The instance's Security Group outbound rules block egress traffic.",
          },
        ],
      },

      {
        id: "loadbalancers-cdn-edge",
        title: "Load Balancers (L4 vs L7) & Edge CDNs",
        shortTitle: "9. Load Balancers & CDN",
        category: "Traffic Distribution",
        icon: Workflow,
        summary:
          "Layer 4 Network Load Balancers vs Layer 7 Application Load Balancers, health probes, TLS termination, and Edge CDN caching mechanics.",
        theory: [
          "Load Balancers distribute incoming network traffic across multiple backend targets to achieve high availability, fault tolerance, and horizontal scalability.",
          "Layer 4 (Transport) vs Layer 7 (Application) Load Balancing:",
          "• L4 Load Balancer (AWS Network Load Balancer / NLB): Operates at TCP/UDP layer. Ultra-high performance (millions of requests/sec), ultra-low latency (<1ms), routes based strictly on IP and Port. Preserves client source IP.",
          "• L7 Load Balancer (AWS Application Load Balancer / ALB): Operates at HTTP/HTTPS layer. Deep packet inspection: routes traffic based on URL Path (`/api/*` vs `/images/*`), Host header (`app.example.com`), HTTP methods, or cookies. Performs TLS termination and sticky sessions.",
          "Health Check Probes: The load balancer sends periodic requests (e.g. GET /healthz every 10s). If an instance fails 3 consecutive probes, it is automatically removed from rotation. Traffic routes only to healthy targets.",
          "Content Delivery Networks (CDN): Globally distributed reverse proxy caches (AWS CloudFront, Cloud CDN).",
          "• Edge Caching: Caches static images, CSS, and video at edge Points of Presence (PoPs) close to users, cutting latency from 120ms to 8ms.",
          "• Origin Offload: Absorbs 80–95% of traffic, protecting backend databases and web servers from crushing load and DDoS attacks.",
        ],
        keyPoints: [
          "L4 NLB = Raw TCP/UDP speed, millions of req/sec; L7 ALB = Intelligent HTTP path/header routing.",
          "Load balancers actively probe backend health endpoints (/healthz) to ensure zero-downtime failover.",
          "TLS termination offloads certificate management and CPU-intensive encryption from app servers.",
          "CDN Cache Hit vs Cache Miss: Cache keys determine whether cached content is returned without contacting origin.",
        ],
        diagramType: "load-balancer-routing",
        architectDecision:
          "Configure your health check endpoint (/healthz) to check internal memory and connectivity, but do NOT execute heavy database queries inside it. If 20 load balancer nodes query the database every 5 seconds on health checks, a minor database slowdown will cause all instances to fail health checks simultaneously, triggering an artificial cascading outage!",
        interviewQuestions: [
          {
            q: "When would an architect choose a Layer 4 Network Load Balancer over a Layer 7 Application Load Balancer?",
            a: "Choose an L4 NLB when you need: 1) Extreme throughput (millions of requests/second) with microsecond latency. 2) Non-HTTP protocols (raw TCP, UDP, gaming, IoT MQTT). 3) Static public IP addresses per Availability Zone. 4) Direct client source IP preservation without X-Forwarded-For headers.",
          },
        ],
      },

      {
        id: "hybrid-private-connectivity",
        title: "Hybrid Cloud: VPN, Dedicated Direct Links & PrivateLink",
        shortTitle: "10. Hybrid & PrivateLink",
        category: "Enterprise Connectivity",
        icon: Share2,
        summary:
          "Connecting on-premise datacenters to cloud: IPsec VPN, AWS Direct Connect / Azure ExpressRoute, PrivateLink endpoints, and BGP routing.",
        theory: [
          "Modern enterprise cloud architecture is hybrid: corporate headquarters, factories, and on-premise datacenters must communicate securely with cloud VPCs.",
          "Two Primary Hybrid Connectivity Approaches:",
          "1. IPsec Site-to-Site VPN: Encrypted tunnel created over the public Internet. Fast to deploy (hours), low fixed cost. Subject to internet latency jitter, packet loss, and typically capped at 1.25 Gbps per tunnel.",
          "2. Dedicated Private Connectivity (AWS Direct Connect / Azure ExpressRoute / GCP Interconnect): A dedicated physical 1Gbps to 100Gbps fiber circuit cross-connected directly from your datacenter router into the cloud provider's network backbone. Bypasses the public internet entirely for predictable sub-millisecond latency.",
          "CRITICAL SECURITY LESSON: Private dedicated fiber connectivity is NOT automatically encrypted! If wiretap compliance or data privacy is required, you must run MACsec or IPsec VPN over Direct Connect.",
          "Private Service Access (AWS PrivateLink / Azure Private Endpoint / GCP PSC):",
          "• Historically, accessing AWS S3 from a private EC2 instance required sending traffic over the public internet.",
          "• PrivateLink creates an Elastic Network Interface (ENI) with a private IP directly inside your VPC subnet. Traffic to AWS services or SaaS vendors travels entirely over the cloud provider's private fiber backbone, completely shielded from internet exposure.",
          "Border Gateway Protocol (BGP): Used by Cloud Routers to automatically propagate route updates between on-premise networks and cloud route tables dynamically.",
        ],
        keyPoints: [
          "Site-to-Site VPN = Encrypted tunnel over public internet (variable latency, capped throughput).",
          "Direct Connect / ExpressRoute = Dedicated private physical fiber (consistent high speed, unencrypted by default).",
          "PrivateLink / Private Endpoints allow private VMs to consume cloud services (S3, RDS) without internet gateways.",
          "BGP dynamically advertises routes between enterprise on-premise networks and cloud VPCs.",
        ],
        diagramType: "hybrid-connectivity-diagram",
        architectDecision:
          "Use AWS PrivateLink / VPC Interface Endpoints for S3, Secrets Manager, and ECR. This allows you to completely delete NAT Gateways in compliance-restricted VPCs, saving hundreds of dollars per month while achieving total physical air-gap isolation from the public internet.",
        interviewQuestions: [
          {
            q: "Does AWS Direct Connect or Azure ExpressRoute encrypt network traffic by default?",
            a: "No! Direct Connect and ExpressRoute provide a dedicated private physical circuit, but the electrical/optical frames are transmitted in unencrypted plaintext across physical telecom fiber. If encryption in transit is legally required, architects must configure MACsec (at Layer 2) or run an IPsec VPN tunnel over the private connection (at Layer 3).",
          },
        ],
      },

      {
        id: "production-vpc-architecture",
        title: "Production VPC Design Project: 10.20.0.0/16",
        shortTitle: "11. Production VPC Project",
        category: "Capstone Architecture",
        icon: Building2,
        summary:
          "Complete hands-on blueprint: Multi-AZ subnets, IP allocation plan, Route Tables, NAT Gateways, Security Group chaining, and avoiding IP collision traps.",
        theory: [
          "This is the production standard for enterprise multi-tier cloud networking.",
          "The Blueprint: VPC 10.20.0.0/16 (65,536 IP addresses across 2 Availability Zones):",
          "• AZ-A Public Subnet (10.20.0.0/20): Hosts ALB Listener A & NAT Gateway A. Route: 0.0.0.0/0 → IGW.",
          "• AZ-B Public Subnet (10.20.48.0/20): Hosts ALB Listener B & NAT Gateway B. Route: 0.0.0.0/0 → IGW.",
          "• AZ-A Private App Subnet (10.20.16.0/20): Hosts App VM 1 & 2. Route: 0.0.0.0/0 → NAT Gateway A.",
          "• AZ-B Private App Subnet (10.20.64.0/20): Hosts App VM 3 & 4. Route: 0.0.0.0/0 → NAT Gateway B.",
          "• AZ-A Private DB Subnet (10.20.32.0/20): Hosts Primary DB. Route: Local only (No internet route).",
          "• AZ-B Private DB Subnet (10.20.80.0/20): Hosts Standby DB Replica. Route: Local only.",
          "Security Group Chaining Architecture:",
          "1. `sg-alb`: Inbound TCP 443 from `0.0.0.0/0`. Outbound TCP 8080 to `sg-app`.",
          "2. `sg-app`: Inbound TCP 8080 ONLY from `sg-alb`. Outbound TCP 5432 to `sg-db`, outbound TCP 443 to internet (via NAT).",
          "3. `sg-db`: Inbound TCP 5432 ONLY from `sg-app`. Outbound: NONE.",
          "Notice: The database is completely unreachable from the internet and even from the load balancer directly!",
        ],
        keyPoints: [
          "Strict tier segmentation: Public (Ingress/Egress) → Private App (Compute) → Isolated Data (Storage).",
          "Independent NAT Gateway per AZ ensures AZ-A failure does not kill AZ-B outbound connectivity.",
          "Security Group chaining enforces strict least-privilege network paths.",
          "Non-overlapping CIDR allocation leaves /20 blocks reserved for future microservices and EKS clusters.",
        ],
        diagramType: "production-vpc-blueprint",
        architectDecision:
          "Never reuse the same route table across public and private subnets. Create dedicated route tables for each subnet type and associate them explicitly to ensure no private instance accidentally receives an Internet Gateway route.",
        interviewQuestions: [
          {
            q: "Why did we allocate /20 subnets (4,096 IPs) instead of /24 subnets (256 IPs) in our production VPC?",
            a: "Modern containerized environments (like AWS EKS or Azure AKS with CNI networking) assign a distinct private VPC IP address to every single pod/container. In a dynamic microservices cluster running hundreds of pods with rolling deployments, a /24 subnet (251 usable IPs) will rapidly exhaust its address space, causing catastrophic pod scheduling failures.",
          },
        ],
      },

      {
        id: "packet-troubleshooting-game",
        title: "Interactive Packet Troubleshooting Game",
        shortTitle: "12. Packet Game Simulator",
        category: "Simulation & Practice",
        icon: ShieldAlert,
        summary:
          "Play the Cloud Architect Packet Game: Test your diagnosis against 7 real production networking failures (DNS timeouts, TCP resets, SG blocks, DB port filtering, NAT outages).",
        theory: [
          "Senior cloud engineers diagnose networking issues systematically by tracking the packet's lifecycle across each hop.",
          "When an alert fires in the middle of the night, don't blindly change firewall rules. Follow the 8-Step Walk-The-Stack Framework:",
          "1. DNS: Does hostname resolve to expected IP? (`dig`, `nslookup`)",
          "2. IP Reachability: Is the target IP reachable? (`traceroute`, `ping`)",
          "3. Routing: Does the subnet route table contain a valid next-hop? (`aws ec2 describe-route-tables`)",
          "4. Firewalls: Does the Security Group / NSG permit the source CIDR or SG ID?",
          "5. Transport Port: Is the target process listening on the TCP port? (`nc -zv`, `ss -tlpn`)",
          "6. TLS Handshake: Is the SSL/TLS certificate valid and trusted? (`openssl s_client -connect`)",
          "7. HTTP Semantics: What status code is returned? (403 Forbidden vs 502 Bad Gateway vs 504 Gateway Timeout)",
          "8. Application: Is the backend process healthy or deadlocked?",
        ],
        keyPoints: [
          "502 Bad Gateway = Load Balancer reached the server, but server closed connection abruptly or returned garbage.",
          "504 Gateway Timeout = Load Balancer sent request, but backend application took longer than the idle timeout to respond.",
          "Connection Refused = Packet reached host, but no process is listening on that TCP port.",
          "Connection Timed Out = Packet dropped silently along the way (Firewall/Security Group drop or routing black hole).",
        ],
        diagramType: "packet-game-simulator",
        architectDecision:
          "Distinguish between 'Connection Refused' (ICMP Port Unreachable / TCP RST sent by host OS = Security Group allowed packet, but application process is dead) vs 'Connection Timed Out' (Packet dropped with no response = Security Group or Route Table dropped the packet). This single insight cuts troubleshooting time in half.",
        interviewQuestions: [
          {
            q: "What is the precise difference between an HTTP 502 Bad Gateway and an HTTP 504 Gateway Timeout on an Application Load Balancer?",
            a: "A 502 Bad Gateway means the ALB connected to the target instance, but the target returned an invalid or malformed HTTP response, or reset the TCP connection prematurely. A 504 Gateway Timeout means the ALB forwarded the request, but the target instance failed to respond within the configured timeout period (e.g. 60 seconds) due to slow queries or thread starvation.",
          },
        ],
      },
    ],
    []
  );

  const currentTopic = networkingTopics[selectedTopic];
  const topicNumber = String(selectedTopic + 1).padStart(2, "0");

  const nextTopic = () => {
    setSelectedTopic((prev) => (prev < networkingTopics.length - 1 ? prev + 1 : 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const previousTopic = () => {
    setSelectedTopic((prev) => (prev > 0 ? prev - 1 : networkingTopics.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 7 Packet Game Scenarios
  const packetGameScenarios = [
    {
      id: 1,
      title: "Scenario A: The Full HTTPS Request Sequence",
      context:
        "A user enters 'https://shop.example.com' into their browser. In what exact order do network events take place?",
      question: "Which of the following represents the correct systems execution order?",
      options: [
        {
          id: "A",
          text: "TCP Handshake → HTTP GET → DNS Lookup → Database Query → TLS Handshake",
          verdict: "Incorrect",
          explanation: "You cannot open a TCP connection before resolving the domain name into an IP address via DNS.",
          isCorrect: false,
        },
        {
          id: "B",
          text: "DNS Lookup → TCP 3-Way Handshake → TLS 1.3 Cryptographic Handshake → HTTP GET Request → Database Query",
          verdict: "Correct! Clean Systems Layering",
          explanation:
            "1) DNS resolves the IP address. 2) TCP establishes the transport connection. 3) TLS negotiates symmetric encryption keys. 4) HTTP sends the encrypted GET request. 5) Backend queries database.",
          isCorrect: true,
        },
        {
          id: "C",
          text: "TLS Handshake → DNS Lookup → TCP Handshake → HTTP GET",
          verdict: "Incorrect",
          explanation: "TLS operates on top of TCP; it cannot negotiate before TCP is established.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      title: "Scenario B: DNS Resolves, but TCP Connection Fails",
      context:
        "Your browser executes 'curl https://api.example.com'. DNS lookup succeeds and returns '203.0.113.25'. However, the command hangs for 30 seconds and fails with 'Connection timed out'.",
      question: "Will the server's application receive an HTTP request?",
      options: [
        {
          id: "A",
          text: "No. Because the Layer 4 TCP connection never established, zero application Layer 7 bytes were ever transmitted.",
          verdict: "Correct! Layer Dependency Principle",
          explanation:
            "Higher layer protocols strictly depend on lower layers. If the TCP 3-way handshake fails (SYN packet dropped by a firewall or routing black hole), HTTP cannot exist.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "Yes, HTTP requests are sent over UDP as fallback automatically.",
          verdict: "Incorrect",
          explanation: "Standard HTTPS does not magically fall back to UDP unless specifically configured for HTTP/3 QUIC, which still requires reachability.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      title: "Scenario C: TCP Connects, but TLS Certificate is Invalid",
      context:
        "The TCP 3-way handshake succeeds on port 443. During the TLS handshake, the server presents a certificate for 'internal.corp' instead of 'shop.example.com'.",
      question: "What happens to the user's connection?",
      options: [
        {
          id: "A",
          text: "The browser ignores the domain mismatch and proceeds with normal HTTP data transfer.",
          verdict: "Incorrect & Dangerous",
          explanation: "Browsers enforce strict PKI hostname validation to prevent Man-in-the-Middle (MITM) impersonation attacks.",
          isCorrect: false,
        },
        {
          id: "B",
          text: "The browser terminates the TLS handshake and displays a critical SSL/TLS Certificate Mismatch security warning.",
          verdict: "Correct! PKI Authentication Enforced",
          explanation:
            "TLS authentication requires that the Subject Alternative Name (SAN) on the signed certificate exactly matches the hostname in the URL.",
          isCorrect: true,
        },
      ],
    },
    {
      id: 4,
      title: "Scenario D: ALB Works, App Security Group Blocks Inbound 8080",
      context:
        "The Load Balancer is healthy in the public subnet. However, a developer accidentally removed port 8080 from the App Server's Security Group.",
      question: "What error code does the user receive from the Application Load Balancer?",
      options: [
        {
          id: "A",
          text: "HTTP 502 Bad Gateway / 504 Gateway Timeout from the ALB.",
          verdict: "Correct! ALB Target Failure",
          explanation:
            "The ALB is reachable by the client, but when it attempts to forward the request to the backend VM, the packet is silently dropped by the App Security Group. The ALB times out and returns HTTP 504/502.",
          isCorrect: true,
        },
        {
          id: "B",
          text: "HTTP 404 Not Found.",
          verdict: "Incorrect",
          explanation: "A 404 is generated by the web application when a URL path doesn't exist. Here, the web server was never reached!",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      title: "Scenario E: NAT Gateway in AZ-A Goes Down",
      context:
        "The managed NAT Gateway in AZ-A suffers an unexpected outage. Public users are browsing the website through the public Application Load Balancer.",
      question: "Can external users still view the website?",
      options: [
        {
          id: "A",
          text: "Yes! Inbound user traffic arrives via the Internet Gateway → ALB → Private App VMs and does NOT touch the NAT Gateway.",
          verdict: "Correct! Inbound vs Outbound Independence",
          explanation:
            "NAT Gateways are ONLY used for outbound connections initiated by private instances. Inbound user traffic enters through the Internet Gateway and Load Balancer! (However, if the app needs to call third-party APIs during checkout, those outbound API calls will fail).",
          isCorrect: true,
        },
        {
          id: "B",
          text: "No, all traffic into the VPC instantly ceases.",
          verdict: "Incorrect",
          explanation: "A common beginner misconception. NAT Gateways do not handle inbound ingress traffic from the public internet.",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      title: "Scenario F: Route Table vs Firewall Permission Confusion",
      context:
        "Subnet Route Table contains '10.20.0.0/16 → local'. App VM (10.20.10.15) sends TCP SYN to Database (10.20.32.20) on port 5432. Database Security Group only allows port 5432 from 10.20.99.0/24.",
      question: "Why does the connection fail?",
      options: [
        {
          id: "A",
          text: "Because routing is broken; a new route is required.",
          verdict: "Incorrect",
          explanation: "Routing is fully operational! The '10.20.0.0/16 → local' route knows exactly which virtual switch port holds the database.",
          isCorrect: false,
        },
        {
          id: "B",
          text: "The path exists in the route table, but the packet is blocked at the destination by the Database Security Group firewall policy.",
          verdict: "Correct! Route (Path) ≠ Security (Permission)",
          explanation:
            "A route table only answers: 'WHERE CAN THIS GO?' A Security Group answers: 'IS THIS PERMITTED?' Both must be properly configured for communication.",
          isCorrect: true,
        },
      ],
    },
  ];

  const handlePacketGameAnswer = (scenario, option) => {
    const isFirstTry = packetHistory[scenario.id] === undefined;
    setPacketSelection(option.id);
    setPacketHistory((prev) => ({
      ...prev,
      [scenario.id]: { optionId: option.id, isCorrect: option.isCorrect },
    }));

    if (isFirstTry && option.isCorrect) {
      setPacketScore((prev) => prev + 15);
    }
  };

  // CIDR Math Helper
  const parseCidr = (cidrStr) => {
    try {
      const parts = cidrStr.trim().split("/");
      if (parts.length !== 2) return null;
      const ip = parts[0];
      const prefix = parseInt(parts[1], 10);
      if (isNaN(prefix) || prefix < 0 || prefix > 32) return null;

      const octets = ip.split(".").map((o) => parseInt(o, 10));
      if (octets.length !== 4 || octets.some((o) => isNaN(o) || o < 0 || o > 255)) return null;

      const totalIps = Math.pow(2, 32 - prefix);
      const usableIps = Math.max(0, totalIps - 5); // Cloud reserved 5

      // Calculate Subnet Mask
      let maskBits = (0xffffffff << (32 - prefix)) >>> 0;
      const maskOctets = [
        (maskBits >>> 24) & 255,
        (maskBits >>> 16) & 255,
        (maskBits >>> 8) & 255,
        maskBits & 255,
      ];
      const subnetMask = maskOctets.join(".");

      return {
        ip,
        prefix,
        totalIps: totalIps.toLocaleString(),
        usableIps: usableIps.toLocaleString(),
        subnetMask,
        hostBits: 32 - prefix,
      };
    } catch (e) {
      return null;
    }
  };

  const cidrData = parseCidr(cidrInput);

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-amber-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cloud"
          currentModuleId="networking"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor((prev) => !prev)}
          aiTutorLabel="Ask Nova Networking AI"
        />

        {/* AI TUTOR ACCORDION DRAWER */}
        {showAiTutor && (
          <section className="mb-8 overflow-hidden rounded-3xl border border-orange-200 bg-white/95 p-6 shadow-xl backdrop-blur-xl transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#18181b]">
                    Nova AI Cloud Networking Architect Tutor
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Ask questions about CIDR math, longest prefix matching, NAT vs firewalls, TCP handshakes, or Direct Connect.
                  </p>
                </div>
              </div>
            </div>

            <LearningRo currentTopic={`networking-${currentTopic.id}`} />
          </section>
        )}

        {/* HERO BANNER */}
        <div className="mb-8 overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-2xl md:p-9 relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/30 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#f97316] mb-3">
                <Network size={13} />
                <span>Cloud Networking & VPC/VNet Engineering</span>
              </div>

              <h1 className="text-2xl font-black tracking-tight text-white md:text-4xl lg:text-5xl">
                From Packets to a Production-Grade VPC
              </h1>

              <p className="mt-3 text-xs md:text-sm leading-relaxed text-stone-300 max-w-2xl">
                A cloud engineer who understands compute but does not understand networking cannot diagnose production incidents. Master packet encapsulation, TCP handshakes, DNS hierarchy, CIDR arithmetic, routing tables, NAT gateways, and multi-tier VPC security.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-[#f97316]">12</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Deep Sections</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-emerald-400">10.20/16</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">VPC Blueprint</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md text-center min-w-[120px]">
                <div className="font-mono text-2xl font-black text-amber-400">7</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Packet Scenarios</div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN INTERACTIVE COURSE CONTAINER */}
        <div className="overflow-hidden rounded-3xl border border-[#e7e3da] bg-white/80 shadow-sm backdrop-blur-xl">
          {/* TOP CONTROLS & MODULE TITLE */}
          <div className="border-b border-[#e7e3da] bg-[#faf8f4]/70 px-6 py-5 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ea580c]">
                  Cloud Networking Curriculum
                </p>
                <h2 className="text-xl md:text-2xl font-black text-[#18181b]">
                  {currentTopic.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-xl border border-[#e7e3da] bg-white px-3.5 py-1.5 font-mono text-xs font-bold text-stone-700 shadow-sm">
                  Topic {topicNumber} / {networkingTopics.length}
                </span>

                <span className="rounded-xl border border-orange-200 bg-orange-50 px-3.5 py-1.5 font-mono text-xs font-bold text-[#ea580c] shadow-sm">
                  {currentTopic.category}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
            {/* SIDEBAR NAVIGATION */}
            <aside className="border-b border-[#e7e3da] bg-[#faf8f4]/50 p-4 md:border-b-0 md:border-r">
              <div className="mb-3 px-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Networking Topics
                </h3>
              </div>

              <div className="space-y-1.5">
                {networkingTopics.map((topic, index) => {
                  const Icon = topic.icon;
                  const active = selectedTopic === index;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(index)}
                      className={`group flex w-full items-start gap-3 rounded-2xl px-3.5 py-3 text-left transition-all ${
                        active
                          ? "bg-[#f97316] text-white font-bold shadow-[0_4px_16px_rgba(249,115,22,0.25)]"
                          : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl transition ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-white text-stone-600 border border-[#e7e3da] group-hover:border-orange-300 group-hover:text-[#ea580c]"
                        }`}
                      >
                        <Icon size={15} />
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`font-mono text-[10px] ${
                              active ? "text-white/80" : "text-stone-400"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-xs font-bold truncate">
                            {topic.shortTitle.replace(/^\d+\.\s*/, "")}
                          </span>
                        </div>
                        <span
                          className={`mt-0.5 block text-[10px] truncate ${
                            active ? "text-orange-100" : "text-stone-400"
                          }`}
                        >
                          {topic.category}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick links */}
              <div className="mt-6 border-t border-[#e7e3da] pt-4 px-2 space-y-2">
                <button
                  onClick={() => setSelectedTopic(11)} // Packet Simulator Game
                  className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50/70 p-2.5 text-xs font-bold text-red-800 hover:bg-red-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <ShieldAlert size={14} className="text-red-600" />
                    Play Packet Game
                  </span>
                  <span className="rounded-full bg-red-200 px-2 py-0.5 text-[10px]">Interactive</span>
                </button>

                <button
                  onClick={() => setSelectedTopic(5)} // CIDR Math
                  className="flex w-full items-center justify-between rounded-xl border border-amber-200 bg-amber-50/70 p-2.5 text-xs font-bold text-amber-800 hover:bg-amber-100 transition shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Terminal size={14} className="text-amber-600" />
                    CIDR Calculator
                  </span>
                  <span className="rounded-full bg-amber-200 px-2 py-0.5 text-[10px]">Math Tool</span>
                </button>
              </div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="min-w-0 p-5 md:p-8">
              {/* SUMMARY CARD */}
              <div className="rounded-2xl border border-orange-200/80 bg-orange-50/50 p-5 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f97316] text-white">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-orange-800">
                      Core Networking Invariant
                    </h4>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-stone-800 font-medium">
                      {currentTopic.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* VISUAL DIAGRAM OR INTERACTIVE ENGINE */}
              <div className="mt-6">
                <VisualNetworkingDiagram
                  type={currentTopic.diagramType}
                  topic={currentTopic}
                  cidrInput={cidrInput}
                  setCidrInput={setCidrInput}
                  cidrData={cidrData}
                  packetGameScenarios={packetGameScenarios}
                  packetScenarioIndex={packetScenarioIndex}
                  setPacketScenarioIndex={setPacketScenarioIndex}
                  packetSelection={packetSelection}
                  handlePacketGameAnswer={handlePacketGameAnswer}
                  packetScore={packetScore}
                  packetHistory={packetHistory}
                  copyCode={copyCode}
                  copiedCodeId={copiedCodeId}
                />
              </div>

              {/* IN-DEPTH THEORY SECTION */}
              <section className="mt-8 rounded-2xl border border-[#e7e3da] bg-white shadow-sm">
                <div className="border-b border-[#e7e3da] px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      In-Depth Systems & Protocol Theory
                    </h3>
                  </div>

                  <span className="font-mono text-xs text-stone-400">Stanford CS144 & IETF RFC Standards</span>
                </div>

                <div className="space-y-4 px-6 py-6 text-sm md:text-[15px] leading-relaxed text-stone-700">
                  {currentTopic.theory.map((para, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f97316]" />
                      <p>{para}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ARCHITECTURAL PRINCIPLES */}
              <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm overflow-hidden">
                <div
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="flex items-center justify-between border-b border-[#e7e3da] px-6 py-4 cursor-pointer hover:bg-stone-50 transition"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Core Networking Invariants & Key Rules
                    </h3>
                  </div>
                  {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>

                {showDetails && (
                  <div className="p-6 space-y-3 border-b border-[#e7e3da]">
                    {currentTopic.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-stone-700">
                        <span className="font-mono text-xs font-bold text-[#ea580c]">{`0${i + 1}`}</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* SENIOR ARCHITECT DECISION */}
              {currentTopic.architectDecision && (
                <section className="mt-6 rounded-2xl border border-[#27272a] bg-[#18181b] p-6 text-white shadow-xl">
                  <div className="flex items-center gap-2 text-[#f97316] mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                    <Shield size={16} />
                    <span>Senior Architect Decision Rationale</span>
                  </div>
                  <p className="text-sm md:text-[15px] text-stone-300 leading-relaxed">
                    {currentTopic.architectDecision}
                  </p>
                </section>
              )}

              {/* INTERVIEW QUESTIONS */}
              {currentTopic.interviewQuestions && currentTopic.interviewQuestions.length > 0 && (
                <section className="mt-6 rounded-2xl border border-[#e7e3da] bg-white shadow-sm p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare size={18} className="text-[#f97316]" />
                    <h3 className="font-bold text-stone-900">
                      Technical Interview & Systems Defense Questions
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {currentTopic.interviewQuestions.map((qa, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-[#e7e3da] bg-[#faf8f4]/60 p-4"
                      >
                        <div className="flex items-start gap-2 text-sm font-bold text-stone-900">
                          <span className="text-[#ea580c] font-mono">Q:</span>
                          <span>{qa.q}</span>
                        </div>
                        <div className="mt-2.5 flex items-start gap-2 text-xs md:text-sm leading-relaxed text-stone-600 pl-4 border-l-2 border-orange-300">
                          <span className="text-stone-400 font-mono">A:</span>
                          <span>{qa.a}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* BOTTOM NAVIGATION */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
                <button
                  type="button"
                  onClick={previousTopic}
                  className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white px-5 py-2.5 text-xs md:text-sm font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-sm"
                >
                  <ArrowLeft size={16} />
                  <span>Previous: {selectedTopic === 0 ? "Last Topic" : networkingTopics[selectedTopic - 1].shortTitle}</span>
                </button>

                <button
                  type="button"
                  onClick={nextTopic}
                  className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-2.5 text-xs md:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95"
                >
                  <span>Next: {selectedTopic === networkingTopics.length - 1 ? "Overview" : networkingTopics[selectedTopic + 1].shortTitle}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* VISUAL NETWORKING DIAGRAM DISPATCHER                                       */
/* -------------------------------------------------------------------------- */

function VisualNetworkingDiagram({
  type,
  topic,
  cidrInput,
  setCidrInput,
  cidrData,
  packetGameScenarios,
  packetScenarioIndex,
  setPacketScenarioIndex,
  packetSelection,
  handlePacketGameAnswer,
  packetScore,
  packetHistory,
  copyCode,
  copiedCodeId,
}) {
  switch (type) {
    case "full-networking-flow":
      return <FullNetworkingFlowDiagram />;

    case "packet-encapsulation":
      return <PacketEncapsulationDiagram />;

    case "tcp-handshake":
      return <TcpHandshakeDiagram />;

    case "dns-resolution-tree":
      return <DnsResolutionDiagram />;

    case "tls-handshake":
      return <TlsHandshakeDiagram />;

    case "cidr-calculator":
      return (
        <CidrCalculatorDiagram
          cidrInput={cidrInput}
          setCidrInput={setCidrInput}
          cidrData={cidrData}
        />
      );

    case "route-table-simulator":
      return <RouteTableSimulatorDiagram />;

    case "security-group-chain":
      return <SecurityGroupChainDiagram />;

    case "load-balancer-routing":
      return <LoadBalancerRoutingDiagram />;

    case "hybrid-connectivity-diagram":
      return <HybridConnectivityDiagram />;

    case "production-vpc-blueprint":
      return <ProductionVpcBlueprintDiagram copyCode={copyCode} copiedCodeId={copiedCodeId} />;

    case "packet-game-simulator":
    default:
      return (
        <PacketTroubleshootingGame
          packetGameScenarios={packetGameScenarios}
          packetScenarioIndex={packetScenarioIndex}
          setPacketScenarioIndex={setPacketScenarioIndex}
          packetSelection={packetSelection}
          handlePacketGameAnswer={handlePacketGameAnswer}
          packetScore={packetScore}
          packetHistory={packetHistory}
        />
      );
  }
}

/* -------------------------------------------------------------------------- */
/* INDIVIDUAL VISUAL NETWORKING DIAGRAMS                                      */
/* -------------------------------------------------------------------------- */

function FullNetworkingFlowDiagram() {
  const [activeHop, setActiveHop] = useState(0);

  const hops = [
    { title: "1. User Browser", desc: "Initiates HTTPS GET to https://shop.example.com", proto: "HTTPS / TLS" },
    { title: "2. DNS Resolver", desc: "Route 53 resolves shop.example.com to Edge Anycast IP", proto: "DNS UDP:53" },
    { title: "3. Edge CDN", desc: "CloudFront edge point of presence terminates TLS, checks cache", proto: "TCP:443" },
    { title: "4. Internet Gateway (IGW)", desc: "Software-defined gateway translating VPC public IPs", proto: "IP Packet" },
    { title: "5. Application Load Balancer", desc: "Inspects HTTP Host/Path, health checks, forwards to target group", proto: "Layer 7 HTTP" },
    { title: "6. Private App VMs (Multi-AZ)", desc: "Executes business logic in private subnets with no public IP", proto: "TCP:8080" },
    { title: "7. Private PostgreSQL DB", desc: "Isolated data tier accepting connections strictly from App Security Group", proto: "TCP:5432" },
    { title: "8. Outbound NAT Gateway", desc: "Translates outbound calls to external Stripe API; blocks inbound", proto: "SNAT / PAT" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            End-To-End Systems Flow
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The Complete Packet Journey Through a Cloud Network
          </h4>
        </div>
        <span className="text-xs text-stone-500">Click any hop to inspect</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-4">
        {hops.map((hop, idx) => (
          <div
            key={idx}
            onClick={() => setActiveHop(idx)}
            className={`cursor-pointer rounded-xl border p-3 transition ${
              activeHop === idx
                ? "border-orange-500 bg-orange-50 shadow-xs"
                : "border-stone-200 bg-stone-50/60 hover:bg-stone-100"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-[10px] font-bold text-stone-400">0{idx + 1}</span>
              <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white border border-stone-200 text-[#ea580c]">
                {hop.proto}
              </span>
            </div>
            <div className="text-xs font-bold text-stone-900 truncate">{hop.title}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-xs font-bold text-[#ea580c]">{hops[activeHop].title}</span>
          <span className="font-mono text-[11px] text-stone-500">Protocol: {hops[activeHop].proto}</span>
        </div>
        <p className="text-xs md:text-sm text-stone-700 leading-relaxed">{hops[activeHop].desc}</p>
      </div>
    </div>
  );
}

function PacketEncapsulationDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Layered Encapsulation
          </span>
          <h4 className="text-base font-bold text-stone-900">
            How Protocols Wrap Data Like Russian Matryoshka Dolls
          </h4>
        </div>
      </div>

      {/* Nested Visual Boxes */}
      <div className="rounded-2xl border-2 border-stone-800 bg-stone-900 p-4 text-white">
        <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
          <span>Ethernet Frame (Link Layer)</span>
          <span>Source MAC: 00:1A:2B:3C:4D:5E → Next-Hop Router MAC</span>
        </div>

        <div className="rounded-xl border-2 border-blue-500 bg-blue-950/80 p-4">
          <div className="flex items-center justify-between text-xs font-mono text-blue-300 mb-2">
            <span>IP Header (Network Layer)</span>
            <span>Src IP: 10.20.10.15 → Dst IP: 203.0.113.25 • TTL: 64</span>
          </div>

          <div className="rounded-lg border-2 border-amber-500 bg-amber-950/80 p-4">
            <div className="flex items-center justify-between text-xs font-mono text-amber-300 mb-2">
              <span>TCP Header (Transport Layer)</span>
              <span>Src Port: 52148 → Dst Port: 443 • Seq: 1042 • ACK</span>
            </div>

            <div className="rounded-md border-2 border-emerald-400 bg-emerald-900/90 p-4 text-center">
              <span className="font-mono text-xs font-bold text-emerald-200 block">
                Application Payload (HTTP / TLS Layer)
              </span>
              <span className="font-mono text-[11px] text-emerald-300 mt-1 block">
                GET /api/checkout HTTP/1.1 (Encrypted Ciphertext)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-3 gap-3 text-xs text-stone-600">
        <div className="p-3 rounded-xl bg-stone-100 border border-stone-200">
          <strong className="text-stone-900 block mb-1">Switches (Layer 2):</strong>
          Inspect only the outer Ethernet Frame Header (MAC address) to forward frames to local physical switch ports.
        </div>
        <div className="p-3 rounded-xl bg-stone-100 border border-stone-200">
          <strong className="text-stone-900 block mb-1">Routers (Layer 3):</strong>
          Strip Ethernet frame, inspect the IP Header destination, determine the next hop via route tables, and re-encapsulate with a new MAC.
        </div>
        <div className="p-3 rounded-xl bg-stone-100 border border-stone-200">
          <strong className="text-stone-900 block mb-1">Host OS (Layer 4):</strong>
          Inspects the TCP Port number (e.g. 443) and dispatches the payload to the specific socket listening process.
        </div>
      </div>
    </div>
  );
}

function TcpHandshakeDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            RFC 9293 Transport State
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The TCP 3-Way Handshake (SYN → SYN-ACK → ACK)
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 relative py-4">
        {/* Client Column */}
        <div className="text-center">
          <div className="rounded-xl border border-stone-300 bg-stone-100 py-2 px-3 font-mono text-xs font-bold text-stone-800 inline-block mb-6">
            Client Browser (10.20.1.5)
          </div>
          <div className="space-y-12 text-xs font-mono">
            <div className="text-stone-500">CLOSED</div>
            <div className="text-amber-600 font-bold">SYN_SENT</div>
            <div className="text-emerald-600 font-bold">ESTABLISHED (Can send data)</div>
          </div>
        </div>

        {/* Server Column */}
        <div className="text-center">
          <div className="rounded-xl border border-stone-300 bg-stone-100 py-2 px-3 font-mono text-xs font-bold text-stone-800 inline-block mb-6">
            Cloud Server (10.20.50.10:443)
          </div>
          <div className="space-y-12 text-xs font-mono">
            <div className="text-stone-500">LISTEN (Port 443)</div>
            <div className="text-amber-600 font-bold">SYN_RCVD</div>
            <div className="text-emerald-600 font-bold">ESTABLISHED (Connection Ready)</div>
          </div>
        </div>

        {/* Arrows overlay */}
        <div className="absolute inset-0 flex flex-col justify-around pointer-events-none pt-16 pb-4">
          <div className="flex items-center justify-between px-16 text-[#ea580c] font-mono text-[11px] font-bold">
            <span>1. SYN (seq=100) ──────────────────────────▶</span>
          </div>
          <div className="flex items-center justify-between px-16 text-blue-600 font-mono text-[11px] font-bold">
            <span>◀────────────────────────── 2. SYN-ACK (seq=300, ack=101)</span>
          </div>
          <div className="flex items-center justify-between px-16 text-emerald-600 font-mono text-[11px] font-bold">
            <span>3. ACK (ack=301) ──────────────────────────▶</span>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-orange-50 border border-orange-200 p-3 text-xs text-orange-950">
        <strong>Flow Control vs Congestion Control:</strong> Flow control protects the receiver from buffer overflow using the Receive Window (`rwnd`). Congestion control protects the physical internet pipes from bottleneck drops using the Congestion Window (`cwnd`).
      </div>
    </div>
  );
}

function DnsResolutionDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            RFC 1034 Namespace Resolution
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Hierarchical Recursive DNS Resolution Flow
          </h4>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50">
          <div className="font-mono text-xs font-bold text-stone-800">
            Step 1: Laptop → Recursive Resolver
          </div>
          <span className="text-xs text-stone-500">"Where is api.example.com?"</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50">
          <div className="font-mono text-xs font-bold text-stone-800">
            Step 2: Resolver → Root Nameserver (.)
          </div>
          <span className="text-xs text-stone-500">"I don't know api.example.com, ask the .com TLD server."</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-xl border border-stone-200 bg-stone-50">
          <div className="font-mono text-xs font-bold text-stone-800">
            Step 3: Resolver → .com TLD Nameserver
          </div>
          <span className="text-xs text-stone-500">"Ask example.com's authoritative nameserver (ns-1.awsdns.com)."</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-xl border border-emerald-300 bg-emerald-50">
          <div className="font-mono text-xs font-bold text-emerald-900">
            Step 4: Resolver → Route 53 Authoritative Nameserver
          </div>
          <span className="text-xs font-mono font-bold text-emerald-700">"api.example.com is 203.0.113.25 (TTL: 300s)"</span>
        </div>
      </div>
    </div>
  );
}

function TlsHandshakeDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            RFC 8446 Cryptography
          </span>
          <h4 className="text-base font-bold text-stone-900">
            TLS 1.3 Fast 1-RTT Handshake Architecture
          </h4>
        </div>
      </div>

      <div className="space-y-3 text-xs font-mono">
        <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-3">
          <span className="font-bold text-[#ea580c] block">1. ClientHello (1-RTT begins):</span>
          <span>Supported Cipher Suites + Diffie-Hellman Key Share + SNI (shop.example.com)</span>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3">
          <span className="font-bold text-blue-800 block">2. ServerHello (1-RTT completes):</span>
          <span>Chosen Cipher (AES-256-GCM) + Server Key Share + Digital Certificate + Finished</span>
        </div>

        <div className="rounded-xl border-2 border-emerald-400 bg-emerald-50 p-3">
          <span className="font-bold text-emerald-800 block">3. Symmetric Encryption Established:</span>
          <span>Both client & server derive identical symmetric session keys. All HTTP GET/POST data is encrypted with Perfect Forward Secrecy.</span>
        </div>
      </div>
    </div>
  );
}

function CidrCalculatorDiagram({ cidrInput, setCidrInput, cidrData }) {
  const commonCidrs = ["10.20.0.0/16", "10.20.0.0/20", "10.20.1.0/24", "10.20.10.0/28"];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Classless Inter-Domain Routing Math Engine
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Interactive Subnet Calculator & Cloud Address Allocator
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-600">Enter CIDR:</span>
          <input
            type="text"
            value={cidrInput}
            onChange={(e) => setCidrInput(e.target.value)}
            className="w-36 rounded-lg border border-orange-300 bg-orange-50 px-2.5 py-1 font-mono text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
            placeholder="10.20.0.0/20"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs text-stone-500 self-center">Presets:</span>
        {commonCidrs.map((c) => (
          <button
            key={c}
            onClick={() => setCidrInput(c)}
            className="rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-200 px-2.5 py-1 font-mono text-xs font-semibold text-stone-800"
          >
            {c}
          </button>
        ))}
      </div>

      {cidrData ? (
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="font-mono text-[10px] text-stone-500 uppercase block">Total Addresses</span>
            <div className="text-lg font-black text-stone-900 font-mono mt-0.5">{cidrData.totalIps}</div>
            <span className="text-[10px] text-stone-400">2^{cidrData.hostBits} total blocks</span>
          </div>

          <div className="rounded-xl border border-orange-300 bg-orange-50/70 p-3 text-center">
            <span className="font-mono text-[10px] text-orange-700 uppercase block font-bold">Usable Host IPs</span>
            <div className="text-lg font-black text-[#ea580c] font-mono mt-0.5">{cidrData.usableIps}</div>
            <span className="text-[10px] text-orange-600">Minus 5 Cloud Reserved</span>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="font-mono text-[10px] text-stone-500 uppercase block">Subnet Mask</span>
            <div className="text-sm font-bold text-stone-800 font-mono mt-1">{cidrData.subnetMask}</div>
            <span className="text-[10px] text-stone-400">Dotted Decimal Mask</span>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="font-mono text-[10px] text-stone-500 uppercase block">Recommended Tier</span>
            <div className="text-sm font-bold text-emerald-800 mt-1">
              {cidrData.prefix <= 16 ? "VPC Supernet" : cidrData.prefix <= 20 ? "Major Subnet" : cidrData.prefix <= 24 ? "App/DB Subnet" : "Micro Cluster"}
            </div>
            <span className="text-[10px] text-stone-400">Architecture sizing</span>
          </div>
        </div>
      ) : (
        <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700">
          Invalid CIDR notation. Enter a valid IPv4 address and prefix length between /0 and /32 (e.g. 10.20.0.0/20).
        </div>
      )}

      <div className="mt-4 rounded-xl bg-stone-100 p-3 text-xs text-stone-700 border border-stone-200">
        <strong>AWS / Azure 5 Reserved Addresses:</strong> .0 (Network address), .1 (VPC Virtual Router), .2 (DNS Server mapping), .3 (Future expansion), and .255 (Network Broadcast).
      </div>
    </div>
  );
}

function RouteTableSimulatorDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Software-Defined Routing
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Route Table Resolution & Longest Prefix Match (LPM)
          </h4>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-stone-500">
              <th className="py-2.5 px-3">Destination CIDR</th>
              <th className="py-2.5 px-3">Next Hop Target</th>
              <th className="py-2.5 px-3">Priority / Specificity</th>
              <th className="py-2.5 px-3">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-800">
            <tr className="hover:bg-orange-50/40">
              <td className="py-2.5 px-3 font-bold text-amber-700">10.20.10.0/24</td>
              <td className="py-2.5 px-3">vpc-peering-0812</td>
              <td className="py-2.5 px-3 font-bold text-emerald-600">Longest Match (/24)</td>
              <td className="py-2.5 px-3 font-sans text-stone-600">Direct partner VPC microservice</td>
            </tr>
            <tr className="hover:bg-orange-50/40">
              <td className="py-2.5 px-3 font-bold text-blue-700">10.20.0.0/16</td>
              <td className="py-2.5 px-3">local</td>
              <td className="py-2.5 px-3">Medium (/16)</td>
              <td className="py-2.5 px-3 font-sans text-stone-600">All internal VPC communication</td>
            </tr>
            <tr className="hover:bg-orange-50/40">
              <td className="py-2.5 px-3 font-bold text-stone-600">0.0.0.0/0</td>
              <td className="py-2.5 px-3">nat-gateway-01ab</td>
              <td className="py-2.5 px-3">Default (/0)</td>
              <td className="py-2.5 px-3 font-sans text-stone-600">Catch-all for outbound public Internet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SecurityGroupChainDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Defense-In-Depth Firewall Chaining
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Security Group Chaining Architecture (Zero Hardcoded IPs)
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Tier 1: ALB */}
        <div className="rounded-xl border border-stone-300 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-stone-900">sg-alb (Public Ingress)</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-emerald-700 block">Inbound: Port 443</span>
              <span className="text-stone-500 text-[10px]">Source: 0.0.0.0/0 (Internet)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-[#ea580c] block">Outbound: Port 8080</span>
              <span className="text-stone-500 text-[10px]">Target: sg-app-servers</span>
            </div>
          </div>
        </div>

        {/* Tier 2: App */}
        <div className="rounded-xl border-2 border-orange-300 bg-orange-50/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-[#ea580c]">sg-app (Private Compute)</span>
            <span className="h-2 w-2 rounded-full bg-[#f97316]" />
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-orange-200">
              <span className="text-emerald-700 block">Inbound: Port 8080</span>
              <span className="text-stone-500 text-[10px]">Source: sg-alb ONLY</span>
            </div>
            <div className="p-2 rounded bg-white border border-orange-200">
              <span className="text-[#ea580c] block">Outbound: Port 5432</span>
              <span className="text-stone-500 text-[10px]">Target: sg-database</span>
            </div>
          </div>
        </div>

        {/* Tier 3: DB */}
        <div className="rounded-xl border border-stone-300 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-stone-900">sg-db (Isolated Data)</span>
            <span className="h-2 w-2 rounded-full bg-blue-500" />
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-emerald-700 block">Inbound: Port 5432</span>
              <span className="text-stone-500 text-[10px]">Source: sg-app ONLY</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-red-700 block">Inbound from Internet:</span>
              <span className="text-stone-500 text-[10px]">DENIED (Implicit)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadBalancerRoutingDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Layer 7 vs Layer 4
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Application Load Balancer (ALB) Path-Based Routing
          </h4>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="rounded-xl border-2 border-orange-400 bg-orange-50 px-6 py-2.5 text-center">
          <span className="font-mono text-xs font-bold text-[#ea580c] block">
            ALB Ingress Listener (shop.example.com:443)
          </span>
          <span className="text-[10px] text-stone-500">Evaluates URL Path Rules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full text-xs font-mono">
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="text-stone-800 font-bold block">Path: /api/orders*</span>
            <span className="text-stone-500 text-[10px]">→ Target Group: Checkout Microservice</span>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="text-stone-800 font-bold block">Path: /search*</span>
            <span className="text-stone-500 text-[10px]">→ Target Group: Search Cluster</span>
          </div>

          <div className="rounded-xl border border-stone-200 bg-stone-50 p-3 text-center">
            <span className="text-stone-800 font-bold block">Default Rule: /*</span>
            <span className="text-stone-500 text-[10px]">→ Target Group: Web App Frontends</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HybridConnectivityDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Enterprise Hybrid Cloud
          </span>
          <h4 className="text-base font-bold text-stone-900">
            IPsec Site-to-Site VPN vs. Dedicated Direct Connect / ExpressRoute
          </h4>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-stone-800">IPsec Site-to-Site VPN</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Encrypted</span>
          </div>
          <p className="text-xs text-stone-600 mb-3">
            Encrypted IPsec tunnel routed across the public Internet. Fast setup, capped at 1.25 Gbps per tunnel, variable internet latency.
          </p>
          <div className="text-[11px] font-mono text-stone-700 bg-white p-2 rounded border border-stone-200">
            On-Prem (10.10.0.0/16) ──[Encrypted Tunnel over Web]──▶ Virtual Private Gateway
          </div>
        </div>

        <div className="rounded-xl border-2 border-orange-300 bg-orange-50/50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs font-bold text-[#ea580c]">Dedicated Direct Connect / ExpressRoute</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">Dedicated Circuit</span>
          </div>
          <p className="text-xs text-stone-600 mb-3">
            Dedicated 1Gbps – 100Gbps physical cross-connect fiber. Ultra-low latency, zero internet jitter. NOT encrypted by default.
          </p>
          <div className="text-[11px] font-mono text-stone-700 bg-white p-2 rounded border border-orange-200">
            On-Prem Router ──[Private Telecom Fiber Cross-Connect]──▶ Direct Connect Location
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductionVpcBlueprintDiagram({ copyCode, copiedCodeId }) {
  const terraformCode = `# Production Multi-AZ VPC Blueprint (10.20.0.0/16)
resource "aws_vpc" "main" {
  cidr_block           = "10.20.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "production-vpc" }
}

# AZ-A & AZ-B Subnet Allocation
# Public Tier (ALBs & NAT Gateways)
resource "aws_subnet" "public_az_a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.20.0.0/20"
  availability_zone = "us-east-1a"
}

# Private App Tier (Compute Instances)
resource "aws_subnet" "app_az_a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.20.16.0/20"
  availability_zone = "us-east-1a"
}

# Private Database Tier (Isolated)
resource "aws_subnet" "db_az_a" {
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.20.32.0/20"
  availability_zone = "us-east-1a"
}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 md:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Capstone Infrastructure Blueprint
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Production-Grade Multi-AZ VPC (10.20.0.0/16)
          </h4>
        </div>

        <button
          onClick={() => copyCode(terraformCode, "vpc-tf")}
          className="flex items-center gap-1.5 rounded-lg border border-orange-300 bg-orange-50 px-3 py-1 text-xs font-mono font-bold text-[#ea580c]"
        >
          <Copy size={13} />
          {copiedCodeId === "vpc-tf" ? "Copied Terraform!" : "Copy Terraform"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* AZ-A */}
        <div className="rounded-xl border border-orange-300 bg-orange-50/40 p-4">
          <span className="font-mono text-xs font-bold text-[#ea580c] block mb-2">
            Availability Zone A (us-east-1a)
          </span>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-emerald-700 font-bold block">Public Subnet: 10.20.0.0/20</span>
              <span className="text-stone-500 text-[10px]">ALB Listener + NAT Gateway A (0.0.0.0/0 → IGW)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-blue-700 font-bold block">Private App Subnet: 10.20.16.0/20</span>
              <span className="text-stone-500 text-[10px]">App VM 1 & 2 (0.0.0.0/0 → NAT Gateway A)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-stone-800 font-bold block">Private DB Subnet: 10.20.32.0/20</span>
              <span className="text-stone-500 text-[10px]">Primary PostgreSQL (Local Route Only)</span>
            </div>
          </div>
        </div>

        {/* AZ-B */}
        <div className="rounded-xl border border-stone-300 bg-stone-50/60 p-4">
          <span className="font-mono text-xs font-bold text-stone-800 block mb-2">
            Availability Zone B (us-east-1b)
          </span>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-emerald-700 font-bold block">Public Subnet: 10.20.48.0/20</span>
              <span className="text-stone-500 text-[10px]">ALB Listener + NAT Gateway B (0.0.0.0/0 → IGW)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-blue-700 font-bold block">Private App Subnet: 10.20.64.0/20</span>
              <span className="text-stone-500 text-[10px]">App VM 3 & 4 (0.0.0.0/0 → NAT Gateway B)</span>
            </div>
            <div className="p-2 rounded bg-white border border-stone-200">
              <span className="text-stone-800 font-bold block">Private DB Subnet: 10.20.80.0/20</span>
              <span className="text-stone-500 text-[10px]">Standby DB Replica (Local Route Only)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PacketTroubleshootingGame({
  packetGameScenarios,
  packetScenarioIndex,
  setPacketScenarioIndex,
  packetSelection,
  handlePacketGameAnswer,
  packetScore,
  packetHistory,
}) {
  const currentScenario = packetGameScenarios[packetScenarioIndex];
  const historyForCurrent = packetHistory[currentScenario.id];

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-orange-300 bg-white p-5 md:p-6 shadow-md">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c] flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-red-500" />
            Live Packet Failure Game
          </span>
          <h4 className="text-base font-bold text-stone-900">
            "You are the Network Architect" Production Crisis Game
          </h4>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-mono font-bold text-[#ea580c]">
            Score: {packetScore} / 90
          </div>

          <div className="flex gap-1">
            {packetGameScenarios.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setPacketScenarioIndex(idx)}
                className={`h-7 w-7 rounded-lg font-mono text-xs font-bold transition ${
                  packetScenarioIndex === idx
                    ? "bg-[#f97316] text-white"
                    : packetHistory[s.id]
                    ? packetHistory[s.id].isCorrect
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-red-100 text-red-800 border border-red-300"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <h5 className="font-bold text-stone-900 text-sm mb-1">{currentScenario.title}</h5>
        <p className="text-xs md:text-sm text-stone-600 leading-relaxed">{currentScenario.context}</p>
      </div>

      <div className="mb-4">
        <h6 className="font-bold text-stone-900 text-xs md:text-sm">{currentScenario.question}</h6>
      </div>

      <div className="space-y-2.5">
        {currentScenario.options.map((opt) => {
          const isSelected = historyForCurrent?.optionId === opt.id;
          let btnStyle = "border-stone-200 hover:border-orange-300 bg-white";

          if (isSelected) {
            btnStyle = opt.isCorrect
              ? "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold"
              : "border-red-500 bg-red-50 text-red-950 font-bold";
          }

          return (
            <div key={opt.id}>
              <button
                type="button"
                onClick={() => handlePacketGameAnswer(currentScenario, opt)}
                className={`w-full text-left rounded-xl border-2 p-3.5 text-xs md:text-sm transition flex items-start gap-3 ${btnStyle}`}
              >
                <span className="font-mono font-bold text-stone-400">{opt.id}.</span>
                <span className="flex-1">{opt.text}</span>
              </button>

              {isSelected && (
                <div
                  className={`mt-2 rounded-lg p-3 text-xs leading-relaxed border ${
                    opt.isCorrect
                      ? "bg-emerald-100/70 border-emerald-300 text-emerald-900"
                      : "bg-red-100/70 border-red-300 text-red-900"
                  }`}
                >
                  <strong className="block mb-1 font-bold">{opt.verdict}</strong>
                  <span>{opt.explanation}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex justify-between items-center border-t border-stone-200 pt-4">
        <button
          disabled={packetScenarioIndex === 0}
          onClick={() => setPacketScenarioIndex((prev) => prev - 1)}
          className="rounded-lg border border-stone-200 px-3 py-1.5 text-xs font-bold text-stone-600 disabled:opacity-40"
        >
          Previous Scenario
        </button>

        <span className="font-mono text-xs text-stone-400">
          Scenario {packetScenarioIndex + 1} of {packetGameScenarios.length}
        </span>

        <button
          disabled={packetScenarioIndex === packetGameScenarios.length - 1}
          onClick={() => setPacketScenarioIndex((prev) => prev + 1)}
          className="rounded-lg bg-[#f97316] px-4 py-1.5 text-xs font-bold text-white shadow-xs disabled:opacity-40"
        >
          Next Scenario
        </button>
      </div>
    </div>
  );
}
