import React from "react";

export const JAVA_LINKED_LISTS_SECTIONS = [
  {
    id: 0,
    title: "Module 9: Curriculum Overview & Objectives",
    category: "Course Roadmap · Objectives",
    anchor: "overview",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            1. Learning Objectives
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">By completing this module, you should be able to:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Understand linked-list fundamentals and how nodes are connected.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Understand references in Java and how they represent links between nodes.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Implement singly linked lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Implement doubly linked lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Implement circular linked lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Perform insertion at the head, tail, and a specified index.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Perform deletion operations safely.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Search for elements and traverse a linked list.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">Reverse a linked list iteratively and recursively.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">10.</span>
            <div className="flex-1">Find the middle node using slow and fast pointers.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">11.</span>
            <div className="flex-1">Detect cycles using Floyd's cycle detection algorithm.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">12.</span>
            <div className="flex-1">Find the starting node of a cycle.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">13.</span>
            <div className="flex-1">Merge two sorted linked lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">14.</span>
            <div className="flex-1">Remove duplicate elements.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">15.</span>
            <div className="flex-1">Find the intersection of two linked lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">16.</span>
            <div className="flex-1">Implement recursive linked-list operations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">17.</span>
            <div className="flex-1">Build linked-list implementations from scratch in Java.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">18.</span>
            <div className="flex-1">Compare linked lists with arrays and dynamic arrays.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">19.</span>
            <div className="flex-1">Analyze time and auxiliary-space complexity for linked-list operations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">20.</span>
            <div className="flex-1">Apply linked lists to common DSA interview problems.</div>
          </div>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 1,
    title: "Part 1: Linked List Fundamentals & Node Structure",
    category: "Part 1 · Foundational Paradigms",
    anchor: "part-1",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            2. What Is a Linked List?
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A <strong className="font-semibold text-stone-900">linked list</strong> is a linear data structure consisting of individual elements called nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Each node contains:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Data — the value stored in the node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">A reference — the connection to another node.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Unlike an array, linked-list nodes do not need to occupy consecutive memory locations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Each node maintains a reference to the next node, allowing the entire collection to be traversed.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.1 Example
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Consider a linked list containing:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">10, 20, 30, 40, 50</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Conceptually:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{` HEAD
  |
  v
+------+-----+    +------+-----+    +------+-----+
|  10  |  o------>|  20  |  o------>|  30  |  o----->
+------+-----+    +------+-----+    +------+-----+
                                      |
                                      v
                                  +------+-----+
                                  |  40  |  o----->
                                  +------+-----+
                                                  |
                                                  v
                                              +------+------+
                                              |  50  | null |
                                              +------+------+`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Each node connects to the next node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The first node is called the <strong className="font-semibold text-stone-900">head</strong>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The final node is called the <strong className="font-semibold text-stone-900">tail</strong>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">In a conventional singly linked list, the tail's next reference is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">null</code>.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.2 Why are linked lists needed?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Arrays are excellent when you need fast indexed access, but inserting or deleting elements in the middle may require shifting other elements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Linked lists offer a different arrangement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For example, suppose you have:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">10 → 20 → 30 → 40</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">You want to insert <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">25</code> between <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">20</code> and <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">30</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Conceptually, you change the references:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Before:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`20 → 30`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">After:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`20 → 25 → 30`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">You do not need to shift every subsequent node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The important requirement is that you must first have access to the relevant position or node.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.3 Important characteristics
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A linked list generally has these properties:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Dynamic size.</li>
            <li>Node-based storage.</li>
            <li>Sequential traversal.</li>
            <li>No direct constant-time indexed access.</li>
            <li>Insertion and deletion can be efficient when the required node or its predecessor is already known.</li>
            <li>Additional memory is needed for references.</li>
            <li>Nodes can be allocated independently.</li>
          </ul>
          <hr className="my-8 border-stone-200" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            3. Nodes and Pointers/References
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A linked list is constructed using nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A node is an object containing data and one or more references to other nodes.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.1 Basic node structure
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">In Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Node {
    int data;
    Node next;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This node contains:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">data</code>: the stored integer.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">next</code>: a reference to another Node object.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.2 Creating a node
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node first = new Node();

first.data = 10;
first.next = null;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">We can create the next node:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node second = new Node();

second.data = 20;
second.next = null;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Connect them:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`first.next = second;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Conceptually:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`first                         second
  |                              |
  v                              v
+------+-------+              +------+------+
|  10  |   o------------->    |  20  | null |
+------+-------+              +------+------+`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.3 Understanding references
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Java does not expose raw memory pointers or pointer arithmetic like C and C++.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Java variables holding objects contain references to those objects.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node first = new Node();
Node second = new Node();

first.next = second;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">next</code> field stores a reference to the object represented by <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">second</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This is how nodes are connected.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.4 Reference assignment
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node a = new Node();
Node b = new Node();

a.data = 10;
b.data = 20;

a.next = b;

Node c = a;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The variable <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c</code> does not create a new node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">It stores another reference to the same object referenced by <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Therefore:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`a ────┐
      ├────> Node(10)
c ────┘`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Changing the object's fields through either reference affects the same object.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.5 What happens when a reference becomes null?
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`a.next = null;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The node referenced by <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a</code> no longer points to its former successor.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If no other reachable references point to that successor or the nodes after it, those objects may become eligible for garbage collection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Java automatically manages memory through garbage collection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">You do not manually free linked-list nodes as you would in a manually managed memory environment.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.6 Understanding <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">head</code>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The head is the reference that allows us to access the first node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node head = new Node();

head.data = 10;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">To access the second node:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`head.next`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">To access the third node:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`head.next.next`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">To access the fourth node:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`head.next.next.next`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">In practice, we use traversal loops instead of writing long chains of <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">next</code> expressions.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.7 Traversing with references
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node current = head;

while (current != null) {

    System.out.println(current.data);

    current = current.next;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The variable <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">current</code> moves from one node to the next.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Importantly, assigning:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`current = current.next;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">does not move a node in memory. It changes which node the variable references.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 2,
    title: "Part 2: Singly, Doubly & Circular Linked Lists",
    category: "Part 2 · Linked Topologies",
    anchor: "part-2",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            4. Singly Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A singly linked list is a collection of nodes where each node contains:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Data.</li>
            <li>A reference to the next node.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The last node points to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">null</code>.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.1 Structure
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HEAD
 |
 v
[10 | next] → [20 | next] → [30 | next] → [40 | null]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.2 Characteristics
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Traversal is possible in the forward direction.</li>
            <li>Each node has one next reference.</li>
            <li>Uses less reference memory than a doubly linked list.</li>
            <li>Insertion at the head is efficient.</li>
            <li>Deletion at the head is efficient.</li>
            <li>Backward traversal is not directly possible.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.3 Node implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class Node {

    int data;

    Node next;

    Node(int data) {

        this.data = data;

        this.next = null;
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.4 Building a singly linked list manually
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class SimpleLinkedList {

    static class Node {

        int data;

        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    public static void main(String[] args) {

        Node first = new Node(10);

        Node second = new Node(20);

        Node third = new Node(30);

        first.next = second;

        second.next = third;

        Node head = first;

        Node current = head;

        while (current != null) {

            System.out.println(current.data);

            current = current.next;
        }
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10
20
30`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This is the basic structure on which more advanced linked-list operations are built.</p>
          <hr className="my-8 border-stone-200" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            5. Doubly Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A doubly linked list allows traversal in both directions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Each node contains:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Data.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">A reference to the previous node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">A reference to the next node.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.1 Structure
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`null ← [10] ⇄ [20] ⇄ [30] ⇄ [40] → null
        HEAD                         TAIL`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Every node knows:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Its successor.</li>
            <li>Its predecessor.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.2 Node structure in Java
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class DoublyNode {

    int data;

    DoublyNode prev;

    DoublyNode next;

    DoublyNode(int data) {

        this.data = data;

        this.prev = null;

        this.next = null;
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.3 Connecting two nodes
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`DoublyNode first = new DoublyNode(10);

DoublyNode second = new DoublyNode(20);

first.next = second;

second.prev = first;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Now the two nodes are connected in both directions.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.4 Advantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Supports forward traversal.</li>
            <li>Supports backward traversal.</li>
            <li>Deleting a known node can take O(1) time because its predecessor and successor are available.</li>
            <li>Convenient for implementing deque-like structures.</li>
            <li>Useful for browser navigation and undo/redo systems.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.5 Disadvantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Requires more memory per node.</li>
            <li>Insertion and deletion require updating more references.</li>
            <li>Implementation is more complex.</li>
            <li>Both forward and backward links must remain consistent.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.6 Important invariant
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For each pair of neighboring nodes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">current.next</code> is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">nextNode</code>, then:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">nextNode.prev == current</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This relationship must remain correct after every insertion or deletion.</p>
          <hr className="my-8 border-stone-200" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            6. Circular Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A circular linked list is a list in which the final node points back to the first node instead of pointing to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">null</code>.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.1 Circular singly linked list
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       ┌──────────────────────────────┐
       |                              |
       v                              |
HEAD → [10] → [20] → [30] → [40] ────┘`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The last node's next reference points back to the head.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.2 Circular doubly linked list
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A circular doubly linked list has connections in both directions.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       ┌─────────────────────────────┐
       v                             |
    [10] ⇄ [20] ⇄ [30] ⇄ [40]
     ^                             |
     └─────────────────────────────┘`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The first node's previous reference points to the last node, and the last node's next reference points to the first node.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.3 Advantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Traversal can start at any node and continue cyclically.</li>
            <li>Useful for round-robin scheduling.</li>
            <li>Useful for cyclic task processing.</li>
            <li>Useful in certain multiplayer turn systems.</li>
            <li>Can represent repeating sequences.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.4 Disadvantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Traversal must be controlled carefully.</li>
            <li>A careless loop can continue forever.</li>
            <li>There is no natural <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">null</code> endpoint in a non-empty circular list.</li>
            <li>Insertion and deletion require careful link management.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.5 Preventing infinite traversal
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">In a singly linked list, traversal often stops when:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`current == null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">In a circular linked list, this condition never occurs during a valid traversal.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Instead, remember the starting node:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node current = head;

if (head != null) {

    do {

        System.out.println(current.data);

        current = current.next;

    } while (current != head);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This visits each node once and stops when traversal returns to the starting node.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 3,
    title: "Part 3: Insertion Operations (Head, Tail & Index)",
    category: "Part 3 · Node Insertion",
    anchor: "part-3",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            7. Insertion at the Head
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Insertion at the head adds a new node before the existing first node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HEAD → 20 → 30 → 40 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Insert:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">10</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Steps:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Create a new node containing 10.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Point its next reference to the current head.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Update head to the new node.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Result:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HEAD → 10 → 20 → 30 → 40 → null`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void addFirst(int value) {

    Node newNode = new Node(value);

    newNode.next = head;

    head = newNode;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If a tail reference is maintained, update it when inserting into an empty list:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`if (tail == null) {
    tail = newNode;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(1).</p>
          <hr className="my-8 border-stone-200" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            8. Insertion at the Tail
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Insert:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">40</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Result:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → null`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Implementation when a tail reference is maintained
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void addLast(int value) {

    Node newNode = new Node(value);

    if (head == null) {

        head = newNode;

        tail = newNode;

        return;
    }

    tail.next = newNode;

    tail = newNode;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(1) when the list maintains a valid tail reference.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Without a tail reference
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If the list stores only the head, you must traverse to the final node.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void addLast(int value) {

    Node newNode = new Node(value);

    if (head == null) {

        head = newNode;

        return;
    }

    Node current = head;

    while (current.next != null) {

        current = current.next;
    }

    current.next = newNode;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity without a tail reference: O(n).</p>
          <hr className="my-8 border-stone-200" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            9. Insertion at a Specific Index
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 40 → 50`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Insert <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">30</code> at index 2.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Result:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → 50`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The algorithm must first reach the node at index 1.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Then:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Create the new node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Point the new node to the next node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Point the previous node to the new node.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void insertAt(
    int index,
    int value
) {

    if (index < 0 || index > size) {

        throw new IndexOutOfBoundsException();
    }

    if (index == 0) {

        addFirst(value);

        return;
    }

    if (index == size) {

        addLast(value);

        return;
    }

    Node current = head;

    for (int i = 0; i < index - 1; i++) {

        current = current.next;
    }

    Node newNode = new Node(value);

    newNode.next = current.next;

    current.next = newNode;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The reference changes after reaching the insertion location take O(1).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The traversal is what makes the full indexed operation O(n).</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 4,
    title: "Part 4: Deletion Operations (Head, Tail, Index & Value)",
    category: "Part 4 · Node Deletion",
    anchor: "part-4",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            10. Deletion at the Head
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HEAD → 10 → 20 → 30 → 40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Delete the first node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The new head becomes the second node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Result:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HEAD → 20 → 30 → 40`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void removeFirst() {

    if (head == null) {

        throw new IllegalStateException(
            "List is empty"
        );
    }

    head = head.next;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If a tail reference and size are maintained, also update them when the last node is removed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(1).</p>
          <hr className="my-8 border-stone-200" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            11. Deletion at the Tail
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For a singly linked list:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">To delete 40, the algorithm must reach 30, because 30's next reference must be changed to null.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void removeLast() {

    if (head == null) {

        throw new IllegalStateException(
            "List is empty"
        );
    }

    if (head.next == null) {

        head = null;

        tail = null;

        return;
    }

    Node current = head;

    while (current.next != tail) {

        current = current.next;
    }

    current.next = null;

    tail = current;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity for a singly linked list: O(n), even when a tail reference is maintained.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Why?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Because the tail reference tells us the final node, but we still need to find the node immediately before it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">In a doubly linked list with a tail reference, deleting the tail can be O(1).</p>
          <hr className="my-8 border-stone-200" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            12. Deletion at a Specific Index
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → 50`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Delete index 2.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The value 30 is removed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Result:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 40 → 50`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void removeAt(int index) {

    if (index < 0 || index >= size) {

        throw new IndexOutOfBoundsException();
    }

    if (index == 0) {

        removeFirst();

        return;
    }

    Node current = head;

    for (int i = 0; i < index - 1; i++) {

        current = current.next;
    }

    Node removed = current.next;

    current.next = removed.next;

    if (removed == tail) {

        tail = current;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.1 Deletion by value
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Another common operation is deleting the first node that contains a specified value.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Delete value <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">30</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Result:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The process:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Check whether the head contains the value.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Otherwise, traverse the list.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Find the predecessor of the matching node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Change the predecessor's next reference.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Update the tail if needed.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Update the size.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 5,
    title: "Part 5: Searching and Traversal",
    category: "Part 5 · Inspection & Length",
    anchor: "part-5",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            13. Traversing a Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Traversal means visiting every node in a linked list.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The traversal process visits:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Node 10.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Node 20.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Node 30.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Node 40.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Stops when the current reference becomes null.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void display() {

    Node current = head;

    while (current != null) {

        System.out.print(current.data + " ");

        current = current.next;
    }

    System.out.println();
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            14. Searching in a Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose we want to find value <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">30</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The algorithm checks each node from the head until it finds the target.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public int search(int target) {

    Node current = head;

    int index = 0;

    while (current != null) {

        if (current.data == target) {

            return index;
        }

        current = current.next;

        index++;
    }

    return -1;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For a list containing:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">10 → 20 → 30 → 40</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Searching for 30 returns:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Complexity:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Best case: O(1).</li>
            <li>Average case: O(n).</li>
            <li>Worst case: O(n).</li>
            <li>Auxiliary space: O(1).</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            15. Counting the Nodes
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A linked list may maintain a size variable, or it can calculate the length by traversing all nodes.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Traversal-based implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public int length() {

    int count = 0;

    Node current = head;

    while (current != null) {

        count++;

        current = current.next;
    }

    return count;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If the linked list maintains a size field and updates it correctly after every operation, reading the size is O(1).</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 6,
    title: "Part 6: Reversing a Linked List (Iterative & Recursive)",
    category: "Part 6 · Reversal Algorithms",
    anchor: "part-6",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            16. What Is Linked List Reversal?
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Reversing a linked list means changing the direction of its connections so the last node becomes the first node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Original:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HEAD
 |
 v
10 → 20 → 30 → 40 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Reversed:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HEAD
 |
 v
40 → 30 → 20 → 10 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This is one of the most frequently asked linked-list interview problems.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            17. Iterative Reversal
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The iterative approach uses three references:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">previous</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">current</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">next</code></li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Initially:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`previous = null
current  = head`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For each node:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Save the next node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Point the current node backward.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Move previous forward.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Move current forward.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.1 Step-by-step example
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Original:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Initial references:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`previous = null
current  = 10`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Step 1</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Save 20.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Point 10 to null.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → null

20 → 30 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Step 2</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Point 20 to 10.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`20 → 10 → null

30 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Step 3</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Point 30 to 20.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30 → 20 → 10 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Finally, update head to 30.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.2 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void reverse() {

    Node previous = null;

    Node current = head;

    tail = head;

    while (current != null) {

        Node next = current.next;

        current.next = previous;

        previous = current;

        current = next;
    }

    head = previous;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Complexity:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Time: O(n).</li>
            <li>Auxiliary space: O(1).</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This is generally the preferred approach for reversing a singly linked list when constant additional space is desired.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            18. Recursive Reversal
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A recursive solution reverses the smaller linked list first, then attaches the current node to the end of the reversed portion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Recursive calls continue until the final node:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`reverse(10)
    reverse(20)
        reverse(30)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The base case returns the final node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">During recursion unwinding, references are changed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For the relationship:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`20 → 30`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">we perform:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30.next = 20;
20.next = null;`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node reverseRecursive(Node head) {

    if (head == null || head.next == null) {

        return head;
    }

    Node newHead = reverseRecursive(head.next);

    head.next.next = head;

    head.next = null;

    return newHead;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(n) because of recursive call-stack frames.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The recursive version is useful for understanding recursion and pointer changes, but the iterative version is usually more memory-efficient for large lists.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Important edge cases
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Test reversal on:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>An empty list.</li>
            <li>A one-node list.</li>
            <li>A two-node list.</li>
            <li>A long list.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The empty and one-node cases should remain unchanged.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 7,
    title: "Part 7: Finding the Middle Node (Slow & Fast Pointers)",
    category: "Part 7 · Two-Pointer Pacing",
    anchor: "part-7",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            19. Middle of a Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Finding the middle node is another common linked-list problem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → 50`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Middle node:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">30</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A straightforward approach is:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Traverse the list once to count its nodes.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Traverse again to the middle position.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This requires O(n) time, but it uses two traversals.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A more elegant method uses <strong className="font-semibold text-stone-900">slow and fast pointers</strong>.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            20. Slow and Fast Pointer Technique
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Initialize two references:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`slow = head
fast = head`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Move them differently:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Slow advances one node per iteration.</li>
            <li>Fast advances two nodes per iteration.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">When fast reaches the end, slow is at the middle.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.1 Example with five nodes
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Original:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → 50`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Movement:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Iteration</th>
                  <th className="px-4 py-3">Slow</th>
                  <th className="px-4 py-3">Fast</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Initial</td>
                  <td className="px-4 py-2.5 text-stone-700">10</td>
                  <td className="px-4 py-2.5 text-stone-700">10</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                  <td className="px-4 py-2.5 text-stone-700">20</td>
                  <td className="px-4 py-2.5 text-stone-700">30</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                  <td className="px-4 py-2.5 text-stone-700">30</td>
                  <td className="px-4 py-2.5 text-stone-700">50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Fast cannot advance another two nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Slow is at 30.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.2 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node middleNode(Node head) {

    Node slow = head;

    Node fast = head;

    while (
        fast != null &&
        fast.next != null
    ) {

        slow = slow.next;

        fast = fast.next.next;
    }

    return slow;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Complexity:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Time: O(n).</li>
            <li>Auxiliary space: O(1).</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            20.3 What happens with an even number of nodes?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The same implementation returns:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">30</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This is the second middle node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If a problem requires the first middle node instead, the initialization can be adjusted:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node firstMiddleNode(Node head) {

    Node slow = head;

    Node fast =
        head == null ? null : head.next;

    while (
        fast != null &&
        fast.next != null
    ) {

        slow = slow.next;

        fast = fast.next.next;
    }

    return slow;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For the four-node list, this returns <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">20</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Always check whether an interview problem requests the first or second middle node.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 8,
    title: "Part 8: Floyd's Cycle Detection & Cycle Start",
    category: "Part 8 · Cycle Topology & Proof",
    anchor: "part-8",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            21. What Is a Linked List Cycle?
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A cycle occurs when a node's next reference eventually points back to a previously visited node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Normal linked list:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Linked list with a cycle:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40
          ^       |
          |_______|`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The traversal does not reach null.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Instead, it continues through the same nodes repeatedly.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            21.1 Why does cycle detection matter?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Cycles can cause:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Infinite traversal loops.</li>
            <li>Incorrect length calculations.</li>
            <li>Unexpected program behavior.</li>
            <li>Bugs in data structure operations.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Cycle detection is particularly important when working with linked structures and object graphs.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            22. Floyd's Cycle Detection Algorithm
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Floyd's algorithm is also called the <strong className="font-semibold text-stone-900">tortoise and hare algorithm</strong>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">It uses two references:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Slow pointer moves one step at a time.</li>
            <li>Fast pointer moves two steps at a time.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If no cycle exists, the fast pointer eventually becomes null.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If a cycle exists, fast and slow eventually meet.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            22.1 Why does it work?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Once both references enter the cycle, the fast pointer gains one node per iteration relative to slow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Because the cycle has a finite number of nodes, fast must eventually catch slow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The meeting point indicates that a cycle exists.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            23. Java Implementation — Detecting a Cycle
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static boolean hasCycle(Node head) {

    Node slow = head;

    Node fast = head;

    while (
        fast != null &&
        fast.next != null
    ) {

        slow = slow.next;

        fast = fast.next.next;

        if (slow == fast) {

            return true;
        }
    }

    return false;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Notice that the comparison uses:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`slow == fast`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This checks whether the two references point to the same physical node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Comparing only node values would be incorrect because different nodes may contain equal values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Complexity:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Time: O(n).</li>
            <li>Auxiliary space: O(1).</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            24. Detecting the Starting Node of a Cycle
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Detecting whether a cycle exists is not always enough.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Sometimes the problem asks us to find the exact node where the cycle begins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → 50
          ^         |
          |_________|`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The cycle starts at the node containing 30.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Floyd's algorithm can locate it.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            24.1 Algorithm
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Step 1:</strong> Run Floyd's cycle detection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Move:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Slow one step.</li>
            <li>Fast two steps.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Continue until both meet.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If fast reaches null, there is no cycle.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Step 2:</strong> Reset one pointer to the head.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Keep the other at the meeting point.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Step 3:</strong> Move both pointers one step at a time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Their next meeting point is the start of the cycle.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            24.2 Why does it work?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Let:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">μ</code> = distance from head to cycle start.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">λ</code> = length of the cycle.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">d</code> = distance moved by the slow pointer when the pointers meet.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Since the fast pointer moves twice as quickly, its distance is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2d</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">At the meeting point, the distance difference is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">2d - d = d</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The pointers occupy the same cycle position, so this difference is a whole-number multiple of the cycle length:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">d = kλ</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">After resetting one pointer to the head, the distance from the head to the cycle entry is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">μ</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The distance from the meeting point to the entry, moving forward around the cycle, is equivalent to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">μ</code> modulo <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">λ</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Therefore, moving both references one node at a time causes them to meet at the cycle entry.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            24.3 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node detectCycleStart(Node head) {

    Node slow = head;

    Node fast = head;

    // First phase: detect a meeting point.
    while (
        fast != null &&
        fast.next != null
    ) {

        slow = slow.next;

        fast = fast.next.next;

        if (slow == fast) {

            break;
        }
    }

    // No cycle exists.
    if (
        fast == null ||
        fast.next == null
    ) {

        return null;
    }

    // Second phase: locate the entry.
    Node first = head;

    Node second = slow;

    while (first != second) {

        first = first.next;

        second = second.next;
    }

    return first;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Complexity:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Time: O(n).</li>
            <li>Auxiliary space: O(1).</li>
          </ul>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 9,
    title: "Part 9: Merge Two Sorted Linked Lists",
    category: "Part 9 · Dummy Nodes & Relinking",
    anchor: "part-9",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            25. What Is Merging Two Sorted Linked Lists?
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose we have two individually sorted linked lists.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">List A:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 → 3 → 5 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">List B:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`2 → 4 → 6 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">We want to combine them into one sorted linked list.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 → 2 → 3 → 4 → 5 → 6 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">We do not need to sort the combined list from the beginning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">We can compare the front elements and attach the smaller one.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            26. Merge Algorithm
          </h2>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Create a temporary dummy node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Maintain a reference called <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">current</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Compare the first available nodes of both lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Attach the smaller node to <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">current.next</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Advance the reference associated with the selected node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Advance <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">current</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">When one list is exhausted, attach the remainder of the other list.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The dummy node simplifies handling the first insertion.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            27. Java Implementation
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node mergeTwoLists(
    Node list1,
    Node list2
) {

    Node dummy = new Node(0);

    Node current = dummy;

    while (
        list1 != null &&
        list2 != null
    ) {

        if (list1.data <= list2.data) {

            current.next = list1;

            list1 = list1.next;

        } else {

            current.next = list2;

            list2 = list2.next;
        }

        current = current.next;
    }

    // Attach whichever list still has nodes.
    if (list1 != null) {

        current.next = list1;

    } else {

        current.next = list2;
    }

    return dummy.next;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This implementation relinks existing nodes rather than allocating copies of every input element.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Assumptions:</strong> Both inputs are sorted in ascending order, acyclic, and do not share nodes.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            27.1 Complexity
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Let:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">m</code> = number of nodes in the first list.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n</code> = number of nodes in the second list.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Each node is examined and linked once.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(m + n)</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The dummy node is a fixed amount of additional memory.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            27.2 Important edge cases
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Both lists are empty.</li>
            <li>The first list is empty.</li>
            <li>The second list is empty.</li>
            <li>All values in the first list are smaller.</li>
            <li>All values in the second list are smaller.</li>
            <li>Both lists contain duplicates.</li>
            <li>One list contains only one node.</li>
          </ul>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 10,
    title: "Part 10: Removing Duplicates (Sorted & Unsorted)",
    category: "Part 10 · Deduplication & HashSets",
    anchor: "part-10",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            28. What Does Removing Duplicates Mean?
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose a linked list contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 20 → 30 → 30 → 40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">After removing duplicates:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">There are two important versions of this problem:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">The list is already sorted.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">The list is unsorted.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The solutions have different complexity.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            29. Remove Duplicates from a Sorted Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Because the list is sorted, duplicate values appear next to each other.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Only adjacent nodes need to be compared.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            29.1 Algorithm
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Start at the head.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Compare the current node with the next node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">If the values match, skip the next node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Otherwise, advance to the next node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Continue until the end.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            29.2 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node removeDuplicatesSorted(Node head) {

    Node current = head;

    while (
        current != null &&
        current.next != null
    ) {

        if (
            current.data ==
            current.next.data
        ) {

            current.next = current.next.next;

        } else {

            current = current.next;
        }
    }

    return head;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            30. Remove Duplicates from an Unsorted Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 10 → 30 → 20 → 40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Duplicates are not necessarily adjacent.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">One approach uses a <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">HashSet</code>.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The set stores values that have already appeared.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.HashSet;
import java.util.Set;

public static Node removeDuplicatesUnsorted(Node head) {

    Set<Integer> seen = new HashSet<>();

    Node current = head;

    Node previous = null;

    while (current != null) {

        if (seen.contains(current.data)) {

            previous.next = current.next;

        } else {

            seen.add(current.data);

            previous = current;
        }

        current = current.next;
    }

    return head;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n) expected under typical hash-set performance assumptions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(n).</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            30.1 Alternative without extra memory
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use two pointers:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>An outer pointer selects the current value.</li>
            <li>An inner pointer removes later nodes containing the same value.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This requires O(n²) time but O(1) auxiliary space.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This is an example of a time-space trade-off.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 11,
    title: "Part 11: Intersection of Two Linked Lists",
    category: "Part 11 · Two-Pointer Switching Proof",
    anchor: "part-11",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            31. What Is the Intersection of Two Linked Lists?
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Two linked lists intersect when they share one or more actual nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This is an important distinction:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Having the same value does not mean two lists intersect.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">They must contain references to the same physical node object.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Example of two intersecting lists:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List A:

10 → 20 ──┐
           |
           v
           30 → 40 → 50 → null
           ^
           |
List B:    |
5 ─────────┘`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Both lists share the node containing 30 and everything after it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The intersection node is the node containing 30.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            32. Two-Pointer Intersection Algorithm
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use two references:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">pointerA</code> starts at the head of list A.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">pointerB</code> starts at the head of list B.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Move both one step at a time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">When one reaches null:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Redirect it to the other list's head.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If the lists intersect, the pointers will eventually meet at the intersection node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If they do not intersect, both will eventually become null.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.1 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node getIntersectionNode(
    Node headA,
    Node headB
) {

    Node pointerA = headA;

    Node pointerB = headB;

    while (pointerA != pointerB) {

        pointerA =
            pointerA == null
            ? headB
            : pointerA.next;

        pointerB =
            pointerB == null
            ? headA
            : pointerB.next;
    }

    return pointerA;
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.2 Why does this work?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Suppose:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>List A has length <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a</code>.</li>
            <li>List B has length <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">b</code>.</li>
            <li>Their shared suffix has length <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">c</code>.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The first pointer travels through:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a + (b - c)</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">nodes before reaching the intersection after switching lists.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The second pointer travels through:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">b + (a - c)</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">These distances are equal:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">a + b - c</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Therefore, both pointers reach the shared node at the same time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If no intersection exists, both pointers traverse both lists and finish at null.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.3 Complexity
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(m + n)</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(1)</code></p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.4 Important test
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The following lists do not intersect:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`List A: 10 → 20 → 30

List B: 40 → 20 → 30`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Even though both contain 20 and 30, these are different node objects.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">An intersection check must compare references using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">==</code>, not node values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Assumption:</strong> This standard algorithm is for acyclic singly linked lists.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 12,
    title: "Part 12: Recursive Linked List Operations",
    category: "Part 12 · Call Stack Traversal",
    anchor: "part-12",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            33. Why Use Recursion with Linked Lists?
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Linked lists naturally support recursive algorithms because every node connects to a smaller remaining list.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">You can think of the list as:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node 10 + remaining list

Node 20 + remaining list

Node 30 + remaining list

Node 40 + empty list`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This structure makes recursive traversal, counting, searching, and reversal convenient to express.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            34. Recursive Traversal
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static void printRecursive(Node head) {

    if (head == null) {

        return;
    }

    System.out.println(head.data);

    printRecursive(head.next);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The base case occurs when the node is null.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The recursive call processes the remaining list.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary stack space: O(n).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            35. Recursive Length Calculation
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static int lengthRecursive(Node head) {

    if (head == null) {

        return 0;
    }

    return 1 + lengthRecursive(head.next);
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">10 → 20 → 30</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The recursive calculation is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`length(10)
= 1 + length(20)

= 1 + 1 + length(30)

= 1 + 1 + 1 + length(null)

= 3`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(n).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            36. Recursive Search
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static boolean searchRecursive(
    Node head,
    int target
) {

    if (head == null) {

        return false;
    }

    if (head.data == target) {

        return true;
    }

    return searchRecursive(
        head.next,
        target
    );
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(n) in the worst case.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            36.1 Recursion versus iteration
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Property</th>
                  <th className="px-4 py-3">Recursive</th>
                  <th className="px-4 py-3">Iterative</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Implementation style</td>
                  <td className="px-4 py-2.5 text-stone-700">Method calls</td>
                  <td className="px-4 py-2.5 text-stone-700">Loops</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Time for traversal</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Auxiliary space</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n) stack</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Readability</td>
                  <td className="px-4 py-2.5 text-stone-700">Often concise</td>
                  <td className="px-4 py-2.5 text-stone-700">Often more memory-efficient</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Large lists</td>
                  <td className="px-4 py-2.5 text-stone-700">Stack-overflow risk</td>
                  <td className="px-4 py-2.5 text-stone-700">Generally safer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Java does not guarantee tail-call optimization. Even tail-recursive linked-list methods can consume one stack frame per recursive call.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 13,
    title: "Part 13: Complete Generic Singly Linked List",
    category: "Part 13 · Production Implementation",
    anchor: "part-13",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            37. Building a Generic Singly Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A generic linked list can store different reference types rather than only integers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For example:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">SinglyLinkedList&lt;Integer&gt;</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">SinglyLinkedList&lt;String&gt;</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">SinglyLinkedList&lt;Double&gt;</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">SinglyLinkedList&lt;Student&gt;</code></li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Java generics make the implementation reusable and type-safe.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.1 Complete implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Objects;
import java.util.NoSuchElementException;

public class SinglyLinkedList<T> {

    private static class Node<T> {

        T data;

        Node<T> next;

        Node(T data) {

            this.data = data;

            this.next = null;
        }
    }

    private Node<T> head;

    private Node<T> tail;

    private int size;

    public int size() {

        return size;
    }

    public boolean isEmpty() {

        return size == 0;
    }

    // Insert at the beginning.
    public void addFirst(T value) {

        Node<T> newNode = new Node<>(value);

        newNode.next = head;

        head = newNode;

        if (tail == null) {

            tail = newNode;
        }

        size++;
    }

    // Insert at the end.
    public void addLast(T value) {

        Node<T> newNode = new Node<>(value);

        if (head == null) {

            head = newNode;

            tail = newNode;

        } else {

            tail.next = newNode;

            tail = newNode;
        }

        size++;
    }

    // Insert at a specified index.
    // Valid insertion indices: 0 through size.
    public void insertAt(int index, T value) {

        if (index < 0 || index > size) {

            throw new IndexOutOfBoundsException(
                "Invalid insertion index: " + index
            );
        }

        if (index == 0) {

            addFirst(value);

            return;
        }

        if (index == size) {

            addLast(value);

            return;
        }

        Node<T> previous = nodeAt(index - 1);

        Node<T> newNode = new Node<>(value);

        newNode.next = previous.next;

        previous.next = newNode;

        size++;
    }

    // Get the value at an index.
    public T get(int index) {

        checkElementIndex(index);

        return nodeAt(index).data;
    }

    // Remove the first element.
    public T removeFirst() {

        if (head == null) {

            throw new NoSuchElementException(
                "List is empty"
            );
        }

        T removedValue = head.data;

        head = head.next;

        size--;

        if (head == null) {

            tail = null;
        }

        return removedValue;
    }

    // Remove the last element.
    public T removeLast() {

        if (head == null) {

            throw new NoSuchElementException(
                "List is empty"
            );
        }

        if (head == tail) {

            T removedValue = head.data;

            head = null;

            tail = null;

            size = 0;

            return removedValue;
        }

        Node<T> previous = head;

        while (previous.next != tail) {

            previous = previous.next;
        }

        T removedValue = tail.data;

        previous.next = null;

        tail = previous;

        size--;

        return removedValue;
    }

    // Remove an element at an index.
    public T removeAt(int index) {

        checkElementIndex(index);

        if (index == 0) {

            return removeFirst();
        }

        Node<T> previous = nodeAt(index - 1);

        Node<T> removed = previous.next;

        previous.next = removed.next;

        if (removed == tail) {

            tail = previous;
        }

        size--;

        return removed.data;
    }

    // Search for the first occurrence.
    public int indexOf(T value) {

        Node<T> current = head;

        int index = 0;

        while (current != null) {

            if (Objects.equals(current.data, value)) {

                return index;
            }

            current = current.next;

            index++;
        }

        return -1;
    }

    public boolean contains(T value) {

        return indexOf(value) != -1;
    }

    // Reverse the list iteratively.
    public void reverse() {

        Node<T> previous = null;

        Node<T> current = head;

        tail = head;

        while (current != null) {

            Node<T> next = current.next;

            current.next = previous;

            previous = current;

            current = next;
        }

        head = previous;
    }

    // Convert the list to a readable string.
    @Override
    public String toString() {

        StringBuilder result = new StringBuilder();

        result.append("[");

        Node<T> current = head;

        while (current != null) {

            result.append(current.data);

            if (current.next != null) {

                result.append(" -> ");
            }

            current = current.next;
        }

        result.append("]");

        return result.toString();
    }

    // Traverse to an index.
    private Node<T> nodeAt(int index) {

        Node<T> current = head;

        for (int i = 0; i < index; i++) {

            current = current.next;
        }

        return current;
    }

    private void checkElementIndex(int index) {

        if (index < 0 || index >= size) {

            throw new IndexOutOfBoundsException(
                "Invalid element index: " + index
            );
        }
    }

    public static void main(String[] args) {

        SinglyLinkedList<Integer> list =
            new SinglyLinkedList<>();

        list.addLast(10);

        list.addLast(20);

        list.addLast(30);

        System.out.println("Original: " + list);

        list.addFirst(5);

        System.out.println("After addFirst: " + list);

        list.insertAt(2, 15);

        System.out.println("After insertAt: " + list);

        System.out.println("Element at 2: " + list.get(2));

        System.out.println("Index of 30: " + list.indexOf(30));

        list.removeFirst();

        System.out.println("After removeFirst: " + list);

        list.removeLast();

        System.out.println("After removeLast: " + list);

        list.removeAt(1);

        System.out.println("After removeAt: " + list);

        list.reverse();

        System.out.println("After reverse: " + list);

        System.out.println("Size: " + list.size());
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.2 Expected output
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Original: [10 -> 20 -> 30]
After addFirst: [5 -> 10 -> 20 -> 30]
After insertAt: [5 -> 10 -> 15 -> 20 -> 30]
Element at 2: 15
Index of 30: 4
After removeFirst: [10 -> 15 -> 20 -> 30]
After removeLast: [10 -> 15 -> 20]
After removeAt: [10 -> 20]
After reverse: [20 -> 10]
Size: 2`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.3 Why maintain both head and tail?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Maintaining a tail reference makes adding a node at the end efficient.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Without tail:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Add at head: O(1).</li>
            <li>Add at tail: O(n).</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">With tail:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Add at head: O(1).</li>
            <li>Add at tail: O(1).</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The tail reference must always be updated after operations that change the final node.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.4 Important invariants
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A correct implementation should maintain:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">If the list is empty, both head and tail are null.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">If the list contains one node, head and tail refer to that same node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">If the list is non-empty, <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">tail.next</code> is null.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">The number of reachable nodes equals <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">size</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Every successful insertion increases size by one.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Every successful deletion decreases size by one.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">These invariants help prevent subtle linked-list bugs.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 14,
    title: "Part 14: Generic Doubly Linked List",
    category: "Part 14 · Bidirectional Navigation",
    anchor: "part-14",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            38. Generic Doubly Linked List in Java
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The following implementation supports insertion, deletion, indexed access, and traversal.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.NoSuchElementException;

public class DoublyLinkedList<T> {

    private static class Node<T> {

        T data;

        Node<T> prev;

        Node<T> next;

        Node(T data) {

            this.data = data;
        }
    }

    private Node<T> head;

    private Node<T> tail;

    private int size;

    public int size() {

        return size;
    }

    public boolean isEmpty() {

        return size == 0;
    }

    public void addFirst(T value) {

        Node<T> node = new Node<>(value);

        if (head == null) {

            head = node;

            tail = node;

        } else {

            node.next = head;

            head.prev = node;

            head = node;
        }

        size++;
    }

    public void addLast(T value) {

        Node<T> node = new Node<>(value);

        if (tail == null) {

            head = node;

            tail = node;

        } else {

            node.prev = tail;

            tail.next = node;

            tail = node;
        }

        size++;
    }

    public void insertAt(int index, T value) {

        if (index < 0 || index > size) {

            throw new IndexOutOfBoundsException();
        }

        if (index == 0) {

            addFirst(value);

            return;
        }

        if (index == size) {

            addLast(value);

            return;
        }

        Node<T> successor = nodeAt(index);

        Node<T> predecessor = successor.prev;

        Node<T> node = new Node<>(value);

        node.prev = predecessor;

        node.next = successor;

        predecessor.next = node;

        successor.prev = node;

        size++;
    }

    public T get(int index) {

        checkElementIndex(index);

        return nodeAt(index).data;
    }

    public T removeFirst() {

        if (head == null) {

            throw new NoSuchElementException(
                "List is empty"
            );
        }

        T value = head.data;

        head = head.next;

        size--;

        if (head == null) {

            tail = null;

        } else {

            head.prev = null;
        }

        return value;
    }

    public T removeLast() {

        if (tail == null) {

            throw new NoSuchElementException(
                "List is empty"
            );
        }

        T value = tail.data;

        tail = tail.prev;

        size--;

        if (tail == null) {

            head = null;

        } else {

            tail.next = null;
        }

        return value;
    }

    public T removeAt(int index) {

        checkElementIndex(index);

        if (index == 0) {

            return removeFirst();
        }

        if (index == size - 1) {

            return removeLast();
        }

        Node<T> target = nodeAt(index);

        target.prev.next = target.next;

        target.next.prev = target.prev;

        size--;

        return target.data;
    }

    public void displayForward() {

        Node<T> current = head;

        while (current != null) {

            System.out.print(current.data + " ");

            current = current.next;
        }

        System.out.println();
    }

    public void displayBackward() {

        Node<T> current = tail;

        while (current != null) {

            System.out.print(current.data + " ");

            current = current.prev;
        }

        System.out.println();
    }

    private Node<T> nodeAt(int index) {

        if (index < size / 2) {

            Node<T> current = head;

            for (int i = 0; i < index; i++) {

                current = current.next;
            }

            return current;
        }

        Node<T> current = tail;

        for (
            int i = size - 1;
            i > index;
            i--
        ) {

            current = current.prev;
        }

        return current;
    }

    private void checkElementIndex(int index) {

        if (index < 0 || index >= size) {

            throw new IndexOutOfBoundsException();
        }
    }

    public static void main(String[] args) {

        DoublyLinkedList<Integer> list =
            new DoublyLinkedList<>();

        list.addLast(10);

        list.addLast(20);

        list.addLast(30);

        list.addFirst(5);

        list.insertAt(2, 15);

        System.out.print("Forward: ");

        list.displayForward();

        System.out.print("Backward: ");

        list.displayBackward();

        list.removeFirst();

        list.removeLast();

        list.removeAt(1);

        System.out.print("After deletion: ");

        list.displayForward();
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Expected output
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Forward: 5 10 15 20 30
Backward: 30 20 15 10 5
After deletion: 10 20`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            38.1 Why is indexed access still O(n)?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Although a doubly linked list can move in both directions, it does not have direct indexed access.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The implementation starts from the head or tail, whichever is closer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This reduces the amount of traversal in practice but does not change the asymptotic complexity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Worst-case indexed access remains O(n).</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 15,
    title: "Part 15: Generic Circular Singly Linked List",
    category: "Part 15 · Cyclic Topology",
    anchor: "part-15",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            39. Generic Circular Singly Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">In this implementation, the tail reference is maintained, and the head is accessed using:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">tail.next</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For a non-empty list:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`head = tail.next`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The tail always points to the final node, whose next reference points back to the head.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            39.1 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.Objects;
import java.util.NoSuchElementException;

public class CircularSinglyLinkedList<T> {

    private static class Node<T> {

        T data;

        Node<T> next;

        Node(T data) {

            this.data = data;
        }
    }

    private Node<T> tail;

    private int size;

    public int size() {

        return size;
    }

    public boolean isEmpty() {

        return tail == null;
    }

    public void addFirst(T value) {

        Node<T> node = new Node<>(value);

        if (tail == null) {

            node.next = node;

            tail = node;

        } else {

            node.next = tail.next;

            tail.next = node;
        }

        size++;
    }

    public void addLast(T value) {

        Node<T> node = new Node<>(value);

        if (tail == null) {

            node.next = node;

            tail = node;

        } else {

            node.next = tail.next;

            tail.next = node;

            tail = node;
        }

        size++;
    }

    public T removeFirst() {

        if (tail == null) {

            throw new NoSuchElementException(
                "List is empty"
            );
        }

        Node<T> head = tail.next;

        T value = head.data;

        if (head == tail) {

            tail = null;

        } else {

            tail.next = head.next;
        }

        size--;

        return value;
    }

    public boolean removeValue(T value) {

        if (tail == null) {

            return false;
        }

        Node<T> previous = tail;

        Node<T> current = tail.next;

        for (int i = 0; i < size; i++) {

            if (Objects.equals(current.data, value)) {

                if (current == tail && current == tail.next) {

                    tail = null;

                } else {

                    previous.next = current.next;

                    if (current == tail) {

                        tail = previous;
                    }
                }

                size--;

                return true;
            }

            previous = current;

            current = current.next;
        }

        return false;
    }

    public boolean contains(T value) {

        if (tail == null) {

            return false;
        }

        Node<T> current = tail.next;

        for (int i = 0; i < size; i++) {

            if (Objects.equals(current.data, value)) {

                return true;
            }

            current = current.next;
        }

        return false;
    }

    public void display() {

        if (tail == null) {

            System.out.println("[]");

            return;
        }

        Node<T> current = tail.next;

        for (int i = 0; i < size; i++) {

            System.out.print(current.data);

            current = current.next;

            if (i < size - 1) {

                System.out.print(" -> ");
            }
        }

        System.out.println(" -> (back to head)");
    }

    public static void main(String[] args) {

        CircularSinglyLinkedList<Integer> list =
            new CircularSinglyLinkedList<>();

        list.addLast(10);

        list.addLast(20);

        list.addLast(30);

        list.addFirst(5);

        list.display();

        list.removeFirst();

        list.display();

        list.removeValue(20);

        list.display();
    }
}`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Expected output
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`5 -> 10 -> 20 -> 30 -> (back to head)
10 -> 20 -> 30 -> (back to head)
10 -> 30 -> (back to head)`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            39.2 Circular list invariants
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For a non-empty list:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">tail</code> must not be null.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">tail.next</code> must refer to the head.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Following exactly <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">size</code> next references returns to the head.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">The size must equal the number of reachable nodes.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Removing the final node must set tail to null.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">These conditions are essential for avoiding infinite loops and broken circular links.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 16,
    title: "Part 16: Common Linked List Interview Algorithms",
    category: "Part 16 · Reusable Utility Suite",
    anchor: "part-16",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            40. A Reusable Node Class for Interview Problems
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For the following examples, use this node structure:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static class Node {

    int data;

    Node next;

    Node(int data) {

        this.data = data;
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">These algorithm methods assume a singly linked list.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            41. Reverse a Linked List Iteratively
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node reverseList(Node head) {

    Node previous = null;

    Node current = head;

    while (current != null) {

        Node next = current.next;

        current.next = previous;

        previous = current;

        current = next;
    }

    return previous;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            42. Find the Middle Node
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node findMiddle(Node head) {

    Node slow = head;

    Node fast = head;

    while (
        fast != null &&
        fast.next != null
    ) {

        slow = slow.next;

        fast = fast.next.next;
    }

    return slow;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(1).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For even-length lists, this returns the second middle.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            43. Detect a Cycle
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static boolean hasCycle(Node head) {

    Node slow = head;

    Node fast = head;

    while (
        fast != null &&
        fast.next != null
    ) {

        slow = slow.next;

        fast = fast.next.next;

        if (slow == fast) {

            return true;
        }
    }

    return false;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            44. Detect the Start of a Cycle
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node cycleStart(Node head) {

    Node slow = head;

    Node fast = head;

    while (
        fast != null &&
        fast.next != null
    ) {

        slow = slow.next;

        fast = fast.next.next;

        if (slow == fast) {

            Node first = head;

            while (first != slow) {

                first = first.next;

                slow = slow.next;
            }

            return first;
        }
    }

    return null;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            45. Merge Two Sorted Lists
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node mergeSorted(
    Node first,
    Node second
) {

    Node dummy = new Node(0);

    Node current = dummy;

    while (
        first != null &&
        second != null
    ) {

        if (first.data <= second.data) {

            current.next = first;

            first = first.next;

        } else {

            current.next = second;

            second = second.next;
        }

        current = current.next;
    }

    current.next =
        first != null ? first : second;

    return dummy.next;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time: O(m + n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            46. Remove Duplicates from a Sorted List
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node removeDuplicates(Node head) {

    Node current = head;

    while (
        current != null &&
        current.next != null
    ) {

        if (
            current.data ==
            current.next.data
        ) {

            current.next = current.next.next;

        } else {

            current = current.next;
        }
    }

    return head;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            47. Find the Intersection Node
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static Node intersection(
    Node headA,
    Node headB
) {

    Node a = headA;

    Node b = headB;

    while (a != b) {

        a = (a == null) ? headB : a.next;

        b = (b == null) ? headA : b.next;
    }

    return a;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Time: O(m + n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(1).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This checks identity, not equality of stored values.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 17,
    title: "Part 17: Linked List vs Array (Memory & Cache Locality)",
    category: "Part 17 · Systems Architecture Comparison",
    anchor: "part-17",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            48. Arrays
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">An array stores elements in indexed positions within an array object.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For a typical fixed-length Java array:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = {
    10, 20, 30, 40, 50
};`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">You can directly access a value:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`System.out.println(numbers[3]);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`40`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Array indexing provides constant-time access under the usual RAM model.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            49. Linked Lists
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A linked list stores values in nodes connected by references.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">To reach the fourth node, it must follow the chain from the head unless it already has a reference to that node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This takes linear time in the general case.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            50. Detailed Comparison
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Array</th>
                  <th className="px-4 py-3">Singly linked list</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Storage</td>
                  <td className="px-4 py-2.5 text-stone-700">Array elements in one array object</td>
                  <td className="px-4 py-2.5 text-stone-700">Separately allocated node objects</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Indexed access</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Search</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insert at beginning</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n) due to shifting</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insert at tail</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1) amortized for dynamic array; O(1) if capacity available</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1) with tail reference</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Delete at beginning</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n) due to shifting</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Delete at end</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1) for a standard array after removing the final logical element</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Middle insertion</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n) to find position; O(1) to relink</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Memory overhead</td>
                  <td className="px-4 py-2.5 text-stone-700">Usually lower</td>
                  <td className="px-4 py-2.5 text-stone-700">Additional references and node-object overhead</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Cache locality</td>
                  <td className="px-4 py-2.5 text-stone-700">Usually good</td>
                  <td className="px-4 py-2.5 text-stone-700">Often poorer</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Resizing</td>
                  <td className="px-4 py-2.5 text-stone-700">Dynamic arrays may need reallocation</td>
                  <td className="px-4 py-2.5 text-stone-700">Nodes are added individually</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Backward traversal</td>
                  <td className="px-4 py-2.5 text-stone-700">Possible through indices</td>
                  <td className="px-4 py-2.5 text-stone-700">Not directly possible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            50.1 Memory considerations
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Arrays usually have good cache locality because elements are laid out within the same array object.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Linked-list nodes are separate objects and may be located in different parts of memory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Each linked-list node also needs memory for its reference field or fields, in addition to the stored data and object overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This means linked lists can consume more actual memory than arrays holding the same logical number of values.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            50.2 When should you use an array?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use an array or dynamic array when:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Indexed access is important.</li>
            <li>You frequently read elements by position.</li>
            <li>You process data sequentially.</li>
            <li>Memory efficiency is important.</li>
            <li>Cache-friendly traversal matters.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            50.3 When should you use a linked list?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A linked list can be useful when:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Insertions and deletions at known node positions are frequent.</li>
            <li>You already have references to the nodes being modified.</li>
            <li>Sequential traversal is sufficient.</li>
            <li>You need deque-like operations at both ends and choose a doubly linked implementation.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            50.4 Important real-world point
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A linked list is not automatically faster than an array for insertion or deletion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For example:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Finding the middle of a linked list requires O(n) traversal.</li>
            <li>Inserting there after finding it still takes O(n) overall.</li>
            <li>Inserting into an array also may require O(n) shifting.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The advantage of a linked list is particularly clear when the required node or its predecessor is already known.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 18,
    title: "Part 18: Java's Built-In java.util.LinkedList",
    category: "Part 18 · Collections Framework & Deque",
    anchor: "part-18",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            51. What Is <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.util.LinkedList</code>?
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Java provides a ready-made linked-list implementation through:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.util.LinkedList</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">It implements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">List</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Deque</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">Queue</code></li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">It is implemented as a doubly linked list.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            51.1 Basic example
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.LinkedList;

public class BuiltInLinkedList {

    public static void main(String[] args) {

        LinkedList<Integer> list =
            new LinkedList<>();

        list.add(10);

        list.add(20);

        list.add(30);

        list.addFirst(5);

        list.addLast(40);

        System.out.println(list);

        list.removeFirst();

        list.removeLast();

        System.out.println(list);

        System.out.println(list.peekFirst());

        System.out.println(list.peekLast());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[5, 10, 20, 30, 40]
[10, 20, 30]
10
30`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            51.2 Common methods
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">addFirst(value)</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Insert at the beginning</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">addLast(value)</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Insert at the end</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">removeFirst()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Remove the first element</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">removeLast()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Remove the last element</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getFirst()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Read the first element</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">getLast()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Read the last element</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">peekFirst()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Read first element or return null</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">peekLast()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Read last element or return null</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">offer(value)</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Add an element as a queue operation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">poll()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Remove and return the first element, or return null</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">size()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Return the number of elements</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">isEmpty()</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Check whether the list is empty</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">contains(value)</code></td>
                  <td className="px-4 py-2.5 text-stone-700">Search for a value</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            51.3 Difference between remove and poll
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">removeFirst()</code> throws <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">NoSuchElementException</code> if the list is empty.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">pollFirst()</code> returns null if the list is empty.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This distinction matters when handling empty collections.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            51.4 Why implement a linked list from scratch if Java provides one?
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Because implementing it teaches:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>References.</li>
            <li>Object relationships.</li>
            <li>Pointer manipulation.</li>
            <li>Insertion and deletion.</li>
            <li>Memory behavior.</li>
            <li>Invariants.</li>
            <li>Edge-case handling.</li>
            <li>Complexity analysis.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">In normal application development, use the standard library unless there is a specific reason to build a custom data structure.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 19,
    title: "Part 19: Complete Linked-List Complexity Matrix",
    category: "Part 19 · Theoretical Benchmarks",
    anchor: "part-19",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            52. Singly Linked List Complexity
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Assume the implementation maintains both head and tail references.</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Access head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Access tail using tail reference</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Access by index</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Search by value</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insert at head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insert at tail</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insert at index</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Delete head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Delete tail</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Delete at index</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Reverse</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Find middle</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Detect a cycle</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Merge two sorted lists</td>
                  <td className="px-4 py-2.5 text-stone-700">O(m + n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Find intersection</td>
                  <td className="px-4 py-2.5 text-stone-700">O(m + n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            53. Doubly Linked List Complexity
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Assume head and tail references are maintained.</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Access head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Access tail</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Access by index</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insert at head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insert at tail</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Delete head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Delete tail</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insert before or after a known node</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Delete a known node</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Search by value</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For insertion or deletion by an index, traversal is still required, so the overall complexity is O(n).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            54. Circular Singly Linked List Complexity
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Assume a tail reference is maintained.</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insert at head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insert at tail</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Delete head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Delete by value</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Search</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Traverse all nodes</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 20,
    title: "Part 20: 12 Common Linked-List Mistakes & Traps",
    category: "Part 20 · Defensive Engineering",
    anchor: "part-20",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            55. Errors You Must Avoid
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 1: Losing the next reference.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Incorrect:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`current.next = previous;
current = current.next;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The original next node may become inaccessible from the current traversal.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Correct approach:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node next = current.next;

current.next = previous;

previous = current;

current = next;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 2: Forgetting to update the head.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">When inserting at the beginning or reversing the list, the head must be updated.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 3: Forgetting to update the tail.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Removing the last node or inserting the first node into an empty list can leave a stale tail reference.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 4: Forgetting the single-node case.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">When removing the only node, both head and tail must become null.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 5: Traversing a circular list using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">current != null</code>.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A valid circular list does not naturally terminate at null. Use a bounded traversal or a return-to-start condition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 6: Comparing node values during cycle detection.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use reference identity:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`slow == fast`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 7: Confusing value equality and node intersection.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Two nodes can contain the same number without being the same node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 8: Forgetting even-length middle behavior.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Clarify whether the first or second middle node is required.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 9: Creating unnecessary nodes when merging lists.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">If the problem permits reusing the input nodes, relink them rather than allocating a new node for every element.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 10: Ignoring recursive stack space.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Recursive traversal uses O(n) stack space.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 11: Accessing <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">.next</code> before checking for null.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Incorrect:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`while (current.next != null) {
    ...
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This fails when <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">current</code> is null.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Make sure the current reference is checked first.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Mistake 12: Forgetting to handle empty input.</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Operations such as removal, reversal, and middle-node lookup need correct empty-list behavior.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 21,
    title: "Part 21: Laboratory Exercises (Labs 1-5)",
    category: "Part 21 · 5 Hands-on Laboratories",
    anchor: "part-21",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            56. Lab 1: Build a Singly Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Objective:</strong> Create a linked-list implementation from scratch.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Create a generic Node class.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Maintain head and tail references.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Implement insertion at head.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Implement insertion at tail.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Implement insertion at a specified index.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Implement deletion at head.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Implement deletion at tail.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Implement deletion at a specified index.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">Implement searching.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">10.</span>
            <div className="flex-1">Implement size tracking.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">11.</span>
            <div className="flex-1">Implement traversal.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">12.</span>
            <div className="flex-1">Test empty and single-node cases.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            57. Lab 2: Build a Doubly Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Create a generic doubly linked node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Store previous and next references.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Insert at both ends.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Delete at both ends.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Insert at a specified index.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Delete at a specified index.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Implement forward traversal.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Implement backward traversal.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">Test reference consistency after every operation.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            58. Lab 3: Build a Circular Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Create a circular singly linked list.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Maintain a tail reference.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Implement insertion at the beginning.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Implement insertion at the end.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Implement deletion at the beginning.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Implement deletion by value.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">Implement searching.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Implement circular traversal.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">Ensure traversal terminates after visiting all nodes.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            59. Lab 4: Reverse a Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Implement both:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Iterative reversal.</li>
            <li>Recursive reversal.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Test:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Empty list.</li>
            <li>Single-node list.</li>
            <li>Two-node list.</li>
            <li>Even-length list.</li>
            <li>Odd-length list.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Compare auxiliary space and explain how the references change.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            60. Lab 5: Floyd's Cycle Detection
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Create a linked list and deliberately connect a node to an earlier node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Test:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">List with no cycle.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">List with a cycle beginning at the head.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">List with a cycle beginning in the middle.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">List with a self-loop.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Longer cycle.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Cycle detection.</li>
            <li>Cycle-start detection.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Verify that both algorithms work correctly.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 22,
    title: "Part 22: Assignments (Problems 1-7)",
    category: "Part 22 · 7 Independent Projects",
    anchor: "part-22",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            61. Assignment 1: Find the Kth Node from the End
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Given a linked list and an integer <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code>, find the kth node from the end.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → 50`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">For <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k = 2</code>, the answer is 40.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Use two pointers.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Move the first pointer <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code> positions ahead.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Move both pointers until the first reaches the end.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Return the second pointer.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Handle invalid values of k.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            62. Assignment 2: Remove the Nth Node from the End
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Input:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → 50`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">n = 2</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 50`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use a dummy node to simplify deleting the head when it is the target.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            63. Assignment 3: Check Whether a Linked List Is a Palindrome
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 → 2 → 2 → 1`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">This list is a palindrome because it reads the same forward and backward.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Use the slow and fast pointer technique.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Reverse the second half.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Compare both halves.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Optionally restore the original list.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Analyze time and space complexity.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected auxiliary space: O(1), excluding fixed references.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            64. Assignment 4: Rotate a Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Input:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 → 2 → 3 → 4 → 5`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Rotate right by 2.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4 → 5 → 1 → 2 → 3`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Find the length.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Connect the tail to the head temporarily.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Calculate the new tail position.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Break the circular connection.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Handle rotations larger than the list size.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected auxiliary space: O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            65. Assignment 5: Merge K Sorted Linked Lists
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Given <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">k</code> individually sorted linked lists, combine them into one sorted linked list.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Compare:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Repeated pairwise merging.</li>
            <li>Divide-and-conquer merging.</li>
            <li>PriorityQueue-based merging.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A standard efficient solution using a priority queue takes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">O(N log k)</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">where <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">N</code> is the total number of nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Auxiliary space for the priority queue: O(k), excluding the reused linked-list nodes.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            66. Assignment 6: Sort a Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Implement merge sort on a singly linked list.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Find the middle node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Split the list into two parts.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Recursively sort both parts.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Merge the sorted parts.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Verify the final result.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected time: O(n log n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The standard linked-list merge sort can use O(log n) recursion-stack space while reusing existing nodes for the merge.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            67. Assignment 7: Reorder a Linked List
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Input:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 → 2 → 3 → 4 → 5`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 → 5 → 2 → 4 → 3`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">Find the middle.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">Reverse the second half.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">Merge the two halves alternately.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Update references correctly.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected time: O(n).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Expected auxiliary space: O(1).</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 23,
    title: "Part 23: Knowledge Assessment (15 MCQs, 25 Qs & Output)",
    category: "Part 23 · Assessment Suite",
    anchor: "part-23",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            68. Multiple-Choice Questions
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">1. What is a linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. A collection of sorted values stored only in arrays</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. A sequence of nodes connected through references</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. A mathematical tree</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. A fixed-size primitive data structure</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">2. What does a singly linked-list node contain?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. Only data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. Data and previous reference</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. Data and next reference</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. Two next references</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">3. What is the time complexity of inserting at the head of a singly linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. O(1)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. O(n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. O(log n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. O(n²)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">4. What is the time complexity of accessing an arbitrary index in a singly linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. O(1)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. O(log n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. O(n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. O(2ⁿ)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">5. Which linked list supports forward and backward traversal?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. Singly linked list</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. Doubly linked list</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. Array</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. Stack</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">6. What is special about a circular singly linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. Its tail points to null</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. Its tail points to the head</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. It has no nodes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. It has no data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">7. Which algorithm detects a cycle using slow and fast pointers?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. Binary search</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. Merge sort</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. Floyd's algorithm</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. Counting sort</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">8. How many steps does the fast pointer move during each iteration of Floyd's algorithm?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. One</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. Two</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. Three</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. Four</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">9. What is the auxiliary space complexity of iterative linked-list reversal?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. O(n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. O(log n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. O(1)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. O(n²)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">10. How can the middle of a linked list be found efficiently?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. Sorting</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. Slow and fast pointers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. HashMap only</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. Binary search</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">11. How should node identity be checked when finding two lists' intersection?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. Compare their data values</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. Compare their indices</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. Compare references using <code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">==</code></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. Sort both lists</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">12. What is the time complexity of merging two sorted singly linked lists?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. O(log n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. O(m + n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. O(n²)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. O(1)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">13. What extra memory does the HashSet method for removing duplicates use in the worst case?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. O(1)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. O(log n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. O(n)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. O(n²)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">14. Which Java class provides a built-in doubly linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. ArrayList</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. LinkedList</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. HashMap</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. HashSet</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">15. What is a major disadvantage of a linked list compared with an array?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A. It cannot store integers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">B. It cannot be traversed</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">C. It lacks constant-time indexed access</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">D. It cannot grow dynamically</p>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            69. Short-Answer Questions
          </h2>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">What is a linked list?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">What is a node?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">What is the difference between a reference and a primitive value in Java?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">Explain the role of the head reference.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">Explain the role of the tail reference.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">Differentiate singly and doubly linked lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">What is a circular linked list?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">8.</span>
            <div className="flex-1">Explain insertion at the head and tail.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">9.</span>
            <div className="flex-1">Why is deletion at the tail O(n) in a singly linked list?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">10.</span>
            <div className="flex-1">What is the difference between traversal in a regular and circular linked list?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">11.</span>
            <div className="flex-1">Explain iterative linked-list reversal.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">12.</span>
            <div className="flex-1">Explain recursive linked-list reversal.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">13.</span>
            <div className="flex-1">What are slow and fast pointers?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">14.</span>
            <div className="flex-1">Explain Floyd's cycle detection algorithm.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">15.</span>
            <div className="flex-1">How can the starting node of a cycle be identified?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">16.</span>
            <div className="flex-1">How can two sorted linked lists be merged?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">17.</span>
            <div className="flex-1">Explain the difference between duplicate values and intersecting nodes.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">18.</span>
            <div className="flex-1">Why does unsorted duplicate removal often use a HashSet?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">19.</span>
            <div className="flex-1">Explain the two-pointer intersection algorithm.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">20.</span>
            <div className="flex-1">Compare linked lists with arrays.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">21.</span>
            <div className="flex-1">Why can a linked list require more memory than an array?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">22.</span>
            <div className="flex-1">Explain the importance of head, tail, and size invariants.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">23.</span>
            <div className="flex-1">Why can recursive linked-list operations cause stack overflow?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">24.</span>
            <div className="flex-1">When should a doubly linked list be preferred?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">25.</span>
            <div className="flex-1">Why does indexed access remain O(n) in a doubly linked list?</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            70. Output-Based Questions
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 1</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Node first = new Node(10);

Node second = new Node(20);

first.next = second;

System.out.println(first.next.data);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">What is printed?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 2</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] values = {10, 20, 30};

Node head = new Node(10);

head.next = new Node(20);

head.next.next = new Node(30);

Node current = head;

while (current != null) {

    System.out.print(current.data + " ");

    current = current.next;
}`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">What is printed?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 3</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A linked list contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 → 20 → 30 → 40 → 50`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">What node is returned by the standard slow-and-fast-pointer middle algorithm?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 4</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A linked list contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`1 → 2 → 3 → 4 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">What is the result after iterative reversal?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 5</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Two different nodes contain the value 20.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Are they necessarily an intersection?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Explain your answer.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 24,
    title: "Part 24: Answer Key & Comprehensive Explanations",
    category: "Part 24 · Verification & Solutions",
    anchor: "part-24",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            71. Multiple-Choice Answers
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Question</th>
                  <th className="px-4 py-3">Answer</th>
                  <th className="px-4 py-3">Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Nodes are connected through references.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">A singly linked node contains data and next.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>
                  <td className="px-4 py-2.5 text-stone-700">A</td>
                  <td className="px-4 py-2.5 text-stone-700">Head insertion requires a fixed number of reference changes.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Nodes must be traversed sequentially.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Doubly linked lists store both previous and next references.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">6</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">The final node links back to the head.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">7</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Floyd's algorithm uses slow and fast references.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">8</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Fast advances two nodes per iteration.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">9</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Iterative reversal uses a fixed number of references.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">10</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Slow advances one step and fast advances two.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">11</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Intersections require physical node identity.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">12</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700">Each node is processed at most once.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">13</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">The set can store up to n distinct values.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">14</td>
                  <td className="px-4 py-2.5 text-stone-700">B</td>
                  <td className="px-4 py-2.5 text-stone-700"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">java.util.LinkedList</code> is a doubly linked list.</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">15</td>
                  <td className="px-4 py-2.5 text-stone-700">C</td>
                  <td className="px-4 py-2.5 text-stone-700">Accessing a node by index requires traversal.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            72. Output-Based Answers
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 1</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`20`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">first.next</code> refers to the second node.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 2</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10 20 30`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Traversal continues until the current reference becomes null.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 3</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The standard implementation returns the middle node for an odd-length list.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 4</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`4 → 3 → 2 → 1 → null`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Question 5</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">No.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The two nodes must be the same physical node object, not merely contain equal values. Reference identity must be checked.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 25,
    title: "Part 25: Mini-Project — Linked List Management System",
    category: "Part 25 · Complete Capstone Project",
    anchor: "part-25",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            73. Build a Complete Linked List Management System
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Project objective
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Create a Java console application that supports singly, doubly, and circular linked-list operations.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 1 — Singly linked list
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Add at beginning.</li>
            <li>Add at end.</li>
            <li>Insert at index.</li>
            <li>Delete at beginning.</li>
            <li>Delete at end.</li>
            <li>Delete at index.</li>
            <li>Search.</li>
            <li>Traverse.</li>
            <li>Reverse.</li>
            <li>Find middle.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 2 — Doubly linked list
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Forward traversal.</li>
            <li>Backward traversal.</li>
            <li>Insert at both ends.</li>
            <li>Delete at both ends.</li>
            <li>Insert at index.</li>
            <li>Delete at index.</li>
            <li>Search.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 3 — Circular linked list
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Insert at beginning.</li>
            <li>Insert at end.</li>
            <li>Delete first node.</li>
            <li>Delete by value.</li>
            <li>Search.</li>
            <li>Circular traversal.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 4 — Interview algorithms
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Cycle detection.</li>
            <li>Cycle-start detection.</li>
            <li>Merge sorted lists.</li>
            <li>Remove duplicates.</li>
            <li>Find intersection.</li>
            <li>Recursive traversal.</li>
            <li>Recursive reversal.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 5 — Testing
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Test:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Empty lists.</li>
            <li>Single-node lists.</li>
            <li>Multiple-node lists.</li>
            <li>Duplicate values.</li>
            <li>Null data, if permitted.</li>
            <li>Invalid indices.</li>
            <li>Cyclic and acyclic lists.</li>
            <li>Lists with shared nodes.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Suggested folder structure
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`LinkedListProject/
│
├── src/
│   ├── singly/
│   │   └── SinglyLinkedList.java
│   │
│   ├── doubly/
│   │   └── DoublyLinkedList.java
│   │
│   ├── circular/
│   │   └── CircularSinglyLinkedList.java
│   │
│   ├── algorithms/
│   │   ├── ReverseList.java
│   │   ├── MiddleNode.java
│   │   ├── CycleDetection.java
│   │   ├── MergeLists.java
│   │   ├── RemoveDuplicates.java
│   │   └── Intersection.java
│   │
│   ├── testing/
│   │   └── LinkedListTests.java
│   │
│   └── Main.java
│
└── README.md`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Expected outcome
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">By completing this project, you should be able to build and manipulate linked lists without relying on Java's built-in implementation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">You should also be able to explain how each operation affects the node references and why its complexity has a particular value.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 26,
    title: "Part 26: Interview Preparation (Top 15 Technical Questions)",
    category: "Part 26 · High-Yield Interview Q&A",
    anchor: "part-26",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            74. Frequently Asked Interview Questions
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">1. What is a linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">A linear data structure made of nodes connected through references, where each node contains data and one or more links to other nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">2. What is the difference between an array and a linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Arrays support constant-time indexed access, while linked lists require sequential traversal. Linked lists can make insertion and deletion efficient when the relevant position is already known.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">3. Why is insertion at the head O(1)?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Only the new node's next reference and the head reference need to be updated.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">4. Why is deleting the tail O(n) in a singly linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The node before the tail must be found to update its next reference.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">5. How do you reverse a linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use previous, current, and next references to reverse each next link.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">6. How do you find the middle node?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use slow and fast references, with the fast reference moving twice as quickly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">7. How do you detect a cycle?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use Floyd's algorithm, where the fast reference moves two steps and the slow reference moves one step.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">8. How do you find the cycle's starting node?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">After the two pointers meet, reset one to the head and move both one node at a time until they meet again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">9. How do you merge two sorted linked lists?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Repeatedly compare their front nodes and attach the smaller node to the merged result.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">10. How do you remove duplicates from an unsorted linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use a HashSet to track previously seen values, or use nested traversal when additional memory must be avoided.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">11. How do you find the intersection of two linked lists?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Use two pointers that switch to the other list's head after reaching null. Compare node references, not values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">12. What is the time complexity of reversing a linked list?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">O(n) time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">13. What is the auxiliary space of recursive reversal?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">O(n) because the recursion uses stack frames.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">14. Why is a doubly linked list useful?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">It supports traversal in both directions and allows O(1) removal of a known node when its previous and next references are available.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">15. Why can a circular linked list create an infinite loop?</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Its last node points back to the first node instead of null, so traversal needs an explicit termination condition.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 27,
    title: "Part 27: Module Revision Sheet & Essential Patterns",
    category: "Part 27 · Quick Reference Summaries",
    anchor: "part-27",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            75. Essential Definitions
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Term</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Linked list</td>
                  <td className="px-4 py-2.5 text-stone-700">Sequence of nodes connected by references</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Node</td>
                  <td className="px-4 py-2.5 text-stone-700">Object storing data and link references</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Head</td>
                  <td className="px-4 py-2.5 text-stone-700">Reference to the first node</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Tail</td>
                  <td className="px-4 py-2.5 text-stone-700">Reference to the final node</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Singly linked list</td>
                  <td className="px-4 py-2.5 text-stone-700">Each node has a next reference</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Doubly linked list</td>
                  <td className="px-4 py-2.5 text-stone-700">Each node has previous and next references</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Circular linked list</td>
                  <td className="px-4 py-2.5 text-stone-700">Final node connects back to the first</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Traversal</td>
                  <td className="px-4 py-2.5 text-stone-700">Visiting nodes sequentially</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insertion</td>
                  <td className="px-4 py-2.5 text-stone-700">Adding a node</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Deletion</td>
                  <td className="px-4 py-2.5 text-stone-700">Removing a node</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Reversal</td>
                  <td className="px-4 py-2.5 text-stone-700">Changing the direction of links</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Cycle</td>
                  <td className="px-4 py-2.5 text-stone-700">A chain of references that returns to a previously visited node</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Intersection</td>
                  <td className="px-4 py-2.5 text-stone-700">Two lists sharing the same physical node</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Floyd's algorithm</td>
                  <td className="px-4 py-2.5 text-stone-700">Cycle detection using slow and fast pointers</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            76. Essential Complexity
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Singly linked list</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insert at head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Insert at tail with tail reference</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Insert at arbitrary index</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Delete at head</td>
                  <td className="px-4 py-2.5 text-stone-700">O(1)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Delete at tail</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Access by index</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Search</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Reverse</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Find middle</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Cycle detection</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Cycle-start detection</td>
                  <td className="px-4 py-2.5 text-stone-700">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Merge two sorted lists</td>
                  <td className="px-4 py-2.5 text-stone-700">O(m + n)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Find intersection</td>
                  <td className="px-4 py-2.5 text-stone-700">O(m + n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            77. Essential Patterns to Remember
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Pattern 1 — Previous, current, next</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Used for reversing links and performing safe reference changes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Pattern 2 — Slow and fast pointers</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Used for finding the middle and detecting cycles.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Pattern 3 — Dummy node</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Simplifies merging lists and deleting nodes near the head.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Pattern 4 — Pointer switching</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Used for finding the intersection of two acyclic linked lists.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Pattern 5 — HashSet</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Used for duplicate detection in an unsorted linked list.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Pattern 6 — Recursive traversal</strong></p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Used for recursive searching, counting, and reversing.</p>
          <hr className="my-8 border-stone-200" />
      </div>
    )
  },
  {
    id: 28,
    title: "Part 28: Module Completion Criteria & Final Takeaways",
    category: "Milestone · Linked Structure Mastery",
    anchor: "part-28",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            78. Theoretical Knowledge
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">You should be able to:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>[ ] Explain linked-list fundamentals.</li>
            <li>[ ] Explain nodes and Java references.</li>
            <li>[ ] Implement singly linked lists.</li>
            <li>[ ] Implement doubly linked lists.</li>
            <li>[ ] Implement circular linked lists.</li>
            <li>[ ] Insert at head, tail, and index.</li>
            <li>[ ] Delete at head, tail, and index.</li>
            <li>[ ] Search and traverse a linked list.</li>
            <li>[ ] Reverse a list iteratively.</li>
            <li>[ ] Reverse a list recursively.</li>
            <li>[ ] Find the middle node.</li>
            <li>[ ] Detect cycles using Floyd's algorithm.</li>
            <li>[ ] Find the start of a cycle.</li>
            <li>[ ] Merge two sorted lists.</li>
            <li>[ ] Remove duplicates from sorted and unsorted lists.</li>
            <li>[ ] Find the intersection node.</li>
            <li>[ ] Explain recursive linked-list operations.</li>
            <li>[ ] Compare arrays and linked lists.</li>
            <li>[ ] Calculate time and auxiliary-space complexity.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            79. Practical Completion
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Before moving forward, complete:</p>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">1.</span>
            <div className="flex-1">The generic singly linked-list implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">2.</span>
            <div className="flex-1">The doubly linked-list implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">3.</span>
            <div className="flex-1">The circular linked-list implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">4.</span>
            <div className="flex-1">All five laboratory exercises.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">5.</span>
            <div className="flex-1">At least five of the seven assignments.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">6.</span>
            <div className="flex-1">The knowledge assessment.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">7.</span>
            <div className="flex-1">The Linked List Management System mini-project.</div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">You should be able to implement reversal, middle-node detection, cycle detection, merge, and intersection without looking at the solutions.</p>
          <hr className="my-8 border-stone-200" />
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            Final Takeaway
          </h2>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Linked lists teach you how data structures work at the level of individual objects and references.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">Unlike arrays, which rely on indexed storage, linked lists rely on relationships between nodes. Understanding these relationships gives you the foundation for more advanced structures and algorithms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">The most important skills from this module are:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">
            <li>Understanding how references connect nodes.</li>
            <li>Changing links without losing access to the remaining list.</li>
            <li>Maintaining head, tail, and size correctly.</li>
            <li>Using slow and fast pointers.</li>
            <li>Recognizing when to use a dummy node.</li>
            <li>Distinguishing node identity from value equality.</li>
            <li>Understanding the time and memory costs of each operation.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-stone-900">Do not memorize linked-list code. Learn to draw the nodes, trace the references, and explain every link change.</strong></p>
      </div>
    )
  }
];

export default JAVA_LINKED_LISTS_SECTIONS;
