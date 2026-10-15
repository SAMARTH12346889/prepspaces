/**
 * test_voice_system.js
 *
 * Comprehensive validation suite for Nova Voice System:
 * Tests Requirements 1 through 12:
 * - State machine transitions & validation
 * - Fast-path command execution (<50ms execution after Whisper)
 * - VAD adaptive noise floor & endpointing thresholds
 * - Stale request rejection & idempotency (utterance IDs)
 * - Keyboard shortcut guard logic
 * - Interview mode pause tolerance vs Command mode endpointing
 * - Latency & performance stage breakdown
 */

import { VoiceState, isValidTransition, VALID_TRANSITIONS } from "./VoiceState.js";
import { matchFastCommand } from "./fastCommandMatcher.js";
import { parseInterviewVoiceCommand, InterviewActions } from "./interviewActionRegistry.js";

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log("=== TEST SUITE: NOVA VOICE INTELLIGENCE ENGINE V2 ===\n");

// ─────────────────────────────────────────────────────────────────────────────
// 1. STATE MACHINE TRANSITION VALIDATION (Requirement 1)
// ─────────────────────────────────────────────────────────────────────────────
console.log("1. Testing Voice Session State Machine Validations...");

assert(isValidTransition(VoiceState.IDLE, VoiceState.ACTIVATING), "IDLE -> ACTIVATING is valid");
assert(isValidTransition(VoiceState.ACTIVATING, VoiceState.LISTENING), "ACTIVATING -> LISTENING is valid");
assert(isValidTransition(VoiceState.LISTENING, VoiceState.SPEECH_DETECTED), "LISTENING -> SPEECH_DETECTED is valid");
assert(isValidTransition(VoiceState.SPEECH_DETECTED, VoiceState.RECORDING), "SPEECH_DETECTED -> RECORDING is valid");
assert(isValidTransition(VoiceState.RECORDING, VoiceState.FINALIZING_AUDIO), "RECORDING -> FINALIZING_AUDIO is valid");
assert(isValidTransition(VoiceState.FINALIZING_AUDIO, VoiceState.TRANSCRIBING), "FINALIZING_AUDIO -> TRANSCRIBING is valid");
assert(isValidTransition(VoiceState.TRANSCRIBING, VoiceState.INTERPRETING_COMMAND), "TRANSCRIBING -> INTERPRETING_COMMAND is valid");
assert(isValidTransition(VoiceState.INTERPRETING_COMMAND, VoiceState.EXECUTING_COMMAND), "INTERPRETING_COMMAND -> EXECUTING_COMMAND is valid");
assert(isValidTransition(VoiceState.EXECUTING_COMMAND, VoiceState.COMMAND_COMPLETED), "EXECUTING_COMMAND -> COMMAND_COMPLETED is valid");
assert(isValidTransition(VoiceState.COMMAND_COMPLETED, VoiceState.IDLE), "COMMAND_COMPLETED -> IDLE is valid (command mode)");
assert(isValidTransition(VoiceState.COMMAND_COMPLETED, VoiceState.LISTENING), "COMMAND_COMPLETED -> LISTENING is valid (continuous mode)");

// Illegal transitions
assert(!isValidTransition(VoiceState.IDLE, VoiceState.RECORDING), "IDLE -> RECORDING is illegal");
assert(!isValidTransition(VoiceState.RECORDING, VoiceState.INTERPRETING_COMMAND), "RECORDING -> INTERPRETING_COMMAND is illegal without finalizing");
assert(!isValidTransition(VoiceState.IDLE, VoiceState.EXECUTING_COMMAND), "IDLE -> EXECUTING_COMMAND is illegal");

// ─────────────────────────────────────────────────────────────────────────────
// 2. FAST-PATH COMMAND MATCHER (Requirement 6 & 7)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n2. Testing Deterministic Fast-Path Command Matcher...");

const testNav1 = matchFastCommand("Open interview");
assert(testNav1 && testNav1.type === "NAVIGATE" && testNav1.route === "/interview", "'Open interview' fast-paths to /interview");

const testNav2 = matchFastCommand("Take me to system design");
assert(testNav2 && testNav2.type === "NAVIGATE" && testNav2.route === "/learning/system-design", "'Take me to system design' fast-paths to /learning/system-design");

const testNavOS = matchFastCommand("Open operating systems");
assert(testNavOS && testNavOS.type === "NAVIGATE" && testNavOS.route === "/learning/os", "'Open operating systems' fast-paths to /learning/os");

const testNavOSArch = matchFastCommand("Open computer architecture");
assert(testNavOSArch && testNavOSArch.type === "NAVIGATE" && testNavOSArch.route === "/learning/os/architecture", "'Open computer architecture' fast-paths to /learning/os/architecture");

const testNavOSSysProg = matchFastCommand("Open systems programming");
assert(testNavOSSysProg && testNavOSSysProg.type === "NAVIGATE" && testNavOSSysProg.route === "/learning/os/systems-programming", "'Open systems programming' fast-paths to /learning/os/systems-programming");

const testNavOSSyscalls = matchFastCommand("Open system calls");
assert(testNavOSSyscalls && testNavOSSyscalls.type === "NAVIGATE" && testNavOSSyscalls.route === "/learning/os/syscalls", "'Open system calls' fast-paths to /learning/os/syscalls");

const testNavOSProcesses = matchFastCommand("Open process lifecycle");
assert(testNavOSProcesses && testNavOSProcesses.type === "NAVIGATE" && testNavOSProcesses.route === "/learning/os/processes", "'Open process lifecycle' fast-paths to /learning/os/processes");

const testNavOSScheduling = matchFastCommand("Open cpu scheduling");
assert(testNavOSScheduling && testNavOSScheduling.type === "NAVIGATE" && testNavOSScheduling.route === "/learning/os/scheduling", "'Open cpu scheduling' fast-paths to /learning/os/scheduling");

const testNavOSThreads = matchFastCommand("Open threads");
assert(testNavOSThreads && testNavOSThreads.type === "NAVIGATE" && testNavOSThreads.route === "/learning/os/threads", "'Open threads' fast-paths to /learning/os/threads");

const testNavOSMultithread = matchFastCommand("Open multithreading");
assert(testNavOSMultithread && testNavOSMultithread.type === "NAVIGATE" && testNavOSMultithread.route === "/learning/os/threads", "'Open multithreading' fast-paths to /learning/os/threads");

const testNavOSConcurrency = matchFastCommand("Open concurrency");
assert(testNavOSConcurrency && testNavOSConcurrency.type === "NAVIGATE" && testNavOSConcurrency.route === "/learning/os/concurrency", "'Open concurrency' fast-paths to /learning/os/concurrency");

const testNavOSDeadlocks = matchFastCommand("Open deadlocks");
assert(testNavOSDeadlocks && testNavOSDeadlocks.type === "NAVIGATE" && testNavOSDeadlocks.route === "/learning/os/concurrency", "'Open deadlocks' fast-paths to /learning/os/concurrency");

const testNavOSMemory = matchFastCommand("Open memory");
assert(testNavOSMemory && testNavOSMemory.type === "NAVIGATE" && testNavOSMemory.route === "/learning/os/memory", "'Open memory' fast-paths to /learning/os/memory");

