import React from 'react';

/* 
 * AUTO-GENERATED CURRICULUM SECTIONS COMPONENT FOR MODULE 22
 * Java Collections, JVM & Performance Engineering
 * Total Sections: 24
 */

export const JAVA_COLLECTIONS_JVM_SECTIONS = [
  {
    id: 0,
    title: "Module 22 Overview & 3 Pillars of Java Performance",
    summary: "Master Collections architecture, JVM runtime internals (memory, class loading, JIT, GC), and enterprise performance engineering.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-0-0" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Module 22 — Java Collections, JVM &amp; Performance Engineering</strong>` }} />
        </h2>
      

      <p key="p-0-1" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `ADVANCED JAVA • DATA STRUCTURES • RUNTIME INTERNALS • PERFORMANCE` }} />
      </p>
    

      <p key="p-0-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This module brings together three important areas of professional Java development:` }} />
      </p>
    

        <ol key="ol-0-3" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Collections and data structures:</strong> How Java stores, organizes, searches, and processes data.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">JVM internals:</strong> How Java programs are loaded, executed, stored in memory, and garbage-collected.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Performance engineering:</strong> How to measure, identify, and improve the performance of real Java applications.` }} /></li>
        </ol>
      

      <p key="p-0-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `By the end, you should be able to choose the right collection for a problem, explain how common collections work internally, understand what happens when Java executes your code, investigate memory and performance problems, and write more efficient Java applications.` }} />
      </p>
    

        <div key="quote-0-5" className="my-5 p-4 rounded-xl border-l-4 border-orange-500 bg-stone-50 text-stone-700 text-sm leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Important:</strong> Some internal details below describe common OpenJDK implementations, particularly HotSpot. They explain how Java commonly works in practice, but implementation details are not all guaranteed by the Java language specification.` }} />
        </div>
      

        <h2 key="h1-0-6" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">PART 1 — JAVA COLLECTIONS FRAMEWORK</strong>` }} />
        </h2>
      
      </div>
    )
  },
  {
    id: 1,
    title: "1. Java Collections Framework Deep Dive",
    summary: "JCF architecture, Iterable and Collection hierarchies, Map separation rationale, collection algorithms, and fail-fast iterators.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-1-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1. Java Collections Framework Deep Dive</strong>` }} />
        </h3>
      

        <h4 key="h3-1-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1.1 What is the Java Collections Framework?</strong>` }} />
        </h4>
      

      <p key="p-1-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The Java Collections Framework (JCF) is a collection of interfaces, classes, and algorithms used to store and manipulate groups of objects.` }} />
      </p>
    

      <p key="p-1-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Without collections, you might store data using arrays:` }} />
      </p>
    

        <div key="code-1-4" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`String[] students = new String[5];

students[0] = "Amit";
students[1] = "Rahul";
students[2] = "Priya";
students[3] = "Neha";
students[4] = "Arjun";`}</code>
          </pre>
        </div>
      

      <p key="p-1-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Arrays work well when you know the required size in advance. But they have limitations:` }} />
      </p>
    

        <ul key="ul-1-6" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Their size is fixed after creation.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Inserting and deleting elements can require manual shifting.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `They do not automatically provide operations such as sorting, searching, or removing duplicates.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Implementing complex data structures manually takes additional effort.` }} /></li>
        </ul>
      

      <p key="p-1-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Collections provide reusable data structures and operations.` }} />
      </p>
    

        <div key="code-1-8" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;

public class Main &#123;
    public static void main(String[] args) &#123;

        List&lt;String&gt; students = new ArrayList&lt;&gt;();

        students.add("Amit");
        students.add("Rahul");
        students.add("Priya");

        students.remove("Rahul");

        System.out.println(students);
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-1-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-1-10" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`[Amit, Priya]`}</code>
          </pre>
        </div>
      

      <p key="p-1-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The framework handles much of the underlying data management.` }} />
      </p>
    

        <h4 key="h3-1-12" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1.2 The Collections Framework hierarchy</strong>` }} />
        </h4>
      

      <p key="p-1-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The most important interfaces are:` }} />
      </p>
    

        <h3 key="h2-1-14" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Collections Framework</strong>` }} />
        </h3>
      

      <p key="p-1-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Iterable</strong>` }} />
      </p>
    

      <p key="p-1-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Provides iteration support` }} />
      </p>
    

      <p key="p-1-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Collection</strong>` }} />
      </p>
    

      <p key="p-1-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `General group of elements` }} />
      </p>
    

      <p key="p-1-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">List</strong>` }} />
      </p>
    

      <p key="p-1-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Ordered, duplicates allowed` }} />
      </p>
    

      <p key="p-1-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `ArrayList` }} />
      </p>
    

      <p key="p-1-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `LinkedList` }} />
      </p>
    

      <p key="p-1-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Vector` }} />
      </p>
    

      <p key="p-1-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Set</strong>` }} />
      </p>
    

      <p key="p-1-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Unique elements` }} />
      </p>
    

      <p key="p-1-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashSet` }} />
      </p>
    

      <p key="p-1-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `LinkedHashSet` }} />
      </p>
    

      <p key="p-1-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `TreeSet` }} />
      </p>
    

      <p key="p-1-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Queue</strong>` }} />
      </p>
    

      <p key="p-1-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Processing elements` }} />
      </p>
    

      <p key="p-1-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `PriorityQueue` }} />
      </p>
    

      <p key="p-1-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `ArrayDeque` }} />
      </p>
    

      <p key="p-1-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `LinkedList` }} />
      </p>
    

      <p key="p-1-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Map — Separate hierarchy</strong>` }} />
      </p>
    

      <p key="p-1-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Stores key-value pairs` }} />
      </p>
    

      <p key="p-1-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap` }} />
      </p>
    

      <p key="p-1-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `TreeMap` }} />
      </p>
    

      <p key="p-1-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `LinkedHashMap` }} />
      </p>
    

      <p key="p-1-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A common interview question is:` }} />
      </p>
    

      <p key="p-1-40" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Why is Map not a child of Collection?</strong>` }} />
      </p>
    

      <p key="p-1-41" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Because a <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Collection</code> represents a group of individual elements, whereas a <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Map</code> represents relationships between keys and values.` }} />
      </p>
    

      <p key="p-1-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

        <div key="code-1-43" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;String&gt; names = new ArrayList&lt;&gt;();

names.add("Amit");
names.add("Rahul");`}</code>
          </pre>
        </div>
      

      <p key="p-1-44" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Here, each element is a name.` }} />
      </p>
    

      <p key="p-1-45" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But:` }} />
      </p>
    

        <div key="code-1-46" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Map&lt;Integer, String&gt; students = new HashMap&lt;&gt;();

students.put(101, "Amit");
students.put(102, "Rahul");`}</code>
          </pre>
        </div>
      

      <p key="p-1-47" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Here, every entry contains a key and a value.` }} />
      </p>
    

        <h4 key="h3-1-48" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1.3 Important collection interfaces</strong>` }} />
        </h4>
      

          <div key="table-1-49" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Interface</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Purpose</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">List</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Ordered elements, duplicates allowed</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Student names</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Set</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Unique elements</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Unique email addresses</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Queue</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Elements waiting to be processed</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Task queue</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Deque</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Insert and remove at both ends</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Sliding window</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Map</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Key-value relationships</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Student ID → Name</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-1-50" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1.4 Collection algorithms</strong>` }} />
        </h4>
      

      <p key="p-1-51" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Collections</code> utility class provides useful algorithms.` }} />
      </p>
    

        <div key="code-1-52" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;

public class Main &#123;

    public static void main(String[] args) &#123;

        List&lt;Integer&gt; numbers =
            new ArrayList&lt;&gt;(Arrays.asList(50, 20, 40, 10, 30));

        Collections.sort(numbers);

        System.out.println(numbers);

        Collections.reverse(numbers);

        System.out.println(numbers);

        Collections.shuffle(numbers);

        System.out.println(numbers);

        System.out.println(Collections.max(numbers));

        System.out.println(Collections.min(numbers));
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-1-53" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Common operations include:` }} />
      </p>
    

        <ul key="ul-1-54" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Collections.sort()</code> — sorts a list.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Collections.reverse()</code> — reverses the order.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Collections.shuffle()</code> — randomly shuffles elements.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Collections.max()</code> — finds the maximum.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Collections.min()</code> — finds the minimum.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Collections.frequency()</code> — counts occurrences.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Collections.binarySearch()</code> — searches a sorted list.` }} /></li>
        </ul>
      

        <h4 key="h3-1-55" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1.5 Iterators and fail-fast behaviour</strong>` }} />
        </h4>
      

      <p key="p-1-56" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An iterator allows you to traverse a collection.` }} />
      </p>
    

        <div key="code-1-57" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;Integer&gt; numbers =
    new ArrayList&lt;&gt;(Arrays.asList(10, 20, 30, 40));

Iterator&lt;Integer&gt; iterator = numbers.iterator();

while (iterator.hasNext()) &#123;

    int value = iterator.next();

    System.out.println(value);
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-1-58" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You can remove elements safely through the iterator:` }} />
      </p>
    

        <div key="code-1-59" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Iterator&lt;Integer&gt; iterator = numbers.iterator();

while (iterator.hasNext()) &#123;

    int value = iterator.next();

    if (value == 20) &#123;
        iterator.remove();
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-1-60" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What happens when you modify an <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code> directly while iterating over it?` }} />
      </p>
    

        <div key="code-1-61" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`for (Integer number : numbers) &#123;
    numbers.remove(number);
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-1-62" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This commonly produces a <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ConcurrentModificationException</code>.` }} />
      </p>
    

      <p key="p-1-63" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This happens because many standard collection iterators are <strong className="font-bold text-stone-900">fail-fast</strong>. They detect structural modifications made outside the iterator and may throw an exception.` }} />
      </p>
    

      <p key="p-1-64" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Fail-fast behaviour is a bug-detection mechanism, not a thread-safety guarantee. It is best-effort, so you must not depend on it for synchronization.` }} />
      </p>
    

      <p key="p-1-65" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">When to use collections:</strong>` }} />
      </p>
    

      <p key="p-1-66" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">List</code> when sequence and positional access matter, <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Set</code> when uniqueness matters, <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Queue</code> when processing order matters, and <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Map</code> when you need to look up values by keys.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 2,
    title: "2. ArrayList Internals",
    summary: "Dynamic resizing mechanics, 50% capacity expansion, element shifting, amortized O(1) appends, and ensureCapacity optimization.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-2-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2. ArrayList Internals</strong>` }} />
        </h3>
      

        <h4 key="h3-2-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2.1 What is ArrayList?</strong>` }} />
        </h4>
      

      <p key="p-2-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code> is a resizable array implementation of the <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">List</code> interface.` }} />
      </p>
    

      <p key="p-2-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Unlike a normal array, its capacity can grow when more elements are added.` }} />
      </p>
    

        <div key="code-2-4" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();

numbers.add(10);
numbers.add(20);
numbers.add(30);

System.out.println(numbers.get(1));`}</code>
          </pre>
        </div>
      

      <p key="p-2-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-2-6" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`20`}</code>
          </pre>
        </div>
      

        <h4 key="h3-2-7" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2.2 How does ArrayList work internally?</strong>` }} />
        </h4>
      

      <p key="p-2-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code> internally maintains:` }} />
      </p>
    

        <ol key="ol-2-9" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `An array that stores references to elements.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">size</code> representing the number of actual elements.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A capacity representing the length of the internal array.` }} /></li>
        </ol>
      

      <p key="p-2-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-2-11" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();

numbers.add(10);
numbers.add(20);
numbers.add(30);`}</code>
          </pre>
        </div>
      

      <p key="p-2-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptually, the internal array might look like this:` }} />
      </p>
    

      <p key="p-2-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Internal array example</strong>` }} />
      </p>
    

        <h3 key="h2-2-14" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10</strong>` }} />
        </h3>
      

      <p key="p-2-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Index 0` }} />
      </p>
    

        <h3 key="h2-2-16" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">20</strong>` }} />
        </h3>
      

      <p key="p-2-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Index 1` }} />
      </p>
    

        <h3 key="h2-2-18" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">30</strong>` }} />
        </h3>
      

      <p key="p-2-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Index 2` }} />
      </p>
    

        <h3 key="h2-2-20" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">null</strong>` }} />
        </h3>
      

      <p key="p-2-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Index 3` }} />
      </p>
    

        <h3 key="h2-2-22" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">null</strong>` }} />
        </h3>
      

      <p key="p-2-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Index 4` }} />
      </p>
    

        <h3 key="h2-2-24" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">null</strong>` }} />
        </h3>
      

      <p key="p-2-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Index 5` }} />
      </p>
    

      <p key="p-2-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Size = 3` }} />
      </p>
    

      <p key="p-2-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Capacity = 6` }} />
      </p>
    

      <p key="p-2-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The diagram is illustrative. The actual capacity depends on how the list was created and grown.` }} />
      </p>
    

      <p key="p-2-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The list contains three elements even though the internal array has room for six.` }} />
      </p>
    

      <p key="p-2-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Size and capacity are different.</strong>` }} />
      </p>
    

        <ul key="ul-2-31" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Size: Number of stored elements.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Capacity: Number of elements the internal array can hold before it must grow.` }} /></li>
        </ul>
      

        <h4 key="h3-2-32" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2.3 How does insertion work?</strong>` }} />
        </h4>
      

      <p key="p-2-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose the internal array has available space.` }} />
      </p>
    

        <div key="code-2-34" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`numbers.add(40);`}</code>
          </pre>
        </div>
      

      <p key="p-2-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The new element is inserted at the next free position.` }} />
      </p>
    

        <div key="code-2-36" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Before:

[10, 20, 30, null, null]

After:

[10, 20, 30, 40, null]`}</code>
          </pre>
        </div>
      

      <p key="p-2-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This normally takes constant amortized time.` }} />
      </p>
    

      <p key="p-2-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What if the array becomes full?` }} />
      </p>
    

        <h4 key="h3-2-39" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2.4 Dynamic resizing</strong>` }} />
        </h4>
      

      <p key="p-2-40" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose the capacity is four and all four positions are occupied.` }} />
      </p>
    

        <div key="code-2-41" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`[10, 20, 30, 40]`}</code>
          </pre>
        </div>
      

      <p key="p-2-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You execute:` }} />
      </p>
    

        <div key="code-2-43" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`numbers.add(50);`}</code>
          </pre>
        </div>
      

      <p key="p-2-44" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The list needs a larger internal array.` }} />
      </p>
    

      <p key="p-2-45" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptually:` }} />
      </p>
    

        <ol key="ol-2-46" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Check whether the current array has enough capacity.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Allocate a larger array.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Copy the existing elements into it.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Add the new element.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Use the new array internally.` }} /></li>
        </ol>
      

      <p key="p-2-47" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Dynamic resizing</strong>` }} />
      </p>
    

      <p key="p-2-48" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Illustrative example` }} />
      </p>
    

      <p key="p-2-49" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Before growth` }} />
      </p>
    

      <p key="p-2-50" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `10` }} />
      </p>
    

      <p key="p-2-51" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `20` }} />
      </p>
    

      <p key="p-2-52" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `30` }} />
      </p>
    

      <p key="p-2-53" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `40` }} />
      </p>
    

      <p key="p-2-54" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `After allocating a larger array` }} />
      </p>
    

      <p key="p-2-55" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `10` }} />
      </p>
    

      <p key="p-2-56" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `20` }} />
      </p>
    

      <p key="p-2-57" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `30` }} />
      </p>
    

      <p key="p-2-58" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `40` }} />
      </p>
    

      <p key="p-2-59" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `50` }} />
      </p>
    

      <p key="p-2-60" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `empty` }} />
      </p>
    

      <p key="p-2-61" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The actual capacity growth strategy is an implementation detail. Common OpenJDK ArrayList implementations grow the capacity by approximately 50% when they need to expand it.` }} />
      </p>
    

      <p key="p-2-62" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Resizing requires copying existing references, so one insertion can take <span className="font-mono text-orange-300 font-semibold">O(n)</span> time.` }} />
      </p>
    

      <p key="p-2-63" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `However, resizing does not happen on every insertion.` }} />
      </p>
    

      <p key="p-2-64" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Over many insertions, the average cost per insertion remains <strong className="font-bold text-stone-900">amortized</strong> <span className="font-mono text-orange-300 font-semibold">O(1)</span>.` }} />
      </p>
    

        <h4 key="h3-2-65" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2.5 Inserting in the middle</strong>` }} />
        </h4>
      

      <p key="p-2-66" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-2-67" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;Integer&gt; numbers =
    new ArrayList&lt;&gt;(Arrays.asList(10, 20, 30, 40));

