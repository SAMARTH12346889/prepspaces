/**
 * Concepts Batch 2: Computer Networks (5) + Cybersecurity (5)
 */

export const CONCEPTS_NET_SEC = [
  // ================= COMPUTER NETWORKS (5) =================
  {
    slug: "tcp-vs-udp",
    category: "networks",
    subcategory: "Transport Protocols",
    difficulty: "Beginner",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "TCP vs UDP: Connection Handshake, Reliability, Flow Control & Use Cases",
    metaTitle: "TCP vs UDP Explained: Architecture, Latency & Use Cases | PrepSpaces Concepts",
    description:
      "Compare TCP and UDP transport protocols: 3-way handshake, sequence/ACK reliability, flow vs congestion control, Head-of-Line blocking, QUIC/HTTP-3, and real-world use cases.",
    keywords: "TCP vs UDP, 3-way handshake, congestion control, Head of Line blocking, QUIC HTTP/3, transport layer protocols",
    directAnswer:
      "TCP (Transmission Control Protocol) is a connection-oriented, reliable byte-stream protocol with a 3-way handshake, retransmissions, in-order delivery, flow control (`rwnd`), and congestion control (`cwnd`). UDP (User Datagram Protocol) is a lightweight, connectionless datagram protocol with an 8-byte header that delivers packets best-effort with minimal latency.",
    sections: [
      {
        heading: "1. Connection Lifecycle & Reliability Guarantees",
        paragraphs: [
          "Before any application byte travels over TCP, client and server exchange `SYN -> SYN-ACK -> ACK` to negotiate Initial Sequence Numbers (ISNs), Maximum Segment Size (MSS), and window scaling. Every segment carries sequence numbers and checksums so missing packets trigger Fast Retransmit or timeout recovery.",
          "UDP skips handshakes completely, wrapping application messages in a minimal 8-byte header (Source Port, Destination Port, Length, Checksum). If a UDP datagram drops in transit, the transport layer does not retransmit or reorder—leaving any custom reliability cleanly to the application (as in DNS, VoIP, multiplayer games, or QUIC).",
        ],
      },
      {
        heading: "2. Flow Control vs Congestion Control in TCP",
        paragraphs: [
          "**Flow Control (`rwnd`)** protects the **receiver**: the recipient advertises remaining receive-buffer capacity in every `ACK` so a fast sender never overflows a slower mobile client.",
          "**Congestion Control (`cwnd`)** protects the **network**: algorithms like Slow Start, AIMD, CUBIC, or Google BBR probe link capacity and back off when packet loss or RTT queuing indicates congested intermediate routers.",
        ],
      },
      {
        heading: "3. Head-of-Line (HoL) Blocking & Why HTTP/3 Moved to QUIC over UDP",
        paragraphs: [
          "Because TCP exposes a single strict in-order byte stream, losing just one packet stalls delivery of *all* subsequent HTTP/2 multiplexed streams sitting in the kernel receive buffer until that packet is retransmitted—known as TCP Head-of-Line (HoL) blocking.",
          "QUIC (RFC 9000) solves this by implementing encrypted, independently sequenced streams over UDP with 0-RTT/1-RTT merged TLS 1.3 handshakes and seamless Wi-Fi-to-5G connection migration via Connection IDs.",
        ],
      },
    ],
    codeExample: {
      title: "Testing Live TCP Socket Connection vs Stateless UDP Datagram in Python",
      language: "python",
      code: `import socket

# 1. TCP Client: requires 3-way handshake before sending bytes
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as tcp_sock:
    tcp_sock.settimeout(3.0)
    tcp_sock.connect(("example.com", 80))
    tcp_sock.sendall(b"HEAD / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")
    print("TCP Response header:", tcp_sock.recv(128).decode(errors="ignore").splitlines()[0])

# 2. UDP Socket: fires datagram directly with zero handshake
with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as udp_sock:
    udp_sock.sendto(b"telemetry:ping=1", ("127.0.0.1", 9095))`,
      explanation:
        "`SOCK_STREAM` enforces a connected byte stream (TCP), while `SOCK_DGRAM` emits independent packets immediately (UDP).",
    },
    commonMistakes: [
      {
        mistake: "Assuming TCP preserves application message boundaries (`1 send() == 1 recv()`).",
        correction:
          "TCP is a continuous byte stream, not message-framed—one `recv()` call can return half a JSON payload or two concatenated messages. Always use length prefixes or delimiters.",
      },
      {
        mistake: "Thinking UDP is completely unreliable or lacks checksums.",
        correction:
          "UDP includes a mandatory checksum on IPv6 (optional on IPv4) to discard corrupted frames; it just skips retransmissions and ordering.",
      },
      {
        mistake: "Ignoring UDP amplification DDoS risks in server protocols.",
        correction:
          "Stateless UDP responders returning large replies to spoofed source IPs (DNS, NTP) enable amplification attacks unless rate-limited or source-verified like QUIC Initial padding.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why does TCP use a 3-way handshake instead of a 2-way handshake?",
        answer:
          "Both client and server must confirm two-way packet reachability and acknowledge each other's initial sequence numbers so stale delayed duplicate `SYN` packets from old sessions cannot corrupt new connections.",
      },
      {
        question: "What is the difference between `rwnd` and `cwnd` in TCP?",
        answer:
          "`rwnd` (receive window) limits sending rate based on the destination host's available buffer; `cwnd` (congestion window) limits inflight bytes based on network router congestion. Actual inflight cap is `min(rwnd, cwnd)`.",
      },
      {
        question: "Why use UDP for live video calls or voice streaming?",
        answer:
          "Waiting 150ms to retransmit a lost 20ms audio frame arrives too late to play and adds jarring jitter/stalls; dropping a late frame keeps real-time conversation smooth.",
      },
    ],
    relatedConcepts: [
      "/concepts/networks/http-vs-https-tls",
      "/concepts/networks/dns-resolution",
      "/concepts/networks/osi-vs-tcp-ip-model",
    ],
    relatedCourse: {
      title: "Computer Networks Masterclass",
      route: "/learning/networks",
      description: "Full 24-module course covering TCP states, congestion control, BDP math, QUIC/HTTP-3, and Wireshark labs.",
    },
    relatedModules: [
      { title: "Networks Module 9: TCP — Reliable Transport", route: "/learning/networks/tcp" },
      { title: "Networks Module 10: UDP, QUIC & Modern Transport", route: "/learning/networks/udp" },
    ],
    practiceAction: {
      label: "Practice Computer Networks Interview",
      to: "/interview",
      summary: "Select Computer Networks -> Module 9 or 10 on PrepSpaces to answer spoken TCP/UDP/QUIC questions.",
    },
  },
  {
    slug: "dns-resolution",
    category: "networks",
    subcategory: "Application & Naming",
    difficulty: "Beginner",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "How DNS Works: Recursive Resolvers, Root/TLD Servers & Caching",
    metaTitle: "How DNS Works: Recursive Resolution, Records & DNSSEC | PrepSpaces Concepts",
    description:
      "Trace DNS resolution end-to-end: browser/OS cache, recursive resolvers, Root (.) servers, TLD nameservers, authoritative A/AAAA/CNAME records, TTL negative caching, and DoH/DNSSEC.",
    keywords: "DNS resolution, recursive vs iterative DNS, A vs CNAME record, DNS TTL caching, DNSSEC DoH DoT",
    directAnswer:
      "Domain Name System (DNS) translates human hostnames like `prepspaces.com` into IP addresses. When caches miss, your stub resolver sends a recursive query to an ISP or public resolver, which performs iterative lookups across Root (`.`), TLD (`.com`), and Authoritative nameservers, caching responses for their TTL duration.",
    sections: [
      {
        heading: "1. Resolution Hierarchy: Stub -> Recursive -> Iterative",
        paragraphs: [
          "Every lookup checks local layers first: Browser DNS cache -> OS `/etc/hosts` and system stub resolver cache. On cache miss, the client asks a configured **Recursive Resolver** (e.g., `1.1.1.1`, `8.8.8.8`, or VPC `.2` resolver).",
          "If uncached, the recursive resolver walks the hierarchy **iteratively**: asking one of 13 Root server clusters for `.com`, then querying a `.com` TLD nameserver for `prepspaces.com`'s NS records, and finally querying the authoritative nameserver for the `A`/`AAAA` IP record.",
        ],
      },
      {
        heading: "2. Essential DNS Record Types (`A`, `AAAA`, `CNAME`, `MX`, `TXT`, `NS`)",
        paragraphs: [
          "Understanding record semantics prevents outage-inducing misconfigurations—especially the apex domain `CNAME` conflict where RFC rules forbid placing a `CNAME` alongside `SOA`/`NS` at zone apex (`example.com`), requiring `ALIAS`/`ANAME` flattening instead.",
        ],
        bullets: [
          "`A` / `AAAA`: Maps a hostname directly to IPv4 (32-bit) or IPv6 (128-bit) addresses.",
          "`CNAME`: Canonical alias redirecting one domain name to another hostname (adds an extra resolution step).",
          "`MX`: Mail exchanger hostnames with numeric priority for SMTP routing.",
          "`TXT`: Arbitary verification strings used for SPF, DKIM, DMARC, and domain ownership validation.",
        ],
      },
      {
        heading: "3. Security Extensions: DNSSEC, DoH, and DoT",
        paragraphs: [
          "Classic plaintext UDP port 53 queries reveal visited domains to local networks and are vulnerable to on-path spoofing. **DNS over TLS (DoT, port 853)** and **DNS over HTTPS (DoH, port 443)** encrypt transport confidentiality, while **DNSSEC** cryptographically signs DNS zone records with RRSIG/DS chains so resolvers verify authenticity.",
        ],
      },
    ],
    codeExample: {
      title: "Tracing Full Iterative DNS Delegation Using `dig`",
      language: "bash",
      code: `# Watch every iterative hop from Root (.) -> TLD (.com) -> Authoritative NS
dig +trace prepspaces.com A

# Query specific record types and observe remaining TTL
dig prepspaces.com AAAA +noall +answer
dig prepspaces.com TXT +short`,
      explanation:
        "`dig +trace` bypasses resolver cache to visualize the full Root -> TLD -> Authoritative delegation chain live from your terminal.",
    },
    commonMistakes: [
      {
        mistake: "Creating a `CNAME` record at the root apex domain (`prepspaces.com`).",
        correction:
          "Zone apex domains must keep `SOA` and `NS` records; pointing a standard `CNAME` at the apex breaks mail (`MX`) or is rejected by RFC-compliant DNS providers unless flattened.",
      },
      {
        mistake: "Setting tiny TTLs (e.g., 5 seconds) everywhere permanently.",
        correction:
          "Lower TTLs right before planned migrations (`300s -> 60s`), then raise them afterward; ultra-low permanent TTLs spike resolver latency and authoritative query load.",
      },
      {
        mistake: "Assuming DNS runs strictly over UDP only.",
        correction:
          "DNS defaults to UDP 53 for tiny packets, automatically falls back to TCP 53 for oversized responses (`TC` truncated flag, DNSSEC keys, zone transfers AXFR), and runs over TCP 443/853 for DoH/DoT.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is the difference between a recursive DNS query and an iterative DNS query?",
        answer:
          "In a recursive query, the client demands the resolver fetch and return the final IP (or error). In an iterative query, a nameserver responds with either the answer or a referral (`NS` glue) pointing closer down the tree.",
      },
      {
        question: "What is negative DNS caching?",
        answer:
          "Resolvers cache `NXDOMAIN` (non-existent domain) responses briefly based on the SOA `MINIMUM`/negative TTL field so repeated typos or probes do not flood authoritative servers.",
      },
      {
        question: "What happens if an authoritative DNS server goes down temporarily?",
        answer:
          "Recursive resolvers continue serving cached entries until TTL expires, after which lookups fail with `SERVFAIL`. Adding redundant secondary nameservers across anycast providers eliminates single points of failure.",
      },
    ],
    relatedConcepts: [
      "/concepts/networks/tcp-vs-udp",
      "/concepts/networks/http-vs-https-tls",
      "/concepts/cloud/multi-region-failover",
    ],
    relatedCourse: {
      title: "Computer Networks Masterclass",
      route: "/learning/networks",
      description: "Master DNS wire headers, negative caching, DoH/DoT encryption, and DNSSEC forensics.",
    },
    relatedModules: [
      { title: "Networks Module 11: DNS & Internet Naming", route: "/learning/networks/dns" },
      { title: "Networks Module 8: Host Config, ARP & DHCP", route: "/learning/networks/config" },
    ],
    practiceAction: {
      label: "Practice Networking Mock Interview",
      to: "/ai-interview",
      summary: "Walk through 'What happens when you type a URL in the browser' smoothly in PrepSpaces AI Interviews.",
    },
  },
  {
    slug: "http-vs-https-tls",
    category: "networks",
    subcategory: "Web Security & Transport",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "HTTP vs HTTPS: TLS 1.3 Handshake, Certificates & Forward Secrecy",
    metaTitle: "HTTP vs HTTPS & TLS 1.3 Handshake Explained | PrepSpaces Concepts",
    description:
      "Understand how HTTPS protects web traffic over HTTP: asymmetric key exchange vs symmetric AEAD encryption, TLS 1.3 1-RTT handshake, X.509 certificate chains, and Perfect Forward Secrecy.",
    keywords: "HTTP vs HTTPS, TLS 1.3 handshake, X.509 certificate chain, Perfect Forward Secrecy, ECDHE AES-GCM",
    directAnswer:
      "HTTP transfers requests and responses in plaintext over TCP, allowing passive eavesdropping or MITM tampering. HTTPS wraps HTTP inside TLS (Transport Layer Security), combining X.509 certificates to verify server identity, ephemeral Elliptic-Curve Diffie-Hellman (ECDHE) for 1-RTT key agreement with Perfect Forward Secrecy, and fast symmetric AEAD encryption (`AES-GCM` / `ChaCha20-Poly1305`).",
    sections: [
      {
        heading: "1. Why TLS Uses Asymmetric Auth + Symmetric Encryption",
        paragraphs: [
          "Asymmetric algorithms (RSA, ECDSA) are computationally expensive and unsuited to encrypting gigabytes of streaming video or JSON. Instead, TLS uses asymmetric cryptography **only during the handshake** to prove server identity and derive a shared ephemeral session key, then switches immediately to hardware-accelerated symmetric AEAD ciphers (`AES-128-GCM`, `AES-256-GCM`, or `ChaCha20-Poly1305`).",
          "AEAD (Authenticated Encryption with Associated Data) guarantees confidentiality AND integrity/tamper protection simultaneously on every record.",
        ],
      },
      {
        heading: "2. TLS 1.3 1-RTT Handshake & Perfect Forward Secrecy",
        paragraphs: [
          "TLS 1.2 required two full round trips (`2-RTT`) and still allowed static RSA key transport (where a leaked server private key could retroactively decrypt years of captured traffic).",
          "TLS 1.3 (RFC 8446) removes insecure static RSA and cuts handshake overhead in half to **1-RTT** (or `0-RTT` resumption): the client sends `ClientHello` alongside pre-guessed `ECDHE` `key_share` public parameters immediately, and the server responds with `ServerHello`, key share, encrypted certificate chain, and `Finished` in one round trip—enforcing **Perfect Forward Secrecy** on every connection.",
        ],
      },
      {
        heading: "3. X.509 Trust Chains & HSTS Defense",
        paragraphs: [
          "Your browser verifies the server's leaf X.509 certificate by checking domain SAN match, validity dates, signature chain up to an OS/browser-trusted Root CA, and revocation state. Enabling HTTP Strict Transport Security (`Strict-Transport-Security` header) prevents SSL-stripping downgrade attacks on initial visits.",
        ],
      },
    ],
    codeExample: {
      title: "Inspecting Live TLS 1.3 Cipher & Certificate Chain via OpenSSL",
      language: "bash",
      code: `# Connect to port 443 with SNI (-servername) and display negotiated TLS protocol & cipher
openssl s_client -connect prepspaces.com:443 -servername prepspaces.com -tls1_3 < /dev/null 2>/dev/null | grep -E "Protocol|Cipher|Verify return"`,
      explanation:
        "Verifies Server Name Indication (`SNI`), TLS 1.3 protocol negotiation, ephemeral ECDHE cipher suite, and certificate chain trust validation.",
    },
    commonMistakes: [
      {
        mistake: "Thinking HTTPS encrypts URL domain names from ISPs or network sniffers.",
        correction:
          "Full URL paths, headers, and bodies ARE encrypted—but DNS queries (unless DoH/DoT) and the TLS SNI server hostname can still expose which domain you connected to.",
      },
      {
        mistake: "Using TLS 1.3 `0-RTT` early data for state-changing `POST` / payment endpoints.",
        correction:
          "`0-RTT` early data lacks anti-replay protection across requests; restrict `0-RTT` strictly to idempotent `GET` operations.",
      },
      {
        mistake: "Disabling TLS verification (`rejectUnauthorized: false`) to bypass self-signed errors.",
        correction:
          "Skipping certificate validation exposes connections to trivial Man-in-the-Middle attacks—always pin or install custom private CA roots properly.",
      },
    ],
    interviewQuestions: [
      {
        question: "How did TLS 1.3 reduce handshake latency compared to TLS 1.2?",
        answer:
          "By restricting key agreement to standard `(EC)DHE` groups so the client eagerly sends its Diffie-Hellman `key_share` inside the initial `ClientHello` packet—completing negotiation in 1 round trip instead of 2.",
      },
      {
        question: "What is Perfect Forward Secrecy (PFS)?",
        answer:
          "Each TLS session negotiates fresh ephemeral session keys (`ECDHE`) never written to disk; compromising the server's long-term identity private key tomorrow cannot decrypt recorded past traffic.",
      },
      {
        question: "Why does HTTPS need both a Leaf Certificate and Intermediate Certificates?",
        answer:
          "Root CAs stay offline for maximum security and sign Intermediate CAs, which sign website Leaf certificates. Servers must send intermediates so clients can link the chain cleanly up to a pre-installed Root CA.",
      },
    ],
    relatedConcepts: [
      "/concepts/networks/tcp-vs-udp",
      "/concepts/networks/dns-resolution",
      "/concepts/cybersecurity/jwt-security-and-oauth2",
    ],
    relatedCourse: {
      title: "Computer Networks Masterclass",
      route: "/learning/networks",
      description: "Explore HTTP/1.1, HTTP/2, TLS 1.3 handshakes, X.509 PKI, and reverse proxies.",
    },
    relatedModules: [
      { title: "Networks Module 12: Application Protocols, HTTP & TLS 1.3", route: "/learning/networks/application-layer" },
      { title: "Cybersecurity Module 12: Cryptography, PKI & TLS", route: "/learning/cybersecurity/cryptography" },
    ],
    practiceAction: {
      label: "Practice Security & TLS Questions",
      to: "/ai-interview",
      summary: "Practice walking through TLS 1.3 handshakes and PKI security cleanly in PrepSpaces AI Interviews.",
    },
  },
  {
    slug: "osi-vs-tcp-ip-model",
    category: "networks",
    subcategory: "Network Architecture",
    difficulty: "Beginner",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "OSI 7-Layer Model vs TCP/IP 4-Layer Architecture Explained",
    metaTitle: "OSI 7-Layer Model vs TCP/IP Model Explained | PrepSpaces Concepts",
    description:
      "Compare the 7-layer OSI reference model against the practical 4-layer TCP/IP stack: encapsulation (frame, packet, segment), routers vs switches, and layered troubleshooting.",
    keywords: "OSI model 7 layers, TCP/IP 4 layers, OSI vs TCP IP, network encapsulation, Layer 2 switch vs Layer 3 router",
    directAnswer:
      "The OSI Model is a 7-layer conceptual reference framework (Physical, Data Link, Network, Transport, Session, Presentation, Application) used universally for teaching and fault isolation, while the TCP/IP Model is the practical 4-layer internet stack (Link, Internet, Transport, Application) implemented by modern operating systems.",
    sections: [
      {
        heading: "1. Side-by-Side Mapping & Protocol Examples",
        paragraphs: [
          "As data travels down the sender's stack, each layer wraps the payload from above with its own control header (**encapsulation**); switches operate at Layer 2 using MAC addresses, routers forward at Layer 3 using IP prefixes, and end hosts run Transport/Application stacks.",
        ],
        bullets: [
          "Layer 7–5 (Application/Presentation/Session -> TCP/IP Application): HTTP, DNS, TLS formatting, gRPC, SSH.",
          "Layer 4 (Transport): TCP segments, UDP/QUIC datagrams, port numbers (`443`, `5432`).",
          "Layer 3 (Network / Internet): IPv4/IPv6 packets, ICMP, OSPF/BGP routing across hops via TTL decrement.",
          "Layer 2 & 1 (Data Link & Physical -> TCP/IP Link): Ethernet frames, Wi-Fi 802.11, MAC addresses, fiber/copper signals.",
        ],
      },
      {
        heading: "2. Practical Layered Troubleshooting (Bottom-Up vs Divide-and-Conquer)",
        paragraphs: [
          "Engineers rely on OSI layers daily during outage triage. Instead of guessing randomly why an API call timed out, inspect layer by layer: Layer 1/2 link up (`ip link`) -> Layer 3 IP route & ICMP (`ip route`, `ping`) -> Layer 4 TCP port reachable (`nc -vz` / `ss -tulnp`) -> Layer 7 DNS/TLS/HTTP status (`dig`, `curl -v`).",
        ],
      },
    ],
    codeExample: {
      title: "Layer-by-Layer Network Diagnostic Sequence in Linux",
      language: "bash",
      code: `# Layer 1/2: Verify physical carrier & MAC/ARP neighbor table
ip link show eth0 && ip neigh show

# Layer 3: Check IP routing table & hop reachability
ip route get 1.1.1.1

# Layer 4 & 7: Verify TCP handshake (SYN/ACK) + HTTP status without full body
curl -I -s -o /dev/null -w "DNS:%{time_namelookup}s TCP:%{time_connect}s TLS:%{time_appconnect}s Code:%{http_code}\\n" https://prepspaces.com`,
      explanation:
        "Separating DNS, TCP connect, TLS handshake, and HTTP status timing immediately isolates which OSI layer is responsible for slow latency or connection failures.",
    },
    commonMistakes: [
      {
        mistake: "Thinking every protocol fits neatly into strictly one OSI layer.",
        correction:
          "Modern protocols blur strict boundaries—TLS bridges Session/Presentation/Transport, and HTTP/3 embeds QUIC transport inside UDP packets.",
      },
      {
        mistake: "Believing MAC addresses cross internet routers unchanged.",
        correction:
          "Source/destination IP addresses remain end-to-end (barring NAT), whereas Layer 2 Ethernet MAC headers are stripped and rebuilt hop-by-hop by every router.",
      },
      {
        mistake: "Starting debugging at Application code before checking Layer 3/4 firewall rules or DNS.",
        correction:
          "A 5-second `ss` or `curl -v` probe often reveals a security group drop (`SYN` timeout) vs an application `500` immediately.",
      },
    ],
    interviewQuestions: [
      {
        question: "What happens to IP addresses vs MAC addresses as a packet hops through 3 routers?",
        answer:
          "End-host IP addresses stay preserved across hops (unless NAT translates them), while each router strips the incoming Layer 2 frame and wraps the IP packet in a brand-new Ethernet header targeting the next hop's MAC address.",
      },
      {
        question: "What distinguishes a Layer 4 Load Balancer from a Layer 7 Load Balancer?",
        answer:
          "A Layer 4 balancer forwards TCP/UDP packets using IPs and ports without decrypting TLS or reading HTTP headers; a Layer 7 balancer terminates TLS/HTTP to route dynamically by URL path, cookies, or headers.",
      },
      {
        question: "Which layer handles MTU fragmentation and TTL hop counts?",
        answer:
          "Layer 3 (Network / IP layer) tracks TTL to drop routing loops and manages packet MTU fragmentation or Path MTU Discovery.",
      },
    ],
    relatedConcepts: [
      "/concepts/networks/tcp-vs-udp",
      "/concepts/networks/cidr-and-subnetting",
      "/concepts/networks/http-vs-https-tls",
    ],
    relatedCourse: {
      title: "Computer Networks Masterclass",
      route: "/learning/networks",
      description: "Visual packet dissection in Wireshark across every OSI and TCP/IP layer.",
    },
    relatedModules: [
      { title: "Networks Module 2: OSI 7-Layer & TCP/IP 4-Layer Models", route: "/learning/networks/models" },
      { title: "Networks Module 18: Wireshark & Packet Analysis", route: "/learning/networks/packet-analysis" },
    ],
    practiceAction: {
      label: "Practice Network Architecture Interview",
      to: "/interview",
      summary: "Test your layered networking knowledge in PrepSpaces Computer Networks mock interviews.",
    },
  },
  {
    slug: "cidr-and-subnetting",
    category: "networks",
    subcategory: "IP Addressing & Routing",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "CIDR Notation & IPv4 Subnetting Math Explained Step by Step",
    metaTitle: "CIDR Notation & IPv4 Subnetting Explained | PrepSpaces Concepts",
    description:
      "Master CIDR notation (/16, /24, /26, /28), calculating host capacity (2^n - 2), network vs broadcast addresses, VLSM, RFC 1918 private IPs, and cloud VPC subnet design.",
    keywords: "CIDR notation, IPv4 subnetting, subnet mask, RFC 1918 private IP, Longest Prefix Match, VPC CIDR planning",
    directAnswer:
      "Classless Inter-Domain Routing (CIDR) writes an IPv4 address with a prefix length (`/N`, e.g., `10.0.1.0/24`) specifying how many of the 32 bits identify the network. The remaining `32 - N` host bits yield `2^(32 - N)` total addresses (with `2^(32 - N) - 2` usable host IPs in standard LANs after excluding network and broadcast addresses).",
    sections: [
      {
        heading: "1. Breaking Down Binary Bits & Fast Block-Size Math",
        paragraphs: [
          "An IPv4 address contains 4 octets = 32 bits. `/24` locks the first 3 octets (`255.255.255.0`), leaving `32 - 24 = 8` host bits (`2^8 = 256` total IPs, `254` usable hosts).",
          "For subnets inside one octet (`/25` to `/30`), subtract the prefix from `32` (`h = 32 - prefix`)—block size is `2^h`: `/25` gives `128` IPs (`2` subnets), `/26` gives `64` IPs (`4` subnets), `/27` gives `32` IPs, `/28` gives `16` IPs, and `/30` gives `4` IPs (`2` usable point-to-point router links).",
        ],
      },
      {
        heading: "2. RFC 1918 Private Ranges & Cloud VPC Nuances",
        paragraphs: [
          "Private corporate and cloud VPC networks use non-routable RFC 1918 blocks (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) behind NAT gateways.",
          "Note one critical cloud caveat: AWS VPC reserves **5** IPs per subnet instead of 2—`.0` network ID, `.1` VPC router, `.2` DNS server, `.3` future use, and `.255` broadcast—so an AWS `/24` yields `251` usable IPs.",
        ],
      },
      {
        heading: "3. Longest-Prefix Match (LPM) in Routers",
        paragraphs: [
          "When multiple CIDR routes cover a destination IP (say `10.0.0.0/16` and `10.0.1.0/24`), routers always select the **most specific** (longest prefix `/24` > `/16`) route independently of insertion order.",
        ],
      },
    ],
    codeExample: {
      title: "Computing Subnet Network, Broadcast & Host Range in Python",
      language: "python",
      code: `import ipaddress

net = ipaddress.ip_network("10.20.4.0/26", strict=False)
hosts = list(net.hosts())
print("Network:", net.network_address)     # 10.20.4.0
print("Netmask:", net.netmask)             # 255.255.255.192
print("Broadcast:", net.broadcast_address) # 10.20.4.63
print("Usable Hosts:", f"{hosts[0]} .. {hosts[-1]} ({len(hosts)} total)")`,
      explanation:
        "A `/26` subnet has 6 host bits (`64` addresses), creating usable host IPs `.1` through `.62` cleanly.",
    },
    commonMistakes: [
      {
        mistake: "Using `/32` vs `/24` carelessly or overlapping VPC CIDRs across peered accounts.",
        correction:
          "Overlapping `10.0.0.0/16` CIDRs cannot use standard VPC Peering or Transit Gateway routing cleanly; plan non-overlapping IP blocks early.",
      },
      {
        mistake: "Forgetting that `/31` works on modern RFC 3021 point-to-point router links.",
        correction:
          "While `/30` leaves 2 usable IPs, RFC 3021 allows `/31` on dedicated point-to-point links to save 50% of WAN IPv4 space.",
      },
      {
        mistake: "Allocating tiny `/28` subnets for Kubernetes clusters or serverless ENIs.",
        correction:
          "Pods and ALB/Lambda Elastic Network Interfaces consume dozens of private IPs rapidly—prefer `/22` or `/24` subnets for production EKS/GKE nodes.",
      },
    ],
    interviewQuestions: [
      {
        question: "How many usable hosts are in `192.168.10.0/26`, and what is its broadcast IP?",
        answer:
          "`32 - 26 = 6` host bits -> `2^6 = 64` total addresses (`192.168.10.0` to `192.168.10.63`). `64 - 2 = 62` usable hosts (`.1`–`.62`), and broadcast address is `192.168.10.63`.",
      },
      {
        question: "What is Longest-Prefix Match (LPM)?",
        answer:
          "If routing tables contain overlapping prefixes (`0.0.0.0/0` default vs `10.0.0.0/8` vs `10.1.2.0/24`), the router forwards traffic via the matching entry with the highest subnet bit length (`/24`).",
      },
      {
        question: "Why does AWS/GCP/Azure VPC design recommend non-overlapping CIDR planning?",
        answer:
          "To connect multiple cloud regions, on-prem data centers via VPN/Direct Connect, or peered VPCs without NAT workarounds or routing ambiguities.",
      },
    ],
    relatedConcepts: [
      "/concepts/cloud/vpc-networking",
      "/concepts/networks/osi-vs-tcp-ip-model",
      "/concepts/networks/dns-resolution",
    ],
    relatedCourse: {
      title: "Computer Networks Masterclass",
      route: "/learning/networks",
      description: "Master binary IPv4 subnetting, VLSM, IPv6 SLAAC, and Longest-Prefix Matching.",
    },
    relatedModules: [
      { title: "Networks Module 5: IPv4 Addressing & Subnetting", route: "/learning/networks/ipv4" },
      { title: "Cloud Module 2: Enterprise VPC Networking", route: "/learning/cloud/networking" },
    ],
    practiceAction: {
      label: "Practice Cloud & Subnetting Interviews",
      to: "/ai-interview",
      summary: "Practice CIDR planning, NAT gateways, and VPC routing in PrepSpaces AI Mock Interviews.",
    },
  },

  // ================= CYBERSECURITY (5) =================
  {
    slug: "sql-injection",
    category: "cybersecurity",
    subcategory: "OWASP Top 10",
    difficulty: "Beginner",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "SQL Injection (SQLi): Attack Mechanics, UNION/Blind Vectors & Prepared Statements",
    metaTitle: "SQL Injection (SQLi) & Parameterized Queries Explained | PrepSpaces Concepts",
    description:
      "Learn how SQL Injection works (In-band UNION, Error-based, Blind Boolean/Time), why string concatenation fails, and how Parameterized Queries prevent SQLi completely.",
    keywords: "SQL injection, SQLi prevention, parameterized queries, prepared statements, OWASP Top 10 injection, blind SQLi",
    directAnswer:
      "SQL Injection (SQLi) occurs when untrusted user input is concatenated directly into a database query string, allowing an attacker to alter query syntax, bypass authentication, dump tables (`UNION`), or infer secrets via boolean/time-delay probes. Defend decisively using parameterized queries (prepared statements), separating SQL code structure from bound data.",
    sections: [
      {
        heading: "1. Root Cause: Mixing Code Structure With Untrusted Data",
        paragraphs: [
          "Relational databases expect an explicit SQL syntax tree (`SELECT`, `WHERE`, `OR`). When an endpoint builds `SELECT * FROM users WHERE email = '` + input + `'`, quotes inside `input` (`' OR '1'='1' --`) escape the literal string boundary and rewrite the SQL grammar itself.",
          "SQLi ranks consistently near the top of the **OWASP Top 10 (A03 Injection)** because successful exploitation can read entire customer databases, modify balances, or invoke dangerous stored procedures.",
        ],
      },
      {
        heading: "2. Three Primary SQLi Taxonomies",
        paragraphs: [
          "Security testers categorize SQL injection by how extracted data returns:",
        ],
        bullets: [
          "In-Band SQLi (Error-Based & UNION): Query results or verbose DB syntax errors return directly inside the HTTP response.",
          "Inferential / Blind SQLi (Boolean & Time-Based): Responses hide rows/errors, so attackers infer characters bit-by-bit via true/false response diffs or `SLEEP(5)` delays.",
          "Out-of-Band (OOB) SQLi: Forces the DB server to make DNS or HTTP callbacks to an attacker-controlled collector.",
        ],
      },
      {
        heading: "3. Defense: Prepared Statements & Strict Identifier Allowlists",
        paragraphs: [
          "**Parameterized queries (Prepared Statements)** pre-compile the SQL AST with typed placeholders (`?`, `$1`) first, then send user inputs out-of-band as literal values—making syntax injection impossible regardless of quotes or dashes.",
          "Note that table names, column names, and `ORDER BY ASC/DESC` keywords **cannot** be parameterized in SQL—validate dynamic sort columns strictly against a static server-side allowlist.",
        ],
      },
    ],
    codeExample: {
      title: "Vulnerable String Concatenation vs Safe Parameterized SQL (Node.js / SQLite/Postgres)",
      language: "javascript",
      code: `// ❌ VULNERABLE: Attacker input "' OR 1=1 --" bypasses WHERE filter
const unsafeQuery = \`SELECT id, email FROM users WHERE email = '\${req.body.email}'\`;

// ✅ SAFE: Placeholder binds data separately from compiled SQL syntax tree
const safeQuery = "SELECT id, email FROM users WHERE email = ?";
const user = await db.prepare(safeQuery).bind(req.body.email).first();

// ✅ Dynamic ORDER BY must use a strict allowlist (cannot bind column names via ?)
const ALLOWED_SORT = new Set(["created_at", "name"]);
const sortCol = ALLOWED_SORT.has(req.query.sort) ? req.query.sort : "created_at";`,
      explanation:
        "Prepared statements lock the query structure before evaluating inputs; allowlists safeguard structural clauses like `ORDER BY` that placeholders cannot bind.",
    },
    commonMistakes: [
      {
        mistake: "Relying only on regex blacklists stripping `OR`, `--`, or `UNION`.",
        correction:
          "Attackers trivially bypass blacklists using case variation (`UnIoN`), inline comments (`/*!50000UNION*/`), or double encoding. Always parameterize queries.",
      },
      {
        mistake: "Assuming using an ORM (Prisma/Hibernate/TypeORM) makes raw helpers automatically safe.",
        correction:
          "Calling raw query APIs (`$queryRawUnsafe`, `createQuery(\"FROM User WHERE \" + input)`) inside an ORM reintroduces full SQL injection.",
      },
      {
        mistake: "Running application DB credentials as superuser (`postgres` / `sa`).",
        correction:
          "Enforce database least privilege alongside parameterization so an exploited microservice cannot drop schemas or access OS shell functions.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why do Prepared Statements stop SQL injection even if input contains quotes and semicolons?",
        answer:
          "Because the SQL parser builds the execution plan with fixed placeholders before binding parameter values—bound values are never parsed as SQL keywords or operators.",
      },
      {
        question: "How do you prevent SQL injection in dynamic `ORDER BY` or `LIMIT` column sorting?",
        answer:
          "SQL engines do not permit binding column names as parameters; map user keys via an explicit server-side allowlist/switch statement before interpolating the column name.",
      },
      {
        question: "What is Blind SQL Injection?",
        answer:
          "When an endpoint suppresses DB errors and result rows, attackers inject boolean conditions or `pg_sleep()` timing probes to infer secret values one character at a time.",
      },
    ],
    relatedConcepts: [
      "/concepts/cybersecurity/xss-cross-site-scripting",
      "/concepts/cybersecurity/csrf-and-ssrf",
      "/concepts/cybersecurity/stride-threat-modeling",
    ],
    relatedCourse: {
      title: "Cybersecurity & Ethical Hacking Masterclass",
      route: "/learning/cybersecurity",
      description: "Full 24-module security engineering track covering OWASP Top 10, secure code audits, and defensive engineering.",
    },
    relatedModules: [
      { title: "Cybersecurity Module 14: OWASP Top 10 & Injection Prevention", route: "/learning/cybersecurity/owasp-top-10" },
      { title: "Cybersecurity Module 16: Secure Code Review & Testing", route: "/learning/cybersecurity/secure-code-review" },
    ],
    practiceAction: {
      label: "Practice Cybersecurity Interview Questions",
      to: "/interview",
      summary: "Practice explaining OWASP Top 10 injection flaws and parameterized defenses in PrepSpaces AI Interviews.",
    },
  },
  {
    slug: "xss-cross-site-scripting",
    category: "cybersecurity",
    subcategory: "Browser & Web Security",
    difficulty: "Beginner",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "Cross-Site Scripting (XSS): Stored, Reflected, DOM XSS & CSP Defense",
    metaTitle: "Cross-Site Scripting (XSS) Types & Prevention | PrepSpaces Concepts",
    description:
      "Learn Stored, Reflected, and DOM-based Cross-Site Scripting (XSS), why `innerHTML` is dangerous, context-aware output encoding, HttpOnly cookies, and Content Security Policy (CSP).",
    keywords: "XSS cross site scripting, stored vs reflected XSS, DOM XSS, Content Security Policy CSP, HttpOnly cookies",
    directAnswer:
      "Cross-Site Scripting (XSS) happens when a web application renders untrusted input inside an active HTML/JavaScript execution context without proper encoding or sanitization, letting attackers execute arbitrary scripts in victims' browsers. Prevent XSS with context-aware escaping (`textContent` / JSX), sanitized HTML (`DOMPurify`), `HttpOnly` session cookies, and strict Content Security Policy (CSP).",
    sections: [
      {
        heading: "1. Three XSS Vectors: Stored, Reflected & DOM-Based",
        paragraphs: [
          "All three types break the browser's Same-Origin Policy trust by running malicious JavaScript inside your origin:",
        ],
        bullets: [
          "Stored (Persistent) XSS: Malicious payload saves to a database (profile bio, comment) and executes for every user viewing that page.",
          "Reflected XSS: Payload rides inside a crafted URL query string (`?q=<script>...`) and reflects immediately in server HTML response.",
          "DOM-Based XSS: The server response stays clean, but client-side JavaScript reads `location.hash`/`search` and assigns it directly to unsafe sinks like `element.innerHTML` or `eval()`.",
        ],
      },
      {
        heading: "2. Defense in Depth: Encoding, `HttpOnly`, and CSP",
        paragraphs: [
          "First, prefer safe DOM sinks (`element.textContent`, React `{variable}` JSX interpolation) that treat strings as inert text rather than markup. When rich HTML is strictly required, sanitize through an allowlist sanitizer such as DOMPurify.",
          "Second, validate URL schemes (`https://` / `http://`) before rendering `<a href={userUrl}>` so `javascript:alert(1)` links cannot bypass JSX text escaping. Third, deploy `Content-Security-Policy` headers banning inline `'unsafe-inline'` scripts and store session tokens in `HttpOnly; Secure; SameSite=Lax` cookies rather than `localStorage`.",
        ],
      },
    ],
    codeExample: {
      title: "Safe Text Assignment vs Unsafe DOM Sink & CSP Header",
      language: "javascript",
      code: `// ❌ UNSAFE DOM Sink: executes embedded <img onerror=...> or <script>
// commentBox.innerHTML = userInput;

// ✅ SAFE: Treats string strictly as inert text node
commentBox.textContent = userInput;

// ✅ Validate external link schemes before rendering href
function isSafeHttpUrl(raw) {
  try {
    const parsed = new URL(raw);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
// Recommended HTTP header defense in depth:
// Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-<random>'; object-src 'none';`,
      explanation:
        "`textContent` prevents HTML parsing completely, scheme checking neutralizes `javascript:` URLs in links, and nonce-based CSP blocks injected scripts even if a template bug slips through.",
    },
    commonMistakes: [
      {
        mistake: "Using `dangerouslySetInnerHTML` in React with raw markdown/API strings.",
        correction:
          "React escapes `{expr}` automatically, but `dangerouslySetInnerHTML` bypasses escaping—always pipe through DOMPurify first.",
      },
      {
        mistake: "Thinking `HttpOnly` cookies prevent all XSS harm.",
        correction:
          "`HttpOnly` stops JavaScript from reading `document.cookie`, yet an active XSS script can still perform authenticated `fetch()` actions in the victim's browser session.",
      },
      {
        mistake: "Adding `'unsafe-inline'` inside CSP `script-src`.",
        correction:
          "`'unsafe-inline'` largely neutralizes CSP's script-injection protection; use cryptographic nonces or hashes instead.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why doesn't React `{text}` protect `<a href={userLink}>` automatically?",
        answer:
          "JSX escapes text content inside elements and attributes, but if `userLink` begins with `javascript:`, clicking the rendered link executes arbitrary code inside the attribute protocol handler.",
      },
      {
        question: "What is the difference between Reflected XSS and DOM-based XSS?",
        answer:
          "In Reflected XSS, the server injects unescaped input into returned HTML; in DOM XSS, client-side JavaScript copies untrusted URL/storage sources into dangerous DOM sinks (`innerHTML`, `document.write`) completely in the browser.",
      },
      {
        question: "How does CSP (`Content-Security-Policy`) limit XSS impact?",
        answer:
          "By whitelisting trusted script origins/nonces and blocking inline execution or unauthorized `connect-src` data exfiltration domains.",
      },
    ],
    relatedConcepts: [
      "/concepts/cybersecurity/sql-injection",
      "/concepts/cybersecurity/csrf-and-ssrf",
      "/concepts/networks/http-vs-https-tls",
    ],
    relatedCourse: {
      title: "Cybersecurity & Ethical Hacking Masterclass",
      route: "/learning/cybersecurity",
      description: "Master CSP, SameSite cookies, browser security models, and OWASP defense.",
    },
    relatedModules: [
      { title: "Cybersecurity Module 13: Web Architecture & Browser Security", route: "/learning/cybersecurity/web-security" },
      { title: "Cybersecurity Module 14: OWASP Top 10 & Injection Prevention", route: "/learning/cybersecurity/owasp-top-10" },
    ],
    practiceAction: {
      label: "Practice Web Security Mock Interview",
      to: "/interview",
      summary: "Select Cybersecurity -> Module 13/14 to answer XSS, CSP, and browser security questions aloud.",
    },
  },
  {
    slug: "jwt-security-and-oauth2",
    category: "cybersecurity",
    subcategory: "Identity & Access Management",
    difficulty: "Intermediate",
    readTime: "8 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "JWT & OAuth 2.0 Authentication Security: Signing, Claims & Pitfalls",
    metaTitle: "JWT Security & OAuth 2.0 Explained | PrepSpaces Concepts",
    description:
      "Learn how JSON Web Tokens (JWT) and OAuth 2.0 / OIDC work securely: Header.Payload.Signature, HS256 vs RS256/EdDSA, `alg` validation, PKCE, and safe token revocation.",
    keywords: "JWT security, JSON Web Token, OAuth 2.0 PKCE, OpenID Connect OIDC, JWT vulnerabilities alg none",
    directAnswer:
      "A JSON Web Token (JWT) is a compact signed token (`header.payload.signature`) carrying verifiable identity claims for stateless API authorization, whereas OAuth 2.0 (paired with OpenID Connect) is an authorization/delegation protocol using Authorization Code + PKCE flows to issue tokens safely without exposing user passwords to third-party apps.",
    sections: [
      {
        heading: "1. JWT Structure & Signing vs Encryption",
        paragraphs: [
          "A standard JWS token contains three Base64Url-encoded segments separated by dots: **Header** (`alg`, `typ`), **Payload** (`sub`, `iss`, `aud`, `exp`, `iat`), and **Signature**.",
          "Critical reminder: Standard JWTs are **signed (integrity-protected), NOT encrypted**—anyone holding the token can Base64-decode the payload instantly! Never put secrets, raw PII, or passwords inside JWT claims.",
        ],
      },
      {
        heading: "2. Common JWT & API Security Pitfalls",
        paragraphs: [
          "Weak JWT verification creates catastrophic account takeover bugs:",
        ],
        bullets: [
          "Algorithm Confusion (`alg: none` or `RS256 -> HS256`): Always pass an explicit allowed algorithms list (`algorithms: ['RS256']` or `['HS256']`) to your verifier instead of trusting the token header's `alg`.",
          "Missing `iss` / `aud` / `exp` Checks: Validate token issuer, target audience, and expiry window on every API request.",
          "Indefinite Revocation Blindspot: Short-lived access tokens (`15m`) paired with server-revocable refresh tokens balance stateless speed with logout/ban enforcement.",
        ],
      },
      {
        heading: "3. OAuth 2.0 Authorization Code Flow with PKCE",
        paragraphs: [
          "Deprecated Implicit flows exposed tokens directly in browser URL fragments. Modern SPAs and mobile apps use **Authorization Code + PKCE (Proof Key for Code Exchange)**: the client hashes a random `code_verifier` (`code_challenge`), obtains a single-use code from the identity provider, and exchanges it cleanly with the backend.",
        ],
      },
    ],
    codeExample: {
      title: "Strict JWT Verification Pinning Allowed Algorithm, Issuer & Audience",
      language: "javascript",
      code: `import { jwtVerify } from "jose";

export async function verifyAccessToken(token, publicKey) {
  const { payload } = await jwtVerify(token, publicKey, {
    algorithms: ["RS256"],              // Reject 'none' or HS256 key-confusion attacks
    issuer: "https://auth.prepspaces.com",
    audience: "prepspaces-api",
    clockTolerance: 5,                  // Small leeway (seconds) for clock skew
  });
  return payload;
}`,
      explanation:
        "Pinning `algorithms`, `issuer`, and `audience` inside `jwtVerify()` guarantees signature tampering, cross-service replay, and algorithm downgrade attacks fail closed.",
    },
    commonMistakes: [
      {
        mistake: "Storing sensitive internal secrets inside JWT payloads assuming Base64 means encrypted.",
        correction:
          "Base64Url is trivial reversible encoding, not encryption; use JWE only when payload confidentiality is needed and keep claims minimal.",
      },
      {
        mistake: "Using long-lived non-expiring JWTs without a revocation strategy.",
        correction:
          "Keep access tokens short-lived (5–15 minutes) and revoke compromised sessions via refresh token allowlists/blocklists.",
      },
      {
        mistake: "Validating decoded JWT payloads (`jwt.decode()`) instead of signature verification (`jwtVerify()`).",
        correction:
          "`decode()` skips cryptographic verification completely and accepts forged tokens!",
      },
    ],
    interviewQuestions: [
      {
        question: "Explain the difference between OAuth 2.0 and OpenID Connect (OIDC).",
        answer:
          "OAuth 2.0 handles *authorization* (granting delegated API access scopes via Access Tokens), whereas OpenID Connect builds an *authentication* identity layer on top of OAuth 2.0 using verifiable ID Tokens.",
      },
      {
        question: "How does an `HS256` vs `RS256` algorithm-confusion attack work?",
        answer:
          "If a server exposes its RSA public key (`RS256`) and naively lets a JWT header choose `HS256`, an attacker signs a forged token symmetrically using the public key string as the HMAC secret.",
      },
      {
        question: "Why is PKCE required for single-page web and mobile OAuth apps?",
        answer:
          "Public clients cannot hide a client secret safely; PKCE binds the authorization code to a per-request cryptographic `code_verifier` so intercepted authorization codes cannot be exchanged by attackers.",
      },
    ],
    relatedConcepts: [
      "/concepts/cybersecurity/xss-cross-site-scripting",
      "/concepts/cybersecurity/csrf-and-ssrf",
      "/concepts/networks/http-vs-https-tls",
    ],
    relatedCourse: {
      title: "Cybersecurity & Ethical Hacking Masterclass",
      route: "/learning/cybersecurity",
      description: "Master OAuth 2.0, OIDC, MFA, SAML, and OWASP API Security Top 10.",
    },
    relatedModules: [
      { title: "Cybersecurity Module 11: Identity & Access Management", route: "/learning/cybersecurity/iam" },
      { title: "Cybersecurity Module 15: Auth Flaws & API Security", route: "/learning/cybersecurity/auth-api-security" },
    ],
    practiceAction: {
      label: "Practice Auth & IAM Security Interviews",
      to: "/ai-interview",
      summary: "Practice explaining OAuth 2.0 PKCE, JWT signing, and API access control in PrepSpaces AI Interviews.",
    },
  },
  {
    slug: "stride-threat-modeling",
    category: "cybersecurity",
    subcategory: "Security Architecture",
    difficulty: "Intermediate",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "STRIDE Threat Modeling Framework for Software & Cloud Architectures",
    metaTitle: "STRIDE Threat Modeling Explained with Examples | PrepSpaces Concepts",
    description:
      "Learn Microsoft's STRIDE threat modeling framework (Spoofing, Tampering, Repudiation, Info Disclosure, Denial of Service, Elevation of Privilege) on Data Flow Diagrams.",
    keywords: "STRIDE threat modeling, trust boundaries, Data Flow Diagram DFD, security architecture, OWASP threat modeling",
    directAnswer:
      "STRIDE is a structured threat-modeling methodology created at Microsoft to identify security flaws during system design before code ships. By mapping Data Flow Diagrams (DFDs) and trust boundaries, engineers systematically evaluate six threat classes: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.",
    sections: [
      {
        heading: "1. Four Questions Every Threat Model Answers",
        paragraphs: [
          "As popularized by Adam Shostack, rigorous threat modeling boils down to four iterative questions: (1) What are we working on? (DFD + trust boundaries), (2) What can go wrong? (STRIDE per element/crossing), (3) What are we going to do about it? (mitigate, transfer, eliminate, accept), and (4) Did we do a good job? (verify controls via security tests).",
        ],
      },
      {
        heading: "2. The 6 STRIDE Threat Categories Mapped to Controls",
        paragraphs: [
          "Each STRIDE letter maps directly to violated security properties and engineering defenses:",
        ],
        bullets: [
          "S — Spoofing (violates Authentication): Defend with MFA, OIDC/OAuth2, mTLS, signed tokens.",
          "T — Tampering (violates Integrity): Defend with TLS, AEAD/HMAC signatures, parameterized SQL, strict schema checks.",
          "R — Repudiation (violates Non-Repudiation): Defend with tamper-evident immutable audit logs and request correlation IDs.",
          "I — Information Disclosure (violates Confidentiality): Defend with encryption in transit/at rest (KMS), least-privilege RBAC/ABAC, no secret logging.",
          "D — Denial of Service (violates Availability): Defend with Token Bucket rate limits, timeouts, circuit breakers, autoscaling.",
          "E — Elevation of Privilege (violates Authorization): Defend with server-side RBAC/ABAC authorization on every endpoint and sandboxing.",
        ],
      },
    ],
    codeExample: {
      title: "Compact STRIDE Review Checklist Before Merging an API Feature",
      language: "yaml",
      code: `feature: "POST /api/interviews/:id/answers"
trust_boundary_crossed: "Public Browser -> Cloudflare Worker API -> Groq / Database"
controls:
  spoofing: "Verify JWT signature & session ownership (userId === session.userId)"
  tampering: "Validate JSON body schema & reject negative/NaN client scores"
  repudiation: "Log immutable evaluation timestamp, sessionId, and violation events"
  info_disclosure: "Never return stack traces or GROQ_API_KEY env secrets to clients"
  denial_of_service: "Atomic slot caps, cooldowns, and payload byte limits"
  elevation_of_privilege: "Prohibit client overriding rubric grades or accessing others' reports"`,
      explanation:
        "Running a lightweight 6-line STRIDE pass over every new trust boundary catches missing object-level authorization (`IDOR/BOLA`) before code reaches production.",
    },
    commonMistakes: [
      {
        mistake: "Waiting until final penetration testing a week before launch to draw a threat model.",
        correction:
          "Fixing architectural flaws after implementation costs orders of magnitude more than catching missing trust boundaries during design review.",
      },
      {
        mistake: "Checking only Authentication (`who are you?`) while forgetting Object-Level Authorization (`do you own resource X?`).",
        correction:
          "Broken Object Level Authorization (`BOLA/IDOR`) is #1 on OWASP API Security Top 10 and belongs squarely under Elevation of Privilege (`E`).",
      },
      {
        mistake: "Threat modeling an entire system generically instead of focusing where untrusted data crosses trust boundaries.",
        correction:
          "Focus attention first on trust-boundary arrows: browser-to-API, webhook-to-queue, service-to-database, and CI/CD-to-production.",
      },
    ],
    interviewQuestions: [
      {
        question: "What is a trust boundary in a Data Flow Diagram?",
        answer:
          "Any line where data transitions between components with different privilege or trust levels—such as public internet users hitting an API gateway, or a sandboxed worker accessing an internal database.",
      },
      {
        question: "Which STRIDE threat maps to log tampering or denying an action took place?",
        answer:
          "Repudiation—mitigated using centralized append-only audit logs with cryptographic integrity and authenticated actor IDs.",
      },
      {
        question: "How does STRIDE help System Design interviews?",
        answer:
          "Reviewing S-T-R-I-D-E at the end of a System Design architecture gives a crisp 60-second security checklist covering auth, TLS, audit trails, PII encryption, rate limiting, and RBAC.",
      },
    ],
    relatedConcepts: [
      "/concepts/cybersecurity/jwt-security-and-oauth2",
      "/concepts/cybersecurity/csrf-and-ssrf",
      "/concepts/cloud/iam-least-privilege",
    ],
    relatedCourse: {
      title: "Cybersecurity & Ethical Hacking Masterclass",
      route: "/learning/cybersecurity",
      description: "Full STRIDE labs, DREAD risk scoring, attack trees, and security architecture patterns.",
    },
    relatedModules: [
      { title: "Cybersecurity Module 4: Threat Modeling & Risk (STRIDE)", route: "/learning/cybersecurity/threat-modeling" },
      { title: "System Design Module 18: Zero-Trust Security & Multi-Tenancy", route: "/learning/system-design/security" },
    ],
    practiceAction: {
      label: "Practice Threat Modeling with AI",
      to: "/interview",
      summary: "Run a Cybersecurity Module 4 mock interview on STRIDE and trust boundaries.",
    },
  },
  {
    slug: "csrf-and-ssrf",
    category: "cybersecurity",
    subcategory: "Web & Cloud Vulnerabilities",
    difficulty: "Intermediate",
    readTime: "7 min read",
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    title: "CSRF vs SSRF Vulnerabilities: Attack Targets & Defenses Explained",
    metaTitle: "CSRF vs SSRF Explained: Mechanisms & Defenses | PrepSpaces Concepts",
    description:
      "Compare Cross-Site Request Forgery (CSRF) and Server-Side Request Forgery (SSRF): who executes the forged request, SameSite cookies & anti-CSRF tokens vs cloud metadata IMDSv2 blocks.",
    keywords: "CSRF vs SSRF, Cross-Site Request Forgery, Server-Side Request Forgery, SameSite cookie, AWS IMDSv2 SSRF",
    directAnswer:
      "CSRF (Cross-Site Request Forgery) tricks a victim's **browser** into sending an unintended state-changing request accompanied by ambient cookies; SSRF (Server-Side Request Forgery) tricks a **backend server** into fetching attacker-supplied URLs targeting internal networks or cloud metadata IPs (`169.254.169.254`).",
    sections: [
      {
        heading: "1. CSRF: Exploiting Ambient Browser Credentials",
        paragraphs: [
          "Historically, browsers automatically attached session cookies to cross-site form submissions or `<img>` requests targeting another origin. If a banking endpoint accepted `POST /transfer` authenticated purely via cookies without verifying origin, an attacker's page could trigger silent money transfers in a logged-in victim's browser.",
          "Modern defenses stack cleanly: `SameSite=Lax` (or `Strict`) cookie attributes, synchronized anti-CSRF tokens validated server-side, strict `Origin`/`Referer` header verification on state-changing requests, or `Authorization: Bearer <token>` headers (which browsers never attach automatically across origins).",
        ],
      },
      {
        heading: "2. SSRF: Pivoting Inside Cloud VPCs via Server Fetchers",
        paragraphs: [
          "Whenever an API accepts a URL (webhooks, avatar URL importer, PDF/link preview fetcher) and fetches it directly from the backend, attackers supply `http://169.254.169.254/latest/meta-data/`, `http://127.0.0.1:6379/`, or internal admin endpoints bypassing external firewalls.",
          "Defending SSRF requires validating resolved DNS IP addresses **after** DNS lookup (blocking RFC 1918 private IPs, loopback `127.0.0.0/8`, and link-local `169.254.0.0/16` to prevent DNS rebinding), disabling HTTP redirects or re-validating every hop, enforcing strict HTTPS domain allowlists, and requiring AWS IMDSv2 session-token metadata access.",
        ],
      },
    ],
    codeExample: {
      title: "Guarding URL Fetchers Against Private/Link-Local IP SSRF",
      language: "javascript",
      code: `function isPrivateOrLinkLocalIPv4(ip) {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return true;
  const [a, b] = parts;
  return (
    a === 10 ||                                // 10.0.0.0/8
    (a === 172 && b >= 16 && b <= 31) ||       // 172.16.0.0/12
    (a === 192 && b === 168) ||                // 192.168.0.0/16
    a === 127 ||                               // 127.0.0.0/8 loopback
    (a === 169 && b === 254) ||                // 169.254.0.0/16 cloud metadata
    a === 0
  );
}`,
      explanation:
        "Resolve the target domain first, verify the resolved IP is neither private nor link-local, connect directly to that verified IP, and set `redirect: 'error'` so attackers cannot redirect onto `169.254.169.254`.",
    },
    commonMistakes: [
      {
        mistake: "Checking only the URL string (`url.includes('127.0.0.1')`) to stop SSRF.",
        correction:
          "Attackers bypass string checks easily using DNS domains pointing to `127.0.0.1`, hex/octal IP encoding (`0x7f000001`), IPv6 `[::1]`, or `302` redirects.",
      },
      {
        mistake: "Allowing state mutations (`delete`, `logout`, `transfer`) over HTTP `GET` requests.",
        correction:
          "`GET` endpoints should remain safe and idempotent; even `SameSite=Lax` sends cookies on top-level `GET` navigations.",
      },
      {
        mistake: "Assuming CORS blocks CSRF requests cleanly by itself.",
        correction:
          "'Simple' cross-origin form `POST` requests execute on the server without waiting for a CORS preflight `OPTIONS` check unless custom headers or `application/json` content types are enforced.",
      },
    ],
    interviewQuestions: [
      {
        question: "Why does Bearer token authentication in `Authorization` headers resist classic CSRF?",
        answer:
          "Browsers automatically attach cookies on cross-site requests, whereas custom `Authorization: Bearer` headers require explicit JavaScript execution—blocked by Same-Origin Policy/CORS preflights on attacker origins.",
      },
      {
        question: "Why did AWS introduce IMDSv2 (`PUT` session token) specifically against SSRF?",
        answer:
          "Classic IMDSv1 answered plain unauthenticated `GET` requests, letting any vulnerable SSRF proxy read temporary IAM credentials. IMDSv2 requires a `PUT` request with a custom header and hop-limit `1`, blocking naive `GET` SSRF and proxy forwarding.",
      },
      {
        question: "How does a DNS Rebinding attack defeat naive SSRF hostname checks?",
        answer:
          "A malicious domain resolves to a public IP during validation, uses TTL=0, and resolves to `127.0.0.1` milliseconds later during the actual `fetch()`. Pinning the already-validated resolved IP prevents TOCTOU bypass.",
      },
    ],
    relatedConcepts: [
      "/concepts/cybersecurity/xss-cross-site-scripting",
      "/concepts/cybersecurity/sql-injection",
      "/concepts/cloud/iam-least-privilege",
    ],
    relatedCourse: {
      title: "Cybersecurity & Ethical Hacking Masterclass",
      route: "/learning/cybersecurity",
      description: "Master OWASP Top 10 web vulnerabilities, SSRF mitigation, and cloud defense.",
    },
    relatedModules: [
      { title: "Cybersecurity Module 14: OWASP Top 10 (SSRF & Injection)", route: "/learning/cybersecurity/owasp-top-10" },
      { title: "Cybersecurity Module 18: Cloud Security & IAM", route: "/learning/cybersecurity/cloud-security" },
    ],
    practiceAction: {
      label: "Practice Cloud & AppSec Interviews",
      to: "/ai-interview",
      summary: "Practice comparing CSRF vs SSRF and defending cloud metadata endpoints live.",
    },
  },
];