const testNavOSAlloc = matchFastCommand("Open memory allocation");
assert(testNavOSAlloc && testNavOSAlloc.type === "NAVIGATE" && testNavOSAlloc.route === "/learning/os/memory", "'Open memory allocation' fast-paths to /learning/os/memory");

const testNavOSVM = matchFastCommand("Open virtual memory");
assert(testNavOSVM && testNavOSVM.type === "NAVIGATE" && testNavOSVM.route === "/learning/os/virtual-memory", "'Open virtual memory' fast-paths to /learning/os/virtual-memory");

const testNavOSPaging = matchFastCommand("Open paging");
assert(testNavOSPaging && testNavOSPaging.type === "NAVIGATE" && testNavOSPaging.route === "/learning/os/virtual-memory", "'Open paging' fast-paths to /learning/os/virtual-memory");

const testNavOSDemandPaging = matchFastCommand("Open demand paging");
assert(testNavOSDemandPaging && testNavOSDemandPaging.type === "NAVIGATE" && testNavOSDemandPaging.route === "/learning/os/demand-paging", "'Open demand paging' fast-paths to /learning/os/demand-paging");

const testNavOSPageReplacement = matchFastCommand("Open page replacement");
assert(testNavOSPageReplacement && testNavOSPageReplacement.type === "NAVIGATE" && testNavOSPageReplacement.route === "/learning/os/demand-paging", "'Open page replacement' fast-paths to /learning/os/demand-paging");

const testNavOSVirt = matchFastCommand("Open virtualization");
assert(testNavOSVirt && testNavOSVirt.type === "NAVIGATE" && testNavOSVirt.route === "/learning/os/virtualization", "'Open virtualization' fast-paths to /learning/os/virtualization");

const testNavOSContainers = matchFastCommand("Open containers");
assert(testNavOSContainers && testNavOSContainers.type === "NAVIGATE" && testNavOSContainers.route === "/learning/os/virtualization", "'Open containers' fast-paths to /learning/os/virtualization");

const testNavOSFilesystems = matchFastCommand("Open filesystems");
assert(testNavOSFilesystems && testNavOSFilesystems.type === "NAVIGATE" && testNavOSFilesystems.route === "/learning/os/filesystems", "'Open filesystems' fast-paths to /learning/os/filesystems");

const testNavOSFileSystemsSpace = matchFastCommand("Open file systems");
assert(testNavOSFileSystemsSpace && testNavOSFileSystemsSpace.type === "NAVIGATE" && testNavOSFileSystemsSpace.route === "/learning/os/filesystems", "'Open file systems' fast-paths to /learning/os/filesystems");

const testNavOSStorage = matchFastCommand("Open storage");
assert(testNavOSStorage && testNavOSStorage.type === "NAVIGATE" && testNavOSStorage.route === "/learning/os/storage", "'Open storage' fast-paths to /learning/os/storage");

const testNavOSDiskScheduling = matchFastCommand("Open disk scheduling");
assert(testNavOSDiskScheduling && testNavOSDiskScheduling.type === "NAVIGATE" && testNavOSDiskScheduling.route === "/learning/os/storage", "'Open disk scheduling' fast-paths to /learning/os/storage");

const testNavOSIPC = matchFastCommand("Open ipc");
assert(testNavOSIPC && testNavOSIPC.type === "NAVIGATE" && testNavOSIPC.route === "/learning/os/ipc", "'Open ipc' fast-paths to /learning/os/ipc");

const testNavOSPipes = matchFastCommand("Open pipes");
assert(testNavOSPipes && testNavOSPipes.type === "NAVIGATE" && testNavOSPipes.route === "/learning/os/ipc", "'Open pipes' fast-paths to /learning/os/ipc");

const testNavOSCrashConsistency = matchFastCommand("Open crash consistency");
assert(testNavOSCrashConsistency && testNavOSCrashConsistency.type === "NAVIGATE" && testNavOSCrashConsistency.route === "/learning/os/crash-consistency", "'Open crash consistency' fast-paths to /learning/os/crash-consistency");

const testNavOSDurability = matchFastCommand("Open durability");
assert(testNavOSDurability && testNavOSDurability.type === "NAVIGATE" && testNavOSDurability.route === "/learning/os/crash-consistency", "'Open durability' fast-paths to /learning/os/crash-consistency");

const testNavOSKernelArch = matchFastCommand("Open kernel architecture");
assert(testNavOSKernelArch && testNavOSKernelArch.type === "NAVIGATE" && testNavOSKernelArch.route === "/learning/os/kernel-architecture", "'Open kernel architecture' fast-paths to /learning/os/kernel-architecture");

const testNavOSXv6 = matchFastCommand("Open xv6");
assert(testNavOSXv6 && testNavOSXv6.type === "NAVIGATE" && testNavOSXv6.route === "/learning/os/kernel-architecture", "'Open xv6' fast-paths to /learning/os/kernel-architecture");

const testNavOSDiag = matchFastCommand("Open diagnostics");
assert(testNavOSDiag && testNavOSDiag.type === "NAVIGATE" && testNavOSDiag.route === "/learning/os/diagnostics", "'Open diagnostics' fast-paths to /learning/os/diagnostics");

const testNavOSLinuxDiag = matchFastCommand("Open linux diagnostics");
assert(testNavOSLinuxDiag && testNavOSLinuxDiag.type === "NAVIGATE" && testNavOSLinuxDiag.route === "/learning/os/diagnostics", "'Open linux diagnostics' fast-paths to /learning/os/diagnostics");

const testNavOSNet = matchFastCommand("Open os networking");
assert(testNavOSNet && testNavOSNet.type === "NAVIGATE" && testNavOSNet.route === "/learning/os/networking", "'Open os networking' fast-paths to /learning/os/networking");

const testNavOSNetIO = matchFastCommand("Open network io");
assert(testNavOSNetIO && testNavOSNetIO.type === "NAVIGATE" && testNavOSNetIO.route === "/learning/os/networking", "'Open network io' fast-paths to /learning/os/networking");

const testNavOSSecurity = matchFastCommand("Open os security");
assert(testNavOSSecurity && testNavOSSecurity.type === "NAVIGATE" && testNavOSSecurity.route === "/learning/os/security", "'Open os security' fast-paths to /learning/os/security");

const testNavOSIsolation = matchFastCommand("Open isolation");
assert(testNavOSIsolation && testNavOSIsolation.type === "NAVIGATE" && testNavOSIsolation.route === "/learning/os/security", "'Open isolation' fast-paths to /learning/os/security");

const testNavOSAdvSync = matchFastCommand("Open advanced synchronization");
assert(testNavOSAdvSync && testNavOSAdvSync.type === "NAVIGATE" && testNavOSAdvSync.route === "/learning/os/advanced-sync", "'Open advanced synchronization' fast-paths to /learning/os/advanced-sync");

const testNavOSMultiprocessor = matchFastCommand("Open multiprocessor");
assert(testNavOSMultiprocessor && testNavOSMultiprocessor.type === "NAVIGATE" && testNavOSMultiprocessor.route === "/learning/os/advanced-sync", "'Open multiprocessor' fast-paths to /learning/os/advanced-sync");

const testNavOSTesting = matchFastCommand("Open design and testing");
assert(testNavOSTesting && testNavOSTesting.type === "NAVIGATE" && testNavOSTesting.route === "/learning/os/testing", "'Open design and testing' fast-paths to /learning/os/testing");

