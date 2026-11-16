import React from 'react';

/* 
 * AUTO-GENERATED CURRICULUM SECTIONS COMPONENT FOR MODULE 23
 * Technical Interview & Placement Mastery
 * Total Sections: 24
 */

export const JAVA_INTERVIEW_MASTERY_SECTIONS = [
  {
    id: 0,
    title: "Module 23 Overview & Technical Placement Framework",
    summary: "Strategic masterclass for technical interviews: 7-step problem solving, communication frameworks, and optimal coding patterns.",
    content: (
      <div className="space-y-4">
        
      <p key="p-0-0" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Module 23 — Technical Interview &amp; Placement Mastery` }} />
      </p>
    

      <p key="p-0-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Technical interviews are not just tests of how many algorithms or programming concepts you have memorized. They evaluate whether you can understand unfamiliar problems, think logically, design efficient solutions, write correct code, explain your reasoning, and handle constraints under time pressure.` }} />
      </p>
    

      <p key="p-0-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `In previous modules, you learned Java, Data Structures, Algorithms, Dynamic Programming, Graphs, Trees, and advanced problem-solving patterns.` }} />
      </p>
    

      <p key="p-0-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This module brings all those concepts together in a real interview environment.` }} />
      </p>
    

      <p key="p-0-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You will learn how to approach technical interviews, convert brute-force solutions into optimized ones, communicate with interviewers, solve Java coding questions, handle mock interviews, and prepare for placement assessments.` }} />
      </p>
    

      <p key="p-0-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `By the end, you should be able to approach technical interviews for software engineering internships and entry-level developer positions with a structured problem-solving process.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 1,
    title: "1. Data Structures Interview Preparation",
    summary: "Interviewer expectations, core DSA evaluation criteria, complexity requirements, and structure selection trade-offs.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-1-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `1. Data Structures Interview Preparation` }} />
        </h2>
      

        <h3 key="h2-1-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `1.1 What do interviewers expect?` }} />
        </h3>
      

      <p key="p-1-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Data structures interviews evaluate whether you understand how information is stored and how different data structures affect the performance of your program.` }} />
      </p>
    

      <p key="p-1-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interviewers generally do not want you to simply define an ArrayList or HashMap. They want to know whether you can recognize when to use one.` }} />
      </p>
    

      <p key="p-1-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example, imagine an application that stores student records.` }} />
      </p>
    

      <p key="p-1-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You need to:` }} />
      </p>
    

      <p key="p-1-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Retrieve a student using their ID.` }} />
      </p>
    

      <p key="p-1-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find all students with a particular score.` }} />
      </p>
    

      <p key="p-1-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Maintain students in sorted order.` }} />
      </p>
    

      <p key="p-1-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Remove duplicate records.` }} />
      </p>
    

      <p key="p-1-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Process students according to priority.` }} />
      </p>
    

      <p key="p-1-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Different operations suggest different data structures.` }} />
      </p>
    

        <h3 key="h2-1-12" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `1.2 Important data structures to prepare` }} />
        </h3>
      

        <div key="table-1-13" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-orange-300 font-semibold font-mono">
                <th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Data Structure</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Important Concepts</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Typical Interview Problems</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Arrays</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Indexing, traversal, insertion, deletion</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Maximum subarray, rotate array</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Strings</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Immutability, character operations</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Anagrams, palindromes</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Linked Lists</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Nodes, pointers, traversal</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Reverse linked list, cycle detection</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Stack</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">LIFO, push, pop</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Valid parentheses</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Queue</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">FIFO, enqueue, dequeue</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">BFS, scheduling</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Deque</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Operations at both ends</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Sliding window maximum</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">HashMap</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Hashing, collisions, key-value storage</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Two Sum, frequency counting</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">HashSet</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Uniqueness, membership</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Duplicate detection</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Heap</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Min-heap, max-heap, priority</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Kth largest element</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Trees</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Traversal, height, recursion</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Lowest Common Ancestor</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Binary Search Trees</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Ordering property</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Search, insertion, validation</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Graphs</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Vertices, edges, traversal</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Shortest path, components</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Trie</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Prefix-based storage</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Prefix search, autocomplete</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">DSU</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Union, Find, connectivity</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Cycle detection</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Fenwick Tree</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Prefix aggregation and updates</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Dynamic prefix sums</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Segment Tree</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Range queries and updates</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Range minimum, range sum</td>
                </tr>
              
            </tbody>
          </table>
        </div>
      

        <h3 key="h2-1-14" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `1.3 Understand complexity of operations` }} />
        </h3>
      

      <p key="p-1-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `One of the most frequently tested skills is comparing data structures based on time complexity.` }} />
      </p>
    

        <div key="table-1-16" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-orange-300 font-semibold font-mono">
                <th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Operation</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Array</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">ArrayList</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">HashMap</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">TreeMap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Access by index</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">O(1)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">O(1)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Not applicable</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Not applicable</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Search by value/key</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">O(n)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">O(n)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Expected O(1)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">O(log n)</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Insert at end</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Fixed size</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Amortized O(1)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Expected O(1)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">O(log n)</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Remove by value/key</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">O(n)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">O(n)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Expected O(1)</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">O(log n)</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Ordered traversal</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">By index</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">By index</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">No sorted order guarantee</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Yes</td>
                </tr>
              
            </tbody>
          </table>
        </div>
      

      <p key="p-1-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These are typical complexities, assuming normal hashing behavior and the standard Java implementations.` }} />
      </p>
    

        <h3 key="h2-1-18" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `1.4 Common data structure interview questions` }} />
        </h3>
      

      <p key="p-1-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Arrays` }} />
      </p>
    

      <p key="p-1-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the largest and second-largest elements.` }} />
      </p>
    

      <p key="p-1-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Move all zeroes to the end.` }} />
      </p>
    

      <p key="p-1-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Rotate an array by K positions.` }} />
      </p>
    

      <p key="p-1-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the missing number.` }} />
      </p>
    

      <p key="p-1-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find duplicate elements.` }} />
      </p>
    

      <p key="p-1-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the maximum subarray sum.` }} />
      </p>
    

      <p key="p-1-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Linked Lists` }} />
      </p>
    

      <p key="p-1-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reverse a linked list.` }} />
      </p>
    

      <p key="p-1-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Detect a cycle.` }} />
      </p>
    

      <p key="p-1-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the middle node.` }} />
      </p>
    

      <p key="p-1-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Merge two sorted linked lists.` }} />
      </p>
    

      <p key="p-1-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the intersection of two linked lists.` }} />
      </p>
    

      <p key="p-1-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Stacks and Queues` }} />
      </p>
    

      <p key="p-1-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Validate balanced parentheses.` }} />
      </p>
    

      <p key="p-1-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Implement a queue using stacks.` }} />
      </p>
    

      <p key="p-1-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the next greater element.` }} />
      </p>
    

      <p key="p-1-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Implement a Min Stack.` }} />
      </p>
    

      <p key="p-1-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the maximum in every sliding window.` }} />
      </p>
    

      <p key="p-1-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Trees and Graphs` }} />
      </p>
    

      <p key="p-1-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Perform inorder, preorder, and postorder traversal.` }} />
      </p>
    

      <p key="p-1-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the height of a binary tree.` }} />
      </p>
    

      <p key="p-1-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Check whether a tree is balanced.` }} />
      </p>
    

      <p key="p-1-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the lowest common ancestor.` }} />
      </p>
    

      <p key="p-1-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Detect cycles in a graph.` }} />
      </p>
    

      <p key="p-1-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the shortest path.` }} />
      </p>
    

      <p key="p-1-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `How to prepare` }} />
      </p>
    

      <p key="p-1-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not memorize only the code for each data structure.` }} />
      </p>
    

      <p key="p-1-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For every structure, understand:` }} />
      </p>
    

      <p key="p-1-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `How it is implemented.` }} />
      </p>
    

      <p key="p-1-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Its internal working.` }} />
      </p>
    

      <p key="p-1-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity of operations.` }} />
      </p>
    

      <p key="p-1-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Space complexity.` }} />
      </p>
    

      <p key="p-1-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Advantages and disadvantages.` }} />
      </p>
    

      <p key="p-1-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Situations where it is appropriate.` }} />
      </p>
    

      <p key="p-1-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Situations where another structure is better.` }} />
      </p>
    

      <p key="p-1-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example, an interviewer might ask:` }} />
      </p>
    

      <p key="p-1-56" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Why would you use a HashMap instead of an ArrayList?` }} />
      </p>
    

      <p key="p-1-57" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A good answer explains that a HashMap is useful when elements need to be retrieved by key, typically in expected O(1) time, whereas finding an element in an ArrayList by value generally takes O(n).` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 2,
    title: "2. Algorithms Interview Preparation",
    summary: "Essential algorithmic categories, selection heuristics, matching problem constraints to optimal approaches.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-2-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `2. Algorithms Interview Preparation` }} />
        </h2>
      

      <p key="p-2-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Algorithms are the logical procedures used to solve computational problems.` }} />
      </p>
    

      <p key="p-2-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `In interviews, you must understand not only how an algorithm works but also why it is appropriate for a particular problem.` }} />
      </p>
    

        <h3 key="h2-2-3" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `2.1 Essential algorithm categories` }} />
        </h3>
      

        <div key="table-2-4" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-orange-300 font-semibold font-mono">
                <th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Category</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Important Algorithms</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Searching</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Linear Search, Binary Search</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Sorting</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Merge Sort, Quick Sort, Heap Sort</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Recursion</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Recursive traversal, recursive decomposition</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Backtracking</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">N-Queens, Sudoku, Subsets</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Greedy</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Activity Selection, Interval Scheduling</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Dynamic Programming</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Knapsack, LCS, House Robber</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Graph</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">BFS, DFS, Dijkstra, Bellman-Ford</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Tree</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Traversals, BST operations, Tree DP</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Divide and Conquer</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Merge Sort, Quick Sort</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Mathematical</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">GCD, Sieve, Binary Exponentiation</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Advanced Patterns</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Sliding Window, Two Pointers, Monotonic Stack</td>
                </tr>
              
            </tbody>
          </table>
        </div>
      

        <h3 key="h2-2-5" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `2.2 Understand algorithm selection` }} />
        </h3>
      

      <p key="p-2-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider the following problem:` }} />
      </p>
    

      <p key="p-2-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Given a sorted array, find whether a particular number exists.` }} />
      </p>
    

      <p key="p-2-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Possible approaches:` }} />
      </p>
    

      <p key="p-2-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Approach 1: Linear Search` }} />
      </p>
    

      <p key="p-2-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Check every element until you find the target.` }} />
      </p>
    

      <p key="p-2-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-2-12" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-2-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Approach 2: Binary Search` }} />
      </p>
    

      <p key="p-2-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Repeatedly eliminate half of the remaining search space.` }} />
      </p>
    

      <p key="p-2-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-2-16" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(log n)` }} />
        </div>
      

      <p key="p-2-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Because the array is sorted, Binary Search is a better choice.` }} />
      </p>
    

      <p key="p-2-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But suppose the array is unsorted and you only need to search once. Sorting first might not be worthwhile. A linear scan could be simpler and faster overall.` }} />
      </p>
    

      <p key="p-2-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The important skill is considering the complete problem, not simply selecting the algorithm with the smallest theoretical complexity.` }} />
      </p>
    

        <h3 key="h2-2-20" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `2.3 Algorithm questions interviewers commonly ask` }} />
        </h3>
      

      <p key="p-2-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain Binary Search and its complexity.` }} />
      </p>
    

      <p key="p-2-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `How does Merge Sort work?` }} />
      </p>
    

      <p key="p-2-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is the difference between BFS and DFS?` }} />
      </p>
    

      <p key="p-2-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When should you use Dijkstra instead of BFS?` }} />
      </p>
    

      <p key="p-2-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain memoization and tabulation.` }} />
      </p>
    

      <p key="p-2-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Why is Dynamic Programming useful?` }} />
      </p>
    

      <p key="p-2-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain the Greedy approach.` }} />
      </p>
    

      <p key="p-2-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `How does a HashMap work internally?` }} />
      </p>
    

      <p key="p-2-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is the difference between a stable and unstable sorting algorithm?` }} />
      </p>
    

      <p key="p-2-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `How can you optimize an O(n²) solution?` }} />
      </p>
    

      <p key="p-2-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interview tip: Practice explaining an algorithm without referring to code first. If you cannot explain the logic in simple language, your understanding may not be complete.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 3,
    title: "3. Coding Interview Methodology",
    summary: "The 7-Step Coding Interview framework: Understand, Clarify, Brute Force, Optimize, Complexity, Code, and Dry Run.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-3-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `3. Coding Interview Methodology` }} />
        </h2>
      

      <p key="p-3-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is one of the most important sections of the module.` }} />
      </p>
    

      <p key="p-3-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A coding interview is not simply a race to write code. It is a structured problem-solving exercise.` }} />
      </p>
    

      <p key="p-3-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A good candidate demonstrates a clear thought process from understanding the problem to verifying the final implementation.` }} />
      </p>
    

        <h3 key="h2-3-4" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `3.1 The seven-step coding interview framework` }} />
        </h3>
      

      <p key="p-3-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The coding interview workflow` }} />
      </p>
    

      <p key="p-3-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Understand the problem` }} />
      </p>
    

      <p key="p-3-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Read the problem carefully. Identify what the input and output represent.` }} />
      </p>
    

      <p key="p-3-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Clarify requirements` }} />
      </p>
    

      <p key="p-3-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Ask questions about constraints, duplicates, ordering, invalid inputs, and special cases.` }} />
      </p>
    

      <p key="p-3-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Develop a brute-force solution` }} />
      </p>
    

      <p key="p-3-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Start with a straightforward correct approach rather than jumping immediately to optimization.` }} />
      </p>
    

      <p key="p-3-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Optimize the solution` }} />
      </p>
    

      <p key="p-3-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Identify repeated work and use suitable data structures or algorithmic patterns.` }} />
      </p>
    

      <p key="p-3-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain complexity` }} />
      </p>
    

      <p key="p-3-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Discuss the time and auxiliary space complexity of your approach.` }} />
      </p>
    

      <p key="p-3-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Write clean code` }} />
      </p>
    

      <p key="p-3-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use meaningful names, correct data structures, and logically organized methods.` }} />
      </p>
    

      <p key="p-3-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Dry run and test` }} />
      </p>
    

      <p key="p-3-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Verify the code using normal cases, edge cases, and carefully selected examples.` }} />
      </p>
    

      <p key="p-3-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This framework works for many interviews, although some interviewers may change the order or ask you to code sooner.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 4,
    title: "4. Clarifying Problem Requirements",
    summary: "Targeted question categories: input formats, constraints, duplicates, mutability, and edge condition bounds.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-4-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `4. Clarifying Problem Requirements` }} />
        </h2>
      

        <h3 key="h2-4-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `4.1 Why clarification matters` }} />
        </h3>
      

      <p key="p-4-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Sometimes interview questions are intentionally incomplete.` }} />
      </p>
    

      <p key="p-4-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The interviewer wants to understand how you handle ambiguity.` }} />
      </p>
    

      <p key="p-4-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider this problem:` }} />
      </p>
    

      <p key="p-4-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the second-largest element in an array.` }} />
      </p>
    

      <p key="p-4-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Before writing code, several questions arise.` }} />
      </p>
    

      <p key="p-4-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Does second-largest mean the second distinct-largest value?` }} />
      </p>
    

      <p key="p-4-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can the array contain duplicates?` }} />
      </p>
    

      <p key="p-4-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can it contain negative numbers?` }} />
      </p>
    

      <p key="p-4-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What should happen if there are fewer than two distinct values?` }} />
      </p>
    

      <p key="p-4-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Is sorting allowed?` }} />
      </p>
    

      <p key="p-4-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Must you do it in one pass?` }} />
      </p>
    

      <p key="p-4-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These questions can change the solution.` }} />
      </p>
    

      <p key="p-4-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

      <p key="p-4-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Array = [10, 10, 8, 5]` }} />
      </p>
    

      <p key="p-4-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Second-largest distinct value:` }} />
      </p>
    

      <p key="p-4-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `8` }} />
      </p>
    

      <p key="p-4-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Second element after sorting in descending order:` }} />
      </p>
    

      <p key="p-4-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `10` }} />
      </p>
    

      <p key="p-4-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The difference is important.` }} />
      </p>
    

        <h3 key="h2-4-21" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `4.2 Categories of clarification questions` }} />
        </h3>
      

      <p key="p-4-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Input-related questions` }} />
      </p>
    

      <p key="p-4-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can the input be empty?` }} />
      </p>
    

      <p key="p-4-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can values be negative?` }} />
      </p>
    

      <p key="p-4-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Are duplicate values allowed?` }} />
      </p>
    

      <p key="p-4-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Is the input sorted?` }} />
      </p>
    

      <p key="p-4-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output-related questions` }} />
      </p>
    

      <p key="p-4-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Should I return an index or the actual value?` }} />
      </p>
    

      <p key="p-4-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What should happen when no answer exists?` }} />
      </p>
    

      <p key="p-4-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Does the output need to preserve the original order?` }} />
      </p>
    

      <p key="p-4-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Constraint-related questions` }} />
      </p>
    

      <p key="p-4-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is the maximum input size?` }} />
      </p>
    

      <p key="p-4-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is the allowed time complexity?` }} />
      </p>
    

      <p key="p-4-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Is additional memory allowed?` }} />
      </p>
    

      <p key="p-4-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Special-condition questions` }} />
      </p>
    

      <p key="p-4-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can the input contain null values?` }} />
      </p>
    

      <p key="p-4-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Are there multiple valid answers?` }} />
      </p>
    

      <p key="p-4-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can the input be modified?` }} />
      </p>
    

        <h3 key="h2-4-39" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `4.3 Example: Clarifying a problem` }} />
        </h3>
      

      <p key="p-4-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interviewer:` }} />
      </p>
    

      <p key="p-4-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Given an array, find two numbers whose sum equals the target.` }} />
      </p>
    

      <p key="p-4-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Candidate:` }} />
      </p>
    

      <p key="p-4-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Should I return the values or their indices?` }} />
      </p>
    

      <p key="p-4-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interviewer:` }} />
      </p>
    

      <p key="p-4-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Return the indices.` }} />
      </p>
    

      <p key="p-4-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Candidate:` }} />
      </p>
    

      <p key="p-4-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can the same element be used twice?` }} />
      </p>
    

      <p key="p-4-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interviewer:` }} />
      </p>
    

      <p key="p-4-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `No.` }} />
      </p>
    

      <p key="p-4-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Candidate:` }} />
      </p>
    

      <p key="p-4-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can the array contain duplicates or negative values?` }} />
      </p>
    

      <p key="p-4-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interviewer:` }} />
      </p>
    

      <p key="p-4-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Yes.` }} />
      </p>
    

      <p key="p-4-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Now you understand the requirements more accurately.` }} />
      </p>
    

      <p key="p-4-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A useful rule` }} />
      </p>
    

      <p key="p-4-56" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not ask questions simply to appear thorough. Ask questions that can change the algorithm, correctness, or expected output.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 5,
    title: "5. Brute Force to Optimized Solution",
    summary: "Transforming O(N^2) naive approaches into O(N) linear solutions via HashMaps, sliding windows, and two pointers.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-5-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `5. Brute Force to Optimized Solution` }} />
        </h2>
      

        <h3 key="h2-5-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `5.1 What is brute force?` }} />
        </h3>
      

      <p key="p-5-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Brute force is the simplest approach that systematically checks possible solutions.` }} />
      </p>
    

      <p key="p-5-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It is often the best starting point because it helps you understand the problem and establish a correctness baseline.` }} />
      </p>
    

      <p key="p-5-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `However, brute force may be inefficient for large inputs.` }} />
      </p>
    

      <p key="p-5-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interviewers often evaluate whether you can improve it.` }} />
      </p>
    

        <h3 key="h2-5-6" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `5.2 Example: Two Sum` }} />
        </h3>
      

      <p key="p-5-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problem:` }} />
      </p>
    

      <p key="p-5-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Given an integer array and a target value, return the indices of two different elements whose sum equals the target.` }} />
      </p>
    

      <p key="p-5-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

      <p key="p-5-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `nums = [2, 7, 11, 15] target = 9` }} />
      </p>
    

      <p key="p-5-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-5-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[0, 1]` }} />
      </p>
    

      <p key="p-5-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Because:` }} />
      </p>
    

      <p key="p-5-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `nums[0] + nums[1] = 2 + 7 = 9` }} />
      </p>
    

      <p key="p-5-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Approach 1: Brute Force` }} />
      </p>
    

      <p key="p-5-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Check every possible pair.` }} />
      </p>
    

        <div key="code-5-17" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class TwoSumBruteForce  &#123;
  static int[] twoSum(int[] nums, int target)  &#123;
    for (int i = 0;  i &lt; nums.length;  i++)  &#123;
      for (int j = i + 1;  j &lt; nums.length;  j++)  &#123;
        if (nums[i] + nums[j] == target)  &#123;
          return new int[] &#123;
            i, j
          &#125;;
        &#125;
      &#125;
    &#125;
    return new int[] &#123;
      -1, -1
    &#125;;
  &#125;
  public static void main(String[] args)  &#123;
    int[] nums =  &#123;
      2, 7, 11, 15
    &#125;;
    int[] result = twoSum(nums, 9);
    System.out.println( result[0] + ", " + result[1] );
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-5-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-5-19" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n^2)` }} />
        </div>
      

      <p key="p-5-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space:` }} />
      </p>
    

        <div key="math-5-21" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
        </div>
      

      <p key="p-5-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The problem is that every element is compared with many other elements.` }} />
      </p>
    

      <p key="p-5-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Approach 2: HashMap Optimization` }} />
      </p>
    

      <p key="p-5-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead of checking every pair, store previously visited values in a HashMap.` }} />
      </p>
    

      <p key="p-5-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For each number, calculate its required complement:` }} />
      </p>
    

        <div key="math-5-26" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `complement=target-current` }} />
        </div>
      

      <p key="p-5-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Then check whether that complement already exists.` }} />
      </p>
    

      <p key="p-5-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `If it exists, the answer is found.` }} />
      </p>
    

      <p key="p-5-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Otherwise, store the current value and its index.` }} />
      </p>
    

        <div key="code-5-30" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;