numbers.add(1, 15);`}</code>
          </pre>
        </div>
      

      <p key="p-2-68" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The element <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">15</code> is inserted at index 1.` }} />
      </p>
    

      <p key="p-2-69" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The existing elements must shift right.` }} />
      </p>
    

        <div key="code-2-70" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Before:

[10, 20, 30, 40]

After:

[10, 15, 20, 30, 40]`}</code>
          </pre>
        </div>
      

      <p key="p-2-71" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This takes <span className="font-mono text-orange-300 font-semibold">O(n)</span> time in the worst case.` }} />
      </p>
    

        <h4 key="h3-2-72" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2.6 Removing elements</strong>` }} />
        </h4>
      

        <div key="code-2-73" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`numbers.remove(1);`}</code>
          </pre>
        </div>
      

      <p key="p-2-74" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The element at index 1 is removed. Elements after it shift left.` }} />
      </p>
    

      <p key="p-2-75" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This generally takes <span className="font-mono text-orange-300 font-semibold">O(n)</span>.` }} />
      </p>
    

        <h4 key="h3-2-76" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2.7 ArrayList time complexity</strong>` }} />
        </h4>
      

          <div key="table-2-77" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Operation</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">get(index)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">set(index, value)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">add(value)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Amortized <span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">add(index, value)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">remove(index)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">contains(value)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Iteration</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-2-78" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2.8 ArrayList optimization</strong>` }} />
        </h4>
      

      <p key="p-2-79" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When you know approximately how many elements you will store, reserve capacity in advance.` }} />
      </p>
    

        <div key="code-2-80" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();

numbers.ensureCapacity(100000);`}</code>
          </pre>
        </div>
      

      <p key="p-2-81" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This can reduce repeated resizing.` }} />
      </p>
    

      <p key="p-2-82" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You can also construct the list with an initial capacity:` }} />
      </p>
    

        <div key="code-2-83" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`ArrayList&lt;Integer&gt; numbers =
    new ArrayList&lt;&gt;(100000);`}</code>
          </pre>
        </div>
      

      <p key="p-2-84" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Notice that this sets capacity; it does not create 100,000 actual elements.` }} />
      </p>
    

        <h4 key="h3-2-85" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2.9 When should you use ArrayList?</strong>` }} />
        </h4>
      

      <p key="p-2-86" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code> when:` }} />
      </p>
    

        <ul key="ul-2-87" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `You frequently access elements by index.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `You mostly add elements at the end.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `You iterate over elements frequently.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `You do not frequently insert or delete elements near the beginning.` }} /></li>
        </ul>
      

      <p key="p-2-88" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It is a strong default choice for general-purpose lists.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 3,
    title: "3. LinkedList Internals",
    summary: "Doubly linked list node structure, O(1) endpoint insertion vs O(N) indexed access, and CPU cache locality vs ArrayList.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-3-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3. LinkedList Internals</strong>` }} />
        </h3>
      

        <h4 key="h3-3-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3.1 What is LinkedList?</strong>` }} />
        </h4>
      

      <p key="p-3-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">LinkedList</code> is a doubly linked list.` }} />
      </p>
    

      <p key="p-3-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Unlike <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code>, it does not store all elements in one continuous array.` }} />
      </p>
    

      <p key="p-3-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead, every element is stored inside a separate node.` }} />
      </p>
    

      <p key="p-3-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Each node contains:` }} />
      </p>
    

        <ul key="ul-3-6" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `The stored element.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A reference to the previous node.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A reference to the next node.` }} /></li>
        </ul>
      

        <h4 key="h3-3-7" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3.2 Internal node structure</strong>` }} />
        </h4>
      

      <p key="p-3-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptually, a node looks like this:` }} />
      </p>
    

        <div key="code-3-9" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`class Node&lt;E&gt; &#123;

    E item;

    Node&lt;E&gt; previous;

    Node&lt;E&gt; next;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-3-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is an educational representation of the underlying structure.` }} />
      </p>
    

        <h4 key="h3-3-11" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3.3 How does a LinkedList work?</strong>` }} />
        </h4>
      

      <p key="p-3-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-3-13" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`LinkedList&lt;Integer&gt; numbers =
    new LinkedList&lt;&gt;();

numbers.add(10);
numbers.add(20);
numbers.add(30);`}</code>
          </pre>
        </div>
      

      <p key="p-3-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Its nodes are connected:` }} />
      </p>
    

      <p key="p-3-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Doubly linked list</strong>` }} />
      </p>
    

        <h2 key="h1-3-16" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10</strong>` }} />
        </h2>
      

      <p key="p-3-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Node 1` }} />
      </p>
    

        <h2 key="h1-3-18" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">20</strong>` }} />
        </h2>
      

      <p key="p-3-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Node 2` }} />
      </p>
    

        <h2 key="h1-3-20" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">30</strong>` }} />
        </h2>
      

      <p key="p-3-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Node 3` }} />
      </p>
    

      <p key="p-3-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Previous references` }} />
      </p>
    

      <p key="p-3-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Next references` }} />
      </p>
    

      <p key="p-3-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Each node links to both its previous and next node. The list also maintains references to its first and last nodes.` }} />
      </p>
    

        <h4 key="h3-3-25" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3.4 Insertion at the beginning</strong>` }} />
        </h4>
      

        <div key="code-3-26" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`numbers.addFirst(5);`}</code>
          </pre>
        </div>
      

      <p key="p-3-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptually:` }} />
      </p>
    

        <div key="code-3-28" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Before:

10 ⇄ 20 ⇄ 30

After:

5 ⇄ 10 ⇄ 20 ⇄ 30`}</code>
          </pre>
        </div>
      

      <p key="p-3-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Only a few references need to change.` }} />
      </p>
    

      <p key="p-3-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Therefore, adding at the beginning takes <span className="font-mono text-orange-300 font-semibold">O(1)</span>.` }} />
      </p>
    

        <h4 key="h3-3-31" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3.5 Insertion at the end</strong>` }} />
        </h4>
      

        <div key="code-3-32" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`numbers.addLast(40);`}</code>
          </pre>
        </div>
      

      <p key="p-3-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">LinkedList</code> maintains a reference to its final node, so appending also takes <span className="font-mono text-orange-300 font-semibold">O(1)</span>.` }} />
      </p>
    

        <h4 key="h3-3-34" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3.6 Insertion in the middle</strong>` }} />
        </h4>
      

      <p key="p-3-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose you want to insert <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">15</code> between <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">10</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">20</code>.` }} />
      </p>
    

      <p key="p-3-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The list first needs to find the appropriate position.` }} />
      </p>
    

      <p key="p-3-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Finding an element by index requires traversal.` }} />
      </p>
    

      <p key="p-3-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Only after finding the relevant node can its links be changed in constant time.` }} />
      </p>
    

      <p key="p-3-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Therefore:` }} />
      </p>
    

        <ul key="ul-3-40" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Finding the position: <span className="font-mono text-orange-300 font-semibold">O(n)</span>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Updating references: <span className="font-mono text-orange-300 font-semibold">O(1)</span>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Overall indexed insertion: <span className="font-mono text-orange-300 font-semibold">O(n)</span>.` }} /></li>
        </ul>
      

      <p key="p-3-41" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An insertion using an already-positioned <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ListIterator</code> can be <span className="font-mono text-orange-300 font-semibold">O(1)</span>, because the list does not need to search again.` }} />
      </p>
    

        <h4 key="h3-3-42" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3.7 LinkedList time complexity</strong>` }} />
        </h4>
      

          <div key="table-3-43" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Operation</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Add at beginning</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Add at end</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Remove first</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Remove last</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Get by index</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Search by value</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Insert at index</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Remove at index</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-3-44" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3.8 ArrayList vs LinkedList</strong>` }} />
        </h4>
      

          <div key="table-3-45" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Feature</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ArrayList</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">LinkedList</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Internal structure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Dynamic array</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Doubly linked nodes</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Index access</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Add at end</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Amortized <span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Add at beginning</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Remove at beginning</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Memory overhead</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Usually lower</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Usually higher</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Cache locality</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Generally better</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Generally worse</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-3-46" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Why can ArrayList outperform LinkedList?</strong>` }} />
        </h4>
      

      <p key="p-3-47" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is an important performance concept.` }} />
      </p>
    

      <p key="p-3-48" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code> stores references in a compact array. When traversing it, the processor can often access nearby memory efficiently.` }} />
      </p>
    

      <p key="p-3-49" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">LinkedList</code> stores nodes as separate objects. The next node may be located somewhere else in memory.` }} />
      </p>
    

      <p key="p-3-50" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This creates additional pointer chasing and can lead to cache misses.` }} />
      </p>
    

      <p key="p-3-51" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Therefore, even when a linked list offers <span className="font-mono text-orange-300 font-semibold">O(1)</span> insertion at a known position, it may still perform worse in real applications.` }} />
      </p>
    

      <p key="p-3-52" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Practical rule:</strong> Choose <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code> by default. Use <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">LinkedList</code> when its end-insertion/removal behaviour or list-iterator operations provide a genuine advantage.` }} />
      </p>
    

      <p key="p-3-53" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Also consider <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayDeque</code> for queue and stack operations. It is usually a better choice than <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">LinkedList</code> for those purposes.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 4,
    title: "4. HashMap Internals",
    summary: "Hash code bit-spreading, power-of-two table indexing, separate chaining, treeification at 8 entries, 0.75 load factor, and equals/hashCode contracts.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-4-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4. HashMap Internals</strong>` }} />
        </h3>
      

      <p key="p-4-1" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is one of the most important Java topics for interviews and real development.` }} />
      </p>
    

        <h4 key="h3-4-2" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.1 What is HashMap?</strong>` }} />
        </h4>
      

      <p key="p-4-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">HashMap</code> stores data as key-value pairs.` }} />
      </p>
    

        <div key="code-4-4" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Map&lt;Integer, String&gt; students = new HashMap&lt;&gt;();

students.put(101, "Amit");
students.put(102, "Rahul");
students.put(103, "Priya");

System.out.println(students.get(102));`}</code>
          </pre>
        </div>
      

      <p key="p-4-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-4-6" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Rahul`}</code>
          </pre>
        </div>
      

      <p key="p-4-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">HashMap</code> provides efficient key-based insertion, retrieval, and deletion on average.` }} />
      </p>
    

        <h4 key="h3-4-8" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.2 How does HashMap work internally?</strong>` }} />
        </h4>
      

      <p key="p-4-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A HashMap uses a hash table.` }} />
      </p>
    

      <p key="p-4-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The basic process is:` }} />
      </p>
    

        <ol key="ol-4-11" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Receive a key.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Calculate the key's hash code.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Transform the hash into a bucket index.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Find the corresponding bucket.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Search that bucket if it contains multiple entries.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Insert or retrieve the relevant value.` }} /></li>
        </ol>
      

      <p key="p-4-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-4-13" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Map&lt;String, Integer&gt; marks = new HashMap&lt;&gt;();

marks.put("Amit", 90);`}</code>
          </pre>
        </div>
      

      <p key="p-4-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptually:` }} />
      </p>
    

        <div key="code-4-15" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Key: "Amit"
       |
       v
hashCode()
       |
       v
Hash calculation
       |
       v
Bucket index
       |
       v
Store key-value entry`}</code>
          </pre>
        </div>
      

        <h4 key="h3-4-16" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.3 What is a hash function?</strong>` }} />
        </h4>
      

      <p key="p-4-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A hash function converts a key into an integer-like hash value.` }} />
      </p>
    

      <p key="p-4-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java objects provide:` }} />
      </p>
    

        <div key="code-4-19" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`key.hashCode();`}</code>
          </pre>
        </div>
      

      <p key="p-4-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For strings, Java calculates a hash based on the characters.` }} />
      </p>
    

      <p key="p-4-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

        <div key="code-4-22" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`String name = "Amit";

System.out.println(name.hashCode());`}</code>
          </pre>
        </div>
      

      <p key="p-4-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A HashMap uses the hash value to decide where an entry should be placed.` }} />
      </p>
    

      <p key="p-4-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The hash code is not necessarily unique.` }} />
      </p>
    

      <p key="p-4-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two different keys can produce the same hash code.` }} />
      </p>
    

      <p key="p-4-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This leads to collisions.` }} />
      </p>
    

        <h4 key="h3-4-27" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.4 How does HashMap calculate a bucket index?</strong>` }} />
        </h4>
      

      <p key="p-4-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `In common OpenJDK implementations, HashMap first spreads the hash bits:` }} />
      </p>
    

        <div key="code-4-29" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`int hash = key.hashCode();

hash = hash ^ (hash &gt;&gt;&gt; 16);`}</code>
          </pre>
        </div>
      

      <p key="p-4-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It then calculates the bucket index using:` }} />
      </p>
    

        <div key="code-4-31" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`int index = (capacity - 1) &amp; hash;`}</code>
          </pre>
        </div>
      

      <p key="p-4-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The capacity is maintained as a power of two in this implementation.` }} />
      </p>
    

      <p key="p-4-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The bit operation helps distribute hash values across the available buckets.` }} />
      </p>
    

      <p key="p-4-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You generally do not need to implement this calculation yourself, but you should understand its purpose.` }} />
      </p>
    

        <h4 key="h3-4-35" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.5 What is a hash collision?</strong>` }} />
        </h4>
      

      <p key="p-4-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A collision occurs when different keys map to the same bucket.` }} />
      </p>
    

      <p key="p-4-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

        <div key="code-4-38" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`HashMap buckets:

Bucket 0 → Entry
Bucket 1 → Entry → Entry
Bucket 2 → Empty
Bucket 3 → Entry`}</code>
          </pre>
        </div>
      

      <p key="p-4-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two entries in Bucket 1 collided.` }} />
      </p>
    

      <p key="p-4-40" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap must handle this situation correctly.` }} />
      </p>
    

        <h4 key="h3-4-41" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.6 Collision handling: Separate chaining</strong>` }} />
        </h4>
      

      <p key="p-4-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap stores entries in buckets.` }} />
      </p>
    

      <p key="p-4-43" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When multiple entries occupy the same bucket, they can be connected as nodes.` }} />
      </p>
    

      <p key="p-4-44" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptually:` }} />
      </p>
    

      <p key="p-4-45" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Hash collisions</strong>` }} />
      </p>
    

      <p key="p-4-46" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Bucket 0</strong>` }} />
      </p>
    

      <p key="p-4-47" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A → null` }} />
      </p>
    

      <p key="p-4-48" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Bucket 1</strong>` }} />
      </p>
    

      <p key="p-4-49" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `B → C → D → null` }} />
      </p>
    

      <p key="p-4-50" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Bucket 2</strong>` }} />
      </p>
    

      <p key="p-4-51" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Empty` }} />
      </p>
    

      <p key="p-4-52" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `To locate a key, HashMap searches the bucket and checks whether the key matches.` }} />
      </p>
    

      <p key="p-4-53" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It uses hash values and equality comparisons, including <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">equals()</code>.` }} />
      </p>
    

        <h4 key="h3-4-54" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.7 Treeification: When does a bucket become a tree?</strong>` }} />
        </h4>
      

      <p key="p-4-55" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `In modern OpenJDK HashMap implementations, a heavily populated bucket can be converted from a linked structure into a balanced tree.` }} />
      </p>
    

      <p key="p-4-56" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is called <strong className="font-bold text-stone-900">treeification</strong>.` }} />
      </p>
    

      <p key="p-4-57" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Why?` }} />
      </p>
    

      <p key="p-4-58" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Searching through a long linked chain can require <span className="font-mono text-orange-300 font-semibold">O(n)</span> time.` }} />
      </p>
    

      <p key="p-4-59" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A balanced tree can reduce that search to approximately <span className="font-mono text-orange-300 font-semibold">O(log n)</span>.` }} />
      </p>
    

      <p key="p-4-60" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Common OpenJDK implementation thresholds include:` }} />
      </p>
    

        <ul key="ul-4-61" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `A treeification threshold of 8 entries.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A minimum table capacity of 64 before treeification is preferred.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A bucket may be converted back to a linked structure when it becomes sufficiently small.` }} /></li>
        </ul>
      

      <p key="p-4-62" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These are implementation details, not guarantees of the <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Map</code> interface.` }} />
      </p>
    

        <h4 key="h3-4-63" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.8 HashMap resizing and load factor</strong>` }} />
        </h4>
      

      <p key="p-4-64" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap maintains a load factor.` }} />
      </p>
    

      <p key="p-4-65" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The load factor determines how full the table can become before resizing is triggered.` }} />
      </p>
    

      <p key="p-4-66" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The default load factor is:` }} />
      </p>
    

      <p key="p-4-67" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<span className="font-mono text-orange-300 font-semibold"> 0.75 </span>` }} />
      </p>
    

      <p key="p-4-68" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The threshold is approximately:` }} />
      </p>
    

      <p key="p-4-69" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<span className="font-mono text-orange-300 font-semibold"> text&#123;Threshold&#125;=text&#123;Capacity&#125;&times;text&#123;Load Factor&#125; </span>` }} />
      </p>
    

      <p key="p-4-70" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

      <p key="p-4-71" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<span className="font-mono text-orange-300 font-semibold"> 16&times;0.75=12 </span>` }} />
      </p>
    

      <p key="p-4-72" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When the size exceeds the threshold, HashMap resizes the table.` }} />
      </p>
    

      <p key="p-4-73" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This involves allocating a larger table and redistributing entries.` }} />
      </p>
    

      <p key="p-4-74" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Resizing is expensive, but it does not happen after every insertion.` }} />
      </p>
    

        <h4 key="h3-4-75" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.9 Why are hashCode() and equals() important?</strong>` }} />
        </h4>
      

      <p key="p-4-76" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider a custom class:` }} />
      </p>
    

        <div key="code-4-77" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`class Student &#123;

    int id;

    Student(int id) &#123;
        this.id = id;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-4-78" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Now:` }} />
      </p>
    

        <div key="code-4-79" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Student s1 = new Student(101);
Student s2 = new Student(101);

Map&lt;Student, String&gt; students = new HashMap&lt;&gt;();

students.put(s1, "Amit");

System.out.println(students.get(s2));`}</code>
          </pre>
        </div>
      

      <p key="p-4-80" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You might expect <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">"Amit"</code> because both students have the same ID.` }} />
      </p>
    

      <p key="p-4-81" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But the default implementation of <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">equals()</code> checks object identity, so <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">s1</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">s2</code> are not equal.` }} />
      </p>
    

      <p key="p-4-82" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `We need to define equality.` }} />
      </p>
    

        <div key="code-4-83" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.Objects;