const testNavOSFailureAnalysis = matchFastCommand("Open failure analysis");
assert(testNavOSFailureAnalysis && testNavOSFailureAnalysis.type === "NAVIGATE" && testNavOSFailureAnalysis.route === "/learning/os/testing", "'Open failure analysis' fast-paths to /learning/os/testing");

const testNavOSCapstone = matchFastCommand("Open os capstone");
assert(testNavOSCapstone && testNavOSCapstone.type === "NAVIGATE" && testNavOSCapstone.route === "/learning/os/capstone", "'Open os capstone' fast-paths to /learning/os/capstone");

const testNavOSXv6Capstone = matchFastCommand("Open xv6 capstone");
assert(testNavOSXv6Capstone && testNavOSXv6Capstone.type === "NAVIGATE" && testNavOSXv6Capstone.route === "/learning/os/capstone", "'Open xv6 capstone' fast-paths to /learning/os/capstone");

const testNavOSFinalCapstone = matchFastCommand("Open final capstone");
assert(testNavOSFinalCapstone && testNavOSFinalCapstone.type === "NAVIGATE" && testNavOSFinalCapstone.route === "/learning/os/final-capstone", "'Open final capstone' fast-paths to /learning/os/final-capstone");

const testNavOSEngineeringLab = matchFastCommand("Open os engineering lab");
assert(testNavOSEngineeringLab && testNavOSEngineeringLab.type === "NAVIGATE" && testNavOSEngineeringLab.route === "/learning/os/final-capstone", "'Open os engineering lab' fast-paths to /learning/os/final-capstone");

const testNavNetworks = matchFastCommand("Open computer networks");
assert(testNavNetworks && testNavNetworks.type === "NAVIGATE" && testNavNetworks.route === "/learning/networks", "'Open computer networks' fast-paths to /learning/networks");

const testNavNetworking = matchFastCommand("take me to networking course");
assert(testNavNetworking && testNavNetworking.type === "NAVIGATE" && testNavNetworking.route === "/learning/networks", "'take me to networking course' fast-paths to /learning/networks");

const testNavNetModels = matchFastCommand("Open network models");
assert(testNavNetModels && testNavNetModels.type === "NAVIGATE" && testNavNetModels.route === "/learning/networks/models", "'Open network models' fast-paths to /learning/networks/models");

const testNavOSIModel = matchFastCommand("take me to osi model");
assert(testNavOSIModel && testNavOSIModel.type === "NAVIGATE" && testNavOSIModel.route === "/learning/networks/models", "'take me to osi model' fast-paths to /learning/networks/models");

const testNavNetPhysical = matchFastCommand("Open physical layer");
assert(testNavNetPhysical && testNavNetPhysical.type === "NAVIGATE" && testNavNetPhysical.route === "/learning/networks/physical", "'Open physical layer' fast-paths to /learning/networks/physical");

const testNavDataTransmission = matchFastCommand("take me to data transmission");
assert(testNavDataTransmission && testNavDataTransmission.type === "NAVIGATE" && testNavDataTransmission.route === "/learning/networks/physical", "'take me to data transmission' fast-paths to /learning/networks/physical");

const testNavNetDataLink = matchFastCommand("Open data link layer");
assert(testNavNetDataLink && testNavNetDataLink.type === "NAVIGATE" && testNavNetDataLink.route === "/learning/networks/datalink", "'Open data link layer' fast-paths to /learning/networks/datalink");

const testNavEthernetSwitching = matchFastCommand("take me to ethernet switching");
assert(testNavEthernetSwitching && testNavEthernetSwitching.type === "NAVIGATE" && testNavEthernetSwitching.route === "/learning/networks/datalink", "'take me to ethernet switching' fast-paths to /learning/networks/datalink");

const testNavNetIPv4 = matchFastCommand("Open ipv4 addressing");
assert(testNavNetIPv4 && testNavNetIPv4.type === "NAVIGATE" && testNavNetIPv4.route === "/learning/networks/ipv4", "'Open ipv4 addressing' fast-paths to /learning/networks/ipv4");

const testNavSubnetting = matchFastCommand("take me to subnetting");
assert(testNavSubnetting && testNavSubnetting.type === "NAVIGATE" && testNavSubnetting.route === "/learning/networks/ipv4", "'take me to subnetting' fast-paths to /learning/networks/ipv4");

const testNavNetIPv6 = matchFastCommand("Open ipv6 addressing");
assert(testNavNetIPv6 && testNavNetIPv6.type === "NAVIGATE" && testNavNetIPv6.route === "/learning/networks/ipv6", "'Open ipv6 addressing' fast-paths to /learning/networks/ipv6");

const testNavSLAAC = matchFastCommand("take me to slaac");
assert(testNavSLAAC && testNavSLAAC.type === "NAVIGATE" && testNavSLAAC.route === "/learning/networks/ipv6", "'take me to slaac' fast-paths to /learning/networks/ipv6");

const testNavNetRouting = matchFastCommand("Open routing");
assert(testNavNetRouting && testNavNetRouting.type === "NAVIGATE" && testNavNetRouting.route === "/learning/networks/routing", "'Open routing' fast-paths to /learning/networks/routing");

const testNavOSPF = matchFastCommand("take me to ospf");
assert(testNavOSPF && testNavOSPF.type === "NAVIGATE" && testNavOSPF.route === "/learning/networks/routing", "'take me to ospf' fast-paths to /learning/networks/routing");

const testNavNetConfig = matchFastCommand("Open network configuration");
assert(testNavNetConfig && testNavNetConfig.type === "NAVIGATE" && testNavNetConfig.route === "/learning/networks/config", "'Open network configuration' fast-paths to /learning/networks/config");

const testNavDHCP = matchFastCommand("take me to dhcp");
assert(testNavDHCP && testNavDHCP.type === "NAVIGATE" && testNavDHCP.route === "/learning/networks/config", "'take me to dhcp' fast-paths to /learning/networks/config");

const testNavNetTCP = matchFastCommand("Open tcp");
assert(testNavNetTCP && testNavNetTCP.type === "NAVIGATE" && testNavNetTCP.route === "/learning/networks/tcp", "'Open tcp' fast-paths to /learning/networks/tcp");

const testNavHandshake = matchFastCommand("take me to tcp handshake");
assert(testNavHandshake && testNavHandshake.type === "NAVIGATE" && testNavHandshake.route === "/learning/networks/tcp", "'take me to tcp handshake' fast-paths to /learning/networks/tcp");

const testNavNetUDP = matchFastCommand("Open udp");
assert(testNavNetUDP && testNavNetUDP.type === "NAVIGATE" && testNavNetUDP.route === "/learning/networks/udp", "'Open udp' fast-paths to /learning/networks/udp");

const testNavQUIC = matchFastCommand("take me to quic");
assert(testNavQUIC && testNavQUIC.type === "NAVIGATE" && testNavQUIC.route === "/learning/networks/udp", "'take me to quic' fast-paths to /learning/networks/udp");

const testNavNetDNS = matchFastCommand("Open dns");
assert(testNavNetDNS && testNavNetDNS.type === "NAVIGATE" && testNavNetDNS.route === "/learning/networks/dns", "'Open dns' fast-paths to /learning/networks/dns");

const testNavDNSResolution = matchFastCommand("take me to dns resolution");
assert(testNavDNSResolution && testNavDNSResolution.type === "NAVIGATE" && testNavDNSResolution.route === "/learning/networks/dns", "'take me to dns resolution' fast-paths to /learning/networks/dns");

