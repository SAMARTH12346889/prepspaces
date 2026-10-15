import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landingpage from "./Pages/Landingpage";
import Learning from "./Pages/Learning";
import InterviewRoom from "./Pages/InterviewRoom";
import NotFound from "./Pages/NotFound";
import OSIntro from "./Componets/OSIntro";
import OSArchitecture from "./Componets/OSArchitecture";
import OSSystemsProgramming from "./Componets/OSSystemsProgramming";
import OSSyscalls from "./Componets/OSSyscalls";
import OSProcessLifecycle from "./Componets/OSProcessLifecycle";
import OSScheduling from "./Componets/OSScheduling";
import OSThreads from "./Componets/OSThreads";
import OSConcurrency from "./Componets/OSConcurrency";
import OSMemory from "./Componets/OSMemory";
import OSVirtualMemory from "./Componets/OSVirtualMemory";
import OSDemandPaging from "./Componets/OSDemandPaging";
import OSVirtualization from "./Componets/OSVirtualization";
import OSFilesystems from "./Componets/OSFilesystems";
import OSStorage from "./Componets/OSStorage";
import OSIPC from "./Componets/OSIPC";
import OSCrashConsistency from "./Componets/OSCrashConsistency";
import OSKernelArchitecture from "./Componets/OSKernelArchitecture";
import OSPerformanceDiagnostics from "./Componets/OSPerformanceDiagnostics";
import OSNetworking from "./Componets/OSNetworking";
import OSSecurity from "./Componets/OSSecurity";
import OSAdvancedSync from "./Componets/OSAdvancedSync";
import OSDesignTesting from "./Componets/OSDesignTesting";
import OSCapstone from "./Componets/OSCapstone";
import OSFinalCapstone from "./Componets/OSFinalCapstone";
import NetworkIntro from "./Componets/NetworkIntro";
import NetworkModels from "./Componets/NetworkModels";
import NetworkPhysical from "./Componets/NetworkPhysical";
import NetworkDataLink from "./Componets/NetworkDataLink";
import NetworkIPv4 from "./Componets/NetworkIPv4";
import NetworkIPv6 from "./Componets/NetworkIPv6";
import NetworkRouting from "./Componets/NetworkRouting";
import NetworkConfig from "./Componets/NetworkConfig";
import NetworkTCP from "./Componets/NetworkTCP";
import NetworkUDP from "./Componets/NetworkUDP";
import NetworkDNS from "./Componets/NetworkDNS";
import NetworkAppLayer from "./Componets/NetworkAppLayer";
import NetworkWireless from "./Componets/NetworkWireless";
import NetworkSwitching from "./Componets/NetworkSwitching";
import NetworkFirewalls from "./Componets/NetworkFirewalls";
import NetworkEnterpriseCloud from "./Componets/NetworkEnterpriseCloud";
import NetworkThreatModeling from "./Componets/NetworkThreatModeling";
import NetworkPacketAnalysis from "./Componets/NetworkPacketAnalysis";
import NetworkAttacksDefenses from "./Componets/NetworkAttacksDefenses";
import NetworkIdsIpsSoc from "./Componets/NetworkIdsIpsSoc";
import NetworkProgrammingAutomation from "./Componets/NetworkProgrammingAutomation";
import NetworkAdvancedRouting from "./Componets/NetworkAdvancedRouting";
import NetworkSecurityArchitecture from "./Componets/NetworkSecurityArchitecture";
import NetworkFinalCapstone from "./Componets/NetworkFinalCapstone";
import CybersecurityIntro from "./Componets/CybersecurityIntro";
import CybersecurityNetworking from "./Componets/CybersecurityNetworking";
import CybersecurityOSInternals from "./Componets/CybersecurityOSInternals";
import CybersecurityThreatModeling from "./Componets/CybersecurityThreatModeling";
import CybersecurityEthicalHacking from "./Componets/CybersecurityEthicalHacking";
import CybersecurityOSINT from "./Componets/CybersecurityOSINT";
import CybersecurityNetworkDiscovery from "./Componets/CybersecurityNetworkDiscovery";
import CybersecurityVulnerabilityAssessment from "./Componets/CybersecurityVulnerabilityAssessment";
import CybersecurityNetworkSecurity from "./Componets/CybersecurityNetworkSecurity";
import CybersecurityOSHardening from "./Componets/CybersecurityOSHardening";
import CybersecurityIAM from "./Componets/CybersecurityIAM";
import CybersecurityCryptography from "./Componets/CybersecurityCryptography";
import CybersecurityWebSecurity from "./Componets/CybersecurityWebSecurity";
import CybersecurityInjection from "./Componets/CybersecurityInjection";
import CybersecurityAuthApiSecurity from "./Componets/CybersecurityAuthApiSecurity";
import CybersecuritySecureCodeReview from "./Componets/CybersecuritySecureCodeReview";
import CybersecurityWirelessSecurity from "./Componets/CybersecurityWirelessSecurity";
import CybersecurityCloudContainerSecurity from "./Componets/CybersecurityCloudContainerSecurity";
import CybersecurityMalwareThreatIntel from "./Componets/CybersecurityMalwareThreatIntel";
import CybersecuritySIEMIncidentResponse from "./Componets/CybersecuritySIEMIncidentResponse";
import CybersecurityPentestMethodology from "./Componets/CybersecurityPentestMethodology";
import CybersecurityRedBluePurpleOps from "./Componets/CybersecurityRedBluePurpleOps";
import CybersecurityPentestReportingRemediation from "./Componets/CybersecurityPentestReportingRemediation";
import CybersecurityCapstone from "./Componets/CybersecurityCapstone";

import SystemDesignIntro from "./Componets/SystemDesignIntro";
import SystemDesignRequirements from "./Componets/SystemDesignRequirements";
import SystemDesignNetworking from "./Componets/SystemDesignNetworking";
import SystemDesignArchitecture from "./Componets/SystemDesignArchitecture";
import SystemDesignDatabases from "./Componets/SystemDesignDatabases";
import SystemDesignCaching from "./Componets/SystemDesignCaching";
import SystemDesignReplication from "./Componets/SystemDesignReplication";
import SystemDesignDistributedSystems from "./Componets/SystemDesignDistributedSystems";
import SystemDesignConsistency from "./Componets/SystemDesignConsistency";
import SystemDesignConsensus from "./Componets/SystemDesignConsensus";
import SystemDesignMessaging from "./Componets/SystemDesignMessaging";
import SystemDesignTransactions from "./Componets/SystemDesignTransactions";
import SystemDesignTraffic from "./Componets/SystemDesignTraffic";
import SystemDesignScalability from "./Componets/SystemDesignScalability";
import SystemDesignMultiRegion from "./Componets/SystemDesignMultiRegion";
import SystemDesignReliability from "./Componets/SystemDesignReliability";
import SystemDesignSecurity from "./Componets/SystemDesignSecurity";
import SystemDesignRealtime from "./Componets/SystemDesignRealtime";
import SystemDesignSearch from "./Componets/SystemDesignSearch";
import SystemDesignAIServing from "./Componets/SystemDesignAIServing";
import SystemDesignCaseStudies from "./Componets/SystemDesignCaseStudies";
import SystemDesignAdvancedCaseStudies from "./Componets/SystemDesignAdvancedCaseStudies";
import SystemDesignCapstone from "./Componets/SystemDesignCapstone";
import CloudComputing from "./Componets/CloudComputing";
import CloudNetworking from "./Componets/CloudNetworking";
import CloudCompute from "./Componets/CloudCompute";
import CloudStorage from "./Componets/CloudStorage";
import CloudDatabases from "./Componets/CloudDatabases";
import CloudArchitecture from "./Componets/CloudArchitecture";
import CloudAWS from "./Componets/CloudAWS";
import CloudAzure from "./Componets/CloudAzure";
import CloudGCP from "./Componets/CloudGCP";
import CloudMultiCloud from "./Componets/CloudMultiCloud";
import CloudSecurity from "./Componets/CloudSecurity";
import CloudEconomics from "./Componets/CloudEconomics";
import CloudAdvanced from "./Componets/CloudAdvanced";
import DevOpsLinux from "./Componets/DevOpsLinux";
import DevOpsGit from "./Componets/DevOpsGit";
import DevOpsDocker from "./Componets/DevOpsDocker";
import DevOpsK8s from "./Componets/DevOpsK8s";
import DevOpsIaC from "./Componets/DevOpsIaC";
import DevOpsCICD from "./Componets/DevOpsCICD";
import DevOpsDeployment from "./Componets/DevOpsDeployment";
import DevOpsSRE from "./Componets/DevOpsSRE";
import DevOpsReliability from "./Componets/DevOpsReliability";
import DevOpsSecOps from "./Componets/DevOpsSecOps";
import DevOpsPlatform from "./Componets/DevOpsPlatform";
import DevOpsCapstone from "./Componets/DevOpsCapstone";
import VoiceAssistant from "./Componets/VoiceAssistant";
import { NovaProvider } from "./Componets/NovaContext";
import { VoiceProvider } from "./voice/VoiceProvider";
import { NavigationProvider } from "./utils/navigation";
import { SHOW_NOVA_AI } from "./config/features";
import AppErrorBoundary from "./Componets/AppErrorBoundary";
import SeoManager from "./Componets/SeoManager";

