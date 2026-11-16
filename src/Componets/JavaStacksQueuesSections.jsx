import React from "react";

export const JAVA_STACKS_QUEUES_SECTIONS = [
  {
    id: 0,
    title: "Module 10: Curriculum Overview & Objectives",
    category: "Course Roadmap · Objectives",
    anchor: "overview",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            1. Learning Objectives
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">By completing this module, you should be able to:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Understand the Stack Abstract Data Type (ADT).</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Explain LIFO and FIFO behavior.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Implement stacks using arrays.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Implement stacks using linked lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Understand queue fundamentals and FIFO operations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">Implement queues using arrays and linked lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">7.</span>
            <div className="flex-1">Understand circular queues and their advantages.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">8.</span>
            <div className="flex-1">Implement a deque and understand insertion and deletion at both ends.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">9.</span>
            <div className="flex-1">Use Java's <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayDeque</code> as a stack, queue, and deque.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">10.</span>
            <div className="flex-1">Understand monotonic increasing and decreasing stacks.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">11.</span>
            <div className="flex-1">Understand monotonic queues.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">12.</span>
            <div className="flex-1">Solve balanced-parentheses problems.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">13.</span>
            <div className="flex-1">Solve Next Greater Element and Previous Smaller Element problems.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">14.</span>
            <div className="flex-1">Solve the Stock Span Problem.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">15.</span>
            <div className="flex-1">Solve Largest Rectangle in Histogram.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">16.</span>
            <div className="flex-1">Solve Sliding Window Maximum.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">17.</span>
            <div className="flex-1">Understand practical stack and queue applications.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">18.</span>
            <div className="flex-1">Analyze time and auxiliary-space complexity.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">19.</span>
            <div className="flex-1">Recognize common interview patterns involving stacks, queues, and deques.</div>
          </div>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 1,
    title: "Part 1: Stack Fundamentals & LIFO Paradigm",
    category: "Part 1 · Stack ADT",
    anchor: "part-1",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            2. What Is a Stack?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A <strong className="font-semibold text-white">stack</strong> is a linear Abstract Data Type (ADT) in which elements are inserted and removed from the same end, called the top.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A stack follows:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">LIFO — Last In, First Out.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This means the most recently inserted element is the first one removed.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.1 Real-world example
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Imagine a stack of plates.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">You place:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Plate A.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Plate B.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Plate C.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The arrangement becomes:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       TOP
        |
      +-----+
      |  C  |  ← Last inserted
      +-----+
      |  B  |
      +-----+
      |  A  |  ← First inserted
      +-----+`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When you remove a plate, you remove C first.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Then B.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Then A.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This demonstrates LIFO.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.2 Stack operations
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A stack typically provides the following fundamental operations:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">push(value)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Insert an element at the top</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">pop()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Remove and return the top element</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peek()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Read the top element without removing it</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isEmpty()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Check whether the stack is empty</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">size()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Return the number of elements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Additional implementations may provide:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">clear()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">contains(value)</code></li>
            <li>Capacity inspection.</li>
            <li>Dynamic resizing.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.3 Push operation
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Suppose the stack is empty.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Push 10:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP
 |
[10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Push 20:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP
 |
[20]
[10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Push 30:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP
 |
[30]
[20]
[10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The top element is now 30.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.4 Pop operation
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Perform:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">pop()</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The value 30 is removed.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP
 |
[20]
[10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Perform another pop:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP
 |
[10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The stack removes elements in reverse order of insertion.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.5 Peek operation
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">If the stack contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP
 |
[50]
[40]
[30]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Calling:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peek()</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">returns 50 but leaves the stack unchanged.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.6 Stack underflow
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stack underflow occurs when an element is removed from an empty stack.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Stack<Integer> stack = new Stack<>();

stack.pop();`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This causes an exception.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A custom stack implementation should explicitly detect the empty condition and report an appropriate error.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            2.7 Stack overflow
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">In a fixed-capacity array implementation, stack overflow occurs when an insertion is attempted after the stack has reached its maximum capacity.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For example, if capacity is 3:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[30]
[20]
[10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Attempting to push another element causes overflow.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A dynamically resizing implementation can increase its capacity, although it still has practical memory limits.</p>
          <hr className="my-8 border-slate-800" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            3. Stack as an Abstract Data Type
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">An Abstract Data Type describes what operations a data structure supports, not necessarily how those operations are implemented.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A stack can be implemented using:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Arrays.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Linked lists.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Java's <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayDeque</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Other suitable underlying structures.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The external behavior remains LIFO regardless of the implementation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Stack ADT example
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`STACK

push(value)
pop()
peek()
isEmpty()
size()`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The user of the stack does not need to know whether its elements are stored in an array or linked nodes.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            3.1 Why is the ADT concept important?
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">It separates:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>The logical behavior of a structure.</li>
            <li>The physical implementation of that structure.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For example, both an array-backed stack and a linked-list-backed stack support the same basic operations.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">However, they differ in:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Memory allocation.</li>
            <li>Maximum capacity.</li>
            <li>Resizing behavior.</li>
            <li>Memory overhead.</li>
            <li>Performance characteristics.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Understanding this distinction is fundamental to data-structure design.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 2,
    title: "Part 2: Stack Implementation Using Arrays (Fixed & Dynamic)",
    category: "Part 2 · Array Stack",
    anchor: "part-2",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            4. Array-Based Stack
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">An array-based stack stores its elements inside an array.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">An integer variable called <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">top</code> tracks the position of the top element.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For a fixed-capacity stack:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Initially, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">top = -1</code>.</li>
            <li>Push increments <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">top</code>.</li>
            <li>Pop reads the top element and decrements <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">top</code>.</li>
            <li>Peek reads the element at <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">top</code>.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.1 Structure
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Suppose the array has capacity 5.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Initially:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Index:  0    1    2    3    4

       [ ]  [ ]  [ ]  [ ]  [ ]

top = -1`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Push 10:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Index:  0    1    2    3    4

       [10] [ ]  [ ]  [ ]  [ ]

top = 0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Push 20:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Index:  0    1    2    3    4

       [10] [20] [ ]  [ ]  [ ]

              TOP`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Push 30:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Index:  0    1    2    3    4

       [10] [20] [30] [ ]  [ ]

                   TOP`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.2 Java implementation — Fixed-capacity integer stack
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class ArrayStack {

    private int[] stack;

    private int top;

    private int capacity;

    public ArrayStack(int capacity) {

        if (capacity <= 0) {

            throw new IllegalArgumentException(
                "Capacity must be positive"
            );
        }

        this.capacity = capacity;

        this.stack = new int[capacity];

        this.top = -1;
    }

    // Insert an element.
    public void push(int value) {

        if (isFull()) {

            throw new IllegalStateException(
                "Stack overflow"
            );
        }

        stack[++top] = value;
    }

    // Remove and return the top element.
    public int pop() {

        if (isEmpty()) {

            throw new IllegalStateException(
                "Stack underflow"
            );
        }

        return stack[top--];
    }

    // Return the top element without removal.
    public int peek() {

        if (isEmpty()) {

            throw new IllegalStateException(
                "Stack is empty"
            );
        }

        return stack[top];
    }

    public boolean isEmpty() {

        return top == -1;
    }

    public boolean isFull() {

        return top == capacity - 1;
    }

    public int size() {

        return top + 1;
    }

    public void display() {

        for (int i = top; i >= 0; i--) {

            System.out.println(stack[i]);
        }
    }

    public static void main(String[] args) {

        ArrayStack stack = new ArrayStack(5);

        stack.push(10);

        stack.push(20);

        stack.push(30);

        System.out.println("Top: " + stack.peek());

        System.out.println("Removed: " + stack.pop());

        System.out.println("New top: " + stack.peek());

        System.out.println("Size: " + stack.size());

        System.out.println("Stack:");

        stack.display();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Top: 30
Removed: 30
New top: 20
Size: 2
Stack:
20
10`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.3 Complexity analysis
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Push</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Pop</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Peek</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">isEmpty</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">isFull</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Size</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Display</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Auxiliary storage for the underlying array: O(n), where <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">n</code> is its capacity.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.4 Advantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Simple implementation.</li>
            <li>Fast push and pop.</li>
            <li>Good memory locality.</li>
            <li>No per-element node objects.</li>
            <li>Predictable storage when capacity is fixed.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            4.5 Disadvantages
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Fixed-capacity implementation cannot grow.</li>
            <li>It may reject insertions when full.</li>
            <li>Choosing an unnecessarily large capacity can waste space.</li>
          </ul>
          <hr className="my-8 border-slate-800" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            5. Dynamically Resizing Array Stack
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A dynamic array stack automatically grows when its backing array becomes full.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Suppose the initial capacity is 2.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Initial:

[10] [20]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When another value is inserted, allocate a larger array:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`New capacity:

[10] [20] [30] [ ]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A common strategy doubles the capacity.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.1 Why doubling?
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When the array becomes full, copying existing values into a larger array takes O(n) time.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">However, resizing happens infrequently.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Across many push operations, the total copying work is linear in the number of insertions.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Therefore:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Individual push: O(1) amortized.</li>
            <li>Resizing push: O(n) actual time in that operation.</li>
            <li>Pop: O(1).</li>
            <li>Peek: O(1).</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            5.2 Java implementation — Generic dynamic stack
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.NoSuchElementException;

public class DynamicArrayStack<T> {

    private Object[] elements;

    private int top = -1;

    public DynamicArrayStack() {

        elements = new Object[8];
    }

    public void push(T value) {

        if (top == elements.length - 1) {

            resize(elements.length * 2);
        }

        elements[++top] = value;
    }

    @SuppressWarnings("unchecked")
    public T pop() {

        if (isEmpty()) {

            throw new NoSuchElementException(
                "Stack is empty"
            );
        }

        T value = (T) elements[top];

        elements[top] = null;

        top--;

        return value;
    }

    @SuppressWarnings("unchecked")
    public T peek() {

        if (isEmpty()) {

            throw new NoSuchElementException(
                "Stack is empty"
            );
        }

        return (T) elements[top];
    }

    public boolean isEmpty() {

        return top == -1;
    }

    public int size() {

        return top + 1;
    }

    private void resize(int newCapacity) {

        Object[] newArray =
            new Object[newCapacity];

        System.arraycopy(
            elements,
            0,
            newArray,
            0,
            size()
        );

        elements = newArray;
    }

    public static void main(String[] args) {

        DynamicArrayStack<String> stack =
            new DynamicArrayStack<>();

        stack.push("Java");

        stack.push("DSA");

        stack.push("Algorithms");

        System.out.println(stack.pop());

        System.out.println(stack.peek());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Algorithms
DSA`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The implementation uses <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Object[]</code> because Java does not allow the direct creation of arrays of a generic type such as <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">new T[8]</code>.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The casts are localized to the methods that retrieve stored elements.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This implementation uses geometric growth and does not shrink its backing array after pops.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 3,
    title: "Part 3: Stack Implementation Using Linked Lists",
    category: "Part 3 · Linked Stack",
    anchor: "part-3",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            6. Linked-List-Based Stack
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A stack can also be implemented using a linked list.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The top reference points to the first node.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The first node represents the top of the stack.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.1 Structure
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP
 |
 v
[30 | next] → [20 | next] → [10 | null]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Push inserts a new node at the beginning.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Pop removes the first node.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Both operations require a constant number of reference changes.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.2 Push operation
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Initially:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP → 20 → 10 → null`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Push 30:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Create node 30.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Point node 30 to the current top.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Update top.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Result:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP → 30 → 20 → 10 → null`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.3 Pop operation
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Initially:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP → 30 → 20 → 10 → null`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Pop removes node 30.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Update top to its successor:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP → 20 → 10 → null`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.4 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.NoSuchElementException;

public class LinkedStack<T> {

    private static class Node<T> {

        T data;

        Node<T> next;

        Node(T data) {

            this.data = data;
        }
    }

    private Node<T> top;

    private int size;

    public void push(T value) {

        Node<T> newNode = new Node<>(value);

        newNode.next = top;

        top = newNode;

        size++;
    }

    public T pop() {

        if (isEmpty()) {

            throw new NoSuchElementException(
                "Stack is empty"
            );
        }

        T value = top.data;

        top = top.next;

        size--;

        return value;
    }

    public T peek() {

        if (isEmpty()) {

            throw new NoSuchElementException(
                "Stack is empty"
            );
        }

        return top.data;
    }

    public boolean isEmpty() {

        return top == null;
    }

    public int size() {

        return size;
    }

    public void display() {

        Node<T> current = top;

        while (current != null) {

            System.out.println(current.data);

            current = current.next;
        }
    }

    public static void main(String[] args) {

        LinkedStack<Integer> stack =
            new LinkedStack<>();

        stack.push(10);

        stack.push(20);

        stack.push(30);

        System.out.println("Top: " + stack.peek());

        System.out.println("Removed: " + stack.pop());

        System.out.println("New top: " + stack.peek());

        System.out.println("Size: " + stack.size());

        stack.display();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Top: 30
Removed: 30
New top: 20
Size: 2
20
10`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.5 Complexity analysis
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Push</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Pop</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Peek</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">isEmpty</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Size</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Display</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Auxiliary storage: O(n) for the nodes.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            6.6 Array stack versus linked stack
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Property</th>
                  <th className="px-4 py-3">Array stack</th>
                  <th className="px-4 py-3">Linked stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Underlying storage</td>
                  <td className="px-4 py-2.5 text-slate-300">Array</td>
                  <td className="px-4 py-2.5 text-slate-300">Nodes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Push</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1), or amortized O(1) for dynamic arrays</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Pop</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Peek</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Capacity</td>
                  <td className="px-4 py-2.5 text-slate-300">Fixed or dynamically resized</td>
                  <td className="px-4 py-2.5 text-slate-300">Limited by available memory</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Per-element overhead</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually lower</td>
                  <td className="px-4 py-2.5 text-slate-300">Node reference and object overhead</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Cache locality</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually better</td>
                  <td className="px-4 py-2.5 text-slate-300">Usually poorer</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Resizing</td>
                  <td className="px-4 py-2.5 text-slate-300">May be required</td>
                  <td className="px-4 py-2.5 text-slate-300">Not required</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Memory allocation</td>
                  <td className="px-4 py-2.5 text-slate-300">Array allocation</td>
                  <td className="px-4 py-2.5 text-slate-300">Per-node allocation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Neither implementation is universally superior. The choice depends on capacity requirements, memory behavior, and workload.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 4,
    title: "Part 4: Queue Fundamentals & FIFO Operations",
    category: "Part 4 · Queue ADT",
    anchor: "part-4",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            7. What Is a Queue?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A <strong className="font-semibold text-white">queue</strong> is a linear data structure that follows:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">FIFO — First In, First Out.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The first element inserted is the first element removed.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            7.1 Real-world example
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Imagine people standing in a ticket line.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT                         REAR
  |                             |
  v                             v

[Person A] → [Person B] → [Person C]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Person A arrived first.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Person A gets served first.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">New people join at the rear.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Service happens at the front.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            7.2 Queue operations
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">enqueue(value)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Insert an element at the rear</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">dequeue()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Remove and return the front element</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peek()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Read the front without removal</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isEmpty()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Check whether the queue is empty</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">size()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Return the number of elements</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Some implementations also provide:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isFull()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">clear()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">contains(value)</code></li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            7.3 Enqueue example
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Initially:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT = REAR

[ ]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Enqueue 10:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT                 REAR
  |                     |
  v                     v
 [10]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Enqueue 20:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT       REAR
  |           |
  v           v
 [10] → [20]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Enqueue 30:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT                  REAR
  |                      |
  v                      v
 [10] → [20] → [30]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            7.4 Dequeue example
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Queue:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT
  |
  v
[10] → [20] → [30]
                 ^
                 |
                REAR`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">After dequeue:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT
  |
  v
[20] → [30]
         ^
         |
        REAR`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The value 10 is removed.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            7.5 Queue underflow
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Queue underflow happens when dequeue is attempted on an empty queue.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A robust implementation should check for emptiness and handle the condition appropriately.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            7.6 Queue overflow
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For a fixed-capacity array queue, overflow occurs when an insertion is attempted while the queue is full.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A linked-list queue generally grows by allocating additional nodes until memory resources become unavailable.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 5,
    title: "Part 5: Queue Implementation Using Arrays (Circular Queue)",
    category: "Part 5 · Circular Queue",
    anchor: "part-5",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            8. Linear Array Queue
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A basic array queue uses:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>An array.</li>
            <li>A <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">front</code> index.</li>
            <li>A <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">rear</code> index.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The front points to the first active element.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The rear points to the final active element in a conventional linear representation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            8.1 Example
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Capacity = 5.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Initially:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Index:    0     1     2     3     4

        [ ]   [ ]   [ ]   [ ]   [ ]

front = -1
rear  = -1`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Enqueue 10, 20, and 30:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Index:    0      1      2      3     4

        [10]   [20]   [30]   [ ]   [ ]

         ^             ^
       FRONT          REAR`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Dequeue:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Index:    0      1      2      3     4

        [ ]    [20]   [30]   [ ]   [ ]

                ^      ^
              FRONT   REAR`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A problem now appears.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">If the rear reaches the final index, a simple linear queue may report that it is full even though there are empty positions before the front.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This is called <strong className="font-semibold text-white">false overflow</strong> or space wastage in the simple linear-array implementation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            8.2 Why circular queues are useful
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A circular queue treats the end of the array as connected to the beginning.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">After reaching the final position, the rear can wrap around to index zero if there is available space.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This allows previously freed positions to be reused without shifting all the remaining elements.</p>
          <hr className="my-8 border-slate-800" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            9. Circular Queue
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A circular queue is an array-based queue in which the index positions wrap around.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Instead of allowing the rear to move only forward, circular indexing allows it to return to zero after reaching the end.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            9.1 Circular indexing
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For an array of capacity <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">C</code>:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`nextIndex = (currentIndex + 1) % C`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For example, if capacity is 5 and the rear is at index 4:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(4 + 1) % 5 = 0`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The next insertion position becomes index 0.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            9.2 Circular queue visualization
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Capacity = 5.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Suppose the queue contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Index:    0     1     2     3     4

        [40]  [50]  [ ]   [20]  [30]

         ^                   ^
        REAR               FRONT`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The logical FIFO order is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`20 → 30 → 40 → 50`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The physical array order and logical queue order are different.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The queue starts at the front and wraps around.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            9.3 Common circular queue conditions
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">An implementation can use different ways to identify full and empty states.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">One common approach reserves a slot:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Empty: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">front == rear</code></li>
            <li>Full: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">(rear + 1) % capacity == front</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This leaves one array slot unused.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Another approach maintains a separate <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">size</code> variable:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Empty: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">size == 0</code></li>
            <li>Full: <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">size == capacity</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The second approach allows every array slot to be used.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This module uses the size-based design.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            10. Java Implementation — Circular Array Queue
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.NoSuchElementException;

public class CircularArrayQueue {

    private final int[] queue;

    private int front;

    private int rear;

    private int size;

    private final int capacity;

    public CircularArrayQueue(int capacity) {

        if (capacity <= 0) {

            throw new IllegalArgumentException(
                "Capacity must be positive"
            );
        }

        this.capacity = capacity;

        this.queue = new int[capacity];

        this.front = 0;

        this.rear = 0;

        this.size = 0;
    }

    // Insert at the rear.
    public void enqueue(int value) {

        if (isFull()) {

            throw new IllegalStateException(
                "Queue overflow"
            );
        }

        queue[rear] = value;

        rear = (rear + 1) % capacity;

        size++;
    }

    // Remove from the front.
    public int dequeue() {

        if (isEmpty()) {

            throw new NoSuchElementException(
                "Queue is empty"
            );
        }

        int value = queue[front];

        front = (front + 1) % capacity;

        size--;

        return value;
    }

    // Read the front element.
    public int peek() {

        if (isEmpty()) {

            throw new NoSuchElementException(
                "Queue is empty"
            );
        }

        return queue[front];
    }

    public boolean isEmpty() {

        return size == 0;
    }

    public boolean isFull() {

        return size == capacity;
    }

    public int size() {

        return size;
    }

    public void display() {

        if (isEmpty()) {

            System.out.println("Queue is empty");

            return;
        }

        for (int i = 0; i < size; i++) {

            int index = (front + i) % capacity;

            System.out.print(queue[index] + " ");
        }

        System.out.println();
    }

    public static void main(String[] args) {

        CircularArrayQueue queue =
            new CircularArrayQueue(5);

        queue.enqueue(10);

        queue.enqueue(20);

        queue.enqueue(30);

        System.out.println("Queue:");

        queue.display();

        System.out.println(
            "Removed: " + queue.dequeue()
        );

        queue.enqueue(40);

        queue.enqueue(50);

        queue.enqueue(60);

        System.out.println("After wrap-around:");

        queue.display();

        System.out.println(
            "Front: " + queue.peek()
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Queue:
10 20 30
Removed: 10
After wrap-around:
20 30 40 50
Front: 20`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            10.1 Complexity analysis
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Enqueue</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Dequeue</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Peek</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">isEmpty</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">isFull</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Size</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Display</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Auxiliary array space: O(C), where <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">C</code> is the queue capacity.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            10.2 Important implementation details
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The value of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">rear</code> represents the next insertion position.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The value of <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">front</code> represents the current first element.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">size</code> variable distinguishes full from empty.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This design uses every array slot.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A common mistake is to use only <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">front == rear</code> for both full and empty conditions without reserving a slot or maintaining a size variable.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 6,
    title: "Part 6: Queue Implementation Using Linked Lists",
    category: "Part 6 · Linked Queue",
    anchor: "part-6",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            11. Linked-List-Based Queue
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A linked-list queue uses nodes and maintains two references:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">front</code>: the first node.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">rear</code>: the last node.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Enqueue inserts a node after the rear.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Dequeue removes the front node.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            11.1 Structure
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT                              REAR
  |                                  |
  v                                  v

[10 | next] → [20 | next] → [30 | null]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">After enqueue 40:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT                                       REAR
  |                                           |
  v                                           v

[10] → [20] → [30] → [40 | null]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">After dequeue:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT                         REAR
  |                             |
  v                             v

[20] → [30] → [40 | null]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            11.2 Java implementation
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.NoSuchElementException;

public class LinkedQueue<T> {

    private static class Node<T> {

        T data;

        Node<T> next;

        Node(T data) {

            this.data = data;
        }
    }

    private Node<T> front;

    private Node<T> rear;

    private int size;

    public void enqueue(T value) {

        Node<T> newNode = new Node<>(value);

        if (rear == null) {

            front = newNode;

            rear = newNode;

        } else {

            rear.next = newNode;

            rear = newNode;
        }

        size++;
    }

    public T dequeue() {

        if (isEmpty()) {

            throw new NoSuchElementException(
                "Queue is empty"
            );
        }

        T value = front.data;

        front = front.next;

        size--;

        if (front == null) {

            rear = null;
        }

        return value;
    }

    public T peek() {

        if (isEmpty()) {

            throw new NoSuchElementException(
                "Queue is empty"
            );
        }

        return front.data;
    }

    public boolean isEmpty() {

        return front == null;
    }

    public int size() {

        return size;
    }

    public void display() {

        Node<T> current = front;

        while (current != null) {

            System.out.print(current.data + " ");

            current = current.next;
        }

        System.out.println();
    }

    public static void main(String[] args) {

        LinkedQueue<Integer> queue =
            new LinkedQueue<>();

        queue.enqueue(10);

        queue.enqueue(20);

        queue.enqueue(30);

        System.out.println("Queue:");

        queue.display();

        System.out.println(
            "Removed: " + queue.dequeue()
        );

        System.out.println(
            "Front: " + queue.peek()
        );

        queue.enqueue(40);

        queue.display();
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Queue:
10 20 30
Removed: 10
Front: 20
20 30 40`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            11.3 Complexity analysis
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Enqueue</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Dequeue</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Peek</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">isEmpty</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Size</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Display</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Auxiliary storage: O(n) for the nodes.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            11.4 Why must rear become null after the final dequeue?
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Suppose the queue contains just one node:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT
  |
  v
[10 | null]
  ^
  |
REAR`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">After removing it, the queue is empty.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Both references must become null.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">If rear still references the removed node, a later enqueue might incorrectly attach a new node to stale state.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Maintaining correct front and rear references is essential.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 7,
    title: "Part 7: Double-Ended Queue (Deque)",
    category: "Part 7 · Deque ADT",
    anchor: "part-7",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            12. What Is a Deque?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A <strong className="font-semibold text-white">deque</strong> is a double-ended queue.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">It allows insertion and deletion at both ends.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The name is commonly pronounced "deck."</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Unlike a regular queue, a deque does not restrict insertion to the rear and removal to the front.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.1 Deque operations
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">addFirst(value)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Insert at the front</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">addLast(value)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Insert at the rear</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">removeFirst()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Remove from the front</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">removeLast()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Remove from the rear</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peekFirst()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Read the front</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peekLast()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Read the rear</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.2 Example
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Initial deque:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT                         REAR
  |                             |
  v                             v

[20] ⇄ [30] ⇄ [40]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Insert 10 at front:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT                                  REAR
  |                                      |
  v                                      v

[10] ⇄ [20] ⇄ [30] ⇄ [40]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Insert 50 at rear:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT                                             REAR
  |                                                 |
  v                                                 v

[10] ⇄ [20] ⇄ [30] ⇄ [40] ⇄ [50]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Remove from front:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[20] ⇄ [30] ⇄ [40] ⇄ [50]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Remove from rear:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[20] ⇄ [30] ⇄ [40]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.3 Input-restricted deque
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">An input-restricted deque allows insertion at only one end but deletion at both ends.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.4 Output-restricted deque
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">An output-restricted deque allows deletion at only one end but insertion at both ends.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">These are specialized deque variants that may appear in data-structure theory.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.5 Deque as a stack
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A deque can behave like a stack:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Push at front.</li>
            <li>Pop from front.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This gives LIFO behavior.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            12.6 Deque as a queue
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A deque can behave like a queue:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Insert at rear.</li>
            <li>Remove from front.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This gives FIFO behavior.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A deque is therefore a flexible structure that can implement either behavior.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 8,
    title: "Part 8: Java ArrayDeque (Stack, Queue & Deque)",
    category: "Part 8 · Standard Collections",
    anchor: "part-8",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            13. What Is <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayDeque</code>?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Java provides the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayDeque</code> class in <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">java.util</code>.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">It is a resizable-array implementation of the <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Deque</code> interface.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">It can be used as:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">A stack.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">A queue.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">A double-ended queue.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">It is generally preferred over the legacy <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Stack</code> class for ordinary stack use.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Java documents <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayDeque</code> as not thread-safe, prohibits null elements, and states that most basic deque operations have amortized constant-time performance.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            14. Using ArrayDeque as a Stack
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayDeque;
import java.util.Deque;

public class StackUsingArrayDeque {

    public static void main(String[] args) {

        Deque<Integer> stack =
            new ArrayDeque<>();

        stack.push(10);

        stack.push(20);

        stack.push(30);

        System.out.println(stack);

        System.out.println(
            "Top: " + stack.peek()
        );

        System.out.println(
            "Removed: " + stack.pop()
        );

        System.out.println(
            "New top: " + stack.peek()
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[30, 20, 10]
Top: 30
Removed: 30
New top: 20`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Methods:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Stack concept</th>
                  <th className="px-4 py-3">ArrayDeque method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Push</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">push(value)</code></td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Pop</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">pop()</code></td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Peek</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peek()</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">These operations use the front of the deque.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            15. Using ArrayDeque as a Queue
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayDeque;
import java.util.Queue;

public class QueueUsingArrayDeque {

    public static void main(String[] args) {

        Queue<Integer> queue =
            new ArrayDeque<>();

        queue.offer(10);

        queue.offer(20);

        queue.offer(30);

        System.out.println(queue);

        System.out.println(
            "Front: " + queue.peek()
        );

        System.out.println(
            "Removed: " + queue.poll()
        );

        System.out.println(queue);
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30]
Front: 10
Removed: 10
[20, 30]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Here:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">offer()</code> inserts at the rear.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">poll()</code> removes from the front.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peek()</code> reads the front without removal.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            16. Using ArrayDeque as a Deque
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayDeque;
import java.util.Deque;

public class DequeExample {

    public static void main(String[] args) {

        Deque<Integer> deque =
            new ArrayDeque<>();

        deque.addFirst(20);

        deque.addLast(30);

        deque.addFirst(10);

        deque.addLast(40);

        System.out.println(deque);

        deque.removeFirst();

        deque.removeLast();

        System.out.println(deque);

        System.out.println(deque.peekFirst());

        System.out.println(deque.peekLast());
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 20, 30, 40]
[20, 30]
20
30`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            17. Important ArrayDeque Methods
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Method</th>
                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">addFirst()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Insert at front</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">addLast()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Insert at rear</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">offerFirst()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Attempt insertion at front</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">offerLast()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Attempt insertion at rear</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">removeFirst()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Remove front or throw exception</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">removeLast()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Remove rear or throw exception</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">pollFirst()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Remove front or return null</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">pollLast()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Remove rear or return null</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">getFirst()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Read front or throw exception</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">getLast()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Read rear or throw exception</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peekFirst()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Read front or return null</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peekLast()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Read rear or return null</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">push()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Stack insertion</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">pop()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Stack removal</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peek()</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Inspect the stack top or queue front</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.1 Remove versus poll
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">removeFirst()</code> throws <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">NoSuchElementException</code> if the deque is empty.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">pollFirst()</code> returns null if the deque is empty.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Likewise:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">getFirst()</code> throws when empty.</li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peekFirst()</code> returns null when empty.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Choose the appropriate behavior for your application.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.2 ArrayDeque limitations and properties
          </h3>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">It does not permit null elements.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">It is not thread-safe.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">It grows automatically.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Basic end operations are amortized O(1).</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Searching for an arbitrary value is O(n).</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">It does not provide indexed access like an ArrayList.</div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            17.3 ArrayDeque versus Stack
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For ordinary stack applications, prefer:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Deque<Integer> stack = new ArrayDeque<>();`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The Java Deque documentation recommends using a Deque instead of the legacy <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Stack</code> class.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Stack</code> class remains part of Java, but it is based on the older <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">Vector</code> design.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 9,
    title: "Part 9: Monotonic Stacks (Increasing & Decreasing Invariants)",
    category: "Part 9 · Monotonic Stacks",
    anchor: "part-9",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            18. What Is a Monotonic Stack?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A <strong className="font-semibold text-white">monotonic stack</strong> is a stack whose elements are maintained in a specific increasing or decreasing order.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Unlike an ordinary stack, where values are stored without an ordering requirement, a monotonic stack preserves an ordering invariant.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Two common types are:</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            18.1 Monotonic increasing stack
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The values from bottom to top are maintained in non-decreasing order.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`BOTTOM → [2, 4, 6, 9] ← TOP`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When a new value arrives, elements that violate the required ordering are removed.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Depending on the problem, the invariant may be strictly increasing or non-decreasing.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            18.2 Monotonic decreasing stack
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The values from bottom to top are maintained in non-increasing order.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`BOTTOM → [10, 8, 5, 2] ← TOP`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Again, whether equal values remain depends on the problem's comparison condition.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            18.3 Why do we use a monotonic stack?
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Many array problems ask questions such as:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>What is the next greater element?</li>
            <li>What is the previous smaller element?</li>
            <li>What is the closest larger value to the left?</li>
            <li>How many consecutive days had lower prices?</li>
            <li>What is the maximum rectangular area in a histogram?</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A brute-force solution may require O(n²) time.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A monotonic stack can often solve these problems in O(n).</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            18.4 The fundamental idea
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Each element is generally pushed once and popped at most once.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Therefore, even though an individual iteration may remove many elements, the total number of stack operations is linear.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This is why the overall time complexity is usually O(n), not O(n²).</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 10,
    title: "Part 10: Next Greater Element (Monotonic Stack Resolution)",
    category: "Part 10 · Next Greater Element",
    anchor: "part-10",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            19. What Is the Next Greater Element Problem?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Given an array, find the first element to the right of each position that is strictly greater than the current element.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">If no greater element exists, return <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-1</code>.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input:

[4, 5, 2, 10, 8]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For each position:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Current value</th>
                  <th className="px-4 py-3">Next greater element</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">10</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">10</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">10</td>
                  <td className="px-4 py-2.5 text-slate-300">-1</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">8</td>
                  <td className="px-4 py-2.5 text-slate-300">-1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[5, 10, 10, -1, -1]`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            20. Brute-Force Approach
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For every element:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Examine elements to its right.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Find the first larger value.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">If no larger value exists, store <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-1</code>.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Time complexity: O(n²).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This works but can be inefficient for large arrays.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            21. Monotonic Stack Approach
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Maintain a stack of indices whose next greater elements have not yet been found.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For each new value:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Compare it with the value at the index stored at the top.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">While the new value is greater, it becomes the answer for that previous position.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Remove the resolved index.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Push the current index.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The stack maintains indices whose corresponding values are decreasing from bottom to top.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            21.1 Worked example
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Input:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[4, 5, 2, 10, 8]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Initially, the result array is:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[-1, -1, -1, -1, -1]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Process 4</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stack:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[4]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Process 5</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">5 is greater than 4.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The next greater element of 4 is 5.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Result:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[5, -1, -1, -1, -1]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stack:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[5]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Process 2</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">2 is smaller than 5.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stack:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[5, 2]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Process 10</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">10 is greater than 2 and 5.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Resolve both:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Next greater of 2 = 10.</li>
            <li>Next greater of 5 = 10.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Result:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[5, 10, 10, -1, -1]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stack:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[10]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Process 8</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">8 is smaller than 10.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stack:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[10, 8]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">No greater values remain for the two unresolved elements.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Final result:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[5, 10, 10, -1, -1]</code></p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            22. Java Implementation
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class NextGreaterElement {

    public static int[] nextGreater(int[] numbers) {

        int n = numbers.length;

        int[] result = new int[n];

        Arrays.fill(result, -1);

        Deque<Integer> stack =
            new ArrayDeque<>();

        for (int i = 0; i < n; i++) {

            while (
                !stack.isEmpty() &&
                numbers[i] > numbers[stack.peek()]
            ) {

                int index = stack.pop();

                result[index] = numbers[i];
            }

            stack.push(i);
        }

        return result;
    }

    public static void main(String[] args) {

        int[] numbers = {
            4, 5, 2, 10, 8
        };

        System.out.println(
            Arrays.toString(nextGreater(numbers))
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[5, 10, 10, -1, -1]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            22.1 Complexity
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(n).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Each index is pushed once and popped at most once.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            22.2 Important distinction
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For the next <strong className="font-semibold text-white">strictly greater</strong> element, the comparison is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers[i] > numbers[stack.peek()]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Changing the comparison changes the problem.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For example, allowing equal elements would require a non-strict greater-or-equal interpretation.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 11,
    title: "Part 11: Previous Smaller Element",
    category: "Part 11 · Previous Smaller Element",
    anchor: "part-11",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            23. What Is the Previous Smaller Element Problem?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Given an array, find the nearest element to the left of each position that is strictly smaller than the current value.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">If no such element exists, return <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-1</code>.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input:

[4, 5, 2, 10, 8]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Expected result:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[-1, 4, -1, 2, 2]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Explanation:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Current value</th>
                  <th className="px-4 py-3">Previous smaller element</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">-1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">-1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">10</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">8</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            24. Monotonic Stack Approach
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Maintain a stack of indices.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For every current element:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Remove elements from the top while their values are greater than or equal to the current value.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">The new top, if it exists, is the nearest previous smaller element.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Push the current index.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Why remove greater or equal values?</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Because they cannot be the answer for the current position, and they are not useful as a nearer smaller candidate for later values when a smaller element is replacing them.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            25. Java Implementation
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class PreviousSmallerElement {

    public static int[] previousSmaller(
        int[] numbers
    ) {

        int n = numbers.length;

        int[] result = new int[n];

        Deque<Integer> stack =
            new ArrayDeque<>();

        for (int i = 0; i < n; i++) {

            while (
                !stack.isEmpty() &&
                numbers[stack.peek()] >= numbers[i]
            ) {

                stack.pop();
            }

            result[i] = stack.isEmpty()
                ? -1
                : numbers[stack.peek()];

            stack.push(i);
        }

        return result;
    }

    public static void main(String[] args) {

        int[] numbers = {
            4, 5, 2, 10, 8
        };

        System.out.println(
            Arrays.toString(
                previousSmaller(numbers)
            )
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[-1, 4, -1, 2, 2]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            25.1 Complexity
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(n).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Every index enters and leaves the stack at most once.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            25.2 Comparison with Next Greater Element
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Direction</th>
                  <th className="px-4 py-3">Stack condition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Next greater</td>
                  <td className="px-4 py-2.5 text-slate-300">Search right</td>
                  <td className="px-4 py-2.5 text-slate-300">Pop while current value is greater</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Previous smaller</td>
                  <td className="px-4 py-2.5 text-slate-300">Search left</td>
                  <td className="px-4 py-2.5 text-slate-300">Pop while stack value is greater than or equal to current</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Next smaller</td>
                  <td className="px-4 py-2.5 text-slate-300">Search right</td>
                  <td className="px-4 py-2.5 text-slate-300">Pop while current value is smaller</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Previous greater</td>
                  <td className="px-4 py-2.5 text-slate-300">Search left</td>
                  <td className="px-4 py-2.5 text-slate-300">Pop while stack value is smaller than or equal to current</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Carefully choose strict versus non-strict comparisons when duplicate values are present.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 12,
    title: "Part 12: Stock Span Problem (Amortized Analysis)",
    category: "Part 12 · Stock Span",
    anchor: "part-12",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            26. What Is the Stock Span Problem?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The Stock Span Problem asks:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For each day, how many consecutive days ending on that day had a stock price less than or equal to the current day's price?</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The current day is included.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Prices:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[100, 80, 60, 70, 60, 75, 85]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Expected spans:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[1, 1, 1, 2, 1, 4, 6]</code></p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            26.1 Understanding the example
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Day</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Span</th>
                  <th className="px-4 py-3">Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">100</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">Only today</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">80</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">Previous price 100 is greater</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">60</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">Previous price 80 is greater</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">70</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">60 and 70 are consecutive</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">60</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">Previous price 70 is greater</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">75</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">60, 70, 60, and 75 are all less than or equal to 75</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">7</td>
                  <td className="px-4 py-2.5 text-slate-300">85</td>
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">All six preceding prices are less than or equal to 85</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            26.2 Monotonic stack approach
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Maintain a stack of indices with decreasing stock prices.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For each day:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Remove previous indices whose prices are less than or equal to the current price.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">If the stack becomes empty, the span is <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i + 1</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Otherwise, the span is <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i - stack.peek()</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Push the current index.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The stack stores useful previous days whose prices are greater than the current day's price or remain potential boundaries for future days.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            27. Java Implementation
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class StockSpan {

    public static int[] calculateSpan(int[] prices) {

        int n = prices.length;

        int[] span = new int[n];

        Deque<Integer> stack =
            new ArrayDeque<>();

        for (int i = 0; i < n; i++) {

            while (
                !stack.isEmpty() &&
                prices[stack.peek()] <= prices[i]
            ) {

                stack.pop();
            }

            span[i] = stack.isEmpty()
                ? i + 1
                : i - stack.peek();

            stack.push(i);
        }

        return span;
    }

    public static void main(String[] args) {

        int[] prices = {
            100, 80, 60, 70, 60, 75, 85
        };

        System.out.println(
            Arrays.toString(
                calculateSpan(prices)
            )
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 1, 1, 2, 1, 4, 6]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            27.1 Complexity
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(n).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Although the algorithm contains a while loop inside a for loop, each index is pushed once and popped at most once.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Therefore, total stack operations are linear.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This is an example of amortized analysis.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 13,
    title: "Part 13: Largest Rectangle in Histogram",
    category: "Part 13 · Histogram Area",
    anchor: "part-13",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            28. What Is the Largest Rectangle in Histogram Problem?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">You are given an array representing the heights of adjacent histogram bars.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Every bar has width 1.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Your task is to find the maximum rectangular area that can be formed using consecutive bars.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Heights:

[2, 1, 5, 6, 2, 3]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The maximum rectangle uses the bars of heights 5 and 6.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The limiting height is 5.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Width = 2.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Area:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">5 × 2 = 10</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Expected answer:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">10</code></p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            29. Understanding the Problem
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Consider:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`          +---+
      +---|   |
      |   |   |
  +---|   |   |
  |   |   |   |
  |   |   |   |   +---+
  |   |   |   |   |   |
+---+---+---+---+---+---+
  2   1   5   6   2   3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A rectangle across several bars is restricted by the shortest bar included in that rectangle.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For a rectangle spanning indices <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">L</code> through <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">R</code>:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Width = <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">R - L + 1</code>.</li>
            <li>Height = minimum bar height in that interval.</li>
            <li>Area = height × width.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Brute-force approaches can require O(n²) or more work depending on implementation.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A monotonic stack solves the problem in O(n).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            30. Monotonic Stack Approach
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Maintain indices of bars with increasing heights.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When a new bar is shorter than the bar at the top of the stack:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>The taller bar can no longer extend to the right.</li>
            <li>Its maximum possible width is now known.</li>
            <li>Calculate its rectangle area.</li>
            <li>Remove it from the stack.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">After processing the entire array, use a final virtual bar of height zero to ensure every remaining positive-height bar is processed.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            30.1 Area calculation
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When index <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">popped</code> is removed:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`height = heights[popped]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">If the stack becomes empty:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`width = currentIndex`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Otherwise:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`width = currentIndex - stack.peek() - 1`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Area:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`area = height × width`}</code>
            </pre>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            31. Java Implementation
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayDeque;
import java.util.Deque;

public class LargestRectangleHistogram {

    public static long largestRectangle(
        int[] heights
    ) {

        if (heights == null) {

            throw new IllegalArgumentException(
                "Heights cannot be null"
            );
        }

        Deque<Integer> stack =
            new ArrayDeque<>();

        long maxArea = 0;

        for (
            int i = 0;
            i <= heights.length;
            i++
        ) {

            int currentHeight =
                i == heights.length
                ? 0
                : heights[i];

            if (currentHeight < 0) {

                throw new IllegalArgumentException(
                    "Heights must be non-negative"
                );
            }

            while (
                !stack.isEmpty() &&
                heights[stack.peek()] > currentHeight
            ) {

                int heightIndex = stack.pop();

                int height = heights[heightIndex];

                int width = stack.isEmpty()
                    ? i
                    : i - stack.peek() - 1;

                long area =
                    (long) height * width;

                maxArea = Math.max(
                    maxArea,
                    area
                );
            }

            if (i < heights.length) {

                stack.push(i);
            }
        }

        return maxArea;
    }

    public static void main(String[] args) {

        int[] heights = {
            2, 1, 5, 6, 2, 3
        };

        System.out.println(
            largestRectangle(heights)
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            31.1 Why use long for the area?
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The area is the product of two integers:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`height * width`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The result may exceed the maximum value of an <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">int</code>.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Using:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`(long) height * width`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">converts the multiplication to long arithmetic and avoids integer overflow for valid int dimensions and heights within the long range.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            31.2 Complexity
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(n).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Each index is pushed once and popped at most once.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            31.3 Important edge cases
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Test:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Empty histogram.</li>
            <li>One bar.</li>
            <li>All bars equal.</li>
            <li>Strictly increasing heights.</li>
            <li>Strictly decreasing heights.</li>
            <li>Zero-height bars.</li>
            <li>Large bar heights.</li>
          </ul>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 14,
    title: "Part 14: Monotonic Queues & Candidate Maintenance",
    category: "Part 14 · Monotonic Queues",
    anchor: "part-14",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            32. What Is a Monotonic Queue?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A monotonic queue is a deque that maintains elements in increasing or decreasing order.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">It is especially useful for problems involving a moving window over an array.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Unlike a monotonic stack, a monotonic queue supports removing elements from both ends.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The most common implementation stores indices, not only values.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Why indices?</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Because indices tell us:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Whether an element has expired from the current window.</li>
            <li>Where each value originally appeared.</li>
            <li>Which values are currently valid candidates.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.1 Monotonic decreasing deque
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For sliding-window maximum, maintain candidate values in decreasing order from front to back.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`FRONT → [10, 8, 5] ← REAR`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The largest useful candidate is at the front.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When a new value arrives:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Remove expired indices from the front.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Remove smaller or equal values from the rear.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Insert the new index at the rear.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The maximum is available at the front.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            32.2 Why remove smaller values?
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Suppose the current deque contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 8, 5]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A new value 12 arrives.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The elements 8 and 5 can never become maximum while 12 remains in the window because:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>12 is larger.</li>
            <li>12 is newer.</li>
            <li>It will expire later than those older values.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Therefore, they can be removed.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The deque becomes:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[10, 12]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">After 10 expires, 12 remains a valid maximum candidate.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 15,
    title: "Part 15: Sliding Window Maximum (Monotonic Deque O(n))",
    category: "Part 15 · Sliding Window Max",
    anchor: "part-15",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            33. What Is Sliding Window Maximum?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Given an array and a window size <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">k</code>, find the maximum value in every consecutive window of size <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">k</code>.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Array:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[1, 3, -1, -3, 5, 3, 6, 7]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Window size:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">k = 3</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Windows:</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Window</th>
                  <th className="px-4 py-3">Maximum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[1, 3, -1]</code></td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[3, -1, -3]</code></td>
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[-1, -3, 5]</code></td>
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[-3, 5, 3]</code></td>
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[5, 3, 6]</code></td>
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[3, 6, 7]</code></td>
                  <td className="px-4 py-2.5 text-slate-300">7</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[3, 3, 5, 5, 6, 7]</code></p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            34. Brute-Force Approach
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For every window:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Examine all <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">k</code> elements.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Find its maximum.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Move to the next window.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">There are approximately <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">n - k + 1</code> windows.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Each requires <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">O(k)</code> work.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Time:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">O(nk)</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This is inefficient when both <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">n</code> and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">k</code> are large.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            35. Monotonic Deque Approach
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use a deque of indices.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For every array element at index <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i</code>:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Step 1 — Remove expired indices</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">An index is outside the current window if:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">index &lt;= i - k</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Remove expired indices from the front.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Step 2 — Maintain decreasing order</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">While the current value is greater than or equal to the value at the rear index, remove that rear index.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">These smaller or equal values cannot be maximum candidates while the current value is in the window.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Step 3 — Insert current index</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Add <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">i</code> to the rear.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Step 4 — Record the maximum</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Once the first full window has been processed, the front index represents the window's maximum.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Store:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">numbers[deque.peekFirst()]</code></p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            36. Java Implementation
          </h2>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class SlidingWindowMaximum {

    public static int[] maxSlidingWindow(
        int[] numbers,
        int k
    ) {

        if (numbers == null) {

            throw new IllegalArgumentException(
                "Array cannot be null"
            );
        }

        if (k <= 0 || k > numbers.length) {

            throw new IllegalArgumentException(
                "Invalid window size"
            );
        }

        int n = numbers.length;

        int[] result = new int[n - k + 1];

        Deque<Integer> deque =
            new ArrayDeque<>();

        int resultIndex = 0;

        for (int i = 0; i < n; i++) {

            // Remove indices outside the current window.
            while (
                !deque.isEmpty() &&
                deque.peekFirst() <= i - k
            ) {

                deque.removeFirst();
            }

            // Maintain decreasing candidate values.
            while (
                !deque.isEmpty() &&
                numbers[deque.peekLast()] <= numbers[i]
            ) {

                deque.removeLast();
            }

            // Insert the current index.
            deque.addLast(i);

            // Record the maximum for a complete window.
            if (i >= k - 1) {

                result[resultIndex++] =
                    numbers[deque.peekFirst()];
            }
        }

        return result;
    }

    public static void main(String[] args) {

        int[] numbers = {
            1, 3, -1, -3, 5, 3, 6, 7
        };

        int k = 3;

        System.out.println(
            Arrays.toString(
                maxSlidingWindow(numbers, k)
            )
        );
    }
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[3, 3, 5, 5, 6, 7]`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            36.1 Complexity
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Time: O(n).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Auxiliary space: O(k).</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Each index enters the deque once and leaves at most once.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Therefore, total deque operations are linear.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            36.2 Why does the deque contain candidates rather than every window element?
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Because smaller elements that are older than a newer, larger element cannot become the maximum before that larger element expires.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The deque retains only useful candidates.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            36.3 Applications
          </h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Real-time stock-price monitoring.</li>
            <li>Maximum temperature over recent periods.</li>
            <li>Network performance monitoring.</li>
            <li>Moving-window analytics.</li>
            <li>Range maximum queries.</li>
            <li>Streaming data analysis.</li>
          </ul>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 16,
    title: "Part 16: Real-World Applications (DFS, BFS, Undo/Redo & Parsing)",
    category: "Part 16 · Applications",
    anchor: "part-16",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            37. Stack Applications
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stacks are useful whenever the most recent unfinished operation must be processed first.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.1 Function call stack
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When a method calls another method, the program maintains information about active calls.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public static void first() {

    second();
}

public static void second() {

    third();
}

public static void third() {

    System.out.println("Inside third");
}`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Conceptually, method calls are placed onto a call stack.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TOP
 |
 third()
 second()
 first()
 main()`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">third()</code> completes, its stack frame is removed.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Control returns to <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">second()</code>.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This is why deeply recursive programs can cause <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">StackOverflowError</code>.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.2 Expression evaluation
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stacks are useful for evaluating:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Postfix expressions.</li>
            <li>Prefix expressions.</li>
            <li>Infix expressions.</li>
            <li>Operator precedence.</li>
            <li>Parenthesized mathematical expressions.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example postfix expression:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">5 3 + 2 *</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Evaluation:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Push 5.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Push 3.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Encounter <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">+</code>: pop 3 and 5, calculate 8.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Push 8.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Push 2.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">Encounter <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">*</code>: pop 2 and 8, calculate 16.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Final answer:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">16</code></p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.3 Undo and redo systems
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">An application can use stacks to track previous actions.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Action 1 → Action 2 → Action 3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Undo removes the most recent action.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Redo can use another stack to store undone actions.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Applications include:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Text editors.</li>
            <li>Drawing tools.</li>
            <li>Document editing.</li>
            <li>Code editors.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.4 Browser history
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A simplified navigation system can use stacks to represent:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Back history.</li>
            <li>Forward history.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When the user navigates to a new page, forward history may be cleared.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.5 Depth-First Search
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Depth-First Search (DFS) explores one branch deeply before exploring alternative branches.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">It can be implemented recursively or using an explicit stack.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">This is useful in:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Graph traversal.</li>
            <li>Maze solving.</li>
            <li>Connected-component discovery.</li>
            <li>Backtracking.</li>
            <li>Pathfinding exploration.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            37.6 Syntax parsing
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Compilers use stack-based techniques while processing nested structures and expressions.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stacks are useful for:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Parentheses validation.</li>
            <li>Parsing expressions.</li>
            <li>Managing nested scopes.</li>
            <li>Evaluating operator precedence.</li>
            <li>Syntax analysis.</li>
          </ul>
          <hr className="my-8 border-slate-800" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            38. Queue Applications
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Queues are useful whenever items should be processed in arrival order.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            38.1 CPU scheduling
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Operating systems can maintain queues of processes waiting for execution.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Different scheduling policies use different queue arrangements.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For example, Round Robin scheduling maintains a circular sequence of ready processes.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            38.2 Breadth-First Search
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Breadth-First Search (BFS) explores a graph level by level.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A queue stores the vertices waiting to be processed.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`       A
      / \\
     B   C
    / \\   \\
   D   E   F`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">BFS order:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">A → B → C → D → E → F</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The queue ensures that nodes discovered earlier at a level are processed before nodes discovered later.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            38.3 Print scheduling
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Documents waiting to be printed can be placed in a queue.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The first submitted document is usually processed first, depending on the printing policy.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            38.4 Network buffering
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Packets may be placed in queues before being processed or transmitted.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Queues help separate data production from data consumption.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            38.5 Producer-consumer systems
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">One component produces data while another consumes it.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A queue can temporarily hold produced items until the consumer is ready.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For concurrent Java applications, an ordinary <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayDeque</code> is not thread-safe. Use suitable concurrency utilities, such as a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">BlockingQueue</code> implementation, when coordinating multiple threads.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            38.6 Request processing
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Web servers and distributed systems may use queues to manage:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Incoming jobs.</li>
            <li>Background tasks.</li>
            <li>Message delivery.</li>
            <li>Event processing.</li>
            <li>Workload management.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            38.7 Event simulation
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A simulation can use a queue to represent:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Customers waiting for service.</li>
            <li>Vehicles waiting at intersections.</li>
            <li>Tasks awaiting processing.</li>
            <li>Events scheduled for handling.</li>
          </ul>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 17,
    title: "Part 17: Comparison of Stack, Queue, and Deque",
    category: "Part 17 · Structural Comparison",
    anchor: "part-17",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            39. Main Differences
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Property</th>
                  <th className="px-4 py-3">Stack</th>
                  <th className="px-4 py-3">Queue</th>
                  <th className="px-4 py-3">Deque</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Main behavior</td>
                  <td className="px-4 py-2.5 text-slate-300">LIFO</td>
                  <td className="px-4 py-2.5 text-slate-300">FIFO</td>
                  <td className="px-4 py-2.5 text-slate-300">Both-end access</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Insertion</td>
                  <td className="px-4 py-2.5 text-slate-300">Top</td>
                  <td className="px-4 py-2.5 text-slate-300">Rear</td>
                  <td className="px-4 py-2.5 text-slate-300">Front or rear</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Removal</td>
                  <td className="px-4 py-2.5 text-slate-300">Top</td>
                  <td className="px-4 py-2.5 text-slate-300">Front</td>
                  <td className="px-4 py-2.5 text-slate-300">Front or rear</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Insertion operations</td>
                  <td className="px-4 py-2.5 text-slate-300">Push</td>
                  <td className="px-4 py-2.5 text-slate-300">Enqueue</td>
                  <td className="px-4 py-2.5 text-slate-300">Add first/last</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Removal operations</td>
                  <td className="px-4 py-2.5 text-slate-300">Pop</td>
                  <td className="px-4 py-2.5 text-slate-300">Dequeue</td>
                  <td className="px-4 py-2.5 text-slate-300">Remove first/last</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Common implementation</td>
                  <td className="px-4 py-2.5 text-slate-300">Array or linked list</td>
                  <td className="px-4 py-2.5 text-slate-300">Circular array or linked list</td>
                  <td className="px-4 py-2.5 text-slate-300">Circular array or doubly linked structure</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Common application</td>
                  <td className="px-4 py-2.5 text-slate-300">Undo, recursion</td>
                  <td className="px-4 py-2.5 text-slate-300">Scheduling, BFS</td>
                  <td className="px-4 py-2.5 text-slate-300">Sliding-window maximum</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            40. Choosing the Right Structure
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use a stack when:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>The most recent item must be processed first.</li>
            <li>You need to reverse the order of operations.</li>
            <li>You are parsing nested expressions.</li>
            <li>You are implementing iterative DFS.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use a queue when:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Items must be processed in arrival order.</li>
            <li>You are implementing BFS.</li>
            <li>You are scheduling jobs.</li>
            <li>You are buffering messages.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use a deque when:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>You need insertion and deletion at both ends.</li>
            <li>You are maintaining a sliding window.</li>
            <li>You need an efficient stack or queue implementation.</li>
            <li>You are implementing monotonic queue algorithms.</li>
          </ul>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 18,
    title: "Part 18: Complete Complexity Comparison Matrix",
    category: "Part 18 · Complexity Benchmarks",
    anchor: "part-18",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            41. Stack Complexity
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Array stack</th>
                  <th className="px-4 py-3">Linked stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Push</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1), amortized for dynamic array</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Pop</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Peek</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">isEmpty</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Size</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) if tracked</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) if tracked</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Search</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A fixed-capacity array stack has O(1) push time as long as it has available space.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A dynamic array stack has amortized O(1) push time due to occasional resizing.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            42. Queue Complexity
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Circular array queue</th>
                  <th className="px-4 py-3">Linked queue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Enqueue</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Dequeue</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Peek</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">isEmpty</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Size</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) if tracked</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) if tracked</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Search</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            43. Deque Complexity
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For Java's <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayDeque</code>, basic operations at either end generally have amortized constant-time performance.</p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Typical complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Add first</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) amortized</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Add last</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) amortized</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Remove first</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) amortized</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Remove last</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) amortized</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Peek first</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Peek last</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Search for a value</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            44. Monotonic Algorithm Complexity
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Auxiliary space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Balanced parentheses</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Next Greater Element</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Previous Smaller Element</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Stock Span</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Largest Rectangle in Histogram</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Sliding Window Maximum</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(k)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 19,
    title: "Part 19: 13 Critical Mistakes & Traps to Avoid",
    category: "Part 19 · Defensive Engineering",
    anchor: "part-19",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            45. Errors to Avoid
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 1: Confusing LIFO and FIFO.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A stack removes the latest inserted element first.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A queue removes the earliest inserted element first.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 2: Accessing an empty stack.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Always check whether the stack contains an element before popping or reading its top in custom implementations.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 3: Incorrect top initialization.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For an array stack with zero-based indexing, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">top</code> should initially be <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">-1</code>.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 4: Forgetting circular wrap-around.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use modulo arithmetic when advancing circular queue indices.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 5: Confusing full and empty circular queues.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Maintain a <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">size</code> variable or use another consistent full/empty distinction.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 6: Forgetting to reset the rear reference in a linked queue.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">After removing its only node, both front and rear must be null.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 7: Using values instead of indices in sliding-window problems.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Indices are required to determine whether a candidate has expired.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 8: Removing equal values incorrectly in monotonic stacks.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Strict versus non-strict comparisons must match the problem definition.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 9: Assuming nested loops imply quadratic complexity.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">In monotonic stack and queue algorithms, each element is inserted once and removed at most once.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 10: Forgetting the sentinel step in histogram problems.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A final virtual zero-height bar ensures that remaining positive-height bars are evaluated.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 11: Mixing stack and queue operations in a deque.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Define which end represents the top or front before writing the algorithm.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 12: Using ArrayDeque with null elements.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayDeque</code> prohibits null elements.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Mistake 13: Assuming ArrayDeque is thread-safe.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">It is not. Use a concurrency-specific collection when multiple threads require synchronized queue access.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 20,
    title: "Part 20: Laboratory Exercises (Labs 1-6)",
    category: "Part 20 · 6 Hands-on Laboratories",
    anchor: "part-20",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            46. Lab 1: Implement a Stack Using an Array
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Create a fixed-capacity stack.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Implement push.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Implement pop.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Implement peek.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Implement isEmpty.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">Implement isFull.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">7.</span>
            <div className="flex-1">Implement size.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">8.</span>
            <div className="flex-1">Handle underflow.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">9.</span>
            <div className="flex-1">Handle overflow.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">10.</span>
            <div className="flex-1">Test different capacities.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Experiment with both integer and generic implementations.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            47. Lab 2: Implement a Stack Using a Linked List
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Create a generic node.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Maintain a top reference.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Insert at the top.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Remove from the top.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Read the top.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">Calculate size.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">7.</span>
            <div className="flex-1">Traverse the stack.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">8.</span>
            <div className="flex-1">Test empty-stack behavior.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Compare memory use and operation complexity with the array-based implementation.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            48. Lab 3: Implement a Circular Queue
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Create a fixed-capacity array.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Maintain front and rear.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Maintain queue size.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Implement enqueue.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Implement dequeue.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">Implement peek.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">7.</span>
            <div className="flex-1">Implement full and empty checks.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">8.</span>
            <div className="flex-1">Demonstrate index wrap-around.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">9.</span>
            <div className="flex-1">Test full and empty conditions.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">10.</span>
            <div className="flex-1">Verify that all array slots are usable.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            49. Lab 4: Queue Using a Linked List
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Implement generic nodes.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Maintain front and rear.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Implement enqueue.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Implement dequeue.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Implement peek.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">Handle the empty-to-non-empty transition.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">7.</span>
            <div className="flex-1">Handle the final-node deletion.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">8.</span>
            <div className="flex-1">Implement traversal.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            50. Lab 5: Build a Balanced Parentheses Checker
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Accept an expression.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Validate round parentheses.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Validate square brackets.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Validate curly braces.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Reject incorrect ordering.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">Detect unmatched opening brackets.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">7.</span>
            <div className="flex-1">Detect unmatched closing brackets.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Test nested and mixed expressions.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            51. Lab 6: Implement a Sliding Window Maximum
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Accept an integer array.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Accept a window size <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">k</code>.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Use an ArrayDeque of indices.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Remove expired elements.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Maintain decreasing candidate values.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">Output the maximum for every window.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">7.</span>
            <div className="flex-1">Compare against a brute-force solution.</div>
          </div>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 21,
    title: "Part 21: Assignments (Problems 1-10)",
    category: "Part 21 · 10 Independent Projects",
    anchor: "part-21",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            52. Assignment 1: Balanced Parentheses
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Write a Java program to check whether a string contains balanced brackets.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Examples:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Input:  ()
Output: true

Input:  ([{}])
Output: true

Input:  ([)]
Output: false

Input:  (((
Output: false`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Use a stack.</li>
            <li>Support <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">()</code>, <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[]</code>, and <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">&#123;&#125;</code>.</li>
            <li>Detect unmatched closing brackets.</li>
            <li>Detect remaining opening brackets.</li>
            <li>Explain the LIFO requirement.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Expected complexity:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Time: O(n).</li>
            <li>Auxiliary space: O(n).</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            53. Assignment 2: Next Greater Element
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Given:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[11, 13, 21, 3]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Find the next greater element for each position.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Expected result:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[13, 21, -1, -1]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Brute-force solution.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Monotonic stack solution.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Compare the complexities.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            54. Assignment 3: Previous Smaller Element
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Given:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[4, 5, 2, 10, 8]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Expected result:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[-1, 4, -1, 2, 2]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Use a monotonic stack.</li>
            <li>Handle duplicate values.</li>
            <li>Explain why elements are removed from the top.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            55. Assignment 4: Stock Span
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Given:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[100, 80, 60, 70, 60, 75, 85]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Expected result:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[1, 1, 1, 2, 1, 4, 6]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Implement a linear-time solution using a monotonic stack.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Explain why each index enters and leaves the stack at most once.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            56. Assignment 5: Largest Rectangle in Histogram
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Given:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">[2, 1, 5, 6, 2, 3]</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Expected output:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">10</code></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Implement a monotonic stack.</li>
            <li>Calculate widths correctly.</li>
            <li>Use long for the area.</li>
            <li>Test equal heights.</li>
            <li>Test increasing and decreasing heights.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            57. Assignment 6: Sliding Window Maximum
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Input:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`numbers = [1, 3, -1, -3, 5, 3, 6, 7]

k = 3`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Expected output:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[3, 3, 5, 5, 6, 7]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Implement brute-force solution.</li>
            <li>Implement deque solution.</li>
            <li>Track indices.</li>
            <li>Remove expired indices.</li>
            <li>Maintain a decreasing deque.</li>
            <li>Explain the O(n) complexity.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            58. Assignment 7: Implement a Min Stack
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Design a stack that supports:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">push(value)</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">pop()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">top()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">getMin()</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">All these operations should take O(1) time.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Hint:</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Maintain an additional stack that tracks the minimum value associated with each active stack position, or use a more memory-efficient alternative that stores only changes in the minimum.</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            59. Assignment 8: Implement a Queue Using Two Stacks
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use two stacks to implement a FIFO queue.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Required operations:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">enqueue(value)</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">dequeue()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">peek()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isEmpty()</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Explain why one stack handles incoming elements and the other handles outgoing elements.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The amortized time per operation can be O(1).</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            60. Assignment 9: Implement a Stack Using Two Queues
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Implement LIFO stack behavior using two FIFO queues.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Required operations:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">push(value)</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">pop()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">top()</code></li>
            <li><code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">isEmpty()</code></li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Analyze both approaches:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Make push expensive.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Make pop expensive.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            61. Assignment 10: Evaluate a Postfix Expression
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Write a program that evaluates a postfix mathematical expression using a stack.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Expression:

5 3 + 2 *

Expected result:

16`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Requirements:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Support addition.</li>
            <li>Support subtraction.</li>
            <li>Support multiplication.</li>
            <li>Support division.</li>
            <li>Handle insufficient operands.</li>
            <li>Detect division by zero.</li>
            <li>Explain operand ordering.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">For a full implementation, tokenize whitespace-separated integers and operators so multi-digit and negative integers can be handled correctly.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 22,
    title: "Part 22: Knowledge Assessment (15 MCQs, 25 Qs & Output)",
    category: "Part 22 · Assessment Suite",
    anchor: "part-22",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            62. Multiple-Choice Questions
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">1. What principle does a stack follow?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. FIFO</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. LIFO</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Random order</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Sorted order</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">2. Which operation inserts an element into a stack?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. Pop</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. Peek</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Push</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Dequeue</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">3. Which operation removes an element from the top of a stack?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. Push</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. Pop</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Enqueue</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Offer</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">4. What principle does a normal queue follow?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. LIFO</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. FIFO</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Random order</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Reverse order</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">5. Where is an element inserted in a standard queue?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. Front</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. Rear</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Middle</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Random position</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">6. What is the purpose of a circular queue?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. Sort elements</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. Reuse freed array positions through wrap-around</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Reverse elements</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Remove duplicates</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">7. What is a deque?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. A stack with no removal operation</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. A queue that supports insertion and deletion at both ends</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. A sorting algorithm</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. A tree structure</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">8. Which Java class is commonly recommended for stack implementation?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. ArrayList</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. HashMap</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. ArrayDeque</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. TreeSet</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">9. Which algorithm uses a monotonic stack?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. Binary search</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. Next Greater Element</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Merge sort</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Linear search</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">10. What is the time complexity of balanced-parentheses checking?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. O(1)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. O(log n)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. O(n)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. O(n²)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">11. What is the time complexity of the optimized Stock Span algorithm?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. O(n²)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. O(n log n)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. O(n)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. O(2ⁿ)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">12. Which structure is used for Sliding Window Maximum?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. Ordinary stack</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. Monotonic deque</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Binary search tree only</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Heap only</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">13. What is the auxiliary space complexity of the sliding-window deque solution?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. O(1)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. O(log n)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. O(k)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. O(n²)</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">14. Which data structure is used in BFS?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. Stack</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. Queue</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Heap</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Set only</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">15. Which structure naturally supports undo operations in reverse order?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A. Queue</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">B. Stack</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">C. Array only</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">D. Graph</p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            63. Short-Answer Questions
          </h2>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">What is a stack ADT?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Explain LIFO.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Explain FIFO.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">What is stack underflow?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">What is stack overflow?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">Explain array-based stack implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">7.</span>
            <div className="flex-1">Explain linked-list-based stack implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">8.</span>
            <div className="flex-1">What is a queue?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">9.</span>
            <div className="flex-1">Explain front and rear references.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">10.</span>
            <div className="flex-1">What is a circular queue?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">11.</span>
            <div className="flex-1">Explain circular array indexing.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">12.</span>
            <div className="flex-1">What is a deque?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">13.</span>
            <div className="flex-1">Why is ArrayDeque useful in Java?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">14.</span>
            <div className="flex-1">What is a monotonic stack?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">15.</span>
            <div className="flex-1">Differentiate increasing and decreasing monotonic stacks.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">16.</span>
            <div className="flex-1">Explain the Next Greater Element problem.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">17.</span>
            <div className="flex-1">Explain the Previous Smaller Element problem.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">18.</span>
            <div className="flex-1">What is the Stock Span Problem?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">19.</span>
            <div className="flex-1">Explain Largest Rectangle in Histogram.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">20.</span>
            <div className="flex-1">What is a monotonic queue?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">21.</span>
            <div className="flex-1">Explain Sliding Window Maximum.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">22.</span>
            <div className="flex-1">Why are indices stored in a sliding-window deque?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">23.</span>
            <div className="flex-1">How can two stacks implement a queue?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">24.</span>
            <div className="flex-1">How can two queues implement a stack?</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">25.</span>
            <div className="flex-1">Explain real-world applications of stacks and queues.</div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            64. Output-Based Questions
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 1</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Deque<Integer> stack = new ArrayDeque<>();

stack.push(10);

stack.push(20);

stack.push(30);

System.out.println(stack.pop());`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">What is the output?</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 2</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Queue<Integer> queue = new ArrayDeque<>();

queue.offer(10);

queue.offer(20);

queue.offer(30);

System.out.println(queue.poll());`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">What is the output?</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 3</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Deque<Integer> deque = new ArrayDeque<>();

deque.addFirst(10);

deque.addLast(20);

deque.addFirst(5);

System.out.println(deque);`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">What is printed?</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 4</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] prices = {100, 80, 60, 70, 60, 75, 85};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">What is the stock span array?</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 5</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int[] numbers = {4, 5, 2, 10, 8};`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">What is the next greater element array?</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 23,
    title: "Part 23: Answer Key & Comprehensive Explanations",
    category: "Part 23 · Verification & Solutions",
    anchor: "part-23",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            65. Multiple-Choice Answers
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Question</th>
                  <th className="px-4 py-3">Answer</th>
                  <th className="px-4 py-3">Explanation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">Stack follows Last In, First Out.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                  <td className="px-4 py-2.5 text-slate-300">Push inserts at the top.</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">Pop removes the top.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">Queue follows First In, First Out.</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">New queue elements enter at the rear.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">Circular indexing reuses freed positions.</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">7</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">Deque supports operations at both ends.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">8</td>
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                  <td className="px-4 py-2.5 text-slate-300">ArrayDeque is the recommended general-purpose choice for stack behavior.</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">9</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">Next Greater Element uses a monotonic stack.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">10</td>
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                  <td className="px-4 py-2.5 text-slate-300">Every character is processed a constant number of times.</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">11</td>
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                  <td className="px-4 py-2.5 text-slate-300">Each index is pushed and popped at most once.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">12</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">A monotonic deque maintains window maximum candidates.</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">13</td>
                  <td className="px-4 py-2.5 text-slate-300">C</td>
                  <td className="px-4 py-2.5 text-slate-300">At most k indices belong to the active window.</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">14</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">BFS uses a FIFO queue.</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">15</td>
                  <td className="px-4 py-2.5 text-slate-300">B</td>
                  <td className="px-4 py-2.5 text-slate-300">Undo removes the most recent action first.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            66. Output-Based Answers
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 1</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`30`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stack uses LIFO. The latest inserted value is removed first.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 2</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Queue uses FIFO. The earliest inserted value is removed first.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 3</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[5, 10, 20]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">5 and 10 are inserted at the front, followed by 20 at the rear.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 4</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[1, 1, 1, 2, 1, 4, 6]`}</code>
            </pre>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Question 5</strong></p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[5, 10, 10, -1, -1]`}</code>
            </pre>
          </div>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 24,
    title: "Part 24: Mini-Project — Stack and Queue Toolkit in Java",
    category: "Part 24 · Production Toolkit Capstone",
    anchor: "part-24",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            67. Build a Stack and Queue Toolkit in Java
          </h2>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Project objective
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Build a Java application that provides implementations and demonstrations of stacks, queues, and deques, including common interview algorithms.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 1 — Stack toolkit
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Fixed-capacity array stack.</li>
            <li>Dynamic array stack.</li>
            <li>Linked-list stack.</li>
            <li>Min Stack.</li>
            <li>Stack using two queues.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 2 — Queue toolkit
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Linear array queue.</li>
            <li>Circular array queue.</li>
            <li>Linked-list queue.</li>
            <li>Queue using two stacks.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 3 — Deque toolkit
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Insertion at both ends.</li>
            <li>Removal at both ends.</li>
            <li>Front inspection.</li>
            <li>Rear inspection.</li>
            <li>Empty checking.</li>
            <li>Size tracking.</li>
          </ul>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use <code className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-orange-300 font-mono text-xs">ArrayDeque</code> as a Java reference implementation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 4 — Monotonic stack algorithms
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Next Greater Element.</li>
            <li>Previous Smaller Element.</li>
            <li>Stock Span.</li>
            <li>Largest Rectangle in Histogram.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 5 — Monotonic queue algorithms
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Sliding Window Maximum.</li>
            <li>Optional Sliding Window Minimum.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 6 — Stack applications
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Implement:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Balanced parentheses.</li>
            <li>Postfix expression evaluation.</li>
            <li>Undo/redo simulation.</li>
            <li>Iterative DFS for a graph.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Feature 7 — Testing
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Test:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>Empty structures.</li>
            <li>One-element structures.</li>
            <li>Multiple insertions.</li>
            <li>Multiple removals.</li>
            <li>Overflow.</li>
            <li>Underflow.</li>
            <li>Duplicate values.</li>
            <li>Negative values.</li>
            <li>Increasing arrays.</li>
            <li>Decreasing arrays.</li>
            <li>Repeated maximum values.</li>
            <li>Different window sizes.</li>
          </ul>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Suggested folder structure
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">TEXT</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`StackQueueProject/
│
├── src/
│   ├── stack/
│   │   ├── ArrayStack.java
│   │   ├── DynamicArrayStack.java
│   │   ├── LinkedStack.java
│   │   ├── MinStack.java
│   │   └── StackUsingQueues.java
│   │
│   ├── queue/
│   │   ├── CircularArrayQueue.java
│   │   ├── LinkedQueue.java
│   │   └── QueueUsingStacks.java
│   │
│   ├── deque/
│   │   ├── DequeOperations.java
│   │   └── SlidingWindowMaximum.java
│   │
│   ├── monotonic/
│   │   ├── NextGreaterElement.java
│   │   ├── PreviousSmallerElement.java
│   │   ├── StockSpan.java
│   │   ├── LargestRectangle.java
│   │   └── SlidingWindowMaximum.java
│   │
│   ├── applications/
│   │   ├── BalancedParentheses.java
│   │   ├── PostfixEvaluator.java
│   │   ├── UndoRedo.java
│   │   └── GraphDFS.java
│   │
│   ├── testing/
│   │   └── DataStructureTests.java
│   │
│   └── Main.java
│
└── README.md`}</code>
            </pre>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            Expected outcome
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">You should be able to implement stack and queue behavior using arrays and linked lists, use ArrayDeque correctly, and solve the major monotonic stack and deque interview problems.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 25,
    title: "Part 25: Interview Preparation (Top 15 Technical Questions)",
    category: "Part 25 · High-Yield Interview Q&A",
    anchor: "part-25",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            68. Frequently Asked Interview Questions
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">1. What is a stack?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A linear ADT that follows Last In, First Out.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">2. What is a queue?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A linear ADT that follows First In, First Out.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">3. What is the difference between push and pop?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Push inserts an element at the top. Pop removes and returns the top element.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">4. What is the difference between enqueue and dequeue?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Enqueue inserts at the rear. Dequeue removes from the front.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">5. Why use a circular queue?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A circular queue allows freed array positions to be reused without shifting elements.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">6. How can a queue be implemented using a linked list?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Maintain front and rear references. Insert at the rear and remove from the front.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">7. What is a deque?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A double-ended queue that supports insertion and deletion from both ends.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">8. Why prefer ArrayDeque over the legacy Stack class?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">ArrayDeque is a resizable-array Deque implementation, and Java's documentation recommends Deque-based stack use over the legacy Stack class.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">9. What is a monotonic stack?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A stack that maintains its values or corresponding indices in an increasing or decreasing order.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">10. Why can a monotonic stack solve Next Greater Element in O(n)?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Each index is pushed once and popped at most once, so total operations are linear.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">11. How is Stock Span related to Previous Greater Element?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The stock span is determined by the distance to the nearest previous price strictly greater than the current price, or to the beginning if none exists.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">12. How does the histogram algorithm determine rectangle width?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">When a bar is popped, the new top identifies the previous smaller boundary. The current index identifies the next smaller boundary.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">13. Why does Sliding Window Maximum use indices?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Indices allow detection of candidates that have left the active window.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">14. What is the difference between a monotonic stack and monotonic queue?</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A stack exposes one end, whereas a deque supports removing expired elements from the front and maintaining candidates at the rear.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">15. Explain amortized complexity in Stock Span.</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Although one iteration may pop many indices, every index is pushed once and popped at most once. The total work over all iterations is O(n).</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 26,
    title: "Part 26: Module Revision Sheet & Essential Patterns",
    category: "Part 26 · Quick Reference Summaries",
    anchor: "part-26",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            69. Essential Definitions
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Concept</th>
                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Stack</td>
                  <td className="px-4 py-2.5 text-slate-300">LIFO data structure</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Queue</td>
                  <td className="px-4 py-2.5 text-slate-300">FIFO data structure</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Deque</td>
                  <td className="px-4 py-2.5 text-slate-300">Double-ended queue</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Push</td>
                  <td className="px-4 py-2.5 text-slate-300">Insert at stack top</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Pop</td>
                  <td className="px-4 py-2.5 text-slate-300">Remove stack top</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Peek</td>
                  <td className="px-4 py-2.5 text-slate-300">Read without removing</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Enqueue</td>
                  <td className="px-4 py-2.5 text-slate-300">Insert at queue rear</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Dequeue</td>
                  <td className="px-4 py-2.5 text-slate-300">Remove from queue front</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Circular queue</td>
                  <td className="px-4 py-2.5 text-slate-300">Queue that wraps around its array</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Monotonic stack</td>
                  <td className="px-4 py-2.5 text-slate-300">Stack maintaining increasing or decreasing order</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Monotonic queue</td>
                  <td className="px-4 py-2.5 text-slate-300">Deque maintaining monotonic candidate values</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Underflow</td>
                  <td className="px-4 py-2.5 text-slate-300">Removing from an empty structure</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Overflow</td>
                  <td className="px-4 py-2.5 text-slate-300">Inserting into a full fixed-capacity structure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            70. Essential Complexity Table
          </h2>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation or algorithm</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Auxiliary space</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Stack push</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) per operation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Stack pop</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Queue enqueue</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) per operation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Queue dequeue</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Deque end operations</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) amortized for ArrayDeque</td>
                  <td className="px-4 py-2.5 text-slate-300">O(1) amortized</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Balanced parentheses</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Next Greater Element</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Previous Smaller Element</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Stock Span</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-slate-300">Largest Rectangle in Histogram</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                </tr>
                <tr className="bg-slate-900/80">
                  <td className="px-4 py-2.5 text-slate-300">Sliding Window Maximum</td>
                  <td className="px-4 py-2.5 text-slate-300">O(n)</td>
                  <td className="px-4 py-2.5 text-slate-300">O(k)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            71. Patterns You Must Remember
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Stack pattern:</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use LIFO when processing the most recent unresolved item first.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Queue pattern:</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use FIFO when processing items in their arrival order.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Monotonic stack pattern:</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use it when finding the nearest previous or next greater/smaller value.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Monotonic queue pattern:</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use it when maintaining useful candidates over a moving window.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Two-stack pattern:</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Useful for implementing a queue using stacks.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Two-queue pattern:</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Useful for implementing a stack using queues.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Circular array pattern:</strong></p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Use modulo indexing to reuse positions without shifting elements.</p>
          <hr className="my-8 border-slate-800" />
      </div>
    )
  },
  {
    id: 27,
    title: "Part 27: Module Completion Criteria & Final Takeaways",
    category: "Milestone · Stacks, Queues & Deques Mastery",
    anchor: "part-27",
    content: (
      <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            72. Theoretical Knowledge
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">You should be able to:</p>
          <ul className="list-disc list-outside pl-5 space-y-2 text-slate-300 my-3 text-sm leading-relaxed">
            <li>[ ] Explain the Stack ADT.</li>
            <li>[ ] Explain LIFO behavior.</li>
            <li>[ ] Implement a stack using arrays.</li>
            <li>[ ] Implement a stack using linked lists.</li>
            <li>[ ] Understand stack underflow and overflow.</li>
            <li>[ ] Explain queue fundamentals and FIFO.</li>
            <li>[ ] Implement a circular queue.</li>
            <li>[ ] Implement a queue using a linked list.</li>
            <li>[ ] Explain the front and rear references.</li>
            <li>[ ] Explain a deque.</li>
            <li>[ ] Use Java ArrayDeque.</li>
            <li>[ ] Explain monotonic stacks.</li>
            <li>[ ] Explain monotonic queues.</li>
            <li>[ ] Solve balanced parentheses.</li>
            <li>[ ] Solve Next Greater Element.</li>
            <li>[ ] Solve Previous Smaller Element.</li>
            <li>[ ] Solve Stock Span.</li>
            <li>[ ] Solve Largest Rectangle in Histogram.</li>
            <li>[ ] Solve Sliding Window Maximum.</li>
            <li>[ ] Explain stack and queue applications.</li>
            <li>[ ] Analyze time and auxiliary-space complexity.</li>
          </ul>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-slate-800 tracking-tight">
            73. Practical Completion
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Before moving to the next module, complete:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">Array stack implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Linked stack implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Circular queue implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Linked queue implementation.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">ArrayDeque demonstrations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">6.</span>
            <div className="flex-1">All five monotonic algorithm implementations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">7.</span>
            <div className="flex-1">At least five assignments.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">8.</span>
            <div className="flex-1">The knowledge assessment.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">9.</span>
            <div className="flex-1">The Stack and Queue Toolkit mini-project.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">You should be able to write balanced-parentheses checking, Next Greater Element, Stock Span, Largest Rectangle in Histogram, and Sliding Window Maximum without copying the solution.</p>
          <hr className="my-8 border-slate-800" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 mt-10 mb-6 tracking-tight">
            FINAL TAKEAWAY
          </h1>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">Stacks, queues, and deques are fundamental data structures used throughout computer science.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">A stack provides LIFO processing. A queue provides FIFO processing. A deque combines both capabilities.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">More importantly, monotonic stacks and queues demonstrate how the right data structure can transform a seemingly quadratic problem into a linear-time solution.</p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3">The five concepts to master before moving forward are:</p>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">1.</span>
            <div className="flex-1">LIFO and FIFO operations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">2.</span>
            <div className="flex-1">Array and linked-list implementations.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">3.</span>
            <div className="flex-1">Circular queue indexing.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">4.</span>
            <div className="flex-1">Monotonic stack reasoning.</div>
          </div>
          <div className="flex items-start gap-2.5 my-2 text-slate-300 text-sm leading-relaxed">
            <span className="font-mono text-orange-400 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-500/15 border border-orange-500/30 rounded">5.</span>
            <div className="flex-1">Monotonic deque reasoning.</div>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base my-3"><strong className="font-semibold text-white">Do not just memorize these algorithms. Trace each insertion, removal, comparison, and pointer/index change until you understand why every operation is necessary.</strong></p>
      </div>
    )
  }
];

export default JAVA_STACKS_QUEUES_SECTIONS;
