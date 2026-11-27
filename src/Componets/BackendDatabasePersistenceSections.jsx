import React from "react";
import { ArrowRight } from "lucide-react";

export default function BackendDatabasePersistenceSections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Core Module &bull; 12 Lessons &bull; Practical Lab + Assignment
          </span>
          <span className="text-xs font-mono text-stone-500">Module 04</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 04 &mdash; Database Engineering and Backend Persistence
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            A backend application needs a reliable way to store information, retrieve it when required, and update it without corrupting existing data. Using <strong>Java, Spring Boot, Spring Data JPA, Hibernate, and PostgreSQL</strong>, this module teaches you how to design relational schemas, map entities, manage transactions, prevent duplicate enrolments, eliminate N+1 queries, run Flyway/Liquibase migrations, and handle concurrent updates.
          </p>
          <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800">
            <strong>Final Objective:</strong> Design and implement a reliable PostgreSQL-backed persistence layer for a real-world Spring Boot application, rather than simply performing basic CRUD operations.
          </div>
        </div>
      </section>

      {/* LESSONS 1-3: INTERACTION, RELATIONAL DESIGN & POSTGRESQL */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 1&ndash;3</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">1. Database Interaction, 2. Relational Design &amp; 3. PostgreSQL Config</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Frontends never connect directly to production databases. Requests flow from Frontend &rarr; Spring Boot API &rarr; Service Layer &rarr; PostgreSQL JDBC Driver via a <strong>HikariCP connection pool</strong> (reusing connections instead of opening/closing per request).
          </p>
          <p>
            Relational databases use <strong>Primary Keys (PK)</strong>, <strong>Foreign Keys (FK)</strong>, and <strong>Normalization (1NF, 2NF, 3NF)</strong> to prevent duplicated student/course data and update anomalies. Connect Spring Boot to PostgreSQL (port <code className="font-mono bg-stone-100 px-1 rounded">5432</code>) using <code className="font-mono bg-stone-100 px-1 rounded">spring-boot-starter-data-jpa</code> + <code className="font-mono bg-stone-100 px-1 rounded">postgresql</code> and externalized credentials:
          </p>
          <pre className="p-4 rounded-xl bg-stone-950 text-stone-100 font-mono text-xs overflow-x-auto leading-relaxed">
{`spring.datasource.url=jdbc:postgresql://localhost:5432/prepspaces
spring.datasource.username=\${DB_USERNAME}
spring.datasource.password=\${DB_PASSWORD}
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=true`}
          </pre>
        </div>
      </section>

      {/* LESSONS 4-6: JPA, HIBERNATE, ENTITIES & RELATIONSHIPS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 4&ndash;6</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">4. JPA &amp; Hibernate, 5. Entity Mapping &amp; 6. Relationships</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>JPA (Jakarta Persistence API)</strong> is the specification; <strong>Hibernate</strong> is the ORM implementation managing the <strong>Persistence Context</strong>, <strong>Entity Lifecycle</strong> (transient, managed, detached, removed), <strong>Dirty Checking</strong>, and <code className="font-mono bg-stone-100 px-1 rounded">EntityManager</code>.
          </p>
          <p>
            Model <strong>One-to-One</strong> (<code className="font-mono bg-stone-100 px-1 rounded">@OneToOne</code> + <code className="font-mono bg-stone-100 px-1 rounded">@JoinColumn</code>), <strong>One-to-Many / Many-to-One</strong> (<code className="font-mono bg-stone-100 px-1 rounded">@OneToMany(mappedBy = &quot;instructor&quot;)</code> and <code className="font-mono bg-stone-100 px-1 rounded">@ManyToOne</code> on the owning foreign-key side), and <strong>Many-to-Many</strong> via an independent <code className="font-mono bg-stone-100 px-1 rounded">Enrollment</code> entity (so you can store <code className="font-mono bg-stone-100 px-1 rounded">enrolledAt</code>, <code className="font-mono bg-stone-100 px-1 rounded">status</code>, completion %, and payment status).
          </p>
        </div>
      </section>

      {/* LESSONS 7-9: REPOSITORIES, TRANSACTIONS & CONSTRAINTS */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 7&ndash;9</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">7. Repositories, 8. ACID Transactions &amp; 9. Data Integrity</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>Spring Data JPA</strong> generates repository implementations from interfaces (<code className="font-mono bg-stone-100 px-1 rounded">save</code>, <code className="font-mono bg-stone-100 px-1 rounded">findById</code>, derived queries like <code className="font-mono bg-stone-100 px-1 rounded">existsByEmail</code>, and JPQL <code className="font-mono bg-stone-100 px-1 rounded">@Query</code>).
          </p>
          <p>
            <strong>ACID Transactions</strong> (<strong>Atomicity</strong>, <strong>Consistency</strong>, <strong>Isolation</strong>, <strong>Durability</strong>) via <code className="font-mono bg-stone-100 px-1 rounded">@Transactional</code> ensure multi-step operations (like creating an enrolment and decrementing <code className="font-mono bg-stone-100 px-1 rounded">available_seats</code>) either commit together or roll back on failure. Enforce critical rules at the database layer using <code className="font-mono bg-stone-100 px-1 rounded">PRIMARY KEY</code>, <code className="font-mono bg-stone-100 px-1 rounded">FOREIGN KEY</code>, <code className="font-mono bg-stone-100 px-1 rounded">NOT NULL</code>, <code className="font-mono bg-stone-100 px-1 rounded">CHECK</code>, <code className="font-mono bg-stone-100 px-1 rounded">DEFAULT</code>, and composite <code className="font-mono bg-stone-100 px-1 rounded">UNIQUE (user_id, course_id)</code> constraints.
          </p>
        </div>
      </section>

      {/* LESSONS 10-12: N+1 PROBLEM, MIGRATIONS & CONCURRENCY */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold">Lessons 10&ndash;12</span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">10. N+1 Queries, 11. Migrations &amp; 12. Concurrency Control</h2>
        </div>

        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            <strong>The N+1 Problem:</strong> Loading 100 users (1 query) and accessing each user&apos;s lazy-loaded <code className="font-mono bg-stone-100 px-1 rounded">enrollments</code> triggers 100 extra queries (101 total). Solve it with <code className="font-mono bg-stone-100 px-1 rounded">JOIN FETCH</code>, EntityGraphs, batch fetching, or DTO projections, and watch for <code className="font-mono bg-stone-100 px-1 rounded">LazyInitializationException</code> outside the persistence context.
          </p>
          <p>
            <strong>Database Migrations:</strong> Never rely on <code className="font-mono bg-stone-100 px-1 rounded">ddl-auto=update</code> in production. Use versioned migration scripts with <strong>Flyway</strong> (e.g., <code className="font-mono bg-stone-100 px-1 rounded">V2__add_phone_number_to_users.sql</code>) or <strong>Liquibase</strong> paired with <code className="font-mono bg-stone-100 px-1 rounded">ddl-auto=validate</code>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-800 font-bold">
                <tr>
                  <th className="p-3">Concurrency Strategy</th>
                  <th className="p-3">Best suited for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr><td className="p-3 font-semibold text-stone-900">Optimistic locking (@Version)</td><td className="p-3">Low-conflict updates; detects stale writes</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Pessimistic locking (PESSIMISTIC_WRITE)</td><td className="p-3">Operations requiring exclusive row locks</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Atomic SQL updates</td><td className="p-3">Conditional counters (<code className="font-mono text-xs">WHERE available_seats &gt; 0</code>)</td></tr>
                <tr><td className="p-3 font-semibold text-stone-900">Unique constraints</td><td className="p-3">Preventing duplicate records (<code className="font-mono text-xs">user_id, course_id</code>)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRACTICAL LAB & ASSIGNMENT */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">Practical Lab &amp; Assignment</span>
          <span className="text-xs text-stone-500 font-mono">Course Enrolment API + Learning Platform Persistence</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
          Course Enrolment API Lab &amp; Learning Platform DB Assignment
        </h2>
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            Build a PostgreSQL-backed Course Enrolment API (<code className="font-mono bg-stone-100 px-1 rounded">Users</code>, <code className="font-mono bg-stone-100 px-1 rounded">Courses</code>, <code className="font-mono bg-stone-100 px-1 rounded">Enrollments</code>) supporting registration, course creation/listing, transactional enrolment &amp; seat-count reservation, duplicate prevention, and concurrency protection.
          </p>
          <p className="text-xs sm:text-sm">
            Extend this in the Independent Engineering Assignment (Parts A&ndash;F) to a 6-entity learning platform schema (User, Course, Enrollment, Module, Lesson, Learning Progress), resolving an N+1 query, implementing optimistic or pessimistic locking, and authoring versioned Flyway/Liquibase migrations.
          </p>
        </div>
      </section>
    </div>
  );
}