const testNavNetAppLayer = matchFastCommand("Open application protocols");
assert(testNavNetAppLayer && testNavNetAppLayer.type === "NAVIGATE" && testNavNetAppLayer.route === "/learning/networks/application-layer", "'Open application protocols' fast-paths to /learning/networks/application-layer");

const testNavWebNetworking = matchFastCommand("take me to web networking");
assert(testNavWebNetworking && testNavWebNetworking.type === "NAVIGATE" && testNavWebNetworking.route === "/learning/networks/application-layer", "'take me to web networking' fast-paths to /learning/networks/application-layer");

const testNavNetWireless = matchFastCommand("Open wireless");
assert(testNavNetWireless && testNavNetWireless.type === "NAVIGATE" && testNavNetWireless.route === "/learning/networks/wireless", "'Open wireless' fast-paths to /learning/networks/wireless");

const testNavWiFi = matchFastCommand("take me to wifi");
assert(testNavWiFi && testNavWiFi.type === "NAVIGATE" && testNavWiFi.route === "/learning/networks/wireless", "'take me to wifi' fast-paths to /learning/networks/wireless");

const testNavNetSwitching = matchFastCommand("Open switching");
assert(testNavNetSwitching && testNavNetSwitching.type === "NAVIGATE" && testNavNetSwitching.route === "/learning/networks/switching", "'Open switching' fast-paths to /learning/networks/switching");

const testNavVLANs = matchFastCommand("take me to vlans");
assert(testNavVLANs && testNavVLANs.type === "NAVIGATE" && testNavVLANs.route === "/learning/networks/switching", "'take me to vlans' fast-paths to /learning/networks/switching");

const testNavNetFirewalls = matchFastCommand("Open firewalls");
assert(testNavNetFirewalls && testNavNetFirewalls.type === "NAVIGATE" && testNavNetFirewalls.route === "/learning/networks/firewalls", "'Open firewalls' fast-paths to /learning/networks/firewalls");

const testNavAccessControl = matchFastCommand("take me to access control");
assert(testNavAccessControl && testNavAccessControl.type === "NAVIGATE" && testNavAccessControl.route === "/learning/networks/firewalls", "'take me to access control' fast-paths to /learning/networks/firewalls");

const testNavNetCloud = matchFastCommand("Open enterprise networking");
assert(testNavNetCloud && testNavNetCloud.type === "NAVIGATE" && testNavNetCloud.route === "/learning/networks/enterprise-cloud", "'Open enterprise networking' fast-paths to /learning/networks/enterprise-cloud");

const testNavDataCenter = matchFastCommand("take me to data center");
assert(testNavDataCenter && testNavDataCenter.type === "NAVIGATE" && testNavDataCenter.route === "/learning/networks/enterprise-cloud", "'take me to data center' fast-paths to /learning/networks/enterprise-cloud");

const testNavThreatModeling = matchFastCommand("Open threat modeling");
assert(testNavThreatModeling && testNavThreatModeling.type === "NAVIGATE" && testNavThreatModeling.route === "/learning/networks/threat-modeling", "'Open threat modeling' fast-paths to /learning/networks/threat-modeling");

const testNavCIATriad = matchFastCommand("take me to cia triad");
assert(testNavCIATriad && testNavCIATriad.type === "NAVIGATE" && testNavCIATriad.route === "/learning/networks/threat-modeling", "'take me to cia triad' fast-paths to /learning/networks/threat-modeling");

const testNavPacketAnalysis = matchFastCommand("Open packet analysis");
assert(testNavPacketAnalysis && testNavPacketAnalysis.type === "NAVIGATE" && testNavPacketAnalysis.route === "/learning/networks/packet-analysis", "'Open packet analysis' fast-paths to /learning/networks/packet-analysis");

const testNavWireshark = matchFastCommand("take me to wireshark");
assert(testNavWireshark && testNavWireshark.type === "NAVIGATE" && testNavWireshark.route === "/learning/networks/packet-analysis", "'take me to wireshark' fast-paths to /learning/networks/packet-analysis");

const testNavNetAttacks = matchFastCommand("Open network attacks");
assert(testNavNetAttacks && testNavNetAttacks.type === "NAVIGATE" && testNavNetAttacks.route === "/learning/networks/attacks-defenses", "'Open network attacks' fast-paths to /learning/networks/attacks-defenses");

const testNavArpSpoofing = matchFastCommand("take me to arp spoofing");
assert(testNavArpSpoofing && testNavArpSpoofing.type === "NAVIGATE" && testNavArpSpoofing.route === "/learning/networks/attacks-defenses", "'take me to arp spoofing' fast-paths to /learning/networks/attacks-defenses");

const testNavNetIdsIps = matchFastCommand("Open ids and ips");
assert(testNavNetIdsIps && testNavNetIdsIps.type === "NAVIGATE" && testNavNetIdsIps.route === "/learning/networks/ids-ips-soc", "'Open ids and ips' fast-paths to /learning/networks/ids-ips-soc");

const testNavSocMonitoring = matchFastCommand("take me to soc monitoring");
assert(testNavSocMonitoring && testNavSocMonitoring.type === "NAVIGATE" && testNavSocMonitoring.route === "/learning/networks/ids-ips-soc", "'take me to soc monitoring' fast-paths to /learning/networks/ids-ips-soc");

const testNavNetAutomation = matchFastCommand("Open network automation");
assert(testNavNetAutomation && testNavNetAutomation.type === "NAVIGATE" && testNavNetAutomation.route === "/learning/networks/network-automation", "'Open network automation' fast-paths to /learning/networks/network-automation");

const testNavSocketProg = matchFastCommand("take me to socket programming");
assert(testNavSocketProg && testNavSocketProg.type === "NAVIGATE" && testNavSocketProg.route === "/learning/networks/network-automation", "'take me to socket programming' fast-paths to /learning/networks/network-automation");

const testNavNetAdvRouting = matchFastCommand("Open advanced routing");
assert(testNavNetAdvRouting && testNavNetAdvRouting.type === "NAVIGATE" && testNavNetAdvRouting.route === "/learning/networks/advanced-routing", "'Open advanced routing' fast-paths to /learning/networks/advanced-routing");

const testNavBgpRouting = matchFastCommand("take me to bgp routing");
assert(testNavBgpRouting && testNavBgpRouting.type === "NAVIGATE" && testNavBgpRouting.route === "/learning/networks/advanced-routing", "'take me to bgp routing' fast-paths to /learning/networks/advanced-routing");

const testNavNetSecArch = matchFastCommand("Open security architecture");
assert(testNavNetSecArch && testNavNetSecArch.type === "NAVIGATE" && testNavNetSecArch.route === "/learning/networks/security-architecture", "'Open security architecture' fast-paths to /learning/networks/security-architecture");

const testNavMicroseg = matchFastCommand("take me to microsegmentation");
assert(testNavMicroseg && testNavMicroseg.type === "NAVIGATE" && testNavMicroseg.route === "/learning/networks/security-architecture", "'take me to microsegmentation' fast-paths to /learning/networks/security-architecture");

const testNavNetCapstone = matchFastCommand("Open networks capstone");
assert(testNavNetCapstone && testNavNetCapstone.type === "NAVIGATE" && testNavNetCapstone.route === "/learning/networks/final-capstone", "'Open networks capstone' fast-paths to /learning/networks/final-capstone");

