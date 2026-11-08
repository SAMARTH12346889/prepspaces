# projectx/generator_mod15/gen_assessment.py
"""
Assessment generator for Module 15: IPFS & Decentralized Storage
Renders 20 MCQs with instant feedback and 16 Senior Web3 Storage Architect Interview Scenarios.
"""

def generate_assessment():
    return r'''
      {/* ------------------------------------------------------------- */}
      {/* TAB 4: KNOWLEDGE CHECK & INTERVIEW PREPARATION                */}
      {/* ------------------------------------------------------------- */}
      {activeTab === "assessment" && (
        <section className="space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                Knowledge & Career Readiness
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                20 Multiple Choice Questions • 16 Senior Architect Interviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Decentralized Storage Mastery Assessment & Interview Prep
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-4xl leading-relaxed">
              Validate your deep architectural understanding of content addressing, CIDv1 multiformats,
              Kademlia DHTs, Bitswap, pinning services, Arweave, Filecoin, and Solidity CID registries.
              Test yourself against 20 rigorous conceptual MCQs and prepare for technical interviews with 16
              senior Web3 storage architect scenarios.
            </p>
          </div>

          {/* SECTION 1: 20 MULTIPLE CHOICE QUESTIONS */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 1</span>
                <h3 className="text-xl font-bold text-neutral-900">Decentralized Storage Conceptual Quiz</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-full font-bold">
                  Score: {quizScore} / {QUIZ_QUESTIONS.length} ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                </span>
                <button
                  onClick={handleResetQuiz}
                  className="px-3 py-1 text-xs border border-neutral-300 hover:bg-neutral-50 rounded-lg text-neutral-700 transition"
                >
                  Reset Quiz
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userAns = selectedQuizAnswers[q.id];
                const isAnswered = userAns !== undefined;
                const isCorrect = userAns === q.ans;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition ${
                      isAnswered
                        ? isCorrect
                          ? "border-green-300 bg-green-50/20"
                          : "border-red-300 bg-red-50/20"
                        : "border-neutral-200 bg-neutral-50/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                        <span className="text-amber-600 mr-1.5">{idx + 1}.</span> {q.question}
                      </h4>
                      {isAnswered && (
                        <span className={`text-xs font-bold px-2 py-0.5 rounded font-mono ${
                          isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {isCorrect ? "Correct ✓" : "Incorrect ✗"}
                        </span>
                      )}
                    </div>

                    <div className="mt-3 space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700";

                        if (isAnswered) {
                          if (optIdx === q.ans) {
                            btnStyle = "border-green-500 bg-green-50 text-green-900 font-semibold";
                          } else if (optIdx === userAns) {
                            btnStyle = "border-red-500 bg-red-50 text-red-900";
                          } else {
                            btnStyle = "border-neutral-200 bg-white opacity-60 text-neutral-500";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                            className={`w-full text-left p-3 text-xs rounded-lg border transition flex items-center gap-3 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-mono text-[10px] shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="mt-3 p-3 bg-white rounded-lg border border-neutral-200 text-xs text-neutral-600 leading-relaxed">
                        <strong className="text-neutral-900 block mb-0.5 font-mono text-[11px] uppercase tracking-wide">
                          Architect Explanation:
                        </strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: 16 SENIOR ARCHITECT INTERVIEW SCENARIOS */}
          <div className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#e7e3da] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Section 2</span>
                <h3 className="text-xl font-bold text-neutral-900">
                  Senior Web3 Storage Architect Interview Scenarios (16 Questions)
                </h3>
              </div>
              <span className="text-xs font-mono bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded">
                Staff / Lead Web3 Roles
              </span>
            </div>
            <p className="text-sm text-neutral-600">
              Study these in-depth interview questions curated from technical screens at leading Web3 infrastructure
              companies, NFT platforms, and decentralized protocols. Toggle each accordion to analyze the model answer
              and key takeaways.
            </p>

            <div className="space-y-4">
              {INTERVIEW_QUESTIONS.map((item, idx) => {
                const isOpen = openInterviewId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border border-neutral-200 rounded-xl overflow-hidden transition bg-white"
                  >
                    <button
                      onClick={() => setOpenInterviewId(isOpen ? null : item.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-neutral-50/60 transition"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                          Question {idx + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900">{item.q}</h4>
                        <div className="text-xs text-neutral-500 font-mono">
                          Scenario: {item.scenario}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 shrink-0 font-bold px-2 py-1 rounded bg-neutral-100">
                        {isOpen ? "Hide ▲" : "Answer ▼"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="p-4 sm:p-6 border-t border-neutral-200 bg-neutral-50/50 space-y-4">
                        <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-line font-sans">
                          {item.answer}
                        </div>

                        {item.keyTakeaways && (
                          <div className="pt-3 border-t border-neutral-200">
                            <span className="text-[10px] uppercase font-bold text-neutral-500 font-mono tracking-wider block mb-2">
                              Key Architectural Takeaways:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {item.keyTakeaways.map((takeaway, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-xs px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 font-medium"
                                >
                                  ✓ {takeaway}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
'''
