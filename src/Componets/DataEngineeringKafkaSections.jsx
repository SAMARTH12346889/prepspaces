import React from "react";
import {
  Database,
  Table,
  Layers,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Cpu,
  Server,
  Zap,
  Activity,
  Workflow,
  HardDrive,
  GitBranch,
  ShieldCheck,
  RefreshCw,
  Clock,
  Terminal,
  FileCode,
  Sliders,
  Filter,
  Globe,
  Key,
  Binary,
  FileSpreadsheet,
  Code2,
  Boxes,
  BarChart3,
  Split,
  Merge,
  AlertTriangle,
  CheckCircle,
  Radio,
  Share2,
  Lock,
  RotateCcw
} from "lucide-react";

export default function DataEngineeringKafkaSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 16: Event-Driven Architecture and Apache Kafka Overview & Roadmap */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Course Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 16: Event-Driven Architecture and Apache Kafka Overview &amp; Roadmap
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 16 — Event-Driven Architecture and Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DATA ENGINEERING • ADVANCED LEVEL • REAL-TIME DATA SYSTEMS</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module Overview</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven architecture and Apache Kafka are among the most important technologies in modern data engineering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Modern companies generate enormous amounts of data continuously:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers place orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payments are completed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Products are added to shopping carts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory levels change.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Users interact with applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sensors generate IoT events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Banking systems generate transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applications generate logs and monitoring events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Traditional systems often depend on direct communication between applications. When one service needs information from another, it sends a request and waits for a response.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">As applications grow, this creates tight dependencies, performance bottlenecks, and failure propagation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven architecture addresses these challenges by allowing systems to communicate through events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka provides a distributed platform for storing, transmitting, and processing these events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, consider an e-commerce company:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A customer purchases a laptop. That single business action can generate an OrderCreated event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple independent services can consume that event:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment service processes payment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory service reduces stock.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Notification service sends confirmation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytics service records the transaction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recommendation service updates customer behavior data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">All these services can react independently without the order service directly calling each of them.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is the foundation of event-driven data architecture.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Learning objectives</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">By completing this module, you should be able to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand event-driven architecture and event-based communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Differentiate messaging systems, queues, and message brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand Apache Kafka's internal architecture.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Work with Kafka brokers, clusters, topics, and partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build Kafka producers and consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand consumer groups and partition assignment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Manage offsets and consumer rebalancing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand ordering and partition keys.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Configure replication and producer acknowledgements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement reliable message delivery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand Schema Registry, Avro, and JSON serialization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build Kafka Connect pipelines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand Change Data Capture (CDC).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement dead-letter queues and message replay.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Secure Kafka clusters and applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build an end-to-end real-time event ingestion platform.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 1 — Event-Driven Architecture Fundamentals
          </div>
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to Event-Driven Architecture */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Event-Driven Fundamentals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Event-Driven Architecture
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven architecture (EDA) is a software architecture pattern in which different components communicate by producing and consuming events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An event represents something that has already happened.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An order was created.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A payment was completed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A customer registered.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A product was restocked.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A delivery was dispatched.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A user logged in.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of directly calling another service to communicate every business action, a component publishes an event. Interested components subscribe to or consume that event.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.1 Understanding an event</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An event records a fact about something that happened.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an online shopping application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A customer places an order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application generates an event:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_id": "EVT-10001", "event_type": "OrderCreated", "order_id": 5001, "customer_id": 101, "product_id": 2001, "quantity": 2, "amount": 50000, "currency": "INR", "event_timestamp": "2026-11-09T10:30:00Z" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This event communicates that an order was created.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It contains information about:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What happened.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Which order was affected.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Which customer placed the order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Which product was purchased.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When the event occurred.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Notice the distinction between an event and a command.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event: OrderCreated means the order has already been created.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Command: CreateOrder requests that an order should be created.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events describe facts. Commands request actions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.2 Traditional architecture versus event-driven architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a traditional e-commerce application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When a customer places an order:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Customer | v Order Service | v Payment Service | v Inventory Service | v Notification Service | v Analytics Service`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order service communicates directly with multiple services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This creates tight coupling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, suppose the notification service becomes unavailable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order service may have to wait for the notification service, even though the notification is not necessary to complete the order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A similar problem occurs when many services are connected through synchronous calls.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.3 Event-driven architecture solution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now introduce an event broker.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order Service | v OrderCreated | v Message Broker | +--------------+--------------+ | | | v v v Payment Inventory Notification Service Service Service | | | v v v Payment Stock Update Email / SMS Processing | v Analytics Service`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order service publishes an event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The other services consume it independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order service does not need to know which services are interested in the event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This provides loose coupling and allows different teams to develop and deploy their services more independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka is one platform used to implement this architecture. Its official documentation describes producers and consumers as decoupled applications communicating through durable topics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">GitHub</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.4 Characteristics of event-driven architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Loose coupling</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer does not need to know the identities or internal implementations of individual consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Asynchronous communication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A producer can publish an event without waiting for all consumers to finish processing it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scalability</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different consumers can scale independently according to their workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event persistence</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events can be retained and replayed, depending on the messaging platform and retention configuration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extensibility</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">New consumers can be added without modifying the original producer, provided they understand the event contract.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Eventual consistency</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different services may update their data at different times.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.5 Real-world use cases</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Industry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">E-commerce</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">OrderCreated, PaymentCompleted, ProductRestocked</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Banking</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MoneyTransferred, PaymentFailed, AccountUpdated</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Healthcare</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AppointmentBooked, LabResultReady</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transportation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">VehicleLocationUpdated, DeliveryCompleted</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Social media</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostCreated, UserLiked, CommentAdded</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Gaming</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PlayerJoined, MatchStarted, ScoreUpdated</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">IoT</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TemperatureChanged, SensorTriggered</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Financial trading</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TradeExecuted, MarketPriceUpdated</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.6 When should event-driven architecture be used?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">EDA is particularly useful when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple applications need the same information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Services should process events independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applications need asynchronous workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event history and replay are important.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system needs to handle unpredictable traffic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time data processing is required.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is not always the best solution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a simple application with one database and a few operations may not need a distributed event platform. Event-driven systems also introduce complexity in debugging, ordering, schema management, and distributed consistency.</p>
        </div>
      </section>

      {/* SECTION 2: 2. Event-Based Communication */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Event-Driven Fundamentals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Event-Based Communication
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-based communication is a communication model in which applications exchange information through events rather than relying exclusively on direct requests.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.1 Producer and consumer model</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are two primary roles.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application or service that creates an event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Order service creates an OrderCreated event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application or service that receives and processes an event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Inventory service consumes OrderCreated and updates stock.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Producer | | Publishes event v Event Infrastructure | | Delivers event v Consumer | v Processes event`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A single producer can publish events for multiple consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Similarly, a consumer can subscribe to multiple event streams.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.2 Anatomy of an event</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A well-designed event normally contains several components.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_id": "EVT-10001", "event_type": "OrderCreated", "event_version": 1, "event_timestamp": "2026-11-09T10:30:00Z", "producer": "order-service", "key": "101", "data": { "order_id": 5001, "customer_id": 101, "amount": 50000, "currency": "INR" }, "metadata": { "correlation_id": "CORR-9001", "trace_id": "TRACE-101" } }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important fields:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Field</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Purpose</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">event_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unique event identifier</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">event_type</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identifies what happened</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">event_version</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identifies event schema version</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">event_timestamp</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time the event occurred</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">producer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Originating application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">key</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identifies the entity used for partitioning</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business event information</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">correlation_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Connects related operations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">trace_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Helps trace distributed execution</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Not every event format requires every field, but these concepts help build maintainable event contracts.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.3 Event notification versus event-carried state transfer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are two common ways to design events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event notification</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event indicates that something happened, with minimal data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_type": "OrderUpdated", "order_id": 5001 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer may need to call another service to retrieve the full order information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-carried state transfer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event contains enough information for consumers to perform their processing independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_type": "OrderUpdated", "order_id": 5001, "customer_id": 101, "status": "completed", "amount": 50000 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This reduces the need for additional service calls, but the producer must manage data contracts and sensitive information carefully.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.4 Event choreography versus orchestration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are two ways to coordinate event-driven workflows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Choreography</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each service reacts to events and publishes new events. There is no central workflow coordinator.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`OrderCreated | v Payment Service | v PaymentCompleted | v Inventory Service | v InventoryReserved | v Notification Service`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Loose coupling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Independent services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">No central workflow controller required.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Complex workflows can become difficult to understand.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tracing failures across services can be challenging.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business process ownership may become unclear.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orchestration</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A central orchestrator coordinates the sequence of activities.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order Workflow | +---------+---------+ | | | v v v Payment Inventory Notification Service Service Service`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The orchestrator decides which action happens next based on success or failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is useful for complex business workflows, such as payments, cancellations, refunds, and inventory reservation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.5 Event-driven architecture and microservices</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Microservices commonly use event-based communication because services manage independent business capabilities.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order service owns order information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment service owns payment information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory service owns stock information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer service owns customer information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each service can publish domain events that other systems consume.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This architecture requires clear ownership and data contracts so that one service does not become dependent on undocumented database structures owned by another service.</p>
        </div>
      </section>

      {/* SECTION 3: 3. Messaging Systems */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Event-Driven Fundamentals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Messaging Systems
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A messaging system enables applications to exchange information through messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of requiring two applications to communicate directly, a messaging platform can receive, store, route, and deliver messages.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.1 Why messaging systems are required</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a company processing 100,000 orders during a major sale.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the order service sends messages directly to five different services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A traffic spike could overload one or more downstream services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A messaging system can act as an intermediary:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order Service | v Messaging System | +------------+------------+ | | | v v v Payment Inventory Notification Service Service Service`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The messaging layer can buffer traffic and allow consumers to process records at their own pace, subject to capacity and retention limits.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.2 Important messaging concepts</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message: A unit of information exchanged between systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer: Creates and sends messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer: Receives and processes messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker: Server that accepts, stores, and distributes messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Queue: A structure that holds messages for consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic: A named stream or category of messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Acknowledgement: A signal indicating that a message or operation has been accepted or processed according to the system's rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delivery guarantee: Defines whether messages can be lost, repeated, or processed within a specified transactional boundary.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.3 Common messaging platforms</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Technology</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Primary use</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed event streaming and durable event logs</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RabbitMQ</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message queuing and routing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache ActiveMQ</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Enterprise messaging</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon SQS</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managed message queues</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Google Cloud Pub/Sub</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managed asynchronous messaging</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Pulsar</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed messaging and event streaming</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These systems have different storage, routing, retention, ordering, and delivery semantics. It is misleading to assume that one provides replay while all others cannot; capabilities depend on each platform's configuration and design.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.4 Messaging system requirements</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production messaging system commonly needs:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reliable message storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">High throughput.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Low-latency delivery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message ordering where required.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication and authorization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message replay or recovery mechanisms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka is especially useful when a company needs durable event streams that can be consumed by multiple independent applications.</p>
        </div>
      </section>

      {/* SECTION 4: 4. Message Brokers and Queues */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Event-Driven Fundamentals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Message Brokers and Queues
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A message broker is an intermediary system that receives messages from producers and delivers them to consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It reduces direct dependencies between applications and manages message communication.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.1 What is a message broker?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine three services:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Notification service.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without a broker, the order service might communicate directly with the other services.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With a broker, the order service publishes a message to the broker.
Order Service | v Message Broker | +----------------+ | | v v Payment Service Notification Service`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The broker manages message storage, routing, and delivery according to its configuration.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.2 What is a message queue?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A message queue is a mechanism for holding messages until they are processed by consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Producer | v +----------------------+ | Message Queue | | | | Message 1 | | Message 2 | | Message 3 | | Message 4 | +----------------------+ | v Consumer | v Processing`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A traditional work queue commonly distributes each message to one worker for processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, suppose an application generates 1,000 image-processing jobs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Four workers consume jobs from a shared work queue. Each job is assigned to an available worker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is useful for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Background processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Email delivery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Image conversion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Report generation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data transformation jobs.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.3 Queue versus publish-subscribe</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are two important messaging patterns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Point-to-point messaging</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A producer sends messages to a queue. Workers compete to consume messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generally, each message is processed by one consumer in the competing-consumer group.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Producer | v Queue | +------+------+ | | | v v v C1 C2 C3 One worker handles each message`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish-subscribe messaging</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A producer publishes a message to a topic. Multiple independent subscribers can receive the same event.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Producer | v Topic | +--------+--------+ | | | v v v Payment Analytics Notification`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is useful when multiple business services need to react to the same event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka consumer groups provide a way to combine these two patterns: separate groups can independently consume a topic, while consumers within the same group divide the topic's partitions among themselves.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.4 Message queue versus Kafka</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Traditional work queue</th>                  <th className="px-4 py-3">Apache Kafka</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Often designed around work distribution</td>                  <td className="px-4 py-2.5 text-stone-700">Designed around durable event streams</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Messages may be removed after acknowledgement</td>                  <td className="px-4 py-2.5 text-stone-700">Records are retained according to topic policy</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Consumer acknowledgement commonly controls removal</td>                  <td className="px-4 py-2.5 text-stone-700">Consumer offsets track progress independently</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Work is commonly assigned to one competing consumer</td>                  <td className="px-4 py-2.5 text-stone-700">Multiple consumer groups can independently read the same events</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Replay may require separate mechanisms or retention configurations</td>                  <td className="px-4 py-2.5 text-stone-700">Replay is a central capability through offsets and retention</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Often used for task processing</td>                  <td className="px-4 py-2.5 text-stone-700">Used for event streaming, integration and data pipelines</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka records are not automatically removed when an individual consumer processes them. They remain available according to retention or compaction rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">GitHub+1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.5 When to use a queue and when to use Kafka</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Choose a traditional queue when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You need task distribution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each job should be handled by one worker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Routing and acknowledgement workflows are important.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The workload is primarily background task execution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Choose Kafka when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple independent systems need the same events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">High-throughput event streaming is required.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event history and replay are important.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You need distributed partitions and consumer groups.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You are building real-time data integration pipelines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some systems use both. For example, Kafka can capture business events, while a task queue manages individual background jobs.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 2 — Apache Kafka Architecture
          </div>
        </div>
      </section>

      {/* SECTION 5: 5. Introduction to Apache Kafka */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Apache Kafka Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Introduction to Apache Kafka
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka is a distributed event streaming platform used to publish, store, process, and consume streams of events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It was originally developed at LinkedIn and later became an Apache open-source project.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka is widely used for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time data ingestion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven microservices.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log aggregation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application monitoring.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Change Data Capture.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data lake ingestion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven integration.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.1 Why Apache Kafka was developed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a large organization with hundreds of applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each application produces information that other applications need.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Directly connecting every application creates a complicated network of dependencies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application A → Service B Application A → Service C Application A → Service D Application B → Service C Application B → Service D Application C → Service A Application C → Service D</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">As the number of systems grows, the number of integrations can grow rapidly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka introduces a central event-streaming infrastructure.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Application A ──┐ Application B ──┼──> Kafka Cluster Application C ──┤ | Application D ──┘ | +-------+-------+ | | | v v v Service Analytics Data Lake`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producers and consumers are separated from one another. A producer does not have to wait for every consumer to process its events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.2 What makes Kafka different?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka combines several important capabilities.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events are stored across multiple brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topics can be split into partitions to support parallel processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic partitions can have replicas for fault tolerance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Durable event log</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events are appended to an ordered log and retained according to configured policies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer offsets</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers track their progress independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replay</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers can revisit retained events by changing their offsets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple consumer groups</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different applications can read the same events independently.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.3 Kafka is not just a message queue</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a very important distinction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Traditional task queues often focus on distributing a message to a worker and removing it after acknowledgement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka uses a persistent, partitioned log.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider the topic:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Offset 0 → OrderCreated Offset 1 → OrderCreated Offset 2 → OrderCancelled Offset 3 → OrderCreated Offset 4 → PaymentCompleted`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers track which offsets they have processed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If an analytics application needs to rebuild its data, it can read the retained records again from an earlier offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A notification consumer can independently process those same events without changing the analytics consumer's position.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.4 Kafka's position in a data engineering architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Operational Databases | v Kafka Cluster | +--------+--------+ | | | v v v Spark Flink Kafka Streams | | | +--------+--------+ | v Data Lake | v Data Warehouse | v BI / Analytics`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka can serve as the central event backbone connecting operational systems, real-time processors, and analytical platforms.</p>
        </div>
      </section>

      {/* SECTION 6: 6. Kafka Brokers and Clusters */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Apache Kafka Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Kafka Brokers and Clusters
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">To understand Kafka properly, you must understand its internal components.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The fundamental server component is the Kafka broker.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.1 What is a Kafka broker?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A broker is a Kafka server responsible for managing partitions, storing records, and serving producer and consumer requests.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A broker typically handles:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receiving messages from producers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Writing records into partition logs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serving records to consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replicating partition data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managing partition leadership.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Participating in cluster operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each broker has a unique broker ID within the cluster.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.2 What is a Kafka cluster?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Kafka cluster is a group of brokers working together.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Cluster</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Centralized logical event-streaming infrastructure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ID: 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ID: 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ID: 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each broker hosts one or more partition replicas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A cluster distributes partitions across brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This allows the system to store and serve a larger amount of data than a single broker could comfortably handle.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.3 How a producer connects to Kafka</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A producer typically starts with one or more bootstrap server addresses.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`bootstrap.servers= broker1:9092, broker2:9092, broker3:9092`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The bootstrap servers help the producer discover cluster metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer then determines which broker is the leader of the destination partition and sends records to the appropriate broker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A bootstrap server is not necessarily the permanent destination for every message.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.4 Kafka broker responsibilities</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Responsibility</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Explanation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores partition logs on disk</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Request handling</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receives producer and consumer requests</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Synchronizes replicas</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition leadership</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordinates writes for leader partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Metadata</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Provides cluster and partition information</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network communication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serves Kafka clients and internal cluster traffic</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.5 Kafka brokers versus controllers</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Modern Kafka separates data-serving responsibilities from cluster metadata coordination conceptually.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A broker stores and serves partition data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A controller manages cluster metadata and coordination, including operations such as partition leadership and broker registration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In KRaft mode, controllers use a Raft-based metadata quorum to maintain cluster metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some Kafka deployments use combined broker-controller nodes, while larger production deployments may separate the roles.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.6 Understanding KRaft architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An important update to the reference article concerns ZooKeeper.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Older Kafka deployments used Apache ZooKeeper for cluster coordination and metadata management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka introduced KRaft, which brings metadata quorum management into Kafka itself.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka 4.0 removed ZooKeeper mode. Current Kafka 4.x deployments use KRaft rather than the old ZooKeeper-based architecture. Therefore, the ZooKeeper startup commands in the supplied article are outdated for Kafka 4.x.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">KRaft architecture:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">KRaft Controller Quorum</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Metadata consensus and cluster coordination</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Controller 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Controller 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Controller 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cluster metadata coordination</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Broker Cluster</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition storage • Producers • Consumers • Replication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">KRaft uses a metadata log to maintain the cluster's metadata consistently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This eliminates the need for an external ZooKeeper cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's current upgrade documentation explicitly states that Kafka 4.x requires KRaft mode and no longer supports ZooKeeper mode.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.7 KRaft versus ZooKeeper</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">ZooKeeper architecture</th>                  <th className="px-4 py-3">KRaft architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">External ZooKeeper coordination</td>                  <td className="px-4 py-2.5 text-stone-700">Built-in Kafka metadata quorum</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Separate coordination infrastructure</td>                  <td className="px-4 py-2.5 text-stone-700">Kafka manages metadata consensus</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">More infrastructure components</td>                  <td className="px-4 py-2.5 text-stone-700">Simplified cluster architecture</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Older Kafka deployments</td>                  <td className="px-4 py-2.5 text-stone-700">Required for Kafka 4.x</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Separate ZooKeeper operational management</td>                  <td className="px-4 py-2.5 text-stone-700">Controller quorum managed as part of Kafka</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 7: 7. Topics and Partitions */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Apache Kafka Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Topics and Partitions
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topics and partitions are two of the most important Kafka concepts.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.1 What is a Kafka topic?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A topic is a named logical stream of events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders payments customers inventory shipments user_activity</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A producer sends records to a topic, and consumers subscribe to topics to read the records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A topic can have:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple producers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple independent consumer groups.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replicated partition data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.2 Example of an orders topic</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an e-commerce application generates these events:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "customer_id": 101, "amount": 1500, "status": "created" }
{ "order_id": 5002, "customer_id": 102, "amount": 2500, "status": "created" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both records can be published to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic: orders</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The topic acts as a logical category for order-related events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.3 What is a partition?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A partition is an ordered, append-only log of records within a topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic: orders Partition 0: Offset 0 Offset 1 Offset 2 Offset 3 Partition 1: Offset 0 Offset 1 Offset 2 Offset 3 Partition 2: Offset 0 Offset 1 Offset 2 Offset 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each partition is an independently managed log.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka uses partitions to distribute data across brokers and to enable parallel consumption.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.4 Why do we need partitions?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a topic with 90 million records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the topic has only one partition, it may restrict parallelism for a consumer group.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now divide it into three partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 0</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">30 million</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">30 million</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">30 million</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different consumers can process different partitions concurrently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The total throughput can improve because processing is distributed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is one of Kafka's primary scalability mechanisms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">GitHub</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.5 Kafka partition architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic: orders</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 0</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 0</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 0</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 0</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each partition maintains its own offset sequence. Offsets are not globally shared across partitions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.6 What is an offset?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An offset is a position identifier assigned to a record within a particular partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Partition 0: Offset 0 → Order 5001 Offset 1 → Order 5002 Offset 2 → Order 5003 Offset 3 → Order 5004`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offsets help consumers track their processing progress.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important: An offset is not a global message ID. Partition 0 and Partition 1 can both contain a record with offset 10.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.7 Topic partition count</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose you create a topic with six partitions.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`kafka-topics.sh \\ --bootstrap-server localhost:9092 \\ --create \\ --topic orders \\ --partitions 6 \\ --replication-factor 3`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This creates a topic with six partitions and three replicas per partition, assuming the cluster has enough brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The total number of partition replicas is:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">6 \times 3 = 18</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These 18 replicas are distributed across brokers according to Kafka's replica assignment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.8 How many partitions should a topic have?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There is no universal correct number.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition count depends on:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expected event volume.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Required throughput.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Number of consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message size.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker capacity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ordering requirements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Future scaling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Number of independent consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Too few partitions limit parallelism.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Too many partitions increase metadata, file handles, recovery work, and operational overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition count should be designed using expected throughput and load-testing results.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.9 Increasing partition count</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitions can be increased after topic creation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, increasing partition count can change key-to-partition mapping under common partitioning strategies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can affect ordering assumptions for historical and new events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, suppose all events for customer 101 previously went to partition 0. After increasing the number of partitions, new records for customer 101 might map to another partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If consumers depend on a single ordered history for that customer, partition expansion must be planned carefully.</p>
        </div>
      </section>

      {/* SECTION 8: 8. Producers and Consumers */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Core Messaging Primitives</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Producers and Consumers
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producers and consumers are the two main client roles in Kafka.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.1 What is a Kafka producer?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Kafka producer is an application that publishes records to Kafka topics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An order service generates an event when a customer purchases a product.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order Service | v Kafka Producer | v Topic: orders`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer handles:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker discovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic and partition selection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record serialization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batching.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry behavior.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Acknowledgements.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.2 Anatomy of a Kafka record</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Kafka record can contain:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Component</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Description</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Optional partitioning and identification value</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Value</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Main event payload</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Timestamp</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event or producer record timestamp</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Headers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Optional metadata</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition receiving the record</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Position assigned in the partition</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic: orders Key: customer-101 Value: &#123; "order_id": 5001, "amount": 1500, "status": "created" &#125; Headers: event_type = OrderCreated source = order-service</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.3 Producer workflow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application creates an event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer serializes the key and value.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer selects a partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records may be accumulated into batches.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer sends records to the partition leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker writes records according to its replication and acknowledgement configuration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer receives a success or failure response.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.4 What is a Kafka consumer?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Kafka consumer is an application that subscribes to topics and processes their records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Kafka Topic: orders | v Kafka Consumer | v Validate Order | v Update Warehouse`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers can:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deserialize records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Process business events.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update databases.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Write analytical tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish downstream events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.5 Python producer example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For practical learning, we will use confluent-kafka, a Python client that supports the Kafka protocol.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Install it:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`pip install confluent-kafka
Create producer.py:
import json import logging from confluent_kafka import Producer logging.basicConfig(level=logging.INFO) producer = Producer({ "bootstrap.servers": "localhost:9092" }) def delivery_report(err, message): if err is not None: logging.error("Delivery failed: %s", err) else: logging.info( "Delivered to %s [%s] at offset %s", message.topic(), message.partition(), message.offset() ) event = { "order_id": 5001, "customer_id": 101, "amount": 1500, "status": "created" } try: producer.produce( topic="orders", key=str(event["customer_id"]), value=json.dumps(event), callback=delivery_report ) producer.flush(10) except BufferError as exc: logging.error("Producer queue is full: %s", exc)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This example publishes an order event using the customer ID as the key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The delivery callback reports the delivery result.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In production, configuration should also explicitly address security, idempotence, timeouts, schema serialization, and observability.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.6 Python consumer example</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create consumer.py:
import json import logging from confluent_kafka import Consumer, KafkaException logging.basicConfig(level=logging.INFO) consumer = Consumer({ "bootstrap.servers": "localhost:9092", "group.id": "order-processing-group", "auto.offset.reset": "earliest", "enable.auto.commit": False }) consumer.subscribe(["orders"]) try: while True: message = consumer.poll(1.0) if message is None: continue if message.error(): logging.error("Kafka error: %s", message.error()) continue try: event = json.loads(message.value().decode("utf-8")) logging.info("Received event: %s", event) # Process and persist the event here. # Commit only after successful processing. consumer.commit( message=message, asynchronous=False ) except (json.JSONDecodeError, UnicodeDecodeError) as exc: logging.exception("Invalid event payload: %s", exc) except Exception: logging.exception("Event processing failed") except KeyboardInterrupt: logging.info("Consumer shutting down") finally: consumer.close()`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For this learning example, failed records are logged. A production implementation should route unrecoverable failures to a dead-letter topic, preserve the original event and failure details, and define how offsets are committed when processing fails.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.7 Producer versus consumer</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Producer</th>                  <th className="px-4 py-3">Consumer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Publishes events</td>                  <td className="px-4 py-2.5 text-stone-700">Reads events</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Writes to topics</td>                  <td className="px-4 py-2.5 text-stone-700">Subscribes to topics</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Handles serialization</td>                  <td className="px-4 py-2.5 text-stone-700">Handles deserialization</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Selects partitions or keys</td>                  <td className="px-4 py-2.5 text-stone-700">Reads assigned partitions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Uses acknowledgements</td>                  <td className="px-4 py-2.5 text-stone-700">Manages offsets</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Can batch messages</td>                  <td className="px-4 py-2.5 text-stone-700">Can process batches</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 9: 9. Consumer Groups */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Core Messaging Primitives</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Consumer Groups
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer groups are one of Kafka's most important mechanisms for scaling message processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consumer group is a collection of consumers that cooperate to read records from one or more topics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.1 Why do we need consumer groups?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a topic contains 100 million events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One consumer may not process this volume quickly enough.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">We can create multiple consumers in the same group.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Topic: orders 6 Partitions | +-------+-------+ | | | v v v Consumer Consumer Consumer A B C \\ | / \\ | / Consumer Group order-processing`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers divide the topic's partitions among themselves.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each partition is assigned to at most one consumer within a traditional consumer group at a time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different consumer groups can independently consume the same topic.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.2 Example: Six partitions and three consumers</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the topic has six partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The group has three consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Assigned partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer A</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">P0, P1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer B</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">P2, P3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer C</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">P4, P5</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each consumer processes its assigned partitions concurrently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This increases parallel processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.3 Example: Six partitions and six consumers</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Assigned partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer A</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">P0</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer B</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">P1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer C</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">P2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer D</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">P3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer E</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">P4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer F</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">P5</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each partition is handled by one consumer in that group.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.4 Example: Six partitions and eight consumers</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the group has eight consumers but the topic has six partitions, two consumers will normally remain idle for that topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is because conventional consumer-group assignment provides at most one active consumer per partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Therefore:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Maximum\ Active\ Consumers \leq Number\ of\ Partitions</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is why partition planning matters.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.5 Multiple consumer groups</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now imagine three independent applications consume the same orders topic.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`orders | +-------------+-------------+ | | | v v v Payment Group Analytics Group Notification Group | | | v v v Payment DB Warehouse Email / SMS`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each consumer group has its own processing position.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The analytics system does not interfere with payment processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This makes Kafka useful as a shared event backbone across an organization.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.6 Consumer group rebalancing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A rebalance happens when Kafka redistributes partition assignments within a consumer group.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can occur when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consumer joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consumer leaves.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consumer fails.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A subscription changes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A topic's partition count changes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A group coordinator initiates reassignment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initially:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer A → P0, P1 Consumer B → P2, P3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer C joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A new assignment may become:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer A → P0 Consumer B → P2 Consumer C → P1, P3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">During some rebalances, consumption can pause temporarily.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka offers different group-assignment strategies and newer group-management mechanisms to improve how rebalances are handled.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.7 Consumer group versus independent consumers</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Same consumer group</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different consumer groups</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cooperatively divide partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Independently read the topic</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One active consumer per partition in classic group assignment</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each group has its own assignment</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Used to scale one logical application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Used for separate applications</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shared logical processing position</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Independent processing offsets</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.8 Practical experiment</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a topic with three partitions.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Start one consumer in a group.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Then start two additional consumers using the same group ID.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Observe:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition distribution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rebalance messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How records are divided.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What happens when a consumer terminates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How another consumer takes over its partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Then start a separate consumer group and verify that it can independently read the same topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This experiment is essential for understanding Kafka scalability.</p>
        </div>
      </section>

      {/* SECTION 10: 10. Offset Management */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Core Messaging Primitives</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Offset Management
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offsets are fundamental to Kafka's ability to track consumer progress and replay events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.1 What is an offset?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Every record in a Kafka partition receives a sequential offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Topic: orders Partition: 0 Offset 0 → Order 5001 Offset 1 → Order 5002 Offset 2 → Order 5003 Offset 3 → Order 5004 Offset 4 → Order 5005`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The offset identifies the record's position within that partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consumer uses its offset to determine where to continue reading.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.2 Why offset management is necessary</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a consumer processes records up to offset 100.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Then its application crashes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When it restarts, Kafka needs to know where the consumer should resume.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the last committed offset is known, the consumer can resume from that position according to Kafka's offset semantics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This avoids unnecessarily processing the entire topic from the beginning.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.3 Consumer position versus committed offset</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are different.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer position: The next record position the consumer will fetch.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Committed offset: The recovery position saved for the consumer group.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Last successfully processed record: 99 Committed next offset: 100 Consumer crashes | v Restarts | v Continues at offset 100`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka commits the next offset to read, rather than simply recording the number of the last record processed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.4 Automatic offset commits</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka supports automatic offset commits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">enable.auto.commit=true auto.commit.interval.ms=5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This configuration allows the consumer to commit offsets periodically.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, automatic commits can cause data loss at the application-processing level.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer reads 100 records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset is committed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer crashes before all 100 records are written to the database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When the consumer restarts, Kafka may resume after the committed position, even though some records were not successfully processed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can result in missing business effects.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.5 Manual offset commits</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Manual commits give the application greater control over when offsets are recorded.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">enable.auto.commit=false</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consumer can then commit after successfully processing records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Read Message | v Process Message | v Save to Destination | v Commit Offset`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is commonly used for at-least-once processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, duplicate processing can still occur if the output succeeds and the consumer crashes before committing the offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That is why idempotent destination writes are important.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.6 auto.offset.reset</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This setting determines where a consumer starts when it has no valid committed offset or its committed offset is no longer available.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common values include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Value</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Meaning</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">earliest</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Start from the earliest available retained record</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">latest</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Start from new records arriving at the end</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">none</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Throw an error if there is no valid offset</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's current consumer configuration also supports time-based offset reset using a duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">consumer_config = &#123; "bootstrap.servers": "localhost:9092", "group.id": "analytics-group", "auto.offset.reset": "earliest" &#125;</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use earliest when a new consumer group should process available historical records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use latest when a new group should start with future records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Do not confuse auto.offset.reset with ordinary restart behavior: an existing valid committed offset normally determines where the consumer resumes.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.7 Resetting offsets</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose your analytics application has processed 1 million events, but a transformation bug has been fixed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You may want to reprocess historical events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can reset the consumer group's offsets using Kafka's consumer group management tools.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`kafka-consumer-groups.sh \\ --bootstrap-server localhost:9092 \\ --group analytics-group \\ --topic orders \\ --reset-offsets \\ --to-earliest \\ --execute`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This moves the group's offsets to the earliest available offsets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer group must be inactive for the reset operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Be careful: resetting offsets can cause previously processed records to be processed again. The output system must support safe replay.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.8 Kafka consumer offset commands</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Check consumer group status:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`kafka-consumer-groups.sh \\ --bootstrap-server localhost:9092 \\ --list`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Describe a consumer group:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`kafka-consumer-groups.sh \\ --bootstrap-server localhost:9092 \\ --describe \\ --group analytics-group`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This helps inspect:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition assignment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Current offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log end offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Active consumers.</p>
        </div>
      </section>

      {/* SECTION 11: 11. Message Ordering and Partition Keys */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Guarantees &amp; Fault Tolerance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Message Ordering and Partition Keys
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message ordering is an important concept in Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, Kafka does not guarantee one global order across an entire multi-partition topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka guarantees ordering within an individual partition.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.1 Understanding partition ordering</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a topic with one partition:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Partition 0 Offset 0 → Order Created Offset 1 → Payment Completed Offset 2 → Order Confirmed Offset 3 → Order Shipped`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers reading this partition see the records in the order they were appended.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now consider multiple partitions:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Partition 0 Offset 0 → Order A Offset 1 → Order C Partition 1 Offset 0 → Order B Offset 1 → Order D`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There is no automatic global ordering relationship between records in Partition 0 and Partition 1.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order inside each partition is preserved, but records from different partitions can be processed concurrently.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.2 What is a partition key?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A partition key is a value used by a producer to determine which partition receives a record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key: customer_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the producer generates events:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Customer 101 → Order Created Customer 102 → Order Created Customer 101 → Payment Completed Customer 103 → Order Created Customer 101 → Order Shipped`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When records use customer ID as the key, a consistent partitioning strategy can route events for the same customer to the same partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Illustration:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Customer 101 ──┐ ├── Partition 0 Customer 101 ──┘ Customer 102 ───── Partition 1 Customer 103 ───── Partition 2`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This enables per-customer event ordering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's partitioning design supports the combination of workload distribution and semantic grouping of records by key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.3 Why partition keys matter</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a banking system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system processes account transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Account 101: Deposit ₹5,000 Withdraw ₹1,000 Withdraw ₹500</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application may need to process these events in a defined order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If all events for account 101 go to the same partition, Kafka preserves their partition append order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without a suitable partitioning strategy, operations for the same account may be processed independently and produce incorrect results.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.4 Choosing a partition key</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Possible partition keys include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer ID.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Account ID.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order ID.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product ID.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Device ID.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Region.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Merchant ID.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Choose a key that supports the ordering and distribution needs of the application.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.5 Data skew and hot partitions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A poor partition key can result in uneven event distribution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose 50% of all application events belong to one very popular customer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Using customer_id as the key may cause one partition to receive a disproportionately high event volume.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is called partition skew or a hot partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Possible strategies include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Choosing a different key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Using a composite key where semantics permit.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Separating high-volume entities.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increasing partitions, if appropriate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Designing special handling for unusually active entities.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, spreading one entity's events across multiple partitions may sacrifice per-entity ordering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a real architectural trade-off.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.6 What happens without a key?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If a record has no key, the producer can use a configured partitioner to distribute records across partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The precise behavior depends on the client and partitioner configuration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can be useful for throughput, but it does not guarantee that events for the same business entity reach the same partition.</p>
        </div>
      </section>

      {/* SECTION 12: 12. Replication and Fault Tolerance in Kafka */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Guarantees &amp; Fault Tolerance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Replication and Fault Tolerance in Kafka
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka uses replication to protect data against broker failures.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.1 Why Kafka replication is important</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a Kafka cluster has three brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A topic has one partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If that partition exists only on Broker 1, failure of Broker 1 may make the partition unavailable and could cause data loss depending on the recovery situation.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With replication, additional broker copies can exist.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.2 Replication factor</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The replication factor specifies how many replicas are maintained for each partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic: orders Replication Factor: 3 Broker 1 → Leader Replica Broker 2 → Follower Replica Broker 3 → Follower Replica</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each replica stores a copy of the partition's log.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the leader becomes unavailable, an eligible in-sync replica may be elected as the new leader.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.3 Leader and follower replicas</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader replica</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The leader handles partition writes and serves requests according to the broker and client protocols.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Follower replica</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Followers fetch and replicate records from the leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 0 — Leader</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receives writes and coordinates replicas</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Follower Replica</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Follower Replica</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 3</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.4 In-Sync Replicas (ISR)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ISR stands for In-Sync Replicas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are the replicas that are sufficiently caught up with the leader according to Kafka's replication rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 0 Leader: Broker 1 Follower 1: Broker 2 Follower 2: Broker 3 ISR = [Broker 1, Broker 2, Broker 3]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now suppose Broker 3 falls behind.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ISR = [Broker 1, Broker 2]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker 3 may be removed from the ISR until it catches up again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ISR is important because Kafka uses it when deciding whether certain write acknowledgements can be satisfied and which replicas are eligible for normal leadership decisions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.5 min.insync.replicas</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This configuration establishes a minimum number of in-sync replicas required for a write when using acks=all.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">replication.factor=3 min.insync.replicas=2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The topic has three replicas but requires at least two in-sync replicas for an acks=all write to succeed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This does not mean the producer waits for every configured replica. It waits for the in-sync replica set under the applicable acknowledgement semantics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If fewer than two in-sync replicas are available, Kafka rejects the write rather than accepting it with a weaker guarantee.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.6 Broker failure and leader election</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine Broker 1 is the leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It fails.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Before Failure Broker 1 → Leader Broker 2 → Follower Broker 3 → Follower</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka may elect an eligible follower as the new leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After Failure Broker 1 → Failed Broker 2 → New Leader Broker 3 → Follower</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producers and consumers refresh partition metadata and communicate with the new leader.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unclean leader election can produce data-loss risk because it may allow an out-of-sync replica to become leader. Production clusters normally configure this carefully.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.7 Replication factor versus partition count</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are different configuration values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition count determines how many logical logs exist.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication factor determines how many copies of each partition are maintained.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic: orders Partitions = 6 Replication factor = 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total partition replicas:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">6 \times 3 = 18</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Those replicas should be distributed across suitable brokers and failure domains.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.8 Important production considerations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use appropriate replication factors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitor under-replicated partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Configure min.insync.replicas according to durability needs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use appropriate producer acknowledgements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid uncontrolled unclean leader election.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distribute replicas across failure domains.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitor disk utilization and replication lag.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Test broker recovery.</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka replication is performed at the partition level, not by creating a separate complete copy of the entire topic on every broker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">GitHub</p>
        </div>
      </section>

      {/* SECTION 13: 13. Kafka Retention Policies */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Guarantees &amp; Fault Tolerance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Kafka Retention Policies
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One of Kafka's important differences from a traditional work queue is that reading a message does not automatically delete it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka maintains retained logs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The retention policy determines how long or how much data a topic keeps.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.1 Why retention is important</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an analytics application that consumes 10 million events daily.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A bug causes it to calculate revenue incorrectly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The engineering team fixes the bug and wants to rebuild the analytical results from the original events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's retained event history can make replay possible, provided the required records still exist.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.2 Time-based retention</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time-based retention removes old log segments after a configured period.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`retention.ms=604800000`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This corresponds to seven days.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records become eligible for deletion according to the segment-based retention process.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The exact deletion time may not coincide with the precise instant an individual record reaches the age threshold.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.3 Size-based retention</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Size-based retention limits the retained log size per partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`retention.bytes=1073741824`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is approximately 1 GiB per partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a topic with 10 partitions, the aggregate configured partition-level limit could be approximately 10 GiB, subject to the actual configuration and segment-cleaning behavior.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.4 Delete retention policy</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The default topic cleanup policy is generally delete.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Old log segments are removed when configured time or size limits are reached.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`kafka-configs.sh \\ --bootstrap-server localhost:9092 \\ --entity-type topics \\ --entity-name orders \\ --alter \\ --add-config retention.ms=604800000`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This configures a seven-day retention period for the topic.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.5 Log compaction</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka also supports log compaction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compaction is especially useful when the topic represents the latest known state for each key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key: customer-101 → Rahul Key: customer-102 → Priya Key: customer-101 → Sam Key: customer-103 → Arjun</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After compaction, older superseded records for customer-101 may be removed, leaving the latest value:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key: customer-101 → Sam Key: customer-102 → Priya Key: customer-103 → Arjun</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compaction is performed asynchronously, so old records may remain visible until the cleaner processes the relevant segments.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.6 Delete versus compact</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Delete retention`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log compaction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Removes old log segments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retains latest values per key</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Based on time and/or size policies</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Based on key-based compaction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suitable for event history with limited retention</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suitable for latest-state topics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Old events eventually disappear</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical updates for a key are cleaned up</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka also allows a combination of delete and compact policies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.7 Tombstone records</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a compacted topic, a tombstone is a record with a non-null key and a null value.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It indicates that the key's current value should be deleted.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key: customer-101 Value: null</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The tombstone marks the deletion for compaction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tombstones are themselves retained for a configured period so that consumers have a chance to observe the deletion.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.8 Choosing the correct retention policy</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use case</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suitable approach</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order event history</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time/size-based retention</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application logs</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time/size-based retention</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Latest customer state</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log compaction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Configuration state</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log compaction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Financial event history</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Carefully governed long retention</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC event streams</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retention based on recovery and replay needs</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retention settings should be based on storage budget, replay requirements, data governance, and legal obligations.</p>
        </div>
      </section>

      {/* SECTION 14: 14. Producer Acknowledgements */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Guarantees &amp; Fault Tolerance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Producer Acknowledgements
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer acknowledgements determine when a Kafka producer considers a write successful.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They are configured using the acks property.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Three commonly discussed values are:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`acks=0
acks=1
acks=all`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.1 acks=0</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer does not wait for a broker acknowledgement.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Producer | v Broker | v Producer continues`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Low waiting time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">High throughput potential.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer cannot confirm that the broker stored the record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A message can be lost without the producer detecting the failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is appropriate only when the application can tolerate the weaker delivery guarantee.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.2 acks=1</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The leader acknowledges the write after recording it locally.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Producer | v Leader Broker | v Local Write | v Acknowledgement`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Follower replication does not need to finish before the acknowledgement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the leader fails before followers have replicated the record, the acknowledged record could be lost if a follower becomes leader without it.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.3 acks=all</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The leader waits for acknowledgement from the current in-sync replica set under Kafka's replication rules.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Producer | v Leader Broker | +------> Follower 1 | +------> Follower 2 | v Required ISR acknowledgements | v Acknowledge`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This offers the strongest standard producer acknowledgement guarantee when combined with appropriate ISR and minimum-replica configuration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is particularly useful for important business events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's current producer documentation distinguishes these acknowledgement behaviors and specifies that idempotent production requires acks=all.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.4 Comparing producer acknowledgements</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Configuration</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Waits for</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reliability characteristics</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`acks=0`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">No broker acknowledgement</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Weakest</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`acks=1`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition leader's local acknowledgement</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Leader failure before replication can lose data</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`acks=all`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Current ISR acknowledgements</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Strongest standard acknowledgement option</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.5 acks=all and min.insync.replicas</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">replication.factor=3 min.insync.replicas=2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If all three replicas are in the ISR, an acks=all write waits for the ISR acknowledgements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If one follower falls behind, there may be two ISR members remaining, and writes can still succeed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If only one ISR member remains, the write is rejected under this configuration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is an intentional trade-off: refusing a write can be safer than accepting it with insufficient replication.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.6 Recommended producer configuration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An illustrative production-oriented producer configuration:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`bootstrap.servers=broker1:9092,broker2:9092 acks=all enable.idempotence=true compression.type=zstd linger.ms=5 batch.size=65536 retries=2147483647`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This example emphasizes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Strong acknowledgement requirements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotent production.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batching.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry support.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Actual values should be selected through workload testing and must be compatible with the broker, client version, and application requirements.</p>
        </div>
      </section>

      {/* SECTION 15: 15. Delivery Semantics */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Guarantees &amp; Fault Tolerance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Delivery Semantics
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delivery semantics describe how producers, brokers, and consumers handle messages when failures occur.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is essential for designing reliable event ingestion systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.1 At-most-once delivery</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A message is delivered zero or one times.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It may be lost after a failure, but the delivery mechanism does not intentionally repeat it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Produce Message | v Consume Message | v Commit Offset | v Processing Fails`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the offset is committed before processing completes, the record may not be processed again.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.2 At-least-once delivery</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A message is delivered one or more times under the system's configured retry and recovery assumptions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Read Message | v Process Message | v Save to Database | v Commit Offset`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the application saves the record successfully and crashes before committing the offset, Kafka may deliver the same record again after restart.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate processing must therefore be handled safely.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.3 Exactly-once processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka supports transactional mechanisms that allow applications to atomically write output records and commit consumed offsets within Kafka's transaction boundary.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Kafka Input Topic | v Consumer | v Transformation | v Kafka Output Topic | v Commit output + offsets transactionally
With suitable producer and consumer configurations, aborted output transactions can be hidden from read_committed consumers.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For this pattern, Kafka documents configuration such as:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`transactional.id=order-processor-1`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">on the producer, and:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">enable.auto.commit=false isolation.level=read_committed</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">on the consumer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application must also use the producer transaction APIs correctly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.4 Delivery semantics comparison</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Model</th>                  <th className="px-4 py-3">Duplicates</th>                  <th className="px-4 py-3">Loss</th>                  <th className="px-4 py-3">Typical use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">At-most-once</td>                  <td className="px-4 py-2.5 text-stone-700">Avoids retry duplicates</td>                  <td className="px-4 py-2.5 text-stone-700">Possible</td>                  <td className="px-4 py-2.5 text-stone-700">Non-critical telemetry</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">At-least-once</td>                  <td className="px-4 py-2.5 text-stone-700">Possible</td>                  <td className="px-4 py-2.5 text-stone-700">Reduced with suitable durability</td>                  <td className="px-4 py-2.5 text-stone-700">Order and business events</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Exactly-once effects</td>                  <td className="px-4 py-2.5 text-stone-700">Controlled within defined boundary</td>                  <td className="px-4 py-2.5 text-stone-700">Depends on transaction and system assumptions</td>                  <td className="px-4 py-2.5 text-stone-700">Kafka-to-Kafka stateful pipelines</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.5 Kafka idempotent producer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An idempotent producer uses producer IDs and sequence information to protect against duplicate writes caused by producer retries within the supported scope.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`enable.idempotence=true acks=all`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's producer documentation states that idempotence is enabled by default when there are no conflicting producer settings in current Kafka configurations. Explicitly configuring it is still useful when the application intends to make the requirement clear.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.6 Exactly-once versus external databases</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This distinction is extremely important.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Kafka consumer reads an order event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It inserts the order into PostgreSQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL commits the transaction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer crashes before committing its Kafka offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event may be consumed again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's transaction mechanism cannot automatically roll back the PostgreSQL insert.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Solutions include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database unique constraints.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotent upserts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processed-event tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactional outbox/inbox designs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordinated transaction mechanisms where supported.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Never assume that enabling Kafka transactions makes all external systems exactly-once automatically.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 3 — Schema Management and Data Integration
          </div>
        </div>
      </section>

      {/* SECTION 16: 16. Schema Registry */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Schema Governance &amp; Integration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Schema Registry
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In large data engineering platforms, hundreds of applications may publish information to Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Those applications need to agree on the structure of the messages they exchange.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without schema management, one service might send:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "amount": 1500 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Another service might expect:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": "5001", "total_amount": 1500 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are two incompatibilities:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id has a different data type.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">amount has been renamed to total_amount.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer may publish successfully, but the consumer may fail to process the event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry helps manage this problem.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.1 What is Schema Registry?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry is a centralized service for storing, managing, versioning, and validating event schemas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is commonly used with Apache Kafka to ensure producers and consumers agree on the structure of event data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can manage schemas for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Avro.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON Schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Protocol Buffers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It helps enforce schema compatibility as applications evolve.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Confluent Documentation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important distinction: Schema Registry is not an intrinsic Kafka broker component. It is a separate service in the Kafka ecosystem. Confluent provides a widely used implementation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.2 Why Schema Registry is required</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine three applications use the same topic.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order Service | v Topic: orders | +----------------+ | | v v Analytics Service Notification Service`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">All three applications need to understand the event structure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the order service adds a new field:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "amount": 1500, "currency": "INR" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can the older consumers still read the event?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That depends on the compatibility rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry helps check whether the new schema can work with existing consumers.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.3 How Schema Registry works</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer Application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Creates event using a schema</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores schema • Validates compatibility • Provides schema ID</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores serialized event records</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer Application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Uses schema information to deserialize records</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Typical workflow:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A producer defines an event schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer registers or looks up that schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The registry checks the applicable compatibility policy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A schema identifier is associated with the serialized message.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka stores the event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer retrieves the required schema information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer deserializes the event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In common Confluent serializer integrations, the payload includes a schema ID in its wire-format framing. The full schema definition does not need to be repeated in every event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Confluent Documentation</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.4 Schema subjects</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry organizes schemas using subjects.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A subject identifies the schema evolution history for a logical data contract.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common default naming convention is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders-value orders-key</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For an orders topic:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders-value can manage the event value schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders-key can manage the key schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other naming strategies are possible.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.5 Schema versioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose we have three versions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Version 1</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "amount": 1500 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Version 2</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "amount": 1500, "currency": "INR" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Version 3</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "amount": 1500, "currency": "INR", "payment_method": "UPI" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each change represents an evolution of the event contract.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compatibility rules determine whether old and new producers and consumers can work together.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.6 Schema compatibility types</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are four important compatibility concepts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backward compatibility</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">New consumers should be able to read data produced with the older schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: A new schema adds an optional field with a suitable default.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Forward compatibility</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Older consumers should be able to read data produced with the new schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This depends on the schema format and whether the new event contains fields that older consumers can safely ignore or interpret.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Full compatibility</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both backward and forward compatibility are required.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">No compatibility</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The registry does not enforce backward or forward compatibility for schema changes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common Confluent Schema Registry default is BACKWARD, although configurations can be changed. Exact compatibility rules depend on the schema format.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Confluent Documentation</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.7 Schema compatibility comparison</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Compatibility</th>                  <th className="px-4 py-3">Main requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">BACKWARD</td>                  <td className="px-4 py-2.5 text-stone-700">New reader can read old data</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">FORWARD</td>                  <td className="px-4 py-2.5 text-stone-700">Old reader can read new data</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">FULL</td>                  <td className="px-4 py-2.5 text-stone-700">Both conditions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">NONE</td>                  <td className="px-4 py-2.5 text-stone-700">No compatibility enforcement</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are also transitive compatibility modes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">BACKWARD: Checks against the latest registered schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">BACKWARD_TRANSITIVE: Checks against all relevant previous versions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transitive checking becomes useful when consumers may still be using older schema versions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.8 Why Schema Registry matters in data engineering</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a company with 50 producer applications and 100 consumer applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without centralized schema management:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Every team may define fields differently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Breaking changes may be deployed unexpectedly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers may fail because of renamed columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data contracts may become inconsistent.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data quality problems may propagate downstream.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry provides a central contract-management mechanism to reduce these risks.</p>
        </div>
      </section>

      {/* SECTION 17: 17. Avro and JSON Serialization */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Schema Governance &amp; Integration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Avro and JSON Serialization
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka stores messages as bytes. Producers and consumers need serializers and deserializers to convert application data into and out of that representation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two important formats are JSON and Apache Avro.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.1 JSON serialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON is a human-readable text-based format.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example event:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "customer_id": 101, "amount": 1500.50, "status": "completed" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import json order = { "order_id": 5001, "customer_id": 101, "amount": 1500.50, "status": "completed" } serialized = json.dumps(order) print(serialized) deserialized = json.loads(serialized) print(deserialized["order_id"])`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Easy to understand.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Easy to debug.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broad language support.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Simple integration with APIs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Minimal initial setup.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Limitations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Text can be comparatively verbose.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data types need careful validation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema evolution is not automatically enforced by JSON itself.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parsing large volumes of messages may involve extra overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON is useful for learning, simple event systems, and interoperability between applications.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.2 Apache Avro</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Avro is a schema-based data serialization system designed for efficient data exchange and storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It uses schemas to define the structure of records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example Avro schema:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "type": "record", "name": "Order", "namespace": "com.example.orders", "fields": [ { "name": "order_id", "type": "long" }, { "name": "customer_id", "type": "long" }, { "name": "amount", "type": "double" }, { "name": "status", "type": "string" } ] }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This schema defines an Order record and its fields.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Avro serializer converts a record into binary data using the schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer uses a compatible schema to reconstruct the record.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.3 Avro optional fields</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose payment_method may be missing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An Avro schema can represent a nullable field using a union:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "name": "payment_method", "type": [ "null", "string" ], "default": null }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now the field can contain either null or a string.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Default values and field ordering rules matter when designing compatible Avro schemas.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.4 JSON versus Avro</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">JSON</th>                  <th className="px-4 py-3">Avro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Text-based</td>                  <td className="px-4 py-2.5 text-stone-700">Binary serialization</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Human-readable</td>                  <td className="px-4 py-2.5 text-stone-700">Requires decoding for easy inspection</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Can be used without a formal schema</td>                  <td className="px-4 py-2.5 text-stone-700">Schema-driven format</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Often larger messages</td>                  <td className="px-4 py-2.5 text-stone-700">Often more compact</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Flexible application integration</td>                  <td className="px-4 py-2.5 text-stone-700">Useful for governed event contracts</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Schema enforcement needs separate tooling</td>                  <td className="px-4 py-2.5 text-stone-700">Supports schema evolution mechanisms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.5 Example: Sending Avro events through Kafka</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a Schema Registry-based setup, the producer uses an Avro serializer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Python Application | v Avro Schema | v Schema Registry | v Avro Serializer | v Kafka Producer | v Kafka Topic`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer uses the corresponding Avro deserializer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This helps multiple applications exchange structured events without having to implement their own schema-management mechanisms.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.6 When should you use JSON or Avro?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use JSON when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You need quick development.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payloads are relatively small.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Human readability is important.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producers and consumers have a simple contract.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use Avro when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your system processes large event volumes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema evolution matters.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Many producer and consumer applications share event contracts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compact binary serialization is desirable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You use Schema Registry.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In production, the decision should also consider team tooling, language compatibility, data governance, and existing ecosystem integration.</p>
        </div>
      </section>

      {/* SECTION 18: 18. Kafka Connect */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Schema Governance &amp; Integration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Kafka Connect
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect is a framework for moving data between Apache Kafka and external systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It removes the need to develop a separate custom producer or consumer for every database and data source.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For data engineers, Kafka Connect is particularly useful for building ingestion and integration pipelines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.1 Why Kafka Connect is needed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a company has:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL containing orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MySQL containing customer records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MongoDB containing product information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka serving as the central event platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data warehouse receiving processed events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without Kafka Connect, developers may need to write and maintain separate integration programs for each source and destination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect provides a standardized integration framework.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.2 What is a connector?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A connector is a component that integrates Kafka with an external system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two primary types are:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source connector</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reads data from an external system and publishes it to Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL to Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MySQL to Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Files to Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud storage to Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sink connector</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reads events from Kafka and writes them to an external destination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka to PostgreSQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka to Elasticsearch.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka to object storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka to a data warehouse.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.3 Source and sink connector architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">External Source</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL • MySQL • Files • APIs</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect Source Connector</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extracts data from source system</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Topics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores event streams</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect Sink Connector</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumes Kafka records</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">External Destination</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Warehouse • Database • Search Engine • Object Storage</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.4 Kafka Connect architecture components</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Workers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Workers are processes that execute Kafka Connect tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Connectors</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Connectors define the integration with an external source or destination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks perform the actual data movement work.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Converters</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Converters transform between Kafka Connect's internal data representation and the serialized format used in Kafka records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transforms</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Single Message Transforms (SMTs) can modify records during connector processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source connectors use stored offsets to track their extraction progress.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Configuration and status</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect manages connector configurations and task status through its internal storage mechanisms and APIs.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.5 Standalone versus distributed mode</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect offers two common operating modes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Standalone mode</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A single worker process executes connectors and tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suitable for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Learning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Local testing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Simple development environments.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Easy setup.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Less infrastructure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Simple debugging.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Limited availability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">No distributed task coordination across workers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Less suitable for production-scale integration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed mode</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple workers form a Connect cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks can be distributed across workers, and the cluster coordinates task placement and recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suitable for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Production ingestion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">High-volume integrations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed source and sink processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.6 Kafka Connect distributed architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Kafka Connect Cluster +----------------------------+ | | v v Worker 1 Worker 2 | | v v Connector A Connector B | | v v Task 1 / Task 2 Task 3 | | +-------------+--------------+ | v Kafka Cluster`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The framework supports connector and task state management, worker coordination, and integration with Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.7 Example: Kafka Connect source connector configuration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An illustrative connector configuration:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "name": "orders-source", "config": { "connector.class": "YOUR_SOURCE_CONNECTOR_CLASS", "tasks.max": "1", "connection.url": "YOUR_DATABASE_CONNECTION", "topic.prefix": "source-", "mode": "incrementing" } }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The properties are connector-specific. This is a conceptual example, not a ready-to-run PostgreSQL connector configuration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect exposes a REST API for managing connector configurations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`curl -X GET \\ http://localhost:8083/connectors`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">To create a connector:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`curl -X POST \\ -H "Content-Type: application/json" \\ --data @connector.json \\ http://localhost:8083/connectors`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Production deployments should protect the Connect REST API and connector configuration endpoint appropriately.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.8 Kafka Connect versus custom Kafka producer</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Kafka Connect</th>                  <th className="px-4 py-3">Custom producer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Standardized external-system integration framework</td>                  <td className="px-4 py-2.5 text-stone-700">Application-specific implementation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Uses reusable connectors</td>                  <td className="px-4 py-2.5 text-stone-700">Developers write integration logic</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Supports distributed workers and tasks</td>                  <td className="px-4 py-2.5 text-stone-700">Scaling and retry design are application responsibilities</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Useful for database and storage integration</td>                  <td className="px-4 py-2.5 text-stone-700">Useful for application-generated business events</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Can integrate CDC connectors</td>                  <td className="px-4 py-2.5 text-stone-700">Can implement custom event publishing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.9 When should Kafka Connect be used?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect is useful when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You need to move existing database records into Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You need to load Kafka events into a data warehouse.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You need to connect different databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You want standardized integration rather than writing custom extraction applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You need scalable, manageable data movement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka maintains an official Kafka Connect framework and documentation for source and sink connector development.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
        </div>
      </section>

      {/* SECTION 19: 19. Kafka Connect CDC — Change Data Capture */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Schema Governance &amp; Integration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Kafka Connect CDC — Change Data Capture
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Change Data Capture (CDC) is a technique used to identify and capture changes made to a database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of repeatedly extracting an entire database table, a CDC system captures operations such as:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`INSERT.
UPDATE.
DELETE.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is especially important for real-time data engineering.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.1 Why CDC is needed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce database with 100 million customer records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A traditional batch pipeline might extract the entire customers table every hour.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This creates unnecessary work because only a small number of records may have changed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead, CDC captures only the modifications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initial database state:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">name</th>                  <th className="px-4 py-3">city</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">Rahul</td>                  <td className="px-4 py-2.5 text-stone-700">Pune</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">Priya</td>                  <td className="px-4 py-2.5 text-stone-700">Mumbai</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A customer changes their city.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`UPDATE customers SET city = 'Nashik' WHERE customer_id = 101;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC detects the change and publishes an event.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "operation": "UPDATE", "customer_id": 101, "before": { "city": "Pune" }, "after": { "city": "Nashik" } }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Downstream systems can apply the change without reloading the entire database.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.2 Three common CDC approaches</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. Query-based CDC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline periodically queries records based on a timestamp or increasing identifier.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM orders WHERE updated_at > :last_processed_timestamp;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Easy to understand.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can work with simple databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Does not always require transaction-log access.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can miss changes when timestamps are unreliable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Capturing deletes is difficult.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Polling adds source database load.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Boundary conditions require careful handling.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. Trigger-based CDC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database triggers capture changes and write them into an audit or change table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE customer_changes ( customer_id BIGINT, new_city TEXT, changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A trigger records relevant updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can capture individual database changes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Supports capturing deletes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Does not require continuous full-table scans.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Adds logic to the source database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can affect transaction performance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requires trigger management.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>C. Transaction-log-based CDC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Databases maintain transaction logs that record database modifications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC tools read these logs and convert changes into events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL Write-Ahead Log (WAL).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MySQL binary log.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL Server transaction log.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Captures actual database changes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Supports low-latency ingestion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can capture deletes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoids repeated full-table scans.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disadvantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requires database-specific configuration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requires appropriate permissions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log retention and offsets must be managed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snapshot and streaming coordination are important.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.3 How Kafka CDC architecture works</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operational Database</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL / MySQL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transaction log</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC Connector</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reads committed database changes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka CDC Topics</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Insert • Update • Delete events`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Lake</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical changes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Warehouse</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Updated analytical tables</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.4 Debezium</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Debezium is a widely used CDC platform that integrates with Kafka Connect.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It captures database changes and publishes them as Kafka events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It supports connectors for databases such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MySQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL Server.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MongoDB.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Oracle, depending on the connector and distribution.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.5 Understanding Debezium CDC events</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An illustrative event:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "before": { "id": 101, "name": "Rahul", "city": "Pune" }, "after": { "id": 101, "name": "Rahul", "city": "Nashik" }, "source": { "db": "ecommerce", "table": "customers" }, "op": "u" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The op field indicates the operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common Debezium operation codes include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Code</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Meaning</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">c</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create / insert`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">u</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">d</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Delete`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">r</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read during snapshot</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The exact event envelope depends on the connector configuration and event format.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.6 Initial snapshot and streaming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose you connect a CDC platform to an existing database containing 10 million records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It needs to establish the initial state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common process is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Capture or establish the required transaction-log position.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read an initial snapshot of the existing data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record snapshot progress.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Continue consuming changes from the transaction log.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish ongoing changes into Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This combines historical data with changes that happen during the transition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managing the relationship between snapshot data and streamed changes is one of the important CDC engineering challenges.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.7 CDC versus traditional batch ETL</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">CDC</th>                  <th className="px-4 py-3">Batch ETL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Captures changes continuously or near-real-time</td>                  <td className="px-4 py-2.5 text-stone-700">Processes data at scheduled intervals</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Can capture inserts, updates and deletes</td>                  <td className="px-4 py-2.5 text-stone-700">Often extracts selected records or full datasets</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Lower data latency</td>                  <td className="px-4 py-2.5 text-stone-700">Usually higher latency</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Requires log and offset management</td>                  <td className="px-4 py-2.5 text-stone-700">Requires scheduling and batch tracking</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Efficient for frequently changing tables</td>                  <td className="px-4 py-2.5 text-stone-700">Useful for periodic analytical workloads</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.8 When should CDC be used?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use CDC when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A database changes continuously.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You need low-latency data replication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Full table extraction is expensive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Downstream applications need updates and deletes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You are building real-time data lakes or warehouses.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC is commonly used in modern data platforms because it bridges operational databases and analytical systems.</p>
        </div>
      </section>

      {/* SECTION 20: 20. Dead-Letter Queues */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Resiliency &amp; Operations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Dead-Letter Queues
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A dead-letter queue (DLQ) is a mechanism for isolating messages that cannot be processed successfully.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In Kafka systems, a common implementation is a dedicated dead-letter topic.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.1 Why dead-letter queues are needed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a Kafka topic receives 100,000 order events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Most events are valid.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, a few records contain invalid data:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": "INVALID", "amount": "UNKNOWN" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer expects:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Numeric order ID.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Numeric amount.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A valid order status.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The message fails processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What should happen?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A poorly designed application may crash repeatedly while attempting to process the same bad record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can prevent subsequent valid records in the partition from progressing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A DLQ provides a controlled way to isolate unrecoverable events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.2 DLQ architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Main Topic | v Consumer | +-----+-----+ | | v v Success Failure | | v v Main Output Retry Policy | +------+------+ | | v v Retry Permanent Failure | v DLQ Topic`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.3 Example DLQ event</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Original event:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": "INVALID", "amount": 1500 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DLQ record:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "original_topic": "orders", "original_partition": 1, "original_offset": 500, "error_type": "DATA_VALIDATION_ERROR", "error_message": "order_id must be numeric", "failed_at": "2026-11-09T10:30:00Z", "original_event": { "order_id": "INVALID", "amount": 1500 } }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storing the original event and contextual metadata makes investigation and recovery easier.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.4 Retriable versus non-retriable errors</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retriable errors</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Temporary problems such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database timeout.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Temporary network failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Service unavailable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rate limiting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These may be retried.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Non-retriable errors</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Permanent problems such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Invalid schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Missing required field.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Impossible value.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unsupported event version.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These may be sent directly to a DLQ.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.5 Retry topics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some Kafka architectures use multiple retry topics:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`orders | v Processing Failure | v orders.retry.1m | v orders.retry.10m | v orders.retry.1h | v orders.dlq`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The names indicate illustrative retry delays.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This design allows temporary failures to recover without permanently blocking the main processing workflow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, retry topics introduce ordering and duplicate-processing considerations. They are not the only way to implement retries.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.6 Kafka Connect dead-letter queue</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect includes error-handling configurations that can route certain problematic records to a dead-letter topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">errors.tolerance=all errors.deadletterqueue.topic.name=connect-errors errors.deadletterqueue.context.headers.enable=true errors.log.enable=true</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect also provides configurable retries and error logging.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its official documentation describes DLQ configurations and the limitations of exactly-once support depending on connector capabilities.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important: Kafka Connect's DLQ handling applies to errors covered by the configured connector framework behavior. It does not automatically guarantee that every external-system or application-level failure is recoverable.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.7 DLQ monitoring</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production DLQ should be monitored.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful metrics include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Number of failed messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure reason.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Oldest failed message.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DLQ growth rate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer group.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry attempts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovery status.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A DLQ should not become a permanent dumping ground. Failed messages need investigation, correction, and a defined recovery process.</p>
        </div>
      </section>

      {/* SECTION 21: 21. Message Replay */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Resiliency &amp; Operations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Message Replay
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message replay is the process of consuming previously produced messages again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is one of Kafka's strongest capabilities.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.1 Why is message replay useful?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an analytics pipeline processes events incorrectly because of a bug in its revenue transformation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The original order events are still retained in Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After correcting the code, the analytics application can reprocess historical events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can rebuild the analytical table without asking the original applications to regenerate every event.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.2 How Kafka replay works</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Topic: orders Offset 0 → Order A Offset 1 → Order B Offset 2 → Order C Offset 3 → Order D Offset 4 → Order E`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a consumer group has processed offsets up to 4.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The team wants to rebuild the output.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can use a new consumer group or reset the existing group's offsets to an earlier position.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer reads the retained records again.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.3 Replay using a new consumer group</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A new group can independently read the topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example configuration:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">consumer = Consumer(&#123; "bootstrap.servers": "localhost:9092", "group.id": "orders-rebuild-v2", "auto.offset.reset": "earliest" &#125;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The new application begins with the earliest available records if no committed offset exists.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is useful when the original consumer group must continue operating.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.4 Replay using offset reset</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An existing inactive consumer group can have its offsets reset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`kafka-consumer-groups.sh \\ --bootstrap-server localhost:9092 \\ --group analytics-group \\ --topic orders \\ --reset-offsets \\ --to-earliest \\ --execute`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This should be done with careful coordination because the existing application may recreate historical outputs or process business effects again.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.5 Time-based replay</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sometimes only records from a particular time period need to be replayed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replay orders created from: November 1, 2026 to November 8, 2026</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's consumer API and command-line tooling support determining offsets by timestamp.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This allows targeted reprocessing without necessarily starting from the oldest retained record.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.6 Replay and data correctness</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Before replaying events, engineers should consider:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Is the consumer idempotent?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Will the output table create duplicates?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Does the consumer have side effects such as sending emails?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Are schemas still compatible?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Are the necessary records still retained?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Should the output be rebuilt in a separate table?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Does ordering matter?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Are downstream services also affected?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replay is useful for rebuilding analytical data, but it must be handled carefully for payment and other irreversible business operations.</p>
        </div>
      </section>

      {/* SECTION 22: 22. Kafka Security */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Resiliency &amp; Operations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Kafka Security
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka can carry sensitive information such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Financial transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Personal information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production Kafka cluster must be protected against unauthorized access, data interception, and malicious modifications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka security involves three major areas:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Encryption.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authorization.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.1 Authentication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication verifies the identity of a client connecting to Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an application wants to publish payment events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka should verify that the application is an authorized client.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka supports mechanisms including:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SASL/PLAIN.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SASL/SCRAM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SASL/GSSAPI (Kerberos).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SASL/OAUTHBEARER.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TLS client authentication using certificates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An application should not be allowed to connect anonymously to a production cluster unless that is explicitly intended and suitably restricted.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.2 Encryption</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Encryption protects data while it travels across the network.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka supports SSL/TLS encryption.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Producer | | Encrypted TLS Connection | v Kafka Broker | | Encrypted TLS Connection | v Consumer`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TLS helps protect against:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unauthorized network interception.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reading sensitive messages in transit.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Certain network-based impersonation attacks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Encryption in transit does not automatically encrypt all stored data. Broker disk encryption, backups, and data access controls must also be considered separately.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.3 Authorization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication answers:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">"Who are you?"</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authorization answers:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">"What are you allowed to do?"</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka supports Access Control Lists (ACLs).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application: payment-service Allowed: - Write to payments topic Not allowed: - Delete customers topic - Read salary topic - Modify cluster configuration</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This follows the principle of least privilege.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A service should receive only the permissions needed for its actual responsibilities.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.4 Kafka security architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer / Consumer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application identity and credentials</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Security Controls</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Verify client identity</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TLS Encryption</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Protect network communication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authorization / ACLs</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Control topic and resource permissions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Cluster</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Protected event streaming infrastructure</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.5 Example SASL configuration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An illustrative producer configuration using SASL/SCRAM over TLS:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`bootstrap.servers=broker1:9093 security.protocol=SASL_SSL sasl.mechanism=SCRAM-SHA-512 sasl.jaas.config=org.apache.kafka.common.security.scram.ScramLoginModule required username="payment-service" password="SECRET";`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The password is illustrative. In production, credentials should be supplied through an approved secret-management system rather than hardcoded in source code or configuration files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The broker and client must be configured with compatible authentication and TLS settings.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.6 Kafka ACLs</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka administrators can define permissions for specific principals and resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptual permission example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Principal</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Resource</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Permission</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">payment-service</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">payments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Write</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">analytics-service</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">payments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">notification-service</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">admin-service</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cluster</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Appropriate administrative operations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's security documentation covers authentication, TLS, SASL, and authorization through ACLs. ([kafka.apache.org](https://kafka.apache.org/44/security/security-overview/?utm_source=chatgpt.com))</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.7 Production security best practices</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Require authentication for application clients.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Enable TLS for network communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Configure topic-level ACLs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use separate identities for separate services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apply least-privilege access.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Store credentials securely.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rotate credentials and certificates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Restrict controller and internal broker listeners.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Protect Kafka Connect REST endpoints.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Audit access to sensitive event streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apply data classification and retention policies.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 4 — Building Real-Time Event Ingestion Systems
          </div>
        </div>
      </section>

      {/* SECTION 23: 23. Real-Time Event Ingestion Architecture */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Production Ingestion Pipeline</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Real-Time Event Ingestion Architecture
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time ingestion is the process of continuously collecting events from source systems and making them available for downstream processing and analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike traditional batch processing, which operates on scheduled groups of data, real-time ingestion aims to minimize the delay between event generation and availability.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.1 What is real-time data ingestion?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an online payment happens at 10:00:00 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The payment event enters the data platform at 10:00:01 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A fraud detection system processes it at 10:00:02 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A monitoring dashboard reflects the event at 10:00:04 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The entire path happens within seconds.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a real-time or near-real-time ingestion workflow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The exact latency target depends on the application.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.2 Batch versus real-time ingestion</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Batch ingestion</th>                  <th className="px-4 py-3">Real-time ingestion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Processes data at intervals</td>                  <td className="px-4 py-2.5 text-stone-700">Processes events continuously</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Minutes or hours of delay are common</td>                  <td className="px-4 py-2.5 text-stone-700">Often seconds or milliseconds</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">High-volume bulk extraction</td>                  <td className="px-4 py-2.5 text-stone-700">Continuous event collection</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Easier for scheduled analytics</td>                  <td className="px-4 py-2.5 text-stone-700">Suitable for operational reactions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example: Daily sales ETL</td>                  <td className="px-4 py-2.5 text-stone-700">Example: Payment fraud events</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some systems combine both approaches. For example, historical data may be loaded in batches while new changes are continuously captured using CDC.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.3 Components of real-time ingestion</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span className="font-medium">Event producers</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generate information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Web servers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">IoT sensors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment services.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span className="font-medium">Ingestion layer</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receives events and transports them into the messaging infrastructure.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span className="font-medium">Kafka cluster</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores incoming records in topics and distributes them through partitions.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
            <span className="font-medium">Stream processing layer</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validates, transforms, enriches, filters, and aggregates events.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
            <span className="font-medium">Storage layer</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores processed results in:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data lakes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data warehouses.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operational databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Search systems.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
            <span className="font-medium">Analytics layer</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Makes the data available to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dashboards.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Machine learning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business applications.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.4 Complete real-time ingestion architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Producers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Web Apps • Mobile Apps • Databases • IoT • Payment Systems</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ingestion</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application Producers • Kafka Connect • CDC • APIs</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka Cluster</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topics • Partitions • Replication • Retention</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Spark</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Lake • Warehouse • Operational Database</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Consumers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dashboards • Fraud Detection • Analytics • ML Applications</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cross-cutting infrastructure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry • Data Quality • Security • Observability • Dead-Letter Topics</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.5 Real-world example: Payment processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A customer makes an online payment of ₹5,000.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The payment system publishes:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_id": "PAY-10001", "event_type": "PaymentCompleted", "transaction_id": "TXN-9001", "customer_id": 101, "amount": 5000, "currency": "INR", "event_timestamp": "2026-11-09T10:30:00Z" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka receives the event and stores it in:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic: payments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different consumer groups process the same event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer group</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Responsibility</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">fraud-detection</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Check suspicious activity</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">analytics</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update financial analytics`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">notification</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Send payment confirmation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">finance-reporting</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update financial reporting data`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">data-lake</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Archive payment events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each consumer group has independent offsets and processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.6 Real-time fraud detection</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a customer performs five high-value transactions within a very short interval.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The fraud detection consumer:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receives payment events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identifies the customer account.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Evaluates transaction patterns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applies fraud rules or machine learning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Produces a fraud alert event if necessary.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The alert may be published to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic: fraud-alerts</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A separate service can consume the alert and respond.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This demonstrates how Kafka supports event-driven chains across independent services.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.7 Real-time analytics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A stream-processing application can aggregate incoming transaction events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Payment Events | v Kafka Topic | v Stream Processor | v Group by minute | v Calculate total sales | v Revenue Dashboard`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A dashboard might display revenue per minute, transaction volume, or payment failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka itself stores and transports events. A stream-processing engine or application performs the calculations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.8 Important ingestion metrics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production system should monitor:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Metric</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What it measures</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incoming throughput</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records arriving per second</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer throughput</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records processed per second</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How far consumers are behind</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer error rate</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failed or rejected publishing requests</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broker availability</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Health of the Kafka cluster</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Under-replicated partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication health</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing latency</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time to process an event</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">End-to-end latency</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time from event generation to final output</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DLQ volume</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Number of events requiring investigation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data loss</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Missing events or incorrect business effects</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.9 Real-time versus near-real-time</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These terms are sometimes used interchangeably, but they should be defined by the application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time: The system is designed around an operational deadline for reacting to events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Near-real-time: Data arrives with a small but acceptable processing delay.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A dashboard refreshing every 30 seconds may be near-real-time for business reporting, while payment authorization may require a much tighter response time.</p>
        </div>
      </section>

      {/* SECTION 24: 24. Practical Kafka Laboratory — Set Up Kafka Locally */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Hands-on Labs &amp; Internals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Practical Kafka Laboratory — Set Up Kafka Locally
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hands-on implementation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now we will combine the concepts into an actual Kafka environment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.1 Required tools</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You need:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python 3.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Docker Desktop.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A code editor.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Basic terminal knowledge.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For this module, use the official Apache Kafka Docker image.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The current Apache Kafka quickstart documentation provides a Kafka 4.4.0 Docker image and local startup instructions. Kafka 4.x uses KRaft and requires Java 17 or later when using the downloaded JVM distribution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka+1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.2 Start Kafka with Docker</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Run:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker pull apache/kafka:4.4.0`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Start the broker:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker run -d \\ --name kafka \\ -p 9092:9092 \\ apache/kafka:4.4.0`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Check:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker ps`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">View logs:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker logs kafka`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This starts a local single-node Kafka environment for learning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important: This is a development setup, not a production cluster. It does not demonstrate multi-broker replication or high availability.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.3 Create your first Kafka topic</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Execute inside the running container:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker exec kafka \\ /opt/kafka/bin/kafka-topics.sh \\ --bootstrap-server localhost:9092 \\ --create \\ --topic orders \\ --partitions 3 \\ --replication-factor 1`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A replication factor of one is appropriate for this one-broker lab only.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In production, select a replication factor based on the cluster size, failure domains, and durability requirements.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.4 List topics</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker exec kafka \\ /opt/kafka/bin/kafka-topics.sh \\ --bootstrap-server localhost:9092 \\ --list`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expected:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.5 Describe topic</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker exec kafka \\ /opt/kafka/bin/kafka-topics.sh \\ --bootstrap-server localhost:9092 \\ --describe \\ --topic orders`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inspect:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition count.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication factor.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition leaders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replica assignments.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ISR information.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.6 Create a project directory</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">kafka-project/ │ ├── producer.py ├── consumer.py ├── requirements.txt │ ├── data/ │ └── logs/</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create requirements.txt:
confluent-kafka`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Install:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`pip install -r requirements.txt`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.7 Build an order producer</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create producer.py:
import json import logging import uuid from datetime import datetime, timezone from confluent_kafka import Producer logging.basicConfig(level=logging.INFO) producer = Producer({ "bootstrap.servers": "localhost:9092", "acks": "all", "enable.idempotence": True }) def delivery_report(err, message): if err: logging.error("Delivery error: %s", err) else: logging.info( "Published order to partition %s, offset %s", message.partition(), message.offset() ) def create_order(order_id, customer_id, amount): return { "event_id": str(uuid.uuid4()), "event_type": "OrderCreated", "order_id": order_id, "customer_id": customer_id, "amount": amount, "currency": "INR", "event_timestamp": datetime.now( timezone.utc ).isoformat() } if __name__ == "__main__": for i in range(1, 101): event = create_order( order_id=5000 + i, customer_id=100 + (i % 10), amount=1500 + i * 10 ) producer.produce( topic="orders", key=str(event["customer_id"]), value=json.dumps(event), callback=delivery_report ) producer.poll(0) remaining = producer.flush(30) if remaining: logging.error( "%s messages remained undelivered", remaining ) else: logging.info("All queued messages delivered")`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What this implementation demonstrates:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer configuration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotent production.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event structure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON serialization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer-based partition keys.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delivery callbacks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message flushing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A unique event_id helps with application-level deduplication. Producer idempotence addresses a different problem: duplicate log writes due to producer retries.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.8 Build an order consumer</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create consumer.py:
import json import logging from confluent_kafka import Consumer logging.basicConfig(level=logging.INFO) consumer = Consumer({ "bootstrap.servers": "localhost:9092", "group.id": "order-analytics", "auto.offset.reset": "earliest", "enable.auto.commit": False }) consumer.subscribe(["orders"]) try: while True: message = consumer.poll(1.0) if message is None: continue if message.error(): logging.error( "Kafka error: %s", message.error() ) continue try: event = json.loads( message.value().decode("utf-8") ) logging.info( "Event received: %s", event ) # Replace this with durable processing. # Commit only after successful output. consumer.commit( message=message, asynchronous=False ) except (ValueError, UnicodeDecodeError) as exc: logging.exception( "Invalid record: %s", exc ) except KeyboardInterrupt: logging.info("Stopping consumer") finally: consumer.close()`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Run the producer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`python producer.py`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Open another terminal and run:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`python consumer.py`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer should read the order records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Because the consumer group has no committed offset yet, earliest tells it to start from the earliest available retained record.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.9 Experiment with multiple consumers</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Run two or three consumer processes using the same:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`"group.id": "order-analytics"`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Observe how the three topic partitions are assigned across the consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Then use another group ID:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`"group.id": "notification-service"`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This second group can independently consume all the relevant events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.10 Inspect consumer lag</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker exec kafka \\ /opt/kafka/bin/kafka-consumer-groups.sh \\ --bootstrap-server localhost:9092 \\ --describe \\ --group order-analytics`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Observe:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Current offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log end offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition assignment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.11 Test message replay</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stop the consumer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reset offsets:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`docker exec kafka \\ /opt/kafka/bin/kafka-consumer-groups.sh \\ --bootstrap-server localhost:9092 \\ --group order-analytics \\ --topic orders \\ --reset-offsets \\ --to-earliest \\ --execute`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Start the consumer again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It should read the available events from the beginning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Do not perform offset resets while the application is actively consuming.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.12 Test retention and compaction</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create another topic:
docker exec kafka \\ /opt/kafka/bin/kafka-topics.sh \\ --bootstrap-server localhost:9092 \\ --create \\ --topic customer-state \\ --partitions 3 \\ --replication-factor 1 \\ --config cleanup.policy=compact`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use it for records whose keys represent customer IDs and whose values represent the latest customer state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish multiple values with the same key and observe how compaction operates over time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compaction is asynchronous, so do not expect old records to disappear immediately.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 5 — Advanced Kafka Engineering Concepts
          </div>
        </div>
      </section>

      {/* SECTION 25: 25. Kafka Message Processing Internals */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Hands-on Labs &amp; Internals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Kafka Message Processing Internals
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">To design production Kafka pipelines, you should understand what happens after a producer sends a record and before a consumer processes it.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>25.1 Kafka's append-only log</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka stores records as an append-only log.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This means new records are added to the end of a partition's log rather than modifying older records in place.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`orders-0 Offset 0 → OrderCreated Offset 1 → PaymentCompleted Offset 2 → OrderShipped Offset 3 → OrderDelivered Offset 4 → OrderCancelled`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka assigns offsets to records within the partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This log-based design makes sequential writes and reading by offset efficient.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A normal consumer does not delete the event after reading it.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>25.2 Log segments</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka does not store an entire partition as one enormous file.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each partition is divided into log segments.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 0 │ ├── Segment 00000000000000000000 │ ├── Record 0 │ ├── Record 1 │ └── Record 2 │ ├── Segment 00000000000000000003 │ ├── Record 3 │ ├── Record 4 │ └── Record 5 │ └── Active Segment ├── Record 6 └── Record 7</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The active segment receives new records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When it reaches a configured size or time condition, Kafka rolls to a new segment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Older segments become eligible for deletion or compaction according to the topic's cleanup policy.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>25.3 Kafka indexes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka maintains index structures to help locate records efficiently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, when a consumer requests offset 5,000,000, Kafka needs to locate the appropriate segment and record position.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Indexes help map logical offsets to physical positions in log files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This avoids scanning the complete partition from its beginning.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>25.4 Producer batching</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producers can combine multiple records into batches before transmitting them to brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without batching:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record 1 → Broker Record 2 → Broker Record 3 → Broker Record 4 → Broker</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With batching:
+----------------------+ | Record 1 | | Record 2 | | Record 3 | | Record 4 | +----------------------+ | v Broker`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batching can improve network efficiency and throughput.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important producer configurations include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Configuration</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Purpose</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">batch.size</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Approximate maximum batch size</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">linger.ms</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maximum time to wait for additional records before sending a batch</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">compression.type</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression algorithm</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">max.request.size</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maximum request size</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>25.5 Compression</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka supports several compression algorithms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common options include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Gzip.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snappy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">LZ4.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Zstandard (Zstd).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">compression.type=zstd</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression can reduce:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network traffic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage requirements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data transfer time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, compression requires CPU resources. Choose a compression algorithm using workload testing rather than assuming the highest compression ratio always gives the best result.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>25.6 Kafka's efficient data transfer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka uses sequential disk writes and efficient network transfer mechanisms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can use zero-copy-style transfer paths, depending on the operating system, file system, network stack, and request type.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These optimizations help Kafka process large streams efficiently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The most important performance factors are often:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk throughput.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network bandwidth.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batching.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition distribution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer processing capacity.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>25.7 Producer tuning example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a high-throughput ingestion application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Illustrative settings:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`acks=all enable.idempotence=true batch.size=65536 linger.ms=10 compression.type=lz4 max.in.flight.requests.per.connection=5`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These settings aim to balance reliability and throughput.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The exact settings should be tested against message size, throughput, broker capacity, and latency targets.</p>
        </div>
      </section>

      {/* SECTION 26: 26. Kafka Transactions and Exactly-Once Processing */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Hands-on Labs &amp; Internals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Kafka Transactions and Exactly-Once Processing
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka supports transactions that help applications perform multiple Kafka writes atomically.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is important for stream processing pipelines that read from one Kafka topic and write transformed records to another.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>26.1 What problem do transactions solve?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input Topic | v Consumer | v Transformation | v Output Topic`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The consumer reads an order event and publishes a processed event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It also needs to commit its input offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the output record is written successfully but the offset is not committed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After restarting, the same input event might be read again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application could write a duplicate output event.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>26.2 Transactional processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka transactions allow the application to combine output records and consumed offsets into one Kafka transaction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`BEGIN TRANSACTION | v Read Input Record | v Transform Record | v Write Output Record | v Commit Consumed Offset | v COMMIT TRANSACTION`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the transaction succeeds, the output and offset commit together.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the transaction aborts, the transactional output is not visible to consumers using read_committed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>26.3 Important transaction concepts</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactional ID</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identifies a transactional producer and supports producer fencing and transaction recovery across restarts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Begin transaction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Starts a transaction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Commit transaction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Makes the transaction's writes visible as committed data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Abort transaction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Discards the transaction's uncommitted output.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read committed</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Allows a consumer to read only committed transactional records.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>26.4 Conceptual Java example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Properties props = new Properties(); props.put( "bootstrap.servers", "localhost:9092" ); props.put( "transactional.id", "order-processor-1" ); props.put( "enable.idempotence", "true" ); KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(props); producer.initTransactions(); try &#123; producer.beginTransaction(); producer.send( new ProducerRecord&lt;&gt;( "processed-orders", "101", "Order processed" ) ); // In a complete consume-transform-produce // implementation, send consumed offsets // using sendOffsetsToTransaction(). producer.commitTransaction(); &#125; catch (Exception ex) &#123; producer.abortTransaction(); throw ex; &#125; finally &#123; producer.close(); &#125;</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This illustrates the producer transaction lifecycle. It is not a complete consume-transform-produce implementation because it does not demonstrate assigning or committing consumed offsets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka's official design documentation explains the transaction and offset-coordination mechanism.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>26.5 Transactions versus idempotent producers</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Idempotent producer</th>                  <th className="px-4 py-3">Kafka transactions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Protects against duplicate writes due to producer retry scenarios</td>                  <td className="px-4 py-2.5 text-stone-700">Coordinates multiple Kafka operations atomically</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Works for individual producer writes</td>                  <td className="px-4 py-2.5 text-stone-700">Can include outputs and consumed offsets</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Important for reliable publishing</td>                  <td className="px-4 py-2.5 text-stone-700">Important for transactional stream processing</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Does not provide full external-system exactly-once behavior</td>                  <td className="px-4 py-2.5 text-stone-700">Also does not automatically provide external-system exactly-once behavior</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 27: 27. Kafka Monitoring and Observability */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-stone-500">Part 9 · Production Operations &amp; Patterns</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          27. Kafka Monitoring and Observability
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production Kafka cluster needs continuous monitoring.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A cluster can technically be running while experiencing:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">High consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Under-replicated partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk exhaustion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Slow producers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failed requests.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unhealthy brokers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failed connector tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring helps identify issues before they affect downstream systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>27.1 Broker monitoring</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important broker metrics include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CPU utilization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Heap memory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Garbage collection time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network throughput.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk utilization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Request latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Request error rate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Active controller information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Under-replicated partitions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>27.2 Producer monitoring</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important metrics:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records sent per second.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record error count.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Average request latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch size.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression ratio.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry count.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record queue time.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>27.3 Consumer monitoring</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important metrics:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records consumed per second.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failed messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rebalance frequency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Commit latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Number of active consumers.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>27.4 Consumer lag</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag measures how far a consumer is behind the latest available records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A simplified calculation is:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Lag = LogEndOffset - CommittedOffset</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Metric</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Value</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log end offset</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">100,000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Current committed offset</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">80,000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lag</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">20,000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A growing lag can indicate:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumers are too slow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer rate has increased.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer processing is blocked.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A downstream database is overloaded.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Too few partitions or consumers are available.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lag is an important signal, but its value needs context. A temporary backlog that is decreasing may be healthy; a persistent backlog that grows indefinitely indicates a capacity problem.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>27.5 Monitoring tools</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tool</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Purpose</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Prometheus</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Metrics collection</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Grafana</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring dashboards</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JMX</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Java application and broker metrics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">OpenTelemetry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed traces and telemetry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Exporter</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka cluster and consumer-group metrics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka UI</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic, partition and consumer inspection</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>27.6 Example monitoring architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Kafka Brokers | v Metrics Collection | v Prometheus | v Grafana Dashboard | v Alerts | v Engineering Team`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production system should also collect logs and distributed traces to connect failures across producers, brokers, consumers, connectors, and downstream storage.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 6 — Advanced Real-World Architecture
          </div>
        </div>
      </section>

      {/* SECTION 28: 28. Designing a Production Event-Driven Data Platform */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 28
          </span>
          <span className="text-xs font-mono text-stone-500">Part 9 · Production Operations &amp; Patterns</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          28. Designing a Production Event-Driven Data Platform
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now let's design a more complete platform using the technologies covered throughout this module.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scenario: E-commerce organization</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an e-commerce company handles:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10 million customer events daily.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2 million order events daily.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shipment events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer behavioral events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The objective is to build a data platform that supports real-time processing and historical analytics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>28.1 Business requirements</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The organization needs:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Continuous event ingestion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Durable event storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Independent consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time transformation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database change capture.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema version management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fault-tolerant processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replay of historical events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rejection of invalid messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Secure communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring and alerting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytical data storage.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>28.2 Complete production architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operational Data Sources</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL • MySQL • Payment API • Web Applications • IoT</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application Producers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Debezium / Connect</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database CDC</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event schemas • Versions • Compatibility</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka Cluster</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Brokers • Topics • Partitions • Replication • KRaft</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream Processor</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark / Flink / Kafka Streams</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Quality Layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validation • Deduplication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Lake</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet / Object Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Warehouse</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytical Tables</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Consumers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">BI • Machine Learning • Reports • Business Applications</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Supporting infrastructure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring • Security • ACLs • Dead-letter topics • Replay • Backup • Governance</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>28.3 Walkthrough of the architecture</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 1 — Source applications generate events</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order service generates an order event. The payment service generates a payment event. These events are published to Kafka.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 2 — CDC captures database changes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Debezium reads changes from operational databases and publishes database changes into Kafka topics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 3 — Schema validation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producers and consumers use governed schemas. Schema Registry manages schema versions and compatibility.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 4 — Kafka stores and distributes events</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events are organized into topics and partitions. Replication protects partition data against configured broker failures.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 5 — Distributed processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processors validate and transform incoming events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 6 — Quality management</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Invalid records are quarantined or routed to appropriate dead-letter topics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 7 — Storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processed data reaches a data lake and/or data warehouse through downstream processing and connectors.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 8 — Analytics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business users query historical records and monitor real-time business performance.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 9 — Monitoring and recovery</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system tracks consumer lag, broker health, replication, connector status, and pipeline errors. It supports reprocessing when required.</p>
        </div>
      </section>

      {/* SECTION 29: 29. Important Kafka Design Decisions */}
      <section id="section-29" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 29
          </span>
          <span className="text-xs font-mono text-stone-500">Part 9 · Production Operations &amp; Patterns</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          29. Important Kafka Design Decisions
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When building a real Kafka platform, an engineer must make several architectural decisions.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Decision</th>                  <th className="px-4 py-3">Questions to consider</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Topic design</td>                  <td className="px-4 py-2.5 text-stone-700">Should events be separated by business domain or event type?</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Partition count</td>                  <td className="px-4 py-2.5 text-stone-700">How much parallelism and throughput are required?</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Partition key</td>                  <td className="px-4 py-2.5 text-stone-700">Which records need to remain ordered together?</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Replication factor</td>                  <td className="px-4 py-2.5 text-stone-700">How many broker failures should be tolerated?</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Retention</td>                  <td className="px-4 py-2.5 text-stone-700">How much historical event replay is required?</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Serialization</td>                  <td className="px-4 py-2.5 text-stone-700">JSON, Avro or Protobuf?</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Consumer groups</td>                  <td className="px-4 py-2.5 text-stone-700">Which independent applications need the stream?</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Offsets</td>                  <td className="px-4 py-2.5 text-stone-700">When is processing considered complete?</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Transactions</td>                  <td className="px-4 py-2.5 text-stone-700">Are Kafka-to-Kafka atomic effects required?</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">CDC</td>                  <td className="px-4 py-2.5 text-stone-700">How are operational database changes captured?</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">DLQ</td>                  <td className="px-4 py-2.5 text-stone-700">How are malformed and permanently failed records handled?</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Security</td>                  <td className="px-4 py-2.5 text-stone-700">Which services may read and write each topic?</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Monitoring</td>                  <td className="px-4 py-2.5 text-stone-700">Which latency, lag and reliability targets must be maintained?</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These choices should be documented and tested rather than left to default settings.</p>
        </div>
      </section>

      {/* SECTION 30: 30. Important Architectural Patterns Around Kafka */}
      <section id="section-30" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 30
          </span>
          <span className="text-xs font-mono text-stone-500">Part 9 · Production Operations &amp; Patterns</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          30. Important Architectural Patterns Around Kafka
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>30.1 Event sourcing versus event-driven architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These two concepts are related but not the same.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven architecture means components communicate through events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event sourcing means an application's state is represented by a sequence of events rather than storing only the latest state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: A bank account.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of only storing:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Current Balance = ₹8,000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An event-sourced system might store:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AccountOpened +₹10,000 MoneyDeposited +₹5,000 MoneyWithdrawn -₹2,000 MoneyTransferred -₹5,000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The current balance can be calculated by replaying the events:</p>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Balance = 10,000+5,000-2,000-5,000</span>
          </div>
          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">
            <span className="font-semibold text-orange-900 tracking-wide">Balance = ₹8,000</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advantages:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical state reconstruction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Detailed audit history.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ability to replay events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Temporal analysis.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful for financial and business workflows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Challenges:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event schema evolution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event versioning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replay performance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snapshot management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Complex corrections and compensating events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka can serve as an event log or event transport infrastructure in event-sourced architectures, but Kafka alone does not automatically provide a complete event-sourcing application.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>30.2 Transactional outbox pattern</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One important challenge occurs when an application needs to update its database and publish an event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the order service does this:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Insert order into PostgreSQL.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish OrderCreated to Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What happens if the database transaction succeeds but Kafka publishing fails?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The database contains the order, but downstream services never receive the event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is called the dual-write problem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The transactional outbox pattern addresses this issue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How it works:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application writes both the business record and the event into two database tables within one database transaction.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Application | v Database Transaction | +------> orders table | +------> outbox table | v CDC / Outbox Relay | v Kafka | v Consumers`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">BEGIN; INSERT INTO orders ( order_id, customer_id, amount ) VALUES ( 5001, 101, 1500 ); INSERT INTO outbox_events ( event_id, aggregate_type, aggregate_id, event_type, payload ) VALUES ( 'EVT-10001', 'Order', '5001', 'OrderCreated', '&#123;"order_id":5001,"customer_id":101&#125;' ); COMMIT;</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now either both database inserts succeed or both roll back.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A separate relay or CDC connector publishes the outbox record to Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The relay can publish an event more than once under certain failure scenarios, so consumers should still use idempotency.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>30.3 Saga pattern</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A saga is a way to coordinate a long-running business transaction across multiple independent services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an order workflow:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create Order | v Reserve Payment | v Reserve Inventory | v Confirm Shipment | v Complete Order`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What happens if inventory reservation fails after payment was successfully reserved?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A saga uses a compensating action to undo or counteract earlier operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Payment Reserved | v Inventory Reservation Fails | v Payment Refund Initiated | v Order Cancelled`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This approach is useful because separate microservices generally do not share one atomic database transaction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka events can be used for communication between saga participants.</p>
        </div>
      </section>

      {/* SECTION 31: 31. End-to-End Capstone Project */}
      <section id="section-31" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 31
          </span>
          <span className="text-xs font-mono text-stone-500">Part 10 · Capstone &amp; Best Practices</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          31. End-to-End Capstone Project
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Major practical project</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Project — Real-Time E-commerce Data Streaming Platform Using Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Project objective</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build a production-inspired event streaming system that captures order and payment information, processes events in real time, and stores reliable data for analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The project should combine the following:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven architecture.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producers and consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer groups.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication concepts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data quality validation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dead-letter topics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message replay.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Security.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>31.1 Technology stack</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Technology</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Programming language</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Messaging</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event serialization</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON initially, Avro as an extension</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema management</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Debezium</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Integration</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python consumers / Spark</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Local files / Parquet / PostgreSQL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Prometheus and Grafana</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Environment</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Docker</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a student project, begin with a single local Kafka node and PostgreSQL. Add multi-broker replication and separate controller infrastructure as advanced extensions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>31.2 Project architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">E-commerce Application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generate orders, customers and payments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python Producer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL CDC</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database changes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Governed event schemas</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Topics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders • payments • customers • inventory</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytics Consumer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue aggregation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Notification Consumer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order updates</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Quality Consumer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Lake Consumer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL / Parquet / Analytics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validated business data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure handling</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry topics • Dead-letter topic • Idempotency • Offset management • Replay</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>31.3 Required Kafka topics</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create these topics:`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Purpose</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order-created and order-updated events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">payments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer changes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">inventory</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stock updates</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">shipments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shipment events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order-events-dlq</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Permanently failed order messages</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">payment-events-dlq</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Permanently failed payment messages</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For your initial implementation, a single-broker cluster can use replication factor 1. The production architecture should demonstrate replication factor 3 on a sufficiently large broker cluster.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>31.4 Functional requirements</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event generation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generate at least 100,000 sample business events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event ingestion</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish events into appropriate Kafka topics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use customer IDs or order IDs as partition keys according to the ordering requirement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer groups</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create separate groups for analytics, notifications, and historical storage.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset management</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement manual offset commits after successful processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema management</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Register event schemas and demonstrate a compatible schema update.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Capture PostgreSQL inserts and updates and publish them through Debezium.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data quality</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate required fields, event types, IDs, and amounts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate handling</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deduplicate using stable event identifiers and database constraints.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DLQ</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Send invalid or permanently failed records to the correct dead-letter topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replay</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reprocess a historical event range into a rebuilt analytical table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitor producer failures, consumer lag, broker health, and message throughput.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>31.5 Expected project output</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your final application should demonstrate:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events successfully entering Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records distributed between partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple consumer groups receiving events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Independent consumer progress.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Correct offset recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC events entering Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema compatibility checks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Invalid events entering DLQ.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replay rebuilding historical analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring showing pipeline health.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>31.6 Assessment criteria</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Evaluation area</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Weight</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven architecture design</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka topic and partition design</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">15%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producers and consumers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">15%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer groups and offsets</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication and reliability concepts</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry and serialization</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect and CDC</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DLQ, retries and replay</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring and documentation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">100%</p>
        </div>
      </section>

      {/* SECTION 32: 32. Common Mistakes in Kafka and Event-Driven Systems */}
      <section id="section-32" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 32
          </span>
          <span className="text-xs font-mono text-stone-500">Part 10 · Capstone &amp; Best Practices</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          32. Common Mistakes in Kafka and Event-Driven Systems
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understanding mistakes will help you avoid problems in production.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span className="font-medium">Treating Kafka like a traditional queue.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka stores retained event logs. Consuming a record does not automatically delete it.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span className="font-medium">Assuming Kafka provides global ordering.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ordering is guaranteed within individual partitions, not automatically across the entire topic.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span className="font-medium">Choosing a poor partition key.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A poor key can create hot partitions and data skew.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
            <span className="font-medium">Creating too many partitions without planning.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Too many partitions add cluster-management and operational overhead.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
            <span className="font-medium">Using acks=0 for critical events.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The producer receives no confirmation that the broker stored the record.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
            <span className="font-medium">Ignoring consumer offset commits.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Committing before output processing completes can cause missing business effects.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">7</span>
            <span className="font-medium">Assuming idempotent producer means exactly-once business processing.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Producer idempotence prevents certain duplicate log writes. It does not automatically make external database or API operations exactly once.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">8</span>
            <span className="font-medium">Ignoring consumer lag.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consumer may be technically running while becoming increasingly unable to keep up.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">9</span>
            <span className="font-medium">Publishing events without a schema contract.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Uncontrolled schema changes break consumers and analytical pipelines.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">10</span>
            <span className="font-medium">Using only automatic offset commits for critical workloads.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset commit timing should align with successful business processing.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">11</span>
            <span className="font-medium">Ignoring poison messages.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A malformed record can repeatedly disrupt processing if it is not isolated.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">12</span>
            <span className="font-medium">Treating DLQ as the final destination for every error.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some errors should be retried; some require data correction; some need immediate investigation.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">13</span>
            <span className="font-medium">Assuming replication factor 3 means every write waits for all three copies.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The actual guarantee depends on the ISR, acknowledgement configuration, and minimum in-sync replica requirement.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">14</span>
            <span className="font-medium">Ignoring Kafka retention.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events required for replay may disappear if retention is shorter than the recovery window.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">15</span>
            <span className="font-medium">Assuming Schema Registry is part of the Kafka broker.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry is a separate ecosystem service.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">16</span>
            <span className="font-medium">Running ZooKeeper startup instructions with modern Kafka 4.x.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka 4.x requires KRaft. The older ZooKeeper workflow in many tutorials is no longer suitable for Kafka 4.x.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">17</span>
            <span className="font-medium">Using CDC without understanding snapshots and log positions.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incorrect CDC configuration can create gaps, duplicate data, or inconsistent initial snapshots.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">18</span>
            <span className="font-medium">Forgetting external side effects.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replaying payment events or notification events must not accidentally execute irreversible actions again.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">19</span>
            <span className="font-medium">Treating event delivery and business completion as identical.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A broker accepting an event does not prove that every downstream service has successfully processed it.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">20</span>
            <span className="font-medium">Neglecting security.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topics containing customer and financial events need authentication, authorization, and appropriate protection.</p>
        </div>
      </section>

      {/* SECTION 33: 33. Important Interview Questions and Answers */}
      <section id="section-33" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 33
          </span>
          <span className="text-xs font-mono text-stone-500">Part 10 · Capstone &amp; Best Practices</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          33. Important Interview Questions and Answers
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These questions cover Kafka, event-driven architecture, real-time ingestion, and production data engineering.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q1. What is event-driven architecture?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven architecture is a software design pattern in which independent components communicate through events representing things that have happened. Producers publish events, and interested consumers process them asynchronously.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q2. What is the difference between an event and a command?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An event describes something that already happened, such as OrderCreated. A command requests an action, such as CreateOrder.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q3. What is Apache Kafka?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka is a distributed event streaming platform used to publish, store, process, and consume high-volume event streams.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q4. What is a Kafka broker?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A broker is a Kafka server that stores topic partitions, receives producer requests, serves consumers, and participates in replication and cluster operations.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q5. What is a Kafka cluster?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Kafka cluster is a group of brokers that work together to store and distribute event streams.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q6. What is a Kafka topic?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A topic is a named logical stream of events. Producers publish records to topics, and consumers subscribe to them.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q7. What is a partition?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A partition is an ordered, append-only log within a topic. It allows Kafka to distribute storage and processing across brokers and consumers.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q8. What is an offset?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An offset is a position identifier assigned to a record inside a particular partition. Consumers use offsets to track progress.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q9. What is the difference between a topic and a partition?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A topic is the logical event stream. A partition is an individual ordered log into which the topic's records are divided.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q10. What is a Kafka producer?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A producer is an application that serializes and publishes records to Kafka topics.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q11. What is a Kafka consumer?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consumer is an application that subscribes to topics, reads records, and processes them.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q12. What is a consumer group?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A consumer group is a set of consumers that coordinate to process topic partitions. Multiple groups can independently consume the same topic.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q13. What happens when consumers exceed partitions?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In traditional consumer-group assignment, consumers without an assigned partition remain idle for that topic.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q14. What is consumer lag?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag is the difference between the latest available position and the consumer group's committed position. It indicates how far the consumer is behind.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q15. What is consumer rebalancing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rebalancing redistributes partition assignments when consumers join, leave, fail, or group subscriptions change.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q16. How does Kafka maintain message ordering?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka maintains record order within each partition. Using a suitable partition key can ensure that events for the same business entity are sent to the same partition.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q17. Why is a partition key important?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A partition key determines which partition receives a record. It supports data distribution and per-entity ordering.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q18. What is Kafka replication?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication maintains multiple copies of a partition across brokers to provide fault tolerance and availability.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q19. What is ISR?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ISR stands for In-Sync Replicas. It identifies the partition replicas that are sufficiently caught up with the leader according to Kafka's replication rules.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q20. What is the difference between acks=1 and acks=all?</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`acks=1 waits for the partition leader's local acknowledgement. acks=all waits for the current in-sync replica set to acknowledge the write.`}</code>
            </pre>
          </div>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q21. What is min.insync.replicas?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It specifies the minimum number of in-sync replicas required for writes using acks=all.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q22. What is the difference between retention and compaction?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retention deletes old log segments according to configured limits. Compaction preserves the latest value for each key while removing superseded values over time.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q23. What is Schema Registry?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema Registry centrally manages event schemas, versions, serialization metadata, and compatibility requirements for producers and consumers.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q24. What is Apache Avro?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avro is a schema-based data serialization system that provides compact binary encoding and schema evolution capabilities.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q25. What is Kafka Connect?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect is a framework for integrating Kafka with external systems through reusable source and sink connectors.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q26. What is the difference between a source and a sink connector?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A source connector imports data from an external system into Kafka. A sink connector consumes data from Kafka and writes it to an external destination.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q27. What is Change Data Capture?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC captures database changes such as insert, update, and delete operations and makes them available to downstream systems.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q28. What is Debezium?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Debezium is an open-source CDC platform that integrates with Kafka Connect to capture changes from supported databases and publish them as Kafka events.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q29. What is a dead-letter topic?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A dead-letter topic stores messages that cannot be successfully processed after the applicable retry and error-handling policy.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q30. What is message replay?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message replay is the process of consuming retained Kafka records again, usually by using a new consumer group or resetting offsets.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q31. What is the difference between at-most-once and at-least-once delivery?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At-most-once allows zero or one delivery. At-least-once delivery allows repeated delivery to reduce message loss, so consumers must handle duplicates.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q32. How does Kafka support exactly-once processing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka supports idempotent producers and transactions that can coordinate Kafka output records with consumed offsets inside a defined Kafka processing boundary.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q33. What is the difference between Kafka and RabbitMQ?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka is primarily a distributed event streaming platform built around retained partition logs. RabbitMQ is a messaging broker with sophisticated queueing and routing capabilities. Their retention, replay, acknowledgement, and routing models differ.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q34. What is KRaft?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">KRaft is Kafka's built-in metadata coordination and consensus architecture. Kafka 4.x requires KRaft and no longer supports ZooKeeper mode.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q35. What is the difference between event-driven architecture and event sourcing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven architecture uses events for communication between components. Event sourcing stores application state as a sequence of events from which state can be reconstructed.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q36. What is the transactional outbox pattern?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It stores a business database change and the corresponding event in the same database transaction. A separate relay or CDC process publishes the outbox event to Kafka.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q37. What is Kafka consumer offset reset?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It changes the position from which a consumer group reads records. It is useful for replaying historical data or rebuilding analytical outputs.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q38. What is a poison message?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A poison message is a record that repeatedly fails processing, often because of invalid data, incompatible schemas, or persistent application errors.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q39. How do you scale Kafka consumers?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase the number of partitions where appropriate, run multiple consumers in the same group, optimize processing, and ensure that downstream systems can support the increased throughput.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q40. How would you design a real-time Kafka ingestion system?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">I would use application producers and CDC connectors to publish structured events into partitioned and replicated Kafka topics. I would implement schema management, consumer groups, offset handling, idempotent processing, retry and DLQ mechanisms, and stream processing. Finally, I would store outputs in a data lake or warehouse and monitor consumer lag, replication, throughput, and failures.</p>
        </div>
      </section>

      {/* SECTION 34: 34. Recommended Learning Resources */}
      <section id="section-34" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 34
          </span>
          <span className="text-xs font-mono text-stone-500">Part 11 · Reference &amp; Next Steps</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          34. Recommended Learning Resources
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Study the following resources alongside the module.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Resource</th>                  <th className="px-4 py-3">What to learn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Apache Kafka — <a href="https://kafka.apache.org/44/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Official Kafka 4.4 documentation</a></td>                  <td className="px-4 py-2.5 text-stone-700">Core Kafka concepts and architecture</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://kafka.apache.org/quickstart/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Kafka Quickstart</a></td>                  <td className="px-4 py-2.5 text-stone-700">Local Kafka installation and first events</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://kafka.apache.org/44/kafka-connect/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Kafka Connect documentation</a></td>                  <td className="px-4 py-2.5 text-stone-700">Source and sink connectors</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://kafka.apache.org/44/configuration/producer-configs/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Producer configuration</a></td>                  <td className="px-4 py-2.5 text-stone-700">Acknowledgements, batching and idempotency</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://kafka.apache.org/44/configuration/consumer-configs/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Consumer configuration</a></td>                  <td className="px-4 py-2.5 text-stone-700">Offset management and consumption</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Confluent Schema Registry — <a href="https://docs.confluent.io/platform/current/schema-registry/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Documentation</a></td>                  <td className="px-4 py-2.5 text-stone-700">Avro, schema management and compatibility</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Debezium — <a href="https://debezium.io/documentation/reference/stable/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Documentation</a></td>                  <td className="px-4 py-2.5 text-stone-700">Database CDC</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Apache Kafka GitHub — <a href="https://github.com/apache/kafka?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Source code</a></td>                  <td className="px-4 py-2.5 text-stone-700">Kafka implementation and development</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Confluent Developer — <a href="https://developer.confluent.io/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Learning resources</a></td>                  <td className="px-4 py-2.5 text-stone-700">Kafka tutorials and practical exercises</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The DEV Community article you supplied is useful for a beginner introduction and an e-commerce event example. However, it uses Kafka client 3.6 and ZooKeeper startup instructions. For modern Kafka 4.x development, use the current KRaft-based setup and official documentation instead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DEV Community+2</p>
        </div>
      </section>

      {/* SECTION 35: 35. Final Revision — Module 16 */}
      <section id="section-35" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 35
          </span>
          <span className="text-xs font-mono text-stone-500">Part 11 · Reference &amp; Next Steps</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          35. Final Revision — Module 16
        </h2>
        <div className="space-y-3">
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Topic</th>                  <th className="px-4 py-3">What you should understand</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Event-Driven Architecture</td>                  <td className="px-4 py-2.5 text-stone-700">Event-based application communication</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Event-Based Communication</td>                  <td className="px-4 py-2.5 text-stone-700">Producers, consumers and event contracts</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Messaging Systems</td>                  <td className="px-4 py-2.5 text-stone-700">Messaging patterns and communication</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Brokers and Queues</td>                  <td className="px-4 py-2.5 text-stone-700">Message storage, routing and delivery</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Kafka Architecture</td>                  <td className="px-4 py-2.5 text-stone-700">Distributed event streaming</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Brokers and Clusters</td>                  <td className="px-4 py-2.5 text-stone-700">Kafka server responsibilities</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Topics</td>                  <td className="px-4 py-2.5 text-stone-700">Logical event streams</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Partitions</td>                  <td className="px-4 py-2.5 text-stone-700">Parallelism and ordered logs</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Producers</td>                  <td className="px-4 py-2.5 text-stone-700">Event publishing</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Consumers</td>                  <td className="px-4 py-2.5 text-stone-700">Event processing</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Consumer Groups</td>                  <td className="px-4 py-2.5 text-stone-700">Distributed consumption</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Offsets</td>                  <td className="px-4 py-2.5 text-stone-700">Consumer progress and recovery</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Message Ordering</td>                  <td className="px-4 py-2.5 text-stone-700">Per-partition ordering and partition keys</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Replication</td>                  <td className="px-4 py-2.5 text-stone-700">Partition replicas and fault tolerance</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Retention</td>                  <td className="px-4 py-2.5 text-stone-700">Time and size-based log management</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Log Compaction</td>                  <td className="px-4 py-2.5 text-stone-700">Latest values by key</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Acknowledgements</td>                  <td className="px-4 py-2.5 text-stone-700">acks=0, acks=1, acks=all</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Delivery Semantics</td>                  <td className="px-4 py-2.5 text-stone-700">At-most-once, at-least-once, transactional effects</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Schema Registry</td>                  <td className="px-4 py-2.5 text-stone-700">Central schema governance</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Avro and JSON</td>                  <td className="px-4 py-2.5 text-stone-700">Event serialization</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Kafka Connect</td>                  <td className="px-4 py-2.5 text-stone-700">External data integration</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">CDC</td>                  <td className="px-4 py-2.5 text-stone-700">Database change capture</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Dead-Letter Queues</td>                  <td className="px-4 py-2.5 text-stone-700">Failed-message handling</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Message Replay</td>                  <td className="px-4 py-2.5 text-stone-700">Historical reprocessing</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Kafka Security</td>                  <td className="px-4 py-2.5 text-stone-700">Authentication, TLS and ACLs</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Real-Time Ingestion</td>                  <td className="px-4 py-2.5 text-stone-700">End-to-end event streaming</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Event Sourcing</td>                  <td className="px-4 py-2.5 text-stone-700">State reconstruction from events</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Transactional Outbox</td>                  <td className="px-4 py-2.5 text-stone-700">Reliable database-to-event publishing</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Kafka Transactions</td>                  <td className="px-4 py-2.5 text-stone-700">Atomic Kafka output and offset operations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Monitoring</td>                  <td className="px-4 py-2.5 text-stone-700">Lag, throughput, broker health and failures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 36: 36. How Module 16 Connects to Your Data Engineering Roadmap */}
      <section id="section-36" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 36
          </span>
          <span className="text-xs font-mono text-stone-500">Part 11 · Reference &amp; Next Steps</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          36. How Module 16 Connects to Your Data Engineering Roadmap
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 14 — Data Quality</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate, test and govern data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 15 — Distributed Systems</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand distributed computing and reliability</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 16 — Event-Driven Architecture and Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Current module</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build real-time event streaming systems</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advanced Stream Processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Windowing • Stateful processing • Event time • Stream joins</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Production-Scale Data Platforms</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time analytics • CDC • Data lakes • Warehouses</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The most important takeaway: Kafka is not simply a tool for sending messages between applications. It provides a durable, distributed event-streaming foundation that allows multiple independent systems to consume, process, replay, and transform data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A skilled data engineer should understand not only how to publish and consume Kafka messages, but also how partitions, consumer groups, offsets, replication, schema evolution, CDC, and failure recovery work together to create reliable real-time data platforms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 16 complete</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recommended practical sequence: Complete the basic Kafka producer/consumer lab first, then implement consumer groups and offsets, followed by Schema Registry, CDC with Debezium, and finally the full e-commerce streaming capstone. This gives you a progression from fundamentals to production-style data engineering.</p>
        </div>
      </section>

    </div>
  );
}