public class TwoSumOptimized  &#123;
  static int[] twoSum(int[] nums, int target)  &#123;
    Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
    for (int i = 0;  i &lt; nums.length;  i++)  &#123;
      int complement = target - nums[i];
      if (map.containsKey(complement))  &#123;
        return new int[] &#123;
          map.get(complement), i
        &#125;;
      &#125;
      map.put(nums[i], i);
    &#125;
    return new int[] &#123;
      -1, -1
    &#125;;
  &#125;
  public static void main(String[] args)  &#123;
    int[] nums =  &#123;
      2, 7, 11, 15
    &#125;;
    int[] result = twoSum(nums, 9);
    System.out.println( result[0] + ", " + result[1] );
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-5-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-5-32" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-5-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space:` }} />
      </p>
    

        <div key="math-5-34" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-5-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The HashMap allows us to remember earlier values instead of repeatedly searching for them.` }} />
      </p>
    

      <p key="p-5-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Comparing both approaches` }} />
      </p>
    

      <p key="p-5-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Brute force` }} />
      </p>
    

      <p key="p-5-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n²)` }} />
      </p>
    

      <p key="p-5-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two nested loops` }} />
      </p>
    

      <p key="p-5-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Optimized` }} />
      </p>
    

      <p key="p-5-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
      </p>
    

      <p key="p-5-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap lookup` }} />
      </p>
    

      <p key="p-5-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The optimized approach uses additional memory to reduce execution time.` }} />
      </p>
    

        <h3 key="h2-5-44" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `5.3 How to optimize an interview solution` }} />
        </h3>
      

      <p key="p-5-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When you have a working brute-force solution, ask:` }} />
      </p>
    

      <p key="p-5-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Am I repeating the same calculation?` }} />
      </p>
    

      <p key="p-5-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can I store previously calculated information?` }} />
      </p>
    

      <p key="p-5-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can a HashMap eliminate repeated searching?` }} />
      </p>
    

      <p key="p-5-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can sorting simplify comparisons?` }} />
      </p>
    

      <p key="p-5-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can two pointers replace nested loops?` }} />
      </p>
    

      <p key="p-5-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can a sliding window reduce repeated traversal?` }} />
      </p>
    

      <p key="p-5-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can prefix sums answer queries more quickly?` }} />
      </p>
    

      <p key="p-5-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can Dynamic Programming avoid repeated subproblems?` }} />
      </p>
    

      <p key="p-5-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can a heap help retrieve the next highest-priority element?` }} />
      </p>
    

      <p key="p-5-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Important: Not every O(n²) solution can or should be converted into O(n). Sometimes the problem itself requires quadratic work.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 6,
    title: "6. Complexity Explanation",
    summary: "Articulating Big-O time and space complexity, recursion call stacks, auxiliary memory, and amortized bounds.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-6-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `6. Complexity Explanation` }} />
        </h2>
      

      <p key="p-6-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interviewers expect you to explain how your solution performs as the input grows.` }} />
      </p>
    

      <p key="p-6-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This involves understanding time complexity and space complexity.` }} />
      </p>
    

        <h3 key="h2-6-3" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `6.1 Time complexity` }} />
        </h3>
      

      <p key="p-6-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity describes how the amount of work grows with input size.` }} />
      </p>
    

      <p key="p-6-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

      <p key="p-6-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `for (int i = 0; i &lt; n; i++) &#123; System.out.println(i); &#125;` }} />
      </p>
    

      <p key="p-6-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The loop executes <span className="font-mono text-orange-300 font-semibold">n</span> times.` }} />
      </p>
    

      <p key="p-6-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Therefore:` }} />
      </p>
    

        <div key="math-6-9" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-6-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Now consider:` }} />
      </p>
    

      <p key="p-6-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `for (int i = 0; i &lt; n; i++) &#123; for (int j = 0; j &lt; n; j++) &#123; System.out.println(i + j); &#125; &#125;` }} />
      </p>
    

      <p key="p-6-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The inner loop executes <span className="font-mono text-orange-300 font-semibold">n</span> times for each of the <span className="font-mono text-orange-300 font-semibold">n</span> outer-loop iterations.` }} />
      </p>
    

      <p key="p-6-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Therefore:` }} />
      </p>
    

        <div key="math-6-14" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n^2)` }} />
        </div>
      

        <h3 key="h2-6-15" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `6.2 Important complexity classes` }} />
        </h3>
      

      <p key="p-6-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Complexity` }} />
      </p>
    

      <p key="p-6-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Name` }} />
      </p>
    

      <p key="p-6-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example` }} />
      </p>
    

      <p key="p-6-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
      </p>
    

      <p key="p-6-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Constant` }} />
      </p>
    

      <p key="p-6-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Array index access` }} />
      </p>
    

      <p key="p-6-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(log n)` }} />
      </p>
    

      <p key="p-6-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Logarithmic` }} />
      </p>
    

      <p key="p-6-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Binary Search` }} />
      </p>
    

      <p key="p-6-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
      </p>
    

      <p key="p-6-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Linear` }} />
      </p>
    

      <p key="p-6-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Array traversal` }} />
      </p>
    

      <p key="p-6-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n log n)` }} />
      </p>
    

      <p key="p-6-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Linearithmic` }} />
      </p>
    

      <p key="p-6-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Merge Sort` }} />
      </p>
    

      <p key="p-6-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n²)` }} />
      </p>
    

      <p key="p-6-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Quadratic` }} />
      </p>
    

      <p key="p-6-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Comparing every pair` }} />
      </p>
    

      <p key="p-6-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n³)` }} />
      </p>
    

      <p key="p-6-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Cubic` }} />
      </p>
    

      <p key="p-6-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Three nested loops` }} />
      </p>
    

      <p key="p-6-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(2ⁿ)` }} />
      </p>
    

      <p key="p-6-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Exponential` }} />
      </p>
    

      <p key="p-6-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Many subset searches` }} />
      </p>
    

      <p key="p-6-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n!)` }} />
      </p>
    

      <p key="p-6-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Factorial` }} />
      </p>
    

      <p key="p-6-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Generating all permutations` }} />
      </p>
    

      <p key="p-6-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Remember that Big O describes growth, not exact execution time.` }} />
      </p>
    

        <h3 key="h2-6-44" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `6.3 Space complexity` }} />
        </h3>
      

      <p key="p-6-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Space complexity measures memory requirements.` }} />
      </p>
    

      <p key="p-6-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

      <p key="p-6-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `int[] result = new int[n];` }} />
      </p>
    

      <p key="p-6-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The array requires:` }} />
      </p>
    

        <div key="math-6-49" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-6-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Now consider an iterative algorithm that uses only a few variables:` }} />
      </p>
    

      <p key="p-6-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `int sum = 0; int max = 0; int current = 0;` }} />
      </p>
    

      <p key="p-6-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Its auxiliary space is:` }} />
      </p>
    

        <div key="math-6-53" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
        </div>
      

      <p key="p-6-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space versus total space` }} />
      </p>
    

      <p key="p-6-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This distinction is important.` }} />
      </p>
    

      <p key="p-6-56" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example, a solution that receives an input array of size <span className="font-mono text-orange-300 font-semibold">n</span> and uses a HashMap of size <span className="font-mono text-orange-300 font-semibold">n</span> has:` }} />
      </p>
    

      <p key="p-6-57" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Input space: O(n), provided by the caller.` }} />
      </p>
    

      <p key="p-6-58" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Additional auxiliary space: O(n).` }} />
      </p>
    

      <p key="p-6-59" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You should clarify which definition you are using when explaining complexity.` }} />
      </p>
    

        <h3 key="h2-6-60" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `6.4 Recursion stack complexity` }} />
        </h3>
      

      <p key="p-6-61" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

      <p key="p-6-62" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `static int factorial(int n) &#123; if (n &lt;= 1) &#123; return 1; &#125; return n * factorial(n - 1); &#125;` }} />
      </p>
    

      <p key="p-6-63" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The function creates approximately <span className="font-mono text-orange-300 font-semibold">n</span> recursive stack frames.` }} />
      </p>
    

      <p key="p-6-64" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-6-65" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-6-66" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary recursion space:` }} />
      </p>
    

        <div key="math-6-67" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-6-68" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An iterative factorial implementation can achieve O(1) auxiliary space.` }} />
      </p>
    

        <h3 key="h2-6-69" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `6.5 Amortized complexity` }} />
        </h3>
      

      <p key="p-6-70" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Some data structure operations are occasionally expensive but inexpensive on average over a sequence of operations.` }} />
      </p>
    

      <p key="p-6-71" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example, adding an element to an ArrayList is normally O(1).` }} />
      </p>
    

      <p key="p-6-72" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When its internal array becomes full, Java may allocate a larger array and copy the old elements.` }} />
      </p>
    

      <p key="p-6-73" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `That particular insertion is expensive, but over many insertions the amortized complexity is:` }} />
      </p>
    

        <div key="math-6-74" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
        </div>
      

      <p key="p-6-75" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `How to explain complexity in an interview` }} />
      </p>
    

      <p key="p-6-76" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use this structure:` }} />
      </p>
    

      <p key="p-6-77" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The algorithm traverses the array once, and each element performs an expected constant-time HashMap lookup. Therefore, the expected time complexity is O(n). The HashMap may store up to n elements, so the auxiliary space complexity is O(n).` }} />
      </p>
    

      <p key="p-6-78" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is much stronger than simply saying, "The complexity is O(n)."` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 7,
    title: "7. Edge Case Analysis",
    summary: "Edge case discovery checklist: empty inputs, single elements, negative numbers, extreme duplicates, and integer overflow.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-7-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `7. Edge Case Analysis` }} />
        </h2>
      

        <h3 key="h2-7-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `7.1 What are edge cases?` }} />
        </h3>
      

      <p key="p-7-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Edge cases are special inputs that can expose mistakes in an otherwise correct algorithm.` }} />
      </p>
    

      <p key="p-7-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A solution may work perfectly for normal examples and still fail when the array is empty, contains duplicates, or contains extreme values.` }} />
      </p>
    

      <p key="p-7-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Consider:` }} />
      </p>
    

      <p key="p-7-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `nums = [1, 2, 3, 4, 5]` }} />
      </p>
    

      <p key="p-7-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your solution works.` }} />
      </p>
    

      <p key="p-7-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `But what about:` }} />
      </p>
    

      <p key="p-7-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `nums = []` }} />
      </p>
    

      <p key="p-7-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Or:` }} />
      </p>
    

      <p key="p-7-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `nums = [5]` }} />
      </p>
    

      <p key="p-7-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Or:` }} />
      </p>
    

      <p key="p-7-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `nums = [-10, -20, -30]` }} />
      </p>
    

      <p key="p-7-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `These inputs may expose boundary errors.` }} />
      </p>
    

        <h3 key="h2-7-14" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `7.2 Important edge case categories` }} />
        </h3>
      

        <div key="table-7-15" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-orange-300 font-semibold font-mono">
                <th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Category</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Empty input</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">[]</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Single element</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">[5]</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Two elements</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">[2, 7]</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">All duplicates</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">[4, 4, 4, 4]</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Negative values</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">[-5, -2, -8]</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Zero values</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">[0, 0, 1]</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Already sorted</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">[1, 2, 3, 4]</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Reverse sorted</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">[4, 3, 2, 1]</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Extreme values</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Integer.MAX_VALUE</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">No valid answer</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Target does not exist</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Multiple valid answers</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Several pairs satisfy the condition</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Large input</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">100,000 or more elements</td>
                </tr>
              
            </tbody>
          </table>
        </div>
      

        <h3 key="h2-7-16" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `7.3 Example: Maximum element` }} />
        </h3>
      

      <p key="p-7-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose you write:` }} />
      </p>
    

      <p key="p-7-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `int maximum = 0; for (int value : nums) &#123; maximum = Math.max(maximum, value); &#125;` }} />
      </p>
    

      <p key="p-7-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This fails when every element is negative.` }} />
      </p>
    

      <p key="p-7-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

      <p key="p-7-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[-8, -3, -10]` }} />
      </p>
    

      <p key="p-7-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your code returns zero, even though zero is not in the array.` }} />
      </p>
    

      <p key="p-7-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Correct approach:` }} />
      </p>
    

      <p key="p-7-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `if (nums == null || nums.length == 0) &#123; throw new IllegalArgumentException( "Array must not be empty" ); &#125; int maximum = nums[0]; for (int value : nums) &#123; maximum = Math.max(maximum, value); &#125;` }} />
      </p>
    

        <h3 key="h2-7-25" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `7.4 Edge case checklist` }} />
        </h3>
      

      <p key="p-7-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Before submitting a solution, consider:` }} />
      </p>
    

      <p key="p-7-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Is input empty?` }} />
      </p>
    

      <p key="p-7-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Is there only one element?` }} />
      </p>
    

      <p key="p-7-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Are duplicate elements present?` }} />
      </p>
    

      <p key="p-7-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can values be negative?` }} />
      </p>
    

      <p key="p-7-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Are there zeros?` }} />
      </p>
    

      <p key="p-7-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can the expected result be absent?` }} />
      </p>
    

      <p key="p-7-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can there be multiple valid answers?` }} />
      </p>
    

      <p key="p-7-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can integer overflow occur?` }} />
      </p>
    

      <p key="p-7-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Does the algorithm work at the first and last array positions?` }} />
      </p>
    

      <p key="p-7-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Is a null input possible under the problem's contract?` }} />
      </p>
    

      <p key="p-7-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not write defensive checks that contradict the stated input requirements. Apply the checks that matter for the actual problem.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 8,
    title: "8. Dry Runs",
    summary: "Systematic code walkthroughs, variable state tracking tables, tracing edge cases, and catching off-by-one errors before running code.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-8-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `8. Dry Runs` }} />
        </h2>
      

        <h3 key="h2-8-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `8.1 What is a dry run?` }} />
        </h3>
      

      <p key="p-8-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A dry run means manually executing your algorithm using a sample input and tracking the changing values.` }} />
      </p>
    

      <p key="p-8-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It helps you identify logical mistakes before running the program.` }} />
      </p>
    

      <p key="p-8-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose you have:` }} />
      </p>
    

      <p key="p-8-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `int[] nums = &#123;2, 7, 11, 15&#125;; int target = 9;` }} />
      </p>
    

      <p key="p-8-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You are using the HashMap Two Sum algorithm.` }} />
      </p>
    

      <p key="p-8-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The execution proceeds as follows:` }} />
      </p>
    

      <p key="p-8-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Iteration` }} />
      </p>
    

      <p key="p-8-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Current number` }} />
      </p>
    

      <p key="p-8-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Complement` }} />
      </p>
    

      <p key="p-8-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap` }} />
      </p>
    

      <p key="p-8-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Action` }} />
      </p>
    

      <p key="p-8-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `1` }} />
      </p>
    

      <p key="p-8-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `2` }} />
      </p>
    

      <p key="p-8-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `7` }} />
      </p>
    

      <p key="p-8-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `&#123;&#125;` }} />
      </p>
    

      <p key="p-8-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Store 2 at index 0` }} />
      </p>
    

      <p key="p-8-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `2` }} />
      </p>
    

      <p key="p-8-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `7` }} />
      </p>
    

      <p key="p-8-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `2` }} />
      </p>
    

      <p key="p-8-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `&#123;2=0&#125;` }} />
      </p>
    

      <p key="p-8-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find 2, return indices` }} />
      </p>
    

      <p key="p-8-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Result:` }} />
      </p>
    

      <p key="p-8-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[0, 1]` }} />
      </p>
    

        <h3 key="h2-8-25" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `8.2 How to dry run correctly` }} />
        </h3>
      

      <p key="p-8-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Create a table containing:` }} />
      </p>
    

      <p key="p-8-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Current index.` }} />
      </p>
    

      <p key="p-8-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Current value.` }} />
      </p>
    

      <p key="p-8-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Important variables.` }} />
      </p>
    

      <p key="p-8-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Data structure contents.` }} />
      </p>
    

      <p key="p-8-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Condition being checked.` }} />
      </p>
    

      <p key="p-8-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Result of the iteration.` }} />
      </p>
    

      <p key="p-8-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For recursion, also track:` }} />
      </p>
    

      <p key="p-8-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Function arguments.` }} />
      </p>
    

      <p key="p-8-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Current recursion depth.` }} />
      </p>
    

      <p key="p-8-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Base case.` }} />
      </p>
    

      <p key="p-8-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Return values.` }} />
      </p>
    

      <p key="p-8-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `State changes.` }} />
      </p>
    

      <p key="p-8-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For Dynamic Programming, track:` }} />
      </p>
    

      <p key="p-8-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `State definition.` }} />
      </p>
    

      <p key="p-8-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Current DP cell.` }} />
      </p>
    

      <p key="p-8-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Previous states used.` }} />
      </p>
    

      <p key="p-8-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Transition result.` }} />
      </p>
    

        <h3 key="h2-8-44" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `8.3 Example: Binary Search dry run` }} />
        </h3>
      

      <p key="p-8-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Input:` }} />
      </p>
    

      <p key="p-8-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Array = [2, 4, 6, 8, 10, 12, 14] Target = 10` }} />
      </p>
    

        <div key="table-8-47" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-orange-300 font-semibold font-mono">
                <th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Step</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Low</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">High</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Mid</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Value at Mid</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">1</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">0</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">6</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">3</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">8</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Search right</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">2</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">4</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">6</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">5</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">12</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Search left</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">3</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">4</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">4</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">4</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">10</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Found</td>
                </tr>
              
            </tbody>
          </table>
        </div>
      

      <p key="p-8-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-8-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Index = 4` }} />
      </p>
    

      <p key="p-8-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interview tip` }} />
      </p>
    

      <p key="p-8-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `During an interview, dry-run at least one normal example and one carefully chosen boundary case.` }} />
      </p>
    

      <p key="p-8-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For tricky algorithms, a complete dry run is often more valuable than quickly typing code.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 9,
    title: "9. Code Quality and Readability",
    summary: "Clean production code in interviews: semantic naming, modular helper functions, defensive checks, and Java conventions.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-9-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `9. Code Quality and Readability` }} />
        </h2>
      

      <p key="p-9-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Writing correct code is important, but writing code that another developer can understand is equally important.` }} />
      </p>
    

      <p key="p-9-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `In professional software development, your code will be read, maintained, tested, and modified by other people.` }} />
      </p>
    

        <h3 key="h2-9-3" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `9.1 Use meaningful variable names` }} />
        </h3>
      

      <p key="p-9-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Bad:` }} />
      </p>
    

      <p key="p-9-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `int x = 0; int y = 1; int z = 0;` }} />
      </p>
    

      <p key="p-9-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Better:` }} />
      </p>
    

      <p key="p-9-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `int left = 0; int right = 1; int maximumSum = 0;` }} />
      </p>
    

      <p key="p-9-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Variable names should describe their purpose.` }} />
      </p>
    

        <h3 key="h2-9-9" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `9.2 Avoid unnecessary complexity` }} />
        </h3>
      

      <p key="p-9-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Bad:` }} />
      </p>
    

      <p key="p-9-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `if (value &gt; 0) &#123; return true; &#125; else &#123; return false; &#125;` }} />
      </p>
    

      <p key="p-9-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Better:` }} />
      </p>
    

      <p key="p-9-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `return value &gt; 0;` }} />
      </p>
    

        <h3 key="h2-9-14" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `9.3 Divide large functions into smaller functions` }} />
        </h3>
      

      <p key="p-9-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead of putting every operation inside one large method, separate responsibilities.` }} />
      </p>
    

        <div key="code-9-16" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class NumberAnalyzer  &#123;
  static boolean isValid(int number)  &#123;
    return number &gt;= 0;
  &#125;
  static int calculateSquare(int number)  &#123;
    return number * number;
  &#125;
  public static void main(String[] args)  &#123;
    int number = 5;
    if (isValid(number))  &#123;
      System.out.println( calculateSquare(number) );
    &#125;
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

        <h3 key="h2-9-17" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `9.4 Important Java coding practices` }} />
        </h3>
      

      <p key="p-9-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use appropriate types` }} />
      </p>
    

      <p key="p-9-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use long for calculations that can exceed the int range.` }} />
      </p>
    

      <p key="p-9-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Choose collections correctly` }} />
      </p>
    

      <p key="p-9-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use HashMap for key-value lookup, HashSet for uniqueness, and ArrayDeque for stack and queue operations.` }} />
      </p>
    

      <p key="p-9-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Avoid unnecessary object creation` }} />
      </p>
    

      <p key="p-9-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Repeatedly creating temporary objects in a performance-critical loop can increase memory overhead.` }} />
      </p>
    

      <p key="p-9-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Handle boundaries` }} />
      </p>
    

      <p key="p-9-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Make array indexing, loop conditions, and null handling correct.` }} />
      </p>
    

      <p key="p-9-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use constants` }} />
      </p>
    

      <p key="p-9-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead of repeating important fixed values throughout a program, define named constants.` }} />
      </p>
    

      <p key="p-9-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Keep methods focused` }} />
      </p>
    

      <p key="p-9-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A method should ideally perform one clearly defined responsibility.` }} />
      </p>
    

        <h3 key="h2-9-30" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `9.5 Example of interview-ready code` }} />
        </h3>
      

      <p key="p-9-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problem: Check whether a string is a palindrome, ignoring letter case and non-alphanumeric characters.` }} />
      </p>
    

        <div key="code-9-32" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class PalindromeChecker  &#123;
  static boolean isPalindrome(String text)  &#123;
    if (text == null)  &#123;
      return false;
    &#125;
    int left = 0;
    int right = text.length() - 1;
    while (left &lt; right)  &#123;
      while (left &lt; right &amp;&amp; !Character.isLetterOrDigit( text.charAt(left) ))  &#123;
        left++;
      &#125;
      while (left &lt; right &amp;&amp; !Character.isLetterOrDigit( text.charAt(right) ))  &#123;
        right--;
      &#125;
      char first = Character.toLowerCase( text.charAt(left) );
      char second = Character.toLowerCase( text.charAt(right) );
      if (first != second)  &#123;
        return false;
      &#125;
      left++;
      right--;
    &#125;
    return true;
  &#125;
  public static void main(String[] args)  &#123;
    System.out.println( isPalindrome("A man, a plan, a canal: Panama") );
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-9-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-9-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `true` }} />
      </p>
    

      <p key="p-9-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The method uses two pointers and avoids creating a separate cleaned string.` }} />
      </p>
    

      <p key="p-9-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-9-37" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-9-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space:` }} />
      </p>
    

        <div key="math-9-39" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
        </div>
      
      </div>
    )
  },
  {
    id: 10,
    title: "10. Interview Communication",
    summary: "Think-Aloud protocol, active interviewer collaboration, taking hints constructively, and avoiding communication silence.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-10-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `10. Interview Communication` }} />
        </h2>
      

        <h3 key="h2-10-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `10.1 Why communication matters` }} />
        </h3>
      

      <p key="p-10-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Imagine two candidates.` }} />
      </p>
    

      <p key="p-10-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Candidate A immediately starts writing code without explaining anything.` }} />
      </p>
    

      <p key="p-10-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Candidate B explains the problem, discusses possible approaches, analyzes complexity, and then writes the implementation.` }} />
      </p>
    

      <p key="p-10-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Even if both produce the same code, Candidate B gives the interviewer much more information about their reasoning.` }} />
      </p>
    

      <p key="p-10-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Communication allows interviewers to understand how you approach difficult problems.` }} />
      </p>
    

        <h3 key="h2-10-7" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `10.2 Use the Think–Explain–Implement method` }} />
        </h3>
      

      <p key="p-10-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Think: Take time to understand the problem.` }} />
      </p>
    

      <p key="p-10-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain: Communicate the approach you intend to use.` }} />
      </p>
    

      <p key="p-10-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Implement: Write the code in a structured way.` }} />
      </p>
    

      <p key="p-10-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You do not need to explain every keystroke.` }} />
      </p>
    

      <p key="p-10-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead, explain important decisions.` }} />
      </p>
    

      <p key="p-10-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

      <p key="p-10-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `I can solve this using two nested loops, but that will take O(n²) time. Since I need to find whether a complementary value exists, a HashMap can store the values we have already visited. That should reduce the expected lookup time to O(1), giving us an overall expected O(n) solution.` }} />
      </p>
    

      <p key="p-10-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This explains:` }} />
      </p>
    

      <p key="p-10-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your understanding.` }} />
      </p>
    

      <p key="p-10-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your optimization idea.` }} />
      </p>
    

      <p key="p-10-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your choice of data structure.` }} />
      </p>
    

      <p key="p-10-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The expected complexity.` }} />
      </p>
    

        <h3 key="h2-10-20" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `10.3 What to say when you get stuck` }} />
        </h3>
      

      <p key="p-10-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Getting stuck is normal.` }} />
      </p>
    

      <p key="p-10-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not immediately become silent or randomly change your code.` }} />
      </p>
    

      <p key="p-10-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead, communicate where the difficulty lies.` }} />
      </p>
    

      <p key="p-10-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Useful statements:` }} />
      </p>
    

      <p key="p-10-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `"I understand the brute-force approach, but I am looking for a way to avoid repeated traversal."` }} />
      </p>
    

      <p key="p-10-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `"I think the problem has a monotonic property. I will check whether binary search is applicable."` }} />
      </p>
    

      <p key="p-10-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `"Let me test a smaller example to understand this transition."` }} />
      </p>
    

      <p key="p-10-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `"I have identified an edge case that may affect my current implementation."` }} />
      </p>
    

      <p key="p-10-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `"I want to verify whether this greedy choice is always safe."` }} />
      </p>
    

        <h3 key="h2-10-30" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `10.4 What interviewers generally evaluate` }} />
        </h3>
      

      <p key="p-10-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Evaluation area` }} />
      </p>
    

      <p key="p-10-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What it demonstrates` }} />
      </p>
    

      <p key="p-10-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problem understanding` }} />
      </p>
    

      <p key="p-10-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You interpret requirements correctly` }} />
      </p>
    

      <p key="p-10-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Logical reasoning` }} />
      </p>
    

      <p key="p-10-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You can develop a solution` }} />
      </p>
    

      <p key="p-10-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Algorithm selection` }} />
      </p>
    

      <p key="p-10-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You select appropriate techniques` }} />
      </p>
    

      <p key="p-10-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Optimization` }} />
      </p>
    

      <p key="p-10-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You recognize unnecessary computation` }} />
      </p>
    

      <p key="p-10-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Coding` }} />
      </p>
    

      <p key="p-10-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You can implement your reasoning` }} />
      </p>
    

      <p key="p-10-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Correctness` }} />
      </p>
    

      <p key="p-10-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You handle edge cases` }} />
      </p>
    

      <p key="p-10-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Complexity analysis` }} />
      </p>
    

      <p key="p-10-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You understand efficiency` }} />
      </p>
    

      <p key="p-10-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Communication` }} />
      </p>
    

      <p key="p-10-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You can explain technical decisions` }} />
      </p>
    

      <p key="p-10-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Adaptability` }} />
      </p>
    

      <p key="p-10-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You can respond to hints and changes` }} />
      </p>
    

        <h3 key="h2-10-51" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `10.5 Common communication mistakes` }} />
        </h3>
      

      <p key="p-10-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Avoid:` }} />
      </p>
    

      <p key="p-10-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Writing code without explaining your approach.` }} />
      </p>
    

      <p key="p-10-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Claiming an algorithm is optimal without justification.` }} />
      </p>
    

      <p key="p-10-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Saying "it is O(1)" without explaining why.` }} />
      </p>
    

      <p key="p-10-56" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Ignoring interviewer hints.` }} />
      </p>
    

      <p key="p-10-57" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Arguing unnecessarily.` }} />
      </p>
    

      <p key="p-10-58" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Staying silent for long periods.` }} />
      </p>
    

      <p key="p-10-59" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Pretending to understand something you do not understand.` }} />
      </p>
    

      <p key="p-10-60" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Changing the solution repeatedly without a clear reason.` }} />
      </p>
    

      <p key="p-10-61" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The objective is to communicate your reasoning clearly and professionally.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 11,
    title: "11. Java Coding Interview Questions",
    summary: "High-frequency Java-specific questions: equals/hashCode contracts, String immutability, OOP vs interfaces, and collections.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-11-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `11. Java Coding Interview Questions` }} />
        </h2>
      

      <p key="p-11-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java interviews often combine problem-solving questions with questions about the language itself.` }} />
      </p>
    

      <p key="p-11-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You should be comfortable writing DSA solutions and explaining Java's behavior.` }} />
      </p>
    

        <h3 key="h2-11-3" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `11.1 Core Java interview concepts` }} />
        </h3>
      

      <p key="p-11-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Topic` }} />
      </p>
    

      <p key="p-11-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What you should understand` }} />
      </p>
    

      <p key="p-11-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `OOP` }} />
      </p>
    

      <p key="p-11-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Encapsulation, inheritance, polymorphism, abstraction` }} />
      </p>
    

      <p key="p-11-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Classes and Objects` }} />
      </p>
    

      <p key="p-11-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Object creation, constructors, references` }} />
      </p>
    

      <p key="p-11-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Access Modifiers` }} />
      </p>
    

      <p key="p-11-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `private, protected, public, default` }} />
      </p>
    

      <p key="p-11-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `static` }} />
      </p>
    

      <p key="p-11-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Class-level members` }} />
      </p>
    

      <p key="p-11-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `final` }} />
      </p>
    

      <p key="p-11-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Variables, methods, and classes` }} />
      </p>
    

      <p key="p-11-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `String` }} />
      </p>
    

      <p key="p-11-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Immutability and string pool` }} />
      </p>
    

      <p key="p-11-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `StringBuilder` }} />
      </p>
    

      <p key="p-11-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Mutable string operations` }} />
      </p>
    

      <p key="p-11-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Collections` }} />
      </p>
    

      <p key="p-11-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `List, Set, Map, Queue` }} />
      </p>
    

      <p key="p-11-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Generics` }} />
      </p>
    

      <p key="p-11-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Type-safe reusable classes` }} />
      </p>
    

      <p key="p-11-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Exception Handling` }} />
      </p>
    

      <p key="p-11-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `try, catch, finally, throw, throws` }} />
      </p>
    

      <p key="p-11-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interfaces` }} />
      </p>
    

      <p key="p-11-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Contracts and multiple implementation` }} />
      </p>
    

      <p key="p-11-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Abstract Classes` }} />
      </p>
    

      <p key="p-11-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Shared behavior and abstraction` }} />
      </p>
    

      <p key="p-11-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `equals()` }} />
      </p>
    

      <p key="p-11-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Logical equality` }} />
      </p>
    

      <p key="p-11-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `hashCode()` }} />
      </p>
    

      <p key="p-11-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Hash-based collection behavior` }} />
      </p>
    

      <p key="p-11-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `JVM` }} />
      </p>
    

      <p key="p-11-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Runtime architecture` }} />
      </p>
    

      <p key="p-11-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Garbage Collection` }} />
      </p>
    

      <p key="p-11-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Memory management` }} />
      </p>
    

        <h3 key="h2-11-38" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `11.2 Important Java interview questions` }} />
        </h3>
      

      <p key="p-11-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q1. What is the difference between == and .equals()?` }} />
      </p>
    

      <p key="p-11-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `== compares primitive values directly. For objects, it generally checks whether two references point to the same object.` }} />
      </p>
    

      <p key="p-11-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `.equals() checks logical equality according to the method's implementation.` }} />
      </p>
    

      <p key="p-11-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

      <p key="p-11-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `String a = new String("Java"); String b = new String("Java"); System.out.println(a == b); System.out.println(a.equals(b));` }} />
      </p>
    

      <p key="p-11-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-11-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `false true` }} />
      </p>
    

      <p key="p-11-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The two objects have equal content but are different objects.` }} />
      </p>
    

      <p key="p-11-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q2. Why is String immutable in Java?` }} />
      </p>
    

      <p key="p-11-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Once a String object is created, its contents cannot be modified.` }} />
      </p>
    

      <p key="p-11-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Immutability provides benefits including:` }} />
      </p>
    

      <p key="p-11-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Safe sharing of String instances.` }} />
      </p>
    

      <p key="p-11-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Predictable hash codes.` }} />
      </p>
    

      <p key="p-11-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `String pool support.` }} />
      </p>
    

      <p key="p-11-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Easier use in concurrent programs.` }} />
      </p>
    

      <p key="p-11-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reduced risk of accidental modification.` }} />
      </p>
    

      <p key="p-11-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For repeated modifications, use StringBuilder.` }} />
      </p>
    

      <p key="p-11-56" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `StringBuilder builder = new StringBuilder(); builder.append("Hello"); builder.append(" Java"); System.out.println(builder);` }} />
      </p>
    

      <p key="p-11-57" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q3. What is the difference between ArrayList and LinkedList?` }} />
      </p>
    

      <p key="p-11-58" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `ArrayList:` }} />
      </p>
    

      <p key="p-11-59" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Uses a resizable array.` }} />
      </p>
    

      <p key="p-11-60" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Provides O(1) indexed access.` }} />
      </p>
    

      <p key="p-11-61" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Appending is amortized O(1).` }} />
      </p>
    

      <p key="p-11-62" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Middle insertion or deletion requires shifting elements.` }} />
      </p>
    

      <p key="p-11-63" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `LinkedList:` }} />
      </p>
    

      <p key="p-11-64" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Uses linked nodes.` }} />
      </p>
    

      <p key="p-11-65" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Indexed access is O(n).` }} />
      </p>
    

      <p key="p-11-66" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Insertion or deletion is O(1) when the relevant node or position is already known.` }} />
      </p>
    

      <p key="p-11-67" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Requires extra memory for links.` }} />
      </p>
    

      <p key="p-11-68" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For many everyday Java collection tasks, ArrayList is the preferable default.` }} />
      </p>
    

      <p key="p-11-69" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q4. How does HashMap work internally?` }} />
      </p>
    

      <p key="p-11-70" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A HashMap stores entries using keys and values.` }} />
      </p>
    

      <p key="p-11-71" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptually:` }} />
      </p>
    

      <p key="p-11-72" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It calculates the key's hash code.` }} />
      </p>
    

      <p key="p-11-73" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It uses the hash to identify a bucket.` }} />
      </p>
    

      <p key="p-11-74" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It handles collisions when multiple keys reach the same bucket.` }} />
      </p>
    

      <p key="p-11-75" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It uses equals() to distinguish keys when necessary.` }} />
      </p>
    

      <p key="p-11-76" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It may resize when its capacity threshold is exceeded.` }} />
      </p>
    

      <p key="p-11-77" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java's HashMap uses bucket-based storage and can use linked structures or balanced tree structures for certain heavily collided buckets.` }} />
      </p>
    

      <p key="p-11-78" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Expected basic lookup performance is O(1), while collision-heavy cases can be slower.` }} />
      </p>
    

      <p key="p-11-79" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q5. Why should equals() and hashCode() be consistent?` }} />
      </p>
    

      <p key="p-11-80" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The Java contract requires that if two objects are equal according to equals(), their hash codes must be equal.` }} />
      </p>
    

      <p key="p-11-81" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Otherwise, hash-based collections can behave incorrectly.` }} />
      </p>
    

      <p key="p-11-82" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q6. Is Java pass-by-reference or pass-by-value?` }} />
      </p>
    

      <p key="p-11-83" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java is always pass-by-value.` }} />
      </p>
    

      <p key="p-11-84" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For objects, the value being copied is the reference.` }} />
      </p>
    

      <p key="p-11-85" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This means a method can use a copied reference to modify the same object, but assigning a new object to that parameter does not replace the caller's reference.` }} />
      </p>
    

      <p key="p-11-86" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q7. What is the difference between an interface and an abstract class?` }} />
      </p>
    

      <p key="p-11-87" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An interface defines a contract that implementing classes follow.` }} />
      </p>
    

      <p key="p-11-88" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `An abstract class can provide shared state, constructors, concrete methods, and abstract methods.` }} />
      </p>
    

      <p key="p-11-89" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A class can implement multiple interfaces but can extend only one class.` }} />
      </p>
    

      <p key="p-11-90" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q8. What is garbage collection?` }} />
      </p>
    

      <p key="p-11-91" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Garbage Collection is the JVM's process of reclaiming memory occupied by objects that are no longer reachable.` }} />
      </p>
    

      <p key="p-11-92" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Developers do not normally manually free ordinary Java objects.` }} />
      </p>
    

      <p key="p-11-93" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q9. What is the difference between final, finally, and finalize()?` }} />
      </p>
    

      <p key="p-11-94" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `final: Restricts reassignment, overriding, or inheritance depending on where it is used.` }} />
      </p>
    

      <p key="p-11-95" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `finally: An exception-handling block that normally executes when control leaves the associated try/catch.` }} />
      </p>
    

      <p key="p-11-96" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `finalize(): An obsolete lifecycle mechanism that is deprecated for removal and should not be used for resource management.` }} />
      </p>
    

      <p key="p-11-97" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q10. What happens when a NullPointerException occurs?` }} />
      </p>
    

      <p key="p-11-98" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It occurs when code tries to perform an operation requiring a non-null reference on a null value.` }} />
      </p>
    

      <p key="p-11-99" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

      <p key="p-11-100" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `String name = null; System.out.println(name.length());` }} />
      </p>
    

      <p key="p-11-101" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This throws NullPointerException.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 12,
    title: "12. Arrays and Strings Interview Patterns",
    summary: "Two-pointer techniques, sliding window patterns, prefix sums, and character frequency arrays with worked implementations.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-12-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `12. Arrays and Strings Interview Patterns` }} />
        </h2>
      

      <p key="p-12-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Arrays and strings are among the most common subjects in coding interviews.` }} />
      </p>
    

      <p key="p-12-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The best way to prepare is to understand the major patterns rather than memorize individual problems.` }} />
      </p>
    

        <h3 key="h2-12-3" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `12.1 Arrays: Important patterns` }} />
        </h3>
      

      <p key="p-12-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Pattern` }} />
      </p>
    

      <p key="p-12-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problem examples` }} />
      </p>
    

      <p key="p-12-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Traversal` }} />
      </p>
    

      <p key="p-12-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find maximum and minimum` }} />
      </p>
    

      <p key="p-12-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two Pointers` }} />
      </p>
    

      <p key="p-12-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two Sum in sorted array` }} />
      </p>
    

      <p key="p-12-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Sliding Window` }} />
      </p>
    

      <p key="p-12-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Maximum sum subarray of size K` }} />
      </p>
    

      <p key="p-12-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Prefix Sum` }} />
      </p>
    

      <p key="p-12-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Subarray Sum Equals K` }} />
      </p>
    

      <p key="p-12-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Hashing` }} />
      </p>
    

      <p key="p-12-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two Sum, duplicates` }} />
      </p>
    

      <p key="p-12-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Binary Search` }} />
      </p>
    

      <p key="p-12-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Search in sorted arrays` }} />
      </p>
    

      <p key="p-12-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Sorting` }} />
      </p>
    

      <p key="p-12-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Merge intervals` }} />
      </p>
    

      <p key="p-12-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Greedy` }} />
      </p>
    

      <p key="p-12-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Jump Game` }} />
      </p>
    

      <p key="p-12-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Monotonic Stack` }} />
      </p>
    

      <p key="p-12-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Daily Temperatures` }} />
      </p>
    

      <p key="p-12-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Cyclic Sort` }} />
      </p>
    

      <p key="p-12-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Missing Number` }} />
      </p>
    

        <h3 key="h2-12-26" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `12.2 Strings: Important patterns` }} />
        </h3>
      

      <p key="p-12-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Pattern` }} />
      </p>
    

      <p key="p-12-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problem examples` }} />
      </p>
    

      <p key="p-12-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Character Frequency` }} />
      </p>
    

      <p key="p-12-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Valid Anagram` }} />
      </p>
    

      <p key="p-12-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap` }} />
      </p>
    

      <p key="p-12-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Group Anagrams` }} />
      </p>
    

      <p key="p-12-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two Pointers` }} />
      </p>
    

      <p key="p-12-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Valid Palindrome` }} />
      </p>
    

      <p key="p-12-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Sliding Window` }} />
      </p>
    

      <p key="p-12-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longest Substring Without Repeating Characters` }} />
      </p>
    

      <p key="p-12-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Prefix Matching` }} />
      </p>
    

      <p key="p-12-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longest Common Prefix` }} />
      </p>
    

      <p key="p-12-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `String Building` }} />
      </p>
    

      <p key="p-12-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `String compression` }} />
      </p>
    

      <p key="p-12-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Dynamic Programming` }} />
      </p>
    

      <p key="p-12-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longest Palindromic Subsequence` }} />
      </p>
    

      <p key="p-12-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Pattern Matching` }} />
      </p>
    

      <p key="p-12-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `KMP` }} />
      </p>
    

      <p key="p-12-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Stack` }} />
      </p>
    

      <p key="p-12-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Decode String` }} />
      </p>
    

        <h3 key="h2-12-47" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `12.3 Example: Longest Substring Without Repeating Characters` }} />
        </h3>
      

      <p key="p-12-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problem:` }} />
      </p>
    

      <p key="p-12-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the length of the longest substring without duplicate characters.` }} />
      </p>
    

      <p key="p-12-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Input:` }} />
      </p>
    

      <p key="p-12-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `"abcabcbb"` }} />
      </p>
    

      <p key="p-12-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-12-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `3` }} />
      </p>
    

      <p key="p-12-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explanation:` }} />
      </p>
    

      <p key="p-12-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `"abc" = length 3` }} />
      </p>
    

      <p key="p-12-56" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `No character repeats inside that substring.` }} />
      </p>
    

      <p key="p-12-57" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Brute-force approach` }} />
      </p>
    

      <p key="p-12-58" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Generate all substrings and check whether each one contains duplicates.` }} />
      </p>
    

      <p key="p-12-59" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This can take O(n³) time with straightforward substring and validation operations.` }} />
      </p>
    

      <p key="p-12-60" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Optimized approach: Sliding Window` }} />
      </p>
    

      <p key="p-12-61" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use two pointers:` }} />
      </p>
    

      <p key="p-12-62" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `left represents the window's beginning.` }} />
      </p>
    

      <p key="p-12-63" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `right represents the window's end.` }} />
      </p>
    

      <p key="p-12-64" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use an array to remember the most recent position of each ASCII character.` }} />
      </p>
    

      <p key="p-12-65" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When a duplicate appears inside the current window, move left beyond the previous occurrence.` }} />
      </p>
    

      <p key="p-12-66" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java implementation` }} />
      </p>
    

        <div key="code-12-67" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.Arrays;
public class LongestUniqueSubstring  &#123;
  static int lengthOfLongestSubstring(String s)  &#123;
    int[] lastSeen = new int[128];
    Arrays.fill(lastSeen, -1);
    int left = 0;
    int maximumLength = 0;
    for (int right = 0;  right &lt; s.length();  right++)  &#123;
      char current = s.charAt(right);
      if (current &lt; 128)  &#123;
        left = Math.max( left, lastSeen[current] + 1 );
        lastSeen[current] = right;
      &#125;
      else  &#123;
        throw new IllegalArgumentException( "This implementation supports ASCII only" );
      &#125;
      maximumLength = Math.max( maximumLength, right - left + 1 );
    &#125;
    return maximumLength;
  &#125;
  public static void main(String[] args)  &#123;
    System.out.println( lengthOfLongestSubstring("abcabcbb") );
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-12-68" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-12-69" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `3` }} />
      </p>
    

      <p key="p-12-70" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-12-71" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-12-72" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space:` }} />
      </p>
    

        <div key="math-12-73" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
        </div>
      

      <p key="p-12-74" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The implementation uses a fixed-size array because it explicitly assumes ASCII input. For unrestricted Unicode characters, use an appropriate map-based approach and define whether the problem measures UTF-16 code units, Unicode code points, or grapheme clusters.` }} />
      </p>
    

        <h3 key="h2-12-75" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `12.4 High-priority array and string problems` }} />
        </h3>
      

      <p key="p-12-76" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Arrays` }} />
      </p>
    

      <p key="p-12-77" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two Sum.` }} />
      </p>
    

      <p key="p-12-78" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Best Time to Buy and Sell Stock.` }} />
      </p>
    

      <p key="p-12-79" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Maximum Subarray.` }} />
      </p>
    

      <p key="p-12-80" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Product of Array Except Self.` }} />
      </p>
    

      <p key="p-12-81" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Merge Intervals.` }} />
      </p>
    

      <p key="p-12-82" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Rotate Array.` }} />
      </p>
    

      <p key="p-12-83" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Container With Most Water.` }} />
      </p>
    

      <p key="p-12-84" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Trapping Rain Water.` }} />
      </p>
    

      <p key="p-12-85" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Search in Rotated Sorted Array.` }} />
      </p>
    

      <p key="p-12-86" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Maximum Product Subarray.` }} />
      </p>
    

      <p key="p-12-87" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Strings` }} />
      </p>
    

      <p key="p-12-88" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Valid Anagram.` }} />
      </p>
    

      <p key="p-12-89" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Valid Palindrome.` }} />
      </p>
    

      <p key="p-12-90" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longest Substring Without Repeating Characters.` }} />
      </p>
    

      <p key="p-12-91" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Group Anagrams.` }} />
      </p>
    

      <p key="p-12-92" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longest Palindromic Substring.` }} />
      </p>
    

      <p key="p-12-93" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Minimum Window Substring.` }} />
      </p>
    

      <p key="p-12-94" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `String to Integer (atoi).` }} />
      </p>
    

      <p key="p-12-95" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longest Common Prefix.` }} />
      </p>
    

      <p key="p-12-96" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Valid Parentheses.` }} />
      </p>
    

      <p key="p-12-97" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Edit Distance.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 13,
    title: "13. Linked List Interview Questions",
    summary: "Pointer manipulation, reversal in O(N) time and O(1) space, Floyd's cycle detection, and merge mechanics.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-13-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `13. Linked List Interview Questions` }} />
        </h2>
      

        <h3 key="h2-13-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `13.1 What makes linked lists important?` }} />
        </h3>
      

      <p key="p-13-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Linked lists test your ability to work with references and pointers.` }} />
      </p>
    

      <p key="p-13-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Unlike arrays, linked-list nodes are connected through references.` }} />
      </p>
    

      <p key="p-13-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Each node contains:` }} />
      </p>
    

      <p key="p-13-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Data.` }} />
      </p>
    

      <p key="p-13-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A reference to the next node.` }} />
      </p>
    

      <p key="p-13-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For a singly linked list:` }} />
      </p>
    

      <p key="p-13-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `10 → 20 → 30 → 40 → null` }} />
      </p>
    

      <p key="p-13-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Understanding how to change links without losing access to the remaining nodes is essential.` }} />
      </p>
    

        <h3 key="h2-13-10" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `13.2 Most common linked-list patterns` }} />
        </h3>
      

      <p key="p-13-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Fast and Slow Pointers` }} />
      </p>
    

      <p key="p-13-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Useful for:` }} />
      </p>
    

      <p key="p-13-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Finding the middle node.` }} />
      </p>
    

      <p key="p-13-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Detecting cycles.` }} />
      </p>
    

      <p key="p-13-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Finding the beginning of a cycle.` }} />
      </p>
    

      <p key="p-13-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reversal` }} />
      </p>
    

      <p key="p-13-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Useful for:` }} />
      </p>
    

      <p key="p-13-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reversing an entire linked list.` }} />
      </p>
    

      <p key="p-13-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reversing a sublist.` }} />
      </p>
    

      <p key="p-13-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Checking palindromes.` }} />
      </p>
    

      <p key="p-13-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Dummy Node` }} />
      </p>
    

      <p key="p-13-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Useful for:` }} />
      </p>
    

      <p key="p-13-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Merging linked lists.` }} />
      </p>
    

      <p key="p-13-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Removing nodes.` }} />
      </p>
    

      <p key="p-13-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Building results without special first-node handling.` }} />
      </p>
    

      <p key="p-13-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Pointer Manipulation` }} />
      </p>
    

      <p key="p-13-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Useful for:` }} />
      </p>
    

      <p key="p-13-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Finding intersections.` }} />
      </p>
    

      <p key="p-13-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Rearranging nodes.` }} />
      </p>
    

      <p key="p-13-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Removing the Nth node from the end.` }} />
      </p>
    

        <h3 key="h2-13-31" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `13.3 Example: Reverse a Linked List` }} />
        </h3>
      

      <p key="p-13-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Input:` }} />
      </p>
    

      <p key="p-13-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `10 → 20 → 30 → 40 → null` }} />
      </p>
    

      <p key="p-13-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-13-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `40 → 30 → 20 → 10 → null` }} />
      </p>
    

      <p key="p-13-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java implementation` }} />
      </p>
    

        <div key="code-13-37" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class ReverseLinkedList  &#123;
  static class ListNode  &#123;
    int value;
    ListNode next;
    ListNode(int value)  &#123;
      this.value = value;
    &#125;
  &#125;
  static ListNode reverse(ListNode head)  &#123;
    ListNode previous = null;
    ListNode current = head;
    while (current != null)  &#123;
      ListNode nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    &#125;
    return previous;
  &#125;
  static void printList(ListNode head)  &#123;
    ListNode current = head;
    while (current != null)  &#123;
      System.out.print(current.value + " → ");
      current = current.next;
    &#125;
    System.out.println("null");
  &#125;
  public static void main(String[] args)  &#123;
    ListNode head = new ListNode(10);
    head.next = new ListNode(20);
    head.next.next = new ListNode(30);
    head.next.next.next = new ListNode(40);
    head = reverse(head);
    printList(head);
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-13-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-13-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `40 → 30 → 20 → 10 → null` }} />
      </p>
    

      <p key="p-13-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Understand the three pointers` }} />
      </p>
    

      <p key="p-13-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `previous: The node before the current node in the reversed list.` }} />
      </p>
    

      <p key="p-13-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `current: The node currently being processed.` }} />
      </p>
    

      <p key="p-13-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `nextNode: Temporarily preserves the remaining list.` }} />
      </p>
    

      <p key="p-13-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The temporary nextNode reference is important. Without it, changing current.next would lose the connection to the remaining nodes.` }} />
      </p>
    

      <p key="p-13-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-13-46" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-13-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space:` }} />
      </p>
    

        <div key="math-13-48" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
        </div>
      

        <h3 key="h2-13-49" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `13.4 Fast and Slow Pointer: Cycle Detection` }} />
        </h3>
      

      <p key="p-13-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Floyd's Cycle Detection Algorithm uses two pointers.` }} />
      </p>
    

      <p key="p-13-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Slow moves one step at a time.` }} />
      </p>
    

      <p key="p-13-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Fast moves two steps at a time.` }} />
      </p>
    

      <p key="p-13-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `If a cycle exists, the pointers eventually meet.` }} />
      </p>
    

      <p key="p-13-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `static boolean hasCycle(ListNode head) &#123; ListNode slow = head; ListNode fast = head; while (fast != null &amp;&amp; fast.next != null) &#123; slow = slow.next; fast = fast.next.next; if (slow == fast) &#123; return true; &#125; &#125; return false; &#125;` }} />
      </p>
    

      <p key="p-13-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-13-56" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-13-57" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space:` }} />
      </p>
    

        <div key="math-13-58" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
        </div>
      

        <h3 key="h2-13-59" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `13.5 Linked-list interview practice` }} />
        </h3>
      

      <p key="p-13-60" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reverse a linked list.` }} />
      </p>
    

      <p key="p-13-61" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the middle of a linked list.` }} />
      </p>
    

      <p key="p-13-62" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Detect a linked-list cycle.` }} />
      </p>
    

      <p key="p-13-63" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the starting point of a cycle.` }} />
      </p>
    

      <p key="p-13-64" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Merge two sorted lists.` }} />
      </p>
    

      <p key="p-13-65" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Remove the Nth node from the end.` }} />
      </p>
    

      <p key="p-13-66" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the intersection of two linked lists.` }} />
      </p>
    

      <p key="p-13-67" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Add two numbers represented by linked lists.` }} />
      </p>
    

      <p key="p-13-68" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Check whether a linked list is a palindrome.` }} />
      </p>
    

      <p key="p-13-69" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reverse nodes in groups of K.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 14,
    title: "14. Tree and Graph Interview Questions",
    summary: "BFS level-order traversal, DFS tree height and symmetry, graph adjacency representation, and shortest-path BFS.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-14-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `14. Tree and Graph Interview Questions` }} />
        </h2>
      

      <p key="p-14-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Trees and graphs test your ability to think recursively and manage relationships between objects.` }} />
      </p>
    

        <h3 key="h2-14-2" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `14.1 Tree interview patterns` }} />
        </h3>
      

      <p key="p-14-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Important patterns:` }} />
      </p>
    

      <p key="p-14-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `DFS traversals.` }} />
      </p>
    

      <p key="p-14-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `BFS level-order traversal.` }} />
      </p>
    

      <p key="p-14-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Recursion.` }} />
      </p>
    

      <p key="p-14-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Binary Search Tree properties.` }} />
      </p>
    

      <p key="p-14-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Height and depth.` }} />
      </p>
    

      <p key="p-14-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Diameter.` }} />
      </p>
    

      <p key="p-14-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Lowest Common Ancestor.` }} />
      </p>
    

      <p key="p-14-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Path-sum problems.` }} />
      </p>
    

      <p key="p-14-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Tree DP.` }} />
      </p>
    

      <p key="p-14-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Serialization and deserialization.` }} />
      </p>
    

      <p key="p-14-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example: Level-Order Traversal` }} />
      </p>
    

      <p key="p-14-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Given a binary tree:` }} />
      </p>
    

      <p key="p-14-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `1 / &#92; 2 3 / &#92; &#92; 4 5 6` }} />
      </p>
    

      <p key="p-14-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Level-order traversal:` }} />
      </p>
    

      <p key="p-14-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[[1], [2, 3], [4, 5, 6]]` }} />
      </p>
    

      <p key="p-14-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `We use a Queue because we want to process nodes in the order they are discovered, one level at a time.` }} />
      </p>
    

      <p key="p-14-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java implementation` }} />
      </p>
    

        <div key="code-14-21" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;