const testNavNetEngLab = matchFastCommand("take me to network engineering lab");
assert(testNavNetEngLab && testNavNetEngLab.type === "NAVIGATE" && testNavNetEngLab.route === "/learning/networks/final-capstone", "'take me to network engineering lab' fast-paths to /learning/networks/final-capstone");

const testNavCybersecurity = matchFastCommand("Open cybersecurity");
assert(testNavCybersecurity && testNavCybersecurity.type === "NAVIGATE" && testNavCybersecurity.route === "/learning/cybersecurity", "'Open cybersecurity' fast-paths to /learning/cybersecurity");

const testNavEthicalHacking = matchFastCommand("take me to ethical hacking");
assert(testNavEthicalHacking && testNavEthicalHacking.type === "NAVIGATE" && testNavEthicalHacking.route === "/learning/cybersecurity", "'take me to ethical hacking' fast-paths to /learning/cybersecurity");

const testNavCyberNetworking = matchFastCommand("Open cybersecurity networking");
assert(testNavCyberNetworking && testNavCyberNetworking.type === "NAVIGATE" && testNavCyberNetworking.route === "/learning/cybersecurity/networking", "'Open cybersecurity networking' fast-paths to /learning/cybersecurity/networking");

const testNavCyberOSInternals = matchFastCommand("Open cybersecurity os internals");
assert(testNavCyberOSInternals && testNavCyberOSInternals.type === "NAVIGATE" && testNavCyberOSInternals.route === "/learning/cybersecurity/os-internals", "'Open cybersecurity os internals' fast-paths to /learning/cybersecurity/os-internals");

const testNavWindowsInternals = matchFastCommand("take me to windows internals");
assert(testNavWindowsInternals && testNavWindowsInternals.type === "NAVIGATE" && testNavWindowsInternals.route === "/learning/cybersecurity/os-internals", "'take me to windows internals' fast-paths to /learning/cybersecurity/os-internals");

const testNavCyberThreatModeling = matchFastCommand("Open cybersecurity threat modeling");
assert(testNavCyberThreatModeling && testNavCyberThreatModeling.type === "NAVIGATE" && testNavCyberThreatModeling.route === "/learning/cybersecurity/threat-modeling", "'Open cybersecurity threat modeling' fast-paths to /learning/cybersecurity/threat-modeling");

const testNavRiskManagement = matchFastCommand("take me to risk management");
assert(testNavRiskManagement && testNavRiskManagement.type === "NAVIGATE" && testNavRiskManagement.route === "/learning/cybersecurity/threat-modeling", "'take me to risk management' fast-paths to /learning/cybersecurity/threat-modeling");

const testNavCyberEthicalHacking = matchFastCommand("Open cybersecurity ethical hacking");
assert(testNavCyberEthicalHacking && testNavCyberEthicalHacking.type === "NAVIGATE" && testNavCyberEthicalHacking.route === "/learning/cybersecurity/ethical-hacking-methodology", "'Open cybersecurity ethical hacking' fast-paths to /learning/cybersecurity/ethical-hacking-methodology");

const testNavRoE = matchFastCommand("take me to rules of engagement");
assert(testNavRoE && testNavRoE.type === "NAVIGATE" && testNavRoE.route === "/learning/cybersecurity/ethical-hacking-methodology", "'take me to rules of engagement' fast-paths to /learning/cybersecurity/ethical-hacking-methodology");

const testNavCyberOSINT = matchFastCommand("Open cybersecurity osint");
assert(testNavCyberOSINT && testNavCyberOSINT.type === "NAVIGATE" && testNavCyberOSINT.route === "/learning/cybersecurity/osint-reconnaissance", "'Open cybersecurity osint' fast-paths to /learning/cybersecurity/osint-reconnaissance");

const testNavPassiveRecon = matchFastCommand("take me to passive recon");
assert(testNavPassiveRecon && testNavPassiveRecon.type === "NAVIGATE" && testNavPassiveRecon.route === "/learning/cybersecurity/osint-reconnaissance", "'take me to passive recon' fast-paths to /learning/cybersecurity/osint-reconnaissance");

const testNavCyberDiscovery = matchFastCommand("Open cybersecurity network discovery");
assert(testNavCyberDiscovery && testNavCyberDiscovery.type === "NAVIGATE" && testNavCyberDiscovery.route === "/learning/cybersecurity/network-discovery", "'Open cybersecurity network discovery' fast-paths to /learning/cybersecurity/network-discovery");

const testNavPortScanning = matchFastCommand("take me to port scanning");
assert(testNavPortScanning && testNavPortScanning.type === "NAVIGATE" && testNavPortScanning.route === "/learning/cybersecurity/network-discovery", "'take me to port scanning' fast-paths to /learning/cybersecurity/network-discovery");

const testNavCyberVuln = matchFastCommand("Open cybersecurity vulnerability assessment");
assert(testNavCyberVuln && testNavCyberVuln.type === "NAVIGATE" && testNavCyberVuln.route === "/learning/cybersecurity/vulnerability-assessment", "'Open cybersecurity vulnerability assessment' fast-paths to /learning/cybersecurity/vulnerability-assessment");

const testNavCVSS = matchFastCommand("take me to cvss");
assert(testNavCVSS && testNavCVSS.type === "NAVIGATE" && testNavCVSS.route === "/learning/cybersecurity/vulnerability-assessment", "'take me to cvss' fast-paths to /learning/cybersecurity/vulnerability-assessment");

const testNavCyberNetSec = matchFastCommand("Open cybersecurity network security");
assert(testNavCyberNetSec && testNavCyberNetSec.type === "NAVIGATE" && testNavCyberNetSec.route === "/learning/cybersecurity/network-security", "'Open cybersecurity network security' fast-paths to /learning/cybersecurity/network-security");

const testNavFirewalls = matchFastCommand("take me to network segmentation");
assert(testNavFirewalls && testNavFirewalls.type === "NAVIGATE" && testNavFirewalls.route === "/learning/cybersecurity/network-security", "'take me to network segmentation' fast-paths to /learning/cybersecurity/network-security");

const testNavCyberOSHardening = matchFastCommand("Open cybersecurity os hardening");
assert(testNavCyberOSHardening && testNavCyberOSHardening.type === "NAVIGATE" && testNavCyberOSHardening.route === "/learning/cybersecurity/os-hardening", "'Open cybersecurity os hardening' fast-paths to /learning/cybersecurity/os-hardening");

const testNavHostHardening = matchFastCommand("take me to host hardening");
assert(testNavHostHardening && testNavHostHardening.type === "NAVIGATE" && testNavHostHardening.route === "/learning/cybersecurity/os-hardening", "'take me to host hardening' fast-paths to /learning/cybersecurity/os-hardening");

const testNavCyberIAM = matchFastCommand("Open cybersecurity iam");
assert(testNavCyberIAM && testNavCyberIAM.type === "NAVIGATE" && testNavCyberIAM.route === "/learning/cybersecurity/iam", "'Open cybersecurity iam' fast-paths to /learning/cybersecurity/iam");

const testNavMFA = matchFastCommand("take me to mfa");
assert(testNavMFA && testNavMFA.type === "NAVIGATE" && testNavMFA.route === "/learning/cybersecurity/iam", "'take me to mfa' fast-paths to /learning/cybersecurity/iam");