class Student &#123;

    int id;

    Student(int id) &#123;
        this.id = id;
    &#125;

    @Override
    public boolean equals(Object obj) &#123;

        if (this == obj) &#123;
            return true;
        &#125;

        if (!(obj instanceof Student other)) &#123;
            return false;
        &#125;

        return id == other.id;
    &#125;

    @Override
    public int hashCode() &#123;
        return Objects.hash(id);
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-4-84" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Now HashMap can correctly recognize logically equivalent students.` }} />
      </p>
    

      <p key="p-4-85" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">The contract:</strong>` }} />
      </p>
    

      <p key="p-4-86" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `If two objects are equal according to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">equals()</code>, they must return the same <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">hashCode()</code>.` }} />
      </p>
    

      <p key="p-4-87" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The reverse is not required: two unequal objects can have the same hash code.` }} />
      </p>
    

        <h4 key="h3-4-88" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.10 Why should HashMap keys generally be immutable?</strong>` }} />
        </h4>
      

      <p key="p-4-89" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-4-90" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`class Student &#123;

    int id;

    Student(int id) &#123;
        this.id = id;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-4-91" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">hashCode()</code> depends on <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">id</code>.` }} />
      </p>
    

      <p key="p-4-92" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You insert a student with ID <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">101</code>, then change its ID to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">202</code>.` }} />
      </p>
    

      <p key="p-4-93" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The object may now produce a different hash code.` }} />
      </p>
    

      <p key="p-4-94" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `However, the entry is still located in the bucket selected by the original hash calculation.` }} />
      </p>
    

      <p key="p-4-95" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A lookup using the modified key may fail.` }} />
      </p>
    

      <p key="p-4-96" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Therefore, use stable, immutable fields for key equality and hashing.` }} />
      </p>
    

        <h4 key="h3-4-97" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.11 HashMap complexity</strong>` }} />
        </h4>
      

          <div key="table-4-98" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Operation</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Average</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Worst-case idea</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">put()</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Can degrade</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">get()</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span> in adverse cases</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">remove()</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Can degrade</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">containsKey()</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Can degrade</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Iteration</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n+c)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Depends on table size and entries</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-4-99" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Here, <span className="font-mono text-orange-300 font-semibold">c</span> represents table capacity.` }} />
      </p>
    

      <p key="p-4-100" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Tree bins can improve collision-heavy bucket operations, but you should not treat every HashMap operation as guaranteed <span className="font-mono text-orange-300 font-semibold">O(1)</span>.` }} />
      </p>
    

        <h4 key="h3-4-101" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4.12 When should you use HashMap?</strong>` }} />
        </h4>
      

      <p key="p-4-102" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use HashMap when you need:` }} />
      </p>
    

        <ul key="ul-4-103" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Fast key-based lookup.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Frequency counting.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Caching.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Indexing records by IDs.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Mapping one object to another.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Counting occurrences of elements.` }} /></li>
        </ul>
      

      <p key="p-4-104" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example: Frequency counting.` }} />
      </p>
    

        <div key="code-4-105" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;

public class Main &#123;

    public static void main(String[] args) &#123;

        int[] numbers = &#123;1, 2, 2, 3, 3, 3&#125;;

        Map&lt;Integer, Integer&gt; frequency = new HashMap&lt;&gt;();

        for (int number : numbers) &#123;

            frequency.put(
                number,
                frequency.getOrDefault(number, 0) + 1
            );
        &#125;

        System.out.println(frequency);
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-4-106" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-4-107" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`&#123;1=1, 2=2, 3=3&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-4-108" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An alternative is:` }} />
      </p>
    

        <div key="code-4-109" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`frequency.merge(number, 1, Integer::sum);`}</code>
          </pre>
        </div>
      

      <p key="p-4-110" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is useful in production code because it expresses the frequency update directly.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 5,
    title: "5. TreeMap and TreeSet",
    summary: "Red-Black Tree invariants, logarithmic guarantees O(log N), NavigableMap methods (floor, ceiling, lower, higher), and TreeSet comparison consistency.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-5-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5. TreeMap and TreeSet</strong>` }} />
        </h3>
      

        <h4 key="h3-5-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5.1 What is TreeMap?</strong>` }} />
        </h4>
      

      <p key="p-5-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">TreeMap</code> implements the <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">NavigableMap</code> interface.` }} />
      </p>
    

      <p key="p-5-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It stores keys in sorted order.` }} />
      </p>
    

      <p key="p-5-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Unlike HashMap, it does not use a hash table. Common Java implementations use a self-balancing red-black tree.` }} />
      </p>
    

        <div key="code-5-5" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Map&lt;Integer, String&gt; students = new TreeMap&lt;&gt;();

students.put(103, "Priya");
students.put(101, "Amit");
students.put(102, "Rahul");

System.out.println(students);`}</code>
          </pre>
        </div>
      

      <p key="p-5-6" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-5-7" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`&#123;101=Amit, 102=Rahul, 103=Priya&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-5-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The keys are sorted naturally.` }} />
      </p>
    

        <h4 key="h3-5-9" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5.2 What is a Red-Black Tree?</strong>` }} />
        </h4>
      

      <p key="p-5-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A red-black tree is a self-balancing binary search tree.` }} />
      </p>
    

      <p key="p-5-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It maintains balancing rules so that the tree does not become excessively tall.` }} />
      </p>
    

      <p key="p-5-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Important properties include:` }} />
      </p>
    

        <ol key="ol-5-13" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Every node is red or black.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `The root is black.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Red nodes cannot have red children.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Every path from a node to its descendant null leaves has the same number of black nodes.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `The tree uses rotations and recoloring to restore its properties after updates.` }} /></li>
        </ol>
      

      <p key="p-5-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These rules keep the tree height logarithmic relative to the number of elements.` }} />
      </p>
    

        <h4 key="h3-5-15" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5.3 TreeMap operations</strong>` }} />
        </h4>
      

        <div key="code-5-16" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`TreeMap&lt;Integer, String&gt; map = new TreeMap&lt;&gt;();

map.put(10, "A");
map.put(30, "B");
map.put(20, "C");

System.out.println(map.firstKey());

System.out.println(map.lastKey());

System.out.println(map.lowerKey(20));

System.out.println(map.higherKey(20));

System.out.println(map.floorKey(25));

System.out.println(map.ceilingKey(25));`}</code>
          </pre>
        </div>
      

      <p key="p-5-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-5-18" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`10
30
10
30
20
30`}</code>
          </pre>
        </div>
      

      <p key="p-5-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Understand these navigation methods:` }} />
      </p>
    

          <div key="table-5-20" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Method</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">firstKey()</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Smallest key</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">lastKey()</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Largest key</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">lowerKey(k)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Greatest key strictly smaller than <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">higherKey(k)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Smallest key strictly greater than <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">floorKey(k)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Greatest key less than or equal to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ceilingKey(k)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Smallest key greater than or equal to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code></td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-5-21" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5.4 TreeMap complexity</strong>` }} />
        </h4>
      

          <div key="table-5-22" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Operation</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Insert</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Search</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Remove</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">First/last key</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span> in common implementations</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Iteration</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-5-23" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5.5 What is TreeSet?</strong>` }} />
        </h4>
      

      <p key="p-5-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">TreeSet</code> stores unique elements in sorted order.` }} />
      </p>
    

        <div key="code-5-25" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`TreeSet&lt;Integer&gt; numbers = new TreeSet&lt;&gt;();

numbers.add(50);
numbers.add(10);
numbers.add(30);
numbers.add(10);

System.out.println(numbers);`}</code>
          </pre>
        </div>
      

      <p key="p-5-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-5-27" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`[10, 30, 50]`}</code>
          </pre>
        </div>
      

      <p key="p-5-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Internally, a common implementation uses a <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">TreeMap</code> to store the elements as keys.` }} />
      </p>
    

        <h4 key="h3-5-29" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5.6 Important comparison: HashSet vs TreeSet</strong>` }} />
        </h4>
      

          <div key="table-5-30" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Feature</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">HashSet</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">TreeSet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Data structure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Hash table</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Red-black tree</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Duplicates</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Not allowed</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Not allowed</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Ordering</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">No guaranteed order</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Sorted order</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Add</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Average <span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Search</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Average <span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Remove</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Average <span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-5-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">TreeSet</code> determines uniqueness using comparison: if the comparator returns zero, the elements are treated as the same set element.` }} />
      </p>
    

      <p key="p-5-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This means the comparator should be consistent with <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">equals()</code> when you want standard <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Set</code> equality semantics.` }} />
      </p>
    

      <p key="p-5-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">When to use:</strong>` }} />
      </p>
    

        <ul key="ul-5-34" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `HashSet: When you need uniqueness and fast membership checks.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `TreeSet: When you need uniqueness and sorted navigation.` }} /></li>
        </ul>
      
      </div>
    )
  },
  {
    id: 6,
    title: "6. PriorityQueue Implementation",
    summary: "Binary min-heap complete tree representation, sift-up and sift-down algorithms in O(log N), max-heap reverse comparators, and Top-K extraction.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-6-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6. PriorityQueue Implementation</strong>` }} />
        </h3>
      

        <h4 key="h3-6-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6.1 What is PriorityQueue?</strong>` }} />
        </h4>
      

      <p key="p-6-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A priority queue processes elements according to priority rather than simply the order in which they were inserted.` }} />
      </p>
    

      <p key="p-6-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java's <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">PriorityQueue</code> is commonly implemented using a binary heap.` }} />
      </p>
    

      <p key="p-6-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `By default, it is a min-heap.` }} />
      </p>
    

      <p key="p-6-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This means the smallest element has the highest priority and is at the root.` }} />
      </p>
    

        <div key="code-6-6" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`PriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;();

pq.add(40);
pq.add(10);
pq.add(30);
pq.add(20);

System.out.println(pq.peek());`}</code>
          </pre>
        </div>
      

      <p key="p-6-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-6-8" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`10`}</code>
          </pre>
        </div>
      

        <h4 key="h3-6-9" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6.2 What is a Binary Heap?</strong>` }} />
        </h4>
      

      <p key="p-6-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A binary heap is a complete binary tree.` }} />
      </p>
    

      <p key="p-6-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A min-heap follows this property:` }} />
      </p>
    

      <p key="p-6-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<span className="font-mono text-orange-300 font-semibold"> Parent &le; Children </span>` }} />
      </p>
    

      <p key="p-6-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Every parent is smaller than or equal to its children.` }} />
      </p>
    

      <p key="p-6-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

      <p key="p-6-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Min-heap</strong>` }} />
      </p>
    

      <p key="p-6-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The smallest item is at the root. Every parent is no greater than its children.` }} />
      </p>
    

        <h4 key="h3-6-17" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6.3 How does insertion work?</strong>` }} />
        </h4>
      

      <p key="p-6-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose you insert <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">5</code> into a heap:` }} />
      </p>
    

        <div key="code-6-19" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Before:

       10
      /  \
    20    30`}</code>
          </pre>
        </div>
      

      <p key="p-6-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The new item is initially placed at the next available leaf position.` }} />
      </p>
    

        <div key="code-6-21" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`       10
      /  \
    20    30
   /
  5`}</code>
          </pre>
        </div>
      

      <p key="p-6-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The heap property is violated because <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">5</code> is smaller than its parent.` }} />
      </p>
    

      <p key="p-6-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The heap performs <strong className="font-bold text-stone-900">heapify-up</strong> (also called sift-up).` }} />
      </p>
    

      <p key="p-6-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It swaps <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">5</code> with <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">20</code>, then with <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">10</code>.` }} />
      </p>
    

        <div key="code-6-25" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`       5
      / \
    10   30
   /
  20`}</code>
          </pre>
        </div>
      

      <p key="p-6-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The heap is now valid.` }} />
      </p>
    

      <p key="p-6-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This takes <span className="font-mono text-orange-300 font-semibold">O(log n)</span>.` }} />
      </p>
    

        <h4 key="h3-6-28" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6.4 How does removal work?</strong>` }} />
        </h4>
      

      <p key="p-6-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When you remove the minimum element:` }} />
      </p>
    

        <div key="code-6-30" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`pq.poll();`}</code>
          </pre>
        </div>
      

      <p key="p-6-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The root is removed.` }} />
      </p>
    

      <p key="p-6-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The final element is moved to the root, and the heap performs heapify-down to restore the ordering.` }} />
      </p>
    

      <p key="p-6-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This also takes <span className="font-mono text-orange-300 font-semibold">O(log n)</span>.` }} />
      </p>
    

        <h4 key="h3-6-34" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6.5 PriorityQueue complexity</strong>` }} />
        </h4>
      

          <div key="table-6-35" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Operation</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">peek()</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">offer()</code> / <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">add()</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">poll()</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">remove(Object)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">contains(Object)</code></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-6-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Important: Iterating over a PriorityQueue does <strong className="font-bold text-stone-900">not</strong> guarantee sorted order. Only the head element has the priority guarantee.` }} />
      </p>
    

      <p key="p-6-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `To process all elements in priority order:` }} />
      </p>
    

        <div key="code-6-38" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`while (!pq.isEmpty()) &#123;
    System.out.println(pq.poll());
&#125;`}</code>
          </pre>
        </div>
      

        <h4 key="h3-6-39" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6.6 Creating a max-heap</strong>` }} />
        </h4>
      

      <p key="p-6-40" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use a reverse comparator:` }} />
      </p>
    

        <div key="code-6-41" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`PriorityQueue&lt;Integer&gt; maxHeap =
    new PriorityQueue&lt;&gt;(Collections.reverseOrder());

maxHeap.add(10);
maxHeap.add(50);
maxHeap.add(20);

System.out.println(maxHeap.poll());`}</code>
          </pre>
        </div>
      

      <p key="p-6-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-6-43" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`50`}</code>
          </pre>
        </div>
      

        <h4 key="h3-6-44" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6.7 Where is PriorityQueue used?</strong>` }} />
        </h4>
      

        <ul key="ul-6-45" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Finding the smallest or largest element.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Top-K problems.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Scheduling tasks by priority.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Dijkstra's shortest-path algorithm.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Merging K sorted lists.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Event-driven simulations.` }} /></li>
        </ul>
      
      </div>
    )
  },
  {
    id: 7,
    title: "7. Concurrent Collections Introduction",
    summary: "Thread-safety in collections, ConcurrentHashMap bucket-level locking & CAS, CopyOnWriteArrayList, and BlockingQueue for producer-consumer pipelines.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-7-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">7. Concurrent Collections Introduction</strong>` }} />
        </h3>
      

        <h4 key="h3-7-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">7.1 What is a concurrent collection?</strong>` }} />
        </h4>
      

      <p key="p-7-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A concurrent collection is designed to support access from multiple threads safely.` }} />
      </p>
    

      <p key="p-7-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider a shared <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code>:` }} />
      </p>
    

        <div key="code-7-4" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();`}</code>
          </pre>
        </div>
      

      <p key="p-7-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Now imagine that two threads modify it simultaneously.` }} />
      </p>
    

      <p key="p-7-6" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Both threads might try to change its internal state at the same time.` }} />
      </p>
    

      <p key="p-7-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This can cause inconsistent behaviour, lost updates, or other concurrency problems.` }} />
      </p>
    

      <p key="p-7-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Regular collections such as <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">HashMap</code>, and <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">HashSet</code> are not inherently thread-safe.` }} />
      </p>
    

        <h4 key="h3-7-9" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">7.2 ConcurrentHashMap</strong>` }} />
        </h4>
      

      <p key="p-7-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ConcurrentHashMap</code> is designed for concurrent access.` }} />
      </p>
    

        <div key="code-7-11" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`ConcurrentHashMap&lt;Integer, String&gt; map =
    new ConcurrentHashMap&lt;&gt;();

map.put(101, "Amit");
map.put(102, "Rahul");`}</code>
          </pre>
        </div>
      

      <p key="p-7-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Multiple threads can access and update it without requiring you to synchronize every operation manually.` }} />
      </p>
    

      <p key="p-7-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Modern OpenJDK implementations use techniques such as:` }} />
      </p>
    

        <ul key="ul-7-14" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Compare-and-set (CAS).` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Fine-grained synchronization.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Volatile memory access.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Coordination at the bucket level.` }} /></li>
        </ul>
      

      <p key="p-7-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It is not simply a single globally synchronized HashMap.` }} />
      </p>
    

      <p key="p-7-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

        <div key="code-7-17" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.concurrent.*;

