// projectx/src/Componets/DataEngineeringSecuritySections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Key, Lock, FileText, Database, ShieldAlert, UserCheck, EyeOff, Scale, Server } from 'lucide-react';

export const securitySectionsMeta = [
  { id: 0, title: "Module 20: Data Security, Governance and Privacy Overview & Roadmap", category: "Course Roadmap" },
  { id: 1, title: "1. Introduction to Data Security", category: "Part 1 · Security Fundamentals & Architecture" },
  { id: 2, title: "2. Data Security Architecture", category: "Part 1 · Security Fundamentals & Architecture" },
  { id: 3, title: "3. Data Classification", category: "Part 2 · Data Classification & Sensitive Data" },
  { id: 4, title: "4. Sensitive Data and Personally Identifiable Information (PII)", category: "Part 2 · Data Classification & Sensitive Data" },
  { id: 5, title: "5. Authentication and Authorization", category: "Part 3 · Access Control & Authorization" },
  { id: 6, title: "6. Role-Based Access Control (RBAC)", category: "Part 3 · Access Control & Authorization" },
  { id: 7, title: "7. Attribute-Based Access Control (ABAC)", category: "Part 3 · Access Control & Authorization" },
  { id: 8, title: "8. Principle of Least Privilege", category: "Part 3 · Access Control & Authorization" },
  { id: 9, title: "9. Encryption at Rest and in Transit", category: "Part 4 · Cryptography, Keys & Secrets" },
  { id: 10, title: "10. Encryption Key Management", category: "Part 4 · Cryptography, Keys & Secrets" },
  { id: 11, title: "11. Secrets Management", category: "Part 4 · Cryptography, Keys & Secrets" },
  { id: 12, title: "12. Data Masking", category: "Part 5 · Privacy Engineering & Anonymization" },
  { id: 13, title: "13. Anonymization and Pseudonymization", category: "Part 5 · Privacy Engineering & Anonymization" },
  { id: 14, title: "14. Secure Data Sharing", category: "Part 5 · Privacy Engineering & Anonymization" },
  { id: 15, title: "15. Data Access Auditing", category: "Part 6 · Auditing, Retention & Compliance" },
  { id: 16, title: "16. Data Retention and Deletion", category: "Part 6 · Auditing, Retention & Compliance" },
  { id: 17, title: "17. Privacy Engineering", category: "Part 5 · Privacy Engineering & Anonymization" },
  { id: 18, title: "18. Regulatory and Compliance Fundamentals", category: "Part 6 · Auditing, Retention & Compliance" },
  { id: 19, title: "19. Data Governance Frameworks", category: "Part 7 · Data Governance & Ownership" },
  { id: 20, title: "20. Important Data Governance and Security Frameworks", category: "Part 7 · Data Governance & Ownership" },
  { id: 21, title: "21. Data Ownership and Accountability", category: "Part 7 · Data Governance & Ownership" },
  { id: 22, title: "22. Secure Data Pipeline Architecture", category: "Part 8 · Pipeline Architecture & Incident Response" },
  { id: 23, title: "23. Secure Data Pipeline Implementation — Practical Examples", category: "Part 8 · Pipeline Architecture & Incident Response" },
  { id: 24, title: "24. Security Incident Management and Data Breach Response", category: "Part 8 · Pipeline Architecture & Incident Response" },
  { id: 25, title: "25. Major Practical Project — Build a Secure and Governed Cloud Data Lake", category: "Part 9 · Production Capstone & Exercises" },
  { id: 26, title: "26. Additional Advanced Topics", category: "Part 9 · Production Capstone & Exercises" },
  { id: 27, title: "27. Module 20 — Important Interview Questions", category: "Part 9 · Production Capstone & Exercises" },
  { id: 28, title: "28. Practical Assignments", category: "Part 9 · Production Capstone & Exercises" },
  { id: 29, title: "29. Recommended Learning Resources", category: "Part 9 · Production Capstone & Exercises" },
  { id: 30, title: "30. Final Module Summary", category: "Part 9 · Production Capstone & Exercises" }
];