function App() {
  return (
    <BrowserRouter>
      <SeoManager />
      <AppErrorBoundary>
        <NavigationProvider>
          <VoiceProvider>
            <NovaProvider>
              <Routes>
            {/* LANDING PAGE */}
            <Route path="/" element={<Landingpage />} />

            {/* LEARNING MAIN PAGE & SEO ALIAS */}
            <Route path="/learning" element={<Learning />} />
            <Route path="/learn" element={<Learning />} />

            {/* OPERATING SYSTEMS MASTER COURSE */}
            <Route path="/learning/os" element={<OSIntro />} />
            <Route path="/learning/os/intro" element={<OSIntro />} />
            <Route path="/learning/os/module-1" element={<OSIntro />} />
            <Route path="/learning/os/architecture" element={<OSArchitecture />} />
            <Route path="/learning/os/module-2" element={<OSArchitecture />} />
            <Route path="/learning/os/systems-programming" element={<OSSystemsProgramming />} />
            <Route path="/learning/os/c-programming" element={<OSSystemsProgramming />} />
            <Route path="/learning/os/module-3" element={<OSSystemsProgramming />} />
            <Route path="/learning/os/syscalls" element={<OSSyscalls />} />
            <Route path="/learning/os/system-calls" element={<OSSyscalls />} />
            <Route path="/learning/os/module-4" element={<OSSyscalls />} />
            <Route path="/learning/os/processes" element={<OSProcessLifecycle />} />
            <Route path="/learning/os/process-lifecycle" element={<OSProcessLifecycle />} />
            <Route path="/learning/os/module-5" element={<OSProcessLifecycle />} />
            <Route path="/learning/os/scheduling" element={<OSScheduling />} />
            <Route path="/learning/os/cpu-scheduling" element={<OSScheduling />} />
            <Route path="/learning/os/module-6" element={<OSScheduling />} />
            <Route path="/learning/os/threads" element={<OSThreads />} />
            <Route path="/learning/os/multithreading" element={<OSThreads />} />
            <Route path="/learning/os/module-7" element={<OSThreads />} />
            <Route path="/learning/os/concurrency" element={<OSConcurrency />} />
            <Route path="/learning/os/synchronization" element={<OSConcurrency />} />
            <Route path="/learning/os/deadlocks" element={<OSConcurrency />} />
            <Route path="/learning/os/module-8" element={<OSConcurrency />} />
            <Route path="/learning/os/memory" element={<OSMemory />} />
            <Route path="/learning/os/memory-allocation" element={<OSMemory />} />
            <Route path="/learning/os/module-9" element={<OSMemory />} />
            <Route path="/learning/os/virtual-memory" element={<OSVirtualMemory />} />
            <Route path="/learning/os/paging" element={<OSVirtualMemory />} />
            <Route path="/learning/os/module-10" element={<OSVirtualMemory />} />
            <Route path="/learning/os/demand-paging" element={<OSDemandPaging />} />
            <Route path="/learning/os/page-replacement" element={<OSDemandPaging />} />
            <Route path="/learning/os/module-11" element={<OSDemandPaging />} />
            <Route path="/learning/os/virtualization" element={<OSVirtualization />} />
            <Route path="/learning/os/containers" element={<OSVirtualization />} />
            <Route path="/learning/os/advanced-memory" element={<OSVirtualization />} />
            <Route path="/learning/os/module-12" element={<OSVirtualization />} />
            <Route path="/learning/os/filesystems" element={<OSFilesystems />} />
            <Route path="/learning/os/storage-architecture" element={<OSFilesystems />} />
            <Route path="/learning/os/module-13" element={<OSFilesystems />} />
            <Route path="/learning/os/storage" element={<OSStorage />} />
            <Route path="/learning/os/disk-scheduling" element={<OSStorage />} />
            <Route path="/learning/os/module-14" element={<OSStorage />} />
            <Route path="/learning/os/ipc" element={<OSIPC />} />
            <Route path="/learning/os/pipes" element={<OSIPC />} />
            <Route path="/learning/os/shared-memory" element={<OSIPC />} />
            <Route path="/learning/os/signals" element={<OSIPC />} />
            <Route path="/learning/os/module-15" element={<OSIPC />} />
            <Route path="/learning/os/crash-consistency" element={<OSCrashConsistency />} />
            <Route path="/learning/os/durability" element={<OSCrashConsistency />} />
            <Route path="/learning/os/fsync" element={<OSCrashConsistency />} />
            <Route path="/learning/os/module-16" element={<OSCrashConsistency />} />
            <Route path="/learning/os/kernel-architecture" element={<OSKernelArchitecture />} />
            <Route path="/learning/os/kernel" element={<OSKernelArchitecture />} />
            <Route path="/learning/os/xv6" element={<OSKernelArchitecture />} />
            <Route path="/learning/os/module-17" element={<OSKernelArchitecture />} />
            <Route path="/learning/os/diagnostics" element={<OSPerformanceDiagnostics />} />
            <Route path="/learning/os/performance" element={<OSPerformanceDiagnostics />} />
            <Route path="/learning/os/linux-internals" element={<OSPerformanceDiagnostics />} />
            <Route path="/learning/os/module-18" element={<OSPerformanceDiagnostics />} />
            <Route path="/learning/os/networking" element={<OSNetworking />} />
            <Route path="/learning/os/network-io" element={<OSNetworking />} />
            <Route path="/learning/os/sockets" element={<OSNetworking />} />
            <Route path="/learning/os/module-19" element={<OSNetworking />} />
            <Route path="/learning/os/security" element={<OSSecurity />} />
            <Route path="/learning/os/isolation" element={<OSSecurity />} />
            <Route path="/learning/os/reliability" element={<OSSecurity />} />
            <Route path="/learning/os/module-20" element={<OSSecurity />} />
            <Route path="/learning/os/advanced-sync" element={<OSAdvancedSync />} />
            <Route path="/learning/os/synchronization" element={<OSAdvancedSync />} />
            <Route path="/learning/os/multiprocessor" element={<OSAdvancedSync />} />
            <Route path="/learning/os/lock-free" element={<OSAdvancedSync />} />
            <Route path="/learning/os/module-21" element={<OSAdvancedSync />} />
            <Route path="/learning/os/design-testing" element={<OSDesignTesting />} />
            <Route path="/learning/os/testing" element={<OSDesignTesting />} />
            <Route path="/learning/os/failure-analysis" element={<OSDesignTesting />} />
            <Route path="/learning/os/distributed" element={<OSDesignTesting />} />
            <Route path="/learning/os/module-22" element={<OSDesignTesting />} />
            <Route path="/learning/os/capstone" element={<OSCapstone />} />
            <Route path="/learning/os/xv6-capstone" element={<OSCapstone />} />
            <Route path="/learning/os/module-23" element={<OSCapstone />} />
            <Route path="/learning/os/final-capstone" element={<OSFinalCapstone />} />
            <Route path="/learning/os/capstone-lab" element={<OSFinalCapstone />} />
            <Route path="/learning/os/module-24" element={<OSFinalCapstone />} />
            <Route path="/learn/os" element={<OSIntro />} />
            <Route path="/learn/os/architecture" element={<OSArchitecture />} />
            <Route path="/learn/os/systems-programming" element={<OSSystemsProgramming />} />
            <Route path="/learn/os/c-programming" element={<OSSystemsProgramming />} />
            <Route path="/learn/os/syscalls" element={<OSSyscalls />} />
            <Route path="/learn/os/processes" element={<OSProcessLifecycle />} />
            <Route path="/learn/os/process-lifecycle" element={<OSProcessLifecycle />} />
            <Route path="/learn/os/scheduling" element={<OSScheduling />} />
            <Route path="/learn/os/cpu-scheduling" element={<OSScheduling />} />
            <Route path="/learn/os/threads" element={<OSThreads />} />
            <Route path="/learn/os/multithreading" element={<OSThreads />} />
            <Route path="/learn/os/concurrency" element={<OSConcurrency />} />
            <Route path="/learn/os/synchronization" element={<OSConcurrency />} />
            <Route path="/learn/os/memory" element={<OSMemory />} />
            <Route path="/learn/os/memory-allocation" element={<OSMemory />} />
            <Route path="/learn/os/virtual-memory" element={<OSVirtualMemory />} />
            <Route path="/learn/os/paging" element={<OSVirtualMemory />} />
            <Route path="/learn/os/demand-paging" element={<OSDemandPaging />} />
            <Route path="/learn/os/page-replacement" element={<OSDemandPaging />} />
            <Route path="/learn/os/virtualization" element={<OSVirtualization />} />
            <Route path="/learn/os/containers" element={<OSVirtualization />} />
            <Route path="/learn/os/filesystems" element={<OSFilesystems />} />
            <Route path="/learn/os/storage-architecture" element={<OSFilesystems />} />
            <Route path="/learn/os/storage" element={<OSStorage />} />
            <Route path="/learn/os/disk-scheduling" element={<OSStorage />} />
            <Route path="/learn/os/ipc" element={<OSIPC />} />
            <Route path="/learn/os/pipes" element={<OSIPC />} />
            <Route path="/learn/os/shared-memory" element={<OSIPC />} />
            <Route path="/learn/os/crash-consistency" element={<OSCrashConsistency />} />
            <Route path="/learn/os/durability" element={<OSCrashConsistency />} />
            <Route path="/learn/os/kernel-architecture" element={<OSKernelArchitecture />} />
            <Route path="/learn/os/kernel" element={<OSKernelArchitecture />} />
            <Route path="/learn/os/xv6" element={<OSKernelArchitecture />} />
            <Route path="/learn/os/diagnostics" element={<OSPerformanceDiagnostics />} />
            <Route path="/learn/os/performance" element={<OSPerformanceDiagnostics />} />
            <Route path="/learn/os/linux-internals" element={<OSPerformanceDiagnostics />} />
            <Route path="/learn/os/networking" element={<OSNetworking />} />
            <Route path="/learn/os/network-io" element={<OSNetworking />} />
            <Route path="/learn/os/sockets" element={<OSNetworking />} />
            <Route path="/learn/os/security" element={<OSSecurity />} />
            <Route path="/learn/os/isolation" element={<OSSecurity />} />
            <Route path="/learn/os/reliability" element={<OSSecurity />} />
            <Route path="/learn/os/advanced-sync" element={<OSAdvancedSync />} />
            <Route path="/learn/os/multiprocessor" element={<OSAdvancedSync />} />
            <Route path="/learn/os/lock-free" element={<OSAdvancedSync />} />
            <Route path="/learn/os/design-testing" element={<OSDesignTesting />} />
            <Route path="/learn/os/testing" element={<OSDesignTesting />} />
            <Route path="/learn/os/failure-analysis" element={<OSDesignTesting />} />
            <Route path="/learn/os/capstone" element={<OSCapstone />} />
            <Route path="/learn/os/xv6-capstone" element={<OSCapstone />} />
            <Route path="/learn/os/final-capstone" element={<OSFinalCapstone />} />
            <Route path="/learn/os/capstone-lab" element={<OSFinalCapstone />} />
            <Route path="/learn/operating-systems" element={<OSIntro />} />

            {/* COMPUTER NETWORKS COURSE & SEO ALIAS */}
            <Route path="/learn/networks" element={<NetworkIntro />} />
            <Route path="/learn/computer-networks" element={<NetworkIntro />} />
            <Route path="/learn/networking" element={<NetworkIntro />} />
            <Route path="/learning/networks" element={<NetworkIntro />} />
            <Route path="/learning/networks/intro" element={<NetworkIntro />} />
            <Route path="/learning/networks/fundamentals" element={<NetworkIntro />} />
            <Route path="/learning/networks/module-1" element={<NetworkIntro />} />
            <Route path="/learning/computer-networks" element={<NetworkIntro />} />

            {/* COMPUTER NETWORKS — MODULE 2: NETWORK MODELS (OSI & TCP/IP) */}
            <Route path="/learning/networks/models" element={<NetworkModels />} />
            <Route path="/learning/networks/osi-tcpip" element={<NetworkModels />} />
            <Route path="/learning/networks/module-2" element={<NetworkModels />} />
            <Route path="/learn/networks/models" element={<NetworkModels />} />
            <Route path="/learn/networks/osi-tcpip" element={<NetworkModels />} />

            {/* COMPUTER NETWORKS — MODULE 3: PHYSICAL LAYER & DATA TRANSMISSION */}
            <Route path="/learning/networks/physical" element={<NetworkPhysical />} />
            <Route path="/learning/networks/transmission" element={<NetworkPhysical />} />
            <Route path="/learning/networks/module-3" element={<NetworkPhysical />} />
            <Route path="/learn/networks/physical" element={<NetworkPhysical />} />
            <Route path="/learn/networks/transmission" element={<NetworkPhysical />} />

            {/* COMPUTER NETWORKS — MODULE 4: DATA LINK LAYER & ETHERNET */}
            <Route path="/learning/networks/datalink" element={<NetworkDataLink />} />
            <Route path="/learning/networks/ethernet" element={<NetworkDataLink />} />
            <Route path="/learning/networks/module-4" element={<NetworkDataLink />} />
            <Route path="/learn/networks/datalink" element={<NetworkDataLink />} />
            <Route path="/learn/networks/ethernet" element={<NetworkDataLink />} />

            {/* COMPUTER NETWORKS — MODULE 5: IPV4 ADDRESSING & SUBNETTING */}
            <Route path="/learning/networks/ipv4" element={<NetworkIPv4 />} />
            <Route path="/learning/networks/subnetting" element={<NetworkIPv4 />} />
            <Route path="/learning/networks/addressing" element={<NetworkIPv4 />} />
            <Route path="/learning/networks/module-5" element={<NetworkIPv4 />} />
            <Route path="/learn/networks/ipv4" element={<NetworkIPv4 />} />
            <Route path="/learn/networks/subnetting" element={<NetworkIPv4 />} />

            {/* COMPUTER NETWORKS — MODULE 6: IPV6 & MODERN ADDRESSING */}
            <Route path="/learning/networks/ipv6" element={<NetworkIPv6 />} />
            <Route path="/learning/networks/ipv6-addressing" element={<NetworkIPv6 />} />
            <Route path="/learning/networks/slaac-ndp" element={<NetworkIPv6 />} />
            <Route path="/learning/networks/module-6" element={<NetworkIPv6 />} />
            <Route path="/learn/networks/ipv6" element={<NetworkIPv6 />} />
            <Route path="/learn/networks/ipv6-addressing" element={<NetworkIPv6 />} />

            {/* COMPUTER NETWORKS — MODULE 7: ROUTING & ROUTER ARCHITECTURE */}
            <Route path="/learning/networks/routing" element={<NetworkRouting />} />
            <Route path="/learning/networks/router-architecture" element={<NetworkRouting />} />
            <Route path="/learning/networks/ospf-bgp" element={<NetworkRouting />} />
            <Route path="/learning/networks/module-7" element={<NetworkRouting />} />
            <Route path="/learn/networks/routing" element={<NetworkRouting />} />
            <Route path="/learn/networks/router-architecture" element={<NetworkRouting />} />

            {/* COMPUTER NETWORKS — MODULE 8: ICMP, ARP, DHCP & HOST CONFIGURATION */}
            <Route path="/learning/networks/config" element={<NetworkConfig />} />
            <Route path="/learning/networks/dhcp-arp" element={<NetworkConfig />} />
            <Route path="/learning/networks/icmp-diagnostics" element={<NetworkConfig />} />
            <Route path="/learning/networks/module-8" element={<NetworkConfig />} />
            <Route path="/learn/networks/config" element={<NetworkConfig />} />
            <Route path="/learn/networks/dhcp-arp" element={<NetworkConfig />} />

            {/* COMPUTER NETWORKS — MODULE 9: TCP — RELIABLE TRANSPORT */}
            <Route path="/learning/networks/tcp" element={<NetworkTCP />} />
            <Route path="/learning/networks/tcp-internals" element={<NetworkTCP />} />
            <Route path="/learning/networks/handshake" element={<NetworkTCP />} />
            <Route path="/learning/networks/module-9" element={<NetworkTCP />} />
            <Route path="/learn/networks/tcp" element={<NetworkTCP />} />
            <Route path="/learn/networks/tcp-internals" element={<NetworkTCP />} />

            {/* COMPUTER NETWORKS — MODULE 10: UDP, QUIC & MODERN TRANSPORT */}
            <Route path="/learning/networks/udp" element={<NetworkUDP />} />
            <Route path="/learning/networks/quic" element={<NetworkUDP />} />
            <Route path="/learning/networks/modern-transport" element={<NetworkUDP />} />
            <Route path="/learning/networks/http3" element={<NetworkUDP />} />
            <Route path="/learning/networks/module-10" element={<NetworkUDP />} />
            <Route path="/learn/networks/udp" element={<NetworkUDP />} />
            <Route path="/learn/networks/quic" element={<NetworkUDP />} />

            {/* COMPUTER NETWORKS — MODULE 11: DNS & INTERNET NAMING */}
            <Route path="/learning/networks/dns" element={<NetworkDNS />} />
            <Route path="/learning/networks/dns-resolution" element={<NetworkDNS />} />
            <Route path="/learning/networks/domain-naming" element={<NetworkDNS />} />
            <Route path="/learning/networks/doh-dot" element={<NetworkDNS />} />
            <Route path="/learning/networks/module-11" element={<NetworkDNS />} />
            <Route path="/learn/networks/dns" element={<NetworkDNS />} />
            <Route path="/learn/networks/domain-naming" element={<NetworkDNS />} />

            {/* COMPUTER NETWORKS — MODULE 12: APPLICATION PROTOCOLS & WEB NETWORKING */}
            <Route path="/learning/networks/application-layer" element={<NetworkAppLayer />} />
            <Route path="/learning/networks/http" element={<NetworkAppLayer />} />
            <Route path="/learning/networks/web-protocols" element={<NetworkAppLayer />} />
            <Route path="/learning/networks/module-12" element={<NetworkAppLayer />} />
            <Route path="/learn/networks/application-layer" element={<NetworkAppLayer />} />
            <Route path="/learn/networks/http" element={<NetworkAppLayer />} />

            {/* COMPUTER NETWORKS — MODULE 13: WIRELESS, WI-FI & MOBILE NETWORKING */}
            <Route path="/learning/networks/wireless" element={<NetworkWireless />} />
            <Route path="/learning/networks/wifi" element={<NetworkWireless />} />
            <Route path="/learning/networks/mobile" element={<NetworkWireless />} />
            <Route path="/learning/networks/5g" element={<NetworkWireless />} />
            <Route path="/learning/networks/module-13" element={<NetworkWireless />} />
            <Route path="/learn/networks/wireless" element={<NetworkWireless />} />
            <Route path="/learn/networks/wifi" element={<NetworkWireless />} />

            {/* COMPUTER NETWORKS — MODULE 14: SWITCHING, VLANS & ENTERPRISE LAN DESIGN */}
            <Route path="/learning/networks/switching" element={<NetworkSwitching />} />
            <Route path="/learning/networks/vlans" element={<NetworkSwitching />} />
            <Route path="/learning/networks/lan-design" element={<NetworkSwitching />} />
            <Route path="/learning/networks/stp" element={<NetworkSwitching />} />
            <Route path="/learning/networks/module-14" element={<NetworkSwitching />} />
            <Route path="/learn/networks/switching" element={<NetworkSwitching />} />
            <Route path="/learn/networks/vlans" element={<NetworkSwitching />} />

            {/* COMPUTER NETWORKS — MODULE 15: NETWORK SERVICES, FIREWALLS & ACCESS CONTROL */}
            <Route path="/learning/networks/firewalls" element={<NetworkFirewalls />} />
            <Route path="/learning/networks/security" element={<NetworkFirewalls />} />
            <Route path="/learning/networks/access-control" element={<NetworkFirewalls />} />
            <Route path="/learning/networks/vpn" element={<NetworkFirewalls />} />
            <Route path="/learning/networks/module-15" element={<NetworkFirewalls />} />
            <Route path="/learn/networks/firewalls" element={<NetworkFirewalls />} />
            <Route path="/learn/networks/security" element={<NetworkFirewalls />} />

            {/* COMPUTER NETWORKS — MODULE 16: ENTERPRISE, DATA CENTER & CLOUD NETWORKING */}
            <Route path="/learning/networks/enterprise-cloud" element={<NetworkEnterpriseCloud />} />
            <Route path="/learning/networks/cloud" element={<NetworkEnterpriseCloud />} />
            <Route path="/learning/networks/datacenter" element={<NetworkEnterpriseCloud />} />
            <Route path="/learning/networks/sdn-vxlan" element={<NetworkEnterpriseCloud />} />
            <Route path="/learning/networks/module-16" element={<NetworkEnterpriseCloud />} />
            <Route path="/learn/networks/enterprise-cloud" element={<NetworkEnterpriseCloud />} />
            <Route path="/learn/networks/datacenter" element={<NetworkEnterpriseCloud />} />

            {/* COMPUTER NETWORKS — MODULE 17: NETWORK SECURITY FUNDAMENTALS & THREAT MODELING */}
            <Route path="/learning/networks/threat-modeling" element={<NetworkThreatModeling />} />
            <Route path="/learning/networks/threat-model" element={<NetworkThreatModeling />} />
            <Route path="/learning/networks/cia-triad" element={<NetworkThreatModeling />} />
            <Route path="/learning/networks/stride" element={<NetworkThreatModeling />} />
            <Route path="/learning/networks/module-17" element={<NetworkThreatModeling />} />
            <Route path="/learn/networks/threat-modeling" element={<NetworkThreatModeling />} />

            {/* COMPUTER NETWORKS — MODULE 18: PACKET ANALYSIS & NETWORK RECONNAISSANCE */}
            <Route path="/learning/networks/packet-analysis" element={<NetworkPacketAnalysis />} />
            <Route path="/learning/networks/wireshark" element={<NetworkPacketAnalysis />} />
            <Route path="/learning/networks/tcpdump" element={<NetworkPacketAnalysis />} />
            <Route path="/learning/networks/reconnaissance" element={<NetworkPacketAnalysis />} />
            <Route path="/learning/networks/module-18" element={<NetworkPacketAnalysis />} />
            <Route path="/learn/networks/packet-analysis" element={<NetworkPacketAnalysis />} />

            {/* COMPUTER NETWORKS — MODULE 19: COMMON NETWORK ATTACKS & DEFENSIVE COUNTERMEASURES */}
            <Route path="/learning/networks/attacks-defenses" element={<NetworkAttacksDefenses />} />
            <Route path="/learning/networks/attacks" element={<NetworkAttacksDefenses />} />
            <Route path="/learning/networks/arp-spoofing" element={<NetworkAttacksDefenses />} />
            <Route path="/learning/networks/syn-flood" element={<NetworkAttacksDefenses />} />
            <Route path="/learning/networks/module-19" element={<NetworkAttacksDefenses />} />
            <Route path="/learn/networks/attacks-defenses" element={<NetworkAttacksDefenses />} />

            {/* COMPUTER NETWORKS — MODULE 20: IDS/IPS, SOC MONITORING & INCIDENT RESPONSE */}
            <Route path="/learning/networks/ids-ips-soc" element={<NetworkIdsIpsSoc />} />
            <Route path="/learning/networks/ids-ips" element={<NetworkIdsIpsSoc />} />
            <Route path="/learning/networks/suricata-zeek" element={<NetworkIdsIpsSoc />} />
            <Route path="/learning/networks/soc-monitoring" element={<NetworkIdsIpsSoc />} />
            <Route path="/learning/networks/incident-response" element={<NetworkIdsIpsSoc />} />
            <Route path="/learning/networks/module-20" element={<NetworkIdsIpsSoc />} />
            <Route path="/learn/networks/ids-ips-soc" element={<NetworkIdsIpsSoc />} />

            {/* COMPUTER NETWORKS — MODULE 21: NETWORK PROGRAMMING & AUTOMATION */}
            <Route path="/learning/networks/network-automation" element={<NetworkProgrammingAutomation />} />
            <Route path="/learning/networks/automation" element={<NetworkProgrammingAutomation />} />
            <Route path="/learning/networks/socket-programming" element={<NetworkProgrammingAutomation />} />
            <Route path="/learning/networks/python-networking" element={<NetworkProgrammingAutomation />} />
            <Route path="/learning/networks/netconf-restconf" element={<NetworkProgrammingAutomation />} />
            <Route path="/learning/networks/module-21" element={<NetworkProgrammingAutomation />} />
            <Route path="/learn/networks/network-automation" element={<NetworkProgrammingAutomation />} />

            {/* COMPUTER NETWORKS — MODULE 22: ADVANCED ROUTING, PERFORMANCE & TROUBLESHOOTING */}
            <Route path="/learning/networks/advanced-routing" element={<NetworkAdvancedRouting />} />
            <Route path="/learning/networks/bgp" element={<NetworkAdvancedRouting />} />
            <Route path="/learning/networks/ospf" element={<NetworkAdvancedRouting />} />
            <Route path="/learning/networks/troubleshooting" element={<NetworkAdvancedRouting />} />
            <Route path="/learning/networks/bufferbloat" element={<NetworkAdvancedRouting />} />
            <Route path="/learning/networks/module-22" element={<NetworkAdvancedRouting />} />
            <Route path="/learn/networks/advanced-routing" element={<NetworkAdvancedRouting />} />
            <Route path="/learn/networks/bgp" element={<NetworkAdvancedRouting />} />
            <Route path="/learn/networks/troubleshooting" element={<NetworkAdvancedRouting />} />

            {/* COMPUTER NETWORKS — MODULE 23: MODERN NETWORK SECURITY ARCHITECTURE */}
            <Route path="/learning/networks/security-architecture" element={<NetworkSecurityArchitecture />} />
            <Route path="/learning/networks/zero-trust" element={<NetworkSecurityArchitecture />} />
            <Route path="/learning/networks/microsegmentation" element={<NetworkSecurityArchitecture />} />
            <Route path="/learning/networks/wireguard" element={<NetworkSecurityArchitecture />} />
            <Route path="/learning/networks/module-23" element={<NetworkSecurityArchitecture />} />
            <Route path="/learn/networks/security-architecture" element={<NetworkSecurityArchitecture />} />
            <Route path="/learn/networks/zero-trust" element={<NetworkSecurityArchitecture />} />

            {/* COMPUTER NETWORKS — MODULE 24: FINAL CAPSTONE (NETWORK ENGINEERING & SECURITY LAB) */}
            <Route path="/learning/networks/final-capstone" element={<NetworkFinalCapstone />} />
            <Route path="/learning/networks/capstone" element={<NetworkFinalCapstone />} />
            <Route path="/learning/networks/capstone-project" element={<NetworkFinalCapstone />} />
            <Route path="/learning/networks/network-lab" element={<NetworkFinalCapstone />} />
            <Route path="/learning/networks/module-24" element={<NetworkFinalCapstone />} />
            <Route path="/learn/networks/final-capstone" element={<NetworkFinalCapstone />} />
            <Route path="/learn/networks/capstone" element={<NetworkFinalCapstone />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 1: INTRO & ETHICAL HACKING */}
            <Route path="/learning/cybersecurity" element={<CybersecurityIntro />} />
            <Route path="/learning/cybersecurity/intro" element={<CybersecurityIntro />} />
            <Route path="/learning/cybersecurity/module-1" element={<CybersecurityIntro />} />
            <Route path="/learning/cybersecurity/ethical-hacking" element={<CybersecurityIntro />} />
            <Route path="/learn/cybersecurity" element={<CybersecurityIntro />} />
            <Route path="/learn/cybersecurity/intro" element={<CybersecurityIntro />} />
            <Route path="/learn/ethical-hacking" element={<CybersecurityIntro />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 2: NETWORKING FUNDAMENTALS & PROTOCOLS */}
            <Route path="/learning/cybersecurity/networking" element={<CybersecurityNetworking />} />
            <Route path="/learning/cybersecurity/tcp-ip" element={<CybersecurityNetworking />} />
            <Route path="/learning/cybersecurity/dns" element={<CybersecurityNetworking />} />
            <Route path="/learning/cybersecurity/http-https" element={<CybersecurityNetworking />} />
            <Route path="/learning/cybersecurity/module-2" element={<CybersecurityNetworking />} />
            <Route path="/learn/cybersecurity/networking" element={<CybersecurityNetworking />} />
            <Route path="/learn/cybersecurity/tcp-ip" element={<CybersecurityNetworking />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 3: LINUX & WINDOWS INTERNALS */}
            <Route path="/learning/cybersecurity/os-internals" element={<CybersecurityOSInternals />} />
            <Route path="/learning/cybersecurity/linux-windows" element={<CybersecurityOSInternals />} />
            <Route path="/learning/cybersecurity/module-3" element={<CybersecurityOSInternals />} />
            <Route path="/learn/cybersecurity/os-internals" element={<CybersecurityOSInternals />} />
            <Route path="/learn/cybersecurity/linux-windows" element={<CybersecurityOSInternals />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 4: THREAT MODELING & RISK MANAGEMENT */}
            <Route path="/learning/cybersecurity/threat-modeling" element={<CybersecurityThreatModeling />} />
            <Route path="/learning/cybersecurity/risk-management" element={<CybersecurityThreatModeling />} />
            <Route path="/learning/cybersecurity/attack-surfaces" element={<CybersecurityThreatModeling />} />
            <Route path="/learning/cybersecurity/stride" element={<CybersecurityThreatModeling />} />
            <Route path="/learning/cybersecurity/module-4" element={<CybersecurityThreatModeling />} />
            <Route path="/learn/cybersecurity/threat-modeling" element={<CybersecurityThreatModeling />} />
            <Route path="/learn/cybersecurity/risk-management" element={<CybersecurityThreatModeling />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 5: ETHICAL HACKING METHODOLOGIES & ROE */}
            <Route path="/learning/cybersecurity/ethical-hacking-methodology" element={<CybersecurityEthicalHacking />} />
            <Route path="/learning/cybersecurity/methodology" element={<CybersecurityEthicalHacking />} />
            <Route path="/learning/cybersecurity/rules-of-engagement" element={<CybersecurityEthicalHacking />} />
            <Route path="/learning/cybersecurity/module-5" element={<CybersecurityEthicalHacking />} />
            <Route path="/learn/cybersecurity/ethical-hacking-methodology" element={<CybersecurityEthicalHacking />} />
            <Route path="/learn/cybersecurity/rules-of-engagement" element={<CybersecurityEthicalHacking />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 6: OSINT & PASSIVE RECONNAISSANCE */}
            <Route path="/learning/cybersecurity/osint-reconnaissance" element={<CybersecurityOSINT />} />
            <Route path="/learning/cybersecurity/osint" element={<CybersecurityOSINT />} />
            <Route path="/learning/cybersecurity/passive-recon" element={<CybersecurityOSINT />} />
            <Route path="/learning/cybersecurity/module-6" element={<CybersecurityOSINT />} />
            <Route path="/learn/cybersecurity/osint-reconnaissance" element={<CybersecurityOSINT />} />
            <Route path="/learn/cybersecurity/osint" element={<CybersecurityOSINT />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 7: NETWORK DISCOVERY & PORT SCANNING */}
            <Route path="/learning/cybersecurity/network-discovery" element={<CybersecurityNetworkDiscovery />} />
            <Route path="/learning/cybersecurity/port-scanning" element={<CybersecurityNetworkDiscovery />} />
            <Route path="/learning/cybersecurity/service-enumeration" element={<CybersecurityNetworkDiscovery />} />
            <Route path="/learning/cybersecurity/module-7" element={<CybersecurityNetworkDiscovery />} />
            <Route path="/learn/cybersecurity/network-discovery" element={<CybersecurityNetworkDiscovery />} />
            <Route path="/learn/cybersecurity/port-scanning" element={<CybersecurityNetworkDiscovery />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 8: VULNERABILITY ASSESSMENT & CVSS */}
            <Route path="/learning/cybersecurity/vulnerability-assessment" element={<CybersecurityVulnerabilityAssessment />} />
            <Route path="/learning/cybersecurity/cve-cvss" element={<CybersecurityVulnerabilityAssessment />} />
            <Route path="/learning/cybersecurity/security-prioritization" element={<CybersecurityVulnerabilityAssessment />} />
            <Route path="/learning/cybersecurity/module-8" element={<CybersecurityVulnerabilityAssessment />} />
            <Route path="/learn/cybersecurity/vulnerability-assessment" element={<CybersecurityVulnerabilityAssessment />} />
            <Route path="/learn/cybersecurity/cve-cvss" element={<CybersecurityVulnerabilityAssessment />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 9: NETWORK SECURITY & FIREWALLS */}
            <Route path="/learning/cybersecurity/network-security" element={<CybersecurityNetworkSecurity />} />
            <Route path="/learning/cybersecurity/firewalls" element={<CybersecurityNetworkSecurity />} />
            <Route path="/learning/cybersecurity/ids-ips" element={<CybersecurityNetworkSecurity />} />
            <Route path="/learning/cybersecurity/segmentation" element={<CybersecurityNetworkSecurity />} />
            <Route path="/learning/cybersecurity/module-9" element={<CybersecurityNetworkSecurity />} />
            <Route path="/learn/cybersecurity/network-security" element={<CybersecurityNetworkSecurity />} />
            <Route path="/learn/cybersecurity/firewalls" element={<CybersecurityNetworkSecurity />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 10: OS HARDENING & PRIVILEGE MANAGEMENT */}
            <Route path="/learning/cybersecurity/os-hardening" element={<CybersecurityOSHardening />} />
            <Route path="/learning/cybersecurity/permissions" element={<CybersecurityOSHardening />} />
            <Route path="/learning/cybersecurity/privilege-management" element={<CybersecurityOSHardening />} />
            <Route path="/learning/cybersecurity/module-10" element={<CybersecurityOSHardening />} />
            <Route path="/learn/cybersecurity/os-hardening" element={<CybersecurityOSHardening />} />
            <Route path="/learn/cybersecurity/permissions" element={<CybersecurityOSHardening />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 11: IDENTITY & ACCESS MANAGEMENT, AUTHN, AUTHZ & MFA */}
            <Route path="/learning/cybersecurity/iam" element={<CybersecurityIAM />} />
            <Route path="/learning/cybersecurity/identity-access-management" element={<CybersecurityIAM />} />
            <Route path="/learning/cybersecurity/authentication" element={<CybersecurityIAM />} />
            <Route path="/learning/cybersecurity/authorization" element={<CybersecurityIAM />} />
            <Route path="/learning/cybersecurity/mfa" element={<CybersecurityIAM />} />
            <Route path="/learning/cybersecurity/module-11" element={<CybersecurityIAM />} />
            <Route path="/learn/cybersecurity/iam" element={<CybersecurityIAM />} />
            <Route path="/learn/cybersecurity/identity-access-management" element={<CybersecurityIAM />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 12: CRYPTOGRAPHY, ENCRYPTION, PKI & TLS */}
            <Route path="/learning/cybersecurity/cryptography" element={<CybersecurityCryptography />} />
            <Route path="/learning/cybersecurity/encryption" element={<CybersecurityCryptography />} />
            <Route path="/learning/cybersecurity/pki-tls" element={<CybersecurityCryptography />} />
            <Route path="/learning/cybersecurity/certificates" element={<CybersecurityCryptography />} />
            <Route path="/learning/cybersecurity/tls" element={<CybersecurityCryptography />} />
            <Route path="/learning/cybersecurity/module-12" element={<CybersecurityCryptography />} />
            <Route path="/learn/cybersecurity/cryptography" element={<CybersecurityCryptography />} />
            <Route path="/learn/cybersecurity/pki-tls" element={<CybersecurityCryptography />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 13: WEB APP ARCHITECTURE, SESSIONS & BROWSER SECURITY */}
            <Route path="/learning/cybersecurity/web-security" element={<CybersecurityWebSecurity />} />
            <Route path="/learning/cybersecurity/web-app-architecture" element={<CybersecurityWebSecurity />} />
            <Route path="/learning/cybersecurity/cookies-sessions" element={<CybersecurityWebSecurity />} />
            <Route path="/learning/cybersecurity/browser-security" element={<CybersecurityWebSecurity />} />
            <Route path="/learning/cybersecurity/cors-csp" element={<CybersecurityWebSecurity />} />
            <Route path="/learning/cybersecurity/module-13" element={<CybersecurityWebSecurity />} />
            <Route path="/learn/cybersecurity/web-security" element={<CybersecurityWebSecurity />} />
            <Route path="/learn/cybersecurity/cookies-sessions" element={<CybersecurityWebSecurity />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 14: OWASP TOP 10, INJECTION & SECURE INPUT */}
            <Route path="/learning/cybersecurity/injection" element={<CybersecurityInjection />} />
            <Route path="/learning/cybersecurity/owasp-top-10" element={<CybersecurityInjection />} />
            <Route path="/learning/cybersecurity/sqli" element={<CybersecurityInjection />} />
            <Route path="/learning/cybersecurity/xss" element={<CybersecurityInjection />} />
            <Route path="/learning/cybersecurity/command-injection" element={<CybersecurityInjection />} />
            <Route path="/learning/cybersecurity/nosqli" element={<CybersecurityInjection />} />
            <Route path="/learning/cybersecurity/module-14" element={<CybersecurityInjection />} />
            <Route path="/learn/cybersecurity/injection" element={<CybersecurityInjection />} />
            <Route path="/learn/cybersecurity/owasp-top-10" element={<CybersecurityInjection />} />

            {/* CYBERSECURITY MASTER COURSE — MODULE 15: AUTH FLAWS, ACCESS CONTROL, SESSIONS & API SECURITY */}
            <Route path="/learning/cybersecurity/auth-api-security" element={<CybersecurityAuthApiSecurity />} />
            <Route path="/learning/cybersecurity/api-security" element={<CybersecurityAuthApiSecurity />} />
            <Route path="/learning/cybersecurity/bola-idor" element={<CybersecurityAuthApiSecurity />} />
            <Route path="/learning/cybersecurity/access-control" element={<CybersecurityAuthApiSecurity />} />
            <Route path="/learning/cybersecurity/session-security" element={<CybersecurityAuthApiSecurity />} />
            <Route path="/learning/cybersecurity/module-15" element={<CybersecurityAuthApiSecurity />} />
            <Route path="/learn/cybersecurity/auth-api-security" element={<CybersecurityAuthApiSecurity />} />
            <Route path="/learn/cybersecurity/api-security" element={<CybersecurityAuthApiSecurity />} />

            {/* CYBERSECURITY MASTER COURSE - MODULE 16: SECURE CODE REVIEW, TESTING & REMEDIATION */}
            <Route path="/learning/cybersecurity/secure-code-review" element={<CybersecuritySecureCodeReview />} />
            <Route path="/learning/cybersecurity/code-review" element={<CybersecuritySecureCodeReview />} />
            <Route path="/learning/cybersecurity/sast-dast" element={<CybersecuritySecureCodeReview />} />
            <Route path="/learning/cybersecurity/remediation-validation" element={<CybersecuritySecureCodeReview />} />
            <Route path="/learning/cybersecurity/module-16" element={<CybersecuritySecureCodeReview />} />
            <Route path="/learn/cybersecurity/secure-code-review" element={<CybersecuritySecureCodeReview />} />
            <Route path="/learn/cybersecurity/code-review" element={<CybersecuritySecureCodeReview />} />

            {/* CYBERSECURITY MASTER COURSE - MODULE 17: WIRELESS SECURITY & WI-FI DEFENSE */}
            <Route path="/learning/cybersecurity/wireless-security" element={<CybersecurityWirelessSecurity />} />
            <Route path="/learning/cybersecurity/wifi-defense" element={<CybersecurityWirelessSecurity />} />
            <Route path="/learning/cybersecurity/wpa3-sae" element={<CybersecurityWirelessSecurity />} />
            <Route path="/learning/cybersecurity/wids-wips" element={<CybersecurityWirelessSecurity />} />
            <Route path="/learning/cybersecurity/module-17" element={<CybersecurityWirelessSecurity />} />
            <Route path="/learn/cybersecurity/wireless-security" element={<CybersecurityWirelessSecurity />} />
            <Route path="/learn/cybersecurity/wifi-defense" element={<CybersecurityWirelessSecurity />} />

            {/* CYBERSECURITY MASTER COURSE - MODULE 18: CLOUD SECURITY, CONTAINERS & IAM */}
            <Route path="/learning/cybersecurity/cloud-security" element={<CybersecurityCloudContainerSecurity />} />
            <Route path="/learning/cybersecurity/container-security" element={<CybersecurityCloudContainerSecurity />} />
            <Route path="/learning/cybersecurity/kubernetes-security" element={<CybersecurityCloudContainerSecurity />} />
            <Route path="/learning/cybersecurity/cloud-iam" element={<CybersecurityCloudContainerSecurity />} />
            <Route path="/learning/cybersecurity/cspm" element={<CybersecurityCloudContainerSecurity />} />
            <Route path="/learning/cybersecurity/module-18" element={<CybersecurityCloudContainerSecurity />} />
            <Route path="/learn/cybersecurity/cloud-security" element={<CybersecurityCloudContainerSecurity />} />
            <Route path="/learn/cybersecurity/container-security" element={<CybersecurityCloudContainerSecurity />} />

            {/* CYBERSECURITY MASTER COURSE - MODULE 19: MALWARE ANALYSIS, RANSOMWARE DEFENSE & CTI */}
            <Route path="/learning/cybersecurity/malware-analysis" element={<CybersecurityMalwareThreatIntel />} />
            <Route path="/learning/cybersecurity/ransomware-defense" element={<CybersecurityMalwareThreatIntel />} />
            <Route path="/learning/cybersecurity/threat-intelligence" element={<CybersecurityMalwareThreatIntel />} />
            <Route path="/learning/cybersecurity/cti" element={<CybersecurityMalwareThreatIntel />} />
            <Route path="/learning/cybersecurity/module-19" element={<CybersecurityMalwareThreatIntel />} />
            <Route path="/learn/cybersecurity/malware-analysis" element={<CybersecurityMalwareThreatIntel />} />
            <Route path="/learn/cybersecurity/ransomware-defense" element={<CybersecurityMalwareThreatIntel />} />
            <Route path="/learn/cybersecurity/threat-intelligence" element={<CybersecurityMalwareThreatIntel />} />

            {/* CYBERSECURITY MASTER COURSE - MODULE 20: SIEM, INCIDENT RESPONSE & DIGITAL FORENSICS */}
            <Route path="/learning/cybersecurity/siem-incident-response" element={<CybersecuritySIEMIncidentResponse />} />
            <Route path="/learning/cybersecurity/security-monitoring" element={<CybersecuritySIEMIncidentResponse />} />
            <Route path="/learning/cybersecurity/soc-operations" element={<CybersecuritySIEMIncidentResponse />} />
            <Route path="/learning/cybersecurity/incident-response" element={<CybersecuritySIEMIncidentResponse />} />
            <Route path="/learning/cybersecurity/digital-forensics" element={<CybersecuritySIEMIncidentResponse />} />
            <Route path="/learning/cybersecurity/module-20" element={<CybersecuritySIEMIncidentResponse />} />
            <Route path="/learn/cybersecurity/siem-incident-response" element={<CybersecuritySIEMIncidentResponse />} />
            <Route path="/learn/cybersecurity/security-monitoring" element={<CybersecuritySIEMIncidentResponse />} />
            <Route path="/learn/cybersecurity/digital-forensics" element={<CybersecuritySIEMIncidentResponse />} />

            {/* CYBERSECURITY MASTER COURSE - MODULE 21: PENTEST PLANNING, SCOPE & EVIDENCE */}
            <Route path="/learning/cybersecurity/pentest-methodology" element={<CybersecurityPentestMethodology />} />
            <Route path="/learning/cybersecurity/penetration-testing" element={<CybersecurityPentestMethodology />} />
            <Route path="/learning/cybersecurity/evidence-collection" element={<CybersecurityPentestMethodology />} />
            <Route path="/learning/cybersecurity/rules-of-engagement" element={<CybersecurityPentestMethodology />} />
            <Route path="/learning/cybersecurity/module-21" element={<CybersecurityPentestMethodology />} />
            <Route path="/learn/cybersecurity/pentest-methodology" element={<CybersecurityPentestMethodology />} />
            <Route path="/learn/cybersecurity/penetration-testing" element={<CybersecurityPentestMethodology />} />

            {/* CYBERSECURITY MASTER COURSE - MODULE 22: RED TEAM, BLUE TEAM & PURPLE TEAM OPERATIONS */}
            <Route path="/learning/cybersecurity/red-blue-purple-teams" element={<CybersecurityRedBluePurpleOps />} />
            <Route path="/learning/cybersecurity/red-teaming" element={<CybersecurityRedBluePurpleOps />} />
            <Route path="/learning/cybersecurity/blue-teaming" element={<CybersecurityRedBluePurpleOps />} />
            <Route path="/learning/cybersecurity/purple-teaming" element={<CybersecurityRedBluePurpleOps />} />
            <Route path="/learning/cybersecurity/detection-engineering" element={<CybersecurityRedBluePurpleOps />} />
            <Route path="/learning/cybersecurity/module-22" element={<CybersecurityRedBluePurpleOps />} />
            <Route path="/learn/cybersecurity/red-blue-purple-teams" element={<CybersecurityRedBluePurpleOps />} />
            <Route path="/learn/cybersecurity/purple-teaming" element={<CybersecurityRedBluePurpleOps />} />

            {/* CYBERSECURITY MASTER COURSE - MODULE 23: PROFESSIONAL PENTEST REPORTS, RISK & RETESTING */}
            <Route path="/learning/cybersecurity/pentest-reporting-remediation" element={<CybersecurityPentestReportingRemediation />} />
            <Route path="/learning/cybersecurity/pentest-reporting" element={<CybersecurityPentestReportingRemediation />} />
            <Route path="/learning/cybersecurity/risk-ratings-remediation" element={<CybersecurityPentestReportingRemediation />} />
            <Route path="/learning/cybersecurity/remediation-retesting" element={<CybersecurityPentestReportingRemediation />} />
            <Route path="/learning/cybersecurity/cvss-v4" element={<CybersecurityPentestReportingRemediation />} />
            <Route path="/learning/cybersecurity/module-23" element={<CybersecurityPentestReportingRemediation />} />
            <Route path="/learn/cybersecurity/pentest-reporting-remediation" element={<CybersecurityPentestReportingRemediation />} />
            <Route path="/learn/cybersecurity/pentest-reporting" element={<CybersecurityPentestReportingRemediation />} />

            {/* CYBERSECURITY MASTER COURSE - MODULE 24: FINAL CAPSTONE (ASSESS, SECURE & DEFEND) */}
            <Route path="/learning/cybersecurity/capstone" element={<CybersecurityCapstone />} />
            <Route path="/learning/cybersecurity/final-capstone" element={<CybersecurityCapstone />} />
            <Route path="/learning/cybersecurity/lab-defense" element={<CybersecurityCapstone />} />
            <Route path="/learning/cybersecurity/module-24" element={<CybersecurityCapstone />} />
            <Route path="/learn/cybersecurity/capstone" element={<CybersecurityCapstone />} />
            <Route path="/learn/cybersecurity/final-capstone" element={<CybersecurityCapstone />} />

            {/* SYSTEM DESIGN COURSE & SEO ALIAS */}
            <Route path="/learn/system-design" element={<SystemDesignIntro />} />
            <Route path="/learning/system-design" element={<SystemDesignIntro />} />
            <Route path="/learning/system-design/intro" element={<SystemDesignIntro />} />
            <Route path="/learning/system-design/architectural-thinking" element={<SystemDesignIntro />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 2: REQUIREMENTS & CAPACITY ESTIMATION */}
            <Route path="/learning/system-design/requirements" element={<SystemDesignRequirements />} />
            <Route path="/learning/system-design/capacity" element={<SystemDesignRequirements />} />
            <Route path="/learning/system-design/module-2" element={<SystemDesignRequirements />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 3: APIS, PROTOCOLS & NETWORKING */}
            <Route path="/learning/system-design/networking" element={<SystemDesignNetworking />} />
            <Route path="/learning/system-design/apis" element={<SystemDesignNetworking />} />
            <Route path="/learning/system-design/module-3" element={<SystemDesignNetworking />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 4: MONOLITHS & MICROSERVICES */}
            <Route path="/learning/system-design/architecture" element={<SystemDesignArchitecture />} />
            <Route path="/learning/system-design/microservices" element={<SystemDesignArchitecture />} />
            <Route path="/learning/system-design/modular-monolith" element={<SystemDesignArchitecture />} />
            <Route path="/learning/system-design/module-4" element={<SystemDesignArchitecture />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 5: RELATIONAL DATABASES, NOSQL & INDEXING */}
            <Route path="/learning/system-design/databases" element={<SystemDesignDatabases />} />
            <Route path="/learning/system-design/indexing" element={<SystemDesignDatabases />} />
            <Route path="/learning/system-design/sql" element={<SystemDesignDatabases />} />
            <Route path="/learning/system-design/module-5" element={<SystemDesignDatabases />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 6: CACHING STRATEGIES, EVICTION & CONSISTENCY */}
            <Route path="/learning/system-design/caching" element={<SystemDesignCaching />} />
            <Route path="/learning/system-design/redis" element={<SystemDesignCaching />} />
            <Route path="/learning/system-design/cdn" element={<SystemDesignCaching />} />
            <Route path="/learning/system-design/module-6" element={<SystemDesignCaching />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 7: REPLICATION, PARTITIONING & SHARDING */}
            <Route path="/learning/system-design/replication" element={<SystemDesignReplication />} />
            <Route path="/learning/system-design/sharding" element={<SystemDesignReplication />} />
            <Route path="/learning/system-design/partitioning" element={<SystemDesignReplication />} />
            <Route path="/learning/system-design/module-7" element={<SystemDesignReplication />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 9: DISTRIBUTED SYSTEMS, CLOCKS & TIMEOUTS */}
            <Route path="/learning/system-design/distributed-systems" element={<SystemDesignDistributedSystems />} />
            <Route path="/learning/system-design/clocks" element={<SystemDesignDistributedSystems />} />
            <Route path="/learning/system-design/timeouts" element={<SystemDesignDistributedSystems />} />
            <Route path="/learning/system-design/module-9" element={<SystemDesignDistributedSystems />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 10: CONSISTENCY MODELS, REPLICATION & QUORUMS */}
            <Route path="/learning/system-design/consistency" element={<SystemDesignConsistency />} />
            <Route path="/learning/system-design/quorums" element={<SystemDesignConsistency />} />
            <Route path="/learning/system-design/linearizability" element={<SystemDesignConsistency />} />
            <Route path="/learning/system-design/module-10" element={<SystemDesignConsistency />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 11: CONSENSUS, LEADER ELECTION & COORDINATION */}
            <Route path="/learning/system-design/consensus" element={<SystemDesignConsensus />} />
            <Route path="/learning/system-design/leader-election" element={<SystemDesignConsensus />} />
            <Route path="/learning/system-design/raft" element={<SystemDesignConsensus />} />
            <Route path="/learning/system-design/module-11" element={<SystemDesignConsensus />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 12: MESSAGE QUEUES, EDA & STREAMING */}
            <Route path="/learning/system-design/messaging" element={<SystemDesignMessaging />} />
            <Route path="/learning/system-design/event-driven" element={<SystemDesignMessaging />} />
            <Route path="/learning/system-design/kafka" element={<SystemDesignMessaging />} />
            <Route path="/learning/system-design/module-12" element={<SystemDesignMessaging />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 13: TRANSACTIONS, SAGAS & IDEMPOTENCY */}
            <Route path="/learning/system-design/transactions" element={<SystemDesignTransactions />} />
            <Route path="/learning/system-design/sagas" element={<SystemDesignTransactions />} />
            <Route path="/learning/system-design/idempotency" element={<SystemDesignTransactions />} />
            <Route path="/learning/system-design/module-13" element={<SystemDesignTransactions />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 14: LOAD BALANCING, RATE LIMITING & TRAFFIC */}
            <Route path="/learning/system-design/traffic" element={<SystemDesignTraffic />} />
            <Route path="/learning/system-design/load-balancing" element={<SystemDesignTraffic />} />
            <Route path="/learning/system-design/rate-limiting" element={<SystemDesignTraffic />} />
            <Route path="/learning/system-design/backpressure" element={<SystemDesignTraffic />} />
            <Route path="/learning/system-design/module-14" element={<SystemDesignTraffic />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 15: SCALABILITY & PERFORMANCE MODELING */}
            <Route path="/learning/system-design/scalability" element={<SystemDesignScalability />} />
            <Route path="/learning/system-design/performance" element={<SystemDesignScalability />} />
            <Route path="/learning/system-design/bottlenecks" element={<SystemDesignScalability />} />
            <Route path="/learning/system-design/capacity-planning" element={<SystemDesignScalability />} />
            <Route path="/learning/system-design/module-15" element={<SystemDesignScalability />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 16: MULTI-REGION & DISASTER RECOVERY */}
            <Route path="/learning/system-design/multi-region" element={<SystemDesignMultiRegion />} />
            <Route path="/learning/system-design/disaster-recovery" element={<SystemDesignMultiRegion />} />
            <Route path="/learning/system-design/replication-dr" element={<SystemDesignMultiRegion />} />
            <Route path="/learning/system-design/rto-rpo" element={<SystemDesignMultiRegion />} />
            <Route path="/learning/system-design/module-16" element={<SystemDesignMultiRegion />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 17: RELIABILITY, OBSERVABILITY & RESILIENCE */}
            <Route path="/learning/system-design/reliability" element={<SystemDesignReliability />} />
            <Route path="/learning/system-design/observability" element={<SystemDesignReliability />} />
            <Route path="/learning/system-design/resilience" element={<SystemDesignReliability />} />
            <Route path="/learning/system-design/graceful-degradation" element={<SystemDesignReliability />} />
            <Route path="/learning/system-design/module-17" element={<SystemDesignReliability />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 18: SECURITY & MULTI-TENANT ARCHITECTURE */}
            <Route path="/learning/system-design/security" element={<SystemDesignSecurity />} />
            <Route path="/learning/system-design/multi-tenancy" element={<SystemDesignSecurity />} />
            <Route path="/learning/system-design/authorization" element={<SystemDesignSecurity />} />
            <Route path="/learning/system-design/identity" element={<SystemDesignSecurity />} />
            <Route path="/learning/system-design/module-18" element={<SystemDesignSecurity />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 19: REAL-TIME SYSTEMS, WEBSOCKETS & PRESENCE */}
            <Route path="/learning/system-design/realtime" element={<SystemDesignRealtime />} />
            <Route path="/learning/system-design/websockets" element={<SystemDesignRealtime />} />
            <Route path="/learning/system-design/presence" element={<SystemDesignRealtime />} />
            <Route path="/learning/system-design/notifications" element={<SystemDesignRealtime />} />
            <Route path="/learning/system-design/module-19" element={<SystemDesignRealtime />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 20: SEARCH, FEEDS & RECOMMENDATIONS */}
            <Route path="/learning/system-design/search" element={<SystemDesignSearch />} />
            <Route path="/learning/system-design/feeds" element={<SystemDesignSearch />} />
            <Route path="/learning/system-design/recommendations" element={<SystemDesignSearch />} />
            <Route path="/learning/system-design/cdn" element={<SystemDesignSearch />} />
            <Route path="/learning/system-design/module-20" element={<SystemDesignSearch />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 21: AI SYSTEMS & INFERENCE SERVING */}
            <Route path="/learning/system-design/ai-systems" element={<SystemDesignAIServing />} />
            <Route path="/learning/system-design/inference" element={<SystemDesignAIServing />} />
            <Route path="/learning/system-design/rag" element={<SystemDesignAIServing />} />
            <Route path="/learning/system-design/vector-search" element={<SystemDesignAIServing />} />
            <Route path="/learning/system-design/module-21" element={<SystemDesignAIServing />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 22: CASE STUDIES */}
            <Route path="/learning/system-design/case-studies" element={<SystemDesignCaseStudies />} />
            <Route path="/learning/system-design/url-shortener" element={<SystemDesignCaseStudies />} />
            <Route path="/learning/system-design/chat-service" element={<SystemDesignCaseStudies />} />
            <Route path="/learning/system-design/notification-system" element={<SystemDesignCaseStudies />} />
            <Route path="/learning/system-design/social-feed" element={<SystemDesignCaseStudies />} />
            <Route path="/learning/system-design/module-22" element={<SystemDesignCaseStudies />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 23: ADVANCED CASE STUDIES */}
            <Route path="/learning/system-design/advanced-case-studies" element={<SystemDesignAdvancedCaseStudies />} />
            <Route path="/learning/system-design/video-platform" element={<SystemDesignAdvancedCaseStudies />} />
            <Route path="/learning/system-design/ride-hailing" element={<SystemDesignAdvancedCaseStudies />} />
            <Route path="/learning/system-design/payment-platform" element={<SystemDesignAdvancedCaseStudies />} />
            <Route path="/learning/system-design/ai-service" element={<SystemDesignAdvancedCaseStudies />} />
            <Route path="/learning/system-design/module-23" element={<SystemDesignAdvancedCaseStudies />} />

            {/* SYSTEM DESIGN MASTERCLASS - MODULE 24: FINAL CAPSTONE */}
            <Route path="/learning/system-design/capstone" element={<SystemDesignCapstone />} />
            <Route path="/learning/system-design/final-capstone" element={<SystemDesignCapstone />} />
            <Route path="/learning/system-design/module-24" element={<SystemDesignCapstone />} />

            {/* CLOUD COMPUTING COURSE - MODULE 1: FOUNDATIONS & SEO ALIAS */}
            <Route path="/learn/cloud-computing" element={<CloudComputing />} />
            <Route path="/learning/cloud" element={<CloudComputing />} />

            {/* CLOUD COMPUTING COURSE - MODULE 2: NETWORKING */}
            <Route path="/learning/cloud/networking" element={<CloudNetworking />} />

            {/* CLOUD COMPUTING COURSE - MODULE 3: COMPUTE */}
            <Route path="/learning/cloud/compute" element={<CloudCompute />} />

            {/* CLOUD COMPUTING COURSE - MODULE 4: STORAGE */}
            <Route path="/learning/cloud/storage" element={<CloudStorage />} />

            {/* CLOUD COMPUTING COURSE - MODULE 5: DATABASES */}
            <Route path="/learning/cloud/databases" element={<CloudDatabases />} />

            {/* CLOUD COMPUTING COURSE - MODULE 6: ARCHITECTURE */}
            <Route path="/learning/cloud/architecture" element={<CloudArchitecture />} />

            {/* CLOUD COMPUTING COURSE - MODULE 7: DEEP AWS ENGINEERING */}
            <Route path="/learning/cloud/aws" element={<CloudAWS />} />

            {/* CLOUD COMPUTING COURSE - MODULE 8: AZURE ARCHITECTURE */}
            <Route path="/learning/cloud/azure" element={<CloudAzure />} />

            {/* CLOUD COMPUTING COURSE - MODULE 9: GOOGLE CLOUD ARCHITECTURE */}
            <Route path="/learning/cloud/gcp" element={<CloudGCP />} />

            {/* CLOUD COMPUTING COURSE - MODULE 10: MULTI-CLOUD ARCHITECTURE */}
            <Route path="/learning/cloud/multicloud" element={<CloudMultiCloud />} />

            {/* CLOUD COMPUTING COURSE - MODULE 11: CLOUD SECURITY ARCHITECTURE */}
            <Route path="/learning/cloud/security" element={<CloudSecurity />} />

            {/* CLOUD COMPUTING COURSE - MODULE 12: CLOUD ECONOMICS & FINOPS */}
            <Route path="/learning/cloud/economics" element={<CloudEconomics />} />

            {/* CLOUD COMPUTING COURSE - MODULE 13: ADVANCED CLOUD SYSTEMS */}
            <Route path="/learning/cloud/advanced" element={<CloudAdvanced />} />

            {/* DEVOPS & SRE TRACK - MODULE 1: LINUX FOR DEVOPS & SEO ALIAS */}
            <Route path="/learn/devops" element={<DevOpsLinux />} />
            <Route path="/learning/devops/linux" element={<DevOpsLinux />} />
            <Route path="/learning/devops" element={<DevOpsLinux />} />

            {/* DEVOPS & SRE TRACK - MODULE 2: GIT & ENGINEERING WORKFLOW */}
            <Route path="/learning/devops/git" element={<DevOpsGit />} />

            {/* DEVOPS & SRE TRACK - MODULE 3: DOCKER & CONTAINER SYSTEMS */}
            <Route path="/learning/devops/docker" element={<DevOpsDocker />} />

            {/* DEVOPS & SRE TRACK - MODULE 4: KUBERNETES & DISTRIBUTED SYSTEMS */}
            <Route path="/learning/devops/k8s" element={<DevOpsK8s />} />
            <Route path="/learning/devops/kubernetes" element={<DevOpsK8s />} />

            {/* DEVOPS & SRE TRACK - MODULE 5: INFRASTRUCTURE AS CODE (TERRAFORM) */}
            <Route path="/learning/devops/iac" element={<DevOpsIaC />} />
            <Route path="/learning/devops/terraform" element={<DevOpsIaC />} />

            {/* DEVOPS & SRE TRACK - MODULE 6: CI/CD & GITOPS */}
            <Route path="/learning/devops/cicd" element={<DevOpsCICD />} />
            <Route path="/learning/devops/gitops" element={<DevOpsCICD />} />

            {/* DEVOPS & SRE TRACK - MODULE 7: DEPLOYMENT STRATEGIES */}
            <Route path="/learning/devops/deployment" element={<DevOpsDeployment />} />
            <Route path="/learning/devops/strategies" element={<DevOpsDeployment />} />

            {/* DEVOPS & SRE TRACK - MODULE 9: SITE RELIABILITY ENGINEERING (SRE) */}
            <Route path="/learning/devops/sre" element={<DevOpsSRE />} />

            {/* DEVOPS & SRE TRACK - MODULE 10: PRODUCTION RELIABILITY */}
            <Route path="/learning/devops/reliability" element={<DevOpsReliability />} />
            <Route path="/learning/devops/resilience" element={<DevOpsReliability />} />
            <Route path="/learning/devops/production-reliability" element={<DevOpsReliability />} />

            {/* DEVOPS & SRE TRACK - MODULE 11: DEVSECOPS & SUPPLY CHAIN SECURITY */}
            <Route path="/learning/devops/devsecops" element={<DevOpsSecOps />} />
            <Route path="/learning/devops/security" element={<DevOpsSecOps />} />
            <Route path="/learning/devops/supply-chain" element={<DevOpsSecOps />} />

            {/* DEVOPS & SRE TRACK - MODULE 12: PLATFORM ENGINEERING & IDP */}
            <Route path="/learning/devops/platform" element={<DevOpsPlatform />} />
            <Route path="/learning/devops/platform-engineering" element={<DevOpsPlatform />} />
            <Route path="/learning/devops/idp" element={<DevOpsPlatform />} />

            {/* DEVOPS & SRE TRACK - MODULE 13: CAPSTONE SRE / DEVOPS PLATFORM */}
            <Route path="/learning/devops/capstone" element={<DevOpsCapstone />} />
            <Route path="/learning/devops/project" element={<DevOpsCapstone />} />
            <Route path="/learning/devops/final" element={<DevOpsCapstone />} />

            {/* INTERVIEW PAGE */}
            <Route path="/interview" element={<InterviewRoom />} />

            {/* NOT FOUND ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {SHOW_NOVA_AI && <VoiceAssistant />}
        </NovaProvider>
      </VoiceProvider>
    </NavigationProvider>
  </AppErrorBoundary>
</BrowserRouter>
  );
}

export default App;