public class Main &#123;

    public static void main(String[] args) &#123;

        ConcurrentHashMap&lt;String, Integer&gt; counter =
            new ConcurrentHashMap&lt;&gt;();

        counter.put("visits", 0);

        counter.merge("visits", 1, Integer::sum);

        System.out.println(counter.get("visits"));
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

        <h4 key="h3-7-18" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">7.3 Concurrent collection types</strong>` }} />
        </h4>
      

          <div key="table-7-19" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Collection</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ConcurrentHashMap</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Concurrent key-value access</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">CopyOnWriteArrayList</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Read-heavy lists with infrequent writes</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">CopyOnWriteArraySet</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Read-heavy sets</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ConcurrentLinkedQueue</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Non-blocking concurrent queue</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">BlockingQueue</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Producer-consumer coordination</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ConcurrentSkipListMap</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Concurrent sorted map</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ConcurrentSkipListSet</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Concurrent sorted set</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-7-20" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">7.4 CopyOnWriteArrayList</strong>` }} />
        </h4>
      

      <p key="p-7-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `CopyOnWriteArrayList is useful when reads are frequent and modifications are relatively rare.` }} />
      </p>
    

      <p key="p-7-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Its approach is:` }} />
      </p>
    

        <ol key="ol-7-23" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `A reader accesses the current array.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A writer creates a new copy of the array.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `The writer modifies the new array.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `The new array becomes the current one.` }} /></li>
        </ol>
      

      <p key="p-7-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This makes reads efficient but writes expensive.` }} />
      </p>
    

        <div key="code-7-25" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`CopyOnWriteArrayList&lt;String&gt; names =
    new CopyOnWriteArrayList&lt;&gt;();

names.add("Amit");
names.add("Rahul");`}</code>
          </pre>
        </div>
      

        <h4 key="h3-7-26" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">7.5 BlockingQueue</strong>` }} />
        </h4>
      

      <p key="p-7-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `BlockingQueue is commonly used in producer-consumer systems.` }} />
      </p>
    

      <p key="p-7-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A producer creates tasks and places them into a queue. A consumer removes and processes them.` }} />
      </p>
    

        <div key="code-7-29" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`BlockingQueue&lt;String&gt; tasks =
    new ArrayBlockingQueue&lt;&gt;(5);`}</code>
          </pre>
        </div>
      

      <p key="p-7-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The queue has a maximum capacity of five.` }} />
      </p>
    

      <p key="p-7-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A producer can wait when the queue is full, and a consumer can wait when the queue is empty.` }} />
      </p>
    

        <h4 key="h3-7-32" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">7.6 Important concurrent collection differences</strong>` }} />
        </h4>
      

          <div key="table-7-33" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Feature</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ArrayList</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">CopyOnWriteArrayList</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Thread-safe</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">No</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Yes</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Read operations</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Fast</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Fast</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Write operations</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Usually inexpensive</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Copies the array</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Best use case</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">General use</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Many reads, few writes</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-7-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">When should you use ConcurrentHashMap?</strong>` }} />
      </p>
    

      <p key="p-7-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When multiple threads need to access and modify a shared key-value structure.` }} />
      </p>
    

      <p key="p-7-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example, an application-wide request counter, concurrent cache, or shared lookup table.` }} />
      </p>
    

      <p key="p-7-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Remember that thread-safe individual operations do not automatically make a sequence of several operations atomic. Use appropriate atomic methods such as <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">compute</code>, <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">merge</code>, and <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">putIfAbsent</code>, or additional synchronization when required.` }} />
      </p>
    

        <h2 key="h1-7-38" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">PART 2 — JVM MEMORY AND EXECUTION</strong>` }} />
        </h2>
      
      </div>
    )
  },
  {
    id: 8,
    title: "8. Java Memory Model",
    summary: "Thread interactions, visibility problem, volatile happens-before semantics, atomic read-modify-write, AtomicInteger, synchronized monitors, and immutability.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-8-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8. Java Memory Model</strong>` }} />
        </h3>
      

        <h4 key="h3-8-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8.1 What is the Java Memory Model?</strong>` }} />
        </h4>
      

      <p key="p-8-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The Java Memory Model (JMM) defines how threads interact through memory.` }} />
      </p>
    

      <p key="p-8-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It establishes rules for:` }} />
      </p>
    

        <ul key="ul-8-4" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Visibility.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Atomicity.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Ordering.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Synchronization.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Communication between threads.` }} /></li>
        </ul>
      

      <p key="p-8-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `To understand this, first understand what can go wrong when multiple threads share data.` }} />
      </p>
    

        <h4 key="h3-8-6" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8.2 The visibility problem</strong>` }} />
        </h4>
      

      <p key="p-8-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-8-8" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`class SharedData &#123;

    boolean running = true;

    public void stop() &#123;
        running = false;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-8-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose one thread executes:` }} />
      </p>
    

        <div key="code-8-10" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`while (sharedData.running) &#123;

&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-8-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Another thread executes:` }} />
      </p>
    

        <div key="code-8-12" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`sharedData.stop();`}</code>
          </pre>
        </div>
      

      <p key="p-8-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You might expect the first thread to observe the updated value immediately.` }} />
      </p>
    

      <p key="p-8-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But without appropriate synchronization, there is no guaranteed visibility relationship between the two threads.` }} />
      </p>
    

      <p key="p-8-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The threads may not observe each other's changes as you expect.` }} />
      </p>
    

      <p key="p-8-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is a <strong className="font-bold text-stone-900">visibility problem</strong>.` }} />
      </p>
    

        <h4 key="h3-8-17" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8.3 Using volatile</strong>` }} />
        </h4>
      

      <p key="p-8-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Declare the shared variable as <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">volatile</code>.` }} />
      </p>
    

        <div key="code-8-19" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`class SharedData &#123;

    volatile boolean running = true;

    public void stop() &#123;
        running = false;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-8-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A volatile write happens-before subsequent reads of that same variable under the JMM rules.` }} />
      </p>
    

      <p key="p-8-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This gives the required visibility and ordering guarantees for this flag example.` }} />
      </p>
    

      <p key="p-8-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `However, volatile does not make every operation atomic.` }} />
      </p>
    

        <h4 key="h3-8-23" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8.4 Atomicity problem</strong>` }} />
        </h4>
      

      <p key="p-8-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-8-25" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`volatile int counter = 0;

counter++;`}</code>
          </pre>
        </div>
      

      <p key="p-8-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You might think this is one operation.` }} />
      </p>
    

      <p key="p-8-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It is actually a read-modify-write sequence:` }} />
      </p>
    

        <ol key="ol-8-28" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Read the current value.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Add one.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Write the new value.` }} /></li>
        </ol>
      

      <p key="p-8-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `If two threads execute it simultaneously, one update can be lost.` }} />
      </p>
    

      <p key="p-8-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For atomic increments, use <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">AtomicInteger</code>:` }} />
      </p>
    

        <div key="code-8-31" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.concurrent.atomic.AtomicInteger;

AtomicInteger counter = new AtomicInteger(0);

counter.incrementAndGet();`}</code>
          </pre>
        </div>
      

        <h4 key="h3-8-32" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8.5 Using synchronized</strong>` }} />
        </h4>
      

      <p key="p-8-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">synchronized</code> provides mutual exclusion and memory visibility through monitor lock rules.` }} />
      </p>
    

        <div key="code-8-34" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`class Counter &#123;

    private int count = 0;

    public synchronized void increment() &#123;
        count++;
    &#125;

    public synchronized int getCount() &#123;
        return count;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-8-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Only one thread can execute a synchronized instance method on the same object monitor at a time.` }} />
      </p>
    

      <p key="p-8-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When a thread exits a synchronized block, its unlock happens-before a subsequent lock of that same monitor.` }} />
      </p>
    

        <h4 key="h3-8-37" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8.6 Happens-before relationship</strong>` }} />
        </h4>
      

      <p key="p-8-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Happens-before is a relationship that establishes ordering and visibility between operations.` }} />
      </p>
    

      <p key="p-8-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Important examples include:` }} />
      </p>
    

        <ul key="ul-8-40" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Unlocking a monitor happens-before a later lock on the same monitor.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A volatile write happens-before a subsequent read of that same volatile variable.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Calling <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Thread.start()</code> happens-before actions in the started thread.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Actions in a thread happen-before another thread successfully returns from <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">join()</code> on it.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Program order inside a single thread establishes ordering between its operations.` }} /></li>
        </ul>
      

        <h4 key="h3-8-41" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8.7 Immutable objects and thread safety</strong>` }} />
        </h4>
      

      <p key="p-8-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An immutable object cannot have its observable state changed after construction.` }} />
      </p>
    

      <p key="p-8-43" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

        <div key="code-8-44" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public final class Student &#123;

    private final int id;

    private final String name;

    public Student(int id, String name) &#123;
        this.id = id;
        this.name = name;
    &#125;

    public int getId() &#123;
        return id;
    &#125;

    public String getName() &#123;
        return name;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-8-45" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The class:` }} />
      </p>
    

        <ul key="ul-8-46" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Is declared <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">final</code>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Uses private fields.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Uses final fields.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Does not provide setters.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Does not expose mutable internal state.` }} /></li>
        </ul>
      

      <p key="p-8-47" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Immutable objects are easier to share between threads because their state cannot be modified after construction.` }} />
      </p>
    

      <p key="p-8-48" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Important:</strong> An immutable object must not expose mutable internal objects that can be changed through another reference. Defensive copying may be required.` }} />
      </p>
    

        <h4 key="h3-8-49" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8.8 JMM summary</strong>` }} />
        </h4>
      

          <div key="table-8-50" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Concept</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Volatile</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Visibility and ordering</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Synchronized</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Mutual exclusion and visibility</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">AtomicInteger</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Atomic integer operations</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Happens-before</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Defines ordering and visibility</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Immutable objects</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Avoid state modification</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Locks</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Coordinate access to shared resources</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-8-51" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The most important distinction:` }} />
      </p>
    

        <ul key="ul-8-52" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Visibility means one thread can observe another thread's update.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Atomicity means an operation happens as one indivisible unit.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Ordering means operations obey the required execution constraints.` }} /></li>
        </ul>
      

      <p key="p-8-53" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These are related, but they are not the same thing.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 9,
    title: "9. Stack and Heap Memory",
    summary: "Per-thread JVM stacks, stack frames, StackOverflowError, heap object/array storage, references vs objects, and HotSpot Metaspace.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-9-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">9. Stack and Heap Memory</strong>` }} />
        </h3>
      

      <p key="p-9-1" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The JVM uses several runtime memory areas. Two of the most important are the Java thread stacks and the heap.` }} />
      </p>
    

        <h4 key="h3-9-2" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">9.1 Stack memory</strong>` }} />
        </h4>
      

      <p key="p-9-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Every thread has its own JVM stack.` }} />
      </p>
    

      <p key="p-9-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The stack stores method frames.` }} />
      </p>
    

      <p key="p-9-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A method frame typically contains:` }} />
      </p>
    

        <ul key="ul-9-6" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Local variables.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `An operand stack.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Information used for method execution.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Return and linking information.` }} /></li>
        </ul>
      

      <p key="p-9-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-9-8" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class Main &#123;

    public static void main(String[] args) &#123;

        int x = 10;

        int y = 20;

        int result = add(x, y);

        System.out.println(result);
    &#125;

    static int add(int a, int b) &#123;

        return a + b;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-9-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">main()</code> calls <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">add()</code>, a new method frame is created for <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">add()</code>.` }} />
      </p>
    

      <p key="p-9-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">add()</code> returns, its frame is removed.` }} />
      </p>
    

      <p key="p-9-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptually:` }} />
      </p>
    

      <p key="p-9-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Thread stack</strong>` }} />
      </p>
    

      <p key="p-9-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `main() frame` }} />
      </p>
    

      <p key="p-9-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `x = 10, y = 20, result = ...` }} />
      </p>
    

      <p key="p-9-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `add() frame` }} />
      </p>
    

      <p key="p-9-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `a = 10, b = 20` }} />
      </p>
    

      <p key="p-9-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Method calls create frames as execution enters them. Frames are removed as methods return.` }} />
      </p>
    

        <h4 key="h3-9-18" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">9.2 Stack overflow</strong>` }} />
        </h4>
      

      <p key="p-9-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Because stack memory has a limit, extremely deep recursion can cause <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">StackOverflowError</code>.` }} />
      </p>
    

        <div key="code-9-20" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class Main &#123;

    static void recursive() &#123;

        recursive();
    &#125;

    public static void main(String[] args) &#123;

        recursive();
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-9-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This method never reaches a base case.` }} />
      </p>
    

      <p key="p-9-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It keeps calling itself until the thread's stack cannot accommodate additional frames.` }} />
      </p>
    

        <h4 key="h3-9-23" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">9.3 Heap memory</strong>` }} />
        </h4>
      

      <p key="p-9-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The heap is the main runtime area where Java objects and arrays are allocated.` }} />
      </p>
    

      <p key="p-9-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The heap is generally shared across threads.` }} />
      </p>
    

      <p key="p-9-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

        <div key="code-9-27" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Student student = new Student(101, "Amit");`}</code>
          </pre>
        </div>
      

      <p key="p-9-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The object is normally allocated on the heap.` }} />
      </p>
    

      <p key="p-9-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The local variable <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">student</code> holds a reference to the object.` }} />
      </p>
    

      <p key="p-9-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A conceptual view:` }} />
      </p>
    

      <p key="p-9-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Stack and heap</strong>` }} />
      </p>
    

      <p key="p-9-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Stack</strong>` }} />
      </p>
    

      <p key="p-9-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `student` }} />
      </p>
    

      <p key="p-9-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reference` }} />
      </p>
    

      <p key="p-9-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Heap</strong>` }} />
      </p>
    

      <p key="p-9-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Student object` }} />
      </p>
    

      <p key="p-9-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `id = 101` }} />
      </p>
    

      <p key="p-9-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `name = "Amit"` }} />
      </p>
    

      <p key="p-9-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reference points to the object` }} />
      </p>
    

      <p key="p-9-40" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not confuse the reference with the object.` }} />
      </p>
    

      <p key="p-9-41" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `They are different things.` }} />
      </p>
    

      <p key="p-9-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Also, avoid memorizing an oversimplified rule such as "all local variables are on the stack."` }} />
      </p>
    

      <p key="p-9-43" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The actual placement and optimization of values depends on JVM execution and compiler optimizations. Local variables may be represented in registers or optimized away, and object allocations may sometimes be eliminated.` }} />
      </p>
    

        <h4 key="h3-9-44" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">9.4 Other JVM memory areas</strong>` }} />
        </h4>
      

          <div key="table-9-45" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Memory area</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Heap</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Objects and arrays</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Java stacks</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Method frames for each thread</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Program Counter (PC) register</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Tracks the current instruction per thread</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Method area</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Runtime class and method information</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Native method stacks</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Supports native method execution</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Metaspace in HotSpot</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Stores class metadata in native memory</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-9-46" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The method area is part of the JVM specification's runtime data-area model. Metaspace is a HotSpot implementation of class metadata storage.` }} />
      </p>
    

        <h4 key="h3-9-47" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">9.5 Stack vs heap</strong>` }} />
        </h4>
      

          <div key="table-9-48" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Feature</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Stack</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Heap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Ownership</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Per thread</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Shared</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Stores</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Method frames</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Objects and arrays</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Lifecycle</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Method-frame based</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Garbage collected</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Typical access pattern</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Method execution</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Object references</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Main issue</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Stack overflow</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Heap exhaustion / memory pressure</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        
      </div>
    )
  },
  {
    id: 10,
    title: "10. Garbage Collection",
    summary: "Reachability analysis from GC roots, Generational hypothesis (Eden, Survivor, Tenured), Mark-Sweep-Compact, G1/ZGC collectors, Stop-the-World, and memory leaks.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-10-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10. Garbage Collection</strong>` }} />
        </h3>
      

        <h4 key="h3-10-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10.1 What is Garbage Collection?</strong>` }} />
        </h4>
      

      <p key="p-10-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Garbage Collection (GC) is the JVM's automatic memory-management process.` }} />
      </p>
    

      <p key="p-10-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It identifies objects that are no longer reachable and reclaims the memory they occupy.` }} />
      </p>
    

      <p key="p-10-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

        <div key="code-10-5" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class Main &#123;

    public static void main(String[] args) &#123;

        Student student = new Student(101);

        student = null;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-10-6" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `After the reference is set to <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">null</code>, the object may become eligible for garbage collection if no other reachable references point to it.` }} />
      </p>
    

      <p key="p-10-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It is not necessarily collected immediately.` }} />
      </p>
    

        <h4 key="h3-10-8" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10.2 How does garbage collection determine what can be removed?</strong>` }} />
        </h4>
      

      <p key="p-10-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The JVM uses reachability analysis.` }} />
      </p>
    

      <p key="p-10-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It begins with references called <strong className="font-bold text-stone-900">GC roots</strong>.` }} />
      </p>
    

      <p key="p-10-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Common root categories include:` }} />
      </p>
    

        <ul key="ul-10-12" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `References in active thread stacks.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `References from static fields.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `References held by JNI/native code.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Other runtime references recognized as roots.` }} /></li>
        </ul>
      

      <p key="p-10-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The collector follows references from these roots.` }} />
      </p>
    

      <p key="p-10-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Objects reachable through that reference graph are considered live.` }} />
      </p>
    

      <p key="p-10-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Objects that cannot be reached are eligible for collection.` }} />
      </p>
    

        <h4 key="h3-10-16" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10.3 Generational garbage collection</strong>` }} />
        </h4>
      

      <p key="p-10-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Many JVM garbage collectors use generational ideas because many objects tend to have short lifetimes.` }} />
      </p>
    

      <p key="p-10-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The heap is conceptually divided into:` }} />
      </p>
    

        <ul key="ul-10-19" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Young generation.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Old generation.` }} /></li>
        </ul>
      

      <p key="p-10-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The young generation often includes Eden and survivor spaces in generational collectors.` }} />
      </p>
    

      <p key="p-10-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Generational heap model</strong>` }} />
      </p>
    

      <p key="p-10-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Young generation</strong>` }} />
      </p>
    

      <p key="p-10-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Eden` }} />
      </p>
    

      <p key="p-10-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Survivor 0` }} />
      </p>
    

      <p key="p-10-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Survivor 1` }} />
      </p>
    

      <p key="p-10-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Objects that survive enough collections may be promoted` }} />
      </p>
    

      <p key="p-10-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Old generation</strong>` }} />
      </p>
    

      <p key="p-10-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longer-lived objects` }} />
      </p>
    

      <p key="p-10-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptual generational layout. The exact heap organization depends on the selected garbage collector.` }} />
      </p>
    

      <p key="p-10-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A typical lifecycle:` }} />
      </p>
    

        <ol key="ol-10-31" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `A new object is allocated.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `It is initially placed in a young region in a generational collector.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `If it becomes unreachable, it can be reclaimed.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `If it survives collections, it may be promoted.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Old-generation collections manage longer-lived objects.` }} /></li>
        </ol>
      

        <h4 key="h3-10-32" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10.4 Garbage collection algorithms</strong>` }} />
        </h4>
      

      <p key="p-10-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Mark-and-sweep</strong>` }} />
      </p>
    

        <ol key="ol-10-34" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Mark reachable objects.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Identify unmarked objects.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Reclaim their memory.` }} /></li>
        </ol>
      

      <p key="p-10-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Mark-and-compact</strong>` }} />
      </p>
    

        <ol key="ol-10-36" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Mark live objects.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Move them together.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Reclaim fragmented space.` }} /></li>
        </ol>
      

      <p key="p-10-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Copying collection</strong>` }} />
      </p>
    

        <ol key="ol-10-38" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Identify live objects in a region.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Copy them into another region.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Reuse the original region.` }} /></li>
        </ol>
      

      <p key="p-10-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Different collectors combine techniques differently.` }} />
      </p>
    

        <h4 key="h3-10-40" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10.5 Important Java garbage collectors</strong>` }} />
        </h4>
      

          <div key="table-10-41" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Collector</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">General idea</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Serial GC</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Single-threaded collection</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Parallel GC</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Uses multiple worker threads</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">G1 GC</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Divides heap into regions and targets pause-time goals</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ZGC</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Designed for very low pause times</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Shenandoah</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Uses concurrent techniques to reduce pauses</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-10-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Their availability and defaults depend on the JVM distribution and version.` }} />
      </p>
    

        <h4 key="h3-10-43" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10.6 What is Stop-the-World?</strong>` }} />
        </h4>
      

      <p key="p-10-44" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Some GC phases pause application threads.` }} />
      </p>
    

      <p key="p-10-45" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is called a Stop-the-World pause.` }} />
      </p>
    

      <p key="p-10-46" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose your application is processing requests:` }} />
      </p>
    

        <div key="code-10-47" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Request 1 → processing