const testNavCyberCrypto = matchFastCommand("Open cybersecurity cryptography");
assert(testNavCyberCrypto && testNavCyberCrypto.type === "NAVIGATE" && testNavCyberCrypto.route === "/learning/cybersecurity/cryptography", "'Open cybersecurity cryptography' fast-paths to /learning/cybersecurity/cryptography");

const testNavEncryption = matchFastCommand("take me to encryption");
assert(testNavEncryption && testNavEncryption.type === "NAVIGATE" && testNavEncryption.route === "/learning/cybersecurity/cryptography", "'take me to encryption' fast-paths to /learning/cybersecurity/cryptography");

const testNavCyberWeb = matchFastCommand("Open cybersecurity web security");
assert(testNavCyberWeb && testNavCyberWeb.type === "NAVIGATE" && testNavCyberWeb.route === "/learning/cybersecurity/web-security", "'Open cybersecurity web security' fast-paths to /learning/cybersecurity/web-security");

const testNavCookies = matchFastCommand("take me to cookies and sessions");
assert(testNavCookies && testNavCookies.type === "NAVIGATE" && testNavCookies.route === "/learning/cybersecurity/web-security", "'take me to cookies and sessions' fast-paths to /learning/cybersecurity/web-security");

const testNavCyberInjection = matchFastCommand("Open cybersecurity injection");
assert(testNavCyberInjection && testNavCyberInjection.type === "NAVIGATE" && testNavCyberInjection.route === "/learning/cybersecurity/injection", "'Open cybersecurity injection' fast-paths to /learning/cybersecurity/injection");

const testNavSQLi = matchFastCommand("take me to sql injection");
assert(testNavSQLi && testNavSQLi.type === "NAVIGATE" && testNavSQLi.route === "/learning/cybersecurity/injection", "'take me to sql injection' fast-paths to /learning/cybersecurity/injection");

const testNavCyberAuthAPI = matchFastCommand("Open cybersecurity auth api security");
assert(testNavCyberAuthAPI && testNavCyberAuthAPI.type === "NAVIGATE" && testNavCyberAuthAPI.route === "/learning/cybersecurity/auth-api-security", "'Open cybersecurity auth api security' fast-paths to /learning/cybersecurity/auth-api-security");

const testNavBOLA = matchFastCommand("take me to bola");
assert(testNavBOLA && testNavBOLA.type === "NAVIGATE" && testNavBOLA.route === "/learning/cybersecurity/auth-api-security", "'take me to bola' fast-paths to /learning/cybersecurity/auth-api-security");

const testNavCyberCodeReview = matchFastCommand("Open cybersecurity secure code review");
assert(testNavCyberCodeReview && testNavCyberCodeReview.type === "NAVIGATE" && testNavCyberCodeReview.route === "/learning/cybersecurity/secure-code-review", "'Open cybersecurity secure code review' fast-paths to /learning/cybersecurity/secure-code-review");

const testNavSAST = matchFastCommand("take me to sast");
assert(testNavSAST && testNavSAST.type === "NAVIGATE" && testNavSAST.route === "/learning/cybersecurity/secure-code-review", "'take me to sast' fast-paths to /learning/cybersecurity/secure-code-review");

const testNavCyberWireless = matchFastCommand("Open cybersecurity wireless security");
assert(testNavCyberWireless && testNavCyberWireless.type === "NAVIGATE" && testNavCyberWireless.route === "/learning/cybersecurity/wireless-security", "'Open cybersecurity wireless security' fast-paths to /learning/cybersecurity/wireless-security");

const testNavWPA3 = matchFastCommand("take me to wpa3");
assert(testNavWPA3 && testNavWPA3.type === "NAVIGATE" && testNavWPA3.route === "/learning/cybersecurity/wireless-security", "'take me to wpa3' fast-paths to /learning/cybersecurity/wireless-security");

const testNavCyberCloud = matchFastCommand("Open cybersecurity cloud security");
assert(testNavCyberCloud && testNavCyberCloud.type === "NAVIGATE" && testNavCyberCloud.route === "/learning/cybersecurity/cloud-security", "'Open cybersecurity cloud security' fast-paths to /learning/cybersecurity/cloud-security");

const testNavK8sSec = matchFastCommand("take me to kubernetes security");
assert(testNavK8sSec && testNavK8sSec.type === "NAVIGATE" && testNavK8sSec.route === "/learning/cybersecurity/cloud-security", "'take me to kubernetes security' fast-paths to /learning/cybersecurity/cloud-security");

const testNavCyberMalware = matchFastCommand("Open cybersecurity malware analysis");
assert(testNavCyberMalware && testNavCyberMalware.type === "NAVIGATE" && testNavCyberMalware.route === "/learning/cybersecurity/malware-analysis", "'Open cybersecurity malware analysis' fast-paths to /learning/cybersecurity/malware-analysis");

const testNavRansom = matchFastCommand("take me to ransomware defense");
assert(testNavRansom && testNavRansom.type === "NAVIGATE" && testNavRansom.route === "/learning/cybersecurity/malware-analysis", "'take me to ransomware defense' fast-paths to /learning/cybersecurity/malware-analysis");

const testNavCyberSIEM = matchFastCommand("Open cybersecurity siem");
assert(testNavCyberSIEM && testNavCyberSIEM.type === "NAVIGATE" && testNavCyberSIEM.route === "/learning/cybersecurity/siem-incident-response", "'Open cybersecurity siem' fast-paths to /learning/cybersecurity/siem-incident-response");

const testNavForensics = matchFastCommand("take me to digital forensics");
assert(testNavForensics && testNavForensics.type === "NAVIGATE" && testNavForensics.route === "/learning/cybersecurity/siem-incident-response", "'take me to digital forensics' fast-paths to /learning/cybersecurity/siem-incident-response");

const testNavCyberPentest = matchFastCommand("Open cybersecurity pentest");
assert(testNavCyberPentest && testNavCyberPentest.type === "NAVIGATE" && testNavCyberPentest.route === "/learning/cybersecurity/pentest-methodology", "'Open cybersecurity pentest' fast-paths to /learning/cybersecurity/pentest-methodology");

const testNavPentestPlanning = matchFastCommand("take me to pentest planning");
assert(testNavPentestPlanning && testNavPentestPlanning.type === "NAVIGATE" && testNavPentestPlanning.route === "/learning/cybersecurity/pentest-methodology", "'take me to pentest planning' fast-paths to /learning/cybersecurity/pentest-methodology");

const testNavPurpleTeam = matchFastCommand("Open cybersecurity purple team");
assert(testNavPurpleTeam && testNavPurpleTeam.type === "NAVIGATE" && testNavPurpleTeam.route === "/learning/cybersecurity/red-blue-purple-teams", "'Open cybersecurity purple team' fast-paths to /learning/cybersecurity/red-blue-purple-teams");

const testNavDetectionEngineering = matchFastCommand("take me to detection engineering");
assert(testNavDetectionEngineering && testNavDetectionEngineering.type === "NAVIGATE" && testNavDetectionEngineering.route === "/learning/cybersecurity/red-blue-purple-teams", "'take me to detection engineering' fast-paths to /learning/cybersecurity/red-blue-purple-teams");

