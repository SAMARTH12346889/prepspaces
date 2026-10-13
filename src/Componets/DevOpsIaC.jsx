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
  Cloud,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsIaC() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'plan-lab' | 'drift-lab' | 'sre-gameday' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);

  // =========================================================================
  // SIMULATOR 1: TERRAFORM PLAN & DEPENDENCY GRAPH VISUALIZER
  // =========================================================================
  const [simulatedChange, setSimulatedChange] = useState("tag_update"); // 'tag_update' | 'cidr_replacement' | 'add_security_rule'
  const [planOutput, setPlanOutput] = useState([
    "Terraform used the selected providers to generate the following execution plan.",
    "Resource actions are indicated with the following symbols:",
    "  ~ update in-place",
    "",
    "Terraform will perform the following actions:",
    "",
    "  # aws_vpc.main will be updated in-place",
    "  ~ resource \"aws_vpc\" \"main\" {",
    "        id                                   = \"vpc-0a8b9c1d2e3f4\"",
    "        cidr_block                           = \"10.20.0.0/16\"",
    "      ~ tags                                 = {",
    "            \"Environment\" = \"dev\"",
    "          + \"Owner\"       = \"sre-team\"",
    "            \"Project\"     = \"DevOpsLearning\"",
    "        }",
    "    }",
    "",
    "Plan: 0 to add, 1 to change, 0 to destroy.",
  ]);

  const handleRunPlan = (changeType) => {
    setSimulatedChange(changeType);
    if (changeType === "tag_update") {
      setPlanOutput([
        "Terraform used the selected providers to generate the following execution plan.",
        "Resource actions are indicated with the following symbols:",
        "  ~ update in-place",
        "",
        "Terraform will perform the following actions:",
        "",
        "  # aws_vpc.main will be updated in-place",
        "  ~ resource \"aws_vpc\" \"main\" {",
        "        id           = \"vpc-0a8b9c1d2e3f4\"",
        "        cidr_block   = \"10.20.0.0/16\"",
        "      ~ tags         = {",
        "          + \"CostCenter\" = \"CC-8820\"",
        "            \"ManagedBy\"  = \"Terraform\"",
        "        }",
        "    }",
        "",
        "Plan: 0 to add, 1 to change, 0 to destroy.",
      ]);
    } else if (changeType === "cidr_replacement") {
      setPlanOutput([
        "Terraform used the selected providers to generate the following execution plan.",
        "Resource actions are indicated with the following symbols:",
        "  -/+ destroy and then create replacement",
        "",
        "Terraform will perform the following actions:",
        "",
        "  # aws_subnet.app must be REPLACED (Forces new resource)",
        "-/+ resource \"aws_subnet\" \"app\" {",
        "      ~ cidr_block = \"10.20.1.0/24\" -> \"10.20.2.0/24\" (forces replacement)",
        "      ~ id         = \"subnet-09f1a2\" -> (known after apply)",
        "        vpc_id     = \"vpc-0a8b9c1d2e3f4\"",
        "    }",
        "",
        "Plan: 1 to add, 0 to change, 1 to destroy.",
      ]);
    } else if (changeType === "add_security_rule") {
      setPlanOutput([
        "Terraform used the selected providers to generate the following execution plan.",
        "Resource actions are indicated with the following symbols:",
        "  + create",
        "",
        "Terraform will perform the following actions:",
        "",
        "  # aws_security_group_rule.allow_tls will be created",
        "  + resource \"aws_security_group_rule\" \"allow_tls\" {",
        "      + from_port         = 443",
        "      + to_port           = 443",
        "      + protocol          = \"tcp\"",
        "      + cidr_blocks       = [\"0.0.0.0/0\"]",
        "      + security_group_id = \"sg-01ab8c9\"",
        "      + type              = \"ingress\"",
        "    }",
        "",
        "Plan: 1 to add, 0 to change, 0 to destroy.",
      ]);
    }
  };

  // =========================================================================
  // SIMULATOR 2: STATE DRIFT DETECTION & RECONCILIATION SANDBOX
  // =========================================================================
  const [driftStatus, setDriftStatus] = useState("drift_detected"); // 'drift_detected' | 'reconciled' | 'accepted_refresh'
  const [driftTerminalLog, setDriftTerminalLog] = useState([
    "Drift Scenario: An engineer logged into AWS Console at 2:00 AM and manually added an unauthorized ingress rule (Port 22 from 0.0.0.0/0).",
    "Declared HCL code allows ONLY port 443 (HTTPS).",
    "Run 'terraform plan' to inspect drift or 'terraform apply -refresh-only' to accept external changes into state.",
  ]);

  const handlePlanDrift = () => {
    setDriftTerminalLog([
      "$ terraform plan",
      "Refreshing Terraform state in-memory prior to plan...",
      "aws_security_group.web: Refreshing state... [id=sg-0a8b9c1]",
      "",
      "Note: Objects have changed outside of Terraform",
      "Terraform detected the following changes made outside of Terraform:",
      "  # aws_security_group.web has changed:",
      "  ~ ingress {",
      "      + from_port   = 22",
      "      + to_port     = 22",
      "      + protocol    = \"tcp\"",
      "      + cidr_blocks = [\"0.0.0.0/0\"]  <-- Out-of-band manual console change!",
      "    }",
      "",
      "Terraform will perform the following actions to restore declared state:",
      "  # aws_security_group.web will be updated in-place (reverting manual console edit)",
      "  ~ ingress {",
      "      - from_port   = 22",
      "      - to_port     = 22",
      "      - protocol    = \"tcp\"",
      "      - cidr_blocks = [\"0.0.0.0/0\"]",
      "    }",
      "",
      "Plan: 0 to add, 1 to change, 0 to destroy.",
    ]);
  };

  const handleApplyReconcile = () => {
    setDriftStatus("reconciled");
    setDriftTerminalLog([
      "$ terraform apply -auto-approve",
      "aws_security_group.web: Modifying... [id=sg-0a8b9c1]",
      "aws_security_group.web: Modifications complete after 2s [id=sg-0a8b9c1]",
      "",
      "Apply complete! Resources: 0 added, 1 changed, 0 destroyed.",
      "[SUCCESS] Out-of-band console change reverted! Infrastructure matches declared HCL code.",
    ]);
  };

  const handleRefreshOnlyApply = () => {
    setDriftStatus("accepted_refresh");
    setDriftTerminalLog([
      "$ terraform apply -refresh-only -auto-approve",
      "aws_security_group.web: Refreshing state... [id=sg-0a8b9c1]",
      "",
      "Apply complete! State refreshed to include manual console change without modifying cloud infrastructure.",
      "[WARNING] State now reflects manual changes, but HCL code will drift again on next plan unless HCL is updated.",
    ]);
  };

  // =========================================================================
  // SIMULATOR 3: SRE IAC SECURITY & PRODUCTION TRIAGE GAMEDAY
  // =========================================================================
  const incidentScenarios = [
    {
      id: "inc-1",
      title: "Incident 1: Plaintext Secret Committed in Local terraform.tfstate",
      symptom: "A developer marked a variable 'sensitive = true' and committed the root directory to Git, assuming sensitive values are encrypted on disk.",
      codeSnippet: `variable "db_password" {
  type      = string
  sensitive = true
}

resource "aws_db_instance" "app" {
  password = var.db_password
}

# In git repository:
git add terraform.tfstate
git commit -m "feat: provision database"`,
      question: "The developer claims 'sensitive = true' encrypted the password in the state file. Is this correct?",
      options: [
        {
          id: "opt-a",
          label: "Yes: sensitive = true uses AES-256 to encrypt the state file before writing to disk.",
          correct: false,
          explanation: "Dangerous misconception! 'sensitive = true' only masks the value from terminal stdout/stderr display output (showing '(sensitive value)'). The state file (terraform.tfstate) stores all resource attributes in completely unencrypted PLAINTEXT JSON."
        },
        {
          id: "opt-b",
          label: "No: sensitive = true only masks console outputs. The state file stores secrets in cleartext JSON. Remediate: Immediately rotate the database password, scrub Git history, and migrate to an encrypted remote backend (S3/GCS) with strict IAM controls.",
          correct: true,
          explanation: "Authoritative Terraform security doctrine: State files store all resource attributes in cleartext. Local state must NEVER be committed to Git. The database password must be rotated immediately, and state migrated to an encrypted remote backend with KMS."
        },
        {
          id: "opt-c",
          label: "Yes, but only if Terraform is running on Linux.",
          correct: false,
          explanation: "Terraform state formatting is identical across all operating systems."
        }
      ]
    },
    {
      id: "inc-2",
      title: "Incident 2: Concurrent Apply Race & State Lock Failure",
      symptom: "Two CI/CD runners triggered simultaneously. Runner 2 failed with: 'Error: Error acquiring the state lock: ConditionalCheckFailedException'.",
      codeSnippet: `Error: Error acquiring the state lock
Lock Info:
  ID:        a1b2c3d4-e5f6-7890-abcd-ef1234567890
  Path:      labs/aws/network/terraform.tfstate
  Operation: OperationTypeApply
  Who:       runner@github-actions-worker-04
  Created:   2026-10-10 07:15:22.451921 +0000 UTC`,
      question: "What is the proper SRE action when state locking halts a pipeline?",
      options: [
        {
          id: "opt-a",
          label: "Rerun the job with 'terraform apply -lock=false' to bypass the safety check.",
          correct: false,
          explanation: "Bypassing locks can result in catastrophic state corruption where two operations overwrite each other's state views concurrently."
        },
        {
          id: "opt-b",
          label: "Wait for the active pipeline (runner-04) to complete. If the runner crashed and the lock is genuinely orphaned, verify no operation is running, then run 'terraform force-unlock <ID>'.",
          correct: true,
          explanation: "State locking prevents concurrent corruption. If an operation is actively running, subsequent runners must wait. Only if the process died abruptly should an SRE force-unlock after verifying no concurrent modification is taking place."
        },
        {
          id: "opt-c",
          label: "Delete the entire S3 bucket to clear the lock.",
          correct: false,
          explanation: "Deleting the state bucket destroys all infrastructure mappings and metadata."
        }
      ]
    },
    {
      id: "inc-3",
      title: "Incident 3: Destructive Replacement Warning (-/+) on Production Database",
      symptom: "A pull request changing an RDS database parameter generated a plan showing: '-/+ destroy and then create replacement'.",
      codeSnippet: `# terraform plan output in PR:
-/+ resource "aws_db_instance" "prod" {
      ~ identifier = "prod-db-v1" -> "prod-database-primary" (forces replacement)
      ...
    }
Plan: 1 to add, 0 to change, 1 to destroy.`,
      question: "What is the consequence of applying this plan in production, and how should it be avoided?",
      options: [
        {
          id: "opt-a",
          label: "Terraform will seamlessly rename the database with zero downtime.",
          correct: false,
          explanation: "The '-/+' symbol signifies destructive replacement. Changing the identifier on AWS RDS forces the deletion of the existing database instance before creating a new empty one."
        },
        {
          id: "opt-b",
          label: "Applying this plan will DESTROY the existing production database and all stored data! SREs must reject the PR, add lifecycle { prevent_destroy = true }, and avoid changing immutable attributes directly.",
          correct: true,
          explanation: "Crucial IaC review gate: In cloud APIs, immutable attributes (like DB identifiers or KMS keys) cannot be modified in-place. Terraform resolves this by destroying the old resource. SREs must configure 'prevent_destroy = true' on critical stateful resources to block accidental deletion."
        },
        {
          id: "opt-c",
          label: "The database will be backed up automatically to floppy disk.",
          correct: false,
          explanation: "Terraform does not perform automatic out-of-band disk backups prior to destruction."
        }
      ]
    },
    {
      id: "inc-4",
      title: "Incident 4: The Backend Bootstrapping Circular Dependency",
      symptom: "A new project attempts to define the S3 state bucket and the 'backend \"s3\"' block in the exact same root module on day 1.",
      codeSnippet: `terraform {
  backend "s3" {
    bucket = "company-tfstate-bucket-2026"
    key    = "core.tfstate"
  }
}

resource "aws_s3_bucket" "state" {
  bucket = "company-tfstate-bucket-2026"
}`,
      question: "Why does 'terraform init' fail immediately in this scenario, and how is it resolved?",
      options: [
        {
          id: "opt-a",
          label: "Terraform init configures the remote backend BEFORE executing resource blocks. The S3 bucket does not exist yet. Fix: Provision the state storage bucket separately (via CLI or a bootstrap root module), then configure the backend.",
          correct: true,
          explanation: "The Backend Bootstrapping Paradox: Terraform must connect to the backend storage during 'terraform init', before it can read or create any 'resource' blocks. The state bucket must be provisioned ahead of time using a separate bootstrap module or cloud CLI."
        },
        {
          id: "opt-b",
          label: "S3 buckets cannot store files ending in .tfstate.",
          correct: false,
          explanation: "S3 object keys can use any valid string name."
        },
        {
          id: "opt-c",
          label: "Change the backend from S3 to floppy disk.",
          correct: false,
          explanation: "Unconstructive answer."
        }
      ]
    },
    {
      id: "inc-5",
      title: "Incident 5: Multi-Platform Lock File (.terraform.lock.hcl) Checksum Failure in CI",
      symptom: "An engineer on macOS (Apple Silicon ARM64) committed '.terraform.lock.hcl'. The Linux x86-64 CI runner fails 'terraform init' with: 'Error: Failed to install provider ... checksum not in lockfile'.",
      codeSnippet: `Error: Failed to install provider
Provider hashicorp/aws v5.40.0 for linux_amd64 is not present
in the lock file with the expected checksum.`,
      question: "Why did the CI pipeline fail, and how should multi-platform lock files be generated?",
      options: [
        {
          id: "opt-a",
          label: "Delete .terraform.lock.hcl and add it to .gitignore.",
          correct: false,
          explanation: "Anti-pattern: The lock file must be committed to ensure reproducible, supply-chain-secure provider dependencies across the team."
        },
        {
          id: "opt-b",
          label: "Run 'terraform providers lock -platform=darwin_arm64 -platform=linux_amd64 hashicorp/aws' to record official cryptographic checksums for both macOS and Linux in the lock file.",
          correct: true,
          explanation: "Exact multi-platform solution: When developers work on macOS (darwin_arm64) and CI runs on Linux (linux_amd64), running 'terraform providers lock -platform=...' queries the HashiCorp registry and pre-populates official checksums (zh: and h1: hashes) for all required architectures."
        },
        {
          id: "opt-c",
          label: "Reinstall macOS on the CI runner.",
          correct: false,
          explanation: "Enterprise CI pipelines standardize on Linux x86/ARM runners."
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
        id: "concept-iac",
        number: "01",
        title: "Understanding Infrastructure as Code: Declarative vs. Imperative",
        badge: "Convergence & HCL",
        summary:
          "The anti-pattern of manual cloud console clicks ('ClickOps'). Declarative HashiCorp Configuration Language (HCL) vs imperative shell scripts. The core Terraform lifecycle: init, fmt, validate, plan, apply, destroy.",
        details: [
          {
            heading: "The Failure of Manual 'ClickOps' & Shell Scripts",
            body: "Without Infrastructure as Code, engineers create networks and VMs by clicking through cloud consoles. This creates untracked drift, lacks peer review, cannot be tested, and makes disaster recovery nearly impossible. Imperative scripts (e.g. bash scripts executing `aws ec2 create-vpc`) are difficult to make idempotent: running them twice creates duplicate VPCs or crashes on existing resource names.",
          },
          {
            heading: "The Declarative Paradigm",
            body: "In declarative IaC, you declare the desired end state of your infrastructure:\n`resource \"aws_vpc\" \"main\" { cidr_block = \"10.20.0.0/16\" }`\nYou do not tell Terraform HOW to make API calls. Terraform inspects existing state, compares it with your code, calculates the minimal mathematical delta, and converges cloud infrastructure toward your desired state.",
          },
          {
            heading: "The Academic Operating System Foundation: Systems Abstractions",
            body: "As taught in MIT Operating System Engineering and Stanford CS111, operating systems manage hardware through standard abstractions (processes, filesystems, virtual memory). Similarly, Terraform acts as an operating system for the cloud, presenting high-level declarative abstractions over low-level, heterogeneous cloud provider REST APIs.",
          },
          {
            heading: "The Core Terraform Command Lifecycle",
            body: "1. `terraform init`: Downloads provider plugins and initializes the state backend.\n2. `terraform fmt -recursive`: Standardizes code formatting.\n3. `terraform validate`: Validates syntax and internal cross-resource references.\n4. `terraform plan`: Generates a speculative execution plan showing exact additions (+), updates (~), and destructions (-).\n5. `terraform apply`: Applies the approved plan against cloud APIs.\n6. `terraform destroy`: Removes managed resources in reverse dependency order.",
          },
        ],
        codeSnippet: `# The Standard Terraform Workflow
terraform init
terraform fmt -recursive
terraform validate

# Generate speculative execution plan
terraform plan -out=tfplan.binary

# Apply approved plan
terraform apply tfplan.binary`,
      },
      {
        id: "building-blocks",
        number: "02",
        title: "Terraform Building Blocks: Providers, Resources & Expressions",
        badge: "DAG & Type Constraints",
        summary:
          "Providers as cloud plugins. Resources and Data Sources. Input variables with custom validation rules. Local values, outputs, and the Resource Dependency Directed Acyclic Graph (DAG).",
        details: [
          {
            heading: "Providers: The Bridge to Cloud APIs",
            body: "A provider is an executable Go binary that translates HCL resource declarations into HTTP REST calls against cloud APIs (`hashicorp/aws`, `hashicorp/azurerm`, `hashicorp/google`). Providers declare supported resource types, data sources, and authentication schemas.",
          },
          {
            heading: "Resources vs. Data Sources",
            body: "- Resource (`resource \"type\" \"name\"`): Declares an infrastructure object that Terraform creates, manages, updates, and deletes.\n- Data Source (`data \"type\" \"name\"`): Reads read-only metadata about existing cloud resources created outside Terraform or by other configurations (e.g. looking up the latest Amazon Linux AMI ID).",
          },
          {
            heading: "Variables, Validation & Locals",
            body: "Input variables parameterize configurations. Always enforce custom validation rules to reject malformed inputs before plans execute:\n`validation { condition = contains([\"dev\", \"prod\"], var.environment) }`\nLocals define intermediate computed expressions to eliminate copy-paste repetition across tags and names.",
          },
          {
            heading: "The Resource Dependency Graph (DAG)",
            body: "Terraform automatically builds a Directed Acyclic Graph by parsing cross-resource references (e.g. `subnet.vpc_id = aws_vpc.main.id`). Resources with no dependencies are created concurrently in parallel (up to `default 10` threads), maximizing provisioning speed.",
          },
        ],
        codeSnippet: `# Providers, Resources, Variables and Locals
terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

variable "environment" {
  type = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}

locals {
  common_tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}`,
      },
      {
        id: "state-internals",
        number: "03",
        title: "Terraform State in Depth: Mappings & Security",
        badge: "Plaintext Warnings & .gitignore",
        summary:
          "Why state is needed (mapping addresses to cloud IDs). Why state is sensitive. Why 'sensitive = true' does NOT protect state files. Lock file (.terraform.lock.hcl) hygiene.",
        details: [
          {
            heading: "The Role of State: The Cloud Identity Map",
            body: "Cloud providers do not know what `aws_vpc.main` means; they only know `vpc-01a89c`. Terraform state (`terraform.tfstate`) is a JSON database that maps your declarative HCL resource addresses to real cloud IDs, metadata, and tracking attributes. It enables Terraform to calculate diffs and detect out-of-band drift.",
          },
          {
            heading: "CRITICAL: State Stores Secrets in Plaintext",
            body: "A dangerous misconception is that marking a variable `sensitive = true` protects it in state. It DOES NOT! `sensitive = true` only suppresses console output during `plan` and `apply`. In the state file, every database password, private key, and API token is written in CLEAR PLAINTEXT JSON! State files must be guarded as Tier-0 security assets.",
          },
          {
            heading: ".gitignore Hygiene for IaC",
            body: "Never commit state files or execution plans to Git:\n`.terraform/`\n`*.tfstate`\n`*.tfstate.*`\n`*.tfplan`\n`crash.log`\nHowever, ALWAYS commit `.terraform.lock.hcl` to ensure cryptographic integrity across team members and CI runners.",
          },
        ],
        codeSnippet: `# Mandatory .gitignore for Terraform
.terraform/
*.tfstate
*.tfstate.*
*.tfplan
crash.log

# Commit the lock file!
git add .terraform.lock.hcl`,
      },
      {
        id: "remote-backends",
        number: "04",
        title: "Remote Backends & Distributed State Locking",
        badge: "S3 Lockfiles & Azure Blob",
        summary:
          "Team collaboration and race conditions. Remote backends: AWS S3 (use_lockfile = true), Azure Blob Storage, and GCP GCS. State locking and the bootstrap paradox.",
        details: [
          {
            heading: "The Danger of Concurrent Applies",
            body: "If two engineers or CI pipelines run `terraform apply` simultaneously against local or uncoordinated state, they calculate conflicting plans from stale snapshots. One runner overwrites the other, corrupting state and leaving orphaned cloud resources.",
          },
          {
            heading: "State Locking Mechanics",
            body: "Remote backends coordinate writes using distributed locks. When an operation starts, Terraform acquires an exclusive lock. If another process attempts to plan or apply, it receives an error and halts immediately. HashiCorp's modern AWS S3 backend supports native lock files (`use_lockfile = true`), eliminating the need for separate DynamoDB tables.",
          },
          {
            heading: "The Backend Bootstrap Paradox",
            body: "You cannot define the S3 state bucket inside the same configuration that requires the S3 bucket to store its state! Solution: Provision the storage bucket using a dedicated bootstrap script or separate root module, enable versioning and KMS encryption, then configure the backend block.",
          },
        ],
        codeSnippet: `# Modern AWS S3 Remote Backend (Native Locking)
terraform {
  backend "s3" {
    bucket       = "corp-terraform-state-us-east-1"
    key          = "prod/networking/terraform.tfstate"
    region       = "us-east-1"
    use_lockfile = true
    encrypt      = true
  }
}`,
      },
      {
        id: "multicloud-networking",
        number: "05",
        title: "Multi-Cloud Networking: AWS, Azure & Google Cloud",
        badge: "VPC, VNet & Custom Subnets",
        summary:
          "Implementing clean network foundations across AWS (VPC), Azure (VNet), and GCP (custom VPC). Avoiding the monolithic multi-cloud provider trap.",
        details: [
          {
            heading: "Decoupled Multi-Cloud Architectures",
            body: "A frequent architectural mistake is attempting to build one massive Terraform file that instantiates AWS, Azure, and GCP providers simultaneously. This creates massive dependency knots and shared blast radiuses. Best Practice: Build independent root configurations (`environments/dev/aws/`, `environments/dev/azure/`) with provider-specific modules.",
          },
          {
            heading: "AWS Networking: VPC & Subnets",
            body: "AWS VPCs are regional (`cidr_block = \"10.20.0.0/16\"`), containing subnets tied to specific Availability Zones (AZs). Requires explicit Internet Gateway (IGW) and Route Table associations for public egress.",
          },
          {
            heading: "Azure Networking: Resource Groups & VNets",
            body: "Azure requires every resource to exist inside an `azurerm_resource_group`. Virtual Networks (`azurerm_virtual_network`) span entire Azure regions, with subnets declared via address prefixes (`address_prefixes = [\"10.30.1.0/24\"]`).",
          },
          {
            heading: "Google Cloud Networking: Global VPCs",
            body: "Unlike AWS and Azure, Google Cloud VPCs (`google_compute_network`) are GLOBAL resources. Subnets (`google_compute_subnetwork`) are regional. Always declare `auto_create_subnetworks = false` to enforce enterprise custom IP allocation.",
          },
        ],
        codeSnippet: `# AWS VPC
resource "aws_vpc" "main" {
  cidr_block = "10.20.0.0/16"
}

# Azure VNet
resource "azurerm_virtual_network" "main" {
  name                = "vnet-devops"
  address_space       = ["10.30.0.0/16"]
  location            = "eastus"
  resource_group_name = "rg-devops"
}

# GCP VPC
resource "google_compute_network" "main" {
  name                    = "gcp-devops-vpc"
  auto_create_subnetworks = false
}`,
      },
      {
        id: "modules-architecture",
        number: "06",
        title: "Reusable Modules & Enterprise Repository Design",
        badge: "Standard Module Layout",
        summary:
          "Designing child modules with main.tf, variables.tf, outputs.tf. Monorepo vs multi-repo directory hierarchies. Blast radius containment.",
        details: [
          {
            heading: "The Standard Module Structure",
            body: "A Terraform module is a self-contained directory containing:\n- `main.tf`: Resource definitions.\n- `variables.tf`: Explicit input parameters with descriptions and types.\n- `outputs.tf`: Declared values passed back to calling parent modules.\n- `README.md`: Usage documentation and requirements.",
          },
          {
            heading: "Avoiding Deeply Nested Modules",
            body: "HashiCorp explicitly warns against creating deep hierarchies of modules calling modules (module inception). Limit nesting to one level: Root Module calling Child Modules. Deep nesting obscures inputs, breaks debugging, and makes refactoring nearly impossible.",
          },
          {
            heading: "Directory Layout for Blast Radius Containment",
            body: "Separate environments into distinct directories:\n`environments/dev/aws/`\n`environments/staging/aws/`\n`environments/prod/aws/`\nEach environment has its own independent state file and IAM permissions. A defect applied in `dev` cannot touch `prod` state.",
          },
        ],
        codeSnippet: `# Calling a Child Module
module "vpc" {
  source      = "../../modules/aws-network"
  environment = "dev"
  cidr_block  = "10.20.0.0/16"
}

output "vpc_id" {
  value = module.vpc.vpc_id
}`,
      },
      {
        id: "drift-detection",
        number: "07",
        title: "State Drift Detection & External Reconciliation",
        badge: "plan vs refresh-only",
        summary:
          "What causes drift. Detecting out-of-band manual changes with 'terraform plan'. Refresh-only plans. Importing existing infrastructure with 'terraform import'.",
        details: [
          {
            heading: "What Causes Infrastructure Drift?",
            body: "Drift occurs when the real cloud infrastructure deviates from what is declared in code and state. Causes include: 2:00 AM emergency console edits, unmanaged automated cloud scripts, or auto-scaling groups modifying instances out-of-band.",
          },
          {
            heading: "terraform plan vs. terraform plan -refresh-only",
            body: "- `terraform plan`: Refreshes state and generates actions to OVERWRITE the cloud changes, returning infrastructure back to the declared HCL code.\n- `terraform plan -refresh-only`: Reads remote cloud state and proposes updating the state file to reflect cloud reality WITHOUT changing any cloud resources. Use this when intentionally adopting an external change.",
          },
          {
            heading: "Adopting Existing Infrastructure: terraform import",
            body: "When adopting an existing VPC or database into Terraform management, run `terraform import <address> <cloud-id>`. This creates the state mapping without attempting to create a duplicate resource.",
          },
        ],
        codeSnippet: `# 1. Detect drift and restore declared code:
terraform plan
terraform apply

# 2. Accept external drift into state metadata:
terraform plan -refresh-only
terraform apply -refresh-only

# 3. Import existing cloud resource into state:
terraform import aws_vpc.main vpc-01a89c2d`,
      },
      {
        id: "zero-trust-auth",
        number: "08",
        title: "Secrets Management & Zero-Trust Cloud Authentication",
        badge: "OIDC & Workload Identity",
        summary:
          "Eliminating static access keys. Using OpenID Connect (OIDC) federation in CI/CD. Role-based least privilege in AWS, Azure, and Google Cloud.",
        details: [
          {
            heading: "The Hazard of Static Cloud Credentials",
            body: "Storing static AWS Access Keys (`AKIA...`), Azure Client Secrets, or GCP service account keys inside CI/CD settings is a major security vulnerability. Static keys get leaked, forgotten, and cannot be easily rotated without breaking pipelines.",
          },
          {
            heading: "OpenID Connect (OIDC) Federation",
            body: "Modern production pipelines use OIDC: GitHub Actions requests an ephemeral cryptographic JWT token from GitHub. The cloud provider (AWS STS / Azure AD / GCP Workload Identity) verifies the token and issues a short-lived (1-hour) temporary role credential. Zero static keys exist.",
          },
          {
            heading: "Least-Privilege Role Scoping",
            body: "Never grant `AdministratorAccess` to Terraform CI runners. Scope IAM permissions strictly to the resources managed by that specific root configuration (e.g. EC2/VPC permissions for network runners).",
          },
        ],
        codeSnippet: `# GitHub Actions OIDC Authentication to AWS (Zero Static Secrets)
- name: Configure AWS Credentials via OIDC
  uses: aws-actions/configure-aws-credentials@v4
  with:
    role-to-assume: arn:aws:iam::123456789012:role/TerraformDeployerRole
    aws-region: us-east-1
    audience: sts.amazonaws.com`,
      },
      {
        id: "cicd-pipeline",
        number: "09",
        title: "Testing & The Production Pull Request Review Pipeline",
        badge: "Speculative Plans & Policy-as-Code",
        summary:
          "The GitOps IaC Pipeline. Running fmt, validate, and security linters (Tfsec / Checkov). Posting speculative plans to PR comments. Reviewing destructive replacements.",
        details: [
          {
            heading: "The IaC Pull Request Review Pipeline",
            body: "Infrastructure changes must go through the same rigorous code review as application code:\n1. Developer creates feature branch and pushes `.tf` changes.\n2. CI runs `terraform fmt -check` and `terraform validate`.\n3. Security scanners (Tfsec, Checkov, Trivy) scan for insecure security groups and unencrypted storage.\n4. CI runs speculative `terraform plan` and posts the formatted output as a PR comment.\n5. Senior SRE reviews diff, verifies resource counts, and approves.\n6. Merge to `main` automatically triggers `terraform apply`.",
          },
          {
            heading: "Reviewing Destructive Changes in Plans",
            body: "Reviewers must scan for the replacement symbol: `-/+`. If a plan proposes `-/+` on a production RDS database, Redis cluster, or primary VPC, it indicates that an immutable attribute was modified and data loss will occur unless handled with migration scripts.",
          },
        ],
        codeSnippet: `# CI/CD Validation Pipeline Checks
terraform fmt -check -recursive
terraform validate
tfsec .
terraform plan -no-color -out=tfplan.binary`,
      },
      {
        id: "blast-radius",
        number: "10",
        title: "Multi-Cloud Blast Radius Containment & Project Design",
        badge: "Monorepo Roots vs Workspaces",
        summary:
          "Containing operational blast radius. Why workspaces are not security boundaries. Multi-cloud project architecture and production promotion criteria.",
        details: [
          {
            heading: "Why Workspaces Are Not Security Boundaries",
            body: "Terraform workspaces store multiple states in the same backend bucket. However, workspaces share the same provider configuration, identical credentials, and identical variables. A mistake in a workspace command can accidentally overwrite production. Separate root directories provide physical file and credential isolation.",
          },
          {
            heading: "The SRE Blast Radius Principle",
            body: "Partition infrastructure by change frequency and lifecycle:\n- Core Networking (changes yearly): Separate root module.\n- Compute & Clusters (changes monthly): Separate root module.\n- Application Services (changes daily): Handled via Kubernetes / Helm, not base Terraform.",
          },
        ],
        codeSnippet: `# Enterprise Multi-Root Repository Layout
terraform/
├── modules/
│   ├── aws-network/
│   ├── azure-network/
│   └── gcp-network/
└── environments/
    ├── dev/
    │   ├── aws/
    │   └── gcp/
    └── prod/
        ├── aws/
        └── gcp/`,
      },
    ],
    []
  );

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (15 IN-DEPTH QUESTIONS)
  // =========================================================================
  const masteryQuestions = [
    {
      q: "What is Infrastructure as Code (IaC), and how does Terraform differ from an imperative bash script?",
      options: [
        "Terraform is declarative: you declare the desired end-state and it calculates the mathematical delta using state; bash scripts are imperative sequences that lack automatic drift detection and idempotency.",
        "Terraform only creates files on your computer while bash creates cloud networks.",
        "Bash scripts are compiled C++ programs while Terraform is interpreted Java.",
        "They are identical tools with different command syntax."
      ],
      correctIndex: 0,
      a: "Terraform is declarative: you define the desired target architecture in HCL, and Terraform's engine compares declared code with recorded state and real cloud APIs to execute the minimal set of changes needed. Imperative shell scripts execute blind step-by-step instructions without awareness of existing resources, making idempotency, drift detection, and state tracking nearly impossible.",
    },
    {
      q: "What specific roles do providers, resources, data sources, variables, locals, and outputs play in Terraform?",
      options: [
        "Providers translate HCL to cloud API calls; resources declare managed objects; data sources query existing unmanaged objects; variables accept inputs; locals calculate reusable expressions; outputs expose values.",
        "Providers run Docker containers; resources write logs; data sources delete databases.",
        "They are all interchangeable synonyms in modern HCL.",
        "Outputs are only used to print error tracebacks."
      ],
      correctIndex: 0,
      a: "Providers are Go binary plugins bridging HCL to cloud APIs. Resources define infrastructure objects to create and manage. Data sources fetch read-only attributes from existing cloud resources. Variables provide parameterized inputs. Locals store reusable intermediate computed expressions. Outputs expose values for users, pipelines, and parent modules.",
    },
    {
      q: "How does Terraform construct its resource dependency Directed Acyclic Graph (DAG)?",
      options: [
        "By parsing cross-resource attribute references (e.g., subnet.vpc_id = aws_vpc.main.id) and explicit depends_on declarations, building a topological order that executes independent resources in parallel.",
        "By executing resources in the exact line order they appear in the file.",
        "By querying Google Cloud DNS records.",
        "Terraform does not use graphs; it executes all resources synchronously."
      ],
      correctIndex: 0,
      a: "Terraform analyzes implicit references (where an attribute of resource B references an export of resource A) and explicit `depends_on` arguments to build a Directed Acyclic Graph. Nodes with zero dependencies execute concurrently across multiple worker threads, while dependent resources wait for upstream IDs to be generated.",
    },
    {
      q: "What belongs in a reusable module, and why should AWS, Azure, and GCP roots be separated?",
      options: [
        "Reusable modules contain standardized components (main.tf, variables.tf, outputs.tf); cloud roots should be separated because forcing different cloud APIs into a single monolithic state creates brittle coupling and massive blast radius.",
        "All three clouds must always be combined into a single 50,000-line main.tf file.",
        "Modules can only contain bash scripts.",
        "Cloud roots must be merged so that AWS credentials can delete GCP networks."
      ],
      correctIndex: 0,
      a: "A module encapsulates a coherent piece of infrastructure with clear inputs and outputs. Multi-cloud configurations should maintain separate roots because AWS, Azure, and GCP have fundamentally different resource models, identity systems, and failure boundaries. Merging them into a single state creates monolithic coupling where an Azure API glitch blocks AWS deployments.",
    },
    {
      q: "What information does Terraform state store, and why is it considered sensitive?",
      options: [
        "State maps declarative HCL addresses to real cloud IDs and stores resource attributes. It is sensitive because all resource attributes—including database passwords and private keys—are stored in unencrypted cleartext JSON.",
        "State only stores Git commit hashes and contains no cloud data.",
        "State is automatically encrypted with a secret master key held by Linus Torvalds.",
        "State only contains HTML documentation."
      ],
      correctIndex: 0,
      a: "The `terraform.tfstate` file maps your code's resource addresses to actual cloud provider IDs and caches all resource metadata. It is highly sensitive because Terraform stores every resource attribute—including database passwords, TLS private keys, and API tokens—in plaintext JSON. It must never be committed to Git.",
    },
    {
      q: "What does a remote backend provide beyond simply storing state in a shared location?",
      options: [
        "Distributed state locking to prevent concurrent writes, server-side encryption at rest, access control via cloud IAM, and elimination of local state loss.",
        "It automatically writes application code for developers.",
        "It replaces the need for cloud credentials.",
        "It translates Python scripts to HCL."
      ],
      correctIndex: 0,
      a: "A remote backend (such as AWS S3 with `use_lockfile = true`, Azure Blob Storage, or GCP GCS) provides distributed state locking to prevent concurrent operations, server-side encryption at rest with KMS, versioning for state recovery, and granular IAM access control to prevent unauthorized state inspection.",
    },
    {
      q: "How does state locking prevent operational disasters during team collaboration?",
      options: [
        "It coordinates writes by placing an exclusive lock on the state file during plan/apply, preventing two engineers or CI pipelines from modifying the same state simultaneously and causing corruption.",
        "It locks the engineer's laptop keyboard during deployment.",
        "It prevents cloud bills from exceeding $100.",
        "It stops the Linux kernel from running out of memory."
      ],
      correctIndex: 0,
      a: "State locking acquires an atomic lock prior to state modifications. If another engineer or CI runner attempts to run `apply` at the same time, Terraform receives a lock error and refuses to proceed. This prevents split-brain state overwrites and orphan resource leaks.",
    },
    {
      q: "Why does marking an input variable 'sensitive = true' NOT guarantee that secrets are safe?",
      options: [
        "'sensitive = true' only suppresses the value from terminal stdout/stderr display; the raw secret is still written in plaintext JSON inside the state file and saved plan files.",
        "Because sensitive variables crash the Terraform compiler.",
        "Because sensitive variables are automatically emailed to HashiCorp.",
        "Because Terraform converts sensitive strings to integers."
      ],
      correctIndex: 0,
      a: "HashiCorp explicitly documents that `sensitive = true` is a display-level control designed to prevent accidental leakage in console logs and CI outputs. The underlying secret value is still recorded unencrypted in `terraform.tfstate`. Security requires protecting access to the state storage backend itself.",
    },
    {
      q: "How do 'terraform plan' and 'terraform plan -refresh-only' fundamentally differ?",
      options: [
        "'terraform plan' checks drift and proposes changes to make cloud infrastructure match declared HCL; '-refresh-only' checks drift and proposes updating state metadata to match cloud reality without altering cloud resources.",
        "'-refresh-only' deletes all cloud resources immediately.",
        "'terraform plan' only works on Windows; '-refresh-only' only works on Linux.",
        "They are identical commands with different aliases."
      ],
      correctIndex: 0,
      a: "`terraform plan` compares code against state and cloud reality, planning actions to enforce your declared code onto the cloud. In contrast, `terraform plan -refresh-only` queries the real cloud resources and plans to update your *state file* to reflect out-of-band changes, without planning any modifications to the actual cloud resources.",
    },
    {
      q: "How would an SRE import an existing, manually created cloud resource into Terraform management?",
      options: [
        "Write matching HCL configuration for the resource, run 'terraform import <address> <cloud-id>' to populate state, then run 'terraform plan' to verify zero drift.",
        "Delete the cloud resource in the console and let Terraform recreate it.",
        "Copy and paste the cloud console HTML into main.tf.",
        "Rename the Terraform binary to 'terraform-import'."
      ],
      correctIndex: 0,
      a: "To adopt existing infrastructure: 1. Write the declarative resource block in HCL; 2. Run `terraform import <resource_type>.<name> <cloud_resource_id>`; 3. Run `terraform plan` and adjust HCL attributes until the plan reports zero changes, proving state and code are perfectly synchronized.",
    },
    {
      q: "How would an SRE detect and remediate out-of-band infrastructure drift introduced via a cloud console?",
      options: [
        "Run 'terraform plan' to detect the discrepancy between cloud reality and declared code, then run 'terraform apply' to automatically revert the unauthorized cloud change back to code.",
        "Reboot the cloud data center.",
        "Delete the Git repository and clone it again.",
        "Change the cloud password."
      ],
      correctIndex: 0,
      a: "Running `terraform plan` refreshes state against real cloud APIs. When an out-of-band edit exists, Terraform flags the diff. Running `terraform apply` overwrites the unauthorized cloud modification, enforcing the version-controlled HCL code as the single source of truth.",
    },
    {
      q: "How do production authentication patterns differ across AWS, Azure, and Google Cloud in modern CI/CD?",
      options: [
        "All three clouds prefer OpenID Connect (OIDC) federation: AWS STS AssumeRoleWithWebIdentity, Azure AD Federated Credentials, and GCP Workload Identity Federation, eliminating static API keys.",
        "AWS requires passwords, Azure requires SMS codes, and GCP requires USB keys.",
        "All clouds mandate hardcoded secret access keys in git repositories.",
        "Cloud providers do not allow automated authentication from CI/CD."
      ],
      correctIndex: 0,
      a: "Modern production SRE pipelines use OpenID Connect (OIDC) federation: CI runners exchange ephemeral cryptographic JWT tokens with cloud STS endpoints (AWS IAM Roles via OIDC, Azure Managed Identity/Federated Credentials, GCP Workload Identity Federation). This eliminates long-lived, static access keys entirely.",
    },
    {
      q: "Why must '.terraform.lock.hcl' be committed to Git, and how do you handle cross-platform checksums?",
      options: [
        "The lock file pins cryptographic provider hashes to prevent supply-chain tampering. For teams spanning macOS and Linux, use 'terraform providers lock -platform=...' to record hashes for all architectures.",
        "The lock file must be deleted before every commit.",
        "The lock file contains the user's personal credit card details.",
        "Lock files can only be read on Windows."
      ],
      correctIndex: 0,
      a: "The `.terraform.lock.hcl` file guarantees supply-chain security by locking provider versions and cryptographic package hashes. When developers use macOS (darwin_arm64) and CI uses Linux (linux_amd64), running `terraform providers lock -platform=...` pre-populates official checksums for all required architectures, preventing CI build failures.",
    },
    {
      q: "What critical review gate must an SRE enforce on an infrastructure PR before approving an apply?",
      options: [
        "Verify formatting, ensure static security scans pass (no open 0.0.0.0/0 on SSH), review speculative plan diffs for unexpected resource destructions or replacements (-/+), and verify environment scoping.",
        "Ensure the PR contains at least 1,000 lines of code.",
        "Verify that all variable names are written in uppercase.",
        "Confirm that the author is the CEO."
      ],
      correctIndex: 0,
      a: "SRE review gates: 1. Confirm `terraform fmt` and `validate` pass; 2. Audit security linter outputs (Tfsec/Checkov); 3. Carefully inspect the speculative plan diff, paying special attention to destructive replacements (`-/+`) on stateful databases and networks; 4. Confirm least-privilege IAM scoping.",
    },
    {
      q: "How can an engineering team stop a development change from accidentally modifying production infrastructure?",
      options: [
        "Maintain completely separate root modules, independent state files, separate cloud accounts/subscriptions, and isolated IAM credentials for dev vs prod.",
        "Use a single state file and name dev resources with '-dev'.",
        "Rely on developers promising not to run terraform apply in prod.",
        "Disable Terraform on weekends."
      ],
      correctIndex: 0,
      a: "Blast radius containment requires physical separation: separate root directories (`environments/dev` vs `environments/prod`), separate remote backend storage buckets, distinct cloud accounts (e.g. AWS Multi-Account with AWS Organizations), and isolated CI/CD IAM roles. Workspaces alone do not provide a strong security boundary.",
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
          currentModuleId="iac"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova Terraform AI"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <Cloud size={14} />
              <span>Multi-Cloud Infrastructure Automation & State Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Module 5 — Infrastructure as Code (IaC)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Treat infrastructure changes like software releases: <strong className="text-stone-900 font-semibold">version them</strong>,{" "}
              <strong className="text-stone-900 font-semibold">preview them</strong>,{" "}
              <strong className="text-stone-900 font-semibold">review them</strong>, and{" "}
              <strong className="text-stone-900 font-semibold">detect drift</strong>. Grounded in systems foundations from{" "}
              <span className="font-semibold text-stone-900">MIT</span>, <span className="font-semibold text-stone-900">Stanford</span>,{" "}
              <span className="font-semibold text-stone-900">NUS</span>, and official AWS, Azure, and Google Cloud Terraform documentation.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (10 Topics)", icon: BookOpen },
              { id: "plan-lab", label: "Lab 1: Plan & Dependency Graph", icon: Activity },
              { id: "drift-lab", label: "Lab 2: State Drift & Reconciliation", icon: RefreshCw },
              { id: "sre-gameday", label: "Lab 3: SRE IaC Security GameDay", icon: ShieldCheck },
              { id: "mastery", label: "Mastery Assessment (15 Questions)", icon: CheckCircle2 },
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
                <h3 className="text-base font-bold text-stone-900">Nova AI: Infrastructure as Code & Terraform Mentor</h3>
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
                currentTopic="devops-iac-terraform"
                moduleName="Module 5 — Infrastructure as Code (IaC)"
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
                      Production Terraform HCL Reference
                    </span>
                    <span className="text-[10px] text-stone-400">hashicorp / hcl</span>
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
        {/* TAB 2: LAB 1 - PLAN & DEPENDENCY GRAPH VISUALIZER                   */}
        {/* =================================================================== */}
        {activeTab === "plan-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <Activity size={14} />
                <span>Lab 1: The Dependency Directed Acyclic Graph (DAG)</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                Interactive Plan & Dependency Graph Visualizer
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                As taught in <strong className="text-stone-900 font-semibold">MIT Systems Engineering</strong>, Terraform
                constructs a mathematical DAG of resource dependencies to optimize parallel provisioning. Simulate
                code changes and observe the resulting execution plan symbols:{" "}
                <span className="font-mono text-emerald-600 font-bold">+ create</span>,{" "}
                <span className="font-mono text-amber-600 font-bold">~ update</span>, and{" "}
                <span className="font-mono text-rose-600 font-bold">-/+ destroy and re-create replacement</span>.
              </p>
            </div>

            {/* CONTROLS TOOLBAR */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 space-y-4">
              <span className="text-xs font-mono font-bold text-stone-700 block">
                Simulate HCL Code Modification:
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleRunPlan("tag_update")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    simulatedChange === "tag_update"
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  ~ In-Place Update (Add Tags to VPC)
                </button>
                <button
                  onClick={() => handleRunPlan("cidr_replacement")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    simulatedChange === "cidr_replacement"
                      ? "bg-rose-600 text-white shadow-sm"
                      : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  -/+ Destructive Replacement (Change Subnet CIDR)
                </button>
                <button
                  onClick={() => handleRunPlan("add_security_rule")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    simulatedChange === "add_security_rule"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-white text-stone-700 border border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  + Resource Creation (Add Security Group Rule)
                </button>
              </div>
            </div>

            {/* DEPENDENCY GRAPH TOPOLOGY & TERMINAL OUTPUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* DAG Nodes */}
              <div className="lg:col-span-5 rounded-2xl border border-stone-200 bg-white p-5 space-y-3">
                <span className="font-bold text-xs text-stone-900 block border-b border-stone-100 pb-2">
                  Topological Resource Graph:
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-stone-100 text-stone-800 border border-stone-300 flex items-center justify-between">
                    <span>1. provider.aws (Root Provider)</span>
                    <span className="text-[10px] text-stone-500">v6.0</span>
                  </div>
                  <div className="text-center text-stone-400 font-bold select-none">↓</div>
                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between transition ${
                      simulatedChange === "tag_update"
                        ? "bg-amber-50 border-amber-400 text-amber-950 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    <span>2. aws_vpc.main</span>
                    <span>{simulatedChange === "tag_update" ? "~ in-place" : "no-op"}</span>
                  </div>
                  <div className="text-center text-stone-400 font-bold select-none">↓</div>
                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between transition ${
                      simulatedChange === "cidr_replacement"
                        ? "bg-rose-50 border-rose-400 text-rose-950 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    <span>3. aws_subnet.app</span>
                    <span>{simulatedChange === "cidr_replacement" ? "-/+ REPLACE" : "no-op"}</span>
                  </div>
                  <div className="text-center text-stone-400 font-bold select-none">↓</div>
                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between transition ${
                      simulatedChange === "add_security_rule"
                        ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-bold"
                        : "bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    <span>4. aws_security_group_rule.allow_tls</span>
                    <span>{simulatedChange === "add_security_rule" ? "+ CREATE" : "no-op"}</span>
                  </div>
                </div>
              </div>

              {/* Speculative Plan Output */}
              <div className="lg:col-span-7 rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white font-mono text-xs space-y-2">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                  <span>$ terraform plan execution preview</span>
                  <span className="text-orange-400 font-bold">HCL Execution Plan</span>
                </div>
                <div className="space-y-1 pt-1 max-h-80 overflow-y-auto leading-relaxed">
                  {planOutput.map((line, pIdx) => {
                    let colorClass = "text-stone-300";
                    if (line.startsWith("  +")) colorClass = "text-emerald-400 font-bold";
                    if (line.startsWith("  ~")) colorClass = "text-amber-400 font-bold";
                    if (line.startsWith("-/+")) colorClass = "text-rose-400 font-bold";
                    if (line.startsWith("Plan:")) colorClass = "text-white font-black bg-stone-800 p-1 rounded inline-block mt-2";

                    return (
                      <div key={pIdx} className={colorClass}>
                        {line}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - STATE DRIFT DETECTION & RECONCILIATION SANDBOX       */}
        {/* =================================================================== */}
        {activeTab === "drift-lab" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <RefreshCw size={14} />
                <span>Lab 2: Detecting & Reconciling Out-of-Band Changes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                State Drift Detection & Reconciliation Sandbox
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                When an engineer bypasses Terraform to manually change firewall rules in the cloud web console, drift
                occurs. Compare how <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">terraform plan</code>{" "}
                restores declared code vs. how{" "}
                <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">terraform apply -refresh-only</code>{" "}
                accepts external changes into state.
              </p>
            </div>

            {/* SCENARIO BRIEFING */}
            <div className="p-5 rounded-2xl border border-amber-300 bg-amber-50/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                <AlertTriangle size={16} className="text-amber-600" />
                <span>Out-of-Band Production Drift Event:</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                An on-call engineer logged into the AWS Console during an incident and opened SSH port 22 to 0.0.0.0/0.
                Your version-controlled Terraform code strictly allows port 443 (HTTPS) only.
              </p>
            </div>

            {/* TRIAGE ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handlePlanDrift}
                className="px-4 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-mono font-bold hover:bg-stone-800 transition shadow-sm flex items-center gap-1.5"
              >
                <Terminal size={14} className="text-orange-400" />
                <span>1. Run terraform plan (Detect Drift)</span>
              </button>
              <button
                onClick={handleApplyReconcile}
                className="px-4 py-2.5 rounded-xl bg-orange-500 text-white text-xs font-mono font-bold hover:bg-orange-600 transition shadow-sm flex items-center gap-1.5"
              >
                <ShieldCheck size={14} />
                <span>2. Run terraform apply (Revert Drift to Code)</span>
              </button>
              <button
                onClick={handleRefreshOnlyApply}
                className="px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-800 text-xs font-mono font-bold hover:bg-stone-100 transition shadow-sm flex items-center gap-1.5"
              >
                <RefreshCw size={14} className="text-stone-600" />
                <span>3. Run terraform apply -refresh-only (Accept Drift)</span>
              </button>
            </div>

            {/* TERMINAL LOG */}
            <div className="rounded-2xl border border-[#27272a] bg-[#18181b] p-5 text-white font-mono text-xs space-y-2">
              <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400 text-[11px]">
                <span>SRE Drift Resolution Terminal</span>
                <span className="text-emerald-400 font-bold">
                  Status: {driftStatus === "drift_detected" ? "DRIFT ACTIVE" : driftStatus === "reconciled" ? "RECONCILED TO CODE" : "REFRESH APPLIED"}
                </span>
              </div>
              <div className="space-y-1 pt-1 max-h-72 overflow-y-auto leading-relaxed">
                {driftTerminalLog.map((line, lIdx) => {
                  let colorClass = "text-stone-300";
                  if (line.startsWith("$")) colorClass = "text-orange-400 font-bold";
                  if (line.includes("[SUCCESS]")) colorClass = "text-emerald-400 font-bold";
                  if (line.includes("[WARNING]")) colorClass = "text-amber-400 font-bold";
                  if (line.includes("~")) colorClass = "text-amber-300 font-bold";
                  if (line.includes("-")) colorClass = "text-rose-400 font-bold";

                  return (
                    <div key={lIdx} className={colorClass}>
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - SRE IAC SECURITY & PRODUCTION GAMEDAY                */}
        {/* =================================================================== */}
        {activeTab === "sre-gameday" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <ShieldCheck size={14} />
                <span>Lab 3: SRE IaC Security & Production Triage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                SRE IaC Security & Production Triage GameDay
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Evaluate 5 high-stakes production scenarios: plaintext secrets in committed state, state locking
                race conditions, destructive RDS database replacements, backend bootstrapping paradoxes, and
                cross-platform lock file checksum failures.
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
                  {/* Header */}
                  <div className="pb-4 border-b border-stone-200 space-y-1">
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      IaC Production Incident
                    </span>
                    <h3 className="text-xl font-bold text-stone-900">{currentInc.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 pt-1">
                      <strong className="text-stone-800">Symptom: </strong>
                      {currentInc.symptom}
                    </p>
                  </div>

                  {/* Code Snippet */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-stone-500 block mb-2">
                      Code / Log Inspection:
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
                                      {opt.correct ? "✓ SRE Remediation Action: " : "✗ Root Cause Risk: "}
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
        {/* TAB 5: MASTERY ASSESSMENT (15 QUESTIONS)                            */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-sm mb-16 space-y-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-2">
                <CheckCircle2 size={14} />
                <span>Final Mastery Assessment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">
                15-Question Comprehensive Infrastructure as Code Assessment
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Before advancing to CI/CD automation pipelines, demonstrate complete mastery over Terraform internals,
                state management, multi-cloud networking, drift detection, and production review controls.
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
                            Authoritative Infrastructure Engineering Answer:
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
              DevOps & SRE Track • Module 5 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Infrastructure as Code (IaC) Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand declarative HCL, resource dependency graphs, remote state locking, multi-cloud
              VPC/VNet provisioning across AWS, Azure, and GCP, drift detection, and secure review pipelines.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/k8s")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 4: Kubernetes
            </button>
            <button
              onClick={() => navigate("/learning/devops/cicd")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 6 — CI/CD →
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