Request 2 → processing
GC pause → application threads paused
GC work completed
Request processing resumes`}</code>
          </pre>
        </div>
      

      <p key="p-10-48" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Long pauses can increase application latency.` }} />
      </p>
    

      <p key="p-10-49" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Some collectors perform substantial work concurrently, but even low-pause collectors can have short pauses.` }} />
      </p>
    

        <h4 key="h3-10-50" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10.7 Memory leaks in Java</strong>` }} />
        </h4>
      

      <p key="p-10-51" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java has garbage collection, but Java applications can still experience memory leaks.` }} />
      </p>
    

      <p key="p-10-52" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Why?` }} />
      </p>
    

      <p key="p-10-53" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Because the GC cannot reclaim objects that are still reachable.` }} />
      </p>
    

      <p key="p-10-54" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

        <div key="code-10-55" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`class Cache &#123;

    static List&lt;byte[]&gt; data = new ArrayList&lt;&gt;();

    static void addData() &#123;

        data.add(new byte[1024 * 1024]);
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-10-56" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Every call creates another array and stores it in a static list.` }} />
      </p>
    

      <p key="p-10-57" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The list keeps references to all those arrays.` }} />
      </p>
    

      <p key="p-10-58" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `They remain reachable, so the garbage collector cannot reclaim them.` }} />
      </p>
    

      <p key="p-10-59" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Common causes of memory leaks:` }} />
      </p>
    

        <ul key="ul-10-60" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Unbounded caches.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Static collections retaining objects.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Event listeners not removed.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Unclosed resource-related references.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Thread-local values retained longer than expected.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Incorrect object lifecycle management.` }} /></li>
        </ul>
      

        <h4 key="h3-10-61" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10.8 Can you force garbage collection?</strong>` }} />
        </h4>
      

      <p key="p-10-62" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You can request it:` }} />
      </p>
    

        <div key="code-10-63" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`System.gc();`}</code>
          </pre>
        </div>
      

      <p key="p-10-64" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But this is only a request. The JVM does not guarantee that a collection will occur at that exact time.` }} />
      </p>
    

      <p key="p-10-65" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not use <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">System.gc()</code> as your normal application memory-management strategy.` }} />
      </p>
    

        <h4 key="h3-10-66" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10.9 Garbage collection is not resource management</strong>` }} />
        </h4>
      

      <p key="p-10-67" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Files, sockets, and database connections are resources that should be closed explicitly.` }} />
      </p>
    

      <p key="p-10-68" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use try-with-resources:` }} />
      </p>
    

        <div key="code-10-69" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.io.*;

public class Main &#123;

    public static void main(String[] args)
            throws IOException &#123;

        try (BufferedReader reader =
                 new BufferedReader(
                     new FileReader("data.txt"))) &#123;

            System.out.println(reader.readLine());
        &#125;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-10-70" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The resource is closed when execution leaves the try block, even if an exception occurs.` }} />
      </p>
    

      <p key="p-10-71" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Key idea:</strong> GC manages memory. It does not replace disciplined management of external resources.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 11,
    title: "11. JVM Architecture",
    summary: "Bytecode compilation flow, ClassLoader subsystem, Runtime Data Areas, Execution Engine (Interpreter + JIT), Garbage Collector, and JNI.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-11-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">11. JVM Architecture</strong>` }} />
        </h3>
      

        <h4 key="h3-11-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">11.1 What is the JVM?</strong>` }} />
        </h4>
      

      <p key="p-11-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The Java Virtual Machine is the runtime environment that executes Java bytecode.` }} />
      </p>
    

      <p key="p-11-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java source code is not directly executed as native processor instructions by the usual Java compilation process.` }} />
      </p>
    

      <p key="p-11-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The flow is:` }} />
      </p>
    

      <p key="p-11-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Java source code</strong>` }} />
      </p>
    

      <p key="p-11-6" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Main.java` }} />
      </p>
    

      <p key="p-11-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Java compiler</strong>` }} />
      </p>
    

      <p key="p-11-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `javac` }} />
      </p>
    

      <p key="p-11-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Bytecode</strong>` }} />
      </p>
    

      <p key="p-11-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Main.class` }} />
      </p>
    

      <p key="p-11-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">JVM</strong>` }} />
      </p>
    

      <p key="p-11-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Class Loader` }} />
      </p>
    

      <p key="p-11-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Runtime Areas` }} />
      </p>
    

      <p key="p-11-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interpreter` }} />
      </p>
    

      <p key="p-11-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `JIT Compiler` }} />
      </p>
    

      <p key="p-11-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Garbage Collector` }} />
      </p>
    

      <p key="p-11-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Native machine instructions</strong>` }} />
      </p>
    

      <p key="p-11-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Executed by the processor` }} />
      </p>
    

        <h4 key="h3-11-19" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">11.2 Main JVM components</strong>` }} />
        </h4>
      

      <p key="p-11-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1. Class Loader Subsystem</strong>` }} />
      </p>
    

      <p key="p-11-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Loads Java classes into the JVM.` }} />
      </p>
    

      <p key="p-11-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2. Runtime Data Areas</strong>` }} />
      </p>
    

      <p key="p-11-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Provide memory areas for execution.` }} />
      </p>
    

      <p key="p-11-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These include:` }} />
      </p>
    

        <ul key="ul-11-25" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Heap.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Java thread stacks.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Program Counter registers.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Method-area-related runtime structures.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Native method stacks.` }} /></li>
        </ul>
      

      <p key="p-11-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3. Execution Engine</strong>` }} />
      </p>
    

      <p key="p-11-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Executes bytecode using:` }} />
      </p>
    

        <ul key="ul-11-28" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Interpreter.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `JIT compiler.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Other runtime execution optimizations.` }} /></li>
        </ul>
      

      <p key="p-11-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4. Garbage Collector</strong>` }} />
      </p>
    

      <p key="p-11-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reclaims memory occupied by unreachable objects.` }} />
      </p>
    

      <p key="p-11-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5. Native Interface and Libraries</strong>` }} />
      </p>
    

      <p key="p-11-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `JNI and native libraries allow Java programs to interact with native code and platform capabilities.` }} />
      </p>
    

        <h4 key="h3-11-33" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">11.3 JVM vs JRE vs JDK</strong>` }} />
        </h4>
      

          <div key="table-11-34" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Term</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">JVM</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Executes bytecode</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">JRE</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Runtime components needed to run Java applications</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">JDK</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Development kit containing tools such as the compiler and runtime</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-11-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A JDK provides the tools needed to compile and develop Java applications.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 12,
    title: "12. Class Loading",
    summary: "Class loading lifecycle (Loading, Linking: verification/preparation/resolution, Initialization), Bootstrap/Platform/Application loaders, and Parent Delegation Model.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-12-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">12. Class Loading</strong>` }} />
        </h3>
      

        <h4 key="h3-12-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">12.1 What is class loading?</strong>` }} />
        </h4>
      

      <p key="p-12-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Before the JVM can execute code from a class, the class must be loaded into the runtime.` }} />
      </p>
    

      <p key="p-12-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

        <div key="code-12-4" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Student student = new Student();`}</code>
          </pre>
        </div>
      

      <p key="p-12-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When the class is needed, the JVM ensures that it is loaded and initialized according to the class lifecycle rules.` }} />
      </p>
    

        <h4 key="h3-12-6" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">12.2 Class loading lifecycle</strong>` }} />
        </h4>
      

      <p key="p-12-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The broad lifecycle contains three main phases:` }} />
      </p>
    

        <ol key="ol-12-8" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Loading.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Linking.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Initialization.` }} /></li>
        </ol>
      

      <p key="p-12-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Linking itself includes verification, preparation, and resolution.` }} />
      </p>
    

      <p key="p-12-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Class lifecycle</strong>` }} />
      </p>
    

      <p key="p-12-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1. Loading</strong>` }} />
      </p>
    

      <p key="p-12-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find and create the class representation` }} />
      </p>
    

      <p key="p-12-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2. Linking</strong>` }} />
      </p>
    

      <p key="p-12-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Verification</strong>` }} />
      </p>
    

      <p key="p-12-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Validate bytecode and structural correctness` }} />
      </p>
    

      <p key="p-12-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Preparation</strong>` }} />
      </p>
    

      <p key="p-12-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Allocate and initialize static storage to default values` }} />
      </p>
    

      <p key="p-12-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Resolution</strong>` }} />
      </p>
    

      <p key="p-12-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Resolve symbolic references when required` }} />
      </p>
    

      <p key="p-12-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3. Initialization</strong>` }} />
      </p>
    

      <p key="p-12-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Execute class initialization code and explicit static initializers` }} />
      </p>
    

        <h4 key="h3-12-22" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">12.3 Class loaders</strong>` }} />
        </h4>
      

      <p key="p-12-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The standard class-loader hierarchy commonly includes:` }} />
      </p>
    

      <p key="p-12-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1. Bootstrap ClassLoader</strong>` }} />
      </p>
    

      <p key="p-12-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Loads core Java runtime classes.` }} />
      </p>
    

      <p key="p-12-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2. Platform ClassLoader</strong>` }} />
      </p>
    

      <p key="p-12-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Loads platform classes.` }} />
      </p>
    

      <p key="p-12-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3. Application ClassLoader</strong>` }} />
      </p>
    

      <p key="p-12-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Loads application classes from the application class path and related sources.` }} />
      </p>
    

        <h4 key="h3-12-30" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">12.4 Parent delegation model</strong>` }} />
        </h4>
      

      <p key="p-12-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When a class loader receives a request, it generally delegates to its parent before attempting to load the class itself.` }} />
      </p>
    

      <p key="p-12-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Why?` }} />
      </p>
    

      <p key="p-12-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It helps avoid duplicate loading of core classes and maintains a consistent class-loading hierarchy.` }} />
      </p>
    

      <p key="p-12-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A simplified process:` }} />
      </p>
    

        <div key="code-12-35" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Application ClassLoader
          |
          v
Platform ClassLoader
          |
          v