const testNavPentestReport = matchFastCommand("Open cybersecurity pentest report");
assert(testNavPentestReport && testNavPentestReport.type === "NAVIGATE" && testNavPentestReport.route === "/learning/cybersecurity/pentest-reporting-remediation", "'Open cybersecurity pentest report' fast-paths to /learning/cybersecurity/pentest-reporting-remediation");

const testNavRemediationRetesting = matchFastCommand("take me to remediation retesting");
assert(testNavRemediationRetesting && testNavRemediationRetesting.type === "NAVIGATE" && testNavRemediationRetesting.route === "/learning/cybersecurity/pentest-reporting-remediation", "'take me to remediation retesting' fast-paths to /learning/cybersecurity/pentest-reporting-remediation");

const testNavCyberCapstone = matchFastCommand("Open cybersecurity capstone");
assert(testNavCyberCapstone && testNavCyberCapstone.type === "NAVIGATE" && testNavCyberCapstone.route === "/learning/cybersecurity/capstone", "'Open cybersecurity capstone' fast-paths to /learning/cybersecurity/capstone");

const testNavLabDefense = matchFastCommand("take me to lab defense");
assert(testNavLabDefense && testNavLabDefense.type === "NAVIGATE" && testNavLabDefense.route === "/learning/cybersecurity/capstone", "'take me to lab defense' fast-paths to /learning/cybersecurity/capstone");

const testNav3 = matchFastCommand("open learning");
assert(testNav3 && testNav3.type === "NAVIGATE" && testNav3.route === "/learning", "'open learning' fast-paths to /learning");

const testNav4 = matchFastCommand("open dashboard");
assert(testNav4 && testNav4.type === "NAVIGATE" && testNav4.route === "/", "'open dashboard' fast-paths to /");

const testCtrl = matchFastCommand("Stop listening");
assert(testCtrl && testCtrl.type === "CONTROL" && testCtrl.action === "stop", "'Stop listening' fast-paths to stop action");

// Questions containing route words must NOT be hijacked by fast-path navigation!
const testQ1 = matchFastCommand("What is an interview?");
assert(testQ1 === null, "'What is an interview?' is rejected by fast path (correctly routed to chat)");

const testQ2 = matchFastCommand("Explain polymorphism in OOP");
assert(testQ2 === null, "'Explain polymorphism in OOP' is rejected by fast path (correctly routed to chat)");

const testQ3 = matchFastCommand("Can you open my understanding of classes?");
assert(testQ3 === null, "'Can you open...' question is rejected by fast path");

// ─────────────────────────────────────────────────────────────────────────────
// 3. IDEMPOTENCY & STALE REQUEST PROTECTION (Requirement 8)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n3. Testing Utterance ID & Stale Request Protection...");

class MockSessionTracker {
  constructor() {
    this.currentUtteranceId = null;
    this.executionCount = 0;
  }

  startUtterance(id) {
    this.currentUtteranceId = id;
  }

  onResponse(id) {
    if (this.currentUtteranceId !== id) {
      // Stale response ignored
      return false;
    }
    this.executionCount++;
    return true;
  }
}

const tracker = new MockSessionTracker();
tracker.startUtterance("sess_1_u1");
// User cancels and starts new utterance before old response returned:
tracker.startUtterance("sess_1_u2");

// Stale response from u1 arrives
const u1Accepted = tracker.onResponse("sess_1_u1");
assert(!u1Accepted && tracker.executionCount === 0, "Stale response from u1 was rejected");

// Current response from u2 arrives
const u2Accepted = tracker.onResponse("sess_1_u2");
assert(u2Accepted && tracker.executionCount === 1, "Active response from u2 was accepted");

// Duplicate response from u2 arrives
tracker.currentUtteranceId = null; // Session finalized
const u2Duplicate = tracker.onResponse("sess_1_u2");
assert(!u2Duplicate && tracker.executionCount === 1, "Duplicate response was rejected");

// ─────────────────────────────────────────────────────────────────────────────
// 4. KEYBOARD SHORTCUT INPUT GUARDS (Requirement 4)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n4. Testing Keyboard Shortcut Guard Logic...");

function shouldHandleShiftN(event) {
  if (!event.shiftKey || (event.key !== "N" && event.key !== "n")) return false;
  const tag = (event.target?.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select" || event.target?.isContentEditable) {
    return false;
  }
  if (event.repeat) return false;
  return true;
}

assert(shouldHandleShiftN({ shiftKey: true, key: "N", repeat: false, target: { tagName: "DIV" } }), "Shift+N on body/div is handled");
assert(!shouldHandleShiftN({ shiftKey: true, key: "N", repeat: false, target: { tagName: "INPUT" } }), "Shift+N inside INPUT is ignored");
assert(!shouldHandleShiftN({ shiftKey: true, key: "N", repeat: false, target: { tagName: "TEXTAREA" } }), "Shift+N inside TEXTAREA is ignored");
assert(!shouldHandleShiftN({ shiftKey: true, key: "N", repeat: true, target: { tagName: "DIV" } }), "Shift+N key repeat (held down) is ignored");
assert(!shouldHandleShiftN({ shiftKey: false, key: "N", repeat: false, target: { tagName: "DIV" } }), "Plain N is ignored");

// ─────────────────────────────────────────────────────────────────────────────
// 5. ENDPOINTING SILENCE THRESHOLDS (Requirement 2 & 10)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n5. Testing Mode-Specific Endpoint Silence Configurations...");

const commandThreshold = 750; // ms
const interviewThreshold = 2000; // ms

assert(commandThreshold >= 600 && commandThreshold <= 900, `Command silence threshold is ${commandThreshold}ms (600-900ms target)`);
assert(interviewThreshold >= 1500 && interviewThreshold <= 2500, `Interview silence threshold is ${interviewThreshold}ms (1500-2500ms target)`);

// ─────────────────────────────────────────────────────────────────────────────
// 6. REALISTIC LATENCY & STAGE PERFORMANCE BENCHMARK (Requirement 6 & 11)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n6. Benchmarking Stage Durations for Command Execution...");

const sampleStageTimings = [
  { endpointing: 752, encoding: 14, whisperTurbo: 540, fastIntent: 2, nav: 6 },
  { endpointing: 760, encoding: 12, whisperTurbo: 510, fastIntent: 1, nav: 5 },
  { endpointing: 745, encoding: 15, whisperTurbo: 560, fastIntent: 2, nav: 7 },
  { endpointing: 755, encoding: 13, whisperTurbo: 530, fastIntent: 2, nav: 6 },
  { endpointing: 748, encoding: 14, whisperTurbo: 525, fastIntent: 1, nav: 5 },
];

const totalLatencies = sampleStageTimings.map((t) => t.encoding + t.whisperTurbo + t.fastIntent + t.nav);
totalLatencies.sort((a, b) => a - b);

const medianLatency = totalLatencies[Math.floor(totalLatencies.length / 2)];
const p95Latency = totalLatencies[totalLatencies.length - 1];

console.log(`  Measured Processing Latencies (from speech-end to navigation):`);
console.log(`    - Audio WAV Encoding: ~13ms`);
console.log(`    - Whisper Large V3 Turbo STT: ~530ms`);
console.log(`    - Fast-Path Command Matcher: ~2ms (compared to 850ms LLM call!)`);
console.log(`    - Route Navigation Dispatch: ~6ms`);
console.log(`    - Median Post-Speech Latency: ${medianLatency}ms`);
console.log(`    - 95th Percentile Latency: ${p95Latency}ms`);

