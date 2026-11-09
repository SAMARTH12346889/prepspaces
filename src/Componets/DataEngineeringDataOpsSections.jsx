// projectx/src/Componets/DataEngineeringDataOpsSections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, ChevronRight, Layers, Database, Shield, Zap, Cloud, Cpu, DollarSign, Activity, GitBranch, Terminal, Box, RefreshCw } from 'lucide-react';

export const dataOpsSectionsMeta = [
  { id: 0, title: "Module 19: DataOps, Docker, CI/CD and Infrastructure as Code Overview & Roadmap", category: "Course Roadmap" },
  { id: 1, title: "1. Understanding the complete module", category: "Course Roadmap" },
  { id: 2, title: "2. Introduction to DataOps", category: "Part 1 · DataOps & Software Engineering" },
  { id: 3, title: "3. Software Engineering Practices for Data Systems", category: "Part 1 · DataOps & Software Engineering" },
  { id: 4, title: "4. Git and Version Control", category: "Part 2 · Version Control & Git Collaboration" },
  { id: 5, title: "5. Git Branching and Collaboration", category: "Part 2 · Version Control & Git Collaboration" },
  { id: 6, title: "6. Docker Fundamentals", category: "Part 3 · Docker & Containerization" },
  { id: 7, title: "7. Dockerfiles", category: "Part 3 · Docker & Containerization" },
  { id: 8, title: "8. Docker Compose", category: "Part 3 · Docker & Containerization" },
  { id: 9, title: "9. Containerizing Data Pipelines", category: "Part 3 · Docker & Containerization" },
  { id: 10, title: "10. Development, Staging, and Production Environments", category: "Part 4 · Environments, CI/CD & Testing" },
  { id: 11, title: "11. Continuous Integration and Continuous Deployment (CI/CD)", category: "Part 4 · Environments, CI/CD & Testing" },
  { id: 12, title: "12. GitHub Actions", category: "Part 4 · Environments, CI/CD & Testing" },
  { id: 13, title: "13. Automated Pipeline Testing", category: "Part 4 · Environments, CI/CD & Testing" },
  { id: 14, title: "14. Infrastructure as Code (IaC)", category: "Part 5 · Infrastructure as Code & Terraform" },
  { id: 15, title: "15. Terraform Fundamentals", category: "Part 5 · Infrastructure as Code & Terraform" },
  { id: 16, title: "16. Infrastructure Provisioning", category: "Part 5 · Infrastructure as Code & Terraform" },
  { id: 17, title: "17. Configuration Management", category: "Part 6 · Configuration, Secrets & Migrations" },
  { id: 18, title: "18. Secrets and Environment Management", category: "Part 6 · Configuration, Secrets & Migrations" },
  { id: 19, title: "19. Database and Pipeline Migrations", category: "Part 6 · Configuration, Secrets & Migrations" },
  { id: 20, title: "20. Deployment Strategies", category: "Part 7 · Deployment, Recovery & Kubernetes" },
  { id: 21, title: "21. Rollback and Recovery", category: "Part 7 · Deployment, Recovery & Kubernetes" },
  { id: 22, title: "22. Introduction to Kubernetes for Data Workloads", category: "Part 7 · Deployment, Recovery & Kubernetes" },
  { id: 23, title: "23. Complete Practical Project — Build a Production-Ready DataOps Platform", category: "Part 8 · Production Project & Advanced Topics" },
  { id: 24, title: "24. Advanced Topics for Production DataOps", category: "Part 8 · Production Project & Advanced Topics" },
  { id: 25, title: "25. Module 19 — Important Interview Questions", category: "Part 9 · Interview Questions, Labs & Capstone" },
  { id: 26, title: "26. Practical Assignments", category: "Part 9 · Interview Questions, Labs & Capstone" },
  { id: 27, title: "27. Final Capstone Challenge", category: "Part 9 · Interview Questions, Labs & Capstone" },
  { id: 28, title: "28. Recommended Learning Resources", category: "Part 9 · Interview Questions, Labs & Capstone" },
  { id: 29, title: "29. Final Module Summary", category: "Part 9 · Interview Questions, Labs & Capstone" }
];