Bootstrap ClassLoader`}</code>
          </pre>
        </div>
      

      <p key="p-12-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `If the parent can load the class, its result is used. Otherwise, the child loader may try to load it itself.` }} />
      </p>
    

      <p key="p-12-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `There are specialized class-loading arrangements that can customize or depart from the usual delegation process.` }} />
      </p>
    

        <h4 key="h3-12-38" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">12.5 Static initialization</strong>` }} />
        </h4>
      

      <p key="p-12-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-12-40" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`class Student &#123;

    static int count = 10;

    static &#123;

        System.out.println("Class initialized");
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-12-41" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When the class is initialized, its static initialization code executes.` }} />
      </p>
    

      <p key="p-12-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The class is initialized once per defining class loader, subject to JVM class-initialization rules.` }} />
      </p>
    

      <p key="p-12-43" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A frequently used interview detail: reading a compile-time constant field does not necessarily trigger initialization of the declaring class.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 13,
    title: "13. JIT Compilation",
    summary: "Just-In-Time native compilation, hot method profiling, Tiered Compilation (Interpreter, C1, C2), Method Inlining, Escape Analysis, and JVM warm-up.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-13-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">13. JIT Compilation</strong>` }} />
        </h3>
      

        <h4 key="h3-13-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">13.1 What is JIT?</strong>` }} />
        </h4>
      

      <p key="p-13-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `JIT stands for Just-In-Time compilation.` }} />
      </p>
    

      <p key="p-13-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The JVM can compile frequently executed bytecode into native machine code while the program is running.` }} />
      </p>
    

      <p key="p-13-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Why is this useful?` }} />
      </p>
    

      <p key="p-13-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The interpreter can begin executing bytecode quickly, while the JIT compiler can optimize frequently executed sections based on runtime information.` }} />
      </p>
    

        <h4 key="h3-13-6" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">13.2 Interpreter vs JIT</strong>` }} />
        </h4>
      

      <p key="p-13-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Interpreter</strong>` }} />
      </p>
    

      <p key="p-13-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Executes bytecode instructions.` }} />
      </p>
    

      <p key="p-13-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Advantages:` }} />
      </p>
    

        <ul key="ul-13-10" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Can start execution quickly.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Does not need to compile all code first.` }} /></li>
        </ul>
      

      <p key="p-13-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">JIT compiler</strong>` }} />
      </p>
    

      <p key="p-13-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Compiles selected code into native instructions.` }} />
      </p>
    

      <p key="p-13-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Advantages:` }} />
      </p>
    

        <ul key="ul-13-14" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Can optimize hot code paths.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Can use information gathered during execution.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Can reduce the overhead of repeated interpretation.` }} /></li>
        </ul>
      

        <h4 key="h3-13-15" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">13.3 What are hot methods?</strong>` }} />
        </h4>
      

      <p key="p-13-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A method that executes frequently is called a hot method.` }} />
      </p>
    

      <p key="p-13-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-13-18" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class Main &#123;

    static long calculate() &#123;

        long total = 0;

        for (int i = 0; i &lt; 1000000; i++) &#123;

            total += i;
        &#125;

        return total;
    &#125;

    public static void main(String[] args) &#123;

        for (int i = 0; i &lt; 1000; i++) &#123;
            calculate();
        &#125;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-13-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The JVM can gather runtime information about frequently executed methods and potentially compile them.` }} />
      </p>
    

        <h4 key="h3-13-20" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">13.4 Tiered compilation</strong>` }} />
        </h4>
      

      <p key="p-13-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `In common HotSpot configurations, tiered compilation uses multiple execution and compilation levels.` }} />
      </p>
    

      <p key="p-13-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A simplified view:` }} />
      </p>
    

        <ol key="ol-13-23" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Start with interpretation.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Gather profiling information.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Use faster compilation levels for suitable methods.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Apply more advanced optimization for sufficiently hot code.` }} /></li>
        </ol>
      

      <p key="p-13-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Historically, HotSpot includes compilers known as C1 and C2.` }} />
      </p>
    

      <p key="p-13-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You should understand the concepts rather than assume every JVM uses exactly the same compilation strategy.` }} />
      </p>
    

        <h4 key="h3-13-26" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">13.5 Important JIT optimizations</strong>` }} />
        </h4>
      

      <p key="p-13-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Method inlining</strong>` }} />
      </p>
    

      <p key="p-13-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead of executing a method call, the compiler may insert the method's instructions into the caller.` }} />
      </p>
    

        <div key="code-13-29" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`static int square(int x) &#123;
    return x * x;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-13-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For a small, frequently called method, inlining may reduce call overhead and enable further optimizations.` }} />
      </p>
    

      <p key="p-13-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Escape analysis</strong>` }} />
      </p>
    

      <p key="p-13-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The JIT analyzes whether an object can be accessed outside a particular scope.` }} />
      </p>
    

      <p key="p-13-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This information can enable optimizations such as scalar replacement.` }} />
      </p>
    

      <p key="p-13-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Dead-code elimination</strong>` }} />
      </p>
    

      <p key="p-13-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Code that has no observable effect may be removed.` }} />
      </p>
    

      <p key="p-13-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Loop optimizations</strong>` }} />
      </p>
    

      <p key="p-13-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The JIT may transform loops to improve execution.` }} />
      </p>
    

      <p key="p-13-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Deoptimization</strong>` }} />
      </p>
    

      <p key="p-13-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `If assumptions made by optimized code become invalid, the JVM can fall back to less optimized execution and potentially recompile later.` }} />
      </p>
    

        <h4 key="h3-13-40" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">13.6 Why does Java sometimes start slower and become faster?</strong>` }} />
        </h4>
      

      <p key="p-13-41" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Because Java applications may require warm-up.` }} />
      </p>
    

      <p key="p-13-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `At the beginning, the JVM might interpret methods and collect runtime profiling information.` }} />
      </p>
    

      <p key="p-13-43" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `As the application runs, frequently executed code may be optimized and compiled.` }} />
      </p>
    

      <p key="p-13-44" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is important when benchmarking Java.` }} />
      </p>
    

      <p key="p-13-45" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A benchmark that measures only the first execution may not represent the application's steady-state performance.` }} />
      </p>
    

        <h2 key="h1-13-46" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">PART 3 — PERFORMANCE ENGINEERING</strong>` }} />
        </h2>
      
      </div>
    )
  },
  {
    id: 14,
    title: "14. Java Performance Profiling",
    summary: "Latency vs throughput, Java Flight Recorder (JFR), Java Mission Control (JMC), VisualVM, jcmd diagnostics, and JMH microbenchmarking.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-14-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">14. Java Performance Profiling</strong>` }} />
        </h3>
      

        <h4 key="h3-14-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">14.1 What is profiling?</strong>` }} />
        </h4>
      

      <p key="p-14-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Performance profiling is the process of examining how a program uses resources while running.` }} />
      </p>
    

      <p key="p-14-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It helps answer:` }} />
      </p>
    

        <ul key="ul-14-4" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Which methods consume the most CPU?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Which methods allocate the most memory?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Why is garbage collection occurring frequently?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Which threads are blocked?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Why are requests taking too long?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Is application performance degrading over time?` }} /></li>
        </ul>
      

        <h4 key="h3-14-5" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">14.2 Important performance metrics</strong>` }} />
        </h4>
      

          <div key="table-14-6" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Metric</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">What it tells you</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Latency</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">How long an operation takes</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Throughput</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Operations completed per unit of time</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">CPU utilization</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">How much processor capacity is used</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Heap usage</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Amount of heap memory occupied</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Allocation rate</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">How quickly objects are allocated</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">GC pause time</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Time application execution is paused</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Thread count</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Number of active threads</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Contention</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">How frequently threads compete for resources</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-14-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A system can have high throughput but poor latency for individual requests. You should measure both.` }} />
      </p>
    

        <h4 key="h3-14-8" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">14.3 Profiling tools</strong>` }} />
        </h4>
      

      <p key="p-14-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Java Flight Recorder (JFR)</strong>` }} />
      </p>
    

      <p key="p-14-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A low-overhead event-recording framework included in modern JDKs.` }} />
      </p>
    

      <p key="p-14-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It can capture information about:` }} />
      </p>
    

        <ul key="ul-14-12" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `CPU usage.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Allocation.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Garbage collection.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Thread activity.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Lock contention.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Runtime events.` }} /></li>
        </ul>
      

      <p key="p-14-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Java Mission Control (JMC)</strong>` }} />
      </p>
    

      <p key="p-14-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A graphical tool for analyzing JFR recordings.` }} />
      </p>
    

      <p key="p-14-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">VisualVM</strong>` }} />
      </p>
    

      <p key="p-14-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A graphical monitoring and profiling tool that can inspect application performance, memory, and threads.` }} />
      </p>
    

      <p key="p-14-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">jcmd</strong>` }} />
      </p>
    

      <p key="p-14-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A diagnostic utility for interacting with running JVM processes.` }} />
      </p>
    

      <p key="p-14-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">jstack</strong>` }} />
      </p>
    

      <p key="p-14-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A tool for examining thread stacks and diagnosing deadlocks or blocked threads.` }} />
      </p>
    

      <p key="p-14-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">jmap</strong>` }} />
      </p>
    

      <p key="p-14-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A tool associated with heap information and heap dumps.` }} />
      </p>
    

      <p key="p-14-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">JMH</strong>` }} />
      </p>
    

      <p key="p-14-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java Microbenchmark Harness. It is useful for writing controlled microbenchmarks.` }} />
      </p>
    

        <h4 key="h3-14-25" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">14.4 Useful diagnostic commands</strong>` }} />
        </h4>
      

      <p key="p-14-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find Java processes:` }} />
      </p>
    

        <div key="code-14-27" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`jcmd -l`}</code>
          </pre>
        </div>
      

      <p key="p-14-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Display JVM information:` }} />
      </p>
    

        <div key="code-14-29" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`jcmd &lt;PID&gt; VM.version`}</code>
          </pre>
        </div>
      

      <p key="p-14-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Inspect thread stacks:` }} />
      </p>
    

        <div key="code-14-31" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`jcmd &lt;PID&gt; Thread.print`}</code>
          </pre>
        </div>
      

      <p key="p-14-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Inspect heap information:` }} />
      </p>
    

        <div key="code-14-33" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`jcmd &lt;PID&gt; GC.heap_info`}</code>
          </pre>
        </div>
      

      <p key="p-14-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Start a JFR recording:` }} />
      </p>
    

        <div key="code-14-35" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`jcmd &lt;PID&gt; JFR.start duration=60s filename=recording.jfr`}</code>
          </pre>
        </div>
      

      <p key="p-14-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The exact commands available depend on the JDK and runtime environment. You generally need the appropriate permissions to inspect a process.` }} />
      </p>
    

        <h4 key="h3-14-37" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">14.5 Example: Finding a slow method</strong>` }} />
        </h4>
      

      <p key="p-14-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose your application responds slowly.` }} />
      </p>
    

      <p key="p-14-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not immediately assume the algorithm is the problem.` }} />
      </p>
    

      <p key="p-14-40" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Investigate:` }} />
      </p>
    

        <ol key="ol-14-41" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Measure request latency.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Check CPU usage.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Record a profile.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Identify expensive methods.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Determine whether they are CPU-bound, blocked, or waiting on external services.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Optimize the actual bottleneck.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Measure again.` }} /></li>
        </ol>
      

      <p key="p-14-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A method that appears slow in a single request might actually be spending its time waiting for a database rather than executing Java instructions.` }} />
      </p>
    

        <h4 key="h3-14-43" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">14.6 Microbenchmarking with JMH</strong>` }} />
        </h4>
      

      <p key="p-14-44" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A simple JMH benchmark can compare two approaches.` }} />
      </p>
    

        <div key="code-14-45" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
@State(Scope.Thread)
public class ExampleBenchmark &#123;

    int[] numbers;

    @Setup
    public void setup() &#123;

        numbers = new int[1000];

        for (int i = 0; i &lt; numbers.length; i++) &#123;
            numbers[i] = i;
        &#125;
    &#125;

    @Benchmark
    public long calculateSum() &#123;

        long sum = 0;

        for (int number : numbers) &#123;
            sum += number;
        &#125;

        return sum;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-14-46" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `JMH manages benchmark execution details such as warm-up, measurement iterations, and result collection.` }} />
      </p>
    

      <p key="p-14-47" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not rely on a simple <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">System.nanoTime()</code> loop as a substitute for a proper benchmark. JVM warm-up, dead-code elimination, compilation, and garbage collection can distort results.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 15,
    title: "15. Object Allocation",
    summary: "Object headers and field alignment, Thread Local Allocation Buffers (TLABs), StringBuilder vs string concatenation in loops, primitive boxing costs, and pooling pitfalls.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-15-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">15. Object Allocation</strong>` }} />
        </h3>
      

        <h4 key="h3-15-1" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">15.1 What is object allocation?</strong>` }} />
        </h4>
      

      <p key="p-15-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Object allocation means creating a new object or array.` }} />
      </p>
    

      <p key="p-15-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

        <div key="code-15-4" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Student student = new Student(101, "Amit");`}</code>
          </pre>
        </div>
      

      <p key="p-15-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This creates an object and returns a reference to it.` }} />
      </p>
    

      <p key="p-15-6" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A Java object commonly contains:` }} />
      </p>
    

        <ul key="ul-15-7" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Object header information.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Instance fields.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Alignment padding, if needed.` }} /></li>
        </ul>
      

      <p key="p-15-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The precise layout depends on the JVM, object type, and runtime configuration.` }} />
      </p>
    

        <h4 key="h3-15-9" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">15.2 Where are objects allocated?</strong>` }} />
        </h4>
      

      <p key="p-15-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `In a typical HotSpot JVM, objects are allocated on the heap.` }} />
      </p>
    

      <p key="p-15-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `However, allocation does not always mean the JVM must create a lasting heap object.` }} />
      </p>
    

      <p key="p-15-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The JIT may optimize certain objects away using escape analysis and scalar replacement.` }} />
      </p>
    

        <h4 key="h3-15-13" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">15.3 Thread Local Allocation Buffers (TLABs)</strong>` }} />
        </h4>
      

      <p key="p-15-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `To make allocation efficient, HotSpot commonly gives threads small allocation regions called TLABs.` }} />
      </p>
    

      <p key="p-15-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A thread can allocate many objects inside its own buffer without requiring a global synchronization operation for every allocation.` }} />
      </p>
    

      <p key="p-15-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This makes many small object allocations surprisingly inexpensive.` }} />
      </p>
    

        <h4 key="h3-15-17" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">15.4 Excessive object allocation</strong>` }} />
        </h4>
      

      <p key="p-15-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-15-19" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`String result = "";

for (int i = 0; i &lt; 1000; i++) &#123;

    result += i;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-15-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Repeated string concatenation inside a loop can create many intermediate strings.` }} />
      </p>
    

      <p key="p-15-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A more suitable approach is:` }} />
      </p>
    

        <div key="code-15-22" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`StringBuilder result = new StringBuilder();

for (int i = 0; i &lt; 1000; i++) &#123;

    result.append(i);
&#125;

String finalResult = result.toString();`}</code>
          </pre>
        </div>
      

      <p key="p-15-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">StringBuilder</code> is designed for efficient mutable string construction in a single-threaded context.` }} />
      </p>
    

        <h4 key="h3-15-24" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">15.5 Boxing and unboxing</strong>` }} />
        </h4>
      

      <p key="p-15-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java collections store objects, not primitive values.` }} />
      </p>
    

      <p key="p-15-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This means storing an <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">int</code> in a collection requires boxing.` }} />
      </p>
    

        <div key="code-15-27" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();

numbers.add(10);`}</code>
          </pre>
        </div>
      

      <p key="p-15-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptually, Java converts the primitive <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">int</code> into an <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">Integer</code> object.` }} />
      </p>
    

      <p key="p-15-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Unboxing happens when extracting the value:` }} />
      </p>
    

        <div key="code-15-30" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`int number = numbers.get(0);`}</code>
          </pre>
        </div>
      

      <p key="p-15-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For ordinary code, this is convenient.` }} />
      </p>
    

      <p key="p-15-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But in large numeric workloads, boxing can create unnecessary objects and overhead.` }} />
      </p>
    

      <p key="p-15-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For performance-sensitive numeric processing, primitive arrays may be more efficient.` }} />
      </p>
    

        <h4 key="h3-15-34" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">15.6 Object pooling</strong>` }} />
        </h4>
      

      <p key="p-15-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Object pooling means reusing existing objects instead of creating new ones.` }} />
      </p>
    

      <p key="p-15-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It can be useful for expensive resources, such as certain connection-management systems.` }} />
      </p>
    

      <p key="p-15-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But pooling ordinary Java objects is not automatically a performance improvement.` }} />
      </p>
    

      <p key="p-15-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Why?` }} />
      </p>
    

        <ul key="ul-15-39" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Modern JVM allocation is often inexpensive.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Pools require management.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Pooled objects may remain reachable longer.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Synchronization can add overhead.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Reuse can create state-management bugs.` }} /></li>
        </ul>
      

      <p key="p-15-40" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use pooling only when measurement shows that it helps.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 16,
    title: "16. Time and Memory Optimization",
    summary: "Optimal data structure selection, avoiding nested O(N^2) loops, reducing unnecessary copying (views vs clones), BufferedReader I/O, and time-space tradeoffs.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-16-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">16. Time and Memory Optimization</strong>` }} />
        </h3>
      

      <p key="p-16-1" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Performance optimization is not just about reducing CPU instructions.` }} />
      </p>
    

      <p key="p-16-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It is about choosing better algorithms, data structures, memory layouts, and execution strategies.` }} />
      </p>
    

        <h4 key="h3-16-3" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">16.1 Choose the right data structure</strong>` }} />
        </h4>
      

      <p key="p-16-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose you need to check whether a student ID exists.` }} />
      </p>
    

      <p key="p-16-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Approach 1: List.` }} />
      </p>
    

        <div key="code-16-6" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;Integer&gt; ids = new ArrayList&lt;&gt;();

boolean exists = ids.contains(101);`}</code>
          </pre>
        </div>
      

      <p key="p-16-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Searching a list takes <span className="font-mono text-orange-300 font-semibold">O(n)</span>.` }} />
      </p>
    

      <p key="p-16-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Approach 2: HashSet.` }} />
      </p>
    

        <div key="code-16-9" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`Set&lt;Integer&gt; ids = new HashSet&lt;&gt;();

boolean exists = ids.contains(101);`}</code>
          </pre>
        </div>
      

      <p key="p-16-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Membership testing takes average <span className="font-mono text-orange-300 font-semibold">O(1)</span>.` }} />
      </p>
    

      <p key="p-16-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The second solution is generally better for repeated membership checks.` }} />
      </p>
    

        <h4 key="h3-16-12" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">16.2 Avoid unnecessary nested loops</strong>` }} />
        </h4>
      

      <p key="p-16-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

        <div key="code-16-14" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`for (int i = 0; i &lt; n; i++) &#123;

    for (int j = 0; j &lt; n; j++) &#123;

        System.out.println(i + " " + j);
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-16-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This takes:` }} />
      </p>
    

      <p key="p-16-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<span className="font-mono text-orange-300 font-semibold"> O(n^2) </span>` }} />
      </p>
    

      <p key="p-16-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For <span className="font-mono text-orange-300 font-semibold">n=10,000</span>, there are approximately 100 million inner-loop executions.` }} />
      </p>
    

      <p key="p-16-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Algorithmic improvements usually matter more than minor syntax changes.` }} />
      </p>
    

        <h4 key="h3-16-19" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">16.3 Reduce unnecessary copying</strong>` }} />
        </h4>
      

      <p key="p-16-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Avoid repeatedly copying large collections.` }} />
      </p>
    

      <p key="p-16-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

        <div key="code-16-22" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;Integer&gt; copy = new ArrayList&lt;&gt;(original);`}</code>
          </pre>
        </div>
      

      <p key="p-16-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This can be useful when you need an independent copy, but copying large data structures unnecessarily consumes time and memory.` }} />
      </p>
    

      <p key="p-16-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Understand whether you need:` }} />
      </p>
    

        <ul key="ul-16-25" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `A view.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A shallow copy.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A deep copy.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `An immutable copy.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A reference to the original object.` }} /></li>
        </ul>
      

      <p key="p-16-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These choices have different semantics.` }} />
      </p>
    

        <h4 key="h3-16-27" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">16.4 Use efficient input/output</strong>` }} />
        </h4>
      

      <p key="p-16-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For large input:` }} />
      </p>
    

        <div key="code-16-29" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.io.*;