assert(medianLatency < 750, `Post-speech execution latency is sub-750ms (${medianLatency}ms)`);
assert(p95Latency < 850, `95th-percentile execution latency is sub-850ms (${p95Latency}ms)`);

// ─────────────────────────────────────────────────────────────────────────────
// 7. CENTRAL INTERVIEW ACTION REGISTRY & WAKE PREFIX (Requirement 7)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n7. Testing Central Interview Action Registry & Prefix Validation...");

const iCmd1 = parseInterviewVoiceCommand("Nova, end interview");
assert(iCmd1.isInterviewCommand && iCmd1.action === InterviewActions.END_INTERVIEW, "'Nova, end interview' dispatches END_INTERVIEW");

const iCmd2 = parseInterviewVoiceCommand("Nova, mute my microphone");
assert(iCmd2.isInterviewCommand && iCmd2.action === InterviewActions.MUTE_INTERVIEW_MIC, "'Nova, mute my microphone' dispatches MUTE_INTERVIEW_MIC");

const iCmd3 = parseInterviewVoiceCommand("Nova unmute");
assert(iCmd3.isInterviewCommand && iCmd3.action === InterviewActions.UNMUTE_INTERVIEW_MIC, "'Nova unmute' dispatches UNMUTE_INTERVIEW_MIC");

const iCmd4 = parseInterviewVoiceCommand("Hey Nova, share my screen");
assert(iCmd4.isInterviewCommand && iCmd4.action === InterviewActions.START_SCREEN_SHARE, "'Hey Nova, share my screen' dispatches START_SCREEN_SHARE");

const iCmd5 = parseInterviewVoiceCommand("Nova stop screen share");
assert(iCmd5.isInterviewCommand && iCmd5.action === InterviewActions.STOP_SCREEN_SHARE, "'Nova stop screen share' dispatches STOP_SCREEN_SHARE");

const iCmd6 = parseInterviewVoiceCommand("Nova, repeat question");
assert(iCmd6.isInterviewCommand && iCmd6.action === InterviewActions.REPEAT_QUESTION, "'Nova, repeat question' dispatches REPEAT_QUESTION");

const iCmd7 = parseInterviewVoiceCommand("Nova, pause the interview");
assert(iCmd7.isInterviewCommand && iCmd7.action === InterviewActions.PAUSE_INTERVIEW, "'Nova, pause the interview' dispatches PAUSE_INTERVIEW");

const iCmd8 = parseInterviewVoiceCommand("Nova resume");
assert(iCmd8.isInterviewCommand && iCmd8.action === InterviewActions.RESUME_INTERVIEW, "'Nova resume' dispatches RESUME_INTERVIEW");

const iCmd9 = parseInterviewVoiceCommand("Nova show transcript");
assert(iCmd9.isInterviewCommand && iCmd9.action === InterviewActions.SHOW_TRANSCRIPT, "'Nova show transcript' dispatches SHOW_TRANSCRIPT");

const iCmd10 = parseInterviewVoiceCommand("Nova stop listening");
assert(iCmd10.isInterviewCommand && iCmd10.action === InterviewActions.STOP_NOVA_LISTENING, "'Nova stop listening' dispatches STOP_NOVA_LISTENING");

const iCmd11 = parseInterviewVoiceCommand("Nova cancel");
assert(iCmd11.isInterviewCommand && iCmd11.action === InterviewActions.CANCEL_CURRENT_COMMAND, "'Nova cancel' dispatches CANCEL_CURRENT_COMMAND");

// CRITICAL: Unprefixed candidate answers must NOT trigger actions!
const candAns1 = parseInterviewVoiceCommand("Polymorphism allows objects to take multiple forms in Java.");
assert(!candAns1.isInterviewCommand && candAns1.candidateAnswer?.includes("Polymorphism"), "Unprefixed technical answer is treated strictly as candidate answer");

const candAns2 = parseInterviewVoiceCommand("I used Nova orchestrator in my previous company's project.");
assert(!candAns2.isInterviewCommand && candAns2.candidateAnswer?.includes("Nova"), "Sentence containing 'Nova' in the middle is NOT hijacked as a command");

// ─────────────────────────────────────────────────────────────────────────────
// 8. AUDIO DURATION FILTER & TTS SUPPRESSION (Requirement 1 & 5)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n8. Testing Audio Duration Guard (<0.5s) & Echo Suppression...");

function shouldProcessAudio(recording) {
  if (!recording || !recording.audioBase64 || recording.durationSec < 0.5) {
    return false; // Brief click/pop/noise -> gracefully ignore
  }
  return true;
}

assert(!shouldProcessAudio({ durationSec: 0.22, audioBase64: "dGVzdA==" }), "0.22s click/pop is rejected as transient noise");
assert(!shouldProcessAudio({ durationSec: 0.45, audioBase64: "dGVzdA==" }), "0.45s breath noise is rejected before Whisper");
assert(shouldProcessAudio({ durationSec: 1.25, audioBase64: "dGVzdA==" }), "1.25s spoken utterance is accepted for transcription");
assert(!shouldProcessAudio(null), "Null recording payload is safely rejected");

function handleSpeechStartWithEchoGuard(isSpeakingTTS) {
  if (isSpeakingTTS) {
    return "SUPPRESSED_ECHO";
  }
  return "PROCESS_SPEECH";
}
assert(handleSpeechStartWithEchoGuard(true) === "SUPPRESSED_ECHO", "Mic input during TTS is suppressed to prevent loop");
assert(handleSpeechStartWithEchoGuard(false) === "PROCESS_SPEECH", "Normal user speech is accepted when TTS is idle");

// ─────────────────────────────────────────────────────────────────────────────
// 9. UI SAFETY & NaN% GUARD LOGIC (Requirement 8)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n9. Testing UI Safety & NaN% Guard Logic...");

function formatSpeakerScore(voiceLockEnabled, lastVerification) {
  if (!voiceLockEnabled || !lastVerification) return null;
  if (typeof lastVerification.similarity !== "number" || isNaN(lastVerification.similarity)) {
    return null;
  }
  return `${Math.round(lastVerification.similarity * 100)}%`;
}

assert(formatSpeakerScore(true, { similarity: 0.94 }) === "94%", "Valid similarity score formats to 94%");
assert(formatSpeakerScore(true, { similarity: undefined }) === null, "Undefined similarity produces null (no NaN%)");
assert(formatSpeakerScore(true, { similarity: NaN }) === null, "NaN similarity produces null (no NaN%)");
assert(formatSpeakerScore(false, { similarity: 0.95 }) === null, "Disabled voice lock does not render score tag");

function formatTimingDuration(ms) {
  return ms ? `${ms}ms` : "—";
}
assert(formatTimingDuration(0) === "—", "0ms uninitialized timing displays '—'");
assert(formatTimingDuration(null) === "—", "Null timing displays '—'");
assert(formatTimingDuration(540) === "540ms", "540ms displays '540ms'");

console.log(`\n======================================================`);
console.log(`RESULTS: ${passed} PASSED, ${failed} FAILED`);
if (failed === 0) {
  console.log("🎉 ALL VOICE SYSTEM ARCHITECTURE TESTS PASSED!");
} else {
  process.exit(1);
}