export const SecuritySection = memo(function SecuritySection({ sectionId }) {
  switch (sectionId) {
    case 0:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Course Roadmap
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              Module 20: Data Security, Governance and Privacy Overview &amp; Roadmap
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 20 — Data Security, Governance and Privacy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Advanced
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security Engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance + Compliance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This module teaches you how to protect data throughout its lifecycle, control who can access it, prevent unauthorized disclosure, manage sensitive information, and build secure data engineering platforms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In Module 18, we learned how to build cloud data platforms using AWS and other cloud providers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In Module 19, we learned how to develop, test, deploy, and maintain data pipelines using Git, Docker, CI/CD, and Terraform.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Now we address one of the most important responsibilities of a data engineer:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How do we ensure that the data we collect, store, process, transform, share, and delete is secure, private, and properly governed?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an e-commerce company storing millions of customer records.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Its data lake contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer names and email addresses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Phone numbers and residential addresses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment and transaction records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purchase histories.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer location information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Employee records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company might have excellent data pipelines and scalable cloud infrastructure, but one incorrectly configured permission could expose millions of customer records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Other problems include employees accessing information they do not need, sensitive data appearing in application logs, encryption keys being exposed, personal information being retained indefinitely, and customer data being shared without an appropriate legal basis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This module teaches you how to prevent these problems through security architecture, privacy engineering, access control, encryption, auditing, data governance, and regulatory compliance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learning objectives
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            By the end of this module, you should be capable of:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Designing security architecture for a data platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identifying and classifying sensitive information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implementing authentication and authorization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Designing RBAC and ABAC access-control systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Applying least-privilege access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protecting data through encryption and key management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Managing credentials and application secrets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implementing masking, anonymization, and pseudonymization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Designing secure data-sharing systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Auditing and monitoring data access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implementing retention and deletion policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understanding privacy engineering and regulatory requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Designing data governance frameworks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Assigning data ownership and accountability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Building secure end-to-end data pipelines.
          </p>
        </div>
      );
    case 1:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Security Fundamentals &amp; Architecture
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              1. Introduction to Data Security
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.1 What is Data Security?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data security is the practice of protecting data against unauthorized access, modification, disclosure, destruction, and loss.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It includes technical, organizational, and operational controls that protect information throughout its lifecycle.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Data security applies to data:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            At rest (stored information).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In transit (information moving between systems).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In use (information being processed).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            During sharing (information provided to other systems or organizations).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            During archival and deletion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, consider a bank that stores millions of financial transactions.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It must ensure that:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Only authorized employees can access sensitive customer records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Attackers cannot read customer information if storage is compromised.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transactions cannot be modified without authorization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database credentials remain protected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer records are not exposed through application logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access to financial information is recorded and reviewed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information is retained and deleted according to applicable requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are data security responsibilities.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.2 Why Is Data Security Important in Data Engineering?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data engineering platform combines multiple data sources, storage systems, processing engines, and analytical applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each connection introduces potential security risks.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider this architecture:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Applications
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Ingestion
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Lake
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ETL Processing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BI Dashboards
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            At each stage, data may contain sensitive information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The ingestion application may expose database credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The storage bucket may have incorrect access permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The ETL job may copy personal information into an unnecessary destination.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The warehouse may grant analysts unrestricted access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The dashboard may expose confidential customer information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Therefore, security must be included in the architecture from the beginning rather than added after deployment.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.3 The CIA Triad</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            One of the foundational security models is the CIA Triad.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            CIA stands for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Confidentiality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CIA Security Model
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Confidentiality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prevent unauthorized disclosure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrity
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prevent unauthorized modification
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Keep information accessible
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Confidentiality</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Confidentiality ensures that data is accessible only to authorized individuals and systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data analyst needs access to sales totals but does not need customer passwords or payment credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The platform should provide access only to the required sales information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common confidentiality controls:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data masking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access restrictions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Integrity</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrity ensures that data remains accurate, consistent, and protected against unauthorized modification.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A bank transaction records a transfer of ₹5,000.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An attacker must not be able to modify the transaction to ₹50,000 without authorization and detection.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Data integrity mechanisms include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database constraints.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cryptographic hashes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Digital signatures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transaction controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hashing example
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import hashlib

data = b"Customer Transaction: 5000"
hash_value = hashlib.sha256(data).hexdigest()
print(hash_value)`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A SHA-256 digest can help detect changes when compared against a trusted reference digest.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, a hash alone does not prove authenticity. An attacker who can replace both the data and its stored hash may defeat this check. A protected HMAC or digital signature can provide stronger integrity and authenticity guarantees.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Availability</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability ensures that authorized users can access data and services when required.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A banking application must remain available during business transactions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data warehouse should be able to serve authorized analytical queries within its service expectations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Availability mechanisms include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup and recovery.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            High availability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disaster recovery.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fault tolerance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DDoS protection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Capacity management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CIA Triad in Data Engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security objective
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineering example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Confidentiality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encrypt customer information and restrict access
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrity
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate transaction records and protect modifications
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Back up data and maintain reliable data pipelines
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            All three are necessary. A perfectly confidential dataset that nobody can access is not a useful business data system, while an available but publicly exposed dataset is not secure.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.4 Security vs Privacy</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These concepts are related, but they are not identical.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data security focuses on protecting data against unauthorized access, modification, disclosure, and destruction.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data privacy focuses on how personal information is collected, used, shared, retained, and controlled in relation to individuals.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company securely stores customer location information using encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, it collects the information without an appropriate legal basis and uses it for an unrelated purpose.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The information may be technically secure but the company's data processing may still violate privacy requirements.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data security</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data privacy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Protects information</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Governs appropriate handling of personal information</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Focuses on security controls</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Focuses on individuals and their information</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Encryption and access control</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Purpose limitation and data minimization</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Prevents unauthorized access</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Prevents inappropriate collection and use</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Security monitoring</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Privacy rights and obligations</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">A professional data engineer must understand both.</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Security Fundamentals &amp; Architecture
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              2. Data Security Architecture
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.1 What is Data Security Architecture?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data security architecture is the structured design of security controls across the data infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It describes how an organization protects data, systems, identities, networks, and processing operations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data platform should not depend on a single security control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead, it should use multiple complementary protection mechanisms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is known as defense in depth.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.2 Defense in Depth</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defense in depth means implementing multiple layers of security so that a failure in one control does not automatically compromise the entire system.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a data lake hosted on AWS.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The architecture may use:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network restrictions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM authentication and permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Bucket access policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data-level permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logging and auditing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup and recovery.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Introduction to Defense in Depth: A Layered Approach to Cybersecurity</span>
            <a href="https://images.openai.com/static-rsc-4/Fh1ju_qCy81T4qXTNH3wqcQ4FtP5HFHI6Hvb4hA52pVxhgh7SS1YQGhYqH7MPmxizIvp-YwTmvpT5OV0ueMo8kuwoABJh6Hp4zhIZthA3Lp6DZInpZZQQNT25iAg5ltwwKi13_krU3TKScMBjzY9nIzjRsaDULAHFbTF4X6Wuaw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">natsar.com</span>
            <a href="https://www.natsar.com/blog/introduction-to-defense-in-depth-a-layered-approach-to-cybersecurity?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an attacker obtains a valid application credential.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the credential only grants access to a specific processing bucket, the attacker cannot automatically read every dataset in the organization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Additional encryption, monitoring, and network restrictions provide further protection.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.3 Security Architecture Layers</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A modern data security architecture can be divided into several layers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Layer 1 — Network security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protects communication between systems.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            VPCs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Private subnets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Firewalls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security groups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Private endpoints.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            TLS connections.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Layer 2 — Identity security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Controls which users and applications can access resources.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RBAC.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ABAC.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Multi-factor authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Layer 3 — Data security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protects the information itself.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Masking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tokenization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Classification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data-level permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Layer 4 — Application security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protects software that processes information.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure coding.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Input validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dependency security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Layer 5 — Monitoring and auditing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detects and investigates suspicious activity.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit trails.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Alerts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident investigation.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.4 Zero Trust Security Architecture</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Zero Trust is a security approach based on the principle that access should not be automatically trusted merely because a user or system is inside an organization’s network.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each access request should be evaluated using relevant identity, device, resource, and contextual information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The core idea is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Never grant implicit trust; continuously evaluate access according to policy.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data engineer accesses an organization's analytical database.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The security system evaluates:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who is the engineer?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Is the authentication valid?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Is multi-factor authentication satisfied?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Is the device permitted?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which dataset is requested?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Is the access allowed by the role?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Does the requested operation match the user's permissions?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Zero Trust architecture is particularly useful for organizations with cloud environments, remote employees, multiple applications, and distributed data systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NIST describes Zero Trust Architecture in Special Publication 800-207.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Data Classification &amp; Sensitive Data
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              3. Data Classification
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.1 What is Data Classification?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification is the process of organizing data into categories according to its sensitivity, confidentiality, business importance, and potential impact if exposed or misused.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Not every dataset requires the same level of security.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company's public product catalog and customer payment information should not have identical access restrictions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A product catalog might be accessible to everyone, while payment records should be restricted to authorized systems and personnel.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Data classification helps organizations determine:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who can access information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How information should be stored.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether encryption is required.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether data can be shared externally.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How long information should be retained.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What monitoring is required.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How information should be deleted.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.2 Common Data Classification Levels</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizations may define different classification models. A common four-level model is:
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Level 1 — Public Data</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information that is approved for public distribution.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public product catalogs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Company website content.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public documentation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Published company announcements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public datasets.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Security requirements:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prevent unauthorized modification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain data integrity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Control publishing permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitor important changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Although public information does not require confidentiality restrictions, it still requires integrity protection.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Level 2 — Internal Data</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information intended for employees and authorized internal users.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Internal project documentation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Employee directories.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Internal operational reports.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Non-confidential business processes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Internal technical documentation.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Security requirements:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Employee authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizational access restrictions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Role-based permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Appropriate sharing controls.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Level 3 — Confidential Data</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information that could harm individuals or organizations if disclosed without authorization.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer contact details.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business contracts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Employee salary information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Internal financial reports.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer transaction histories.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business performance information.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Security requirements:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Strong access restrictions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access logging.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure sharing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention controls.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Level 4 — Restricted / Highly Sensitive Data</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information requiring particularly strict controls because unauthorized access could cause serious harm.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Passwords and authentication credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Highly sensitive personal information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment authentication information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive health records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Private cryptographic keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Certain legal or regulatory records.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Security requirements:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Strict identity verification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Least-privilege access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Strong encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Strong key management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous access monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Additional authorization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure handling and deletion.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.3 Data Classification Comparison</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Classification</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Example</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Typical access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Public</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Public product catalog</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Everyone</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Internal</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Internal reports</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Employees</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Confidential</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer information</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Approved teams</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Restricted</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Authentication secrets</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Specifically authorized systems</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Customer Data Privacy: 10 Non-Negotiable Best Practices to Protect Your Business</span>
            <a href="https://images.openai.com/static-rsc-4/v3O8z0q6LA4sDFTFOftTZijyx0uH6avh5PR1BJu3Jpki1IqTGAu4szIi1o34pfJ-1arJGdxQs9jg5PtmTu06eJ0N146YRvkVDXa47bvv8x8s7I60hhg_AqFkeiJfRnOVBlgUqNWypD4K5F7-Pd3BqKm0v75AoCirjZyyYtKhXVY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">wildfireconcepts.com</span>
            <a href="https://wildfireconcepts.com/customer-data-privacy-10-non-negotiable-best-practices-to-protect-your-business/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.4 How Does Data Classification Work?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine an e-commerce organization has these datasets:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`company-data/ products/ product_catalog.csv customers/ customer_profiles.csv transactions/ payments.csv employees/ salary_records.csv security/ authentication_secrets`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The organization classifies each dataset.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Dataset</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Classification</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Protection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Product catalog</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Public</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Integrity controls</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer profiles</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Confidential</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Encryption and RBAC</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Payments</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restricted</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Strong access restrictions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Employee salaries</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Confidential</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restricted HR access</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Authentication secrets</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restricted</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Secret management</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The classification should be stored as metadata so that systems can apply appropriate handling rules.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "dataset": "customer_profiles",
  "classification": "CONFIDENTIAL",
  "contains_personal_data": true,
  "encryption_required": true,
  "external_sharing": "RESTRICTED",
  "owner": "customer_data_team"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This information can be attached to dataset catalog entries or implemented through organizational metadata standards.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.5 Automated Data Classification</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In large organizations, manually inspecting millions of files is impractical.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automated classification uses rules, metadata, pattern matching, and specialized discovery tools.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A system scans a dataset and detects values matching:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Email-address patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Phone-number patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Government-issued identifier patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Credit-card number patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Medical record identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It may automatically label the dataset as containing sensitive information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Tools include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Macie.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Microsoft Purview.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud Sensitive Data Protection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Atlas in supported governance architectures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, Amazon Macie can discover and help classify sensitive data stored in Amazon S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important: Automated detection can generate false positives and false negatives. Human review and validation are still necessary, especially before changing access permissions or compliance classifications.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.6 Data Classification Lifecycle</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Discovery
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Identification
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Sensitivity Assessment
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Classification Assignment
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Security Policy Application
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Monitoring and Review
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Reclassification if Needed
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A dataset's classification may change over time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, an unpublished financial forecast may initially be confidential but become public after an approved company announcement.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Data Classification &amp; Sensitive Data
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              4. Sensitive Data and Personally Identifiable Information (PII)
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.1 What is Personally Identifiable Information?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Personally Identifiable Information (PII) is information that can identify, distinguish, or be linked to a particular individual.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The exact legal definition depends on the jurisdiction and applicable framework.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples include:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Full name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Email address.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mobile number.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Residential address.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Government identification number.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Passport details.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Financial account information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Online identifiers when linked to an individual.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Location information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Certain biometric information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider this customer record:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            &#123; "customer_id": "C001", "name": "Rahul Sharma", "email": "rahul@example.com", "phone": "9876543210", "city": "Pune", "purchase_amount": 15000 &#125;
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This dataset contains information that can identify an individual.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It should therefore receive appropriate protection.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.2 Direct Identifiers and Indirect Identifiers</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Not all identifying information works in the same way.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Direct Identifiers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information that directly identifies a person.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Full name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Email address.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Government identification number.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Passport number.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Telephone number.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Indirect Identifiers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information that may identify someone when combined with other information.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Date of birth.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Postal code.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Gender.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Occupation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Location history.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detailed transaction patterns.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine a dataset contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Date of birth
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Postal code
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Occupation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            17-09-2003
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            411057
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Software engineer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These attributes may not uniquely identify someone individually.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, a sufficiently specific combination may make identification possible when combined with external records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is called a re-identification risk.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.3 Categories of Sensitive Information</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Category</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Examples</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Potential risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Identity</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Government ID, passport</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Identity theft</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Financial</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Bank details, transactions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Financial fraud</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Health</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Medical records</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Privacy violation</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Biometric</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Fingerprints, face templates</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Identity misuse</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Location</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">GPS history</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Physical safety risks</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Authentication</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Passwords, tokens</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Account compromise</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Employment</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Salary, performance records</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Workplace harm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Children's data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information relating to minors
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Risks to children
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different privacy laws define protected or specially treated categories differently. Do not assume that one universal sensitive-data classification applies everywhere.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.4 PII vs Sensitive Personal Information</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PII is a broad information-security and privacy term.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive personal information is a category of information that receives additional protections under certain laws and organizational policies.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An ordinary customer name and a medical diagnosis are both personal information, but they may have very different sensitivity and legal requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization should assess both identifiability and potential harm.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.5 Why Is PII Important in Data Engineering?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineering platforms frequently combine data from many sources.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Database
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Ingestion
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ETL Processing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Analytics
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline might unintentionally copy customer email addresses into datasets that only require aggregate sales information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This increases the number of systems holding personal information and therefore increases exposure risk.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A good data engineer asks:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Do we need this personal information?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why are we processing it?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who needs access?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can it be removed before analytics?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can it be replaced with a pseudonymous identifier?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How long do we need to retain it?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Does sharing it with another system have an appropriate legal basis?
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.6 PII Inventory</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizations should maintain a record of which systems contain personal information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Dataset</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Personal information</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Purpose</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Classification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Name, email, phone</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer accounts</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Confidential</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Orders</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer ID, purchase history</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Order management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Confidential</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Sales</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Product, amount, date</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Financial analytics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Internal or confidential depending on linkage</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Employee records</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Contact, salary</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">HR management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restricted</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Application logs</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">IP address, account ID</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Troubleshooting</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Classification depends on content</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An accurate inventory helps with security reviews, access control, privacy assessments, and retention management.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Access Control &amp; Authorization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              5. Authentication and Authorization
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are two foundational security concepts.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.1 What is Authentication?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication verifies the identity of a user, service, or application.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            In simple terms:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication answers: Who are you?
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Username and password.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Multi-factor authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Passkeys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Digital certificates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service identities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a data engineer wants to access an AWS data warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Before granting access, the system must establish which identity is making the request.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            That process is authentication.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.2 Authentication Methods</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Password Authentication</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The user provides a username and password.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system verifies the supplied credential against a securely stored password verifier.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Passwords should not be stored as plaintext.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For password storage, applications should use dedicated password hashing functions such as Argon2id, bcrypt, or scrypt with appropriate configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption and password hashing are different concepts.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Multi-Factor Authentication (MFA)</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            MFA requires more than one independent factor for authentication.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The common categories are:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Something you know — password or PIN.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Something you have — security key or authenticator device.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Something you are — biometric characteristic.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A user enters a password and then approves authentication using a registered security key.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Certificate-Based Authentication</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Digital certificates can be used to establish identity between systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An application can authenticate to another service using a client certificate as part of mutual TLS.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Federated Authentication</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Federation allows users to authenticate through a trusted identity provider.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An employee uses an enterprise identity provider to access multiple cloud services without creating separate long-lived passwords for every service.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important protocols and technologies include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            OAuth 2.0.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            OpenID Connect.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SAML.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mutual TLS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Passkeys and WebAuthn.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These solve different authentication and authorization-related problems; they should not be treated as interchangeable.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.3 What is Authorization?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorization determines what an authenticated identity is allowed to do.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            In simple terms:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorization answers: What are you allowed to access?
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Three employees log into the same cloud data platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Engineer: Can read raw datasets and write curated datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Analyst: Can query curated datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security Administrator: Can inspect security audit logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            All three identities may successfully authenticate, but they have different permissions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.4 Authentication vs Authorization</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Authentication</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Authorization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Purpose</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Verify identity</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Determine permissions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Question</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Who are you?</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">What can you do?</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Common mechanisms</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Password, MFA, certificate</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Policies, roles, permissions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Login to AWS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Read a particular S3 bucket</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Choosing an AWS identity service - Choosing an AWS identity service</span>
            <a href="https://images.openai.com/static-rsc-4/cNNy44x6wWVAkrwpbIJuiKQQ1iTRYMiaSaOIITVxB0QglY2eYqdpatF9dNxHI1Z3aBbfd4UfErSfSfMPwjqAXPtuxEjd11EyeyIyQdaAxq6lST4Fy3b6xfG3f9LRxZsDu3sUb_JKwjPL3tOyw3lX3P16tU4GZ-DlBHvPKX2P8HY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">docs.aws.amazon.com</span>
            <a href="https://docs.aws.amazon.com/decision-guides/latest/identity-on-aws-how-to-choose/identity-on-aws-how-to-choose.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.5 Service-to-Service Authentication</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineering platforms frequently run automated processes.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS Glue Job
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Amazon S3
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Amazon Redshift
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pipeline should not require an engineer to manually enter credentials every time it runs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead, services use managed identities, execution roles, temporary credentials, and workload authentication mechanisms.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For AWS:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            EC2 instances can use instance profiles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue jobs can use execution roles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lambda functions can use execution roles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workloads can use federated identity mechanisms where appropriate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is safer than hardcoding access keys in Python scripts.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Access Control &amp; Authorization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              6. Role-Based Access Control (RBAC)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Essential Access Control Model
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.1 What is RBAC?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Role-Based Access Control is an access-control model in which permissions are assigned to roles, and users or service identities receive permissions through their assigned roles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of individually granting permissions to every employee, organizations create roles based on responsibilities.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A data engineering company has:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Engineers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Analysts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database Administrators.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security Administrators.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each role receives a defined set of permissions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.2 How RBAC Works</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The architecture works as follows:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                USERS
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v v Engineer Analyst DBA
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ROLES
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                PERMISSIONS
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                RESOURCES
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.3 Example RBAC Model</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine an e-commerce company has these data resources:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Raw customer data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Curated sales data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Financial transactions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security logs.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It defines the following roles:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Role
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Permissions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Engineer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read raw data, transform data, write curated data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Analyst
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read approved analytical datasets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database Administrator
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manage database configuration and operations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security Administrator
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Review security configuration and audit records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing Analyst
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read approved marketing datasets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The analyst should not automatically get permission to access payment authentication information.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.4 RBAC Implementation Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider a simplified application.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ROLE_PERMISSIONS = {
    "data_engineer": ["read_raw", "write_curated"],
    "data_analyst": ["read_curated"],
    "security_admin": ["read_audit_logs", "manage_security"]
}

def has_permission(role, permission):
    permissions = ROLE_PERMISSIONS.get(role, [])
    return permission in permissions

print(has_permission("data_analyst", "read_curated"))`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The result is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            True
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This illustrates the concept only. Production authorization should be enforced through a trusted policy engine or the destination platform, not by relying only on a hardcoded check inside one application.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.5 Advantages of RBAC</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Easier permission management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consistent access policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduced administration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Easier employee onboarding.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Simplified auditing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clear role separation.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.6 Limitations of RBAC</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an analyst normally has permission to read sales data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, the company wants to restrict access to financial datasets outside approved working environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RBAC alone may not express every relevant contextual condition.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For this, organizations may use ABAC.
          </p>
        </div>
      );
    case 7:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Access Control &amp; Authorization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              7. Attribute-Based Access Control (ABAC)
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.1 What is ABAC?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Attribute-Based Access Control grants or denies access based on attributes associated with:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The user or identity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The requested resource.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The requested action.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The environment or context.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unlike basic RBAC, ABAC can evaluate more detailed conditions.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A data analyst may access customer analytics only when:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The employee belongs to the analytics team.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The dataset is classified as approved for analytics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The operation is read-only.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The request comes from an approved environment.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.2 Four Types of Attributes</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Subject Attributes</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Attributes describing the person or system requesting access.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            User ID.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Department.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Role.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Employment status.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security clearance.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Resource Attributes</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Attributes describing the requested data.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dataset name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Department owner.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Region.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitivity level.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Action Attributes</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The action being requested.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delete.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Export.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Share.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Environment Attributes</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Attributes describing the context of the request.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Request time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network location.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Device security status.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication strength.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Risk score.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.3 ABAC Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ACCESS REQUEST
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v v User Resource Environment Attributes Attributes Attributes
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                POLICY EVALUATION
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v ALLOW DENY
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.4 ABAC Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an employee requests access to a dataset.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Policy:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IF user.department = "analytics" AND resource.classification = "internal" AND action = "read" AND user.status = "active" THEN ALLOW
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Otherwise, deny.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This allows highly granular access decisions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.5 RBAC vs ABAC</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">RBAC</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">ABAC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Access basis</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Roles</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Attributes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Complexity</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Relatively simple</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">More complex</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Context awareness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Limited in basic RBAC</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Strong</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Permission management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Role-based</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Policy-based</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analyst can read curated data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analyst can read approved data from an authorized environment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.6 Combining RBAC and ABAC</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Real organizations often combine the models.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            First, RBAC establishes that an employee is a data analyst.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Then, ABAC evaluates whether that analyst may access a particular confidential regional dataset at that time and under those conditions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is a practical approach for complex cloud data platforms.
          </p>
        </div>
      );
    case 8:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Access Control &amp; Authorization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              8. Principle of Least Privilege
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Critical Security Principle
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.1 What is Least Privilege?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The principle of least privilege states that every user, process, and system should receive only the permissions necessary to perform its assigned responsibilities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This minimizes the impact of mistakes, compromised accounts, and malicious activities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a data pipeline that only needs permission to read an S3 bucket and write to another bucket.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Giving the application full administrator access is unnecessary and dangerous.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead, provide exactly the required permissions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.2 Example: Bad vs Good Permissions</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Bad approach
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Pipeline
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Administrator Access
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                All AWS Resources
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the pipeline is compromised, the attacker may obtain extensive permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Better approach
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Pipeline
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Specific IAM Role
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v Read Raw Bucket Write Curated Bucket
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline cannot access unrelated resources.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.3 Least-Privilege Implementation</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider this sample IAM policy:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::company-raw/orders/*"]
    },
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject"],
      "Resource": ["arn:aws:s3:::company-curated/orders/*"]
    }
  ]
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            This illustrates the intended access scope:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read objects from the raw orders location.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write objects to the curated orders location.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            No blanket administrative permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An actual job may require additional narrowly scoped permissions, such as listing a bucket prefix or using an appropriate KMS key.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.4 Additional Least-Privilege Practices</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deny access by default.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use temporary credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Require MFA for privileged human access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Separate development and production roles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Review permissions periodically.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove inactive identities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid shared employee accounts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use just-in-time privileged access where possible.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Separate approval and execution responsibilities.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.5 Privilege Escalation</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privilege escalation occurs when an attacker or user obtains permissions beyond those originally granted.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data processing service has limited permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, it can modify an IAM policy or assume a more powerful role.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An attacker exploiting that capability may gain access to additional resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Therefore, administrators must review both direct permissions and the indirect paths through which an identity can assume or modify privileges.
          </p>
        </div>
      );
    case 9:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Cryptography, Keys &amp; Secrets
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              9. Encryption at Rest and in Transit
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Core Data Protection Mechanism
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.1 What is Encryption?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption converts readable information, called plaintext, into unreadable ciphertext using a cryptographic algorithm and key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Only an authorized entity with the appropriate decryption capability can recover the original information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Plaintext:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            customer_email = rahul@example.com
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Encrypted representation:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A7F92B...encrypted-ciphertext...
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The actual ciphertext is generally binary data; the displayed string is illustrative.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.2 Why Is Encryption Necessary?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an organization stores sensitive customer information in a cloud data lake.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If an unauthorized person obtains a storage object, encryption can help prevent them from reading the contents without the necessary keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption is not a substitute for access controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An attacker who steals both the encrypted data and valid decryption credentials may still obtain the original information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Therefore, encryption must be combined with identity protection, key management, monitoring, and access restrictions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.3 Types of Encryption</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Two major encryption categories are:
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Symmetric Encryption</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The same secret key is used for encryption and decryption.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AES (Advanced Encryption Standard).
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Plaintext
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Secret Key + AES
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Ciphertext
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Secret Key + AES Decryption
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Plaintext
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Advantages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Efficient.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suitable for large datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Commonly used for storage encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AES-GCM is an authenticated encryption mode that provides confidentiality and integrity protection when used correctly with unique nonces and suitable key management.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Asymmetric Encryption</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Uses a public-private key pair.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Private key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data encrypted with an appropriate public-key encryption scheme can be decrypted using the corresponding private key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is also used in digital signatures and secure key exchange, although the exact cryptographic operations differ.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples include:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RSA.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Elliptic Curve Cryptography.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Asymmetric cryptography is generally more computationally expensive for bulk data than symmetric encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Modern encryption systems often combine symmetric and asymmetric cryptography.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.4 Encryption at Rest</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption at rest protects information stored on storage systems.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 objects.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data warehouse storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disk volumes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Archived datasets.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider an S3 data lake:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3 Data Lake
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Encrypted Objects
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Authorized Decryption
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Readable Data
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            AWS supports server-side encryption options including:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SSE-S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SSE-KMS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SSE-C, where explicitly configured and applicable.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For most AWS workloads, SSE-S3 or SSE-KMS are commonly considered.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS's April 2026 S3 security update changed the default handling of SSE-C for new general-purpose bucket writes, so architecture documentation should reflect current service behavior rather than assume every encryption option remains enabled by default.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Simple Storage Service
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.5 Encryption in Transit</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption in transit protects data moving between systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Python Application
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                HTTPS / TLS
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS Service
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            TLS (Transport Layer Security) is commonly used to protect network communications.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API requests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database connections.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application-to-cloud communication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service-to-service communication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transfer between processing systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Without appropriate transport encryption, network traffic may be exposed to interception or modification.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.6 Encryption at Rest vs In Transit</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">At rest</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">In transit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Protects</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Stored data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Moving data</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Encrypted S3 objects</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">HTTPS</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Main risk</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Storage exposure</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Network interception</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Technologies</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AES, KMS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">TLS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.7 Encryption in Use</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A further advanced concept is protecting information while it is being processed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, confidential data may need protection even when a computation is performed.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Relevant technologies include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Confidential computing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Trusted Execution Environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hardware-backed isolation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Homomorphic encryption for specialized applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure multiparty computation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These techniques solve specialized problems and usually involve additional performance and engineering trade-offs.
          </p>
        </div>
      );
    case 10:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Cryptography, Keys &amp; Secrets
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              10. Encryption Key Management
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.1 What is Key Management?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption is only useful if cryptographic keys are protected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key management is the process of creating, storing, controlling, rotating, using, revoking, and retiring encryption keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an organization encrypts 10 TB of customer data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If an attacker obtains the encryption key, the protection can be compromised.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Likewise, if the organization loses its only usable decryption key, it may permanently lose access to the encrypted data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Therefore, key management is a critical security responsibility.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.2 Key Management Lifecycle</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Key Creation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Secure Key Storage
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Access Authorization
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Cryptographic Operations
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Key Rotation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Key Retirement
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Secure Destruction
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.3 Key Hierarchy</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizations frequently use a key hierarchy.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Two important concepts are:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Encryption Key (DEK)
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The key used to encrypt the actual data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key Encryption Key (KEK)
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The key used to encrypt or protect the DEK.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is commonly called envelope encryption.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Bring your own key for server-side encryption at rest</span>
            <a href="https://images.openai.com/static-rsc-4/EwnHID-4jw7Dkf5etJlzpMgk_SmVkd9WzK2eBa37BteUYpGXPutYwiuW1PYsh3vqaC-NryoaoVoGsH6urj_FuwYsL_t3iyS1UPWUfPqXNKvUmEsKXKh_jxDDrxfpkHTjsN04KdUvQAfrCS8ZfCuA8SsuYPQioubbpcIeMtA3UPU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">ibm.com</span>
            <a href="https://www.ibm.com/docs/SS5W4X/dita/content/ssear_kms_managed_keys.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate a data encryption key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encrypt customer records using the data key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encrypt the data key using a protected key-management key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store the encrypted data key with the encrypted data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorize decryption only for approved identities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The data encryption key can be protected without storing it in plaintext alongside the dataset.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.4 AWS Key Management Service (KMS)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS KMS is a managed service for creating and controlling cryptographic keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It integrates with many AWS services.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An S3 bucket uses an AWS KMS key to protect customer data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An authorized Glue execution role needs permission to read the object and use the relevant KMS key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Both permissions must be configured correctly.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important AWS KMS concepts:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            KMS keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Grants.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key rotation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption context.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key administrators.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key users.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key deletion scheduling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS recommends carefully limiting KMS key permissions to the required users and services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Key Management Service+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.5 Key Rotation</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key rotation means periodically replacing cryptographic key material or transitioning to a newer key according to an established policy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why is it important?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Limits prolonged use of a single key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Supports security lifecycle management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Helps respond to key compromise.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Supports organizational security requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, rotation must be planned carefully.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Older encrypted data may still depend on older key material or keys for decryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deleting a key that is still required can make the associated information inaccessible.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.6 Cloud Key Management Comparison</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Platform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Key management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS KMS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure Key Vault Managed HSM / Key Vault
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud KMS
          </p>
        </div>
      );
    case 11:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Cryptography, Keys &amp; Secrets
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              11. Secrets Management
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.1 What are Secrets?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secrets are sensitive values used to authenticate applications, authorize operations, and establish secure connections.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database passwords.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access tokens.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Private keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service account passwords.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a Python data pipeline that connects to PostgreSQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It needs a username and password.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A dangerous implementation is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DB_HOST = "production-db.example.com" DB_USER = "admin" DB_PASSWORD = "MyPassword123"
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the code is committed to GitHub, the credentials may be exposed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Even a private repository is not an appropriate secret vault.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.2 What is Secrets Management?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secrets management is the process of securely creating, storing, distributing, rotating, auditing, and revoking sensitive credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A proper system ensures that applications can access the secrets they need without exposing them unnecessarily.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.3 Secrets Management Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Secure Secret Store
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Identity Authentication
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Permission Verification
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Authorized Application
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Temporary Secret Retrieval
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Database / External API
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.4 Secrets Management Tools</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Platform</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AWS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Secrets Manager</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AWS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Systems Manager Parameter Store</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Azure</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Key Vault</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Google Cloud</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Secret Manager</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Multi-cloud</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">HashiCorp Vault</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.5 Example: AWS Secrets Manager</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a Glue ETL job needs to connect to an external database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of embedding the database password in the job code, it retrieves the secret from AWS Secrets Manager.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Illustrative Python:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import boto3
import json
import os

def get_database_credentials():
    secret_name = os.environ["DB_SECRET_NAME"]
    client = boto3.client("secretsmanager")
    response = client.get_secret_value(SecretId=secret_name)
    credentials = json.loads(response["SecretString"])
    return credentials`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The returned secret could contain:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "username": "pipeline_user",
  "password": "retrieved-securely",
  "host": "database.example.com"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This example assumes the runtime has an appropriately configured AWS identity and permission to retrieve that specific secret.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The password should not be printed or included in logs.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.6 Secret Rotation</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an organization has 50 data pipelines using the same database password.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the password is compromised, every pipeline may be affected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secret rotation allows credentials to be updated according to a controlled process.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A good design supports:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automatic or scheduled rotation where available.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Short-lived credentials where practical.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expiration policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Revocation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Emergency credential replacement.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.7 Secrets Management Best Practices</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Never commit secrets to Git.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid hardcoding credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Never print passwords in application logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restrict secret access through IAM.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use different credentials for different environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rotate credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prefer temporary identities over permanent access keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit secret retrieval.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove unused credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protect backup copies of secrets.
          </p>
        </div>
      );
    case 12:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Privacy Engineering &amp; Anonymization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              12. Data Masking
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.1 What is Data Masking?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data masking is the process of hiding or replacing sensitive information while preserving enough of the data's structure or usefulness for an approved purpose.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is frequently used when developers, analysts, or testers need to work with data without seeing original sensitive values.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, imagine a customer database contains:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Customer</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Email</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Phone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Rahul</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">rahul@gmail.com</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">9876543210</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amit</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">amit@gmail.com</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">9123456789</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A developer working on the application does not need actual customer email addresses or telephone numbers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead, the system can provide masked information.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Customer</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Masked Email</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Masked Phone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Rahul</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">r****@gmail.com</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">XXXXXX3210</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Amit</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">a***@gmail.com</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">XXXXXX6789</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This reduces unnecessary exposure.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.2 Types of Data Masking</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Static Data Masking</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive information is permanently transformed in a separate dataset or environment.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A production database is copied into a development environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Before the developer receives access, the original customer information is replaced with synthetic or masked information.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Production Database
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Masking Process
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Development Dataset
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Developers
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The development dataset no longer contains the original values that were replaced.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Dynamic Data Masking</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The original data remains stored, but the system modifies what a user sees when a query is executed.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An HR administrator can view the complete phone number.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A general analyst sees only the last four digits.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Underlying data:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            9876543210
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Masked view:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            XXXXXX3210
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different users can receive different views of the same underlying information.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Format-Preserving Masking</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The replacement follows the format of the original value.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Original:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AB123456
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Masked:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            XY839201
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This can help systems preserve expected data formats during testing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, a replacement that only looks realistic does not automatically preserve the original data's statistical properties or business meaning.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Redaction</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redaction removes sensitive information from a document or dataset.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Original:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Name: Rahul Sharma Email: rahul@gmail.com Government ID: ABCD1234567
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Redacted:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Name: [REMOVED] Email: [REMOVED] Government ID: [REMOVED]
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.3 Data Masking Example Using SQL</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose a customer table contains:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE customers (
    customer_id INT,
    customer_name VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(20)
);`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An analyst needs access to customer information but not complete phone numbers.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A simple masking view:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE VIEW masked_customers AS
SELECT
    customer_id,
    customer_name,
    email,
    CONCAT('XXXXXX', RIGHT(phone, 4)) AS masked_phone
FROM customers;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The analyst queries:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM masked_customers;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They receive a masked representation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Actual implementation depends on the database engine's string functions and authorization model.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important: Masking is useful, but it does not necessarily make data anonymous. A person may still be identifiable through other attributes or by combining datasets.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.4 When Should Data Masking Be Used?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Development environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Testing environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer support systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Third-party integrations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Demonstration environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Training datasets.
          </p>
        </div>
      );
    case 13:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Privacy Engineering &amp; Anonymization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              13. Anonymization and Pseudonymization
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are two particularly important privacy engineering techniques.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.1 What is Anonymization?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Anonymization is the transformation of personal information so that individuals are no longer identifiable, considering the means reasonably likely to be used.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The objective is to reduce or eliminate the ability to associate the remaining information with a specific individual.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Original customer data:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer ID
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Name
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            City
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Age
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purchase
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C001
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rahul
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pune
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            23
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            5000
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C002
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amit
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mumbai
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            28
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            7000
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C003
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Priya
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delhi
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            25
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            6000
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An anonymized analytical dataset might contain:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">City</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Age group</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Purchase total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Pune</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">20–29</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">5000</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Mumbai</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">20–29</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">7000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delhi
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            20–29
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            6000
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The direct customer identifiers have been removed and some attributes generalized.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, whether the resulting dataset is truly anonymous depends on the broader context and whether individuals could still be identified using other information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Removing names alone does not guarantee anonymization.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.2 What is Pseudonymization?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pseudonymization replaces direct personal identifiers with artificial identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The original identity can potentially be recovered using additional information, such as a separately protected mapping table.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Original:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Customer ID</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Name</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">C001</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Rahul</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">rahul@gmail.com</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">C002</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Amit</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">amit@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Pseudonymized:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Token
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Name
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Email
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            T9001
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NULL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NULL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            T9002
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NULL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NULL
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A separately protected mapping system may store:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Token
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Original ID
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            T9001
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C001
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            T9002
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C002
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Only specifically authorized systems can access the mapping.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.3 Pseudonymization Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Original Personal Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Token Generation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v Tokenized Identity Dataset Mapping
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v Analytics Restricted Access
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The analytics team processes the tokenized dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The identity mapping is available only to authorized services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pseudonymized data is still personal data under the GDPR when it can be attributed to an individual using additional information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            European Commission+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.4 Anonymization vs Pseudonymization</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Anonymization</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Pseudonymization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Direct identifiers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Removed or transformed</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Replaced</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Re-identification</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Should not be reasonably possible</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Potentially possible</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Mapping table</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Not retained in a re-identifiable form</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">May be retained separately</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Privacy protection</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Can be stronger when effective</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Reduces direct exposure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GDPR status
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Effectively anonymous information may fall outside personal-data rules
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generally remains personal data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregated regional sales
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer token replacing customer ID
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.5 Tokenization</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tokenization replaces sensitive values with tokens.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Original account reference:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            1234567890123456
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Token:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            TOK_7A91K
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A secure token vault maps the token back to the original value when an approved operation requires it.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Tokenization is particularly useful when:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment information must be protected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytics does not need original identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different systems should not receive the same sensitive data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access to the original value must be tightly restricted.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tokenization is not automatically anonymization.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.6 Techniques for Reducing Re-identification Risk</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Generalization</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replace specific values with broader categories.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Age: 23
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Becomes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Age group: 20–29
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Suppression</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove selected attributes or records.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove rare combinations of age and geographic location that could identify an individual.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Aggregation</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Combine records into statistics.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of exposing each customer's purchase, publish total purchases for a sufficiently large population.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Noise Addition</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Introduce carefully designed statistical noise.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Differential privacy is an important formal approach for controlling the amount of information about an individual that can be revealed through analytical outputs.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.7 K-Anonymity</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            K-anonymity is a privacy model designed to reduce identification risk through combinations of quasi-identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A dataset is k-anonymous under a chosen quasi-identifier set if each combination of those attributes occurs in at least k records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, with k = 3, each quasi-identifier combination appears in at least three records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This reduces the uniqueness of a person's record.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, k-anonymity alone does not eliminate every privacy risk.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It can still be vulnerable to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Homogeneity attacks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Background knowledge attacks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inference attacks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Other privacy models, including l-diversity and differential privacy, address additional risks.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.8 Privacy-Preserving Data Sharing</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization may want to share analytical information with an external research team.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Instead of sharing the complete raw dataset, it can:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove direct identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generalize sensitive attributes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregate records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppress rare values.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Assess re-identification risk.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply access restrictions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document the permitted use.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The correct method depends on whether the information must remain record-level or can be shared as statistics.
          </p>
        </div>
      );
    case 14:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Privacy Engineering &amp; Anonymization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              14. Secure Data Sharing
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.1 What is Secure Data Sharing?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure data sharing is the controlled exchange of information between people, applications, departments, or external organizations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Sharing should ensure:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Only approved recipients receive information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Only necessary information is provided.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data remains protected during transfer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The purpose of sharing is understood.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access is monitored.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data is not retained beyond authorized requirements.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.2 Types of Data Sharing</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Internal sharing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Between departments or teams within the same organization.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The sales team shares approved analytical data with the finance team.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            External sharing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Between different organizations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An e-commerce company shares selected order statistics with a logistics partner.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Third-party processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A service provider processes data on behalf of the organization.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A cloud provider hosts customer records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This relationship may require contractual safeguards and clear responsibility allocation under applicable law.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.3 Secure Data Sharing Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Owner
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Classification
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Purpose and Permission Check
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Minimization
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Encryption / Masking
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Secure Transfer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Authorized Recipient
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Audit and Monitoring
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.4 Secure Data Sharing Methods</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Secure APIs</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An API allows approved applications to access selected datasets.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Security mechanisms include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Strong authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            TLS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rate limiting.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Input validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit logging.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Private Cloud Sharing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud providers offer controlled data-sharing mechanisms.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cross-account S3 access through IAM roles and policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Redshift data sharing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Lake Formation permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure data-sharing mechanisms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            BigQuery dataset sharing.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Time-Limited Access</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A temporary signed URL or other time-limited access mechanism can be used to allow an approved recipient to retrieve a specific object.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company shares a report through a URL that expires after a short period.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The recipient should not receive permanent unrestricted bucket access merely to download one file.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Secure Data Clean Rooms</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data clean room is an environment in which organizations can perform approved joint analysis without freely exchanging all underlying raw datasets.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An advertising platform and a retailer want to analyze overlapping customer groups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A clean-room architecture can enforce controlled queries and output policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clean rooms reduce certain data-sharing risks, but do not automatically guarantee privacy. Query controls, suppression rules, output review, and contractual protections are still necessary.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.5 Secure Data Sharing Checklist</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Before sharing a dataset, ask:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the purpose?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who is the recipient?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Is the recipient authorized?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Does the recipient need raw data?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can the data be masked or aggregated?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What contractual requirements apply?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How is information encrypted?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How long may it be retained?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How is access audited?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How can access be revoked?
          </p>
        </div>
      );
    case 15:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Auditing, Retention &amp; Compliance
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              15. Data Access Auditing
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production Security Requirement
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.1 What is Data Access Auditing?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data access auditing is the process of recording and reviewing activities involving sensitive data and protected resources.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It helps organizations determine:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who accessed a dataset?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which resource was accessed?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When did access happen?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which action was performed?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Where did the request originate?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Was access successful or denied?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which identity performed the operation?
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.2 Why Is Auditing Important?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a customer data lake is accessed by an employee account outside normal operational patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Without logs, investigating the event may be difficult.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            With proper auditing, the security team can identify:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The identity used.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The object accessed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The time of access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The relevant application or API request.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The actions performed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Auditing supports security investigations, incident response, accountability, and compliance.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.3 Audit Log Structure</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A simplified audit record might look like:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            &#123; "timestamp": "2026-11-09T19:30:00", "user_id": "user_105", "resource": "customer_profiles", "action": "READ", "source_ip": "192.0.2.10", "status": "SUCCESS", "environment": "production" &#125;
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A production audit design should also consider request IDs, authentication context, workload identity, policy decisions, and the source of the log.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.4 AWS Data Access Auditing</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS provides several services and capabilities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS CloudTrail
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records supported AWS API activity and provides an audit trail of actions performed by identities and AWS services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Management events record control-plane activity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data events can capture selected data-plane operations, such as accessing S3 objects, when configured.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Do not assume that every individual S3 object read is automatically recorded simply because CloudTrail exists. Appropriate data-event selectors must be configured.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS CloudWatch
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can collect and monitor application and service logs and metrics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Lake Formation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can manage fine-grained permissions on supported data-lake resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Macie
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can discover sensitive data in S3 and help identify exposure risks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Security Hub
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can aggregate certain security findings and security posture information across AWS environments.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.5 Example: Tracking S3 Access</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose a customer dataset is stored in:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            s3://company-data-lake/customers/
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The organization wants to track object-level access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An appropriate CloudTrail data-event configuration should cover the relevant bucket or prefixes and the required read/write event types.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The audit workflow becomes:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                User Requests Object
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                S3 Evaluates Permissions
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Access Granted/Denied
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                CloudTrail Records Configured Data Event
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Central Audit Storage
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Security Investigation
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.6 Audit Log Protection</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit logs themselves may contain sensitive information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, they may contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            User identities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IP addresses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API request details.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security events.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Protect audit records through:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restricted write and read permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrity verification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Centralized storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Alerting.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Separation of administrative responsibilities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Do not allow the same ordinary pipeline identity to freely modify or erase the audit trail used to investigate its actions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.7 Audit vs Monitoring</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Auditing</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Monitoring</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Records activity for review</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Observes system behavior</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Supports investigations</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Detects operational issues</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Answers who did what</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Answers how the system is behaving</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example: S3 object access record</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Example: unusual read volume alert</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They complement one another.
          </p>
        </div>
      );
    case 16:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Auditing, Retention &amp; Compliance
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              16. Data Retention and Deletion
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.1 What is Data Retention?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data retention is the practice of keeping information for a defined period based on business requirements, legal obligations, operational needs, and privacy considerations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizations should not automatically retain every dataset forever.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an e-commerce company stores customer information collected during account registration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Some records may be required for account operation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Other records may be relevant only to a completed marketing campaign.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Keeping all information indefinitely increases exposure risk and makes privacy management more difficult.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.2 What is a Data Retention Policy?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A data retention policy defines:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which data must be retained.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why it must be retained.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How long it should be retained.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which systems store it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who is responsible for it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How it is archived.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How it is eventually deleted.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.3 Example Retention Policy</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The following is an illustrative internal policy, not a statement of universal legal retention periods.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data type</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Example retention</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Temporary pipeline files</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">7 days</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Processing</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Application debug logs</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">30 days</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Troubleshooting</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer support records</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Based on approved policy</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Support and legal needs</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Financial transaction records</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Based on applicable law</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Accounting and legal compliance</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer profile</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">While necessary for permitted purposes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Account services</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Security audit logs</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Defined security retention schedule</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Investigations and compliance</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Backups</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Defined backup lifecycle</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Recovery</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Actual retention periods must be determined using applicable law, contracts, the purpose of processing, and operational risk.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.4 Data Deletion</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data deletion is the controlled removal of information when its retention is no longer justified or required.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Possible deletion triggers:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer request.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purpose completed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consent withdrawal where consent is the relevant basis and processing must stop.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention period expired.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contract termination.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Legal or policy requirement.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.5 Deletion Across a Data Pipeline</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a customer requests deletion of their personal information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The data exists in:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 raw data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 curated data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redshift.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytics tables.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Search indexes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            External data processor systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deleting only the PostgreSQL record may not remove the customer's information everywhere.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A complete deletion process needs a data inventory and lineage information.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Deletion Request
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Identity Verification
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Authorized Request
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Locate Personal Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v v RDS S3 Redshift
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Processor Systems
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Backup Lifecycle
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Deletion Confirmation
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This process must also handle information that lawfully has to be retained for another applicable purpose.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.6 Data Deletion Techniques</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Logical Deletion</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A record is marked as deleted.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            UPDATE customers SET deleted_at = CURRENT_TIMESTAMP WHERE customer_id = 'C001';
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The record remains stored.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This may be useful for workflow management but does not constitute complete erasure.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Physical Deletion</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The record is actually removed from a database or storage system.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DELETE FROM customers WHERE customer_id = 'C001';
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Physical deletion may still leave copies in backups, replicas, transaction logs, or downstream datasets.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Cryptographic Erasure</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If data is encrypted using a dedicated key, destroying the key can make the encrypted data inaccessible, provided no other usable copies of the key or plaintext remain.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is known as cryptographic erasure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It requires careful key architecture and validation.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Secure Media Sanitization</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For storage devices being reused or disposed of, organizations may use approved sanitization methods appropriate to the device and security requirements.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.7 Deletion Challenges in Distributed Systems</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Data may exist in:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replicas.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data warehouses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Caches.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Event streams.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data exports.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Machine learning feature stores.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Therefore, deletion must account for distributed storage and data lineage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A deletion request should be traceable until the applicable systems have completed their required actions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.8 Data Retention vs Legal Holds</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sometimes an organization must preserve information even when the normal retention period ends.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, a record may be subject to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Litigation hold.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regulatory investigation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accounting requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Legal preservation requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The deletion workflow must check for valid retention obligations before destruction.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is why blanket deletion rules are dangerous.
          </p>
        </div>
      );
    case 17:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Privacy Engineering &amp; Anonymization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              17. Privacy Engineering
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important Professional Skill
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.1 What is Privacy Engineering?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privacy engineering is the practice of designing technology systems, applications, data processes, and infrastructure so that privacy requirements are built into their architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of collecting all available personal information and adding privacy controls later, engineers consider privacy requirements during design and development.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a learning platform wants to analyze student engagement.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It needs to measure:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Course completion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learning progress.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Time spent studying.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Assessment results.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It may not need to expose students' personal email addresses to the analytics team.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A privacy-conscious design separates identity information from educational analytics.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.2 Privacy by Design</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privacy by Design is an approach in which privacy protection is incorporated into system design from the beginning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider an application that collects a user's personal information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A privacy-aware design should address:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purpose of collection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data minimization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            User transparency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data sharing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deletion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privacy should not be treated as a feature added after development.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.3 Privacy by Default</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privacy by Default means the default system configuration should limit personal data processing to what is necessary for the intended purpose.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A new application asks for access to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Camera.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contacts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Location.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Microphone.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            But the actual service only needs the microphone.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A privacy-preserving design should not automatically collect all information simply because the application can access it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The European Commission explains data protection by design and default as part of the GDPR principles and obligations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            European Commission
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.4 Data Minimization</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data minimization means collecting and processing only the data necessary for the defined purpose.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A shopping platform wants to analyze product popularity.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It may need:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product ID.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purchase count.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Date.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Region at an appropriate level of aggregation.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It may not need:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer password.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Full residential address.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Government identity number.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Full payment credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Removing unnecessary information reduces risk.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.5 Purpose Limitation</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purpose limitation means collecting and using information for defined purposes rather than freely reusing it for unrelated activities.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A student provides information to create an educational account.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            That does not automatically mean the platform can use that information for unrelated advertising or external sharing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The organization must assess the applicable legal basis, notices, consents, and other legal requirements before processing for a different purpose.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.6 Privacy Impact Assessment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Privacy Impact Assessment (PIA) is a process for identifying and assessing privacy risks associated with a product, system, or processing activity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A related concept is a Data Protection Impact Assessment (DPIA), which is specifically required in certain circumstances under some privacy laws.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A DPIA-style assessment may involve:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Describe the data processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify affected individuals.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify the personal data collected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define processing purposes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify potential privacy harms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Evaluate risks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Select controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document remaining risks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Review the assessment when processing changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company develops a student performance analytics platform.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It wants to collect:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Student identity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Assessment history.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learning behavior.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Course progress.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Device information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A privacy assessment identifies risks:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unauthorized exposure of student performance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unnecessary tracking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Excessive retention.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inappropriate sharing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incorrect student profiling.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Possible controls:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Separate identity records from analytics data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use pseudonymous learner identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restrict access to individual student reports.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregate platform-wide statistics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Set clear retention rules.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document applicable purposes and user notices.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.7 Privacy-Enhancing Technologies (PETs)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privacy-enhancing technologies help organizations use information while reducing exposure of sensitive personal information.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Differential Privacy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provides mathematical privacy guarantees through carefully controlled statistical noise.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure Multiparty Computation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Allows multiple parties to jointly compute results without directly revealing their individual private inputs to one another under the protocol's assumptions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Homomorphic Encryption
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Allows certain computations to be performed on encrypted data without first decrypting it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Federated Learning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Allows models to be trained across distributed data sources without requiring all raw training data to be centralized.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tokenization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replaces sensitive values with tokens.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Trusted Execution Environments
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provide hardware-supported protected execution environments for selected workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These technologies have different use cases and trade-offs. None should be described as a universal substitute for access controls or legal compliance.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.8 Privacy Engineering Lifecycle</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Requirements
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Inventory
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Privacy Risk Assessment
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Secure Design
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Implementation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Privacy Testing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Deployment
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Continuous Review
              </div>
            </div>
          </div>
        </div>
      );
    case 18:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Auditing, Retention &amp; Compliance
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              18. Regulatory and Compliance Fundamentals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important — Laws and Regulations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineers must understand the legal and regulatory requirements that govern how organizations collect, store, process, transfer, and share personal information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A system can be technically secure and still be non-compliant with applicable privacy regulations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company encrypts all customer records, but uses customer information for an unrelated purpose without an appropriate legal basis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption protects the data, but it does not automatically make the processing lawful.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.1 What is Data Compliance?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data compliance means following the applicable laws, regulations, contractual requirements, and organizational policies governing data processing and protection.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Compliance involves:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understanding applicable laws.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identifying regulated information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Establishing lawful processing purposes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintaining appropriate security safeguards.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Managing user rights and requests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Controlling data retention.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Managing third-party processors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recording processing activities where required.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Responding to personal data breaches.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintaining evidence of compliance.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.2 Important Privacy and Security Regulations</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different countries and industries have different privacy and security requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The following are important frameworks for a data engineer to understand.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Regulation / framework</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Geography or scope</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Main focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">DPDP Act, 2023</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">India</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Digital personal data protection</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">GDPR</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">European Economic Area and applicable cross-border processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Personal data protection</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">CCPA / CPRA</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">California, USA</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Consumer privacy</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">HIPAA</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Applicable US healthcare entities and business associates</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Health information protection</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">PCI DSS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Payment-card ecosystem</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Payment card data security</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ISO 27001</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">International</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Information security management</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ISO 27701</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">International</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Privacy information management</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important distinction: DPDP, GDPR, CCPA, and HIPAA are legal frameworks. ISO 27001 and ISO 27701 are international standards. PCI DSS is an industry security standard with contractual and ecosystem compliance requirements. Their legal status and applicability are not interchangeable.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.3 India's Digital Personal Data Protection Act, 2023</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Primary Indian Privacy Framework</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Digital Personal Data Protection Act, 2023 (DPDP Act) establishes a framework for processing digital personal data in India.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It recognizes the right of individuals to protect their personal data while allowing lawful processing for legitimate purposes.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Official legislation:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            [Digital Personal Data Protection Act, 2023 — India Code](https://www.indiacode.nic.in/bitstream/123456789/22037/1/a2023-22.pdf?utm_source=chatgpt.com)Official rules:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            [Digital Personal Data Protection Rules, 2025 — MeitY](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025;&amp;utm_source=chatgpt.com)A. Understanding the important terminology
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Act introduces several important terms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Principal
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The individual to whom personal data relates.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A student whose information is stored by an educational platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Fiduciary
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization that determines the purpose and means of processing personal data, alone or jointly with others.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An e-commerce company deciding why customer information is collected and how it is used.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Processor
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization that processes personal data on behalf of a Data Fiduciary.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A cloud service provider hosting customer information for an e-commerce business.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consent Manager
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization registered under the Act that acts as a point of contact to help an individual give, manage, review, and withdraw consent.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Protection Board of India
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The statutory body established under the Act for the purposes assigned to it, including adjudicatory and enforcement functions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These definitions are important when designing systems that exchange data between organizations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            India Code+1
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Scope of the DPDP Act</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Act applies to digital personal data processing within India, including information collected in non-digital form and digitized subsequently.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It also covers certain processing outside India when connected with offering goods or services to individuals in India.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Act defines personal data in relation to identifiable individuals and defines processing broadly to include collection, storage, use, sharing, disclosure, and erasure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            India Code
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Lawful Processing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Act provides for processing for a lawful purpose based on consent or certain specified legitimate uses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consent must meet the requirements specified in the Act, including being free, specific, informed, unconditional, and unambiguous, with clear affirmative action.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An organization should therefore establish:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why it needs the personal data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which information is necessary.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What notice must be given.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What legal basis applies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How consent is recorded when consent is the basis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How withdrawal and related requests are handled.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Obligations of Data Fiduciaries</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Act places responsibility on the Data Fiduciary for processing performed by it or on its behalf by a Data Processor.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It also addresses:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Appropriate technical and organizational measures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reasonable security safeguards.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Personal data breach notifications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing of children's personal data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Erasure when applicable purposes are no longer served, subject to legal retention obligations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contracts with Data Processors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This means a company cannot assume that outsourcing data processing removes its responsibility.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            India Code+1
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Rights of Data Principals</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The Act provides rights concerning personal information, including:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access to information about personal data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Correction.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Completion and updating.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Erasure, subject to applicable requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Grievance redressal.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Nomination.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For a data engineer, these rights have technical implications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, when a valid deletion request is received, the system may need to identify and process the relevant record across the database, data lake, warehouse, and processors.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>F. Significant Data Fiduciaries</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Act allows certain organizations to be designated as Significant Data Fiduciaries based on relevant factors, including the volume and sensitivity of data and risks to individuals.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Additional requirements include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Appointment of a Data Protection Officer based in India.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Independent data audits.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Periodic Data Protection Impact Assessments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Additional prescribed measures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            India Code+1
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            G. Important commencement timeline — India
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The DPDP Act and Rules were notified with a phased commencement schedule.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            As of 9 November 2026, not all substantive provisions are yet in force.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The official commencement notifications provide the following timeline:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Date
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Major provisions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            13 November 2025
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Definitions, establishment and functioning provisions for the Board, and specified institutional provisions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            13 November 2026
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Specified consent-manager-related provisions, including Section 6(9), and Rule 4
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            13 May 2027
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Main substantive provisions covering processing obligations, individual rights, security, breach notification and related requirements, under the notified 18-month schedule
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Rules specify that Rules 1, 2, and 17–21 commenced on publication; Rule 4 commences one year later; and Rules 3, 5–16, 22, and 23 commence 18 months after publication. The Act has its own corresponding phased schedule.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            India Code+1
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This distinction matters when studying compliance: the Act and Rules are already notified, but their substantive obligations have staggered commencement dates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For learning purposes, data engineers should design systems now to support the upcoming requirements rather than waiting until they become operative. Always verify the latest Gazette notifications before making a legal compliance decision.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            H. Security safeguards under the DPDP Rules
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rule 6 of the notified DPDP Rules specifies reasonable security safeguards, including:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption, obfuscation, masking, and tokenization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logs and monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup and recovery measures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Appropriate arrangements with Data Processors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technical and organizational safeguards.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Rule also specifies a one-year retention period for the relevant personal data and logs for its stated security purposes, subject to other applicable laws.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rule 7 describes breach notification requirements, including informing affected individuals without delay and providing the Board with initial information without delay, followed by more detailed information within 72 hours, subject to the Rule's provisions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are requirements in the notified Rules 2025; under the published commencement schedule, Rules 6 and 7 are not scheduled to commence until 13 May 2027.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            MeitY+2
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            I. Practical Example
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose an Indian educational platform stores:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            students/ student_profiles email_addresses phone_numbers learning_history assessment_results
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A privacy-aware data engineering architecture should:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain an inventory of personal information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify the applicable purpose and legal basis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provide appropriate notices and manage consent where required.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restrict access to authorized users.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protect stored information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Record relevant data access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support applicable correction and deletion requests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manage third-party processors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define appropriate retention.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support breach investigation and notification processes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is how privacy requirements become engineering requirements.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.4 General Data Protection Regulation (GDPR)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            European Data Protection Framework
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GDPR stands for General Data Protection Regulation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is a European Union data protection regulation that governs personal data processing and has cross-border application in specified circumstances.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Official resource:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            [European Commission — Data Protection](https://commission.europa.eu/law/law-topic/data-protection_en?utm_source=chatgpt.com)A. What is personal data under GDPR?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Personal data refers to information relating to an identified or identifiable natural person.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Names.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Emails.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identification numbers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Location data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Online identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Certain health records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Biometric information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GDPR also recognizes specially protected categories of personal data, such as health information, biometric data used for identification, and information concerning racial or ethnic origin.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Seven Key GDPR Principles</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The GDPR establishes seven major principles of personal data processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Principle
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Meaning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lawfulness, fairness and transparency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Process data appropriately and transparently
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain why data is collected
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purpose limitation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use information for specified purposes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use account data for account services
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data minimisation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collect only necessary information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Do not collect unnecessary identity details
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accuracy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Keep information accurate
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Allow corrections
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage limitation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Do not retain information longer than justified
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply retention schedules
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrity and confidentiality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protect information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption and access restrictions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accountability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Demonstrate compliance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain policies and evidence
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            European Commission
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Legal Basis for Processing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GDPR recognizes different legal bases for processing personal information, including:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consent.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contractual necessity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Legal obligation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Vital interests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public task.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Legitimate interests, subject to applicable requirements and balancing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineers should not assume that consent is always the only valid legal basis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The legal basis must be determined by the organization in light of the actual purpose and applicable circumstances.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Data Subject Rights</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GDPR includes several rights for individuals.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Right to access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Right to rectification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Right to erasure, subject to exceptions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Right to restriction of processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Right to data portability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Right to object.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rights relating to certain automated individual decision-making.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These rights affect how data platforms are designed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, the right of access may require the organization to locate personal information across multiple systems and generate an appropriate response.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Data Protection by Design and Default</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizations must consider appropriate privacy safeguards when designing processing systems.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Minimize collected data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restrict access by default.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use pseudonymization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encrypt sensitive data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Limit retention.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design privacy-friendly defaults.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>F. Cross-Border Data Transfers</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GDPR has specific requirements for transfers of personal data outside the European Economic Area.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Transfer mechanisms include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Adequacy decisions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standard Contractual Clauses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Binding Corporate Rules.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Other permitted mechanisms and derogations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, an organization hosting EU-related customer data in another country must assess applicable transfer requirements rather than assuming ordinary cloud hosting automatically authorizes every transfer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            European Commission+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.5 California Consumer Privacy Act (CCPA) and CPRA</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            United States — California
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), establishes privacy requirements for businesses and provides rights to eligible California residents.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The California Privacy Protection Agency administers and enforces the CCPA.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Official resource:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            [California Privacy Protection Agency — Laws and Regulations](https://cppa.ca.gov/regulations/?utm_source=chatgpt.com)Important consumer rights include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Knowing what personal information is collected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accessing relevant personal information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Requesting deletion, subject to exceptions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Requesting correction.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Opting out of the sale or sharing of personal information as applicable.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Limiting certain uses and disclosures of sensitive personal information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Receiving non-discriminatory treatment for exercising privacy rights.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The applicability of business obligations depends on the statutory scope and applicable thresholds and exceptions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Practical example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a California resident requests access to the personal data collected by an e-commerce company.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The engineering team may need to retrieve information from:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Order database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytics environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer support systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company must implement the appropriate process for responding to the request.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recent regulatory development
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            California regulations covering CCPA updates, certain cybersecurity audits, risk assessments, and automated decision-making technology were adopted in 2025 and became effective on 1 January 2026.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Certain requirements apply only to qualifying businesses and processing activities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            California Privacy Protection Agency (CPPA)+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.6 HIPAA — Health Information Protection</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            United States — Healthcare
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HIPAA stands for Health Insurance Portability and Accountability Act.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It includes requirements concerning protected health information handled by regulated healthcare entities and their business associates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A particularly important part for data engineers is the HIPAA Security Rule.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It protects electronic protected health information (ePHI).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Security Rule requires administrative, physical, and technical safeguards to protect confidentiality, integrity, and availability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HHS.gov+1
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. What is PHI?</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protected Health Information includes individually identifiable health information that falls within HIPAA's scope.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples may include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Patient records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Medical history.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Diagnostic information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Treatment records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Certain insurance information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Individually identifiable healthcare information.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. HIPAA Security Safeguards</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Administrative safeguards
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security management processes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Risk analysis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workforce security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security training.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident response.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contingency planning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Physical safeguards
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Facility access controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workstation security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Device controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Media disposal.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technical safeguards
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrity controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transmission security.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Data Engineering Example</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A healthcare organization stores patient information in a cloud data lake.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The data engineering platform should:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restrict access to approved healthcare systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protect ePHI during transmission.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply suitable encryption and access restrictions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain audit trails.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Establish appropriate processor/vendor agreements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement backup and recovery procedures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate compliance with the applicable HIPAA requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HIPAA does not apply to every application or organization that happens to store health-related information. Its scope depends on the applicable covered-entity and business-associate relationships and other legal definitions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.7 PCI DSS — Payment Card Industry Data Security Standard</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PCI DSS is an industry security standard designed to protect payment card information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is relevant to organizations that store, process, or transmit payment account data within the standard's scope.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important concepts include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure system configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protection of stored account data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption during transmission.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Vulnerability management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security testing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logging and monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security governance.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An online shopping platform processes card payments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Its payment architecture should avoid unnecessarily storing sensitive payment authentication information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Where possible, use a suitable PCI-compliant payment provider and tokenization architecture to reduce exposure and the scope of systems handling cardholder data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important: Using a payment provider does not automatically eliminate every PCI DSS responsibility for the merchant. Scope depends on how the payment integration is implemented.
          </p>
        </div>
      );
    case 19:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Data Governance &amp; Ownership
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              19. Data Governance Frameworks
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Enterprise Data Management
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.1 What is Data Governance?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data governance is the system of policies, responsibilities, processes, standards, and controls through which an organization manages its data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It defines how data is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Created.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Classified.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stored.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accessed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shared.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Quality-checked.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retained.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deleted.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            In simple terms:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data governance establishes who is responsible for data and how that data must be managed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an organization has ten departments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each department stores customer information separately.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Over time:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer IDs are inconsistent.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Field names differ.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Duplicate customer records exist.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Teams use different definitions of revenue.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Nobody knows which dataset is authoritative.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access permissions become inconsistent.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data governance establishes common rules to address these problems.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.2 Why Do We Need Data Governance?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Without governance, an organization may experience:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Poor data quality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data duplication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inconsistent business definitions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Uncontrolled access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unclear ownership.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compliance gaps.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unnecessary data retention.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data-sharing risks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data governance provides accountability and consistent data-management practices.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.3 Core Components of Data Governance</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Data Policies</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define organizational rules for data management.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification policy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption policy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access-control policy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data retention policy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data sharing policy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privacy policy.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Data Standards</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Establish common definitions and technical conventions.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standard customer ID format.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standard date format.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standard country codes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standard naming conventions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standard metadata definitions.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Data Quality</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines whether information meets the organization's quality requirements.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important dimensions include:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accuracy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Completeness.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consistency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Uniqueness.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Timeliness.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Metadata Management</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata describes data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            &#123; "table": "customer_orders", "owner": "commerce_data_team", "format": "parquet", "classification": "confidential", "contains_personal_data": true, "update_frequency": "daily", "source": "orders_database" &#125;
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Data Lineage</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tracks where data originated and how it moves through the system.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>F. Data Catalog</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provides a searchable inventory of datasets and their descriptions.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue Data Catalog.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Microsoft Purview.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Dataplex.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Atlas.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            G. Data Lifecycle Management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines the process of collecting, storing, using, archiving, and deleting data.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.4 Data Governance Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Data Governance: Policies, Catalogs, and Lineage That Work</span>
            <a href="https://images.openai.com/static-rsc-4/RLIGfeO8_nPJwMUvSGq8SW8g6runBX-ICBI6OgyMV7Nsr_sBklM37opVFDekqvDQjmX7buxN0CTyGZ_G571HllW68cX-n6Or3RZhP8lIEARoMTSclpB2DDpdMuq-DFXjrzXNYUVpB7z9jCk3Yy3x_U0-g3Rqgf1I-j-cYpaFVV8?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">ml4devs.com</span>
            <a href="https://www.ml4devs.com/what-is/data-governance/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A governance architecture may contain:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Governance
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v v v Policies Ownership Metadata Quality
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Platforms
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v v Databases Data Lake Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Analytics
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance applies across all these systems rather than being limited to the data warehouse.
          </p>
        </div>
      );
    case 20:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Data Governance &amp; Ownership
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              20. Important Data Governance and Security Frameworks
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            There are multiple standards and frameworks used by professional organizations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understanding their purposes is more important than memorizing their names.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.1 DAMA-DMBOK</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DAMA-DMBOK stands for Data Management Body of Knowledge.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It provides a broad knowledge framework for professional data management.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important areas include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data governance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data modeling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data storage and operations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data integration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document and content management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reference and master data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data warehousing and business intelligence.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For a data engineer, it helps explain how security, governance, quality, architecture, and metadata fit into overall data management.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.2 NIST Cybersecurity Framework (CSF) 2.0</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NIST CSF 2.0 is a cybersecurity risk-management framework.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It has six major functions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NIST CSF 2.0
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GOVERN
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Establish cybersecurity strategy, responsibilities and policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IDENTIFY
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understand systems, assets, data and risk.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PROTECT
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement access controls and safeguards.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DETECT
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify suspicious activities and incidents.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RESPOND
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contain and manage security incidents.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RECOVER
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restore systems and improve resilience.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The addition of GOVERN as a core function emphasizes cybersecurity leadership, strategy, risk management, roles, and accountability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NIST CSF 2.0 is designed to help organizations of different sizes manage cybersecurity risks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NIST Publications+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.3 NIST SP 800-53</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NIST SP 800-53 is a catalog of security and privacy controls for information systems and organizations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It includes control areas such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access Control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identification and Authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit and Accountability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configuration Management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident Response.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Risk Assessment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            System and Communications Protection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Personally Identifiable Information Processing and Transparency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contingency Planning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is particularly useful for organizations developing detailed control requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is a control catalog, not a single universal implementation that every company must adopt unchanged. Controls should be selected and tailored according to the organization's risk and applicable obligations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NIST Computer Security Resource Center+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.4 NIST Privacy Framework</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The NIST Privacy Framework helps organizations identify and manage privacy risks.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Its five functions are:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Function
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purpose
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify-P
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understand data processing and privacy risks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Govern-P
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Establish privacy governance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Control-P
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Enable appropriate management of data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Communicate-P
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain how information is processed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protect-P
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protect personal information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It helps align technical architecture with privacy requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The NIST Privacy Framework is voluntary guidance, not a privacy law. NIST has also established development work relating to Privacy Framework 1.1, so engineers should use its current official resource center when selecting materials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NIST+2
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.5 ISO/IEC 27001</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ISO/IEC 27001 defines requirements for establishing, implementing, maintaining, and continuously improving an Information Security Management System (ISMS).
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An ISMS includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Risk assessments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Employee responsibilities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Auditing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous improvement.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization can choose to pursue independent certification to demonstrate conformity with the standard.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The currently published main edition is ISO/IEC 27001:2022, with Amendment 1:2024.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information security management systems+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.6 ISO/IEC 27701</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ISO/IEC 27701 is a Privacy Information Management System (PIMS) standard.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It addresses the management of personally identifiable information by organizations acting as controllers and processors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The 2025 edition introduced an updated standalone management-system standard.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It helps organizations establish and continuously improve their privacy management practices.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Requirements and guidance+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.7 SOC 2</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SOC 2 is an independent examination and reporting approach based on the AICPA Trust Services Criteria.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is commonly relevant to technology companies, SaaS providers, and service organizations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It assesses controls relating to selected trust-service categories such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing integrity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Confidentiality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privacy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SOC 2 reports provide information about an organization's controls to customers and other stakeholders.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important distinction:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SOC 2 Type I examines control design at a point in time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SOC 2 Type II examines control design and operating effectiveness over a specified period.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SOC 2 is not a government privacy law or an ISO-style certification.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.8 Comparing Frameworks</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Framework</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Main purpose</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Nature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">DAMA-DMBOK</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Enterprise data management knowledge</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Professional body of knowledge</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">NIST CSF 2.0</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cybersecurity risk management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Voluntary framework</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">NIST SP 800-53</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Security and privacy controls</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Control catalog</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">NIST Privacy Framework</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Privacy risk management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Voluntary framework</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ISO 27001</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Information security management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">International standard</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ISO 27701</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Privacy information management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">International standard</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">SOC 2</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Service organization controls reporting</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Independent attestation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GDPR
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Personal data protection
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regulation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DPDP Act
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Digital personal data protection in India
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Law
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The key lesson: A company implementing ISO 27001 is not automatically compliant with GDPR or the DPDP Act. Management systems and security certifications support compliance, but organizations must separately assess the applicable legal obligations.
          </p>
        </div>
      );
    case 21:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Data Governance &amp; Ownership
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              21. Data Ownership and Accountability
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.1 What is Data Ownership?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ownership refers to the assignment of responsibility and decision-making authority over datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Every important organizational dataset should have clearly defined responsibility.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Without ownership, nobody may know:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who approves access?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who defines data quality requirements?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who resolves data issues?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who approves external sharing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who decides retention requirements?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Who is accountable for appropriate usage?
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.2 Important Governance Roles</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Data Owner</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The individual accountable for the business use, access policy, and overall governance of a dataset.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Head of Sales is designated as the owner of sales business data.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Responsibilities:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define business meaning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Approve access requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Establish quality expectations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Approve permitted sharing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support retention decisions.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Data Steward</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data steward manages and supports data governance standards.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Responsibilities:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain data definitions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitor data quality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manage metadata.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resolve data consistency issues.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Coordinate governance activities.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Data Custodian</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data custodian is responsible for the technical operation and protection of data assets.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A cloud infrastructure team maintains the storage platform and backup configuration.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Responsibilities:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage administration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technical access controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure operations.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Data Engineer</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The data engineer implements the data pipelines and technical controls.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Responsibilities:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure data ingestion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transformation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technical documentation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data deletion workflows where required.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Data Protection Officer (DPO)</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A DPO performs specified privacy-related responsibilities where required by applicable law or organizational structure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Responsibilities may include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Advising on privacy obligations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Supporting data protection assessments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring compliance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Acting as a contact point for privacy matters.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.3 Governance Responsibility Example</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Activity</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Responsible role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Define sales data meaning</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data Owner</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Maintain sales metadata</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data Steward</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Configure S3 permissions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data Custodian / Cloud Security</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Build sales ETL pipeline</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data Engineer</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Approve privacy requirements</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Privacy team / applicable decision-maker</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Audit controls</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Internal audit / security audit team</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            One person may perform multiple roles in a smaller organization, but responsibilities should still be clearly documented.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.4 Data Governance RACI Model</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            RACI stands for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Responsible.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accountable.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consulted.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Informed.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Activity</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Owner</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Steward</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Engineer</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Security</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Define data classification</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">A</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">R</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Build ETL pipeline</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">A</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">R</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Configure access</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">A</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">R</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">R/C</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Validate dataset quality</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">A</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">R</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">R</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">I</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security audit
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            I
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A/R
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A = Accountable, R = Responsible, C = Consulted, I = Informed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The exact responsibility model should be customized to the organization.
          </p>
        </div>
      );
    case 22:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 8 · Pipeline Architecture &amp; Incident Response
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              22. Secure Data Pipeline Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Complete Architecture Design
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This section brings together everything we have learned.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A professional data engineer must know how to design a pipeline where security, privacy, governance, and compliance are incorporated into every processing stage.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.1 What is a Secure Data Pipeline?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A secure data pipeline is a data-processing system designed to protect information while it moves from source systems through ingestion, storage, transformation, analytics, and sharing.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It must provide:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identity verification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access restrictions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive data handling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access auditing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention and deletion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident detection and recovery.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.2 Example: Secure E-Commerce Data Platform</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine an e-commerce company processing:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer profiles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Orders.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Website activity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delivery records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            We will design a secure cloud data engineering architecture using AWS.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.3 Complete Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Handling sensitive data - AWS Prescriptive Guidance</span>
            <a href="https://images.openai.com/static-rsc-4/Ct-9MXVqzSZNUOdRTfl1h7JO-9rtuzGDEI3xVzosfnAmaWIqoQJ9HpUNYO2xHssGf4Jf2DxaTWC-FuUQx0jcCGtaUbb9ZzE2oYFoB-JAHL3eFuHOzHEbYRQA6flQhQ4hsEMcQLZasgKuQe-rBkEn9wn7v8cPSWsoumrK1Sd5qGw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">docs.aws.amazon.com</span>
            <a href="https://docs.aws.amazon.com/prescriptive-guidance/latest/defining-bucket-names-data-lakes/sensitive-data.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA SOURCES
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Orders Payments Database Database Provider
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                SECURE INGESTION
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Authentication + IAM Roles
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                TLS Encryption
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AMAZON S3 RAW ZONE
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v S3 ENCRYPTION AMAZON MACIE AWS KMS Data Discovery
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS GLUE ETL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v VALIDATION DATA MASKING AND QUALITY / TOKENIZATION
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                CURATED S3
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                GLUE CATALOG
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                LAKE FORMATION ACCESS CONTROL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v ATHENA REDSHIFT
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ANALYTICS CROSS-CUTTING SECURITY: IAM · KMS · CloudTrail · Monitoring Data Governance · Retention · Auditing
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.4 Understanding the Architecture Step by Step</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 1 — Secure Data Ingestion</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data comes from multiple source systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Before ingestion:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authenticate the source application.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorize the ingestion identity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use encrypted network communication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate incoming data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Check expected schemas.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid collecting unnecessary personal information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, an order ingestion process may require the order ID and purchase amount but not the customer's account password.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 2 — Data Classification</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            After ingestion, identify the sensitivity of incoming datasets.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "dataset": "customer_orders",
  "classification": "confidential",
  "contains_pii": true,
  "owner": "commerce_data_team",
  "encryption_required": true
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This allows security policies to be linked with dataset metadata.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 3 — Secure Storage</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store raw data in Amazon S3.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Apply:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Block Public Access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Least-privilege bucket policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Appropriate encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Versioning where required.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lifecycle policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restricted administrative access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS recommends policy-based access management, disabling unnecessary ACL use, and maintaining protective S3 configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Simple Storage Service
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 4 — Sensitive Data Discovery</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use tools such as Amazon Macie to discover sensitive information in supported S3 datasets.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A file might unexpectedly contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            name email phone government_id
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The discovery process can identify potentially sensitive records and help the team review whether their storage location and permissions are appropriate.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 5 — Secure ETL Processing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue or EMR performs transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The processing identity receives only the permissions it needs.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The pipeline should:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate source schemas.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reject invalid data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid logging sensitive values.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mask unnecessary personal information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use approved encryption keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protect temporary datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Record processing metadata.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 6 — Data Masking and Pseudonymization</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose the sales analytics team needs purchase information but does not need customer emails.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline can create a separate analytical dataset using pseudonymous customer identifiers.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Raw Dataset
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Identification
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Pseudonymization
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Analytical Dataset
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The identity mapping should be separately protected and restricted to an appropriate service or authorized team.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 7 — Data Governance and Access Control</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use the Glue Data Catalog to document datasets and AWS Lake Formation to manage supported fine-grained data access.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing analysts can query approved marketing attributes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Finance analysts can query approved financial records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineers can run authorized transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security personnel can review relevant access logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Lake Formation supports granular permissions for governed data-lake access.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 8 — Secure Analytics</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Athena and Redshift provide analytical access.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The organization should ensure that:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analysts receive only approved datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive columns are protected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query execution is monitored.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Results are not shared unnecessarily.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            External access follows appropriate permissions.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 9 — Auditing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CloudTrail and other appropriate logging tools record access and administrative activities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A centralized security team reviews important events and investigates suspicious activity.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 10 — Retention and Deletion</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company maintains a documented retention policy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When a valid erasure request or retention trigger occurs, the organization locates the relevant data across:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 zones.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Warehouses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            External processors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relevant backups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deletion or retention exceptions must follow the applicable legal and organizational requirements.
          </p>
        </div>
      );
    case 23:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 8 · Pipeline Architecture &amp; Incident Response
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              23. Secure Data Pipeline Implementation — Practical Examples
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now let's implement selected security concepts in code.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.1 Example: Pseudonymizing Customer Identifiers with HMAC</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an analytics pipeline needs a consistent customer reference without exposing original customer IDs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A cryptographic hash of a predictable customer ID can be vulnerable to guessing attacks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A keyed HMAC provides a stronger approach when the secret key remains protected.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import hmac
import hashlib
import os

def pseudonymize_customer(customer_id):
    key = os.environ.get("PSEUDONYMIZATION_KEY")
    if not key:
        raise RuntimeError("Missing pseudonymization key")
    digest = hmac.new(
        key.encode("utf-8"),
        customer_id.encode("utf-8"),
        hashlib.sha256
    ).hexdigest()
    return digest

customer_id = "C001"
token = pseudonymize_customer(customer_id)
print(token)`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This produces a deterministic pseudonymous identifier when the same key and input are used.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important engineering considerations:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store the key in a secure secrets manager.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Never log the secret.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restrict access to the key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Plan key rotation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version the pseudonymization scheme.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Assess linkability across datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Do not treat HMAC output as anonymization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Because the same input and key produce the same token, different datasets can be correlated. This may be desirable for controlled analytics, but it is also a privacy consideration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.2 Example: Data Validation Before Loading</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a data pipeline receives customer information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Before loading it into the warehouse, validate the required fields.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd

def validate_customer_data(data):
    required_columns = ["customer_id", "customer_email", "created_at"]
    missing = [column for column in required_columns if column not in data.columns]
    if missing:
        raise ValueError(f"Missing columns: {missing}")
    if data["customer_id"].isnull().any():
        raise ValueError("Customer ID cannot be null")
    if not data["customer_id"].is_unique:
        raise ValueError("Duplicate customer IDs detected")
    return True`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This validates some technical data-quality requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It does not prove that the email addresses are valid, that collection was lawful, or that the dataset is authorized for its intended use. Those require separate validation.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.3 Example: Column-Level Data Protection</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose the organization maintains a table:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE customers (
    customer_id VARCHAR(50),
    name VARCHAR(100),
    email VARCHAR(255),
    city VARCHAR(100),
    total_purchase DECIMAL(12,2)
);`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The analytics team only requires:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer ID.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            City.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Total purchase.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of giving access to the full table, expose an approved view.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE VIEW customer_analytics AS
SELECT
    customer_id,
    city,
    total_purchase
FROM customers;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The organization then grants the analyst permission to query the approved view rather than the sensitive underlying table.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A view alone does not provide security if the analyst can also query the original table directly. The underlying permissions must enforce the restriction.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.4 Example: Access Control Decision</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider a policy for accessing a dataset.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`def authorize_access(department, classification, action):
    if department != "finance":
        return False
    if classification != "internal":
        return False
    if action != "read":
        return False
    return True`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is a small demonstration of authorization logic.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production authorization must be implemented and enforced at the data platform or trusted policy enforcement layer so that users cannot bypass the application-level check.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.5 Example: Secure Pipeline Logging</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive values should not appear in application logs.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Bad implementation:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            logger.info( "Processing customer email: %s", customer_email )
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Better implementation:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            logger.info( "Processing customer record: %s", customer_id )
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Even identifiers and metadata may be sensitive in certain contexts. Choose a logging policy appropriate to the data classification, and avoid logging secrets, full personal records, or unnecessary direct identifiers.
          </p>
        </div>
      );
    case 24:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 8 · Pipeline Architecture &amp; Incident Response
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              24. Security Incident Management and Data Breach Response
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Although security incidents can involve many systems, data engineers should understand the incident response lifecycle.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.1 What is a Data Breach?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A personal data breach involves unauthorized or accidental access, disclosure, alteration, destruction, acquisition, or loss of access to personal information, as defined by applicable law.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public exposure of a customer data bucket.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unauthorized database access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stolen application credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive information sent to the wrong recipient.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A compromised data processor.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accidental deletion of important personal information.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.2 Security Incident Response Lifecycle</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A common incident response process includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Preparation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detection and analysis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Containment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Eradication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Post-incident improvement.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">The 5 Phases of Incident Response - A Complete Guide | SigNoz</span>
            <a href="https://images.openai.com/static-rsc-4/tX4a2eLuBKCnVuKVkp7lU57JfiVEAV1gzqapBdcQIDlsfw-tNQI-MvdAII0nxwDO4Gy5yQog3dFmptLaoT6DNQq9qA1TG6OLa8ZdOQ1eGgvQW61LKgeF3aygLiAs27ivETer915MTB9Gmq58-9eioHq00in4CCzVbL21mV_geRc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">signoz.io</span>
            <a href="https://signoz.io/guides/incident-response-cycle/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.3 Example: AWS S3 Customer Data Exposure</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an engineer accidentally configures a customer data bucket for public access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A security monitoring process detects the configuration.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The response should include:
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 1 — Detection</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify the exposed bucket and affected information.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 2 — Containment</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove unauthorized public access and restrict access to approved identities.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 3 — Investigation</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Review available logs to understand:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When the exposure began.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which objects were affected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether objects were accessed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which configurations changed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which identity performed the operation.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 4 — Impact Assessment</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Determine:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which individuals may be affected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which information was exposed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether other datasets were involved.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether a processor or external party was involved.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 5 — Notification Assessment</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The legal, privacy, and security teams determine applicable breach notification obligations and timing.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 6 — Recovery</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restore secure configurations and verify that the systems operate correctly.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 7 — Lessons Learned</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Implement preventive controls:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 Block Public Access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Policy checks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure scanning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security alerts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Periodic access reviews.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.4 Incident Response Metrics</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Organizations may monitor:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Metric</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">MTTD</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Mean Time to Detect</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">MTTA</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Mean Time to Acknowledge</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">MTTC</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Mean Time to Contain</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">MTTR</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Mean Time to Recover or Resolve</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The exact definition of MTTR varies by organization, so metrics should have clear documented definitions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The objective is to identify issues earlier, reduce their impact, and improve recovery.
          </p>
        </div>
      );
    case 25:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Capstone &amp; Exercises
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              25. Major Practical Project — Build a Secure and Governed Cloud Data Lake
            </h2>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Major Capstone Project</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS + Data Privacy + Governance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This project combines the concepts from Modules 18, 19, and 20.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.1 Project Objective</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build a secure e-commerce data lake on AWS that collects, processes, stores, and analyzes customer and transaction information while implementing privacy and governance controls.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Business requirements</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An e-commerce company needs to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store customer information securely.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store order and transaction information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Classify datasets according to sensitivity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restrict data access by role.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encrypt stored information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protect credentials and encryption keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mask or pseudonymize customer identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain audit logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support controlled analytical access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement retention and deletion policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document data ownership.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support security incident investigation.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.2 Project Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA SOURCES
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customers Orders Products
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                SECURE INGESTION
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                IAM + TLS
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AMAZON S3 RAW ZONE
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v AWS KMS AMAZON MACIE Encryption Sensitive Data Discovery
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS GLUE ETL PROCESSING
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v DATA QUALITY PSEUDONYMIZATION VALIDATION / MASKING
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AMAZON S3 CURATED ZONE
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                GLUE CATALOG
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                LAKE FORMATION ACCESS CONTROL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v ATHENA REDSHIFT
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BUSINESS ANALYTICS SECURITY AND GOVERNANCE IAM · KMS · CloudTrail · Macie Classification · Ownership Retention · Access Auditing
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.3 Step 1 — Prepare Sample Data</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create three sample datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            customers.csv
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            customer_id,name,email,phone,city C001,Rahul,rahul@example.com,9876543210,Pune C002,Amit,amit@example.com,9123456789,Mumbai C003,Priya,priya@example.com,9988776655,Delhi
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders.csv
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            order_id,customer_id,amount,status 101,C001,500,completed 102,C002,700,cancelled 103,C003,900,completed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            products.csv
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            product_id,product_name,category,price P001,Laptop,Electronics,50000 P002,Phone,Electronics,25000 P003,Chair,Furniture,5000
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.4 Step 2 — Classify the Datasets</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a classification document.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Dataset</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Classification</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Personal data</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Confidential</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restricted team</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Orders</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Confidential</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Potentially</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Approved analysts and systems</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Products</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Internal/Public depending on release</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">No</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Broad or public as approved</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Document:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dataset owner.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Classification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business purpose.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Approved users.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sharing restrictions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.5 Step 3 — Create Secure S3 Storage</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Create:</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`secure-ecommerce-data-lake/ raw/ customers/ orders/ products/ trusted/ customers/ orders/ products/ curated/ customer_analytics/ sales_analytics/`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Configure:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Block Public Access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Appropriate bucket and IAM policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Versioning where required.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lifecycle management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restricted access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit logging.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.6 Step 4 — Configure IAM Roles</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create appropriate roles.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Role
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Permissions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Ingestion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write approved raw data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Glue ETL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read raw data, write trusted and curated data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Analyst
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read approved analytical datasets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security Auditor
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read relevant security logs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Administrator
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manage approved security and governance configurations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Do not assign administrator permissions simply to make the project work.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.7 Step 5 — Implement Encryption</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configure encryption for appropriate S3 objects using the selected encryption method.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For KMS-based encryption:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create an appropriate KMS key.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define its key policy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Grant use to the required processing identities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restrict administrative permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Enable supported rotation settings.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitor key usage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Test the full workflow to ensure authorized services can decrypt the objects they need.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.8 Step 6 — Detect Sensitive Information</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use Amazon Macie or a controlled scanning process to identify potentially sensitive data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Review:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Email fields.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Phone numbers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Government identifiers, if present.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Financial information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unexpected sensitive columns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Update dataset classifications and access policies when necessary.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.9 Step 7 — Implement Data Masking</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a masked customer dataset for general analytics.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Customer ID</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Name</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">City</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C001</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Rahul</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">r****@example.com</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pune</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C002</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amit
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            a***@example.com
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mumbai
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            C003
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Priya
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            p****@example.com
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delhi
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Only authorized systems should access complete customer information.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.10 Step 8 — Build Glue ETL</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Build a processing job that:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reads the raw datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validates the schema.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Removes invalid records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Performs required transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Applies pseudonymization or masking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Writes curated Parquet datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Registers or updates metadata.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.11 Step 9 — Configure Access Governance</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use the Glue Data Catalog and AWS Lake Formation for appropriate catalog and data-lake permissions.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales analysts can query sales datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer support can access only approved customer details.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing analysts can work with masked customer analytics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security teams can review access events.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate that unauthorized access attempts fail.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.12 Step 10 — Configure Access Auditing</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use CloudTrail and appropriate data-event configuration to capture relevant access activity.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Record:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Operation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Timestamp.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Result.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relevant source information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ensure the audit system is separately protected.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.13 Step 11 — Implement Retention and Deletion</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define the retention schedule for each dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a controlled workflow for handling valid correction and erasure requests.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Test a deletion request by tracing a sample customer through:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Raw storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Curated storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Derived datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relevant processors and backups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document any legally required retention exceptions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.14 Step 12 — Implement Monitoring</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Monitor:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unauthorized access attempts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption configuration changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Public-access policy changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unusual data access volumes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data discovery findings.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failed ETL jobs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unexpected data changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention and deletion execution.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>25.15 Final Project Deliverables</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Your capstone should contain:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Deliverable</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Architecture diagram</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Complete security architecture</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">S3 data lake</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Organized and protected storage</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Classification register</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Dataset sensitivity</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">IAM configuration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Access permissions</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">KMS configuration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Encryption controls</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Glue ETL jobs</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Processing and masking</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data Catalog</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Dataset metadata</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Governance policy</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Ownership and access</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Audit records</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Access traceability</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Retention policy</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data lifecycle</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Deletion workflow</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Controlled erasure</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Incident procedure</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Security response</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technical and governance evidence
          </p>
        </div>
      );
    case 26:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Capstone &amp; Exercises
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              26. Additional Advanced Topics
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Once you have completed the core practical work, study these additional areas.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>26.1 Threat Modeling</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Threat modeling identifies potential threats against a system before or during implementation.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For a data platform, examine:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            External attackers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compromised employees' accounts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Insider misuse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application vulnerabilities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Misconfigured storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Insecure third-party integrations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compromised credentials.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A commonly used approach is STRIDE:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Category</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Meaning</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Spoofing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pretending to be another identity</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Stolen service credentials</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Tampering</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Unauthorized modification</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Changing transaction records</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Repudiation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Denying an action</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Missing audit evidence</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Information Disclosure</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Exposing confidential data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Public S3 bucket</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Denial of Service</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Making services unavailable</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Overwhelming ingestion system</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Elevation of Privilege</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Obtaining excessive permissions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Compromised IAM role</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Threat modeling helps engineers translate security risks into practical controls.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>26.2 Data Leakage Prevention (DLP)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DLP involves technologies and policies that identify and prevent unauthorized disclosure of sensitive information.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detecting government identity numbers in outgoing files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Preventing unauthorized uploads of customer databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Blocking sensitive attachments from leaving an organization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identifying accidental public sharing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring movement of confidential datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examples of relevant technologies include Microsoft Purview and supported cloud data protection tools.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>26.3 Data Residency and Data Sovereignty</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are important concepts in cloud architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data residency refers to the geographical location where data is stored or processed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data sovereignty concerns the laws and jurisdictional authority that may apply to data because of its location, the parties involved, or other legal connections.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization serves Indian customers but stores data in a cloud region outside India.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It must assess applicable data protection, contractual, sectoral, and cross-border transfer requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Do not assume that every country requires all personal information to remain within its borders, or that selecting a local region automatically establishes compliance.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>26.4 Third-Party Risk Management</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizations frequently rely on external data processors and vendors.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud providers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment providers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytics platforms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer support vendors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing platforms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data integration services.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A third-party risk assessment should consider:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What data will be shared?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the vendor's role?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What security controls are implemented?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What contractual safeguards apply?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Where is data processed?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How are breaches handled?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How is data deleted after service termination?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can the vendor use subcontractors?
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>26.5 Insider Threat Management</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An insider threat may involve an employee, contractor, or other authorized individual misusing access.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Examples:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Downloading unauthorized customer records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sharing confidential reports externally.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Modifying data without approval.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Misusing privileged administrator access.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Appropriate controls include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Least privilege.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Segregation of duties.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audit logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Periodic access reviews.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privileged access management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Anomaly detection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Employee security awareness.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>26.6 Secure AI and Machine Learning Data Governance</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Modern data platforms frequently supply data to machine learning systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This introduces additional privacy and security concerns.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Study:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Training data provenance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PII identification in training datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive attribute handling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data poisoning risks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Model memorization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Membership inference.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Model inversion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Privacy-preserving analytics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dataset licensing and permitted uses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention of training data and model artifacts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, removing a student's account from a platform does not automatically resolve every legal or technical issue relating to a model previously trained using that student's information. The organization must assess its applicable obligations and technical architecture.
          </p>
        </div>
      );
    case 27:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Capstone &amp; Exercises
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              27. Module 20 — Important Interview Questions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These questions cover the fundamentals, implementation, cloud architecture, and privacy regulations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Security Fundamentals
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data security?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the CIA Triad.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between data security and data privacy?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is defense in depth?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Zero Trust Architecture?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are the common threats to a data lake?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why is security important in data engineering?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a security threat model?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Classification and PII
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data classification?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain public, internal, confidential, and restricted data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is PII?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between direct and indirect identifiers?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is sensitive personal information?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is re-identification risk?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How can you classify millions of records automatically?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data minimization?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access Control
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is authentication?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is authorization?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain authentication vs authorization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is multi-factor authentication?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is RBAC?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is ABAC?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compare RBAC and ABAC.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the principle of least privilege?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is privilege escalation?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is service-to-service authentication?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption and Secrets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is encryption?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain symmetric and asymmetric encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is AES?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between encryption at rest and in transit?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is TLS?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is AWS KMS?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain envelope encryption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are DEK and KEK?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is key rotation?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why should credentials never be hardcoded?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is secrets management?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compare AWS Secrets Manager and Parameter Store.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Privacy Techniques
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data masking?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compare static and dynamic masking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is anonymization?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is pseudonymization?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compare anonymization and pseudonymization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is tokenization?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain k-anonymity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is differential privacy?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are privacy-enhancing technologies?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Auditing and Governance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data access auditing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between CloudTrail and CloudWatch?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is AWS Macie?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is AWS Lake Formation?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a data retention policy?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain logical and physical deletion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data lineage?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data governance?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are data owners and data stewards?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Data Protection Officer?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regulations and Architecture
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the DPDP Act, 2023?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain Data Fiduciary and Data Processor.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are the key principles of GDPR?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is CCPA/CPRA?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is HIPAA?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is PCI DSS?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is ISO/IEC 27001?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is ISO/IEC 27701?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compare NIST CSF and NIST Privacy Framework.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Privacy Impact Assessment?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Data Protection Impact Assessment?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you design a secure AWS data lake?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you handle a customer deletion request across multiple systems?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you investigate a public S3 bucket exposure?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you implement RBAC and ABAC in a production data platform?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you securely share datasets with an external organization?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What happens if an encryption key is lost?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you design a privacy-preserving analytics platform?
          </p>
        </div>
      );
    case 28:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Capstone &amp; Exercises
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              28. Practical Assignments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Complete these assignments to develop implementation skills.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">No.</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Assignment</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Expected outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">1</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Classify an e-commerce dataset</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data classification register</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">2</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Identify PII and indirect identifiers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Sensitive information inventory</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">3</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Create an authentication and authorization model</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Identity access design</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">4</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Implement an RBAC permission matrix</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Role-based access system</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">5</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Design ABAC policies</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Attribute-based access model</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">6</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Implement least-privilege IAM policies</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restricted AWS access</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">7</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Enable encryption on S3 data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Protected data storage</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">8</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Configure AWS KMS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Key-management implementation</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">9</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Retrieve credentials through Secrets Manager</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Secure application authentication</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">10</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Implement static and dynamic masking</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Protected analytical datasets</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">11</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Implement pseudonymization using HMAC or tokenization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Privacy-preserving identifiers</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">12</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Compare anonymization techniques</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Re-identification risk report</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">13</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Design a secure external data-sharing process</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Controlled sharing architecture</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">14</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Configure CloudTrail auditing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Access audit records</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">15</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Design a data retention policy</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Retention matrix</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">16</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Implement a customer deletion workflow</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Controlled erasure process</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">17</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Conduct a Privacy Impact Assessment</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Privacy risk report</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">18</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Compare DPDP, GDPR, and CCPA</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Regulatory comparison document</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">19</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Create a data governance framework</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Ownership and stewardship model</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">20</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Design a secure end-to-end data pipeline</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Production security architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 29:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Capstone &amp; Exercises
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              29. Recommended Learning Resources
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use official documentation to deepen your understanding.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">ISO 27001 vs NIST (2026): Key Differences &amp; Use Cases</span>
            <a href="https://images.openai.com/static-rsc-4/IDbCQSvcQMk2rsSIcfAHQvMevpjZI2FK42h6LDQbqvKFWhpeYf4OtZ1F72tcm4J8rHFQg9oANXkQzqY0A7B8jWx7vQc4g5Um4D3TJwahad6vJbEX5tMIuaU0E7EXXvhzPK3HExRO44qo304FuZXGXrj4qUQznD6qWXH1yYiOzGA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NIST
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security controls, privacy engineering, cybersecurity frameworks, and Zero Trust.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">NIST Cybersecurity Resources</span>
            <a href="https://www.nist.gov/cybersecurity?utm_source=chatgpt.com)[Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">High Performance Computing - CDAC Software Training and Development Centre</span>
            <a href="https://images.openai.com/static-rsc-4/9WNqtlAoxOB48ul9mBaATOmiLwGdF7gtv5sLomSzu62Rek_qM4mz9PXhHQg9d_mqvaDzS_u1u_AKo_EkofF0xxF-SF-EAZ1AHXymXzPCC56ETD4MXHY32MEFJD4RCrISiMij1neFIqQPhgdCwnoN-U9rqdhS9JjiAwQJGCb8R8U?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Government of India — MeitY
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Study the DPDP Act and Rules, official notifications, and implementation guidance.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Ministry of Electronics and Information Technology</span>
            <a href="https://www.meity.gov.in/?utm_source=chatgpt.com)[India Code — Official Legislation](https://www.indiacode.nic.in/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">The D55 Blueprint for Mastering AWS Security</span>
            <a href="https://images.openai.com/static-rsc-4/jncbFOel1CQE4BIqTgRivSkYo-tFdPbZ1C0vgxw9DmB2pPaKMl2OWKuBFAd9a6sBOpLwo12Oiwmqb39c0of3sMaupNM-HrMK41sFecfRNLwab64N6qCSXLU--wVOaYJZBPYdxGNNCL8R0Tj4j8VrBr2EwwNIuO7ljE8hoeorxRo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Security Documentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn IAM, KMS, S3 security, Macie, Lake Formation, CloudTrail, and security architecture.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">AWS Security Documentation</span>
            <a href="https://docs.aws.amazon.com/security/?utm_source=chatgpt.com)[S3 Security Best Practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Medrais</span>
            <a href="https://images.openai.com/static-rsc-4/yd8jEOI57cq0EPTQlXbn0dDcS-fSCF8jYC8InFjCkNjtyZhb8U-3xy1b1b7y_A55ghS7f0AQSLLNHI2XNIDsjWLyuJQUYx9Ygi_TOYVShssDoD5RGyxWtYCQFVxJDiLNUD-e31ak_f2alJYccofYBlvvANQy3KSsEl7wFHgw_f8?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            European Commission
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Study GDPR principles, data protection, personal information rights, and international transfers.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">European Data Protection Resources</span>
            <a href="https://commission.europa.eu/law/law-topic/data-protection_en?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">ISO Logo PNG Vector (EPS) Free Download</span>
            <a href="https://images.openai.com/static-rsc-4/qnyKlnh48yIGk0PSBRVNKVdyxC40o7P5wrQwp-wHEi09VYQGlThCN9zwXR_ceb_af9grarzhHP8REwzLuv-khxMdpxBiHyuJZmocMbgc92QOWvQy_6GhC9S2PG8KzRB4i6IB_lEAbbnKI6ytRCGhnFs7C6FGWM8dH5D1afYz2sM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            International Organization for Standardization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn international information security and privacy management standards.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">ISO/IEC 27001:2022</span>
            <a href="https://www.iso.org/standard/27001?utm_source=chatgpt.com)[ISO/IEC 27701:2025](https://committee.iso.org/standard/27701?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">California Privacy Protection Agency Proposes Rules for Automated Decisionmaking Technology - Employee or Independent Contractor?</span>
            <a href="https://images.openai.com/static-rsc-4/OCuvNrR5gSVj02rSzWK67ThTQB2LhZpJGp6Z3IFNsnAjbSTf_B-lzYgwjZVmVDMv_q3E8J653Sg0Fe1OJewT0SQEjbQN_F1ZWu85B907zmvUrRo94OZpmw7q1YZKCJl0T-S9u9KPtw7JV-vYMWtUAzgkFhgw1X8-mb7EXUqah6k?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            California Privacy Protection Agency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn CCPA requirements and regulatory updates.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">CCPA Regulations</span>
            <a href="https://cppa.ca.gov/regulations/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">File:US Department of Health and Human Services seal.svg - Wikimedia Commons</span>
            <a href="https://images.openai.com/static-rsc-4/zwQ-c5s0nkTx8uSpXY9k7lYvqgC24Jyz4DQsibHSyYBvjuDUSVekLGTZ0aWOuTxaWyzbGsBgKxxaQIOin-97PAlXvs4phJw7_CVOOgFxVTOg7Vpl2uI_JY5L5WrvdYnWFY3iKRoApaVQQWcT5RZeWGMCnaI7Slsh-9Ql-cpqZpQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            US Department of Health and Human Services
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn HIPAA Privacy and Security Rules.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">HIPAA Security Rule</span>
            <a href="https://www.hhs.gov/hipaa/for-professionals/security/index.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      );
    case 30:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Capstone &amp; Exercises
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              30. Final Module Summary
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            By completing Module 20, you should understand how to protect information and manage privacy throughout an enterprise data engineering platform.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Area</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">What you should be able to do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data security</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Understand confidentiality, integrity, and availability</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Security architecture</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Design defense-in-depth and Zero Trust systems</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data classification</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Assign sensitivity levels to datasets</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">PII</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Identify direct and indirect personal identifiers</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Authentication</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Verify users and services</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Authorization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Control access to data</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">RBAC</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Design role-based permissions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ABAC</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apply attribute-based policies</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Least privilege</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restrict unnecessary permissions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Encryption</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Protect data at rest and in transit</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Key management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Manage keys, rotation, and permissions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Secrets management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Protect credentials and API keys</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data masking</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Hide sensitive fields</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Anonymization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Reduce or remove identification risk</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Pseudonymization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Replace direct identifiers</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Secure sharing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Share information under controlled policies</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Access auditing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Track and investigate access</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Retention and deletion</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Manage the data lifecycle</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Privacy engineering</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Build privacy into system architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regulations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understand DPDP, GDPR, CCPA, HIPAA, and PCI DSS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance frameworks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply NIST, ISO, and DAMA concepts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accountability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define owners, stewards, and technical responsibilities
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure pipelines
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build protected end-to-end data platforms
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How Modules 18, 19, and 20 connect
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 18
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud Data Engineering and Cloud Platforms
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS · S3 · Glue · Athena · Redshift · EMR · Kinesis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Builds the cloud data infrastructure and processing environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 19
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataOps, Docker, CI/CD and Infrastructure as Code
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git · Docker · GitHub Actions · Terraform · Kubernetes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Makes the data infrastructure reproducible, testable, deployable, and maintainable.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 20
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Security, Governance and Privacy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM · Encryption · PII · RBAC · ABAC · GDPR · DPDP · NIST
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protects the infrastructure and information while ensuring responsible data management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production-Ready Enterprise Data Platform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scalable · Automated · Secure · Governed · Privacy-Aware · Reliable
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Your ultimate learning objective: You should be able to design a complete cloud data platform that not only processes large volumes of information but also protects personal information, restricts unauthorized access, maintains accountability, supports data rights, and follows applicable security and privacy requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A professional data engineer is responsible not only for making data available, but also for ensuring that it is used appropriately, securely, and responsibly.
          </p>
        </div>
      );
    default:
      return (
        <div className="p-8 text-center text-stone-500 font-mono text-sm">
          Select a section from the syllabus to view the specification.
        </div>
      );
  }
});

export default SecuritySection;