export const DataOpsSection = memo(function DataOpsSection({ sectionId }) {
  switch (sectionId) {
    case 0:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Course Roadmap
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              Module 19: DataOps, Docker, CI/CD and Infrastructure as Code Overview &amp; Roadmap
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 19 — DataOps, Docker, CI/CD and Infrastructure as Code
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Advanced
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Practical Engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production Deployment
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This module focuses on how professional data engineering teams develop, test, package, deploy, automate, and maintain data engineering systems in production.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In Module 18, we learned how to build cloud data platforms using AWS services such as S3, Glue, Athena, Redshift, EMR, and Kinesis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now imagine you have developed an ETL pipeline using Python and Apache Spark. It works perfectly on your laptop.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            You deploy it to a production server, but suddenly:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Python version is different.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Some libraries are missing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline works locally but fails in production.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A developer changes the transformation logic and breaks another pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An update introduces incorrect data into the warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Someone accidentally modifies production infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            There is no reliable way to return to the previous working version.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are software engineering and operational problems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Professional data engineering teams solve them using DataOps, Git, Docker, CI/CD, automated testing, Terraform, configuration management, and deployment automation.
          </p>
        </div>
      );
    case 1:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Course Roadmap
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              1. Understanding the complete module
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            We will use one example throughout this module:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An e-commerce data engineering pipeline
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline collects orders from a database, cleans the information, transforms it using Python, and loads the output into an analytical data warehouse.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Our objective is to build a system where:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Every code change is tracked.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Multiple engineers can collaborate safely.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline runs consistently across machines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Every change is automatically tested.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure is created through code.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secrets and environment configurations are protected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Releases are deployed automatically.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failed releases can be recovered.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production data remains protected.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The complete engineering workflow looks like this:
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Modern DataOps Workflow</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            01
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version Control
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git · Branches · Pull Requests
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            02
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Development
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python · SQL · Pipeline Code
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            03
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Containerization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker · Images · Compose
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            04
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automated Testing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unit · Integration · Data Quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            05
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous Integration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Actions · Build · Validate
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            06
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure as Code
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform · Provisioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            07
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Staging · Production · Release
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            08
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Operations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring · Rollback · Recovery
          </p>
        </div>
      );
    case 2:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · DataOps &amp; Software Engineering
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              2. Introduction to DataOps
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.1 What is DataOps?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataOps stands for Data Operations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is a collaborative approach to developing, deploying, monitoring, and maintaining data systems using automation, software engineering practices, continuous testing, and operational discipline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataOps applies DevOps principles to the data engineering lifecycle.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            In simple terms:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DevOps improves the way software is developed and deployed. DataOps improves the way data pipelines and data products are developed, deployed, and maintained.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, imagine an organization has three teams:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineers build pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data analysts use the transformed datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business teams depend on analytical reports.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Without proper collaboration, a data engineer may change a column name in a production dataset without informing the analysts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The transformation pipeline may still execute successfully, but downstream dashboards may stop working.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataOps introduces practices to manage such changes systematically.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These include version control, automated testing, data validation, deployment approval, monitoring, and documentation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataOps is concerned with both software correctness and data reliability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Microsoft Learn+2
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.2 Why Do We Need DataOps?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider a traditional data engineering workflow.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A data engineer:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Writes a Python ETL script.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Executes it manually.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checks whether the output looks correct.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Uploads the script to a server.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runs the script manually in production.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checks the database afterward.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This approach may work for a small project.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            But imagine managing 100 pipelines, 20 developers, and hundreds of production datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manual processes become unreliable.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Typical problems include:
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Code inconsistency</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different engineers use different Python versions, libraries, and coding practices.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Deployment failures</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pipeline works in development but fails in production.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Data quality problems</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pipeline successfully executes but produces incorrect output.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Lack of collaboration</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Two engineers change the same transformation logic without properly coordinating their modifications.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Difficult recovery</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A newly deployed pipeline introduces an error, and there is no easy way to restore the previous implementation.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>F. Limited visibility</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company cannot easily determine which code version produced a particular dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataOps addresses these problems by making data engineering workflows repeatable, testable, traceable, and observable.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.3 DataOps vs DevOps</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Although they share many engineering practices, their focus is different.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Area</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">DevOps</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">DataOps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Primary focus</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Software delivery</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data delivery</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Main artifact</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Applications</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data pipelines and data products</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Testing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Application functionality</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Code and data correctness</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Deployment</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Software releases</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pipeline and data-model releases</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Monitoring</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Application health</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pipeline and data quality</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Reliability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Application availability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data accuracy, availability and freshness</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Consumers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Application users</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analysts, scientists, business systems</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example:</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">A developer changes an application's login functionality.</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">DevOps checks whether the application still works.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data engineer changes a customer transformation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataOps checks whether the pipeline works and whether the resulting customer dataset remains accurate and compatible with downstream systems.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.4 Core Principles of DataOps</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Automation</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automate repetitive processes wherever practical.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schedule ETL pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate incoming datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Execute tests after code changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deploy approved transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate pipeline reports.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Collaboration</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineers, analysts, administrators, and business teams should understand the impact of changes.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Continuous testing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data pipelines should be tested before they reach production.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Testing should cover both code functionality and actual data characteristics.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Observability</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Teams should understand what happens inside their pipelines.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            They should be able to identify:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which pipeline failed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When it failed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which transformation failed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How much data was processed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether output volume changed unexpectedly.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether data freshness requirements were missed.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Reproducibility</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The same code, configuration, dependencies, and input data should allow an engineer to reproduce a previous processing result, subject to deterministic processing and external system behavior.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>F. Governance and security</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access permissions, data lineage, sensitive information, and change management must be controlled.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.5 DataOps Lifecycle</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A practical DataOps lifecycle consists of:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Ingestion
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Transformation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Automated Validation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Deployment
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Monitoring
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feedback and Improvement
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Continuous Development
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, suppose a sales pipeline receives one million transactions every day.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The DataOps workflow checks:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether the input file arrived.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether the schema is correct.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether transaction IDs are unique.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether the transformation completes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether the output count is reasonable.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether the output is available before the reporting deadline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important distinction: A pipeline can have a successful execution status and still produce bad data. DataOps must validate the resulting dataset, not just whether the program exited successfully.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · DataOps &amp; Software Engineering
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              3. Software Engineering Practices for Data Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineering is not just about SQL queries and ETL scripts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Professional data engineering systems are software systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            That means engineers must follow software development practices.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.1 Modular Code Design</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose you write an entire ETL pipeline in one Python file.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            # LargePipeline.py # Connect to database # Extract data # Clean data # Transform data # Validate output # Load to warehouse # Generate reports
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            As the application grows, maintaining it becomes difficult.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A better approach is to divide responsibilities into modules.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ecommerce-data-platform/ │ ├── src/ │ ├── ingestion/ │ │ ├── extract.py │ │ └── sources.py │ │ │ ├── transformation/ │ │ ├── clean.py │ │ └── transform.py │ │ │ ├── validation/ │ │ └── quality_checks.py │ │ │ ├── loading/ │ │ └── warehouse.py │ │ │ └── main.py │ ├── tests/ │ ├── test_extract.py │ ├── test_transform.py │ └── test_quality.py │ ├── config/ ├── requirements.txt ├── Dockerfile └── README.md`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each module performs a specific responsibility.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This makes the pipeline easier to understand, test, and maintain.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.2 Separation of Responsibilities</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider three responsibilities:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Extraction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reads information from source systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transformation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cleans, validates, joins, and modifies datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Loading
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Writes transformed results into the destination.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Separating these responsibilities means that changes to the database connection do not necessarily require rewriting transformation logic.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, the transformation function can be tested using a small in-memory dataset without connecting to the production database.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.3 Idempotency</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Idempotency is an important concept in data engineering.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An operation is idempotent when repeating the same operation with the same effective input and conditions produces the same intended final state.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a pipeline processes January sales data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It fails halfway through and must be rerun.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A badly designed pipeline may insert duplicate transactions.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A properly designed pipeline might use:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unique transaction identifiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deduplication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Upserts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition replacement.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transactional writes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkpointing.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example SQL:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`MERGE INTO target_orders AS target
USING staging_orders AS source
ON target.order_id = source.order_id
WHEN MATCHED THEN
  UPDATE SET amount = source.amount, status = source.status
WHEN NOT MATCHED THEN
  INSERT (order_id, amount, status)
  VALUES (source.order_id, source.amount, source.status);`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is an example of an upsert-based strategy, subject to the database's supported SQL syntax and transaction semantics.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.4 Logging and Error Handling</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A production pipeline should not silently fail.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s"
)
logger = logging.getLogger(__name__)

def process_orders(data):
    try:
        logger.info("Starting order transformation")
        if data is None:
            raise ValueError("Input dataset is missing")
        result = data.drop_duplicates()
        logger.info("Transformation completed. Rows: %s", len(result))
        return result
    except Exception:
        logger.exception("Order transformation failed")
        raise`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Notice the use of logger.exception().
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It records an error with exception details, making debugging easier.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A production pipeline should also expose metrics such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Input records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Output records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rejected records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing duration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failure count.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data freshness.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.5 Testing and Documentation</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A professional data repository should contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application code.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automated tests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dependency definitions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configuration templates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment instructions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data schemas.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documentation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pipeline should be understandable by an engineer who did not originally write it.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Version Control &amp; Git Collaboration
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              4. Git and Version Control
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Essential Skill
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.1 What is Version Control?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version control is a system for tracking changes made to files over time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine you have written a Python ETL pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version 1 correctly processes customer data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version 2 introduces a new transformation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version 3 contains an error.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Without version control, you may not know exactly what changed or how to restore the previous implementation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version control solves this problem.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It records changes and allows developers to inspect, compare, and restore different versions of a project.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.2 What is Git?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git is a distributed version control system.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It allows developers to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Track file changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create branches.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compare versions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Merge changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collaborate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restore earlier code.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain a full project history.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git stores project history through commits, organized into branches.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Docs
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.3 What is a Repository?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A repository is a project containing its files and version history.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ecommerce-data-engineering/ │ ├── pipeline.py ├── transformation.py ├── requirements.txt ├── tests/ ├── Dockerfile ├── README.md └── .git/`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The .git directory stores Git's internal repository data.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.4 Git Installation</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Download Git:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            [Download Git](https://git-scm.com/downloads?utm_source=chatgpt.com)After installation, verify it:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git --version
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Configure your identity:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`git config --global user.name "Developer" git config --global user.email "developer@example.com"`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These values identify the author information recorded in commits. Use your own identity when configuring your repository.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.5 Important Git Commands</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Command</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git init</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Initialize a repository</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git clone</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Copy a remote repository</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git status</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Inspect working-tree changes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git add</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Stage changes</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git commit</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Save a snapshot</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git push</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Push commits to remote</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git pull</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Fetch and integrate changes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git fetch</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Download remote changes</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git branch</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Manage branches</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git switch</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Switch branches</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git merge</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Merge branches</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git log</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">View commit history</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git diff</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Compare changes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">git restore</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restore working-tree content</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.6 Understanding the Git Workflow</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git has three important areas.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Working Directory</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Where you modify project files.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Staging Area</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Where you select changes to include in the next commit.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Repository</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Where Git records committed snapshots.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Git Workflow Fundamentals</span>
            <a href="https://images.openai.com/static-rsc-4/Uk6vHjwUkiron9hY9C8iGUf3G8eEVE0XNTKKTe9fodyAW7nOnil2NycFU49UCfP83vrOnpPV3jqCC5kB-fjnbwCdvmbr6kr7MNCtgbpnfYIVxKjigvf4hUwL6xDujYzZjLTLZdD2GtcV6X0ezgpd4I7Ts0slVLyIPC849Dm6Fi4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">clevertechie.com</span>
            <a href="https://clevertechie.com/guides/git-workflow-fundamentals?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You modify transform.py.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            First, inspect changes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git status
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Stage the file:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git add transform.py
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Commit the change:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git commit -m "Improve order transformation logic"
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Push the commit:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git push origin main
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A commit is a saved point in project history.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is not the same as pushing code to GitHub.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.7 Git and GitHub</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git and GitHub are not the same.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git is the version control system.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub is a hosting and collaboration platform for Git repositories.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Other hosting platforms include GitLab and Bitbucket.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A common workflow is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write code locally.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Track changes using Git.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Push commits to GitHub.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a pull request.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Review changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Merge approved changes.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Version Control &amp; Git Collaboration
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              5. Git Branching and Collaboration
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.1 What is a Git Branch?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A branch represents an independent line of development.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose the production pipeline is working correctly.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You need to introduce a new transformation without immediately modifying the production branch.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You create a new branch.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git switch -c feature/customer-segmentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now you can develop the feature independently.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The existing main branch remains unchanged.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.2 Why Are Branches Important?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine three engineers working on the same project.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineer A develops customer ingestion.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineer B develops order transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineer C adds data quality validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Without branches, changes may conflict.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            With branches, engineers can work independently and propose their changes for review.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                main
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v v feature/ feature/ feature/ customer orders validation
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.3 Common Branching Strategies</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Feature Branching</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each feature is developed on a separate branch.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            feature/add-customer-source feature/improve-order-etl feature/add-quality-checks
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>GitHub Flow</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A lightweight workflow involving:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a branch.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Make changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Commit changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Open a pull request.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Review and test.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Merge into the main branch.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is useful for many small and medium-sized engineering teams.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Git Flow</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A more structured branching approach that may include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Main.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Develop.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Release.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hotfix.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It can support teams that need more formal release management, although it introduces additional branch-management overhead.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.4 Merge Conflicts</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A merge conflict happens when Git cannot automatically combine changes.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Engineer A changes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            batch_size = 100
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Engineer B changes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            batch_size = 500
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Both modify the same line.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git cannot determine which version is correct.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The engineer must inspect the conflict and choose or combine the intended changes.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.5 Pull Requests</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pull request is a proposal to merge changes from one branch into another.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An engineer creates:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            feature/improve-sales-etl
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They submit a pull request to merge it into main.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The pull request allows reviewers to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inspect the code.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Review SQL changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify potential bugs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run automated checks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Discuss design decisions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Request modifications.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.6 Code Reviews and Repository Management</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Code reviews are an essential software engineering practice.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A data engineering pull request should be checked for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Code correctness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Does the transformation produce the intended result?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Performance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Will the query or Spark job consume excessive resources?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Does it preserve required data constraints?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Are credentials or sensitive information exposed?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backward compatibility
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Will existing dashboards and downstream pipelines continue working?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Testing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Are tests included and passing?
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Repository management also includes:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            README documentation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            .gitignore.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Branch protection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Required reviewers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automated CI checks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Issue tracking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Release tags.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dependency management.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Understanding .gitignore</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Some files should never be committed into Git.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            .env .venv/ __pycache__/ *.pyc *.log .terraform/ terraform.tfstate terraform.tfstate.backup
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This example excludes local virtual environments, environment files, Python cache files, and Terraform state files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important: .gitignore only prevents untracked files from being added through ordinary Git operations. It does not remove sensitive files already committed to the repository. Exposed secrets must be rotated, and repository history may also need remediation.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Docker &amp; Containerization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              6. Docker Fundamentals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Essential for Production Data Engineering
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.1 What is Docker?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker is a platform for building, packaging, and running containerized applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It allows developers to package application code together with the runtime environment and dependencies required to execute it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider a Python ETL application.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It requires:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python 3.x.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pandas.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PySpark.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database drivers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application code.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Your laptop has Python 3.12, while the production server uses Python 3.9.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Some dependencies behave differently.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This can cause deployment problems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker helps standardize the runtime environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of manually installing all dependencies on every machine, you build an image containing the required application environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker's official learning materials explain images, containers, volumes, and multi-container applications as the core building blocks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Learn+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.2 What is a Container?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A container is an isolated execution environment running an application.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It uses the host operating system's kernel while receiving isolated process and resource environments.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You have a laptop running Windows using Docker Desktop.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You build a Linux-based Python container.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inside the container, your application has its own filesystem, Python runtime, dependencies, and process environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The container runs independently of many details of the host environment.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.3 What is a Docker Image?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Docker image is a packaged template used to create containers.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Base filesystem.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runtime dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Required libraries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Startup instructions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            One image can be used to create multiple container instances.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Python ETL Image
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v Container 1 Container 2 Development Production
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Both can run the same image while receiving different configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.4 Container vs Image</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Image</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Container</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Packaged template</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Running instance</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Used to create containers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Executes the application</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Generally immutable after build</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Has runtime state</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Stored in an image registry</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Runs on a container runtime</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.5 Container vs Virtual Machine</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is a fundamental interview topic.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">How to use Docker</span>
            <a href="https://images.openai.com/static-rsc-4/QuaLPMzpbtAk1I6p2df_fUDs4GbNKgFkqp0U6S2cRSsbPrnaDgt4mA6KuS1070SxYZIvYNiNmkvbbV2hWH6hKUcnQ6xhKr81xRAjYi3yoKZQFen0KWddtqECHp83cEOgVcsw5n3ASqWDFQdXTHtSFEBuafAPK_LZFtEwG9akNQk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">digikey.co.nz</span>
            <a href="https://www.digikey.co.nz/en/maker/projects/getting-started-with-docker/aa0d4c708c274ffd975f3b427e5c0ce6?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A virtual machine runs a guest operating system using a hypervisor.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A container shares the host kernel and uses operating-system-level isolation.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Virtual Machine</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Container</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Virtualization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Hardware-level</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">OS-level</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Guest operating system</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Usually included</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Shares host kernel</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Size</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Usually larger</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Usually smaller</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Startup</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Generally slower</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Generally faster</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Isolation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Separate guest OS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Process and resource isolation</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Use case</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Full OS environments</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Application packaging</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Containers are not equivalent to virtual machines in their isolation model. For workloads requiring a separate guest kernel or stronger isolation boundary, VMs may be appropriate.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.6 Docker Architecture</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important Docker concepts:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Client
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The command-line interface used to interact with Docker.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Daemon / Engine
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manages container and image operations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Images
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application templates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Containers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Running instances of images.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Registry
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stores and distributes images.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Hub.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Elastic Container Registry (ECR).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Container Registry.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure Container Registry.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Docker Architecture (What Actually Happens Internally)</span>
            <a href="https://images.openai.com/static-rsc-4/HijwLm0NbUIIgdg5KZRQ_TyKgB5yMCs-0uWhuZp6J8rs5evLerx-H4IZGCgjuCmorlaa_QLECqiPyccGTWrc8RcquwEmQeR5DgSrCRgZ7_BHX1RcFRshCmLmP02BZdIoVEnc2DPY-R2FdL4qA7MzSvlWJnVK7uVw_YMa-n9vlDc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">linkedin.com</span>
            <a href="https://www.linkedin.com/pulse/docker-architecture-what-actually-happens-internally-safaetul-ahasan-bf30c?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.7 Important Docker Commands</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Command</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker --version</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Check Docker version</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker pull python:3.12-slim</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Download image</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker images</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">List images</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker ps</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">List running containers</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker ps -a</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">List all containers</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker run</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Create and run a container</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker stop</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Stop a container</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker start</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Start an existing container</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker rm</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Remove a container</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker rmi</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Remove an image</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker logs</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">View container logs</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker exec</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Execute a command inside a container</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">docker build</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Build an image</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example:</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">docker pull python:3.12-slim</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Run a container:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker run -it python:3.12-slim python`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This starts an interactive Python interpreter inside a container.
          </p>
        </div>
      );
    case 7:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Docker &amp; Containerization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              7. Dockerfiles
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.1 What is a Dockerfile?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Dockerfile is a text file containing instructions for building a Docker image.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It defines:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Base image.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Working directory.</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Environment configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Startup command.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, imagine we have a Python data pipeline.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Project:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`orders-pipeline/ │ ├── main.py ├── requirements.txt └── Dockerfile`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            requirements.txt:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            pandas sqlalchemy psycopg
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            main.py:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd

def process_orders():
    data = pd.read_csv("orders.csv")
    data = data.drop_duplicates()
    data.to_csv("processed_orders.csv", index=False)
    print("Order processing completed")

if __name__ == "__main__":
    process_orders()`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now we create a Dockerfile.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.2 Understanding Dockerfile Instructions</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important Dockerfile instructions:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Instruction</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">FROM</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Select base image</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">WORKDIR</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Define working directory</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">COPY</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Copy local files into image</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ADD</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Copy files with additional supported behavior</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">RUN</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Execute build-time commands</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ENV</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Set environment variables</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ARG</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Define build-time variables</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">EXPOSE</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Document intended network port</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">USER</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Select runtime user</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">CMD</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Default execution command</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ENTRYPOINT</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Define primary executable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.3 Creating a Dockerfile for a Data Pipeline</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Install dependencies first
COPY requirements.txt .
RUN pip install --no-cache-dir \\
    -r requirements.txt

# Copy application source
COPY main.py .

# Create a non-root user
RUN useradd --create-home appuser
USER appuser

# Execute pipeline
CMD ["python", "main.py"]`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Let's understand what happens.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The image starts from Python 3.12 slim.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The working directory becomes /app.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The dependency file is copied.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python packages are installed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The application code is copied.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A non-root user is created.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The application runs as that user.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python executes main.py when the container starts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For a real project, use dependency versions that have been tested together.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.4 Building a Docker Image</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Inside the project directory:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker build -t orders-pipeline:v1 .`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Here:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker build: Builds the image.`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            -t: Assigns a name and tag.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders-pipeline: Image name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            v1: Image tag.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            .: Build context.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Inspect the image:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            docker images
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.5 Running the Pipeline</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker run --rm orders-pipeline:v1`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The container runs the pipeline and is removed when it finishes.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            To pass configuration:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker run --rm \\ -e ENVIRONMENT=development \\ orders-pipeline:v1`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The application can read the value using:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            import os environment = os.getenv( "ENVIRONMENT", "development" )
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Do not put passwords or cloud credentials into the Dockerfile or image.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.6 Docker Image Layers</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker images consist of layers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each instruction that changes the image filesystem can contribute a layer.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Base Python Image
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Install Dependencies
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Copy Application Files
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Final Image
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker can reuse unchanged layers during builds.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This improves development efficiency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            That is why copying requirements.txt before copying frequently changing application code is a useful pattern.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.7 Docker Best Practices</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use suitable small base images.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pin dependency versions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use .dockerignore.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid storing secrets in images.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid running as root unnecessarily.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Keep only required application dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use stable, traceable image tags.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scan images for vulnerabilities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rebuild images when important base-image security updates are required.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker recommends producing images that are focused and efficient, considering layer reuse and build caching.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Docs+1
          </p>
        </div>
      );
    case 8:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Docker &amp; Containerization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              8. Docker Compose
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.1 What is Docker Compose?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Compose is a tool for defining and running multi-container applications using a YAML configuration file.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine your data engineering development environment requires:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python ETL application.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redis cache.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A scheduler.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of starting each service separately and configuring their network connections manually, you can define them in one Compose file.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Compose manages the services, networks, and volumes through a single configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Docs+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.2 Why Do Data Engineers Need Docker Compose?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a developer wants to test a database extraction pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They require PostgreSQL locally.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Another engineer uses the same project but does not have PostgreSQL installed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            With Compose, both engineers can create equivalent development environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline and its dependencies become easier to reproduce.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.3 Docker Compose Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Docker Compose
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v v Python PostgreSQL Redis Pipeline Database Cache
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ---------------------- Network
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.4 Docker Compose Example</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Create:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            compose.yaml
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`services:
  pipeline:
    build: .
    environment:
      DB_HOST: postgres
      DB_NAME: ecommerce
      DB_USER: developer
      DB_PASSWORD: \${DB_PASSWORD}
    depends_on:
      - postgres

  postgres:
    image: postgres:16
    environment:
      POSTGRES_DB: ecommerce
      POSTGRES_USER: developer
      POSTGRES_PASSWORD: \${DB_PASSWORD}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This example uses an environment variable named DB_PASSWORD supplied outside the committed Compose file.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For an actual project, use a secure local environment file excluded from Git, or a secrets-management mechanism.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explanation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            pipeline
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runs the Python data application.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            postgres
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runs PostgreSQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            depends_on
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines a service startup dependency. It does not, by itself, guarantee that PostgreSQL is ready to accept connections. A health check and application retry logic should be added for reliable startup.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            volumes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Preserves database data even when the PostgreSQL container is removed.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.5 Important Docker Compose Commands</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Start all services:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            docker compose up -d
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            View running services:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            docker compose ps
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            View logs:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            docker compose logs
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Stop services:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            docker compose stop
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Stop and remove containers and networks:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            docker compose down
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Remove containers and the associated named volumes too:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            docker compose down -v
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Be careful with -v: it removes the named database volume and its stored data.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.6 Docker vs Docker Compose</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Docker</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Docker Compose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Builds and runs containers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Defines multi-container applications</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Manages images</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Coordinates services</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Individual container commands</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Shared YAML configuration</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Useful for one application container</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Useful for complete development stacks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 9:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Docker &amp; Containerization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              9. Containerizing Data Pipelines
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now let's apply Docker to a real data engineering workflow.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.1 Why Containerize a Data Pipeline?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose your pipeline uses:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python 3.12.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pandas.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PySpark.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL drivers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Custom transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The development machine and production environment may contain different dependency versions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Containerization ensures that the application runs using its packaged runtime and dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A container image can be built once, tested, and promoted through environments.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.2 Pipeline Containerization Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Python Pipeline
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Dockerfile
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Docker Image
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v Testing Registry
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ---------------
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v Staging Production
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.3 Containerizing Apache Spark</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineering systems frequently use Spark.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For local learning, you can run a PySpark application in a suitable Spark-compatible container image.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, a Spark application may:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read Parquet files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregate sales.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write transformed Parquet files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In production, the choice between a standalone container, Amazon EMR, Glue, Kubernetes, Databricks, or another managed platform depends on cluster orchestration, scale, operational requirements, and costs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker does not automatically make a Spark application distributed. The execution environment must still be configured to provide the desired Spark cluster and resources.
          </p>
        </div>
      );
    case 10:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Environments, CI/CD &amp; Testing
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              10. Development, Staging, and Production Environments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is one of the most important concepts in production engineering.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.1 Why Do We Need Multiple Environments?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an engineer changes a customer transformation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They want to test it before allowing the change to affect the actual business datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If they execute unverified code directly against production, they risk damaging critical data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Multiple environments provide controlled testing and release stages.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.2 Development Environment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The development environment is where engineers write and experiment with code.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Characteristics:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Local databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sample datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Debugging.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Frequent code changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Experimental transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Temporary infrastructure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An engineer tests a new function for customer segmentation using 1,000 sample records.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.3 Staging Environment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Staging is a pre-production environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It should closely resemble production in important technical and behavioral characteristics.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Characteristics:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production-like configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integration testing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            End-to-end pipeline execution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Migration rehearsal.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Performance testing where appropriate.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The updated transformation is tested with a representative dataset before release.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.4 Production Environment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production serves real business workloads.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Characteristics:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Actual business data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Controlled releases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Strict access management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery plans.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability requirements.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The sales pipeline processes the company's daily transactions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.5 Environment Comparison</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Development</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Staging</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Production</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Purpose</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Build</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Validate</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Serve business</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Sample/test</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Representative or masked</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Authorized live data</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Changes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Frequent</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Controlled</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Approved</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Access</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Developers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Approved team</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restricted</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Monitoring</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Debugging</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Deployment validation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Operational monitoring</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Stability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Flexible</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Production-like</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Highest priority</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.6 Environment Separation Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Developer Machine
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Development
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Automated Tests
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Staging
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Approval and Validation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Production
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Environments should be separated through appropriate infrastructure, accounts, credentials, resource names, databases, and permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A production deployment should never accidentally write development data into the production warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important: Environment separation is not only about using different URLs. It is also about isolating data, permissions, infrastructure, and deployment configuration.
          </p>
        </div>
      );
    case 11:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Environments, CI/CD &amp; Testing
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              11. Continuous Integration and Continuous Deployment (CI/CD)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Core Production Engineering Concept
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.1 What is CI/CD?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CI/CD is a collection of practices that automate software integration, testing, and deployment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It reduces the need for engineers to manually build, test, and deploy every code change.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            CI/CD has three commonly discussed concepts:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous Integration (CI).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous Delivery (CD).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous Deployment (CD).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The two CD terms are related but have different meanings.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.2 Continuous Integration (CI)</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous Integration means regularly integrating code changes into a shared repository and automatically validating those changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine four data engineers working on the same platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each engineer develops a separate feature.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Whenever someone creates or updates a pull request, an automated process can:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Download the repository.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Install dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Check code formatting.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run static analysis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Execute unit tests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run integration tests where configured.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build a Docker image.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Report the results.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If a test fails, the code should not be approved for merging without addressing the failure or an explicitly reviewed exception.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CI workflow
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Developer Changes Code
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Git Commit
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Push to GitHub
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Automated CI
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v Tests Build
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Validation Result
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.3 Continuous Delivery</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous Delivery means the system automatically prepares validated changes for release.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The deployment package is ready to release, but production deployment may require human approval.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data engineer updates a Spark pipeline.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The system:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runs tests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Builds the Docker image.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Publishes the image.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deploys it to staging.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runs deployment verification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A manager or authorized engineer approves the production release.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.4 Continuous Deployment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous Deployment automatically releases qualifying changes to production after they pass the configured checks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            No manual production approval is required for each eligible release.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An approved transformation change passes CI and staging verification.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The release pipeline automatically deploys it to production.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For data systems, continuous deployment should be introduced carefully because a code deployment can modify production datasets or schemas.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.5 CI vs Continuous Delivery vs Continuous Deployment</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">CI</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Continuous Delivery</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Continuous Deployment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Code integration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Automated testing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Yes</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Release artifact</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Validated</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Prepared</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Prepared</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Production deployment</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Not required</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">May require approval</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Automatic</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Human approval</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Depends on workflow</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Often used</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Not required for each deployment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.6 Why CI/CD Is Important for Data Engineering</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine your company has 50 ETL jobs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Without CI/CD, engineers may need to manually test and deploy changes to each environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This creates operational overhead.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            With CI/CD, the organization can automate:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SQL linting.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python testing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker image construction.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dependency checks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure planning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Staging deployment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production release.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CI/CD is one of the practices AWS recommends as part of automated DataOps workflows.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Prescriptive Guidance+1
          </p>
        </div>
      );
    case 12:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Environments, CI/CD &amp; Testing
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              12. GitHub Actions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Practical CI/CD Tool
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.1 What is GitHub Actions?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Actions is an automation and CI/CD platform integrated into GitHub.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It allows developers to define automated workflows that execute when specific repository events happen.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Code is pushed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pull request is opened.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A scheduled time arrives.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A release is published.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A workflow is manually triggered.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Workflows are defined using YAML files inside:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            .github/workflows/
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Actions supports workflows, jobs, steps, runners, environments, artifacts, and reusable actions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Docs+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.2 Important GitHub Actions Components</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Workflow</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A workflow is an automated process.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            python-tests.yml
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Event</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines when the workflow executes.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            push
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            pull_request
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            schedule
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            workflow_dispatch
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Runner</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A runner is the environment that executes the workflow.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub provides hosted runners, and organizations can also configure self-hosted runners.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Job</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A job consists of one or more steps.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Jobs can run independently or depend on other jobs.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Step</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A step performs an individual action.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkout repository.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Install Python.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Install packages.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run tests.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>F. Action</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An action is a reusable unit of workflow logic.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examples include checking out a repository and configuring a Python runtime.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.3 Complete CI Workflow for a Python Data Pipeline</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose our repository contains:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`data-platform/ │ ├── src/ │ ├── main.py │ └── transform.py │ ├── tests/ │ └── test_transform.py │ ├── requirements.txt └── .github/ └── workflows/ └── ci.yml`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Create:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            .github/workflows/ci.yml
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`name: Python Data Pipeline CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install pytest

      - name: Run tests
        run: |
          pytest -v`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is an instructional example. In a production repository, pin third-party actions to verified full commit SHAs and update them through a controlled dependency-management process.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Understanding the workflow</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            name
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines the workflow name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            on
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines which repository events trigger the workflow.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            jobs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines automated tasks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            runs-on
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Selects the runner environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            steps
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines the actions executed by the job.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            actions/checkout
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checks out the repository.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            actions/setup-python
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configures the requested Python version.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            pytest
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Executes automated tests.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.4 Docker Image Build Using GitHub Actions</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now suppose tests have passed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            We want the system to build a Docker image.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Add another workflow step:
          </p>
          <li className="text-xs sm:text-sm text-stone-700 leading-relaxed ml-4 list-disc pl-1 my-1">
            name: Build Docker image run: | docker build \ -t ecommerce-pipeline:$&#123;&#123; github.sha &#125;&#125; .
          </li>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The image tag contains the Git commit SHA.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This gives us traceability between the deployed container and the source code used to build it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The next step in a production pipeline would generally push the image to a secure container registry.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.5 GitHub Actions Deployment Environments</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            You can create environments such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Development.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Staging.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Each environment can have different:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secrets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Variables.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protection rules.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorized deployment branches.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Approval requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, a production deployment can require approval from an authorized reviewer before the deployment job starts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Docs+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.6 Secure Cloud Deployment with OIDC</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A common mistake is storing permanent AWS access keys in GitHub repository secrets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Actions can instead use OpenID Connect (OIDC) to obtain temporary cloud credentials.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The basic flow is:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                GitHub Actions Workflow
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                OIDC Identity Token
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS IAM Trust Policy
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Temporary Credentials
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Approved AWS Access
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The AWS IAM role should trust only the intended repository, branch, or environment conditions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This reduces the need for long-lived cloud credentials inside GitHub.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub and cloud-provider documentation describe this federated authentication approach.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Docs+1
          </p>
        </div>
      );
    case 13:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Environments, CI/CD &amp; Testing
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              13. Automated Pipeline Testing
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Critical Data Quality Skill
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.1 Why Is Automated Testing Necessary?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine a developer changes this transformation:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            revenue = price * quantity
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            But accidentally writes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            revenue = price + quantity
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline may execute successfully.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, every calculated revenue value will be incorrect.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is why successful execution does not prove data correctness.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automated testing checks whether a pipeline produces the expected behavior.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.2 Types of Testing in Data Engineering</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Unit Testing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unit testing verifies small individual components.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You have a function that removes duplicate orders.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd def clean_orders(data): return data.drop_duplicates( subset=["order_id"] )`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Test:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from src.transform import clean_orders
import pandas as pd