public class TreeLevelOrder  &#123;
  static class TreeNode  &#123;
    int value;
    TreeNode left;
    TreeNode right;
    TreeNode(int value)  &#123;
      this.value = value;
    &#125;
  &#125;
  static List&lt;List&lt;Integer&gt;&gt; levelOrder(TreeNode root)  &#123;
    List&lt;List&lt;Integer&gt;&gt; result = new ArrayList&lt;&gt;();
    if (root == null)  &#123;
      return result;
    &#125;
    Queue&lt;TreeNode&gt; queue = new ArrayDeque&lt;&gt;();
    queue.offer(root);
    while (!queue.isEmpty())  &#123;
      int size = queue.size();
      List&lt;Integer&gt; level = new ArrayList&lt;&gt;();
      for (int i = 0;  i &lt; size;  i++)  &#123;
        TreeNode current = queue.poll();
        level.add(current.value);
        if (current.left != null)  &#123;
          queue.offer(current.left);
        &#125;
        if (current.right != null)  &#123;
          queue.offer(current.right);
        &#125;
      &#125;
      result.add(level);
    &#125;
    return result;
  &#125;
  public static void main(String[] args)  &#123;
    TreeNode root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.right = new TreeNode(6);
    System.out.println(levelOrder(root));
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-14-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-14-23" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-14-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space:` }} />
      </p>
    

        <div key="math-14-25" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

        <h3 key="h2-14-26" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `14.2 Graph interview patterns` }} />
        </h3>
      

      <p key="p-14-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Pattern` }} />
      </p>
    

      <p key="p-14-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Important problems` }} />
      </p>
    

      <p key="p-14-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `BFS` }} />
      </p>
    

      <p key="p-14-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Shortest path in unweighted graph` }} />
      </p>
    

      <p key="p-14-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `DFS` }} />
      </p>
    

      <p key="p-14-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Connected components` }} />
      </p>
    

      <p key="p-14-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Cycle Detection` }} />
      </p>
    

      <p key="p-14-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Detect directed or undirected cycles` }} />
      </p>
    

      <p key="p-14-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Topological Sort` }} />
      </p>
    

      <p key="p-14-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Course Schedule` }} />
      </p>
    

      <p key="p-14-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Dijkstra` }} />
      </p>
    

      <p key="p-14-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Weighted shortest path` }} />
      </p>
    

      <p key="p-14-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Union-Find` }} />
      </p>
    

      <p key="p-14-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Redundant Connection` }} />
      </p>
    

      <p key="p-14-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Minimum Spanning Tree` }} />
      </p>
    

      <p key="p-14-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Network connection cost` }} />
      </p>
    

      <p key="p-14-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Bipartite Coloring` }} />
      </p>
    

      <p key="p-14-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Possible Bipartition` }} />
      </p>
    

      <p key="p-14-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Grid Traversal` }} />
      </p>
    

      <p key="p-14-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Number of Islands` }} />
      </p>
    

      <p key="p-14-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example: Graph BFS` }} />
      </p>
    

      <p key="p-14-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose you have:` }} />
      </p>
    

      <p key="p-14-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `0 — 1 — 2 | | 3 — 4` }} />
      </p>
    

      <p key="p-14-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Starting from node 0, BFS processes reachable nodes level by level.` }} />
      </p>
    

      <p key="p-14-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A possible traversal order is:` }} />
      </p>
    

      <p key="p-14-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `0, 1, 3, 2, 4` }} />
      </p>
    

      <p key="p-14-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The exact order may differ depending on adjacency-list ordering.` }} />
      </p>
    

      <p key="p-14-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java implementation` }} />
      </p>
    

        <div key="code-14-55" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`import java.util.*;
public class GraphBFS  &#123;
  static void bfs( List&lt;List&lt;Integer&gt;&gt; graph, int source )  &#123;
    boolean[] visited = new boolean[graph.size()];
    Queue&lt;Integer&gt; queue = new ArrayDeque&lt;&gt;();
    visited[source] = true;
    queue.offer(source);
    while (!queue.isEmpty())  &#123;
      int current = queue.poll();
      System.out.print(current + " ");
      for (int neighbor : graph.get(current))  &#123;
        if (!visited[neighbor])  &#123;
          visited[neighbor] = true;
          queue.offer(neighbor);
        &#125;
      &#125;
    &#125;
  &#125;
  public static void main(String[] args)  &#123;
    int vertices = 5;
    List&lt;List&lt;Integer&gt;&gt; graph = new ArrayList&lt;&gt;();
    for (int i = 0;  i &lt; vertices;  i++)  &#123;
      graph.add(new ArrayList&lt;&gt;());
    &#125;
    int[][] edges =  &#123;
      &#123;
        0, 1
      &#125;
      ,  &#123;
        0, 3
      &#125;
      ,  &#123;
        1, 2
      &#125;
      ,  &#123;
        1, 4
      &#125;
      ,  &#123;
        3, 4
      &#125;
    &#125;;
    for (int[] edge : edges)  &#123;
      int u = edge[0];
      int v = edge[1];
      graph.get(u).add(v);
      graph.get(v).add(u);
    &#125;
    bfs(graph, 0);
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-14-56" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-14-57" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(V+E)` }} />
        </div>
      

      <p key="p-14-58" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For adjacency lists, each vertex is processed once and each edge is examined a constant number of times.` }} />
      </p>
    

        <h3 key="h2-14-59" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `14.3 Tree and Graph high-priority questions` }} />
        </h3>
      

      <p key="p-14-60" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Trees` }} />
      </p>
    

      <p key="p-14-61" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Maximum Depth of Binary Tree.` }} />
      </p>
    

      <p key="p-14-62" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Same Tree.` }} />
      </p>
    

      <p key="p-14-63" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Invert Binary Tree.` }} />
      </p>
    

      <p key="p-14-64" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Diameter of Binary Tree.` }} />
      </p>
    

      <p key="p-14-65" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Balanced Binary Tree.` }} />
      </p>
    

      <p key="p-14-66" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Binary Tree Level Order Traversal.` }} />
      </p>
    

      <p key="p-14-67" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Lowest Common Ancestor.` }} />
      </p>
    

      <p key="p-14-68" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Validate Binary Search Tree.` }} />
      </p>
    

      <p key="p-14-69" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Path Sum.` }} />
      </p>
    

      <p key="p-14-70" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Serialize and Deserialize Binary Tree.` }} />
      </p>
    

      <p key="p-14-71" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Graphs` }} />
      </p>
    

      <p key="p-14-72" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Number of Islands.` }} />
      </p>
    

      <p key="p-14-73" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Clone Graph.` }} />
      </p>
    

      <p key="p-14-74" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Course Schedule.` }} />
      </p>
    

      <p key="p-14-75" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Rotting Oranges.` }} />
      </p>
    

      <p key="p-14-76" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Graph Valid Tree.` }} />
      </p>
    

      <p key="p-14-77" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Number of Connected Components.` }} />
      </p>
    

      <p key="p-14-78" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Network Delay Time.` }} />
      </p>
    

      <p key="p-14-79" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Word Ladder.` }} />
      </p>
    

      <p key="p-14-80" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Redundant Connection.` }} />
      </p>
    

      <p key="p-14-81" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Accounts Merge.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 15,
    title: "15. Dynamic Programming Interview Questions",
    summary: "Identifying overlapping subproblems, memoization vs tabulation, state compression, House Robber, and Knapsack.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-15-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `15. Dynamic Programming Interview Questions` }} />
        </h2>
      

      <p key="p-15-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Dynamic Programming is one of the most challenging interview subjects because candidates often struggle to identify the correct state.` }} />
      </p>
    

      <p key="p-15-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The key is to approach DP systematically.` }} />
      </p>
    

        <h3 key="h2-15-3" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `15.1 The five-step DP framework` }} />
        </h3>
      

      <p key="p-15-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Define what each state represents.` }} />
      </p>
    

      <p key="p-15-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Identify the choices available.` }} />
      </p>
    

      <p key="p-15-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Build the transition.` }} />
      </p>
    

      <p key="p-15-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Define base cases.` }} />
      </p>
    

      <p key="p-15-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Determine the calculation order.` }} />
      </p>
    

      <p key="p-15-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Then analyze complexity and optimize memory if possible.` }} />
      </p>
    

        <h3 key="h2-15-10" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `15.2 Example: House Robber` }} />
        </h3>
      

      <p key="p-15-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problem:` }} />
      </p>
    

      <p key="p-15-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A robber wants to steal money from houses arranged in a row.` }} />
      </p>
    

      <p key="p-15-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Each house contains a certain amount of money.` }} />
      </p>
    

      <p key="p-15-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `However, the robber cannot rob two adjacent houses.` }} />
      </p>
    

      <p key="p-15-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Given:` }} />
      </p>
    

      <p key="p-15-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `nums = [2, 7, 9, 3, 1]` }} />
      </p>
    

      <p key="p-15-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the maximum amount that can be stolen.` }} />
      </p>
    

      <p key="p-15-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Answer:` }} />
      </p>
    

      <p key="p-15-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `12` }} />
      </p>
    

      <p key="p-15-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explanation:` }} />
      </p>
    

      <p key="p-15-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `2 + 9 + 1 = 12` }} />
      </p>
    

      <p key="p-15-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Step 1: Define the state` }} />
      </p>
    

      <p key="p-15-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Let:` }} />
      </p>
    

        <div key="math-15-24" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `dp[i]` }} />
        </div>
      

      <p key="p-15-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `represent the maximum money that can be stolen from houses 0 through i.` }} />
      </p>
    

      <p key="p-15-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Step 2: Identify the choices` }} />
      </p>
    

      <p key="p-15-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `At house i:` }} />
      </p>
    

      <p key="p-15-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Choice 1: Rob the current house.` }} />
      </p>
    

      <p key="p-15-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Then the previous house cannot be robbed.` }} />
      </p>
    

        <div key="math-15-30" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `nums[i]+dp[i-2]` }} />
        </div>
      

      <p key="p-15-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Choice 2: Do not rob the current house.` }} />
      </p>
    

        <div key="math-15-32" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `dp[i-1]` }} />
        </div>
      

      <p key="p-15-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Step 3: Build the transition` }} />
      </p>
    

        <div key="math-15-34" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `dp[i]=max(dp[i-1],nums[i]+dp[i-2])` }} />
        </div>
      

      <p key="p-15-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Step 4: Base cases` }} />
      </p>
    

        <div key="math-15-36" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `dp[0]=nums[0]` }} />
        </div>
      

        <div key="math-15-37" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `dp[1]=max(nums[0],nums[1])` }} />
        </div>
      

      <p key="p-15-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Step 5: Java implementation` }} />
      </p>
    

        <div key="code-15-39" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class HouseRobber  &#123;
  static int rob(int[] nums)  &#123;
    if (nums == null || nums.length == 0)  &#123;
      return 0;
    &#125;
    int previousTwo = 0;
    int previousOne = 0;
    for (int money : nums)  &#123;
      int current = Math.max( previousOne, previousTwo + money );
      previousTwo = previousOne;
      previousOne = current;
    &#125;
    return previousOne;
  &#125;
  public static void main(String[] args)  &#123;
    int[] nums =  &#123;
      2, 7, 9, 3, 1
    &#125;;
    System.out.println(rob(nums));
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-15-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-15-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `12` }} />
      </p>
    

      <p key="p-15-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-15-43" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-15-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space:` }} />
      </p>
    

        <div key="math-15-45" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
        </div>
      

      <p key="p-15-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `We reduced the memory requirement by retaining only the two previous states.` }} />
      </p>
    

        <h3 key="h2-15-47" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `15.3 Important DP interview categories` }} />
        </h3>
      

        <div key="table-15-48" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-orange-300 font-semibold font-mono">
                <th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Category</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Essential Questions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">1D DP</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Climbing Stairs, House Robber</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Grid DP</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Unique Paths, Minimum Path Sum</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Knapsack</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">0/1 Knapsack, Coin Change</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Subsequence DP</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">LCS, LIS</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">String DP</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Edit Distance, Palindromic Subsequence</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Interval DP</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Matrix Chain Multiplication</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Tree DP</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">House Robber III</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Bitmask DP</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Travelling Salesperson Problem</td>
                </tr>
              
            </tbody>
          </table>
        </div>
      

        <h3 key="h2-15-49" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `15.4 Important DP interview questions` }} />
        </h3>
      

      <p key="p-15-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Fibonacci using memoization and tabulation.` }} />
      </p>
    

      <p key="p-15-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Climbing Stairs.` }} />
      </p>
    

      <p key="p-15-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `House Robber.` }} />
      </p>
    

      <p key="p-15-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Coin Change.` }} />
      </p>
    

      <p key="p-15-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `0/1 Knapsack.` }} />
      </p>
    

      <p key="p-15-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longest Common Subsequence.` }} />
      </p>
    

      <p key="p-15-56" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longest Increasing Subsequence.` }} />
      </p>
    

      <p key="p-15-57" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Edit Distance.` }} />
      </p>
    

      <p key="p-15-58" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Unique Paths.` }} />
      </p>
    

      <p key="p-15-59" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Maximum Product Subarray.` }} />
      </p>
    

      <p key="p-15-60" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Word Break.` }} />
      </p>
    

      <p key="p-15-61" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Partition Equal Subset Sum.` }} />
      </p>
    

      <p key="p-15-62" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Longest Palindromic Subsequence.` }} />
      </p>
    

      <p key="p-15-63" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Minimum Path Sum.` }} />
      </p>
    

      <p key="p-15-64" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Burst Balloons.` }} />
      </p>
    

      <p key="p-15-65" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interview tip: Always explain the meaning of the DP state before writing the transition. It makes your solution much easier to understand and verify.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 16,
    title: "16. Mock Technical Interviews",
    summary: "Simulating live technical interviews, time management, peer feedback rubrics, and handling unfamiliar constraints.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-16-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `16. Mock Technical Interviews` }} />
        </h2>
      

        <h3 key="h2-16-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `16.1 What is a mock interview?` }} />
        </h3>
      

      <p key="p-16-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A mock interview is a practice interview designed to simulate an actual technical interview.` }} />
      </p>
    

      <p key="p-16-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It helps you identify weaknesses before attending real placement interviews.` }} />
      </p>
    

      <p key="p-16-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `During a mock interview, you should behave as though you are speaking to an actual interviewer.` }} />
      </p>
    

      <p key="p-16-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not immediately look up solutions when you become stuck.` }} />
      </p>
    

      <p key="p-16-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Instead, work through the problem and communicate your reasoning.` }} />
      </p>
    

        <h3 key="h2-16-7" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `16.2 Typical mock technical interview structure` }} />
        </h3>
      

      <p key="p-16-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A 60-minute mock interview` }} />
      </p>
    

      <p key="p-16-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `0–5 minutes: Introduction` }} />
      </p>
    

      <p key="p-16-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain your background, technical interests, projects, and experience.` }} />
      </p>
    

      <p key="p-16-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `5–15 minutes: Core technical questions` }} />
      </p>
    

      <p key="p-16-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Answer questions about Java, OOP, collections, complexity, and DSA concepts.` }} />
      </p>
    

      <p key="p-16-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `15–40 minutes: Coding problem` }} />
      </p>
    

      <p key="p-16-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Clarify the requirements, discuss approaches, implement a solution, and dry-run it.` }} />
      </p>
    

      <p key="p-16-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `40–50 minutes: Follow-up questions` }} />
      </p>
    

      <p key="p-16-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Discuss optimization, alternative solutions, constraints, and edge cases.` }} />
      </p>
    

      <p key="p-16-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `50–60 minutes: Evaluation` }} />
      </p>
    

      <p key="p-16-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Review mistakes, communication, code quality, and areas to improve.` }} />
      </p>
    

        <h3 key="h2-16-19" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `16.3 Example mock interview` }} />
        </h3>
      

      <p key="p-16-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Interviewer:` }} />
      </p>
    

      <p key="p-16-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Given an integer array, find the maximum sum of any contiguous subarray.` }} />
      </p>
    

      <p key="p-16-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Example:` }} />
      </p>
    

      <p key="p-16-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[-2, 1, -3, 4, -1, 2, 1, -5, 4]` }} />
      </p>
    

      <p key="p-16-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Expected output:` }} />
      </p>
    

      <p key="p-16-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `6` }} />
      </p>
    

      <p key="p-16-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Because:` }} />
      </p>
    

      <p key="p-16-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[4, -1, 2, 1] = 6` }} />
      </p>
    

      <p key="p-16-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your responsibilities as the candidate:` }} />
      </p>
    

      <p key="p-16-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `First, clarify whether the subarray must be non-empty and whether all values may be negative.` }} />
      </p>
    

      <p key="p-16-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Second, explain your brute-force approach.` }} />
      </p>
    

      <p key="p-16-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Third, identify that repeatedly calculating subarray sums is unnecessary.` }} />
      </p>
    

      <p key="p-16-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Fourth, introduce Kadane's Algorithm.` }} />
      </p>
    

      <p key="p-16-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The key recurrence is:` }} />
      </p>
    

        <div key="math-16-34" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `currentSum=max(value,currentSum+value)` }} />
        </div>
      

        <div key="math-16-35" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `maximumSum=max(maximumSum,currentSum)` }} />
        </div>
      

      <p key="p-16-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java implementation:` }} />
      </p>
    

        <div key="code-16-37" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{`public class MaximumSubarray  &#123;
  static int maxSubArray(int[] nums)  &#123;
    if (nums == null || nums.length == 0)  &#123;
      throw new IllegalArgumentException( "Array must not be empty" );
    &#125;
    int currentSum = nums[0];
    int maximumSum = nums[0];
    for (int i = 1;  i &lt; nums.length;  i++)  &#123;
      currentSum = Math.max( nums[i], currentSum + nums[i] );
      maximumSum = Math.max( maximumSum, currentSum );
    &#125;
    return maximumSum;
  &#125;
  public static void main(String[] args)  &#123;
    int[] nums =  &#123;
      -2, 1, -3, 4, -1, 2, 1, -5, 4
    &#125;;
    System.out.println(maxSubArray(nums));
  &#125;
&#125;`}</code>
          </pre>
        </div>
      

      <p key="p-16-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Output:` }} />
      </p>
    

      <p key="p-16-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `6` }} />
      </p>
    

      <p key="p-16-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time complexity:` }} />
      </p>
    

        <div key="math-16-41" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(n)` }} />
        </div>
      

      <p key="p-16-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Auxiliary space:` }} />
      </p>
    

        <div key="math-16-43" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-orange-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: `O(1)` }} />
        </div>
      

      <p key="p-16-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Follow-up questions an interviewer might ask` }} />
      </p>
    

      <p key="p-16-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What happens if all elements are negative?` }} />
      </p>
    

      <p key="p-16-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can you return the actual subarray?` }} />
      </p>
    

      <p key="p-16-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What if the sum exceeds the integer range?` }} />
      </p>
    

      <p key="p-16-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Can you explain why this greedy-looking recurrence is correct?` }} />
      </p>
    

      <p key="p-16-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is the brute-force complexity?` }} />
      </p>
    

      <p key="p-16-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `How would you test this implementation?` }} />
      </p>
    

      <p key="p-16-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A good mock interview does not end when the code works. It also tests how deeply you understand your solution.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 17,
    title: "17. Timed Coding Assessments",
    summary: "Online assessment (OA) strategies: rapid question triage, managing time budgets, brute-force fallback, and test suite verification.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-17-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `17. Timed Coding Assessments` }} />
        </h2>
      

        <h3 key="h2-17-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `17.1 What are timed assessments?` }} />
        </h3>
      

      <p key="p-17-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Timed assessments evaluate your ability to solve programming problems within a fixed duration.` }} />
      </p>
    

      <p key="p-17-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `They may be used during:` }} />
      </p>
    

      <p key="p-17-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Online placement examinations.` }} />
      </p>
    

      <p key="p-17-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Internship selection.` }} />
      </p>
    

      <p key="p-17-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Campus recruitment.` }} />
      </p>
    

      <p key="p-17-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Off-campus hiring.` }} />
      </p>
    

      <p key="p-17-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Technical screening rounds.` }} />
      </p>
    

      <p key="p-17-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `They often contain multiple problems with different difficulty levels.` }} />
      </p>
    

        <h3 key="h2-17-10" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `17.2 How to manage time` }} />
        </h3>
      

      <p key="p-17-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Suppose you have a 90-minute assessment containing three problems.` }} />
      </p>
    

      <p key="p-17-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `One possible strategy:` }} />
      </p>
    

        <div key="table-17-13" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-orange-300 font-semibold font-mono">
                <th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Time Window</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Activity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">0–5 min</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Read all problems</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">5–25 min</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Solve the easiest problem</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">25–55 min</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Work on the medium problem</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">55–80 min</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Attempt the difficult problem</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">80–90 min</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Test, debug, and verify submissions</td>
                </tr>
              
            </tbody>
          </table>
        </div>
      

      <p key="p-17-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This is an example, not a universal schedule. Adjust it based on the difficulty and scoring system.` }} />
      </p>
    

        <h3 key="h2-17-15" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `17.3 Prioritize effectively` }} />
        </h3>
      

      <p key="p-17-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not spend 45 minutes stuck on one problem when you could complete two easier questions.` }} />
      </p>
    

      <p key="p-17-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A useful strategy is:` }} />
      </p>
    

      <p key="p-17-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Read all the questions.` }} />
      </p>
    

      <p key="p-17-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Estimate their difficulty.` }} />
      </p>
    

      <p key="p-17-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Identify the approaches you already understand.` }} />
      </p>
    

      <p key="p-17-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Solve the most accessible problem first.` }} />
      </p>
    

      <p key="p-17-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Move to the next problem.` }} />
      </p>
    

      <p key="p-17-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Return to difficult questions when time permits.` }} />
      </p>
    

        <h3 key="h2-17-24" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `17.4 Common assessment platforms` }} />
        </h3>
      

      <p key="p-17-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[Leetcode 是什麼？誰需要刷題？必考題有哪些 - ALPHA Camp](https://images.openai.com/static-rsc-4/GkV_HxGhGfjF1K1nws6bgRfBPj0rrmy2GOmWFZHm7Rxv5RVzUio_lcHSg0c16Qnku32zdEwtl86_EkLwj27HNd5fTXCbreRt-2l0YrdxwPdYt4lA3O2d-7cXk1zhvw6pxJgsSOz5ggf1b-Q1P8Dwl_TXnIWxfVlFzuSAVZ02-qM?purpose=inline)` }} />
      </p>
    

      <p key="p-17-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `LeetCode` }} />
      </p>
    

      <p key="p-17-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Algorithm and data structure practice, contests, and interview-style questions.` }} />
      </p>
    

      <p key="p-17-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[Visit LeetCode](https://leetcode.com/?utm_source=chatgpt.com)` }} />
      </p>
    

      <p key="p-17-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[HackerRank Launches Two New Solutions to Help Companies Become GenAI Ready - European Business Magazine](https://images.openai.com/static-rsc-4/7pZX1y9qhCdNm5M7Ty57VVo4TrLfIJz4XfKkuFsEgrOi8RU7WGzOJm1t2prTSmYC752qQvL9y1rszN5IHkohWvXhS8wgTgt9wgJuACaGFYT2yvXRWvpNnKzBatHraycDqCVGZ6R3JnTshmgWLDy7aLvJyzSbB-herT5WOemofnM?purpose=inline)` }} />
      </p>
    

      <p key="p-17-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HackerRank` }} />
      </p>
    

      <p key="p-17-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Programming challenges, Java practice, and skills assessments.` }} />
      </p>
    

      <p key="p-17-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[Visit HackerRank](https://www.hackerrank.com/?utm_source=chatgpt.com)` }} />
      </p>
    

      <p key="p-17-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[CodeSignal Closes $25M Series B to Make Hiring Less Biased and Help the World Go Beyond Resumes](https://images.openai.com/static-rsc-4/k533u3lA7mKVWN1sNsjxQgiikIWaQaPs6jErggYTW0ZrPbo-Bgt5KFYPhej2Mk4cFYYkpInlYJMXCTfDC0GETae_5YTsgUEnWw_pVCJ5g8Bw9xaWcqc-JjJzTvCPIonOrBuo3KmOgyKbPCkH6CDC-iYomDZsbJLrRFjilVpTqC4?purpose=inline)` }} />
      </p>
    

      <p key="p-17-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `CodeSignal` }} />
      </p>
    

      <p key="p-17-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Technical assessments and interview-style coding practice.` }} />
      </p>
    

      <p key="p-17-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[Visit CodeSignal](https://codesignal.com/?utm_source=chatgpt.com)` }} />
      </p>
    

      <p key="p-17-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[GeeksforGeeks Logo PNG Vector (SVG) Free Download](https://images.openai.com/static-rsc-4/CRhvdOCHSQx32Q6vsssuU5gWCiukukGHoF3Wj8qtKs_K7bM1TQDudTrbQIMy6a6uqOwGJIyaUZhwYtFzQS3k083WVSYwsFZ7cxMeCLlpCYFD0u2ypPIxlMY6YpKjE7O_x02Bnp9ZCas0YrgTNKBniyZEBROkVdjw5_QMJ6OkAIM?purpose=inline)` }} />
      </p>
    

      <p key="p-17-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `GeeksforGeeks` }} />
      </p>
    

      <p key="p-17-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `DSA tutorials, practice questions, and interview preparation.` }} />
      </p>
    

      <p key="p-17-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[Visit GeeksforGeeks](https://www.geeksforgeeks.org/?utm_source=chatgpt.com)` }} />
      </p>
    

      <p key="p-17-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[Задача - 2101B - Codeforces](https://images.openai.com/static-rsc-4/TVIzi7B-Z0Yc4XiOuM0Y35k3sX3gljkUTjavvu0oAoz0AX0pNRoo5m0KYlV1UJGJF5KAFPY0zSvfs6nPRRG3qHUPOqPKdlLit81R5oI9pQnl0MFtMNyrUavxO9IJC5UtQFBOBj-3bJxdqmJoIyJSdZaD2r8YHXG9Cb3lzdhue7s?purpose=inline)` }} />
      </p>
    

      <p key="p-17-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Codeforces` }} />
      </p>
    

      <p key="p-17-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Competitive programming contests and algorithmic problem-solving.` }} />
      </p>
    

      <p key="p-17-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `[Visit Codeforces](https://codeforces.com/?utm_source=chatgpt.com)` }} />
      </p>
    

        <h3 key="h2-17-45" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `17.5 Timed assessment rules` }} />
        </h3>
      

      <p key="p-17-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Practice under realistic conditions:` }} />
      </p>
    

      <p key="p-17-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use the programming language you plan to use in interviews.` }} />
      </p>
    

      <p key="p-17-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Avoid looking at solutions.` }} />
      </p>
    

      <p key="p-17-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Do not pause the timer unnecessarily.` }} />
      </p>
    

      <p key="p-17-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Compile and test frequently.` }} />
      </p>
    

      <p key="p-17-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Check input and output formats.` }} />
      </p>
    

      <p key="p-17-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Handle multiple test cases.` }} />
      </p>
    

      <p key="p-17-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Leave time for debugging.` }} />
      </p>
    

      <p key="p-17-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Record problems you could not solve.` }} />
      </p>
    

      <p key="p-17-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The goal is to improve both speed and accuracy without sacrificing correctness.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 18,
    title: "18. Competitive Programming Revision",
    summary: "Advanced speed patterns: fast I/O, binary exponentiation, bit manipulation tricks, and modular arithmetic.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-18-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `18. Competitive Programming Revision` }} />
        </h2>
      

      <p key="p-18-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Competitive Programming is useful for strengthening algorithmic thinking and implementation speed.` }} />
      </p>
    

      <p key="p-18-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `However, competitive programming and technical interviews are not identical.` }} />
      </p>
    

      <p key="p-18-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Competitive programming often focuses on:` }} />
      </p>
    

      <p key="p-18-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Solving many problems efficiently.` }} />
      </p>
    

      <p key="p-18-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Advanced algorithmic techniques.` }} />
      </p>
    

      <p key="p-18-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Time and memory limits.` }} />
      </p>
    

      <p key="p-18-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Mathematical reasoning.` }} />
      </p>
    

      <p key="p-18-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Implementation under time pressure.` }} />
      </p>
    

      <p key="p-18-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Technical interviews additionally emphasize:` }} />
      </p>
    

      <p key="p-18-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Communication.` }} />
      </p>
    

      <p key="p-18-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Clarifying requirements.` }} />
      </p>
    

      <p key="p-18-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explaining trade-offs.` }} />
      </p>
    

      <p key="p-18-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Code readability.` }} />
      </p>
    

      <p key="p-18-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Discussing alternatives.` }} />
      </p>
    

        <h3 key="h2-18-15" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `18.1 Important competitive programming topics to revise` }} />
        </h3>
      

      <p key="p-18-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Topic` }} />
      </p>
    

      <p key="p-18-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Concepts to revise` }} />
      </p>
    

      <p key="p-18-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Complexity` }} />
      </p>
    

      <p key="p-18-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Big O, amortized complexity` }} />
      </p>
    

      <p key="p-18-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Arrays` }} />
      </p>
    

      <p key="p-18-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Prefix sums, difference arrays` }} />
      </p>
    

      <p key="p-18-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Searching` }} />
      </p>
    

      <p key="p-18-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Binary Search, Binary Search on Answer` }} />
      </p>
    

      <p key="p-18-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Sorting` }} />
      </p>
    

      <p key="p-18-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Merge Sort, Quick Sort` }} />
      </p>
    

      <p key="p-18-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Hashing` }} />
      </p>
    

      <p key="p-18-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap, frequency maps` }} />
      </p>
    

      <p key="p-18-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two Pointers` }} />
      </p>
    

      <p key="p-18-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Pair and subarray problems` }} />
      </p>
    

      <p key="p-18-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Sliding Window` }} />
      </p>
    

      <p key="p-18-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Fixed and variable windows` }} />
      </p>
    

      <p key="p-18-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Stack` }} />
      </p>
    

      <p key="p-18-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Monotonic Stack` }} />
      </p>
    

      <p key="p-18-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Queue` }} />
      </p>
    

      <p key="p-18-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Monotonic Queue` }} />
      </p>
    

      <p key="p-18-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Mathematics` }} />
      </p>
    

      <p key="p-18-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `GCD, LCM, Sieve` }} />
      </p>
    

      <p key="p-18-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Graphs` }} />
      </p>
    

      <p key="p-18-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `BFS, DFS, Dijkstra` }} />
      </p>
    

      <p key="p-18-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Trees` }} />
      </p>
    

      <p key="p-18-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Traversals, Tree DP` }} />
      </p>
    

      <p key="p-18-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `DP` }} />
      </p>
    

      <p key="p-18-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Knapsack, LCS, Bitmask DP` }} />
      </p>
    

      <p key="p-18-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Greedy` }} />
      </p>
    

      <p key="p-18-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Sorting and exchange arguments` }} />
      </p>
    

      <p key="p-18-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Advanced Queries` }} />
      </p>
    

      <p key="p-18-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Fenwick Tree, Segment Tree, Mo's Algorithm` }} />
      </p>
    

        <h3 key="h2-18-48" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `18.2 How to revise a problem` }} />
        </h3>
      

      <p key="p-18-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `When revising an old problem, do not merely read your previous solution.` }} />
      </p>
    

      <p key="p-18-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Try the following:` }} />
      </p>
    

      <p key="p-18-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Read the problem again.` }} />
      </p>
    

      <p key="p-18-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Hide your previous implementation.` }} />
      </p>
    

      <p key="p-18-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Identify the pattern independently.` }} />
      </p>
    

      <p key="p-18-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Write the approach in plain language.` }} />
      </p>
    

      <p key="p-18-55" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Implement it from memory.` }} />
      </p>
    

      <p key="p-18-56" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Test edge cases.` }} />
      </p>
    

      <p key="p-18-57" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Compare your new solution with the old one.` }} />
      </p>
    

      <p key="p-18-58" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Record anything you forgot or misunderstood.` }} />
      </p>
    

      <p key="p-18-59" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `This improves actual problem-solving ability instead of creating a false sense of familiarity.` }} />
      </p>
    

        <h3 key="h2-18-60" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `18.3 Build a personal algorithm notebook` }} />
        </h3>
      

      <p key="p-18-61" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Maintain short notes for important patterns.` }} />
      </p>
    

      <p key="p-18-62" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For every problem, record:` }} />
      </p>
    

      <p key="p-18-63" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problem: Pattern: Brute-force approach: Optimized approach: Data structure: Time complexity: Space complexity: Important edge cases: Mistake made: What I learned:` }} />
      </p>
    

      <p key="p-18-64" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Over time, this becomes a useful revision reference.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 19,
    title: "19. Interview Mistake Analysis",
    summary: "Top technical and behavioral interview pitfalls: jumping into code too early, ignoring hints, silent thinking, and debugging panic.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-19-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `19. Interview Mistake Analysis` }} />
        </h2>
      

        <h3 key="h2-19-1" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `19.1 Why mistake analysis is important` }} />
        </h3>
      

      <p key="p-19-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Solving a problem incorrectly is not necessarily a problem.` }} />
      </p>
    

      <p key="p-19-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Repeatedly making the same mistake without understanding why is a much bigger problem.` }} />
      </p>
    

      <p key="p-19-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `For example:` }} />
      </p>
    

      <p key="p-19-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You repeatedly forget to consider negative array values.` }} />
      </p>
    

      <p key="p-19-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Rather than simply correcting each affected program, identify the underlying issue: your initialization strategy assumes values are non-negative.` }} />
      </p>
    

      <p key="p-19-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Once you understand the mistake, you can prevent it in future problems.` }} />
      </p>
    

        <h3 key="h2-19-8" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `19.2 Major mistake categories` }} />
        </h3>
      

        <div key="table-19-9" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-orange-300 font-semibold font-mono">
                <th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Mistake Category</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Requirement misunderstanding</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Returning values instead of indices</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Pattern recognition</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Using nested loops instead of a HashMap</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Algorithm selection</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Using BFS on a weighted graph</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Complexity</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Submitting O(n²) for a very large input</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Implementation</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Incorrect pointer updates</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Boundary conditions</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Array index out of bounds</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Overflow</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Using int for a large sum</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Recursion</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Incorrect base case</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">DP</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Wrong state or transition</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Communication</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Not explaining your approach</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Time management</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Spending too long on one question</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Testing</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Not considering duplicates or empty inputs</td>
                </tr>
              
            </tbody>
          </table>
        </div>
      

        <h3 key="h2-19-10" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `19.3 Interview error log` }} />
        </h3>
      

      <p key="p-19-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Maintain a table after every practice session.` }} />
      </p>
    

        <div key="table-19-12" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-orange-300 font-semibold font-mono">
                <th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Problem</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Mistake</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Root Cause</th><th className="p-3.5 border-r border-slate-800/60 last:border-r-0">Corrective Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Two Sum</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Duplicate handling error</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Stored values too early</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Check before inserting</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Binary Search</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Infinite loop</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Incorrect boundary update</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Review interval invariant</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Reverse List</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Lost remaining nodes</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Changed next before saving it</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Preserve next pointer</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">House Robber</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Wrong DP state</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">State meaning unclear</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Define dp[i] first</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Graph BFS</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Revisited nodes</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Missing visited check</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Mark nodes when enqueued</td>
                </tr>
              
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Maximum Subarray</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Failed negative case</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Incorrect initialization</td><td className="p-3.5 border-r border-slate-800/40 last:border-r-0">Start with first element</td>
                </tr>
              
            </tbody>
          </table>
        </div>
      

        <h3 key="h2-19-13" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `19.4 Classify mistakes by severity` }} />
        </h3>
      

      <p key="p-19-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Critical` }} />
      </p>
    

      <p key="p-19-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Conceptual mistakes` }} />
      </p>
    

      <p key="p-19-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You do not understand why an algorithm works or select an unsuitable algorithm. Revisit the underlying topic.` }} />
      </p>
    

      <p key="p-19-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Important` }} />
      </p>
    

      <p key="p-19-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Implementation mistakes` }} />
      </p>
    

      <p key="p-19-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your approach is correct, but pointer logic, conditions, or boundary handling is wrong. Practice implementation and dry runs.` }} />
      </p>
    

      <p key="p-19-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Improvement` }} />
      </p>
    

      <p key="p-19-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Efficiency mistakes` }} />
      </p>
    

      <p key="p-19-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your solution works but is unnecessarily slow or uses excessive memory. Study optimization patterns.` }} />
      </p>
    

      <p key="p-19-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Professional` }} />
      </p>
    

      <p key="p-19-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Communication mistakes` }} />
      </p>
    

      <p key="p-19-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `You cannot explain your decisions clearly. Practice describing solutions aloud.` }} />
      </p>
    

        <h3 key="h2-19-26" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `19.5 Measure improvement` }} />
        </h3>
      

      <p key="p-19-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Track these metrics:` }} />
      </p>
    

      <p key="p-19-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problems solved independently.` }} />
      </p>
    

      <p key="p-19-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Problems solved within time limits.` }} />
      </p>
    

      <p key="p-19-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Number of hints required.` }} />
      </p>
    

      <p key="p-19-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Percentage of accepted solutions.` }} />
      </p>
    

      <p key="p-19-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Number of repeated mistakes.` }} />
      </p>
    

      <p key="p-19-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Average time to identify the pattern.` }} />
      </p>
    

      <p key="p-19-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Ability to explain complexity.` }} />
      </p>
    

      <p key="p-19-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Ability to solve follow-up questions.` }} />
      </p>
    

      <p key="p-19-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The most useful indicator is not simply the total number of problems solved. It is how independently and reliably you can solve unfamiliar problems.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 20,
    title: "20. Technical Interview Question Bank",
    summary: "Curated repository of top interview problems across data structures, patterns, algorithms, and system fundamentals.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-20-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `20. Technical Interview Question Bank` }} />
        </h2>
      

      <p key="p-20-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Use the following questions as a structured revision checklist.` }} />
      </p>
    

      <p key="p-20-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java and Core Programming` }} />
      </p>
    

      <p key="p-20-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain the four pillars of OOP.` }} />
      </p>
    

      <p key="p-20-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is the difference between an interface and an abstract class?` }} />
      </p>
    

      <p key="p-20-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain method overloading and overriding.` }} />
      </p>
    

      <p key="p-20-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Why are Strings immutable?` }} />
      </p>
    

      <p key="p-20-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain StringBuilder versus StringBuffer.` }} />
      </p>
    

      <p key="p-20-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `How does HashMap work?` }} />
      </p>
    

      <p key="p-20-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain equals() and hashCode().` }} />
      </p>
    

      <p key="p-20-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is the difference between ArrayList and LinkedList?` }} />
      </p>
    

      <p key="p-20-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain checked and unchecked exceptions.` }} />
      </p>
    

      <p key="p-20-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain JVM, JRE, and JDK.` }} />
      </p>
    

      <p key="p-20-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is garbage collection?` }} />
      </p>
    

      <p key="p-20-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain Java memory areas.` }} />
      </p>
    

      <p key="p-20-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is multithreading?` }} />
      </p>
    

      <p key="p-20-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain synchronization.` }} />
      </p>
    

      <p key="p-20-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is the Java Collections Framework?` }} />
      </p>
    

      <p key="p-20-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `DSA and Algorithms` }} />
      </p>
    

      <p key="p-20-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain Big O notation.` }} />
      </p>
    

      <p key="p-20-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Compare Merge Sort and Quick Sort.` }} />
      </p>
    

      <p key="p-20-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain Binary Search.` }} />
      </p>
    

      <p key="p-20-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain Two Pointers.` }} />
      </p>
    

      <p key="p-20-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is Sliding Window?` }} />
      </p>
    

      <p key="p-20-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain Hashing.` }} />
      </p>
    

      <p key="p-20-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is a Monotonic Stack?` }} />
      </p>
    

      <p key="p-20-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain BFS versus DFS.` }} />
      </p>
    

      <p key="p-20-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is Dynamic Programming?` }} />
      </p>
    

      <p key="p-20-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain memoization versus tabulation.` }} />
      </p>
    

      <p key="p-20-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain Greedy algorithms.` }} />
      </p>
    

      <p key="p-20-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is Backtracking?` }} />
      </p>
    

      <p key="p-20-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is a Minimum Spanning Tree?` }} />
      </p>
    

      <p key="p-20-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain Dijkstra's Algorithm.` }} />
      </p>
    

      <p key="p-20-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `What is Topological Sorting?` }} />
      </p>
    

      <p key="p-20-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Coding Questions` }} />
      </p>
    

      <p key="p-20-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Two Sum.` }} />
      </p>
    

      <p key="p-20-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reverse an array.` }} />
      </p>
    

      <p key="p-20-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the second-largest element.` }} />
      </p>
    

      <p key="p-20-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Move zeroes to the end.` }} />
      </p>
    

      <p key="p-20-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the maximum subarray sum.` }} />
      </p>
    

      <p key="p-20-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Check a palindrome.` }} />
      </p>
    

      <p key="p-20-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find an anagram.` }} />
      </p>
    

      <p key="p-20-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the longest unique substring.` }} />
      </p>
    

      <p key="p-20-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reverse a linked list.` }} />
      </p>
    

      <p key="p-20-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Detect a linked-list cycle.` }} />
      </p>
    

      <p key="p-20-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the middle of a linked list.` }} />
      </p>
    

      <p key="p-20-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Merge two sorted linked lists.` }} />
      </p>
    

      <p key="p-20-47" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Validate parentheses.` }} />
      </p>
    

      <p key="p-20-48" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the next greater element.` }} />
      </p>
    

      <p key="p-20-49" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the maximum tree depth.` }} />
      </p>
    

      <p key="p-20-50" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Perform level-order traversal.` }} />
      </p>
    

      <p key="p-20-51" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Validate a Binary Search Tree.` }} />
      </p>
    

      <p key="p-20-52" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Find the number of islands.` }} />
      </p>
    

      <p key="p-20-53" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Solve Coin Change.` }} />
      </p>
    

      <p key="p-20-54" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Solve the Longest Common Subsequence problem.` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 21,
    title: "21. Practical Interview Preparation Strategy",
    summary: "A structured 4-phase preparation roadmap: foundational mastery, pattern drill, timed mock rounds, and company-specific tuning.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-21-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `21. Practical Interview Preparation Strategy` }} />
        </h2>
      

      <p key="p-21-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Learning concepts and performing well in interviews are two different abilities. Your preparation should include both.` }} />
      </p>
    

      <p key="p-21-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A useful practice cycle is:` }} />
      </p>
    

      <p key="p-21-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your interview preparation cycle` }} />
      </p>
    

      <p key="p-21-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Learn` }} />
      </p>
    

      <p key="p-21-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Understand the data structure, algorithm, and its applications.` }} />
      </p>
    

      <p key="p-21-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Practice` }} />
      </p>
    

      <p key="p-21-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Solve problems independently using Java.` }} />
      </p>
    

      <p key="p-21-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain` }} />
      </p>
    

      <p key="p-21-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Describe your approach, complexity, and decisions aloud.` }} />
      </p>
    

      <p key="p-21-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Evaluate` }} />
      </p>
    

      <p key="p-21-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Review mistakes and attempt the problem again.` }} />
      </p>
    

      <p key="p-21-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Repeat with progressively more difficult problems` }} />
      </p>
    

      <p key="p-21-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A suggested preparation priority` }} />
      </p>
    

      <p key="p-21-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Priority` }} />
      </p>
    

      <p key="p-21-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Area` }} />
      </p>
    

      <p key="p-21-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Objective` }} />
      </p>
    

      <p key="p-21-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `1` }} />
      </p>
    

      <p key="p-21-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Java fundamentals and OOP` }} />
      </p>
    

      <p key="p-21-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Answer core language questions` }} />
      </p>
    

      <p key="p-21-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `2` }} />
      </p>
    

      <p key="p-21-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Arrays and Strings` }} />
      </p>
    

      <p key="p-21-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Master frequently used patterns` }} />
      </p>
    

      <p key="p-21-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `3` }} />
      </p>
    

      <p key="p-21-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Hashing and Two Pointers` }} />
      </p>
    

      <p key="p-21-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Optimize common coding problems` }} />
      </p>
    

      <p key="p-21-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `4` }} />
      </p>
    

      <p key="p-21-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Linked Lists, Stacks, Queues` }} />
      </p>
    

      <p key="p-21-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Handle pointer-based questions` }} />
      </p>
    

      <p key="p-21-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `5` }} />
      </p>
    

      <p key="p-21-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Trees and Graphs` }} />
      </p>
    

      <p key="p-21-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Understand recursion and traversal` }} />
      </p>
    

      <p key="p-21-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `6` }} />
      </p>
    

      <p key="p-21-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Greedy and Binary Search` }} />
      </p>
    

      <p key="p-21-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Recognize optimization patterns` }} />
      </p>
    

      <p key="p-21-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `7` }} />
      </p>
    

      <p key="p-21-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Dynamic Programming` }} />
      </p>
    

      <p key="p-21-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Solve state-based problems` }} />
      </p>
    

      <p key="p-21-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `8` }} />
      </p>
    

      <p key="p-21-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Mock Interviews` }} />
      </p>
    

      <p key="p-21-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Improve communication and correctness` }} />
      </p>
    

      <p key="p-21-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `9` }} />
      </p>
    

      <p key="p-21-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Timed Assessments` }} />
      </p>
    

      <p key="p-21-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Improve speed and debugging` }} />
      </p>
    

      <p key="p-21-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `10` }} />
      </p>
    

      <p key="p-21-45" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Mistake Analysis` }} />
      </p>
    

      <p key="p-21-46" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Reduce repeated errors` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 22,
    title: "22. Module 23 Final Practice Assessment",
    summary: "Comprehensive placement readiness exam: 15 high-yield multiple-choice questions with full explanations.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-22-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `22. Module 23 Final Practice Assessment` }} />
        </h2>
      

      <p key="p-22-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Try these questions without looking at the explanations above.` }} />
      </p>
    

      <p key="p-22-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Technical interview assessment` }} />
      </p>
    

      <p key="p-22-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `0 / 8 completed` }} />
      </p>
    

      <p key="p-22-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q1. An interviewer asks you to find two indices whose values sum to a target. Which optimized approach is commonly suitable for an unsorted array?` }} />
      </p>
    

      <p key="p-22-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Nested loops only` }} />
      </p>
    

      <p key="p-22-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `HashMap` }} />
      </p>
    

      <p key="p-22-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Tree traversal` }} />
      </p>
    

      <p key="p-22-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Stack` }} />
      </p>
    

      <p key="p-22-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q2. What should you generally do before implementing a solution when an interview problem is ambiguous?` }} />
      </p>
    

      <p key="p-22-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Start coding immediately` }} />
      </p>
    

      <p key="p-22-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Ask relevant clarifying questions` }} />
      </p>
    

      <p key="p-22-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Choose the most complex algorithm` }} />
      </p>
    

      <p key="p-22-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Ignore input constraints` }} />
      </p>
    

      <p key="p-22-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q3. A solution makes one pass through an array and uses a HashMap that can store up to n values. What are its typical expected time and auxiliary space complexities?` }} />
      </p>
    

      <p key="p-22-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n²), O(1)` }} />
      </p>
    

      <p key="p-22-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(log n), O(n)` }} />
      </p>
    

      <p key="p-22-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(n), O(n)` }} />
      </p>
    

      <p key="p-22-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `O(1), O(n²)` }} />
      </p>
    

      <p key="p-22-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q4. Which technique is especially useful for detecting a cycle in a singly linked list with constant auxiliary space?` }} />
      </p>
    

      <p key="p-22-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Binary Search` }} />
      </p>
    

      <p key="p-22-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Floyd's Fast and Slow Pointers` }} />
      </p>
    

      <p key="p-22-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Merge Sort` }} />
      </p>
    

      <p key="p-22-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Prefix Sum` }} />
      </p>
    

      <p key="p-22-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q5. In a coding interview, why is a dry run useful?` }} />
      </p>
    

      <p key="p-22-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It replaces complexity analysis` }} />
      </p>
    

      <p key="p-22-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It allows you to avoid writing code` }} />
      </p>
    

      <p key="p-22-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It helps trace variables and reveal logical mistakes` }} />
      </p>
    

      <p key="p-22-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It automatically optimizes the algorithm` }} />
      </p>
    

      <p key="p-22-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q6. What is the most important first step when designing a Dynamic Programming solution?` }} />
      </p>
    

      <p key="p-22-30" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Immediately create a two-dimensional array` }} />
      </p>
    

      <p key="p-22-31" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Define the meaning of the DP state` }} />
      </p>
    

      <p key="p-22-32" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Write nested loops` }} />
      </p>
    

      <p key="p-22-33" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Convert everything to recursion` }} />
      </p>
    

      <p key="p-22-34" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q7. Which choice is most useful when an interviewer asks how your solution can be improved?` }} />
      </p>
    

      <p key="p-22-35" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Change the code randomly` }} />
      </p>
    

      <p key="p-22-36" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Identify repeated computation and potential bottlenecks` }} />
      </p>
    

      <p key="p-22-37" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Increase the number of variables` }} />
      </p>
    

      <p key="p-22-38" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Avoid explaining your approach` }} />
      </p>
    

      <p key="p-22-39" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Q8. During a timed assessment, you are stuck on one difficult problem while another appears approachable. What is usually the sensible action?` }} />
      </p>
    

      <p key="p-22-40" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Spend the entire test on the difficult problem` }} />
      </p>
    

      <p key="p-22-41" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Ignore all other questions` }} />
      </p>
    

      <p key="p-22-42" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Move to the approachable problem and manage time` }} />
      </p>
    

      <p key="p-22-43" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Submit without testing` }} />
      </p>
    

      <p key="p-22-44" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Submit assessment` }} />
      </p>
    
      </div>
    )
  },
  {
    id: 23,
    title: "23. Final Learning Outcomes",
    summary: "Mastery scorecard: end-to-end evaluation of technical competence, problem-solving speed, clean code, and placement readiness.",
    content: (
      <div className="space-y-4">
        
        <h2 key="h1-23-0" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-orange-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: `23. Final Learning Outcomes` }} />
        </h2>
      

      <p key="p-23-1" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `After completing Module 23, you should be able to:` }} />
      </p>
    

      <p key="p-23-2" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain and select appropriate data structures.` }} />
      </p>
    

      <p key="p-23-3" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Recognize common algorithmic patterns in technical interview questions.` }} />
      </p>
    

      <p key="p-23-4" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Clarify incomplete or ambiguous problem requirements.` }} />
      </p>
    

      <p key="p-23-5" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Develop a brute-force solution before optimizing it.` }} />
      </p>
    

      <p key="p-23-6" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Optimize algorithms using hashing, sorting, two pointers, sliding windows, DP, and other techniques.` }} />
      </p>
    

      <p key="p-23-7" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain time and auxiliary space complexity.` }} />
      </p>
    

      <p key="p-23-8" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Identify and handle edge cases.` }} />
      </p>
    

      <p key="p-23-9" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Perform systematic dry runs.` }} />
      </p>
    

      <p key="p-23-10" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Write readable, maintainable Java code.` }} />
      </p>
    

      <p key="p-23-11" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Communicate your reasoning clearly to interviewers.` }} />
      </p>
    

      <p key="p-23-12" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Answer Java and OOP interview questions.` }} />
      </p>
    

      <p key="p-23-13" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Solve array, string, linked-list, tree, graph, and DP problems.` }} />
      </p>
    

      <p key="p-23-14" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Participate effectively in mock technical interviews.` }} />
      </p>
    

      <p key="p-23-15" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Complete timed coding assessments.` }} />
      </p>
    

      <p key="p-23-16" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Revise competitive programming techniques.` }} />
      </p>
    

      <p key="p-23-17" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Identify recurring mistakes and systematically improve.` }} />
      </p>
    

      <p key="p-23-18" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `The most important lesson` }} />
      </p>
    

      <p key="p-23-19" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `A strong technical interview candidate is not necessarily the person who knows the most algorithms.` }} />
      </p>
    

      <p key="p-23-20" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `It is the person who can:` }} />
      </p>
    

      <p key="p-23-21" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Understand an unfamiliar problem.` }} />
      </p>
    

      <p key="p-23-22" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Ask the right questions.` }} />
      </p>
    

      <p key="p-23-23" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Develop a correct solution.` }} />
      </p>
    

      <p key="p-23-24" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Recognize opportunities for optimization.` }} />
      </p>
    

      <p key="p-23-25" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Write clean and reliable code.` }} />
      </p>
    

      <p key="p-23-26" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Explain why the solution works.` }} />
      </p>
    

      <p key="p-23-27" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Test it against difficult cases.` }} />
      </p>
    

      <p key="p-23-28" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Respond intelligently to feedback.` }} />
      </p>
    

      <p key="p-23-29" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: `Your objective is not simply to become someone who can solve coding problems. Your objective is to become someone who can think, communicate, and perform like a software engineer.` }} />
      </p>
    
      </div>
    )
  },
];
