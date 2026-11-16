import React from "react";
import { Sparkles, Terminal, Code2, BookOpen, Layers, CheckCircle2, AlertTriangle, ArrowRight, GitFork, Cpu } from "lucide-react";

export const JAVA_SPECIALIZED_DS_SECTIONS = [
  {
    id: 0,
    title: "Module 14: Specialized Data Structures Curriculum Overview",
    category: "Course Roadmap · Objectives",
    anchor: "overview",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Java + DSA
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced DSA
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Module 14
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This module introduces specialized data structures designed to solve problems that ordinary arrays, linked lists, heaps, and binary search trees cannot solve as efficiently.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You will study four important areas:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part A — Tries
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Efficient string storage.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Prefix searching.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Word dictionaries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Autocomplete systems.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part B — Disjoint Set Union (DSU)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Managing connected components.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find and Union operations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Path compression.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union by rank and size.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part C — Segment Trees
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Point updates.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Efficient range-sum and range-minimum problems.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part D — Fenwick Trees and Sparse Tables
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Prefix sums and range sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Binary Indexed Trees.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Static range queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Comparison of specialized range-query structures.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These structures are especially important in competitive programming, coding interviews, database systems, search engines, graph algorithms, and large-scale data processing.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part A — Tries
          </p>
      </div>
    ),
  },
  {
    id: 1,
    title: "1. Trie Fundamentals & Prefix Sharing Architecture",
    category: "Part A · Tries & Prefix Trees",
    anchor: "trie-fundamentals",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>1.1 What is a Trie?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Trie is a tree-based data structure used to store and retrieve strings efficiently.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is also known as:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Prefix Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Digital Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Retrieval Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The word Trie is derived from the word retrieval.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Unlike a normal BST, which organizes values using comparisons, a Trie organizes strings character by character.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider the following words:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            cat car care card dog
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Trie shares common prefixes between words.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Root / \\ c d | | a o / \\ | t r g | e / r
This simplified diagram needs one more distinction: terminal markers identify complete words. For example, cat, car, care, and card must each have their own end-of-word marker.
[Trie Data Structures: Prefix Trees, Implementation & Use Cases](https://images.openai.com/static-rsc-4/Ib31YJUMUjk89M-TW4y6ufcehvfc9ARRRgzOku-wL9UW41_XQQ4pVeg7J4AfMX9Wzx-NVcu2742lM9c9CIogKgzcgc1yN8by8FoHTIR9o1X8V8c_hvhG10WqNMzt8qJF_4D5_HXyqsYEL3qf0yIetwHjVFulyqL4NHm2aTwFPA8?purpose=inline)
[fonzi.ai](https://fonzi.ai/blog/trie-data-structure?utm_source=chatgpt.com)`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>1.2 How does a Trie work?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose we insert:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            car card care cat
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The Trie stores each character as a node or as an edge leading to a node.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            When multiple words share the same prefix, that prefix is stored only once.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            car card care
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            All three words share:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            car
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Instead of creating three completely separate paths, the Trie reuses the common path.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Root | c | a | r [END: car] | \\ d e | | END END
Here:
END: car means car is a complete word.
The path through d represents card.
The path through e represents care.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>1.3 Why do we need Tries?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider a dictionary containing 100,000 words.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You want to check whether the following word exists:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            application
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            With a simple unsorted list, you may need to compare many words.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            With a Trie, you follow the characters:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            a -&gt; p -&gt; p -&gt; l -&gt; i -&gt; c -&gt; a -&gt; t -&gt; i -&gt; o -&gt; n
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If every required character exists along the path and the final node is marked as a complete word, the word exists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The lookup time depends primarily on the length of the word rather than the number of stored words.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>1.4 Real-world applications</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Application</th>
                  <th className="px-4 py-3">Use of Trie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Search engines</td>
                  <td className="px-4 py-2.5 text-slate-300">Prefix-based search suggestions</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Text editors</td>
                  <td className="px-4 py-2.5 text-slate-300">Autocomplete</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Spell checkers</td>
                  <td className="px-4 py-2.5 text-slate-300">Dictionary lookup</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Mobile keyboards</td>
                  <td className="px-4 py-2.5 text-slate-300">Word suggestions</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Contact applications</td>
                  <td className="px-4 py-2.5 text-slate-300">Searching names by prefix</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">IP routing</td>
                  <td className="px-4 py-2.5 text-slate-300">Prefix matching</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Games</td>
                  <td className="px-4 py-2.5 text-slate-300">Word search</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Command-line tools</td>
                  <td className="px-4 py-2.5 text-slate-300">Command completion</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Search interfaces</td>
                  <td className="px-4 py-2.5 text-slate-300">Search-as-you-type</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example, when you type:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            pro
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            into a search box, an autocomplete system may suggest:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            programming product project professional
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Trie can efficiently locate all words beginning with pro.
          </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "2. Trie Node Representation & Alphabet Indexing",
    category: "Part A · Trie Architecture",
    anchor: "trie-node-representation",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>2.1 What is a Trie Node?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Trie node represents a position in a character sequence.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a Trie containing lowercase English letters, each node may have up to 26 children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Each position corresponds to one character:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            a -&gt; index 0 b -&gt; index 1 c -&gt; index 2 ... z -&gt; index 25
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A node also needs a field indicating whether a complete word ends at that position.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>2.2 Java Trie Node</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class TrieNode  {
  TrieNode[] children = new TrieNode[26];
  boolean isEndOfWord;

}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explanation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Children array
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TrieNode[] children = new TrieNode[26];
Stores references to the next character nodes. End-of-word marker boolean isEndOfWord;
Indicates whether the current node represents the end of a complete stored word. Why is isEndOfWord important? Consider: car card The path for car is also a prefix of card. But car itself must still be recognized as a complete word. Therefore, the node for r needs an end-of-word marker even though it has another child.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>2.3 Visual representation</span>
          </h3>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>2.4 Character-to-index conversion</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For lowercase English characters:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int index = ch - 'a';
Examples: 'a' - 'a' = 0 'b' - 'a' = 1 'c' - 'a' = 2 'z' - 'a' = 25 This allows us to access the corresponding child directly. Important limitation: This particular representation assumes every input character is between a and z. Uppercase letters, punctuation, spaces, and Unicode characters require normalization or a different child representation, such as a HashMap<Character, TrieNode>.`}</code>
            </pre>
          </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "3. Trie Insertion & Dynamic Path Allocation",
    category: "Part A · Trie Insertion",
    anchor: "trie-insertion",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>3.1 What is Trie insertion?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insertion means adding a new word to the Trie.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose the Trie is initially empty.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            cat
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The required path is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Root -&gt; c -&gt; a -&gt; t
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Each missing node is created.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Finally, mark the t node as the end of the word.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>3.2 Step-by-step example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Insert:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            car card care
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            First insertion: car
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Create:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Root -&gt; c -&gt; a -&gt; r
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Mark r as the end of a word.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Second insertion: card
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The path c -&gt; a -&gt; r already exists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Only create the missing d node.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Mark d as the end of a word.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Third insertion: care
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The path c -&gt; a -&gt; r exists again.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Create e and mark it as an end-of-word node.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Final representation:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Root | c | a | r* | \\ d* e*
Here * represents an end-of-word marker.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>3.3 Trie insertion algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Start at the root.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Read the first character.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Convert the character into an index.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Check whether the child exists.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If it does not exist, create it.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move to the child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Repeat for every character.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Mark the final node as the end of a word.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>3.4 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class TrieNode  {
  TrieNode[] children = new TrieNode[26];
  boolean isEndOfWord;

}
class Trie  {
  private final TrieNode root;
  Trie()  {
    root = new TrieNode();

  }
  public void insert(String word)  {
    TrieNode current = root;
    for (char ch : word.toCharArray())  {
      int index = ch - 'a';
      if (current.children[index] == null)  {
        current.children[index] = new TrieNode();

      }
      current = current.children[index];

    }
    current.isEndOfWord = true;

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>3.5 Understanding the implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`TrieNode current = root;
We begin at the root. for (char ch : word.toCharArray()) Process one character at a time. int index = ch - 'a';
Convert the character into its corresponding child position. if (current.children[index] == null) Check whether the required character node exists. current.children[index] = new TrieNode();
Create the missing node. current = current.children[index];
Move forward. Finally: current.isEndOfWord = true;
Marks that the complete word has been inserted.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>3.6 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Let <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">L</code> be the length of the inserted word.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Trie insertion</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Auxiliary space for new nodes</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code></td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Character lookup at each node</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The insertion time depends on the word length, not directly on the number of stored words.
          </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "4. Exact Word Search & isEndOfWord Validation",
    category: "Part A · Trie Search",
    anchor: "trie-search",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>4.1 What is Trie search?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Trie search checks whether an entire word exists in the Trie.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose the Trie contains:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            cat car care card
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Search:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            care
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Result:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            true
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Search:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            ca
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Result:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            false
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The path for ca exists, but the node for a is not marked as the end of a complete word.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>4.2 Search algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Start at the root.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Read each character.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the corresponding child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If any required child is missing, return false.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move through the complete path.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            After processing the final character, check isEndOfWord.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Return that result.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>4.3 Java implementation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Add this method to the Trie class:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public boolean search(String word)  {
  TrieNode current = root;
  for (char ch : word.toCharArray())  {
    int index = ch - 'a';
    if (current.children[index] == null)  {
      return false;

    }
    current = current.children[index];

  }
  return current.isEndOfWord;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>4.4 Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose these words exist:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            cat car care
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Search:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Query</th>
                  <th className="px-4 py-3">Path exists?</th>
                  <th className="px-4 py-3">Complete word?</th>
                  <th className="px-4 py-3">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">cat</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">true</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">car</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">true</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">care</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">true</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">ca</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">false</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">cab</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">No</td>
                  <td className="px-4 py-2.5 text-slate-300">false</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>4.5 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a word of length <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">L</code>:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Time=O(L) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Additional space:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(1) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The iterative implementation uses only a reference and a few variables.
          </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "5. Prefix Search (startsWith) & Character Paths",
    category: "Part A · Prefix Search",
    anchor: "prefix-search",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Important Trie Application
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>5.1 What is prefix search?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Prefix search checks whether any stored word begins with a given sequence of characters.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A prefix does not need to be a complete word.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose the Trie contains:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            apple application apply banana bat
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Now search for these prefixes:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            app ban bat cat
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Results:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Prefix</th>
                  <th className="px-4 py-3">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">app</td>
                  <td className="px-4 py-2.5 text-slate-300">true</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">ban</td>
                  <td className="px-4 py-2.5 text-slate-300">true</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">bat</td>
                  <td className="px-4 py-2.5 text-slate-300">true</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">cat</td>
                  <td className="px-4 py-2.5 text-slate-300">false</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is app true?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because at least one stored word begins with app.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The prefix itself does not have to be marked as a complete word.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>5.2 Difference between search and prefix search</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This distinction is extremely important.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For the word:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            application
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Searching:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            app
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            using full-word search returns false if app was not separately inserted.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            But prefix search returns true because the path exists.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">What it checks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Search</td>
                  <td className="px-4 py-2.5 text-slate-300">Complete word exists</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">StartsWith</td>
                  <td className="px-4 py-2.5 text-slate-300">A word begins with this prefix</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>5.3 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public boolean startsWith(String prefix)  {
  TrieNode current = root;
  for (char ch : prefix.toCharArray())  {
    int index = ch - 'a';
    if (current.children[index] == null)  {
      return false;

    }
    current = current.children[index];

  }
  return true;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>5.4 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For prefix length <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">P</code>:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Time=O(P) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Additional space:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(1) </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>5.5 Real-world example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Imagine a search application.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Available words:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            programming programmer project professional product
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            User types:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            pro
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The Trie can locate the prefix node and then explore its descendants to find matching words.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This makes prefix search especially useful in autocomplete systems.
          </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "6. Delete Operation in Trie & Shared Prefix Preservation",
    category: "Part A · Trie Deletion",
    anchor: "delete-trie",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>6.1 What is Trie deletion?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Trie deletion removes a complete word from the Trie without accidentally deleting other words that share the same prefix.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            car card care cat
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Delete:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            card
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The word car and the word care must remain available.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore, we cannot simply delete every node belonging to the word.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>6.2 Three important cases</span>
          </h3>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-slate-200 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono">Case 1</span>
            <span>The word is a prefix of another word</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Stored:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            car card
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Delete:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            car
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We only unset the end-of-word marker at r.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The remaining path is needed for card.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-slate-200 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono">Case 2</span>
            <span>The word shares a prefix with another word</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Stored:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            car care cat
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Delete:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            care
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Remove the unnecessary e branch, but preserve the path for car and cat.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-slate-200 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono">Case 3</span>
            <span>The word is completely independent</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Stored:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            cat dog
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Delete:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            dog
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The entire d -&gt; o -&gt; g branch can be removed.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>6.3 Deletion algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A recursive deletion algorithm is convenient.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Follow the word&#39;s character path.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Reach the final character.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Unmark the end-of-word flag.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Return upward through recursion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Remove a child node only when:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It has no children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is not the end of another word.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This prevents deleting shared prefixes.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>6.4 Java implementation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Add these methods to the Trie class:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public void delete(String word)  {
  delete(root, word, 0);

}
private boolean delete( TrieNode current, String word, int depth)  {
  if (current == null)  {
    return false;

  }
  if (depth == word.length())  {
    if (!current.isEndOfWord)  {
      return false;

    }
    current.isEndOfWord = false;

  }
  else  {
    int index = word.charAt(depth) - 'a';
    if (current.children[index] == null)  {
      return false;

    }
    boolean shouldDeleteChild = delete( current.children[index], word, depth + 1 );
    if (shouldDeleteChild)  {
      current.children[index] = null;

    }

  }
  if (current.isEndOfWord)  {
    return false;

  }
  for (TrieNode child : current.children)  {
    if (child != null)  {
      return false;

    }

  }
  return true;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>6.5 Understanding the return value</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The recursive method returns a boolean indicating whether the current node can safely be removed by its parent.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            current.isEndOfWord
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            is true, the node represents a complete word and cannot be deleted.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If any child exists, the node is needed for another word.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Only when neither condition applies can it be pruned.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The root itself is never deleted because the public method ignores the recursive return value.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>6.6 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Let <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">L</code> be the word length and <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">A</code> be the alphabet size.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Locate word</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Check children during pruning</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(LA)</code> worst case</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Total for fixed alphabet</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recursive auxiliary space
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code>
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because the alphabet size is fixed at 26, checking children at each level is constant work.
          </p>
          <div className="p-4 my-3 rounded-xl bg-orange-500/10/60 border border-orange-500/30/80 text-orange-300 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-600 font-bold shrink-0 mt-0.5">⚠️</span>
            <div>Important: This implementation assumes lowercase English words and uses the same TrieNode structure defined earlier.</div>
          </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "7. Word Dictionary with Wildcards (LeetCode 211 - Trie + DFS)",
    category: "Part A · Wildcard Dictionaries",
    anchor: "word-dictionary",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>7.1 What is a word dictionary problem?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A word dictionary problem requires storing many words and supporting special search conditions.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Basic operations may include:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Add a word.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Search for an exact word.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Search using wildcard characters.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example, suppose the dictionary contains:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            bad dad mad map
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A query may be:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            pad
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Result:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            false
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Another query:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            bad
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Result:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            true
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            But the interesting version includes a wildcard:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            .ad
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Here, . represents any one character.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The result is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            true
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because bad, dad, and mad all match.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>7.2 Why do we need Trie + DFS?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            An ordinary Trie search follows one path.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            But a wildcard can match multiple possible children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose the pattern is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            .ad
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            At the first character, we do not know which child to follow.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We must explore all available children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is where DFS (Depth-First Search) becomes useful.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>7.3 Algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For every character in the pattern:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If the character is a normal letter:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Follow the corresponding child.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If the child does not exist, return false.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If the character is .:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explore all existing child nodes recursively.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If any path matches the remaining pattern, return true.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            At the end:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Return true only if the current node marks the end of a complete word.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>7.4 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class WordDictionary  {
  private final TrieNode root;
  WordDictionary()  {
    root = new TrieNode();

  }
  public void addWord(String word)  {
    TrieNode current = root;
    for (char ch : word.toCharArray())  {
      int index = ch - 'a';
      if (current.children[index] == null)  {
        current.children[index] = new TrieNode();

      }
      current = current.children[index];

    }
    current.isEndOfWord = true;

  }
  public boolean search(String word)  {
    return search(word, 0, root);

  }
  private boolean search( String word, int index, TrieNode node)  {
    if (index == word.length())  {
      return node.isEndOfWord;

    }
    char ch = word.charAt(index);
    if (ch == '.')  {
      for (TrieNode child : node.children)  {
        if (child != null && search(word, index + 1, child))  {
          return true;

        }

      }
      return false;

    }
    int position = ch - 'a';
    if (node.children[position] == null)  {
      return false;

    }
    return search( word, index + 1, node.children[position] );

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>7.5 Testing the implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    WordDictionary dictionary = new WordDictionary();
    dictionary.addWord("bad");
    dictionary.addWord("dad");
    dictionary.addWord("mad");
    System.out.println(dictionary.search("pad"));
    System.out.println(dictionary.search("bad"));
    System.out.println(dictionary.search(".ad"));
    System.out.println(dictionary.search("b.."));

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            false true true true
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>7.6 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Adding a word of length <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">L</code>:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(L) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Searching without wildcards:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(L) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Searching with wildcards can require exploring many Trie branches.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If the alphabet size is <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">A</code> and the wildcard positions cause branching, the worst-case search can approach:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(A^L) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            for an unconstrained search pattern, although the actual cost depends on the Trie structure and available prefixes.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>7.7 Real-world uses</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Word search.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Spell-checking tools.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Pattern-based dictionaries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Text-processing systems.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Search applications.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Word games.
          </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "8. Industrial Autocomplete System Implementation",
    category: "Part A · Autocomplete Systems",
    anchor: "autocomplete-implementation",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Real-World Application
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>8.1 What is autocomplete?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Autocomplete is a feature that suggests complete words based on the characters a user has typed.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example, a user types:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            pro
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The application suggests:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            programming programmer project product professional
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Autocomplete is commonly used in:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Search engines.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Programming IDEs.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Mobile keyboards.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            E-commerce websites.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Contact applications.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Command-line interfaces.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>8.2 How does Trie implement autocomplete?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The algorithm has two main stages.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-white flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">Stage 1</span>
            <span>Find the prefix node</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For prefix:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            pro
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Start from the root and follow:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            p -&gt; r -&gt; o
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If the prefix does not exist, return an empty list.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-white flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">Stage 2</span>
            <span>Collect all words below that node</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Once the prefix node has been found:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explore its children using DFS.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Maintain the characters in a StringBuilder.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Whenever an end-of-word node is reached, save the current word.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Stop once the required number of suggestions has been collected.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This avoids checking every word in the dictionary.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>8.3 Java implementation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This implementation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Supports lowercase English letters.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Returns suggestions in alphabetical order.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Allows a maximum number of suggestions.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Uses DFS to collect matching words.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import java.util.*;
class AutocompleteTrie  {
  private final TrieNode root = new TrieNode();
  public void insert(String word)  {
    TrieNode current = root;
    for (char ch : word.toCharArray())  {
      int index = ch - 'a';
      if (index < 0 || index >= 26)  {
        throw new IllegalArgumentException( "Only lowercase a-z supported" );

      }
      if (current.children[index] == null)  {
        current.children[index] = new TrieNode();

      }
      current = current.children[index];

    }
    current.isEndOfWord = true;

  }
  public List<String> autocomplete( String prefix, int limit)  {
    List<String> result = new ArrayList<>();
    if (limit <= 0)  {
      return result;

    }
    TrieNode current = root;
    // Locate the prefix for (char ch : prefix.toCharArray())  {
      int index = ch - 'a';
      if (index < 0 || index >= 26)  {
        return result;

      }
      if (current.children[index] == null)  {
        return result;

      }
      current = current.children[index];

    }
    StringBuilder word = new StringBuilder(prefix);
    // Collect complete words collectWords( current, word, result, limit );
    return result;

  }
  private void collectWords( TrieNode node, StringBuilder word, List<String> result, int limit)  {
    if (result.size() >= limit)  {
      return;

    }
    if (node.isEndOfWord)  {
      result.add(word.toString());

    }
    for (int i = 0; i < 26; i++)  {
      if (node.children[i] != null)  {
        word.append((char) ('a' + i));
        collectWords( node.children[i], word, result, limit );
        word.deleteCharAt(word.length() - 1);
        if (result.size() >= limit)  {
          return;

        }

      }

    }

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>8.4 Testing autocomplete</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    AutocompleteTrie trie = new AutocompleteTrie();
    trie.insert("programming");
    trie.insert("programmer");
    trie.insert("project");
    trie.insert("product");
    trie.insert("professional");
    trie.insert("python");
    List<String> suggestions = trie.autocomplete("pro", 4);
    System.out.println(suggestions);

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [professional, product, programmer, programming]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Notice that the suggestions are in alphabetical order.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>8.5 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Let:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">P</code> = prefix length.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">V</code> = number of Trie nodes visited while collecting suggestions.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">S</code> = total characters in the returned suggestions.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Find prefix</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(P)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Collect suggestions</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(V)</code></td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Return suggestion strings</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(S)</code> additional output work</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            With a fixed alphabet of 26 characters, scanning each node&#39;s child array takes constant work per node.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The number of possible suggestions can be large, so limiting the number of returned suggestions is useful.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>8.6 Production-level autocomplete</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Real autocomplete systems often go beyond basic Trie traversal.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            They may rank suggestions using:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Search frequency.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            User popularity.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recency.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Personalization.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Typing history.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Language models.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Geographic or contextual relevance.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example, the Trie may identify 100 words beginning with pro, but the application might show only the five most popular results.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A production system could maintain frequency information at Trie nodes or combine the Trie with a ranking mechanism.
          </p>
          <div className="p-4 my-3 rounded-xl bg-orange-500/10/60 border border-orange-500/30/80 text-orange-300 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-600 font-bold shrink-0 mt-0.5">⚠️</span>
            <div>Important distinction: The implementation above returns alphabetical suggestions, not popularity-ranked suggestions.</div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part B — Disjoint Set Union (DSU)
          </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "9. Disjoint Set Union (DSU / Union-Find) Fundamentals",
    category: "Part B · Disjoint Set Union",
    anchor: "dsu-fundamentals",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Very Important — Graph Algorithms
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>9.1 What is Disjoint Set Union?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Disjoint Set Union (DSU) is a data structure used to manage a collection of non-overlapping sets.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is also known as:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union-Find.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Disjoint Set Data Structure.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Merge-Find Set.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The main purpose of DSU is to determine whether two elements belong to the same connected group.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It supports two fundamental operations:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>9.2 Understanding disjoint sets</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose we have seven elements:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            1, 2, 3, 4, 5, 6, 7
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Initially, every element belongs to its own set.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            &#123;1&#125; &#123;2&#125; &#123;3&#125; &#123;4&#125; &#123;5&#125; &#123;6&#125; &#123;7&#125;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Now perform:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union(1, 2) Union(2, 3) Union(4, 5)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The sets become:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            &#123;1, 2, 3&#125; &#123;4, 5&#125; &#123;6&#125; &#123;7&#125;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            There are now four disjoint sets.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Perform:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union(3, 4)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The result:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            &#123;1, 2, 3, 4, 5&#125; &#123;6&#125; &#123;7&#125;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We now have three connected groups.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>9.3 Why do we need DSU?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Imagine a network containing thousands of computers.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You want to answer:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Are computer A and computer B connected?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How many independent networks exist?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Will adding a connection create a cycle?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Which groups should be merged?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Without DSU, repeatedly searching through connections may be expensive.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU maintains group membership efficiently.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>9.4 Real-world applications</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Application</th>
                  <th className="px-4 py-3">DSU usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Computer networks</td>
                  <td className="px-4 py-2.5 text-slate-300">Connected devices</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Social networks</td>
                  <td className="px-4 py-2.5 text-slate-300">Connected groups</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Graph algorithms</td>
                  <td className="px-4 py-2.5 text-slate-300">Connected components</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Kruskal&#39;s algorithm</td>
                  <td className="px-4 py-2.5 text-slate-300">Minimum spanning tree</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Network design</td>
                  <td className="px-4 py-2.5 text-slate-300">Detecting redundant connections</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Image processing</td>
                  <td className="px-4 py-2.5 text-slate-300">Grouping connected pixels</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Clustering</td>
                  <td className="px-4 py-2.5 text-slate-300">Merging related groups</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Games</td>
                  <td className="px-4 py-2.5 text-slate-300">Connecting regions or territories</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Data processing</td>
                  <td className="px-4 py-2.5 text-slate-300">Combining equivalence classes</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300"></td>
                  <td className="px-4 py-2.5 text-slate-300"></td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "10. Find Operation & Parent Array Traversal",
    category: "Part B · DSU Find",
    anchor: "find-operation",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>10.1 What is Find?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The Find operation identifies the representative of the set containing a particular element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every set has a representative, often called its root.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / 2 / 3
If 1 is the representative, then:
Find(1) = 1 Find(2) = 1 Find(3) = 1
All these elements belong to the same set.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>10.2 DSU parent array</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU generally uses an array called parent.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Initially:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            parent[i] = i
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every element is its own parent.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Element: 1 2 3 4 5 Parent: 1 2 3 4 5
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            After joining elements:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            parent[2] = 1 parent[3] = 2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The structure becomes:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 | 2 | 3
Now:
Find(3)
Follows:`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            3 -&gt; 2 -&gt; 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The representative is 1.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>10.3 Basic Find implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class DSU  {
  int[] parent;
  DSU(int n)  {
    parent = new int[n];
    for (int i = 0; i < n; i++)  {
      parent[i] = i;

    }

  }
  int find(int x)  {
    if (parent[x] == x)  {
      return x;

    }
    return find(parent[x]);

  }

}
This implementation finds the representative but does not yet optimize the tree.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>10.4 Complexity without optimization</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose the parent structure is:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 | 2 | 3 | 4 | 5
Finding the representative of 5 requires traversing every parent.
Worst-case:
\\[ O(n) \\]
This can become inefficient when the DSU contains many elements.
We solve this using path compression and union heuristics.`}</code>
            </pre>
          </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "11. Union Operation & Representative Merging",
    category: "Part B · DSU Union",
    anchor: "union-operation",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>11.1 What is Union?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The Union operation combines two sets into one set.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Set A = &#123;1, 2, 3&#125; Set B = &#123;4, 5&#125;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Perform:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union(1, 4)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The result:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            &#123;1, 2, 3, 4, 5&#125;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The important idea is that we merge the representatives of the two sets.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>11.2 Union algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the representative of the first element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the representative of the second element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If both representatives are equal, the elements are already in the same set.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Otherwise, connect one representative to the other.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>11.3 Basic Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class DSU  {
  int[] parent;
  DSU(int n)  {
    parent = new int[n];
    for (int i = 0; i < n; i++)  {
      parent[i] = i;

    }

  }
  int find(int x)  {
    if (parent[x] == x)  {
      return x;

    }
    return find(parent[x]);

  }
  void union(int a, int b)  {
    int rootA = find(a);
    int rootB = find(b);
    if (rootA != rootB)  {
      parent[rootB] = rootA;

    }

  }
  boolean connected(int a, int b)  {
    return find(a) == find(b);

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>11.4 Testing</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    DSU dsu = new DSU(7);
    dsu.union(1, 2);
    dsu.union(2, 3);
    dsu.union(4, 5);
    System.out.println( dsu.connected(1, 3) );
    System.out.println( dsu.connected(1, 5) );
    dsu.union(3, 4);
    System.out.println( dsu.connected(1, 5) );

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            true false true
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explanation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            1 and 3 are in the same set.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            1 and 5 are initially in different sets.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            After merging their groups, they become connected.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>11.5 Important observation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union does not necessarily mean attaching the second element directly to the first element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It means connecting the roots of their respective sets.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is important because DSU elements may already belong to larger groups.
          </p>
      </div>
    ),
  },
  {
    id: 12,
    title: "12. Path Compression: Flattering Trees into Direct Links",
    category: "Part B · DSU Optimization",
    anchor: "path-compression",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Critical DSU Optimization
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>12.1 What is path compression?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Path compression is an optimization that makes Find operations faster.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            During a Find operation, every visited node is directly connected to the representative.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose the DSU looks like:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 | 2 | 3 | 4 | 5
Finding the representative of 5 requires:`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            5 -&gt; 4 -&gt; 3 -&gt; 2 -&gt; 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            After path compression, the structure becomes:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / | \\ \\ 2 3 4 5
Now every node can reach the representative in one parent step.
[Fundamentals of Disjoint Sets | Union Find | DSU - Discuss - LeetCode](https://images.openai.com/static-rsc-4/tbqfGCcMaMizHOyJwTu6X6KqTCyUBSNyYYVPBqMdornj9x0Zjf1OWtS8e9UxWnoGEOUKzkNYePtrIDJWn2U3RKD2PCYzFg7FE3ZEat-cRWUq8jKZsd8TJpxn29GHihxGpDHLDlJafpxlMFx0-jesaKsb7CufnR8PHPfRT3at6jQ?purpose=inline)
[leetcode.com](https://leetcode.com/discuss/general-discussion/3901134/Deep-Dive-Disjoint-Sets-or-Union-Find-or-DSU/?utm_source=chatgpt.com)`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>12.2 Recursive implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`int find(int x)  {
  if (parent[x] != x)  {
    parent[x] = find(parent[x]);

  }
  return parent[x];

}
The important line is: parent[x] = find(parent[x]);
This makes the current node point directly to the representative.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>12.3 Step-by-step example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Initial structure:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 | 2 | 3 | 4 | 5
Call:
find(5);
The function follows:`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            5 -&gt; 4 -&gt; 3 -&gt; 2 -&gt; 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Once it finds 1, the recursive calls return.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            They update the parent references:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            parent[2] = 1 parent[3] = 1 parent[4] = 1 parent[5] = 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Now the structure is flatter.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>12.4 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Path compression dramatically reduces the cost of repeated Find operations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            However, path compression alone does not provide the same strongest complexity guarantee as combining it with a union heuristic.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We will combine it with Union by Rank and Union by Size.
          </p>
      </div>
    ),
  },
  {
    id: 13,
    title: "13. Union by Rank: Bounding Tree Heights",
    category: "Part B · Union by Rank",
    anchor: "union-by-rank",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>13.1 What is Union by Rank?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union by Rank is an optimization that attaches the shorter or lower-rank tree below the taller or higher-rank tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The purpose is to prevent the DSU tree from becoming unnecessarily deep.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Each representative maintains a rank value.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Initially:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            rank[i] = 0
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            When two sets are merged:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Lower rank attaches to higher rank.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If ranks are equal, attach one root below the other and increase the surviving root&#39;s rank by one.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>13.2 Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose we have:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Set A: 1 / 2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            And:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Set B: 3
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Assume the rank of A is higher.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Instead of attaching A below B, attach B below A.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Result:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 / \\ 2 3
This preserves a reasonably shallow structure.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>13.3 Union by Rank implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class DSU  {
  int[] parent;
  int[] rank;
  DSU(int n)  {
    parent = new int[n];
    rank = new int[n];
    for (int i = 0; i < n; i++)  {
      parent[i] = i;
      rank[i] = 0;

    }

  }
  int find(int x)  {
    if (parent[x] != x)  {
      parent[x] = find(parent[x]);

    }
    return parent[x];

  }
  void union(int a, int b)  {
    int rootA = find(a);
    int rootB = find(b);
    if (rootA == rootB)  {
      return;

    }
    if (rank[rootA] < rank[rootB])  {
      parent[rootA] = rootB;

    }
    else if (rank[rootA] > rank[rootB])  {
      parent[rootB] = rootA;

    }
    else  {
      parent[rootB] = rootA;
      rank[rootA]++;

    }

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>13.4 Important detail about rank</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Rank is not necessarily the current height of the tree after path compression.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is a balancing heuristic that records a bound related to the tree&#39;s height at the time of merging.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Do not recalculate rank simply by examining the current number of levels.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>13.5 Why does Union by Rank help?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Without balancing:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Find operation may require several parent traversals.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            With union by rank, sets are merged in a way that limits unnecessary growth in tree depth.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Combined with path compression, DSU becomes extremely efficient.
          </p>
      </div>
    ),
  },
  {
    id: 14,
    title: "14. Union by Size: Subtree Component Weighing",
    category: "Part B · Union by Size",
    anchor: "union-by-size",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>14.1 What is Union by Size?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union by Size is another optimization.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Instead of comparing ranks, it compares the number of elements in each set.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The smaller set is attached below the larger set.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every representative maintains:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            size[root]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Initially:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            size[i] = 1
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>14.2 Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Set A = &#123;1, 2, 3, 4&#125; Size = 4
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Set B = &#123;5, 6&#125; Size = 2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            When merging:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union(1, 5)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Attach the smaller group to the larger group.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            New set:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            &#123;1, 2, 3, 4, 5, 6&#125;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            New size:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            6
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>14.3 Java implementation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This implementation uses path compression and Union by Size.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class DSU  {
  int[] parent;
  int[] size;
  DSU(int n)  {
    parent = new int[n];
    size = new int[n];
    for (int i = 0; i < n; i++)  {
      parent[i] = i;
      size[i] = 1;

    }

  }
  int find(int x)  {
    if (parent[x] != x)  {
      parent[x] = find(parent[x]);

    }
    return parent[x];

  }
  void union(int a, int b)  {
    int rootA = find(a);
    int rootB = find(b);
    if (rootA == rootB)  {
      return;

    }
    if (size[rootA] < size[rootB])  {
      int temp = rootA;
      rootA = rootB;
      rootB = temp;

    }
    parent[rootB] = rootA;
    size[rootA] += size[rootB];

  }
  int getSize(int x)  {
    return size[find(x)];

  }
  boolean connected(int a, int b)  {
    return find(a) == find(b);

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>14.4 Union by Rank vs Union by Size</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Union by Rank</th>
                  <th className="px-4 py-3">Union by Size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Comparison</td>
                  <td className="px-4 py-2.5 text-slate-300">Rank</td>
                  <td className="px-4 py-2.5 text-slate-300">Number of elements</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Stored information</td>
                  <td className="px-4 py-2.5 text-slate-300">Rank array</td>
                  <td className="px-4 py-2.5 text-slate-300">Size array</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Smaller structure</td>
                  <td className="px-4 py-2.5 text-slate-300">Lower rank</td>
                  <td className="px-4 py-2.5 text-slate-300">Smaller size</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Merge rule</td>
                  <td className="px-4 py-2.5 text-slate-300">Lower rank under higher rank</td>
                  <td className="px-4 py-2.5 text-slate-300">Smaller set under larger set</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Combined with path compression</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Both approaches are efficient.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You typically choose either union heuristic along with path compression.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Do not mix both algorithms casually in a single DSU implementation because their bookkeeping rules differ.
          </p>
      </div>
    ),
  },
  {
    id: 15,
    title: "15. DSU Amortized Complexity & Inverse Ackermann α(N)",
    category: "Part B · DSU Analysis",
    anchor: "dsu-complexity",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is an important interview concept.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>15.1 Without optimization</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A basic DSU without balancing or path compression can produce a long chain.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Union requires Find operations and can therefore also take:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            in the worst case.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>15.2 With path compression and union by rank or size</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The amortized complexity per operation is:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(\alpha(n)) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Where:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> \alpha(n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            is the inverse Ackermann function.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It grows so slowly that it is effectively a very small constant for practical input sizes.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Thus, Find and Union are often treated as nearly constant-time operations.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>15.3 Complexity table</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Basic DSU</th>
                  <th className="px-4 py-3">Optimized DSU</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Initialize</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Find</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code> worst case</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\alpha(n))</code> amortized</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Union</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code> worst case</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\alpha(n))</code> amortized</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Connected check</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code> worst case</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\alpha(n))</code> amortized</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Space</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>15.4 When should you use DSU?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use DSU when you need to:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Merge connected groups.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Check whether two elements belong to the same component.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Count connected components.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Detect cycles in an undirected graph.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Kruskal&#39;s Minimum Spanning Tree algorithm.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Maintain equivalence relationships.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>15.5 Important limitation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Ordinary DSU efficiently supports merging sets, but it does not naturally support removing an arbitrary connection and splitting a connected component.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            That is a different and more complex dynamic-connectivity problem.
          </p>
      </div>
    ),
  },
  {
    id: 16,
    title: "16. DSU Applications: Graph Cycle Detection & Kruskal's MST",
    category: "Part B · Graph Connectivity",
    anchor: "dsu-cycle-detection",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Important Graph Algorithm Pattern
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>16.1 Problem</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Given an undirected graph, determine whether adding an edge creates a cycle.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`1 ----- 2 | | | | 4 ----- 3
Edges:
(1, 2) (2, 3) (3, 4) (4, 1)
The fourth edge creates a cycle.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>16.2 DSU approach</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For every edge (u, v):
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the representative of u.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the representative of v.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If both representatives are equal, the nodes are already connected.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Adding another edge between them creates a cycle.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Otherwise, perform Union.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>16.3 Java implementation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Using the previously implemented DSU class:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`static boolean hasCycle(int n, int[][] edges)  {
  DSU dsu = new DSU(n);
  for (int[] edge : edges)  {
    int u = edge[0];
    int v = edge[1];
    if (dsu.connected(u, v))  {
      return true;

    }
    dsu.union(u, v);

  }
  return false;

}
This assumes vertices are numbered from 0 to n - 1.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>16.4 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">E</code> edges and <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">V</code> vertices:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(V+E\alpha(V)) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This includes initialization and DSU operations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For practical purposes, the graph processing is nearly linear.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part C — Segment Trees
          </p>
      </div>
    ),
  },
  {
    id: 17,
    title: "17. Segment Trees Fundamentals & Interval Hierarchies",
    category: "Part C · Segment Trees",
    anchor: "segment-trees-fundamentals",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced Range Query Data Structure
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>17.1 What is a Segment Tree?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Segment Tree is a tree-based data structure designed to answer queries over ranges of an array efficiently.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is particularly useful when an array changes frequently and we need to repeatedly calculate information about different ranges.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Examples of range queries:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sum of elements between indices 2 and 7.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Minimum element between indices 3 and 8.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Maximum element in a range.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Greatest Common Divisor (GCD) of a range.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Number of elements satisfying a particular condition.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose we have:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [2, 4, 1, 7, 3, 5, 6, 8]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You want to calculate:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sum from index 1 to index 4
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The range is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [4, 1, 7, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The result is:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 4+1+7+3=15 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If you repeatedly answer range queries by traversing the original array, each query can take:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Segment Tree makes many common range queries possible in:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It also supports point updates in:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(\log n) </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>17.2 Why do we need Segment Trees?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Imagine an application that maintains the scores of thousands of students.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The system frequently asks:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the total score from student 100 to student 500?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the lowest score from student 200 to student 800?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A student&#39;s score has changed. How do we update the data efficiently?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A simple prefix-sum array makes range-sum queries fast, but changing one element can require updating many prefix sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Segment Tree handles both range queries and point updates efficiently.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>17.3 Real-world applications</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Application</th>
                  <th className="px-4 py-3">Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Competitive programming</td>
                  <td className="px-4 py-2.5 text-slate-300">Range sum and minimum queries</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Financial systems</td>
                  <td className="px-4 py-2.5 text-slate-300">Range-based aggregates</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Analytics</td>
                  <td className="px-4 py-2.5 text-slate-300">Interval calculations</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Scheduling</td>
                  <td className="px-4 py-2.5 text-slate-300">Range maximum and minimum</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Gaming</td>
                  <td className="px-4 py-2.5 text-slate-300">Dynamic score ranges</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Database systems</td>
                  <td className="px-4 py-2.5 text-slate-300">Hierarchical aggregate queries</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Monitoring</td>
                  <td className="px-4 py-2.5 text-slate-300">Range statistics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>17.4 Basic Segment Tree structure</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array: [2, 4, 1, 7]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The root stores information about the entire array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Its children store information about the left and right halves.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For range sums:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`[0,3] = 14 / \\ [0,1] = 6 [2,3] = 8 / \\ / \\ [0,0]=2 [1,1]=4 [2,2]=1 [3,3]=7
Every node represents an interval.
For a sum Segment Tree, each node stores the sum of its interval.
Other variants can store:
Minimum.
Maximum.
GCD.
XOR.
Other associative aggregate results.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>17.5 Important property</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Segment Tree divides an interval into smaller intervals.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For an interval:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [L, R]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Its midpoint is:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> mid=\left\lfloor\frac&#123;L+R&#125;&#123;2&#125;\right\rfloor </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The left child represents:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [L, mid]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The right child represents:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [mid + 1, R]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This splitting continues until every leaf represents a single array element.
          </p>
      </div>
    ),
  },
  {
    id: 18,
    title: "18. Segment Tree Array Representation (1-Based 4N Allocations)",
    category: "Part C · Tree Layout",
    anchor: "segment-tree-representation",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>18.1 How is a Segment Tree stored?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Although conceptually represented as a binary tree, a Segment Tree is usually stored in an array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For an array containing <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">n</code> elements, allocating approximately:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            4 * n
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            positions is a common safe implementation choice for a recursive Segment Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We use:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            long[] tree;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            for storing calculated sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why long?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because the sum of many integer values may exceed the range of Java&#39;s int.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>18.2 Index representation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a tree node stored at index i:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Left child = 2 * i Right child = 2 * i + 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is a common one-based Segment Tree array convention.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Root index = 1 Left child = 2 Right child = 3
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Unlike a zero-based heap array, the recursive Segment Tree implementations below use index 1 for the root.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>18.3 Building the tree</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The Build operation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Receives the original array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Starts with the interval [0, n-1].
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Splits it into two halves.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recursively builds both children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Combines their stored values.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a Sum Segment Tree:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Parent sum = Left child sum + Right child sum
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>18.4 Build example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Original array:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [2, 4, 1, 7]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Tree:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`14 / \\ 6 8 / \\ / \\ 2 4 1 7
The total sum is stored at the root.`}</code>
            </pre>
          </div>
      </div>
    ),
  },
  {
    id: 19,
    title: "19. Range Queries: No Overlap, Complete Overlap, Partial Overlap",
    category: "Part C · Range Queries",
    anchor: "segment-tree-range-queries",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>19.1 What is a range query?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A range query asks for an aggregate value across a specified portion of an array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [2, 4, 1, 7, 3, 5, 6, 8]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Query:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range = [1, 4]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We need:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [4, 1, 7, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sum:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 15 </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>19.2 Three possible situations during a query</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is one of the most important concepts in Segment Trees.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            When a recursive query visits an interval, there are three possible cases.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-slate-200 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono">Case 1</span>
            <span>No overlap</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The current tree interval does not intersect the requested interval.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Tree interval = [5, 7] Query interval = [1, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            There is no overlap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a sum query, return:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            0
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Zero is the identity value for addition.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-slate-200 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono">Case 2</span>
            <span>Complete overlap</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The entire current interval is contained in the requested interval.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Tree interval = [2, 3] Query interval = [1, 4]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The stored answer can be returned immediately.
          </p>
          <h4 className="text-base font-semibold text-slate-200 mt-4 mb-2 text-slate-200 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono">Case 3</span>
            <span>Partial overlap</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Only part of the current interval belongs to the requested query.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We recursively inspect both children and combine their results.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>19.3 Range query algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Check whether the current interval has no overlap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If it has no overlap, return the identity value.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Check whether it is fully covered by the query.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If fully covered, return the stored aggregate.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Otherwise, query the left and right children.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Combine their results.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>19.4 Java implementation — Range Sum Query</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`long query( int node, int start, int end, int left, int right)  {
  // Case 1: No overlap if (right < start || end < left)  {
    return 0;

  }
  // Case 2: Complete overlap if (left <= start && end <= right)  {
    return tree[node];

  }
  // Case 3: Partial overlap int mid = start + (end - start) / 2;
  long leftSum = query( node * 2, start, mid, left, right );
  long rightSum = query( node * 2 + 1, mid + 1, end, left, right );
  return leftSum + rightSum;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>19.5 Why does returning zero work?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because we are calculating sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For addition:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> x+0=x </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Zero does not change the result.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a minimum Segment Tree, the equivalent no-overlap result is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Long.MAX_VALUE
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a maximum Segment Tree, it is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Long.MIN_VALUE
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is called the identity element of the aggregation operation.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>19.6 Query complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The Segment Tree height is logarithmic.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A range query visits only a limited number of nodes at each level.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Time=O(\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a standard Segment Tree with constant-time combining operations.
          </p>
      </div>
    ),
  },
  {
    id: 20,
    title: "20. Point Updates in Segment Trees & Ancestor Propagation",
    category: "Part C · Point Updates",
    anchor: "segment-tree-point-updates",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>20.1 What is a point update?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A point update changes the value at one index in the original array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Original array: [2, 4, 1, 7]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Update:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Index 2 = 10
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            New array:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [2, 4, 10, 7]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The Segment Tree must update:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The leaf at index 2.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Its parent.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Every ancestor on the path to the root.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The unaffected subtrees do not need to be rebuilt.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>20.2 Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Before update:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`14 / \\ 6 8 / \\ / \\ 2 4 1 7
Change index 2 from 1 to 10.
Updated tree:`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`23 / \\ 6 17 / \\ / \\ 2 4 10 7
The root changes from 14 to 23.`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>20.3 Point update algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Start at the root.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the interval containing the target index.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move left or right depending on the index.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Reach the corresponding leaf.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Replace its value.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recalculate all ancestors while returning.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>20.4 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`void update( int node, int start, int end, int index, long value)  {
  // Leaf node if (start == end)  {
    tree[node] = value;
    return;

  }
  int mid = start + (end - start) / 2;
  if (index <= mid)  {
    update( node * 2, start, mid, index, value );

  }
  else  {
    update( node * 2 + 1, mid + 1, end, index, value );

  }
  // Recalculate parent tree[node] = tree[node * 2] + tree[node * 2 + 1];

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>20.5 Complexity</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A point update follows one root-to-leaf path.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> Time=O(\log n) </span>
          </div>
      </div>
    ),
  },
  {
    id: 21,
    title: "21. Complete Segment Tree Implementation in Java & Lazy Propagation",
    category: "Part C · Segment Tree Engine",
    anchor: "complete-segment-tree",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Now let&#39;s combine the previous operations into a reusable class.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This implementation supports:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Build.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range sum query.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Point update.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Input validation.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>21.1 Complete code</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class SegmentTree  {
  private final int n;
  private final long[] tree;
  private final long[] arr;
  SegmentTree(long[] input)  {
    if (input == null)  {
      throw new IllegalArgumentException( "Input cannot be null" );

    }
    arr = input.clone();
    n = arr.length;
    tree = new long[Math.max(1, 4 * n)];
    if (n > 0)  {
      build(1, 0, n - 1);

    }

  }
  // Build Segment Tree private void build( int node, int start, int end)  {
    if (start == end)  {
      tree[node] = arr[start];
      return;

    }
    int mid = start + (end - start) / 2;
    build( node * 2, start, mid );
    build( node * 2 + 1, mid + 1, end );
    tree[node] = tree[node * 2] + tree[node * 2 + 1];

  }
  // Public range query public long query(int left, int right)  {
    if (n == 0 || left < 0 || right >= n || left > right)  {
      throw new IllegalArgumentException( "Invalid query range" );

    }
    return query( 1, 0, n - 1, left, right );

  }
  // Recursive range query private long query( int node, int start, int end, int left, int right)  {
    if (right < start || end < left)  {
      return 0;

    }
    if (left <= start && end <= right)  {
      return tree[node];

    }
    int mid = start + (end - start) / 2;
    long leftSum = query( node * 2, start, mid, left, right );
    long rightSum = query( node * 2 + 1, mid + 1, end, left, right );
    return leftSum + rightSum;

  }
  // Public point update public void update(int index, long value)  {
    if (index < 0 || index >= n)  {
      throw new IndexOutOfBoundsException( "Invalid index" );

    }
    arr[index] = value;
    update( 1, 0, n - 1, index, value );

  }
  // Recursive point update private void update( int node, int start, int end, int index, long value)  {
    if (start == end)  {
      tree[node] = value;
      return;

    }
    int mid = start + (end - start) / 2;
    if (index <= mid)  {
      update( node * 2, start, mid, index, value );

    }
    else  {
      update( node * 2 + 1, mid + 1, end, index, value );

    }
    tree[node] = tree[node * 2] + tree[node * 2 + 1];

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>21.2 Testing the implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    long[] arr =  {
      2, 4, 1, 7, 3, 5, 6, 8
    };
    SegmentTree st = new SegmentTree(arr);
    // Sum of indexes 1 to 4 System.out.println( st.query(1, 4) );
    // Update index 2 to 10 st.update(2, 10);
    // Query again System.out.println( st.query(1, 4) );

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            15 24
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explanation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Initially:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 4+1+7+3=15 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            After updating index 2:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [2, 4, 10, 7, 3, 5, 6, 8]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            New range sum:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 4+10+7+3=24 </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>21.3 Segment Tree complexity</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Build</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Range sum query</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Point update</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Storage
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code>
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>21.4 Segment Tree for minimum and maximum</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The same structure can support other range operations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a minimum Segment Tree:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            return Math.min(leftResult, rightResult);
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            No-overlap result:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Long.MAX_VALUE
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a maximum Segment Tree:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            return Math.max(leftResult, rightResult);
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            No-overlap result:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Long.MIN_VALUE
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The important principle is that each node stores an aggregate of its interval.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>21.5 What is Lazy Propagation?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Lazy Propagation is an optimization used when we need to perform updates over entire ranges rather than individual positions.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Add 5 to every element from index 2 to index 8.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Updating each position separately may require:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Lazy Propagation allows us to postpone updates to child intervals until they are actually needed.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is commonly used for:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range addition.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range assignment.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range sum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range minimum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For many standard range-update/range-query variations, Lazy Propagation supports operations in:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We will treat it as an advanced extension of the Segment Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Part D — Fenwick Trees and Sparse Tables
          </p>
      </div>
    ),
  },
  {
    id: 22,
    title: "22. Fenwick Tree / Binary Indexed Tree (BIT) Architecture",
    category: "Part D · Fenwick & Sparse Tables",
    anchor: "fenwick-tree-fundamentals",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Important Range Query Structure
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>22.1 What is a Fenwick Tree?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Fenwick Tree is a data structure used to efficiently maintain prefix aggregates over an array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is also called a:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Binary Indexed Tree (BIT).
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is particularly useful for:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Prefix sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Point updates.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Frequency counting.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Inversion counting.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Order-statistics problems under suitable conditions.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Fenwick Tree uses binary representation and the lowest set bit of an index to determine which elements are managed by each position.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Unlike a Segment Tree, it is usually represented using one compact array.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>22.2 Why do we need a Fenwick Tree?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose we have:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [2, 4, 1, 7, 3, 5]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We want to calculate:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sum from index 0 to index 4
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Result:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 2+4+1+7+3=17 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Now suppose index 2 changes from 1 to 10.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We want to update the data structure without recalculating every prefix sum.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Fenwick Tree supports:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Point update: <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Prefix sum: <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range sum: <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code>.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>22.3 Basic idea</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Fenwick Tree stores partial sums in a special array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It does not store exactly one original array element at every index.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Instead, each BIT position represents the sum of a specific interval.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example, using one-based indexing:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`BIT[1] -> A[1] BIT[2] -> A[1] + A[2] BIT[3] -> A[3] BIT[4] -> A[1] + A[2] + A[3] + A[4] BIT[5] -> A[5] BIT[6] -> A[5] + A[6]
The interval length is determined using the lowest set bit.
[Binary Indexed Tree: A Data Structure that Can Enhance Query Performance in Arrays](https://images.openai.com/static-rsc-4/sGfoDmY8hER0eMJGYm1H89kxtkVOUqmF_0tG0B0_zDCJzMLjmn1aG6QDXTQW-48PuJClm3v1Ak_eSzxIScuB_YYaXBfjV2U-SI6pqygTKOann_OL2paevE050GVXSDgGHOXnPb2tmFlW5XbQTvQcascasP_e7W6yLoHZkuUS0iQ?purpose=inline)
[aspires.cc](https://www.aspires.cc/binary-indexed-tree/?utm_source=chatgpt.com)`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>22.4 One-based indexing</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            One of the most important implementation details:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Fenwick Trees are conventionally implemented using one-based indexing.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For an original array:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Index: 0 1 2 3 4 Value: 2 4 1 7 3
The corresponding BIT positions are:
BIT index = Original index + 1
This is because the Fenwick Tree relies on a useful binary operation:
\\[ i\\ \\&\\ (-i) \\]
This calculates the lowest set bit of a positive integer.`}</code>
            </pre>
          </div>
      </div>
    ),
  },
  {
    id: 23,
    title: "23. Bit Manipulation: Lowest Set Bit (i & -i) Mechanics",
    category: "Part D · Lowest Set Bit",
    anchor: "lowest-set-bit",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>23.1 What is a lowest set bit?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            In binary representation, a set bit is a bit whose value is 1.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The lowest set bit is the rightmost bit that is set to 1.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Binary 8: 1000
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The lowest set bit is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            1000
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Its value is 8.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Binary 12: 1100
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The lowest set bit is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            0100
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Its value is 4.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>23.2 Formula</span>
          </h3>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> lowbit(i)=i\ \&amp;\ (-i) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Examples:
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">i</th>
                  <th className="px-4 py-3">Binary</th>
                  <th className="px-4 py-3">Lowest set bit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">0001</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">0010</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">0011</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">0100</td>
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">0101</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">0110</td>
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">7</td>
                  <td className="px-4 py-2.5 text-slate-300">0111</td>
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">8</td>
                  <td className="px-4 py-2.5 text-slate-300">1000</td>
                  <td className="px-4 py-2.5 text-slate-300">8</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>23.3 Why is this useful?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The lowest set bit determines the interval represented by a Fenwick Tree position.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It also tells us how far to move:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            During update:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move forward using:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i += i &amp; -i;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            During prefix query:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move backward using:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i -= i &amp; -i;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These two operations are the foundation of Fenwick Trees.
          </p>
      </div>
    ),
  },
  {
    id: 24,
    title: "24. Fenwick Tree Point Update (Forward Step i += i & -i)",
    category: "Part D · BIT Updates",
    anchor: "fenwick-point-update",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>24.1 What is a point update?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A point update changes one array value and updates all Fenwick positions affected by that change.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [2, 4, 1, 7, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Change:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Index 2: 1 -&gt; 10
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The difference is:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> delta=10-1=9 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We add 9 to every BIT interval that contains that position.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>24.2 Update algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Convert the zero-based index to a one-based index.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Add the difference to the current BIT position.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move to the next affected position using the lowest set bit.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Continue until the index exceeds the array size.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>24.3 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`void update(int index, long delta)  {
  int i = index + 1;
  while (i <= n)  {
    bit[i] += delta;
    i += i & -i;

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>24.4 Why does the update move forward?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider an update at BIT index 3.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i = 3
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Lowest set bit:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 3\ \&amp;\ (-3)=1 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Next:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i = 3 + 1 = 4
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Lowest set bit at 4:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 4\ \&amp;\ (-4)=4 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Next:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i = 4 + 4 = 8
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We update only the BIT positions whose stored intervals contain the modified element.
          </p>
      </div>
    ),
  },
  {
    id: 25,
    title: "25. Fenwick Tree Prefix Sum (Backward Step i -= i & -i)",
    category: "Part D · BIT Prefix Sum",
    anchor: "fenwick-prefix-sum",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>25.1 What is a prefix sum?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A prefix sum is the sum of elements from the beginning of the array through a given index.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [2, 4, 1, 7, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Prefix sum at index 3:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 2+4+1+7=14 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Fenwick Tree calculates this by combining selected BIT intervals.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>25.2 Query algorithm</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Convert the given zero-based index to one-based indexing.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Add the current BIT value to the answer.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Move backward using the lowest set bit.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Continue until the index becomes zero.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>25.3 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`long prefixSum(int index)  {
  long sum = 0;
  int i = index + 1;
  while (i > 0)  {
    sum += bit[i];
    i -= i & -i;

  }
  return sum;

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>25.4 Dry run</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [2, 4, 1, 7, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Calculate prefix sum through original index 3.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            One-based BIT index:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i = 4
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Read:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            BIT[4]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Then:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i = 4 - lowbit(4) = 4 - 4 = 0
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Stop.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The result is:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            BIT[4] = 14
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Because BIT[4] stores the sum of the first four original elements.
          </p>
      </div>
    ),
  },
  {
    id: 26,
    title: "26. Range Sum Queries via Prefix Difference (prefix(R) - prefix(L-1))",
    category: "Part D · BIT Range Sum",
    anchor: "fenwick-range-sum",
    content: (
      <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>26.1 What is a range sum query?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Given a range:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [left, right]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            calculate the sum of the elements in that interval.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [2, 4, 1, 7, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Query:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Result:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 4+1+7=12 </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>26.2 Mathematical formula</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We can calculate a range sum using two prefix sums.
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> RangeSum(L,R)=PrefixSum(R)-PrefixSum(L-1) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For the example:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> PrefixSum(3)=14 </span>
          </div>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> PrefixSum(0)=2 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> RangeSum(1,3)=14-2=12 </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>26.3 Java implementation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`long rangeSum(int left, int right)  {
  if (left == 0)  {
    return prefixSum(right);

  }
  return prefixSum(right) - prefixSum(left - 1);

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>26.4 Complexity</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th>
                  <th className="px-4 py-3">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Point update</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Prefix sum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Range sum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Storage
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code>
          </p>
      </div>
    ),
  },
  {
    id: 27,
    title: "27. Complete Fenwick Tree Implementation & Segment Tree Comparison",
    category: "Part D · Complete BIT",
    anchor: "complete-fenwick-tree",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Now let&#39;s combine the operations into one reusable implementation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This version:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Accepts an integer array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Uses a one-based internal BIT.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Exposes zero-based public indices.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Supports point replacement.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Supports prefix sums and range sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Uses long to reduce integer-overflow problems.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class FenwickTree  {
  private final int n;
  private final long[] bit;
  private final long[] values;
  FenwickTree(int[] arr)  {
    if (arr == null)  {
      throw new IllegalArgumentException( "Input cannot be null" );

    }
    n = arr.length;
    bit = new long[n + 1];
    values = new long[n];
    for (int i = 0; i < n; i++)  {
      values[i] = arr[i];
      add(i, arr[i]);

    }

  }
  // Internal point addition private void add(int index, long delta)  {
    int i = index + 1;
    while (i <= n)  {
      bit[i] += delta;
      i += i & -i;

    }

  }
  // Replace an array value public void update(int index, long newValue)  {
    if (index < 0 || index >= n)  {
      throw new IndexOutOfBoundsException( "Invalid index" );

    }
    long delta = newValue - values[index];
    values[index] = newValue;
    add(index, delta);

  }
  // Prefix sum from index 0 to index public long prefixSum(int index)  {
    if (index < 0)  {
      return 0;

    }
    if (index >= n)  {
      throw new IndexOutOfBoundsException( "Invalid index" );

    }
    long sum = 0;
    int i = index + 1;
    while (i > 0)  {
      sum += bit[i];
      i -= i & -i;

    }
    return sum;

  }
  // Inclusive range sum public long rangeSum(int left, int right)  {
    if (left < 0 || right >= n || left > right)  {
      throw new IllegalArgumentException( "Invalid query range" );

    }
    return prefixSum(right) - prefixSum(left - 1);

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>27.1 Testing</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    int[] arr =  {
      2, 4, 1, 7, 3, 5
    };
    FenwickTree ft = new FenwickTree(arr);
    // Prefix sum System.out.println( ft.prefixSum(3) );
    // Range sum System.out.println( ft.rangeSum(1, 3) );
    // Update index 2 to 10 ft.update(2, 10);
    // Query again System.out.println( ft.rangeSum(1, 3) );

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            14 12 21
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explanation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Original prefix:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 2+4+1+7=14 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Original range:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 4+1+7=12 </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            After updating index 2:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [2, 4, 10, 7, 3, 5]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            New range:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 4+10+7=21 </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>27.2 Fenwick Tree vs Segment Tree</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Fenwick Tree</th>
                  <th className="px-4 py-3">Segment Tree</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Main purpose</td>
                  <td className="px-4 py-2.5 text-slate-300">Prefix and range aggregates</td>
                  <td className="px-4 py-2.5 text-slate-300">General range queries</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Structure</td>
                  <td className="px-4 py-2.5 text-slate-300">One-dimensional BIT array</td>
                  <td className="px-4 py-2.5 text-slate-300">Binary interval tree</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Point update</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Range sum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Prefix sum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Storage</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Usually <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(4n)</code></td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Implementation</td>
                  <td className="px-4 py-2.5 text-slate-300">Simpler</td>
                  <td className="px-4 py-2.5 text-slate-300">More flexible</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Range minimum</td>
                  <td className="px-4 py-2.5 text-slate-300">Not generally supported with ordinary BIT</td>
                  <td className="px-4 py-2.5 text-slate-300">Supported</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Lazy range updates</td>
                  <td className="px-4 py-2.5 text-slate-300">More specialized techniques needed</td>
                  <td className="px-4 py-2.5 text-slate-300">Commonly supported</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>27.3 When should you use Fenwick Tree?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Choose Fenwick Tree when:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You need prefix sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You need range sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You need point updates.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You want lower implementation complexity.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The required operation can be supported using Fenwick&#39;s prefix structure.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Choose Segment Tree when:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You need more general range aggregates.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You require range minimum or maximum.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You need more advanced update operations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            You need Lazy Propagation.
          </p>
          <div className="p-4 my-3 rounded-xl bg-orange-500/10/60 border border-orange-500/30/80 text-orange-300 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-600 font-bold shrink-0 mt-0.5">⚠️</span>
            <div>Important: A standard Fenwick Tree supports the point-addition and prefix-sum model particularly naturally. Not every Segment Tree operation has an equally simple Fenwick equivalent.</div>
          </div>
      </div>
    ),
  },
  {
    id: 28,
    title: "28. Sparse Tables: Static Power-of-Two RMQ in O(1) Time",
    category: "Part D · Sparse Tables",
    anchor: "sparse-tables",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced Range Query Structure
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.1 What is a Sparse Table?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Sparse Table is a data structure used for answering range queries efficiently on an array that does not change.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is particularly useful for:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range minimum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Range maximum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Greatest Common Divisor queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Other associative and idempotent operations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Unlike Segment Trees and Fenwick Trees, a conventional Sparse Table does not efficiently support arbitrary point updates.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It is designed mainly for static data.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.2 Why do we need Sparse Tables?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Consider:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [5, 2, 8, 1, 6, 3, 7, 4]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose you need to answer thousands of queries:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Minimum from index 1 to 5 Minimum from index 0 to 6 Minimum from index 3 to 7
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A naive solution scans the range every time.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Each query can take:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A Sparse Table preprocesses the array so that common range minimum queries can be answered in:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(1) </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.3 Core idea</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sparse Tables precompute answers for intervals whose lengths are powers of two.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-slate-800 my-4 shadow-inner">
            <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-slate-800 font-sans">
              Specialized Data Structure Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
              <code>{`Length 1 -> 2^0 Length 2 -> 2^1 Length 4 -> 2^2 Length 8 -> 2^3
For an array:
[5, 2, 8, 1, 6, 3, 7, 4]
We precompute:
Length 1
[5] [2] [8] [1] [6] [3] [7] [4]
Length 2
[5,2] [2,8] [8,1] [1,6] ...
For minimum queries, the answers are:
2, 2, 1, 1, ...
Length 4
Minimum of every interval of length 4
And so on.
[Range Minimum Query (RMQ) - Sparse Table | VNOI Wiki](https://images.openai.com/static-rsc-4/7vk6I_hLcAR4m_fbOLPjBh31udL968Aby7HTxqbmy5tvcB2GIM8pIitVWyd2HcQDTaBcUL3Xf6X6brjyP-C-QdJybH-4j1uhRh2nQ2i-bf0lJoYSNLrVqidCYZwlEKuw922F4jlwODkQOEgijLVqg27gpU_s6VE8nk5AlQckDAE?purpose=inline)
[wiki.vnoi.info](https://wiki.vnoi.info/algo/data-structures/rmq?utm_source=chatgpt.com)`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.4 Sparse Table notation</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Let:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> ST[k][i] </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            represent the aggregate of an interval beginning at index <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">i</code> with length <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">2^k</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a minimum Sparse Table:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> ST[k][i] </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            stores the minimum of:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [i, i + 2^k - 1]
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.5 Building a Sparse Table</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For the base level:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> ST[0][i]=A[i] </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This represents intervals containing one element.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For larger intervals:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> ST[k][i] = \min( ST[k-1][i], ST[k-1][i+2^&#123;k-1&#125;] ) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explanation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            An interval of length <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">2^k</code> is divided into two equal intervals of length <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">2^&#123;k-1&#125;</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The minimum of the complete interval is the minimum of those two halves.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.6 Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Suppose:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Array = [5, 2, 8, 1]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            At level 0:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            ST[0] = [5, 2, 8, 1]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            At level 1, calculate minimums over intervals of length 2:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            ST[1][0] = min(5, 2) = 2 ST[1][1] = min(2, 8) = 2 ST[1][2] = min(8, 1) = 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            ST[1] = [2, 2, 1]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            At level 2, calculate minimums over intervals of length 4:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            ST[2][0] = min(2, 1) = 1
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.7 Java implementation — Build Minimum Sparse Table</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`class SparseTable  {
  private final int n;
  private final int[][] st;
  private final int[] log;
  SparseTable(int[] arr)  {
    if (arr == null)  {
      throw new IllegalArgumentException( "Input cannot be null" );

    }
    n = arr.length;
    log = new int[n + 1];
    // Precompute logarithms for (int i = 2; i <= n; i++)  {
      log[i] = log[i / 2] + 1;

    }
    int levels = n == 0 ? 0 : log[n] + 1;
    st = new int[levels][n];
    // Base level for (int i = 0; i < n; i++)  {
      st[0][i] = arr[i];

    }
    // Build larger intervals for (int k = 1; k < levels; k++)  {
      int length = 1 << k;
      int half = length >> 1;
      for (int i = 0; i + length <= n; i++)  {
        st[k][i] = Math.min( st[k - 1][i], st[k - 1][i + half] );

      }

    }

  }
  // Inclusive range minimum query public int query(int left, int right)  {
    if (left < 0 || right >= n || left > right)  {
      throw new IllegalArgumentException( "Invalid query range" );

    }
    int length = right - left + 1;
    int k = log[length];
    int intervalLength = 1 << k;
    int first = st[k][left];
    int second = st[k][right - intervalLength + 1];
    return Math.min(first, second);

  }

}`}</code>
            </pre>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.8 Testing the Sparse Table</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`public class Main  {
  public static void main(String[] args)  {
    int[] arr =  {
      5, 2, 8, 1, 6, 3, 7, 4
    };
    SparseTable st = new SparseTable(arr);
    System.out.println( st.query(1, 5) );
    System.out.println( st.query(0, 6) );
    System.out.println( st.query(3, 7) );

  }

}`}</code>
            </pre>
          </div>
          <div className="p-3 my-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 flex items-start gap-2">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            1 1 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explanation:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Query 1:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [2, 8, 1, 6, 3]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Minimum = 1.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Query 2:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [5, 2, 8, 1, 6, 3, 7]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Minimum = 1.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Query 3:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [1, 6, 3, 7, 4]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Minimum = 1.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.9 Why can the query take O(1)?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For a query interval:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> [L,R] </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Calculate:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> k=\lfloor\log_2(R-L+1)\rfloor </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The interval length is:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> 2^k </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We take two precomputed intervals:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            First interval:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [L, L + 2^k - 1]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Second interval:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            [R - 2^k + 1, R]
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For minimum queries, these intervals cover the requested range, and they may overlap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            We can combine their minimum values because:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> \min(x,x)=x </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This property is called idempotence.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore, the overlapping portion does not affect the answer.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The query uses exactly two precomputed values:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(1) </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.10 Important limitation — Sparse Table and updates</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A traditional Sparse Table is designed for static arrays.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            If a single original array value changes, many precomputed intervals may become invalid.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Rebuilding the complete table takes:
          </p>
          <div className="my-3 p-3 text-center bg-slate-900 border border-slate-800 rounded-xl font-mono text-sm text-white shadow-2xs">
            <span className="block font-mono bg-slate-900 text-white px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-slate-800"> O(n\log n) </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Therefore, Sparse Tables are especially useful when:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The array does not change.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            There are many range queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Queries use operations that can be combined using overlapping intervals.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>28.11 An important technical distinction</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> overlapping-interval query technique works for idempotent operations such as:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Minimum.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Maximum.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            GCD.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            It does not directly work for ordinary sum queries because overlapping elements would be counted twice.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For static range sums, prefix sums are generally more suitable.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Some advanced Sparse Table variants support other query patterns, but their operation and complexity must be analyzed separately.
          </p>
      </div>
    ),
  },
  {
    id: 29,
    title: "29. Comprehensive Specialized Data Structures Decision Matrix",
    category: "Part D · Architectural Synthesis",
    anchor: "compare-specialized-ds",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Now that we have studied Tries, DSU, Segment Trees, Fenwick Trees, and Sparse Tables, let&#39;s understand how to choose the correct structure for a problem.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This is one of the most important skills in advanced DSA.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>29.1 Trie vs HashMap vs BST</span>
          </h3>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Trie</th>
                  <th className="px-4 py-3">HashMap</th>
                  <th className="px-4 py-3">BST</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Main purpose</td>
                  <td className="px-4 py-2.5 text-slate-300">String and prefix search</td>
                  <td className="px-4 py-2.5 text-slate-300">Key-value lookup</td>
                  <td className="px-4 py-2.5 text-slate-300">Ordered searching</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Prefix queries</td>
                  <td className="px-4 py-2.5 text-slate-300">Excellent</td>
                  <td className="px-4 py-2.5 text-slate-300">Not directly supported</td>
                  <td className="px-4 py-2.5 text-slate-300">Requires traversal</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Exact lookup</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> average</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code> if balanced</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Ordered word retrieval</td>
                  <td className="px-4 py-2.5 text-slate-300">Supported with traversal</td>
                  <td className="px-4 py-2.5 text-slate-300">No guaranteed order</td>
                  <td className="px-4 py-2.5 text-slate-300">Depends on key ordering</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Typical application</td>
                  <td className="px-4 py-2.5 text-slate-300">Autocomplete</td>
                  <td className="px-4 py-2.5 text-slate-300">Frequency maps</td>
                  <td className="px-4 py-2.5 text-slate-300">Sorted records</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Trie for prefixes.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            HashMap for fast key-value lookup.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            BST for ordered data.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>29.2 DSU vs Graph Traversal</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Both DSU and BFS/DFS can help identify connected components, but their strengths differ.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">DSU</th>
                  <th className="px-4 py-3">BFS / DFS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Main purpose</td>
                  <td className="px-4 py-2.5 text-slate-300">Merge and identify components</td>
                  <td className="px-4 py-2.5 text-slate-300">Explore graph structure</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Connectivity checking</td>
                  <td className="px-4 py-2.5 text-slate-300">Nearly <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> amortized</td>
                  <td className="px-4 py-2.5 text-slate-300">Requires traversal</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Component counting</td>
                  <td className="px-4 py-2.5 text-slate-300">Efficient</td>
                  <td className="px-4 py-2.5 text-slate-300">Requires graph traversal</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Edge additions</td>
                  <td className="px-4 py-2.5 text-slate-300">Efficient</td>
                  <td className="px-4 py-2.5 text-slate-300">May require recalculation</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Path finding</td>
                  <td className="px-4 py-2.5 text-slate-300">Not supported</td>
                  <td className="px-4 py-2.5 text-slate-300">Supported</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Cycle detection</td>
                  <td className="px-4 py-2.5 text-slate-300">Efficient for undirected graphs</td>
                  <td className="px-4 py-2.5 text-slate-300">Also possible</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU is particularly effective when edges are added over time and we repeatedly need to know whether two vertices are connected.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            BFS and DFS are more appropriate when we need to explore actual paths or visit graph neighbors.
          </p>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>29.3 Segment Tree vs Fenwick Tree vs Sparse Table</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            This comparison is especially important.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>
                  <th className="px-4 py-3">Segment Tree</th>
                  <th className="px-4 py-3">Fenwick Tree</th>
                  <th className="px-4 py-3">Sparse Table</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Main purpose</td>
                  <td className="px-4 py-2.5 text-slate-300">General range queries</td>
                  <td className="px-4 py-2.5 text-slate-300">Prefix aggregates</td>
                  <td className="px-4 py-2.5 text-slate-300">Static range queries</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Point updates</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Expensive</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Range sum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">Prefix sums are preferable</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Range minimum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">More limited</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code></td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Range maximum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300">More limited</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Static query</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Yes</td>
                  <td className="px-4 py-2.5 text-slate-300">Excellent</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Memory</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Implementation</td>
                  <td className="px-4 py-2.5 text-slate-300">Moderate</td>
                  <td className="px-4 py-2.5 text-slate-300">Relatively simple</td>
                  <td className="px-4 py-2.5 text-slate-300">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-bold text-white mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500/100 inline-block"></span>
            <span>29.4 Which one should you choose?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Requirement: Fast prefix sums and point updates
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Fenwick Tree
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use a Fenwick Tree when the main operation is adding values and calculating prefix or range sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Requirement: Range minimum with frequent updates
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Segment Tree
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use a Segment Tree for flexible range queries and point updates.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Requirement: Static range minimum with many queries
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sparse Table
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Preprocess once and answer minimum queries in constant time.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Requirement: Prefix-based string searching
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Trie
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use a Trie to store shared prefixes and retrieve matching words.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Requirement: Frequently merging connected groups
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use Disjoint Set Union to manage connected components efficiently.
          </p>
      </div>
    ),
  },
  {
    id: 30,
    title: "30. Complete Complexity Cheat Sheet",
    category: "Part D · Complexity Benchmark",
    anchor: "complexity-cheat-sheet",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Keep this table for interview revision.
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Data structure / operation</th>
                  <th className="px-4 py-3">Time complexity</th>
                  <th className="px-4 py-3">Space complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Trie insertion</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code> new nodes</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Trie exact search</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> iterative</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Trie prefix search</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(P)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> iterative</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Trie deletion</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code> for fixed alphabet</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code> recursive stack</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Trie autocomplete</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(P+V)</code>, excluding returned-string copying</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(L)</code> DFS stack plus results</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">DSU initialization</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">DSU Find, optimized</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\alpha(n))</code> amortized</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> amortized per call</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">DSU Union, optimized</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\alpha(n))</code> amortized</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> extra per call</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Segment Tree build</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Segment Tree range query</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code> recursion</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Segment Tree point update</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code> recursion</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Fenwick Tree point update</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> extra</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Fenwick Tree prefix sum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> extra</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Fenwick Tree range sum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> extra</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">Sparse Table construction</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n\log n)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n\log n)</code></td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">Sparse Table range minimum</td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code></td>
                  <td className="px-4 py-2.5 text-slate-300"><code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code> extra</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Where:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">n</code> = number of array elements or DSU elements.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">L</code> = word length.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">P</code> = prefix length.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">V</code> = Trie nodes visited during autocomplete.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">\alpha(n)</code> = inverse Ackermann function.
          </p>
      </div>
    ),
  },
  {
    id: 31,
    title: "31. Common Mistakes & Defensive Engineering Traps",
    category: "Part D · Defensive Traps",
    anchor: "common-mistakes",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These are the mistakes you should avoid when implementing specialized data structures.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Trie mistakes
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">1.</span>
            <span>Confusing prefix existence with complete word existence</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A valid character path does not necessarily represent a complete word.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Always check:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            isEndOfWord
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            for exact searches.
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">2.</span>
            <span>Deleting shared prefixes</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Do not delete nodes blindly.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Only remove nodes that are neither terminal words nor needed by other words.
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">3.</span>
            <span>Forgetting wildcard backtracking</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            For wildcard dictionary search, multiple children may need to be explored.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use DFS.
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">4.</span>
            <span>Using an incorrect character mapping</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            ch - &#39;a&#39;
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            works only for lowercase English letters.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Validate the input or select a suitable character representation.
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">5.</span>
            <span>Ignoring autocomplete ranking</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A basic Trie returns matching words. It does not automatically know which suggestions are most popular.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU mistakes
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">6.</span>
            <span>Merging elements instead of representatives</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Always perform:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            int rootA = find(a); int rootB = find(b);
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Then merge their roots.
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">7.</span>
            <span>Forgetting path compression</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Use:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">JAVA</span>
              <span className="text-slate-400">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`parent[x] = find(parent[x]);
to flatten the path. 8. Forgetting to update size In Union by Size: size[rootA] += size[rootB];
Update only the new representative's size. 9. Incorrectly updating rank Increase rank only when the two roots have equal rank in Union by Rank. Path compression does not mean you should recalculate rank from actual tree height. 10. Confusing connectivity with path finding DSU tells whether elements belong to the same set. It does not give you the actual graph path. Segment Tree mistakes 11. Confusing inclusive and exclusive ranges Our implementation uses inclusive ranges: query(1, 4) includes indices 1, 2, 3, and 4. 12. Returning an incorrect identity value For sum: return 0; For minimum: return Long.MAX_VALUE; For maximum: return Long.MIN_VALUE; 13. Forgetting to recalculate parent values After point updates, update all ancestors. 14. Incorrect child indexing Our recursive Segment Tree uses: left = node * 2; right = node * 2 + 1; Do not confuse this one-based convention with a zero-based heap array. 15. Confusing point updates with range updates A standard point-update Segment Tree does not automatically support efficient range updates. For many such problems, you need Lazy Propagation. Fenwick Tree mistakes 16. Forgetting the one-based internal indexing If the original array is zero-indexed: int i = index + 1; 17. Confusing update and query movement Update: i += i & -i; Prefix query: i -= i & -i; 18. Incorrect range-sum calculation Use: prefixSum(right) - prefixSum(left - 1) 19. Updating with the replacement value instead of the difference For point replacement, calculate: delta = newValue - oldValue; Then add that delta to the BIT. Sparse Table mistakes 20. Forgetting preprocessing Sparse Tables require preprocessing before answering queries. 21. Using overlapping intervals for sum The standard \\(O(1)\\) query method works for idempotent operations such as minimum, maximum, and GCD. It does not directly work for sum because overlapping elements would be counted twice. 22. Using a static structure for frequently updated data If the array changes repeatedly, a Segment Tree or Fenwick Tree is usually a better choice.`}</code>
            </pre>
          </div>
      </div>
    ),
  },
  {
    id: 32,
    title: "32. Important Theoretical Interview Questions (50+ Questions)",
    category: "Part D · Technical Q&A",
    anchor: "interview-questions",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Prepare these questions so that you can explain each concept and its implementation without referring to notes.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Trie questions
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is a Trie?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is a Trie called a Prefix Tree?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How is a Trie different from a HashMap?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How is a Trie Node represented in Java?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why do we need an end-of-word marker?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain Trie insertion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain exact-word search.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the difference between search and prefix search?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain Trie deletion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why must deletion preserve shared prefixes?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How does autocomplete work using a Trie?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How can a Trie support wildcard searching?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the complexity of Trie insertion and search?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What are the memory disadvantages of Tries?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            When would you use a HashMap of children instead of a fixed-size array?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU questions
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is Disjoint Set Union?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the Union-Find data structure?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain Find and Union operations.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is a representative element?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is path compression?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is path compression important?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is Union by Rank?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is Union by Size?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare Union by Rank and Union by Size.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the inverse Ackermann function?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is optimized DSU nearly constant time?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How can DSU detect cycles in an undirected graph?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How does DSU find connected components?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How is DSU used in Kruskal&#39;s algorithm?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Can DSU efficiently handle arbitrary edge deletions?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Segment Tree questions
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is a Segment Tree?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why do we need range-query data structures?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How is a Segment Tree represented using an array?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How is a Segment Tree constructed?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain range sum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What are no overlap, complete overlap, and partial overlap?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How are point updates performed?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does a Segment Tree query take <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(\log n)</code>?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does Build Segment Tree take <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(n)</code>?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How can a Segment Tree support minimum and maximum queries?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is Lazy Propagation?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the difference between point updates and range updates?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How much memory does a Segment Tree require?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Can Segment Trees work with GCD and XOR queries?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Fenwick Tree questions
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is a Fenwick Tree?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is it called a Binary Indexed Tree?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does a Fenwick Tree use one-based indexing?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is the lowest set bit?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain the expression i &amp; -i.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does update use i += i &amp; -i?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does prefix query use i -= i &amp; -i?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How do you calculate a range sum?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare Fenwick Tree and Segment Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Can a standard Fenwick Tree efficiently support range minimum queries?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How is a Fenwick Tree used for inversion counting?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is a Fenwick Tree memory-efficient?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sparse Table questions
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is a Sparse Table?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why is a Sparse Table useful for static queries?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What are power-of-two intervals?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            How is the Sparse Table constructed?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does minimum range querying take <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code>?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What is an idempotent operation?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why can overlapping intervals be used for minimum queries?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Why does the same overlapping method not work for sum?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            What happens if an array value changes?
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare Sparse Table, Segment Tree, and Fenwick Tree.
          </p>
      </div>
    ),
  },
  {
    id: 33,
    title: "33. Practical Coding Assignments (45 Problems)",
    category: "Part D · Hands-on Labs",
    anchor: "coding-assignments",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Complete these assignments using Java.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Hands-on Practice
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Assignment 1 — Beginner
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Trie fundamentals
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a Trie using a 26-element children array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Trie insertion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement exact-word search.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement prefix search.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Count the number of words stored in a Trie.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement word deletion.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Print all words stored in alphabetical order.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find all words beginning with a given prefix.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the longest common prefix using a Trie.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Build a simple autocomplete system.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a wildcard dictionary.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Count how many words share a particular prefix.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Assignment 2 — Intermediate
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Disjoint Set Union
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement basic Find and Union.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement path compression.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Union by Rank.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Union by Size.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Count connected components.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Determine whether two vertices are connected.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Detect a cycle in an undirected graph.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Solve Number of Provinces.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Solve Redundant Connection.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Merge accounts using DSU.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the number of operations needed to connect a network.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Kruskal&#39;s Minimum Spanning Tree algorithm.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Track the size of every connected component.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Group people using equivalence relationships.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Assignment 3 — Advanced
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Segment Trees
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Construct a Segment Tree for range sums.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement range sum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement point updates.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a range minimum Segment Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a range maximum Segment Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a GCD Segment Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find the maximum value in a given range.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Count the number of elements in a range.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Lazy Propagation for range addition.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement range assignment and range-sum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Solve Range Sum Query — Mutable.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a Segment Tree for XOR queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Assignment 4 — Advanced
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Fenwick Tree and Sparse Table
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a Fenwick Tree from an integer array.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement point additions.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement prefix sum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement range sum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement point replacement using difference calculation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Count inversions using a Fenwick Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Count smaller elements after each array position.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a Sparse Table for range minimum.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a Sparse Table for range maximum.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement range GCD queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Compare Sparse Table query performance with a Segment Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement a static range minimum query system.
          </p>
      </div>
    ),
  },
  {
    id: 34,
    title: "34. Curated LeetCode Practice Progression (18 Problems)",
    category: "Part D · LeetCode Track",
    anchor: "leetcode-track",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            These problems help convert the concepts into actual interview-solving skills.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Problem numbers and difficulty labels refer to LeetCode.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Beginner — Trie foundations
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Main concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">[208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Trie insertion/search</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">[14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">Prefix matching</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">[648. Replace Words](https://leetcode.com/problems/replace-words/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Trie prefix search</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Intermediate — Trie and DSU
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Main concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">[211. Design Add and Search Words](https://leetcode.com/problems/design-add-and-search-words-data-structure/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Trie + DFS</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">[547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">DSU</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">[684. Redundant Connection](https://leetcode.com/problems/redundant-connection/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">DSU + Cycle Detection</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Medium
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Medium
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Advanced — Tries and graph connectivity
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Main concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">[212. Word Search II](https://leetcode.com/problems/word-search-ii/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">Trie + Backtracking</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">[1268. Search Suggestions System](https://leetcode.com/problems/search-suggestions-system/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Trie + Autocomplete</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">[721. Accounts Merge](https://leetcode.com/problems/accounts-merge/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">DSU</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Medium
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Medium
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            DSU
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Segment Tree and Fenwick Tree practice
          </p>
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Problem</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Main concept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">[303. Range Sum Query — Immutable](https://leetcode.com/problems/range-sum-query-immutable/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Easy</td>
                  <td className="px-4 py-2.5 text-slate-300">Prefix Sums</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">[307. Range Sum Query — Mutable](https://leetcode.com/problems/range-sum-query-mutable/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Medium</td>
                  <td className="px-4 py-2.5 text-slate-300">Segment Tree / Fenwick Tree</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">[315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/?utm_source=chatgpt.com)</td>
                  <td className="px-4 py-2.5 text-slate-300">Hard</td>
                  <td className="px-4 py-2.5 text-slate-300">Fenwick / Segment Tree</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Hard
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Segment Tree / Merge Sort
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Hard
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Segment Tree / Sweep Line
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sparse Table practice: Implement static range minimum queries directly using the Java implementation in Section 28. Sparse Tables are particularly common in competitive programming, where many queries are performed over an array that never changes.
          </p>
      </div>
    ),
  },
  {
    id: 35,
    title: "35. Knowledge Assessment & Quiz",
    category: "Part D · Knowledge Check",
    anchor: "knowledge-check",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Test your understanding before moving to the next module.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Module 14 assessment
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            0/10 answered
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">1.</span>
            <span>What is the primary purpose of a Trie?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sorting integers
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Efficient prefix and string searching
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Finding minimum values
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Graph traversal
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">2.</span>
            <span>What does isEndOfWord represent in a Trie?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The root node
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            A missing character
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The end of a complete stored word
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The longest prefix
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">3.</span>
            <span>Which optimization makes DSU Find operations faster?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Heapify
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Path compression
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Binary search
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Rehashing
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">4.</span>
            <span>What does Union by Size do?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Always attaches the larger set below the smaller one
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sorts all elements
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Attaches the smaller set below the larger set
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Deletes one set
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">5.</span>
            <span>What is the amortized complexity of optimized DSU operations?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(n)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(log n)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(α(n))
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(n²)
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">6.</span>
            <span>What is the time complexity of a Segment Tree point update?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(1)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(log n)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(n)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            O(n log n)
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">7.</span>
            <span>Which Fenwick Tree expression calculates the lowest set bit?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i + 1
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i * 2
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i &amp; -i
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            i / 2
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">8.</span>
            <span>How do you calculate an inclusive Fenwick Tree range sum?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            prefix(right) + prefix(left)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            prefix(right) - prefix(left - 1)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            prefix(left) - prefix(right)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            prefix(right) * prefix(left)
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">9.</span>
            <span>Which structure is especially suitable for static range minimum queries with O(1) query time?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Basic DSU
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sparse Table
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Ordinary BST
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            PriorityQueue
          </p>
          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">10.</span>
            <span>Which operation is not efficiently supported by a conventional DSU?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Find representative
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Merge two sets
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Check connectivity
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Arbitrary edge deletion and component splitting
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Submit answers
          </p>
      </div>
    ),
  },
  {
    id: 36,
    title: "36. Learning Outcomes & Engineering Mastery",
    category: "Milestone · Specialized Mastery",
    anchor: "learning-outcomes",
    content: (
      <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            By the end of this module, you should be able to:
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Tries
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain Trie fundamentals and node representation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement insertion, exact search, and prefix search.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Delete words without destroying shared prefixes.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement wildcard dictionary searches.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Build a working autocomplete system.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Disjoint Set Union
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain Find and Union.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement path compression.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Union by Rank.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement Union by Size.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understand inverse Ackermann complexity.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Count connected components.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Detect cycles in undirected graphs.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Segment Trees
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Construct a Segment Tree.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement range sum and minimum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement point updates.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understand no overlap, partial overlap, and complete overlap.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understand Lazy Propagation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Fenwick Trees
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understand Binary Indexed Tree representation.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Calculate the lowest set bit.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement point updates.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement prefix sum and range sum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Recognize applications such as inversion counting.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Sparse Tables
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understand power-of-two interval preprocessing.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Implement static range minimum queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Explain why some queries take <code className="font-mono text-orange-600 bg-orange-500/10 px-1 py-0.5 rounded text-xs border border-orange-500/20">O(1)</code>.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Understand the limitations for frequently updated arrays.
          </p>
      </div>
    ),
  },
  {
    id: 37,
    title: "37. Recommended Practical Learning Sequence",
    category: "Milestone · Study Roadmap",
    anchor: "learning-sequence",
    content: (
      <div className="space-y-4">
          <div className="overflow-x-auto my-4 rounded-xl border border-slate-800 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                <tr>
                  <th className="px-4 py-3">Stage</th>
                  <th className="px-4 py-3">Topics to master</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">1</td>
                  <td className="px-4 py-2.5 text-slate-300">Trie fundamentals and node representation</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">2</td>
                  <td className="px-4 py-2.5 text-slate-300">Trie insertion, search, and prefix search</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">3</td>
                  <td className="px-4 py-2.5 text-slate-300">Trie deletion and word dictionaries</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">4</td>
                  <td className="px-4 py-2.5 text-slate-300">Autocomplete implementation</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">5</td>
                  <td className="px-4 py-2.5 text-slate-300">DSU Find and Union</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">6</td>
                  <td className="px-4 py-2.5 text-slate-300">Path compression</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">7</td>
                  <td className="px-4 py-2.5 text-slate-300">Union by Rank and Union by Size</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">8</td>
                  <td className="px-4 py-2.5 text-slate-300">DSU cycle detection</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">9</td>
                  <td className="px-4 py-2.5 text-slate-300">Segment Tree construction</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">10</td>
                  <td className="px-4 py-2.5 text-slate-300">Range queries and point updates</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">11</td>
                  <td className="px-4 py-2.5 text-slate-300">Fenwick Tree and lowest set bit</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">12</td>
                  <td className="px-4 py-2.5 text-slate-300">Prefix sums and range sums</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">13</td>
                  <td className="px-4 py-2.5 text-slate-300">Sparse Table preprocessing</td>
                </tr>
                <tr className="bg-slate-900/40">
                  <td className="px-4 py-2.5 text-slate-300">14</td>
                  <td className="px-4 py-2.5 text-slate-300">Compare all specialized structures</td>
                </tr>
                <tr className="bg-slate-900/60">
                  <td className="px-4 py-2.5 text-slate-300">15</td>
                  <td className="px-4 py-2.5 text-slate-300">Complete coding assignments and LeetCode problems</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 my-3 rounded-xl bg-orange-500/10/60 border border-orange-500/30/80 text-orange-300 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-600 font-bold shrink-0 mt-0.5">⚠️</span>
            <div>My recommendation: Give extra practice to Trie implementation, optimized DSU, Segment Tree range queries, and Fenwick Tree operations. These are the most important implementation foundations in this module. For Sparse Tables, concentrate on understanding preprocessing, overlapping intervals, and why they are particularly useful for static range queries.</div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            The central lesson of Module 14: Different data structures solve different categories of problems. Tries organize strings by prefixes, DSU manages connected groups, Segment Trees handle dynamic range queries, Fenwick Trees maintain efficient prefix aggregates, and Sparse Tables answer static range queries quickly.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-2">
            Together with the previous modules, these structures give you a strong foundation for advanced graph algorithms, competitive programming, and technical interviews.
          </p>
      </div>
    ),
  },
];