public class Main &#123;

    public static void main(String[] args)
            throws IOException &#123;

        BufferedReader br =
            new BufferedReader(
                new InputStreamReader(System.in)
            );

        String line = br.readLine();

        System.out.println(line);
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-16-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Buffering reduces the cost of repeated underlying I/O operations.` }} />
      </p>
    

      <p key="p-16-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For very large numeric input, a custom fast input parser may be useful, but it should be introduced only when needed.` }} />
      </p>
    

        <h4 key="h3-16-32" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">16.5 Avoid unnecessary repeated computation</strong>` }} />
        </h4>
      

      <p key="p-16-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

        <div key="code-16-34" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`for (int i = 0; i &lt; list.size(); i++) &#123;

    // Process list.get(i)
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-16-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For an <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">ArrayList</code>, this is generally fine.` }} />
      </p>
    

      <p key="p-16-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But for a <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">LinkedList</code>, repeated indexed access can result in <span className="font-mono text-orange-300 font-semibold">O(n^2)</span> traversal.` }} />
      </p>
    

      <p key="p-16-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For a linked list, iteration is more appropriate:` }} />
      </p>
    

        <div key="code-16-38" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`for (Integer value : linkedList) &#123;

    // Process value
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-16-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This illustrates why understanding internal data structures matters.` }} />
      </p>
    

        <h4 key="h3-16-40" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">16.6 Memory optimization techniques</strong>` }} />
        </h4>
      

        <ul key="ul-16-41" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Avoid retaining objects longer than needed.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Use primitive types when object wrappers are unnecessary.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Avoid unbounded collections and caches.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Reuse expensive resources appropriately.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Use streaming for large datasets rather than loading everything into memory.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Prefer appropriate data structures over unnecessarily complicated ones.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Close files, streams, sockets, and database resources.` }} /></li>
        </ul>
      

        <h4 key="h3-16-42" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">16.7 Time vs memory trade-offs</strong>` }} />
        </h4>
      

      <p key="p-16-43" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Sometimes faster algorithms consume more memory.` }} />
      </p>
    

      <p key="p-16-44" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example, using a HashSet to remember previously visited values:` }} />
      </p>
    

        <ul key="ul-16-45" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Adds additional memory usage.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Can reduce repeated searching time.` }} /></li>
        </ul>
      

      <p key="p-16-46" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is a common time-space trade-off.` }} />
      </p>
    

      <p key="p-16-47" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You should choose based on the input size, constraints, and application requirements.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 17,
    title: "17. Big-O vs Practical Performance",
    summary: "Why Big-O isn't the whole story: constant factors, CPU cache locality, allocation throughput, branch prediction, and real-world data structure benchmarks.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-17-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">17. Big-O vs Practical Performance</strong>` }} />
        </h3>
      

      <p key="p-17-1" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Understanding complexity is necessary, but it does not tell the entire performance story.` }} />
      </p>
    

      <p key="p-17-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two operations can have the same Big-O complexity and still have very different execution times.` }} />
      </p>
    

        <h4 key="h3-17-3" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">17.1 What does Big-O tell us?</strong>` }} />
        </h4>
      

      <p key="p-17-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Big-O describes how the cost of an algorithm grows as input size increases.` }} />
      </p>
    

      <p key="p-17-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

          <div key="table-17-6" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Complexity</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Growth pattern</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Common example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Constant</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Array index access</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Logarithmic</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Binary search</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Linear</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">List traversal</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(nlog n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Linearithmic</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Efficient comparison sorting</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n^2)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Quadratic</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Two nested loops</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(2^n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Exponential</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Some brute-force searches</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-17-7" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">17.2 Why isn't Big-O enough?</strong>` }} />
        </h4>
      

      <p key="p-17-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider these two operations:` }} />
      </p>
    

        <ul key="ul-17-9" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Accessing an element in an ArrayList.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Accessing an element in an array.` }} /></li>
        </ul>
      

      <p key="p-17-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Both provide <span className="font-mono text-orange-300 font-semibold">O(1)</span> indexed access.` }} />
      </p>
    

      <p key="p-17-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `However, their implementation details and constant costs differ.` }} />
      </p>
    

      <p key="p-17-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Similarly:` }} />
      </p>
    

        <ul key="ul-17-13" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `ArrayList iteration is <span className="font-mono text-orange-300 font-semibold">O(n)</span>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `LinkedList iteration is <span className="font-mono text-orange-300 font-semibold">O(n)</span>.` }} /></li>
        </ul>
      

      <p key="p-17-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But ArrayList often performs better because of memory locality and fewer object dereferences.` }} />
      </p>
    

        <h4 key="h3-17-15" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">17.3 Important practical performance factors</strong>` }} />
        </h4>
      

      <p key="p-17-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1. Constant factors</strong>` }} />
      </p>
    

      <p key="p-17-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An operation with a small constant factor may be faster for realistic input sizes.` }} />
      </p>
    

      <p key="p-17-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2. Cache locality</strong>` }} />
      </p>
    

      <p key="p-17-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Sequential memory access can be faster than scattered memory access.` }} />
      </p>
    

      <p key="p-17-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3. Allocation overhead</strong>` }} />
      </p>
    

      <p key="p-17-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Creating and discarding many objects can increase allocation and garbage-collection pressure.` }} />
      </p>
    

      <p key="p-17-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4. Memory usage</strong>` }} />
      </p>
    

      <p key="p-17-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A data structure can be theoretically fast but consume excessive memory.` }} />
      </p>
    

      <p key="p-17-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5. CPU branch behaviour</strong>` }} />
      </p>
    

      <p key="p-17-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Unpredictable branching can affect processor performance.` }} />
      </p>
    

      <p key="p-17-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6. I/O</strong>` }} />
      </p>
    

      <p key="p-17-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Disk, database, network, and console operations can dominate CPU execution time.` }} />
      </p>
    

        <h4 key="h3-17-28" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">17.4 Practical data structure comparison</strong>` }} />
        </h4>
      

          <div key="table-17-29" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Structure</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Lookup</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Insertion</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Ordering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ArrayList</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span> by value; <span className="font-mono text-orange-300 font-semibold">O(1)</span> by index</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Amortized <span className="font-mono text-orange-300 font-semibold">O(1)</span> at end</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Insertion order</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">LinkedList</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span> at known node</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Insertion order</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">HashSet</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Average <span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Average <span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">No guaranteed order</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">TreeSet</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Sorted</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">HashMap</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Average <span className="font-mono text-orange-300 font-semibold">O(1)</span> by key</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Average <span className="font-mono text-orange-300 font-semibold">O(1)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">No guaranteed order</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">TreeMap</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span> by key</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Sorted by key</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">PriorityQueue</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(1)</span> for head</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0"><span className="font-mono text-orange-300 font-semibold">O(log n)</span></td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Priority at head</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-17-30" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">17.5 Example: Searching a million values</strong>` }} />
        </h4>
      

      <p key="p-17-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose you need to perform 100,000 membership checks against one million values.` }} />
      </p>
    

      <p key="p-17-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `With an ArrayList:` }} />
      </p>
    

        <div key="code-17-33" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`boolean found = numbers.contains(target);`}</code>
          </pre>
        </div>
      

      <p key="p-17-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Each search may examine up to one million elements.` }} />
      </p>
    

      <p key="p-17-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `With a HashSet:` }} />
      </p>
    

        <div key="code-17-36" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`boolean found = numberSet.contains(target);`}</code>
          </pre>
        </div>
      

      <p key="p-17-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Each lookup takes average constant time under ordinary hashing assumptions.` }} />
      </p>
    

      <p key="p-17-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Building the HashSet has a cost and requires additional memory, but repeated lookups can make the trade-off worthwhile.` }} />
      </p>
    

      <p key="p-17-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Important lesson:</strong> Analyze the entire workload, not just one individual operation.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 18,
    title: "18. Writing Efficient Java Code",
    summary: "Declaring variables via interfaces, idiomatic Map methods (getOrDefault, merge), memory-efficient duplicates detection, and measurement-driven optimization workflows.",
    content: (
      <div className="space-y-4">
        
        <h3 key="h2-18-0" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">18. Writing Efficient Java Code</strong>` }} />
        </h3>
      

      <p key="p-18-1" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Now combine everything into practical engineering rules.` }} />
      </p>
    

        <h4 key="h3-18-2" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">18.1 Select data structures based on the task</strong>` }} />
        </h4>
      

          <div key="table-18-3" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Requirement</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Suitable structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Frequent indexed access</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ArrayList</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Unique values</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">HashSet</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Fast key lookup</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">HashMap</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Sorted keys</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">TreeMap</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Sorted unique values</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">TreeSet</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Repeated minimum/maximum retrieval</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">PriorityQueue</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Queue or stack operations</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ArrayDeque</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Concurrent key-value access</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ConcurrentHashMap</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Many reads, few writes</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">CopyOnWriteArrayList</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h4 key="h3-18-4" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">18.2 Prefer interfaces for variable declarations</strong>` }} />
        </h4>
      

      <p key="p-18-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead of:` }} />
      </p>
    

        <div key="code-18-6" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;();`}</code>
          </pre>
        </div>
      

      <p key="p-18-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Prefer:` }} />
      </p>
    

        <div key="code-18-8" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;String&gt; names = new ArrayList&lt;&gt;();`}</code>
          </pre>
        </div>
      

      <p key="p-18-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Why?` }} />
      </p>
    

      <p key="p-18-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The variable depends on the interface rather than the concrete implementation.` }} />
      </p>
    

      <p key="p-18-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You can later change the implementation without changing code that uses the <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">List</code> interface.` }} />
      </p>
    

        <h4 key="h3-18-12" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">18.3 Use the correct collection methods</strong>` }} />
        </h4>
      

      <p key="p-18-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Prefer:` }} />
      </p>
    

        <div key="code-18-14" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`map.getOrDefault(key, 0);`}</code>
          </pre>
        </div>
      

      <p key="p-18-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead of manually checking for key existence every time.` }} />
      </p>
    

      <p key="p-18-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use:` }} />
      </p>
    

        <div key="code-18-17" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`map.merge(key, 1, Integer::sum);`}</code>
          </pre>
        </div>
      

      <p key="p-18-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For frequency counting.` }} />
      </p>
    

      <p key="p-18-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use:` }} />
      </p>
    

        <div key="code-18-20" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`set.add(value);`}</code>
          </pre>
        </div>
      

      <p key="p-18-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `To test uniqueness while inserting.` }} />
      </p>
    

      <p key="p-18-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use:` }} />
      </p>
    

        <div key="code-18-23" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`queue.offer(value);`}</code>
          </pre>
        </div>
      

      <p key="p-18-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For queue insertion where the queue may have capacity restrictions.` }} />
      </p>
    

        <h4 key="h3-18-25" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">18.4 Avoid inefficient string concatenation inside loops</strong>` }} />
        </h4>
      

      <p key="p-18-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Less efficient for repeated concatenation:` }} />
      </p>
    

        <div key="code-18-27" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`String result = "";

for (int i = 0; i &lt; 1000; i++) &#123;
    result += i;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-18-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Better:` }} />
      </p>
    

        <div key="code-18-29" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`StringBuilder result = new StringBuilder();

for (int i = 0; i &lt; 1000; i++) &#123;
    result.append(i);
&#125;`}</code>
          </pre>
        </div>
      

        <h4 key="h3-18-30" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">18.5 Avoid unnecessary object creation</strong>` }} />
        </h4>
      

      <p key="p-18-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not create new objects repeatedly when they serve no purpose.` }} />
      </p>
    

      <p key="p-18-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example, calculate reusable values outside a loop when doing so preserves the intended behaviour.` }} />
      </p>
    

      <p key="p-18-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But do not introduce complicated reuse or object pooling without profiling.` }} />
      </p>
    

        <h4 key="h3-18-34" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">18.6 Write algorithms with complexity in mind</strong>` }} />
        </h4>
      

      <p key="p-18-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose you need to find duplicates in an array.` }} />
      </p>
    

      <p key="p-18-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A nested-loop solution:` }} />
      </p>
    

        <div key="code-18-37" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`for (int i = 0; i &lt; numbers.length; i++) &#123;

    for (int j = i + 1; j &lt; numbers.length; j++) &#123;

        if (numbers[i] == numbers[j]) &#123;
            System.out.println(numbers[i]);
        &#125;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-18-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

      <p key="p-18-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<span className="font-mono text-orange-300 font-semibold"> O(n^2) </span>` }} />
      </p>
    

      <p key="p-18-40" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A HashSet-based solution:` }} />
      </p>
    

        <div key="code-18-41" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;

public class Main &#123;

    public static void main(String[] args) &#123;

        int[] numbers = &#123;1, 2, 3, 2, 4, 3&#125;;

        Set&lt;Integer&gt; seen = new HashSet&lt;&gt;();

        Set&lt;Integer&gt; duplicates = new HashSet&lt;&gt;();

        for (int number : numbers) &#123;

            if (!seen.add(number)) &#123;

                duplicates.add(number);
            &#125;
        &#125;

        System.out.println(duplicates);
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-18-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Average time complexity:` }} />
      </p>
    

      <p key="p-18-43" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<span className="font-mono text-orange-300 font-semibold"> O(n) </span>` }} />
      </p>
    

      <p key="p-18-44" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Additional space complexity:` }} />
      </p>
    

      <p key="p-18-45" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<span className="font-mono text-orange-300 font-semibold"> O(n) </span>` }} />
      </p>
    

      <p key="p-18-46" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The second solution trades memory for better average execution time.` }} />
      </p>
    

        <h4 key="h3-18-47" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">18.7 Use profiling before optimizing</strong>` }} />
        </h4>
      

      <p key="p-18-48" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A professional performance workflow is:` }} />
      </p>
    

        <ol key="ol-18-49" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Establish a baseline</strong>` }} /></li>
        </ol>
      

      <p key="p-18-50" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Measure the application's current latency, throughput, memory consumption, and CPU usage.` }} />
      </p>
    

        <ol key="ol-18-51" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Identify the bottleneck</strong>` }} /></li>
        </ol>
      

      <p key="p-18-52" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use profiling, thread analysis, heap information, or database tracing to locate the expensive operation.` }} />
      </p>
    

        <ol key="ol-18-53" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Understand the cause</strong>` }} /></li>
        </ol>
      

      <p key="p-18-54" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Determine whether the issue is algorithmic, memory-related, concurrency-related, or caused by external I/O.` }} />
      </p>
    

        <ol key="ol-18-55" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Apply a targeted improvement</strong>` }} /></li>
        </ol>
      

      <p key="p-18-56" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Change the algorithm, collection, memory behaviour, or synchronization strategy.` }} />
      </p>
    

        <ol key="ol-18-57" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Measure again</strong>` }} /></li>
        </ol>
      

      <p key="p-18-58" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Compare results against the original baseline and check that correctness has not changed.` }} />
      </p>
    

      <p key="p-18-59" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The goal is not to write the shortest code or use the fewest objects. The goal is to build code that is correct, maintainable, and efficient for its actual workload.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 19,
    title: "19. Part 4 — Worked Examples",
    summary: "Step-by-step implementations: Top-K largest elements with PriorityQueue, Student lookup with HashMap, and first non-repeating character with LinkedHashMap.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-19-0" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">PART 4 — WORKED EXAMPLES</strong>` }} />
        </h2>
      

      <p key="p-19-1" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These examples combine the concepts from the module.` }} />
      </p>
    

        <h3 key="h2-19-2" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Example 1: Find the K largest elements using PriorityQueue</strong>` }} />
        </h3>
      

      <p key="p-19-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Problem:</strong> Given an array, return the three largest elements.` }} />
      </p>
    

      <p key="p-19-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Input:` }} />
      </p>
    

        <div key="code-19-5" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`[10, 5, 20, 8, 15, 30]`}</code>
          </pre>
        </div>
      

      <p key="p-19-6" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Expected result:` }} />
      </p>
    

        <div key="code-19-7" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`[30, 20, 15]`}</code>
          </pre>
        </div>
      

        <h4 key="h3-19-8" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Approach</strong>` }} />
        </h4>
      

      <p key="p-19-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Maintain a min-heap with at most <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code> elements.` }} />
      </p>
    

      <p key="p-19-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Whenever the heap becomes larger than <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code>, remove its smallest element.` }} />
      </p>
    

      <p key="p-19-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `At the end, the heap contains the <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code> largest values.` }} />
      </p>
    

        <div key="code-19-12" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;

public class Main &#123;

    public static List&lt;Integer&gt; largestK(int[] numbers, int k) &#123;

        if (k &lt; 0 || k &gt; numbers.length) &#123;
            throw new IllegalArgumentException("Invalid k");
        &#125;

        PriorityQueue&lt;Integer&gt; minHeap =
            new PriorityQueue&lt;&gt;();

        for (int number : numbers) &#123;

            minHeap.offer(number);

            if (minHeap.size() &gt; k) &#123;

                minHeap.poll();
            &#125;
        &#125;

        List&lt;Integer&gt; result = new ArrayList&lt;&gt;();

        while (!minHeap.isEmpty()) &#123;
            result.add(minHeap.poll());
        &#125;

        Collections.reverse(result);

        return result;
    &#125;

    public static void main(String[] args) &#123;

        int[] numbers = &#123;10, 5, 20, 8, 15, 30&#125;;

        System.out.println(largestK(numbers, 3));
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-19-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-19-14" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`[30, 20, 15]`}</code>
          </pre>
        </div>
      

      <p key="p-19-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Complexity:</strong>` }} />
      </p>
    

        <ul key="ul-19-16" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Time: <span className="font-mono text-orange-300 font-semibold">O(nlog k)</span>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Extra space: <span className="font-mono text-orange-300 font-semibold">O(k)</span>.` }} /></li>
        </ul>
      

      <p key="p-19-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is useful when <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">k</code> is much smaller than the total input size.` }} />
      </p>
    

        <h3 key="h2-19-18" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Example 2: Build a student lookup system with HashMap</strong>` }} />
        </h3>
      

      <p key="p-19-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Problem:</strong> Store student IDs and names, then find a student using their ID.` }} />
      </p>
    

        <div key="code-19-20" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;

public class Main &#123;

    public static void main(String[] args) &#123;

        Map&lt;Integer, String&gt; students = new HashMap&lt;&gt;();

        students.put(101, "Amit");
        students.put(102, "Rahul");
        students.put(103, "Priya");

        int searchId = 102;

        String name = students.get(searchId);

        if (name != null) &#123;

            System.out.println("Student: " + name);

        &#125; else &#123;

            System.out.println("Student not found");
        &#125;
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-19-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Average lookup time:` }} />
      </p>
    

      <p key="p-19-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<span className="font-mono text-orange-300 font-semibold"> O(1) </span>` }} />
      </p>
    

      <p key="p-19-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This pattern is useful in student management systems, employee directories, database indexing layers, and caches.` }} />
      </p>
    

        <h3 key="h2-19-24" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Example 3: Find the first non-repeating character</strong>` }} />
        </h3>
      

      <p key="p-19-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Problem:</strong> Given a string, find its first character that appears only once.` }} />
      </p>
    

      <p key="p-19-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Input:` }} />
      </p>
    

        <div key="code-19-27" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`swiss`}</code>
          </pre>
        </div>
      

      <p key="p-19-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

        <div key="code-19-29" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`w`}</code>
          </pre>
        </div>
      

        <h4 key="h3-19-30" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Approach</strong>` }} />
        </h4>
      

        <ol key="ol-19-31" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Count each character using a LinkedHashMap.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `LinkedHashMap preserves insertion order.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Find the first entry with frequency one.` }} /></li>
        </ol>
      

        <div key="code-19-32" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;

public class Main &#123;

    public static Character firstNonRepeating(String input) &#123;

        Map&lt;Character, Integer&gt; frequency =
            new LinkedHashMap&lt;&gt;();

        for (char ch : input.toCharArray()) &#123;

            frequency.merge(ch, 1, Integer::sum);
        &#125;

        for (Map.Entry&lt;Character, Integer&gt; entry :
                frequency.entrySet()) &#123;

            if (entry.getValue() == 1) &#123;

                return entry.getKey();
            &#125;
        &#125;

        return null;
    &#125;

    public static void main(String[] args) &#123;

        String input = "swiss";

        System.out.println(firstNonRepeating(input));
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-19-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Complexity:</strong>` }} />
      </p>
    

        <ul key="ul-19-34" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Time: <span className="font-mono text-orange-300 font-semibold">O(n)</span>, assuming ordinary HashMap operations.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Space: <span className="font-mono text-orange-300 font-semibold">O(k)</span>, where <span className="font-mono text-orange-300 font-semibold">k</span> is the number of distinct characters.` }} /></li>
        </ul>
      

      <p key="p-19-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This example demonstrates why choosing LinkedHashMap instead of HashMap can matter: you need both efficient frequency counting and insertion order.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 20,
    title: "20. Part 5 — Practical Labs",
    summary: "Hands-on projects: Collection benchmarking, Custom HashMap implementation from scratch, JVM memory allocation limits, PriorityQueue task scheduler, and thread-safe counter.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-20-0" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">PART 5 — PRACTICAL LABS</strong>` }} />
        </h2>
      

      <p key="p-20-1" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These exercises are intended to move beyond remembering definitions and help you implement the concepts.` }} />
      </p>
    

        <h3 key="h2-20-2" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Lab 1 — Collection performance comparison</strong>` }} />
        </h3>
      

      <p key="p-20-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Objective:</strong> Compare ArrayList, LinkedList, HashSet, and TreeSet.` }} />
      </p>
    

      <p key="p-20-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Tasks:` }} />
      </p>
    

        <ol key="ol-20-5" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Create 100,000 integers.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Insert them into each structure.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Search for 10,000 randomly selected integers.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Iterate over every element.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Measure elapsed time.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Repeat tests several times.` }} /></li>
        </ol>
      

      <p key="p-20-6" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Record:` }} />
      </p>
    

          <div key="table-20-7" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Structure</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Insertion time</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Search time</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Iteration time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ArrayList</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">LinkedList</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">HashSet</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">TreeSet</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Measure</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

      <p key="p-20-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not treat a single run as a definitive performance result. For proper comparisons, use JMH and control the test environment.` }} />
      </p>
    

        <h3 key="h2-20-9" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Lab 2 — Implement your own HashMap concept</strong>` }} />
        </h3>
      

      <p key="p-20-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Build a simplified hash table from scratch.` }} />
      </p>
    

      <p key="p-20-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your implementation should include:` }} />
      </p>
    

        <ul key="ul-20-12" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `An array of buckets.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A hash function.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Key-value entries.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Collision handling with linked nodes.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">put()</code>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">get()</code>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `<code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">remove()</code>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Resizing.` }} /></li>
        </ul>
      

      <p key="p-20-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Start with separate chaining. You do not need to implement treeification.` }} />
      </p>
    

      <p key="p-20-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Goal:</strong> Understand how HashMap works internally rather than only knowing how to call its methods.` }} />
      </p>
    

        <h3 key="h2-20-15" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Lab 3 — JVM memory experiment</strong>` }} />
        </h3>
      

      <p key="p-20-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Create a program that repeatedly allocates objects.` }} />
      </p>
    

        <div key="code-20-17" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;

