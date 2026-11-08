# -*- coding: utf-8 -*-
"""
Module 21 Assessment:
- Part 19.A: 25 Senior DAO & Governance Architect Interview Questions with Category Filters
- 20 Multiple-Choice Examination Questions (featuring all 10 canonical module questions)
"""

def generate_assessment_sections():
    return '''
        {/* Assessment Section */}
        <section id="assessment" className="space-y-16">
          {/* Part 19.A: Senior DAO Architect Interview Questions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.A</span>
              <span>•</span>
              <span>SENIOR ARCHITECT INTERVIEWS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              19.A 25 Senior DAO &amp; Web3 Governance Architect Interview Scenarios
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Exhaustive technical scenarios and architectural questions asked in senior protocol engineering interviews at Uniswap Labs, ENS Foundation, MakerDAO / Sky, Aave Governance, and top Web3 security auditing firms.
            </p>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                type="button"
                onClick={() => setInterviewFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  interviewFilter === "all"
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                All 25 Questions
              </button>
              {Array.from(new Set(INTERVIEW_QUESTIONS.map(q => q.context))).map((ctx) => (
                <button
                  key={ctx}
                  type="button"
                  onClick={() => setInterviewFilter(ctx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    interviewFilter === ctx
                      ? "bg-amber-600 text-white shadow-sm"
                      : "bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {ctx}
                </button>
              ))}
            </div>

            {/* Interview Question Cards */}
            <div className="space-y-4">
              {filteredInterviews.map((item) => {
                const isExpanded = expandedInterviewId === item.id;
                return (
                  <div key={item.id} className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => setExpandedInterviewId(isExpanded ? null : item.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-neutral-50 transition-all"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
                            {item.id.toUpperCase()}
                          </span>
                          <span className="text-neutral-300">•</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                            {item.context}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900">{item.question}</h4>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-200 shrink-0 mt-1 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {isExpanded && (
                      <div className="p-5 border-t border-neutral-100 bg-neutral-50/50 space-y-4 text-xs font-mono">
                        <div>
                          <strong className="text-neutral-900 block mb-1">Architectural Model Answer:</strong>
                          <p className="text-neutral-700 leading-relaxed bg-white p-4 rounded-xl border border-neutral-200">
                            {item.answer}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-bold">
                          Key Architectural Takeaway: {item.takeaway}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Part 19.C: 20 Multiple-Choice Examination Questions */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold tracking-wide">
              <span>PART 19.C</span>
              <span>•</span>
              <span>KNOWLEDGE ASSESSMENT</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  Module 21 Examination: DAOs &amp; Blockchain Governance
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  20 questions assessing your mastery of ERC20Votes checkpoints, OpenZeppelin GovernorCountingSimple quorum math, timelock role permissions, and defense against flash loan takeovers.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-neutral-700">
                  Score: {quizScore} / {QUIZ_QUESTIONS.length}
                </span>
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100 text-xs font-mono font-semibold transition-all"
                >
                  Reset Exam
                </button>
              </div>
            </div>

            {/* Quiz Questions List */}
            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q, qIndex) => {
                const selectedOption = userQuizAnswers[qIndex];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === q.correctAnswer;

                return (
                  <div key={q.id} className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
                          Question {qIndex + 1} of {QUIZ_QUESTIONS.length}
                        </span>
                        <h4 className="text-base font-bold text-neutral-900">{q.question}</h4>
                      </div>
                      {isAnswered && (
                        <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full shrink-0 ${
                          isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                        }`}>
                          {isCorrect ? "CORRECT" : "INCORRECT"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, optIndex) => {
                        let btnStyle = "bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-800";
                        if (isAnswered) {
                          if (optIndex === q.correctAnswer) {
                            btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold";
                          } else if (optIndex === selectedOption) {
                            btnStyle = "bg-red-50 border-red-500 text-red-950 line-through";
                          } else {
                            btnStyle = "bg-neutral-50 border-neutral-200 text-neutral-400 opacity-60";
                          }
                        }

                        return (
                          <button
                            key={optIndex}
                            type="button"
                            disabled={isAnswered}
                            onClick={() => handleQuizOptionSelect(qIndex, optIndex)}
                            className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-mono transition-all flex items-start gap-3 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold">
                              {String.fromCharCode(65 + optIndex)}
                            </span>
                            <span className="leading-relaxed">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-700 space-y-1">
                        <strong className="text-neutral-900 block font-sans">Explanation:</strong>
                        <p className="leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
    '''