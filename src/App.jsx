import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landingpage from "./Pages/Landingpage";
import Learning from "./Pages/Learning";
import InterviewRoom from "./Pages/InterviewRoom";
import NotFound from "./Pages/NotFound";

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