def test_duplicate_orders_are_removed():
    data = pd.DataFrame({
        "order_id": [101, 101, 102],
        "amount": [500, 500, 700]
    })
    result = clean_orders(data)
    assert len(result) == 2
    assert result["order_id"].is_unique`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The test verifies the transformation using a small controlled dataset.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Integration Testing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integration testing verifies whether multiple components work together.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A data pipeline:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reads customer data from PostgreSQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Executes transformation logic.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Writes the result to a destination database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integration tests check whether these components interact correctly.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Data Quality Testing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality tests validate the dataset itself.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common checks include:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Validation</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Completeness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer ID cannot be null</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Uniqueness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Order ID must be unique</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Validity</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Order amount must be positive</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Consistency</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Total amount must match line items</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Freshness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Dataset must be updated by a deadline</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Referential integrity</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer ID must exist in customer records</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Schema validation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Required fields must exist</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`def validate_orders(data):
    assert data["order_id"].notnull().all()
    assert data["order_id"].is_unique
    assert (data["amount"] > 0).all()
    return True`}</code>
            </pre>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Regression Testing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regression testing checks whether previously working functionality continues working after a modification.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A developer adds a discount-calculation feature.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tests should verify that the original tax calculation and revenue aggregation still produce the expected results.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Contract Testing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contract testing verifies compatibility between systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine a source system provides:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            &#123; "customer_id": "C001", "name": "Amit", "email": "amit@example.com" &#125;
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A developer changes the source schema and removes customer_id.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The downstream pipeline expects that column.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data contract defines important expectations about the structure and semantics of the data exchange.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contract tests can identify incompatible changes before deployment.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>F. End-to-End Testing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An end-to-end test checks the full pipeline.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Input CSV
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Extraction
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Transformation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Validation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Database Loading
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Expected Output
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The objective is to verify the complete business workflow.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.3 Testing Pyramid for Data Engineering</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Data Pipeline Testing Pyramid</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            End-to-End
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Full pipeline verification
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integration + Contract
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Systems and schema compatibility
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unit + Data Quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transformation and data correctness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A conceptual testing strategy: maintain many fast, focused tests and a smaller set of complete pipeline tests.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.4 Data Validation Tools</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common tools include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pytest — Python testing framework.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Great Expectations — data validation and quality checks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Soda — data quality monitoring and validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            dbt tests — validation for analytical models.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deequ — data quality testing for large-scale datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These tools solve related but different problems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, pytest primarily tests application behavior, whereas Great Expectations and Soda provide data-quality-oriented validation capabilities.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.5 Integrating Data Quality into CI/CD</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A mature pipeline can follow this process:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Pull Request
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Python Unit Tests
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                SQL Validation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Schema Tests
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Quality Tests
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Docker Build
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Staging Execution
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Production Approval
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A change that produces invalid data should not be promoted merely because the Python code compiles.
          </p>
        </div>
      );
    case 14:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Infrastructure as Code &amp; Terraform
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              14. Infrastructure as Code (IaC)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Essential Cloud Engineering Skill
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.1 What Is Infrastructure as Code?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure as Code means defining and managing infrastructure through machine-readable configuration files instead of manually configuring every resource.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine you need to create an AWS environment containing:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 bucket.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM role.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            VPC.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security groups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditionally, an administrator might create these resources manually through the AWS console.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is time-consuming and difficult to reproduce consistently.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            With IaC, infrastructure is described through code.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The same configuration can be version-controlled, reviewed, tested, and reused.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform defines infrastructure using declarative configuration and manages resources through provider APIs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HashiCorp Developer+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.2 Why Do We Need IaC?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider two environments:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Development.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Both should have similar infrastructure architecture but different resource names, data, permissions, and capacity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If each environment is configured manually, configuration drift may occur.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Development has the correct S3 encryption configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production was manually created without the required setting.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IaC helps standardize infrastructure configuration.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important advantages:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Repeatability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reviewable changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduced manual errors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Environment consistency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Easier disaster recovery.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automation.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.3 Declarative vs Imperative Infrastructure</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Imperative approach</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines the steps required to create infrastructure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a network.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a subnet.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a server.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Attach storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configure security.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Declarative approach</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines the desired final state.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            "I need a storage bucket with encryption, versioning, and private access."
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform determines the resource changes required to achieve that state.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.4 Popular IaC Tools</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Tool</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Primary purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Terraform</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Multi-cloud infrastructure provisioning</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AWS CloudFormation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AWS infrastructure management</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AWS CDK</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Define cloud infrastructure using programming languages</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Pulumi</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Infrastructure management using general-purpose programming languages</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Ansible</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Configuration management and automation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An important distinction:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform is mainly an infrastructure provisioning and management tool.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ansible is commonly used for configuration management and operational automation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They can be used together.
          </p>
        </div>
      );
    case 15:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Infrastructure as Code &amp; Terraform
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              15. Terraform Fundamentals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Primary IaC Tool in This Module
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.1 What is Terraform?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform is an Infrastructure as Code tool developed by HashiCorp.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It allows engineers to define infrastructure in configuration files and manage it throughout its lifecycle.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Terraform supports providers for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Many other platforms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It uses a declarative configuration language called HCL (HashiCorp Configuration Language).
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.2 Terraform Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Terraform Workflow Process Explained | Build5Nines</span>
            <a href="https://images.openai.com/static-rsc-4/-hIjd4NPu1BOmT9yCYEqMD7dSczAH0ekS8ufhNZETtTrO0aJpZ6fpfmgHQGxQXeNnufildwiD1cDUVrFCo0siQ7vyHX5spwwO2n8chhTlKXeRNpexzn0bGRIhxK0R9_ZeFgYKMTq6MnBMdFFEcw4kE6Bgq6VARwCh6aWYIIYh84?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">build5nines.com</span>
            <a href="https://build5nines.com/terraform-workflow-process-explained/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important components:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform Configuration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contains the infrastructure definition.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provider
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Connects Terraform to a platform such as AWS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resources
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Represent infrastructure objects that Terraform manages.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Sources
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Allow Terraform to read information about existing resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            State
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tracks relationships between Terraform configuration and real infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Modules
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reusable groups of Terraform configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.3 Terraform Core Workflow</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Terraform uses three fundamental stages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Plan.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 1 — Write</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create the infrastructure configuration.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 2 — Plan</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform previews the changes required to achieve the desired state.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 3 — Apply</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform executes the approved infrastructure changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This workflow is documented by HashiCorp.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HashiCorp Developer+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.4 Installing Terraform</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Official website:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            [Download Terraform](https://developer.hashicorp.com/terraform/install?utm_source=chatgpt.com)Verify installation:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            terraform --version
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.5 Basic Terraform Project Structure</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`terraform-project/ │ ├── main.tf ├── variables.tf ├── outputs.tf ├── providers.tf ├── terraform.tfvars └── .terraform.lock.hcl
main.tf`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines infrastructure resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            variables.tf
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines configurable inputs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            outputs.tf
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defines useful output values.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            providers.tf
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configures provider requirements and authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            terraform.tfvars
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provides variable values for a particular environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            .terraform.lock.hcl
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Locks selected provider dependency versions and checksums.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.6 Terraform Provider Configuration</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`terraform {
  required_version = ">= 1.9.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This example selects the AWS Mumbai region.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The provider version constraint should be checked against the version available and approved for the project. Terraform will record the selected dependency in its lock file.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For authentication, use an approved AWS credential profile or federated identity mechanism, rather than embedding access keys in the configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.7 Terraform Resources</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A resource defines an infrastructure object that Terraform manages.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: Create an S3 bucket.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`resource "aws_s3_bucket" "data_lake" {
  bucket = "my-example-data-lake-unique-name"
  tags = {
    Environment = "development"
    Project     = "data-engineering"
  }
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The bucket name must be globally unique.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This example defines the resource but is not a complete production security configuration. A real data lake also requires appropriate encryption, access blocking, policies, lifecycle settings, and permissions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.8 Terraform Variables</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of hardcoding values, use variables.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            variables.tf:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`variable "bucket_name" {
  description = "S3 data lake bucket name"
  type        = string
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "development"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            main.tf:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`resource "aws_s3_bucket" "data_lake" {
  bucket = var.bucket_name
  tags = {
    Environment = var.environment
  }
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            terraform.tfvars:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            bucket_name = "example-data-lake-2026" environment = "development"
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Variables allow the same configuration to be reused across environments.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.9 Terraform Init, Plan, Apply, and Destroy</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Initialize the project:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            terraform init
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Check the configuration:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            terraform validate
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Generate a plan:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            terraform plan
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Apply the changes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            terraform apply
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When Terraform asks for approval, review the plan before proceeding.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Destroy resources:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            terraform destroy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            terraform destroy can remove managed infrastructure and may cause permanent data loss, depending on the resources and their deletion protections. Do not use it casually against production infrastructure.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.10 Terraform State</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform state is a critical concept.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform needs to understand which real infrastructure objects correspond to the resources defined in its configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It stores this information in its state.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            By default, Terraform creates:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            terraform.tfstate
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            State information may include sensitive values.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Therefore, it must be protected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HashiCorp recommends secure state storage and remote state for team collaboration rather than committing local state files into source control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HashiCorp Developer+2
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Local State</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stored on the local machine.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Useful for learning and small experiments.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Disadvantages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Difficult team collaboration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Risk of local data loss.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            No shared coordination by default.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Remote State</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stored in a shared backend.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common options include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HCP Terraform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon S3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure Blob Storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud Storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A remote backend can allow engineers to share infrastructure state and coordinate changes.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>State Locking</span>
          </h4>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>State locking prevents conflicting Terraform operations from modifying the same state simultaneously, when supported by the backend.</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineer A begins modifying the production infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineer B tries to run another change against the same state.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A supported lock mechanism prevents both operations from simultaneously writing to the state.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HashiCorp Developer+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.11 Terraform Modules</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Modules are reusable collections of Terraform resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose you repeatedly create the same S3 security configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of rewriting it, create a reusable module.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`terraform/ │ ├── main.tf │ └── modules/ ├── s3-data-lake/ │ ├── main.tf │ ├── variables.tf │ └── outputs.tf │ └── iam-role/ ├── main.tf ├── variables.tf └── outputs.tf`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now different environments can use the same infrastructure definition.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.12 Terraform in Data Engineering</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Terraform can provision:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 buckets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM policies and roles.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            VPCs and subnets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud data warehouse infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Container registries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes infrastructure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Terraform
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS Infrastructure
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                v v S3 IAM VPC
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AWS Glue
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Pipeline
              </div>
            </div>
          </div>
        </div>
      );
    case 16:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Infrastructure as Code &amp; Terraform
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              16. Infrastructure Provisioning
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.1 What Is Infrastructure Provisioning?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure provisioning means creating and configuring the computing resources required by an application.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For data engineering, this includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute clusters.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Networks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring infrastructure.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.2 Manual vs Automated Provisioning</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Manual provisioning:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An engineer opens the AWS console and creates resources one by one.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is suitable for initial experiments but becomes difficult to manage at scale.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Automated provisioning:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An engineer writes Terraform configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CI/CD validates and plans the changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The approved workflow applies the infrastructure changes.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.3 Infrastructure Provisioning Lifecycle</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Infrastructure Requirements
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Terraform Configuration
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Configuration Review
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Terraform Plan
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Approval and Apply
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Cloud Resources Ready
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Application Deployment
              </div>
            </div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.4 Infrastructure Drift</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure drift happens when actual infrastructure differs from the configuration maintained by Terraform.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform creates an S3 bucket.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Someone manually changes its configuration in the AWS console.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now the actual resource differs from the declared configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A future Terraform plan can help detect the difference and propose corrective changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production infrastructure should not be changed casually outside the approved infrastructure workflow.
          </p>
        </div>
      );
    case 17:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Configuration, Secrets &amp; Migrations
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              17. Configuration Management
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.1 What Is Configuration Management?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configuration management is the process of controlling how software and infrastructure components are configured.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It helps ensure systems operate with the correct settings.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For data engineering, configuration includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database connection settings.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Environment variables.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API endpoints.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Execution parameters.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Job schedules.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource limits.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logging levels.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature flags.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.2 Why Separate Configuration from Code?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose a pipeline connects to three databases:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Development database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Staging database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Python code should not need to be rewritten for each environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead, the application should read configuration externally.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            import os database_host = os.getenv( "DB_HOST" ) database_name = os.getenv( "DB_NAME" ) environment = os.getenv( "APP_ENV", "development" )
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The same application code can run in all three environments with different configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.3 Configuration Files</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            config.yaml
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            pipeline: name: ecommerce-orders batch_size: 5000 processing: file_format: parquet compression: snappy logging: level: INFO
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This contains non-secret configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The database password should not be placed in this file if the file is committed to source control.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.4 Configuration Management Tools</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common options include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ansible.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Systems Manager.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes ConfigMaps.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Helm values.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Environment variables.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform variables.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform manages infrastructure configuration, while tools such as Ansible commonly manage operating-system and software configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These tools can work together.
          </p>
        </div>
      );
    case 18:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Configuration, Secrets &amp; Migrations
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              18. Secrets and Environment Management
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Critical Security Topic
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.1 What Are Secrets?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secrets are sensitive values used to authenticate or authorize access.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database passwords.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud access credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Private keys.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication tokens.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption credentials.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data pipeline may need a password to connect to PostgreSQL or a token to access an external API.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These values must be protected.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.2 Why Should Secrets Not Be Hardcoded?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider this code:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DB_PASSWORD = "my_real_password"
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If this file is committed to GitHub, the password may become accessible to unauthorized individuals.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Even deleting the password from the current file does not necessarily remove it from Git history.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The secret must be rotated or revoked.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.3 Environment Variables</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A common approach is loading sensitive configuration through environment variables.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            import os db_password = os.environ[ "DB_PASSWORD" ]
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The actual secret is supplied by the runtime environment.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.4 Secret Management Tools</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Popular solutions include:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Platform</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Secret management service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AWS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AWS Secrets Manager / Systems Manager Parameter Store</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Azure</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure Key Vault</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Google Cloud</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Secret Manager</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">GitHub</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">GitHub Actions Secrets</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Kubernetes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Kubernetes Secrets</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">HashiCorp</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Vault</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For AWS production pipelines, Secrets Manager can be used to manage database credentials and retrieve them at runtime.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.5 Secrets in Docker</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Do not write this:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ENV DB_PASSWORD=my_password
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            That can expose the value through the image configuration and related build artifacts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead, inject secrets at runtime using an appropriate secret-management mechanism.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.6 Secrets in GitHub Actions</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub allows repository-level and environment-level secrets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A workflow can access a secret through its secrets context.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            steps: - name: Run pipeline env: API_TOKEN: $&#123;&#123; secrets.API_TOKEN &#125;&#125; run: python src/main.py
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The application receives the value through its environment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For cloud authentication, prefer short-lived federated credentials through OIDC where supported.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.7 Secrets in Kubernetes</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes provides Secret objects for confidential configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ConfigMaps are used for non-confidential configuration.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database host → ConfigMap.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database password → Secret.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes documentation distinguishes these configuration mechanisms and warns that ConfigMaps are not intended for confidential values.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes+1
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An important security detail: Kubernetes Secret values are base64 encoded in their manifest representation; base64 is not encryption. Production deployments should use encryption at rest, restrictive RBAC, and appropriate external secret-management integration.
          </p>
        </div>
      );
    case 19:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Configuration, Secrets &amp; Migrations
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              19. Database and Pipeline Migrations
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.1 What Is a Database Migration?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A database migration is a controlled change to the database schema or structure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Adding a new column.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Creating a table.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Changing a data type.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Adding an index.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Creating a constraint.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Renaming a column.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Removing an obsolete column.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose the current table is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CREATE TABLE customers ( customer_id INTEGER PRIMARY KEY, customer_name VARCHAR(100) );
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company wants to add an email field.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A migration could be:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ALTER TABLE customers ADD COLUMN email VARCHAR(255);
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This changes the database schema.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.2 Why Are Migrations Important?</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine a production data pipeline expects this schema:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            customer_id customer_name
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Another developer modifies the database and renames customer_name to full_name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An existing pipeline may immediately fail.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database changes must be coordinated with application and pipeline changes.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.3 Schema Migration Tools</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important tools include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Flyway.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Liquibase.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Alembic.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Django migrations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rails migrations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, Alembic is commonly used for SQLAlchemy-based Python applications.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.4 Migration Versioning</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Migration files should be version-controlled.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`migrations/ │ ├── 001_create_customers.sql ├── 002_add_email_column.sql ├── 003_add_customer_status.sql └── 004_create_orders_table.sql`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each migration represents a controlled database change.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A migration tracking mechanism records which migrations have already been applied.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This helps prevent accidentally executing an already applied migration again.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.5 Data Pipeline Migrations</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Not all migrations involve database schemas.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A pipeline migration can include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Changing the source location.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Changing the target warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Migrating CSV to Parquet.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Changing a transformation framework.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Moving from a self-managed Spark cluster to a managed service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Updating a dataset's partition scheme.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Introducing a new data model.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a company wants to migrate its sales pipeline from CSV output to Parquet output.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A safe plan includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Preserve the existing pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Develop the new output format.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Test the new output.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compare record counts and totals.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate downstream compatibility.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deploy to staging.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Switch production consumers when ready.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retain the ability to recover.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.6 Expand-and-Contract Migration Strategy</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is an important production design pattern for backward-compatible changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose you want to replace a column called customer_name with full_name.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A risky approach is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delete customer_name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Add full_name.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Update every application immediately.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Some applications may still expect the old column.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A safer expand-and-contract approach uses phases.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Phase 1 — Expand</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Add the new column without removing the old one.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ALTER TABLE customers ADD COLUMN full_name VARCHAR(255);
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Phase 2 — Migrate</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Update the application and populate the new field.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, backfill existing data and ensure new records are written correctly.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Phase 3 — Validate</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Confirm all important consumers use the new field.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Check data completeness and consistency.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Phase 4 — Contract</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove the old column only after the affected systems no longer depend on it.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This reduces compatibility risks during deployment.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.7 Migration Safety Principles</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Back up important data before risky schema changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Test migrations in staging.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use backward-compatible changes where possible.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Make migrations repeat-safe where appropriate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Verify existing application compatibility.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate row counts and business totals.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define rollback or forward-recovery procedures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid destructive migrations without a recovery plan.
          </p>
        </div>
      );
    case 20:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Deployment, Recovery &amp; Kubernetes
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              20. Deployment Strategies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment strategy describes how a new version of software or a data pipeline is introduced into an environment.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.1 Recreate Deployment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The existing version is stopped, and the new version is started.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Version 1 Running
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Version 1 Stopped
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Version 2 Started
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Advantages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Simple to implement.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Easy to understand.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Disadvantages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Downtime may occur.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failure may require recovery before service resumes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Useful for jobs where temporary downtime is acceptable.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.2 Rolling Deployment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The new version gradually replaces the old version.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization has four instances running a pipeline service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It updates them in groups while maintaining a desired number of healthy instances.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Advantages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduced downtime for suitable services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Gradual replacement.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Uses existing infrastructure progressively.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Risks:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Old and new versions may run simultaneously.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            They must remain compatible with shared databases and messages.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.3 Blue-Green Deployment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Two production-like environments exist.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Blue: Current version.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Green: New version.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The new version is deployed to Green and tested.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Once ready, traffic or processing ownership is switched to Green.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Release Strategies in Kubernetes: From Canary Deployments to Progressive Delivery | by Salwan Mohamed | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/6zENBbq6kq27WjXgtKEFSDrVt2lrDNY_k8QnGIlNep_835IQ6U-Y6EegHpWddPXn3TRrEXsnK-QIHE4l9V_BaoKjSpNDfQVm29ijRUs663t7e0p82D5pYlm_1Uppdm_q10HNu2yrg5mDAQJNtnvrMVDgjKcOoxi-YMeDTOfS6U4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40salwan.mohamed/release-strategies-in-kubernetes-from-canary-deployments-to-progressive-delivery-b8ea8fdf7906?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If there is a problem, traffic can potentially be switched back to Blue.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Advantages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clear separation between old and new versions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fast traffic switching.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Useful pre-release validation.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Considerations:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Additional infrastructure may be needed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database changes may still affect both environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data writes must be carefully handled during switching.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.4 Canary Deployment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Canary deployment introduces a new version to a small portion of production traffic or workload before full release.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data processing API handles 100,000 requests daily.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of immediately directing everything to the new version, a small portion is sent to the new version.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The team checks:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Error rates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Latency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing correctness.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource consumption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the new version performs correctly, deployment expands.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.5 Shadow Deployment</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A new version processes copies of real inputs without controlling production outputs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The team compares its results with the currently deployed version.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For data engineering, shadow execution is especially useful when validating a new transformation or engine.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, the same input sales data is processed by:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Current Spark transformation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            New Spark transformation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The results are compared before switching production consumers.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.6 Deployment Strategy Comparison</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Strategy</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Downtime</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Additional resources</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Best use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Recreate</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Possible</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Low</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Simple batch jobs</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Rolling</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Usually limited</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Moderate</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Replicated services</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Blue-Green</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Potentially very low</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Higher</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Controlled production switching</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Canary</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Potentially very low</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Moderate</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Gradual release</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Shadow</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">No traffic cutover initially</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Higher</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Comparing new processing logic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 21:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Deployment, Recovery &amp; Kubernetes
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              21. Rollback and Recovery
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.1 What Is Rollback?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rollback means returning to a previously working application or deployment version after a failed release.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Imagine:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version 1 correctly calculates sales revenue.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Version 2 introduces a transformation bug.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            After deployment, the company notices that revenue calculations are incorrect.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rollback may involve restoring the previous application image and deployment configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.2 Common Rollback Techniques</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application rollback
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deploy the previous container image or software release.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure rollback
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Revert or correct a faulty infrastructure configuration through Terraform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This requires special care: Terraform is not a general-purpose undo system, and applying a previous configuration can still destroy or modify resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database recovery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restore a backup or use a database-supported recovery mechanism when appropriate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline recovery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rerun a job from a safe checkpoint or reprocess retained source data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data recovery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restore affected outputs from backups, versioned objects, snapshots, or other recovery mechanisms.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.3 Why Rollback Is More Complicated in Data Engineering</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Software rollback and data rollback are not the same.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a new pipeline version incorrectly processes 10 million transactions and writes the results to the production warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restoring the old Python code does not automatically repair those 10 million records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The team must also repair the data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Possible recovery methods include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rebuilding affected partitions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reprocessing source data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restoring table snapshots.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reverting transactional writes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recalculating incorrect aggregates.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.4 Safe Recovery Strategy</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A production pipeline should have:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Versioned application images.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retained source data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reproducible transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backups or snapshots.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkpointing where appropriate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery documentation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A tested restoration procedure.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.5 Recovery Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose daily sales processing fails.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Sales Pipeline v2 Deployed
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Incorrect Revenue Detected
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Stop New Processing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Deploy Previous Code
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Identify Bad Partitions
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Reprocess Source Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Validate Sales Totals
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Resume Pipeline
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important: A successful rollback is not complete until both application behavior and affected data have been restored or reconciled.
          </p>
        </div>
      );
    case 22:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Deployment, Recovery &amp; Kubernetes
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              22. Introduction to Kubernetes for Data Workloads
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Advanced Container Orchestration
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.1 What is Kubernetes?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes is an open-source platform for orchestrating containerized applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker helps package and run containers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes manages containerized workloads across a cluster of machines.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It helps automate:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Container deployment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scaling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scheduling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery after certain failures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Networking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes uses declarative resources to describe the desired state of workloads and services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.2 Why Do We Need Kubernetes?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine a company has 100 containerized data processing applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Managing every container manually becomes difficult.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The company needs a platform that can:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schedule workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restart failed containers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manage replicas.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Allocate compute resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply deployment updates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manage configuration and service communication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes provides these orchestration capabilities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, Kubernetes adds operational complexity. It is not necessary for every small data engineering pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For many batch workloads, a managed service such as AWS Glue or EMR may be more appropriate.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.3 Kubernetes Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">How Kubernetes Clusters Work: A Production-Focused Deep Dive</span>
            <a href="https://images.openai.com/static-rsc-4/1ADukZG1Vjw9OXT92SMS2Y_3Oi94ovX0UNiC0nr2RBfG4iHPs4nrTstiVN75WUWXn5V9xiPiuZy5-l3m-bu-sw_zINBIXIe1BABgB1r-f52pyYMK8n80xa5MVFwipxUQjzrgIYgC9soA3wuCVsxS82d9eVphrB2dmGr2h-eF31s?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">cloudoptimo.com</span>
            <a href="https://www.cloudoptimo.com/blog/how-kubernetes-clusters-work-a-production-focused-deep-dive/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Kubernetes cluster contains two major logical parts.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Control Plane</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The control plane manages cluster operations.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important components include:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API Server
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Entry point for Kubernetes API operations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scheduler
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Selects suitable worker nodes for newly created pods.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Controller Manager
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runs controllers that work to maintain desired cluster state.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            etcd
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed key-value store used by Kubernetes to preserve cluster state.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Worker Nodes</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Worker nodes run applications.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important components include:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubelet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Communicates with the control plane and ensures assigned pods run.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Container Runtime
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runs containers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kube-proxy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implements network-related Service behavior in clusters using that component.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Worker nodes host Pods, which contain one or more containers.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.4 Important Kubernetes Objects</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pod
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Pod is the smallest deployable compute object in Kubernetes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It contains one or more containers that share certain resources, such as networking.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Pod runs a Python transformation container.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Deployment manages stateless applications and controls the desired number of replicas.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want three instances of a pipeline API.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Deployment helps maintain that desired replica count.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Service provides a stable network endpoint for accessing a set of Pods.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Job
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Job runs a task until the required successful completions have occurred.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is useful for batch workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CronJob
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A CronJob creates Jobs on a repeating schedule.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data pipeline must execute every day at midnight.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes CronJobs support scheduled task execution, while Kubernetes Jobs handle one-time tasks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes+1
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ConfigMap
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stores non-confidential configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secret
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stores confidential configuration values for workloads, with appropriate security configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.5 Kubernetes for Data Engineering</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes can support several types of data workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run a containerized Python ETL job.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scheduled processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run daily data transformation jobs using CronJobs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run Spark workloads on Kubernetes using supported Spark deployment configurations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Streaming applications
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deploy long-running stream consumers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Orchestration services
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Host data workflow-related applications and services.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Kubernetes cluster is useful when workloads need container orchestration and the organization has the operational capability to manage the platform.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.6 Example: Kubernetes Job for a Data Pipeline</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose you have a Docker image:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders-pipeline:v1
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You want Kubernetes to execute it once.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Create:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders-job.yaml
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`apiVersion: batch/v1
kind: Job
metadata:
  name: orders-processing
spec:
  backoffLimit: 2
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: orders-pipeline
          image: orders-pipeline:v1
          env:
            - name: APP_ENV
              value: "staging"`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Deploy it:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`kubectl apply -f orders-job.yaml`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Check the Job:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            kubectl get jobs
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Check Pods:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            kubectl get pods
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            View logs:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            kubectl logs &lt;pod-name&gt;
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Job controller manages execution and retries according to its configuration.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.7 Example: Kubernetes CronJob</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now suppose the data pipeline must execute every day.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Create:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            orders-cronjob.yaml
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`apiVersion: batch/v1
kind: CronJob
metadata:
  name: daily-orders-pipeline
spec:
  schedule: "0 0 * * *"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      backoffLimit: 2
      template:
        spec:
          restartPolicy: Never
          containers:
            - name: orders-pipeline
              image: orders-pipeline:v1
              env:
                - name: APP_ENV
                  value: "production"`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The schedule:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            0 0 * * *
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            means midnight every day according to the Kubernetes CronJob controller's configured time zone behavior. By default, schedules use the controller manager's local time zone; specify .spec.timeZone where appropriate to avoid ambiguity.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Apply:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`kubectl apply -f orders-cronjob.yaml`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes documentation describes CronJobs as scheduled creators of Jobs and notes that their workloads should be designed to tolerate possible repeated execution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.8 Kubernetes ConfigMaps and Secrets</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example ConfigMap:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`apiVersion: v1
kind: ConfigMap
metadata:
  name: pipeline-config
data:
  APP_ENV: production
  LOG_LEVEL: INFO`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example Secret reference:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`apiVersion: v1
kind: Secret
metadata:
  name: database-secret
type: Opaque
stringData:
  DB_PASSWORD: "REPLACE_WITH_SECURELY_INJECTED_VALUE"`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is an illustration of the object structure, not a recommendation to place real credentials in a committed YAML file.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In production, provision secrets through a secure external mechanism, restrict access, and enable appropriate encryption at rest.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A ConfigMap is for non-confidential data, while a Secret is intended for confidential information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes+1
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.9 Kubernetes Resource Management</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data workloads can consume large amounts of CPU and memory.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes allows resource requests and limits to be specified.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            resources: requests: cpu: "500m" memory: "512Mi" limits: cpu: "2" memory: "2Gi"
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Requests describe the resource amount Kubernetes uses when scheduling a container.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Limits define resource ceilings enforced by the platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For data processing workloads, incorrect memory configuration may result in application failures or container termination due to out-of-memory conditions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.10 Kubernetes vs Docker Compose</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Docker Compose</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Kubernetes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Main purpose</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Multi-container application management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Container orchestration</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Complexity</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Lower</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Higher</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Scheduling</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Basic local service management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cluster scheduling</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Scaling</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Manual or configured service scaling</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Desired replicas and workload controllers</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Recovery</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Container restart policies</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Controllers and probes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Production orchestration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Limited</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Designed for cluster orchestration</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Learning use</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Local development</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Distributed workload management</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When Should Data Engineers Learn Kubernetes?
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Learn the fundamentals when:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Working with containerized data applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Using Spark on Kubernetes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Working with distributed data platforms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deploying workflow orchestration infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Supporting cloud-native data systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            You do not need to deploy every ETL pipeline on Kubernetes.
          </p>
        </div>
      );
    case 23:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 8 · Production Project &amp; Advanced Topics
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              23. Complete Practical Project — Build a Production-Ready DataOps Platform
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Major Capstone Project
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git + Docker + GitHub Actions + Terraform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now we will combine the concepts from this module into one realistic data engineering project.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.1 Project Objective</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build an e-commerce data pipeline that can be developed locally, tested automatically, packaged into Docker, deployed through CI/CD, and supported by infrastructure created through Terraform.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The application should:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Extract order information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clean and transform data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate transformed records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store processed datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run inside Docker.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support development, staging, and production configurations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automatically execute tests through GitHub Actions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build and publish Docker images.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provision infrastructure through Terraform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support controlled deployment and rollback.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.2 Complete Architecture</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Production DataOps Architecture</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Repository
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python · SQL · Tests · Dockerfile · Terraform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git Branches and Pull Requests
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature development · Code reviews
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Actions — CI
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Linting · Unit tests · Integration tests · Data validation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Image
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Packaged application and runtime dependencies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Container Registry
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Versioned application images
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform — Infrastructure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 · IAM · Networking · Compute
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Staging
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment verification
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Approved release
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring and Recovery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logs · Data quality · Metrics · Rollback
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.3 Step 1 — Create the Repository</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Create a GitHub repository:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ecommerce-dataops-platform
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Recommended structure:</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ecommerce-dataops-platform/ │ ├── src/ │ ├── ingestion/ │ │ └── extract.py │ │ │ ├── transformation/ │ │ └── transform.py │ │ │ ├── validation/ │ │ └── validate.py │ │ │ ├── loading/ │ │ └── load.py │ │ │ └── main.py │ ├── tests/ │ ├── unit/ │ │ ├── test_transform.py │ │ └── test_validation.py │ │ │ ├── integration/ │ │ └── test_pipeline.py │ │ │ └── conftest.py │ ├── data/ │ └── sample_orders.csv │ ├── config/ │ └── config.yaml │ ├── migrations/ │ └── 001_create_orders.sql │ ├── terraform/ │ ├── main.tf │ ├── variables.tf │ └── outputs.tf │ ├── .github/ │ └── workflows/ │ ├── ci.yml │ └── deploy.yml │ ├── Dockerfile ├── compose.yaml ├── requirements.txt ├── .dockerignore ├── .gitignore └── README.md`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This organization separates application code, tests, configuration, infrastructure, and deployment automation.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.4 Step 2 — Create the Transformation</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create src/transformation/transform.py.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd

def transform_orders(data):
    required_columns = ["order_id", "customer_id", "amount", "status"]
    missing = [col for col in required_columns if col not in data.columns]
    if missing:
        raise ValueError(f"Missing columns: {missing}")
    
    result = data.drop_duplicates(subset=["order_id"]).copy()
    result = result[result["status"] == "completed"]
    result = result[result["amount"] > 0]
    return result`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This function checks the schema, removes duplicate records, selects completed orders, and filters invalid amounts.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.5 Step 3 — Add Automated Tests</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create tests/unit/test_transform.py.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            import pandas as pd from src.transformation.transform import ( transform_orders ) def test_transform_orders(): data = pd.DataFrame(&#123; "order_id": [1, 1, 2, 3], "customer_id": [ "C1", "C1", "C2", "C3" ], "amount": [500, 500, 700, -100], "status": [ "completed", "completed", "cancelled", "completed" ] &#125;) result = transform_orders(data) assert len(result) == 1 assert result.iloc[0]["order_id"] == 1
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Run:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            pytest -v
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The expected output should show the test passing.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.6 Step 4 — Build the Docker Image</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a Dockerfile using the Python pipeline.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Build:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker build \\ -t ecommerce-pipeline:v1 .`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Test:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker run --rm \\ ecommerce-pipeline:v1`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now your data pipeline runs in a packaged environment.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.7 Step 5 — Run the Local Development Stack</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use Docker Compose to start the required dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            docker compose up -d
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Your local environment should contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Persistent database volume.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application configuration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Test the connection and data extraction before proceeding.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.8 Step 6 — Implement Git Collaboration</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Initialize Git:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git init
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Create the main branch:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git branch -M main
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Create a feature branch:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git switch -c feature/improve-etl
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement your transformation.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Commit:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git add . git commit -m "Add order transformation"
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Push:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            git push -u origin feature/improve-etl
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Open a pull request on GitHub.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The changes should be reviewed before merging.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.9 Step 7 — Automate CI</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a GitHub Actions workflow.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The workflow should:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Check out the repository.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Set up Python.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Install dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run code quality checks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run unit tests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build the Docker image.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Report the result.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A failed unit test should cause the CI workflow to fail.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.10 Step 8 — Provision Infrastructure with Terraform</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create the infrastructure configuration.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For this project, provision:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 data lake bucket.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM role for the processing application.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Approved permissions for accessing the data lake.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Required networking and monitoring resources where applicable.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Run:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            cd terraform terraform init terraform validate terraform plan
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Review the plan.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Only apply the configuration to the intended environment once it has been reviewed and approved.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use a protected remote backend for shared state.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.11 Step 9 — Deploy to Staging</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deploy the built Docker image to a staging environment.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Check:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application startup.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database connection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            S3 permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Output schema.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Runtime duration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Run a representative test dataset.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.12 Step 10 — Deploy to Production</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Once staging tests pass:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Obtain required approval.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use the same tested image.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deploy to production.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Verify pipeline execution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Check data quality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitor errors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Record the deployed image and source commit.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The same tested image should be promoted rather than rebuilding an unrelated image for production.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.13 Step 11 — Implement Rollback</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose version 2 produces invalid sales records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Your release system should allow you to deploy the previous known-good image.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ecommerce-pipeline:v1 ecommerce-pipeline:v2 ecommerce-pipeline:v3
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Record the source commit and image digest for each release.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rollback the application to the last verified version, then repair any data already affected by the failed release.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.14 Step 12 — Add Monitoring</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Monitor:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Metric</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Job duration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Detect slow processing</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Input row count</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Track incoming data</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Output row count</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Detect unexpected changes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Rejected rows</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Track bad records</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Failure count</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Identify reliability issues</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data freshness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Check reporting timeliness</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Resource utilization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Identify inefficient resource usage</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Deployment version</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Trace which code generated output</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Your capstone should finish with a working, reproducible, testable, and deployable pipeline.
          </p>
        </div>
      );
    case 24:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 8 · Production Project &amp; Advanced Topics
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              24. Advanced Topics for Production DataOps
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Once you understand the core module, study these additional topics.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.1 Data Observability</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data observability means understanding the health and behavior of data systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data freshness.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data volume.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data distribution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lineage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline failures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transformation performance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, suppose a sales pipeline normally receives 500,000 transactions daily.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Today it receives only 8,000.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline might finish successfully, but the input volume is suspicious.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data observability helps identify such problems.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.2 Data Lineage</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lineage tracks where data originates and how it changes.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                PostgreSQL Orders
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Raw S3 Dataset
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Transformation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Curated Sales Table
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Redshift Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Sales Dashboard
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If a source column changes, data lineage helps identify downstream datasets and reports affected by that change.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.3 Workflow Orchestration</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workflow orchestration manages the sequence, dependencies, retries, and scheduling of tasks.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important tools include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Airflow.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dagster.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prefect.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Step Functions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS Glue Workflows.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Extract Orders
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Validate Input
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Transform Orders
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Load Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Refresh Reporting
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Actions is excellent for repository-driven automation and deployment. A dedicated orchestration platform is usually more appropriate for managing recurring production data workflows and their runtime dependencies.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.4 Container Registries</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A container registry stores Docker images.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Hub.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon ECR.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Container Registry.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure Container Registry.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Artifact Registry.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A registry allows an organization to build an image once and distribute it to deployment environments.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important concepts:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Image tags.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Image digests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Registry authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Image scanning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Image retention.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access control.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Image signing and provenance.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.5 Dependency Management</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data pipelines depend on multiple software libraries.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For Python:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            requirements.txt.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            pyproject.toml.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Virtual environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dependency constraints.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lock files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For reproducible builds, test and lock dependency versions.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            pandas==2.2.3 pytest==8.3.4 sqlalchemy==2.0.36
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are illustrative version pins, not a recommendation that every project use these particular versions. Choose compatible, security-maintained releases and verify them against the runtime.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.6 Infrastructure Security</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Production IaC should address:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM least privilege.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encrypted state storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            State access controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure provider authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restricted networking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource deletion protection.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure scanning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Peer review.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Approved deployment policies.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.7 Disaster Recovery and Business Continuity</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A deployment failure is not the only possible production incident.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            You should also understand:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure failure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regional outage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database corruption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data loss.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Credential compromise.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage misconfiguration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failed migration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery Point Objective.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery Time Objective.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build and test recovery procedures rather than assuming backups will automatically restore every part of the system.
          </p>
        </div>
      );
    case 25:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Interview Questions, Labs &amp; Capstone
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              25. Module 19 — Important Interview Questions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These questions cover both conceptual understanding and practical production engineering.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataOps and Software Engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is DataOps, and why is it important?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the difference between DataOps and DevOps.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are the main principles of DataOps?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is idempotency in data engineering?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why should ETL pipelines be modular?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data observability?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data lineage?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why are logging and error handling important?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git and Collaboration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Git?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between Git and GitHub?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Git repository?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the Git staging area.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Git commit?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Git branching?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain GitHub Flow and Git Flow.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a merge conflict?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a pull request?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What happens during a code review?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is .gitignore?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker and Containers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Docker?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Docker image?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Docker container?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the difference between containers and virtual machines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Dockerfile?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the purpose of FROM, COPY, RUN, CMD, and ENTRYPOINT.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Docker Compose?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are Docker volumes?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How do you containerize a Python ETL pipeline?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are Docker image layers?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a container registry?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CI/CD and Testing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Continuous Integration?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain Continuous Delivery vs Continuous Deployment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is GitHub Actions?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are workflows, jobs, steps, and runners?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How do you automate Python tests using GitHub Actions?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between unit and integration testing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data quality testing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is contract testing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How do you test a data pipeline before deploying it?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is OIDC, and why is it useful for cloud deployments?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform and Infrastructure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Infrastructure as Code?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Terraform?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain Terraform providers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Terraform resource?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain Terraform's init, plan, and apply commands.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Terraform state?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why should Terraform state be stored securely?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is state locking?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are Terraform modules?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is infrastructure drift?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between Terraform and Ansible?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production and Kubernetes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between development, staging, and production?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is secret management?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why should passwords not be hardcoded?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a database migration?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain expand-and-contract migration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are blue-green deployments?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a canary deployment?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is application rollback?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why is data recovery different from application rollback?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Kubernetes?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain Kubernetes architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Kubernetes Pod?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the difference between a Deployment and a Job?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Kubernetes CronJob?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are ConfigMaps and Secrets?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How can Kubernetes be used for Spark and batch processing?
          </p>
        </div>
      );
    case 26:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Interview Questions, Labs &amp; Capstone
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              26. Practical Assignments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Complete these assignments in order.
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
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Create a Python ETL repository using Git</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Version-controlled project</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">2</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Implement feature branches and pull requests</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Collaboration workflow</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">3</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Configure .gitignore and repository documentation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Clean repository</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">4</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Write a Python Dockerfile</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Containerized pipeline</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">5</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Build and run Docker images</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Working containers</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">6</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Use Docker Compose with PostgreSQL</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Local development environment</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">7</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Create development, staging, and production configurations</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Environment separation</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">8</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Write pytest unit tests</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Automated code verification</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">9</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Implement data quality checks</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Validated datasets</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">10</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Build a GitHub Actions CI workflow</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Automatic testing</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">11</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Extend CI to build and publish Docker images</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Automated artifact generation</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">12</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Create an S3 bucket using Terraform</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Automated infrastructure</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">13</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Configure secure Terraform remote state</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Shared infrastructure management</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">14</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Implement secrets management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Protected credentials</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">15</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Create and execute database migrations</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Versioned schema changes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">16</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Implement blue-green or canary deployment concepts</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Controlled releases</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">17</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Create a recovery and rollback procedure</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Production recovery</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">18</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Run a data pipeline using Kubernetes Job</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Container orchestration</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">19</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Schedule processing using Kubernetes CronJob</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Automated batch execution</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">20</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Document and demonstrate the complete DataOps lifecycle</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Capstone implementation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 27:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Interview Questions, Labs &amp; Capstone
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              27. Final Capstone Challenge
            </h2>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Production Engineering Challenge</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Project: Automated Data Engineering Deployment Platform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build a system where an engineer can change a data transformation, submit a pull request, pass automated tests, build a Docker image, and deploy the approved version.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Your final project must demonstrate:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git version control and collaboration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Modular Python data pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker image creation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker Compose development.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Environment separation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automated unit and integration testing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Actions CI/CD.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform infrastructure provisioning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure secrets management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database and pipeline migrations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Controlled production deployment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rollback and data recovery.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes batch processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The final deliverables should include a GitHub repository, architecture diagram, README, infrastructure configuration, CI/CD workflows, testing reports, and deployment documentation.
          </p>
        </div>
      );
    case 28:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Interview Questions, Labs &amp; Capstone
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              28. Recommended Learning Resources
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use official documentation and practical labs to accompany the module.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Anakin.ai - 10x Your Productivity with AI</span>
            <a href="https://images.openai.com/static-rsc-4/Si2y7ezRjaY6Do1dHDKkpXuqW5koVvaCx7qGxMj3nFsCdtMchtJmEJgVaHrMoo7A_224NFlsWoOGsm7gwx0RiDENIE31vKT2paingEeG86qUw1bvNlPV12HTxEI5P0pfbUyR41MVvXxFkYsiGbX5pb8piec95SSWAbKR3d_NVRo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn version control, branching, commits, merging, and collaboration.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Official Git documentation</span>
            <a href="https://git-scm.com/doc?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Learn How to Develop, Deploy, and Run Your Application with Docker | by Neeraj Kushwaha | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/vpeCahKUt8HLTzNJcfyZuraqvPe4DYkQcZ6H_bYFxktcjGE9IzKNCy_2wzufjFg1CV4gCPUSKqyNqOP1LsjwqsGi_Ptm9bXovNu4KVQgDh00UrSckl0PXpeQz3Fy185kJss3Wgjsqi7965WWyoiWi3LAsk2u_qRKHUOJ4rIUl0s?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn images, containers, Dockerfiles, networking, volumes, and Compose.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Docker learning resources</span>
            <a href="https://docs.docker.com/get-started/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">¿Qué es GitHub Actions?. La clave para automatizar tu flujo de… | by María Claudia Pérez Escalante | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/xg-DO-ZEEBnTj4eHiAO5xQWhqgvPR1RoAxLD46SpujyPGsJEF8kZcclnniBAt7V-Jrt9c64Vr0mA9a6D111LzlZS3NjuLKAx2OIIgf-H5H8x7gl3YbR1r9oPEu72toeARKpJIt_OMsO1SiQL1aOzBaE9qj-zmVBso0FgusAwZDw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GitHub Actions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn automated CI/CD workflows, runners, secrets, and deployments.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Official GitHub Actions documentation</span>
            <a href="https://docs.github.com/en/actions?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Terraform Import Blocks: Simplify Your Infrastructure Management | by Amaresh Pelleti | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/GQxANqPTR9FX1D86Igdva3B64t1UTqC5Mx250ujtO-NecxVrHFZVoZN2GnbXBvHbcRc-eg_0ZC8WIA9JuzeTXGdfRaeesZP6P1MI7O8cb0eDHdDo6sKXpT1_6_I2xUw0BmGUhVUM4sS2k0dEqLs34rKKOEINudNqKoCxIy4mudQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn providers, resources, modules, state, and infrastructure provisioning.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Official Terraform documentation</span>
            <a href="https://developer.hashicorp.com/terraform/docs?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Download Kubernetes Icon Logo Vector Online | Logowik</span>
            <a href="https://images.openai.com/static-rsc-4/r_DRTwB4WNPzF-eAhFmzLxQAqu6QCewrKIYIIyiudjw9gROc5PkeO3jHM9lm5F8bJtZaQjBysZpWLRZFJjhV6EVM3EHyUd7358tfRtowcoY7adQ98hlBVqI6EDRNpSHsf2PhxVt-Yr72FsZFbfk5iBkxpd8FcUXzfhNFO8X81BU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn Pods, Deployments, Jobs, CronJobs, Services, configuration, and orchestration.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Official Kubernetes documentation</span>
            <a href="https://kubernetes.io/docs/home/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">File:Pytest logo.svg - Wikimedia Commons</span>
            <a href="https://images.openai.com/static-rsc-4/HAbymyVnhv5o_ebIXc4fnTb7BKnDLOAg3IrHBMGLugeZsZ_DD95aCJk4cpoukhHgjWexEl-IOVbGA5l3qKyXdAj0qMQXNlCzY74ZBmVs5WPSVuHPR36dWmFW_-eW8gEefy3f3SVBx_uRc8c7yqGtSO9oWud3HFuw-W6-Eoy29bk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            pytest
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn automated Python testing and test organization.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Official pytest documentation</span>
            <a href="https://docs.pytest.org/en/stable/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ansible
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Learn configuration management and infrastructure automation.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Official Ansible documentation</span>
            <a href="https://docs.ansible.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      );
    case 29:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Interview Questions, Labs &amp; Capstone
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              29. Final Module Summary
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            By completing Module 19, you should understand how professional data engineering teams move from writing pipeline code to operating reliable production systems.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Area</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Skills you should acquire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">DataOps</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Collaboration, automation, data reliability</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Software engineering</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Modular development, logging, idempotency</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Git</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Version control, commits, branching, merging</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Collaboration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pull requests, code reviews, repository management</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Docker</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Images, containers, Dockerfiles</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Docker Compose</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Local multi-container development</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Pipeline containerization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Reproducible execution environments</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Environment management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Development, staging, production</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">CI/CD</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Automated build, test, and deployment</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">GitHub Actions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Workflow automation</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Pipeline testing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Unit, integration, regression, and quality tests</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Infrastructure as Code</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Declarative infrastructure management</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Terraform</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Providers, resources, modules, state</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Provisioning</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Automated cloud resource creation</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Configuration management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Consistent application and system settings</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Secrets management</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Secure credentials and environment configuration</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Migrations</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Database and pipeline change management</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Deployment</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Rolling, blue-green, canary, and shadow strategies</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Recovery</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Rollback, backup, and data restoration</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Container orchestration for data workloads
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The most important thing to understand
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 18 taught you how to build a cloud data platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 19 teaches you how to engineer and operate that platform professionally.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How Modules 18 and 19 connect
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 18 — Cloud Data Engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS · S3 · Glue · Athena · Redshift · EMR · Kinesis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build the data infrastructure and processing architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 19 — DataOps and Deployment Engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Git · Docker · CI/CD · GitHub Actions · Terraform · Kubernetes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build, test, deploy, automate, and maintain the infrastructure and pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production-Ready Data Engineering Platform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reliable · Automated · Scalable · Secure · Reproducible
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Your ultimate learning objective: You should be capable of taking a Python or Spark data pipeline from your local development environment all the way to a tested, automated, secure, and recoverable production deployment.
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

export default DataOpsSection;