public class MemoryExperiment &#123;

    public static void main(String[] args) &#123;

        List&lt;byte[]&gt; objects = new ArrayList&lt;&gt;();

        for (int i = 0; i &lt; 1000; i++) &#123;

            objects.add(new byte[1024 * 10]);
        &#125;

        System.out.println("Allocation completed");
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-20-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Tasks:` }} />
      </p>
    

        <ol key="ol-20-19" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Observe heap usage.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Run with a constrained heap.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Remove references to some objects.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Observe how memory usage changes after garbage collection.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Generate a JFR recording.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Inspect allocation and GC events.` }} /></li>
        </ol>
      

      <p key="p-20-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Run with a small heap, for example:` }} />
      </p>
    

        <div key="code-20-21" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`java -Xms32m -Xmx64m MemoryExperiment`}</code>
          </pre>
        </div>
      

      <p key="p-20-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Memory behaviour depends on the runtime and machine, so exact results may vary.` }} />
      </p>
    

        <h3 key="h2-20-23" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Lab 4 — Build a task scheduler</strong>` }} />
        </h3>
      

      <p key="p-20-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use PriorityQueue to create a small task scheduler.` }} />
      </p>
    

      <p key="p-20-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Each task should have:` }} />
      </p>
    

        <ul key="ul-20-26" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Task ID.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Priority.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Name.` }} /></li>
        </ul>
      

      <p key="p-20-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Requirements:` }} />
      </p>
    

        <ol key="ol-20-28" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Higher-priority tasks should be processed first.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Tasks with equal priority should follow a defined tie-breaking rule.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Add tasks dynamically.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Remove and process the highest-priority task.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Display the remaining tasks.` }} /></li>
        </ol>
      

      <p key="p-20-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This exercise combines object-oriented design, comparators, and heaps.` }} />
      </p>
    

        <h3 key="h2-20-30" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Lab 5 — Thread-safe counter</strong>` }} />
        </h3>
      

      <p key="p-20-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Build two implementations:` }} />
      </p>
    

      <p key="p-20-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Version A:</strong> A normal integer with an unsynchronized increment.` }} />
      </p>
    

      <p key="p-20-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Version B:</strong> An <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">AtomicInteger</code> counter.` }} />
      </p>
    

      <p key="p-20-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Tasks:` }} />
      </p>
    

        <ol key="ol-20-35" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Create multiple worker threads.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Let each worker increment the counter a fixed number of times.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Compare the result of both implementations.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Fix Version A using <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">synchronized</code>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Compare <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">synchronized</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">AtomicInteger</code>.` }} /></li>
        </ol>
      

      <p key="p-20-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The important learning objective is understanding why read-modify-write operations require atomicity.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 21,
    title: "21. Part 6 — Assignments and Mini Project",
    summary: "Decision-making assignments, LinkedList O(N^2) indexed loop optimization, and capstone Concurrent Student Management System architecture.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-21-0" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">PART 6 — ASSIGNMENTS AND MINI PROJECT</strong>` }} />
        </h2>
      

        <h3 key="h2-21-1" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Assignment 1 — Java collection decision-making</strong>` }} />
        </h3>
      

      <p key="p-21-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For each requirement, select the most appropriate collection and explain why.` }} />
      </p>
    

        <ol key="ol-21-3" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `A student directory indexed by ID.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A leaderboard that must remain sorted by score.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A set of unique registered email addresses.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A job scheduler that processes the highest-priority task.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A recently accessed list where reads are frequent and writes are rare.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A queue shared by producer and consumer threads.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A list requiring frequent indexed access.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `A sorted map supporting nearest-key searches.` }} /></li>
        </ol>
      

        <h3 key="h2-21-4" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Assignment 2 — Performance optimization</strong>` }} />
        </h3>
      

      <p key="p-21-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Given the following code:` }} />
      </p>
    

        <div key="code-21-6" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;

public class Main &#123;

    public static void main(String[] args) &#123;

        List&lt;Integer&gt; numbers = new LinkedList&lt;&gt;();

        for (int i = 0; i &lt; 100000; i++) &#123;

            numbers.add(i);
        &#125;

        long sum = 0;

        for (int i = 0; i &lt; numbers.size(); i++) &#123;

            sum += numbers.get(i);
        &#125;

        System.out.println(sum);
    &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-21-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Identify the performance problem and optimize it.` }} />
      </p>
    

      <p key="p-21-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Solution:</strong>` }} />
      </p>
    

      <p key="p-21-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The code uses indexed access on a LinkedList.` }} />
      </p>
    

      <p key="p-21-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Each indexed lookup requires traversal. Repeating this for every index can produce <span className="font-mono text-orange-300 font-semibold">O(n^2)</span> time.` }} />
      </p>
    

      <p key="p-21-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two improvements:` }} />
      </p>
    

        <div key="code-21-12" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`List&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();`}</code>
          </pre>
        </div>
      

      <p key="p-21-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Or retain LinkedList but use sequential iteration:` }} />
      </p>
    

        <div key="code-21-14" className="my-5 rounded-2xl overflow-hidden border border-[#e7e3da] bg-stone-50 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200 text-xs font-mono text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500/80 inline-block"></span>
              TEXT
            </span>
            <span className="text-[11px] text-stone-500">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-stone-800 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`for (int number : numbers) &#123;

    sum += number;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-21-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Both avoid the repeated indexed traversal.` }} />
      </p>
    

        <h3 key="h2-21-16" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Mini Project — Concurrent Student Management System</strong>` }} />
        </h3>
      

      <p key="p-21-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Module capstone` }} />
      </p>
    

      <p key="p-21-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Build a command-line student management system using the concepts from this module.` }} />
      </p>
    

        <h4 key="h3-21-19" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Requirements</strong>` }} />
        </h4>
      

      <p key="p-21-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Student management</strong>` }} />
      </p>
    

      <p key="p-21-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Store student IDs, names, and marks.` }} />
      </p>
    

      <p key="p-21-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use a HashMap for ID-based lookup.` }} />
      </p>
    

      <p key="p-21-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Unique registration</strong>` }} />
      </p>
    

      <p key="p-21-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use a HashSet to prevent duplicate student IDs.` }} />
      </p>
    

      <p key="p-21-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Leaderboard</strong>` }} />
      </p>
    

      <p key="p-21-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use a TreeMap or a suitable sorting strategy to display students by score.` }} />
      </p>
    

      <p key="p-21-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Priority processing</strong>` }} />
      </p>
    

      <p key="p-21-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use a PriorityQueue to process students with the highest priority.` }} />
      </p>
    

      <p key="p-21-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Concurrent access</strong>` }} />
      </p>
    

      <p key="p-21-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use ConcurrentHashMap for a shared student lookup structure if multiple threads access and modify the map.` }} />
      </p>
    

      <p key="p-21-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Performance evaluation</strong>` }} />
      </p>
    

      <p key="p-21-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Measure:` }} />
      </p>
    

        <ul key="ul-21-33" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Insertions.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Lookups.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Sorting.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Memory usage.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Concurrent update behaviour.` }} /></li>
        </ul>
      

      <p key="p-21-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Expected skills demonstrated:</strong> Java collections, generic types, comparators, complexity analysis, concurrency fundamentals, and profiling.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 22,
    title: "22. Part 7 — Interview and Assessment Questions",
    summary: "10-question fundamental knowledge check plus 15 advanced interview questions spanning JCF, JVM memory, GC, concurrency, and profiling.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-22-0" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">PART 7 — INTERVIEW AND ASSESSMENT QUESTIONS</strong>` }} />
        </h2>
      

      <p key="p-22-1" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Try answering these without looking at the explanations.` }} />
      </p>
    

      <p key="p-22-2" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Module 22 knowledge check</strong>` }} />
      </p>
    

      <p key="p-22-3" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `0/10 answered` }} />
      </p>
    

      <p key="p-22-4" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">1. What is the main difference between ArrayList and LinkedList?</strong>` }} />
      </p>
    

      <p key="p-22-5" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `ArrayList uses a dynamic array; LinkedList uses linked nodes.` }} />
      </p>
    

      <p key="p-22-6" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `ArrayList is always slower.` }} />
      </p>
    

      <p key="p-22-7" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `LinkedList supports only primitive data.` }} />
      </p>
    

      <p key="p-22-8" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">2. What is the average lookup complexity of HashMap?</strong>` }} />
      </p>
    

      <p key="p-22-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
      </p>
    

      <p key="p-22-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(log n)` }} />
      </p>
    

      <p key="p-22-11" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
      </p>
    

      <p key="p-22-12" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">3. Why are equals() and hashCode() both important in HashMap?</strong>` }} />
      </p>
    

      <p key="p-22-13" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `They sort the keys.` }} />
      </p>
    

      <p key="p-22-14" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `They help identify equivalent keys and locate their entries.` }} />
      </p>
    

      <p key="p-22-15" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `They prevent garbage collection.` }} />
      </p>
    

      <p key="p-22-16" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">4. Which data structure is commonly used internally by TreeMap?</strong>` }} />
      </p>
    

      <p key="p-22-17" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Binary heap` }} />
      </p>
    

      <p key="p-22-18" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Red-black tree` }} />
      </p>
    

      <p key="p-22-19" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Dynamic array` }} />
      </p>
    

      <p key="p-22-20" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">5. What does PriorityQueue.peek() return?</strong>` }} />
      </p>
    

      <p key="p-22-21" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The highest-priority element at the head, without removing it.` }} />
      </p>
    

      <p key="p-22-22" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The oldest inserted element.` }} />
      </p>
    

      <p key="p-22-23" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A randomly selected element.` }} />
      </p>
    

      <p key="p-22-24" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">6. Does volatile make counter++ atomic?</strong>` }} />
      </p>
    

      <p key="p-22-25" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Yes` }} />
      </p>
    

      <p key="p-22-26" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `No` }} />
      </p>
    

      <p key="p-22-27" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Only in HashMap` }} />
      </p>
    

      <p key="p-22-28" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">7. What causes StackOverflowError most commonly in a simple example?</strong>` }} />
      </p>
    

      <p key="p-22-29" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Deep or unbounded method recursion` }} />
      </p>
    

      <p key="p-22-30" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A full HashMap` }} />
      </p>
    

      <p key="p-22-31" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A large TreeSet` }} />
      </p>
    

      <p key="p-22-32" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">8. What is the primary responsibility of garbage collection?</strong>` }} />
      </p>
    

      <p key="p-22-33" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Close database connections` }} />
      </p>
    

      <p key="p-22-34" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reclaim memory occupied by unreachable objects` }} />
      </p>
    

      <p key="p-22-35" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Compile source code` }} />
      </p>
    

      <p key="p-22-36" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">9. What does JIT stand for?</strong>` }} />
      </p>
    

      <p key="p-22-37" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java Interface Tool` }} />
      </p>
    

      <p key="p-22-38" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Just-In-Time compilation` }} />
      </p>
    

      <p key="p-22-39" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Joined Instruction Table` }} />
      </p>
    

      <p key="p-22-40" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">10. Which tool is designed for Java microbenchmarking?</strong>` }} />
      </p>
    

      <p key="p-22-41" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `JMH` }} />
      </p>
    

      <p key="p-22-42" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap` }} />
      </p>
    

      <p key="p-22-43" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `javap` }} />
      </p>
    

      <p key="p-22-44" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Submit answers` }} />
      </p>
    

        <h4 key="h3-22-45" className="text-lg md:text-xl font-semibold text-orange-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Additional advanced interview questions</strong>` }} />
        </h4>
      

      <p key="p-22-46" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These are worth preparing spoken explanations for:` }} />
      </p>
    

        <ol key="ol-22-47" className="my-4 space-y-2 text-sm text-stone-700 list-decimal list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Why is HashMap not thread-safe?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `What happens internally when two keys have the same hash?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `What is the difference between HashMap and ConcurrentHashMap?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Why is LinkedList often slower than ArrayList in practice?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `How does a red-black tree remain balanced?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `How does a binary heap support efficient priority retrieval?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `What is the difference between heap memory and stack memory?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Can Java applications have memory leaks despite having garbage collection?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `What is the difference between volatile and synchronized?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `What is the happens-before relationship?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `How does class loading work?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Why is JIT compilation important?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `What is escape analysis?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Why should you use JMH instead of timing a small loop manually?` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `How would you investigate a Java application with high memory usage?` }} /></li>
        </ol>
      
      </div>
    )
  },
  {
    id: 23,
    title: "23. Part 8 — Final Revision Sheet",
    summary: "Quick-reference cheatsheets for Collections, JVM/Memory, Performance Engineering, and checklist of 17 core engineering competencies.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-23-0" className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-10 mb-4 tracking-tight border-b border-stone-200 pb-3">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">PART 8 — FINAL REVISION SHEET</strong>` }} />
        </h2>
      

        <h3 key="h2-23-1" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Collections</strong>` }} />
        </h3>
      

          <div key="table-23-2" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Concept</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Key point to remember</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ArrayList</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Dynamic array, fast indexed access</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">LinkedList</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Doubly linked nodes</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">HashMap</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Hash table and collision handling</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">TreeMap</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Sorted keys, red-black tree</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">TreeSet</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Unique sorted elements</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">PriorityQueue</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Binary heap</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">ConcurrentHashMap</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Concurrent key-value access</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">CopyOnWriteArrayList</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Read-heavy concurrent list</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">BlockingQueue</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Producer-consumer coordination</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h3 key="h2-23-3" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">JVM and memory</strong>` }} />
        </h3>
      

          <div key="table-23-4" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Concept</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Key point to remember</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Stack</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Per-thread method frames</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Heap</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Shared area for objects and arrays</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Garbage Collection</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Reclaims unreachable objects</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">JVM</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Executes bytecode</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Class Loader</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Loads classes</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">JIT</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Compiles hot code into native instructions</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">JMM</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Defines thread-memory interaction</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Volatile</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Visibility and ordering</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Synchronized</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Mutual exclusion and visibility</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h3 key="h2-23-5" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">Performance engineering</strong>` }} />
        </h3>
      

          <div key="table-23-6" className="my-6 overflow-x-auto rounded-xl border border-[#e7e3da] bg-stone-50">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-semibold font-mono">
                  <th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Concept</th><th className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Key point to remember</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100/60 text-stone-700">
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Profiling</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Finds real bottlenecks</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">JFR</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Records JVM runtime events</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">JMH</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Reliable Java microbenchmarking</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Object allocation</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Creation of objects and arrays</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Escape analysis</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Helps the JVM optimize object usage</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Big-O</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Describes growth in resource usage</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Cache locality</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Affects real execution speed</td>
                  </tr>
                
                  <tr className="hover:bg-stone-100 transition-colors">
                    <td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Time-space trade-off</td><td className="p-3.5 border-r border-[#e7e3da] last:border-r-0">Faster algorithms may use more memory</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        

        <h3 key="h2-23-7" className="text-xl md:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">What you should be able to do after Module 22</strong>` }} />
        </h3>
      

        <ul key="ul-23-8" className="my-4 space-y-2 text-sm text-stone-700 list-disc list-inside">
          <li><span dangerouslySetInnerHTML={{ __html: `Explain the Java Collections Framework hierarchy.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Describe how ArrayList grows and shifts elements.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Explain LinkedList node connections and traversal.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Explain HashMap hashing, collisions, resizing, and treeification.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Explain the importance of <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">hashCode()</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 text-orange-300 font-mono text-xs border border-stone-200/60">equals()</code>.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Compare HashMap, TreeMap, and ConcurrentHashMap.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Explain how PriorityQueue uses a binary heap.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Choose the right collection for a real application.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Explain visibility, atomicity, ordering, and happens-before.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Describe stack and heap memory.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Explain reachability and garbage collection.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Describe JVM architecture and the class-loading lifecycle.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Explain JIT compilation and common optimizations.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Use JVM diagnostic tools and understand profiling basics.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Identify inefficient object allocation and algorithm choices.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Compare Big-O complexity with practical performance.` }} /></li><li><span dangerouslySetInnerHTML={{ __html: `Optimize Java programs based on measurements.` }} /></li>
        </ul>
      

      <p key="p-23-9" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `<strong className="font-bold text-stone-900">The central lesson of this module:</strong> Knowing Java syntax helps you write programs. Understanding collections, JVM internals, and performance engineering helps you build applications that remain efficient and reliable as they grow.` }} />
      </p>
    

      <p key="p-23-10" className="my-3 text-sm md:text-base text-stone-700 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For the next learning step, a useful companion would be a <strong className="font-bold text-stone-900">Module 22 hands-on coding and interview practice set</strong> with HashMap internals, concurrent collections, JVM memory experiments, and performance-analysis problems.` }} />
      </p>
    
      </div>
    )
  },
];
