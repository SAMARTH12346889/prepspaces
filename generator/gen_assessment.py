# projectx/generator/gen_assessment.py

def get_assessment_code():
    return r'''
          {/* TAB 4: KNOWLEDGE ASSESSMENT & INTERVIEW (PART 18) */}
          {activeTab === "quiz" && (
            <div className="space-y-10">
              {/* SECTION 1: 20 MULTIPLE CHOICE CONCEPTUAL QUESTIONS */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                      Part 18 • Knowledge Assessment
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                      Conceptual Assessment (20 Examination Questions)
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      Validate your comprehension of token architectures, allowance mechanics, safe NFT callbacks, and economic supply invariants.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-xs font-mono font-bold text-[#ea580c]">
                      Score: {quizScore} / {quizQuestions.length} ({quizQuestions.length > 0 ? Math.round((quizScore / quizQuestions.length) * 100) : 0}%)
                    </div>
                    <button
                      onClick={handleResetQuiz}
                      className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition cursor-pointer"
                    >
                      Reset Quiz
                    </button>
                  </div>
                </div>

                {/* Question List */}
                <div className="space-y-6">
                  {quizQuestions.map((q, idx) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.answer;

                    return (
                      <div
                        key={q.id}
                        className={`p-5 rounded-2xl border transition ${
                          isAnswered
                            ? isCorrect
                              ? "border-emerald-200 bg-emerald-50/20"
                              : "border-red-200 bg-red-50/20"
                            : "border-stone-200 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-bold text-stone-900 leading-snug">
                            <span className="font-mono text-orange-600 mr-1.5">Q{idx + 1}.</span>
                            {q.question}
                          </h3>
                        </div>

                        <div className="mt-3 space-y-2">
                          {q.options.map((opt, optIdx) => {
                            let btnStyle = "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100";
                            if (isAnswered) {
                              if (optIdx === q.answer) {
                                btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-300";
                              } else if (optIdx === selected) {
                                btnStyle = "border-red-500 bg-red-50 text-red-900 font-bold ring-1 ring-red-300";
                              } else {
                                btnStyle = "border-stone-200 bg-white text-stone-400 opacity-60";
                              }
                            }

                            return (
                              <button
                                key={optIdx}
                                disabled={isAnswered}
                                onClick={() => handleSelectAnswer(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center gap-2.5 ${btnStyle}`}
                              >
                                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-mono shrink-0">
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span>{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {isAnswered && (
                          <div
                            className={`mt-3 p-3 rounded-xl text-xs leading-relaxed ${
                              isCorrect ? "bg-emerald-100/70 text-emerald-900" : "bg-red-100/70 text-red-900"
                            }`}
                          >
                            <span className="font-bold block mb-0.5 font-mono">
                              {isCorrect ? "✓ Correct Answer:" : "✗ Incorrect (Review Below):"}
                            </span>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* SECTION 2: 14 SENIOR WEB3 ARCHITECT INTERVIEW QUESTIONS */}
              <section className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-xs space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c]">
                    Part 18 • Elite Career Preparation
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#18181b] mt-1">
                    Advanced Senior Web3 Architect Interview Questions (14 In-Depth Scenarios)
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Defend token architectures, evaluate front-running vulnerabilities, formulate property invariants, and architect production NFT marketplaces.
                  </p>
                </div>

                <div className="space-y-3">
                  {interviewQuestions.map((iq) => {
                    const isOpen = expandedInterview === iq.id;
                    return (
                      <div key={iq.id} className="rounded-2xl border border-stone-200 bg-stone-50/50 overflow-hidden">
                        <button
                          onClick={() => setExpandedInterview(isOpen ? null : iq.id)}
                          className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-stone-100/60 transition cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-lg bg-orange-100 text-orange-700 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                              {iq.id}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-stone-900">
                              {iq.question}
                            </span>
                          </div>
                          <span className="text-stone-400 shrink-0 font-mono text-xs">
                            {isOpen ? "Hide ▲" : "Answer ▼"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="p-4 sm:p-6 bg-white border-t border-stone-200 text-xs text-stone-700 space-y-3 leading-relaxed">
                            <div className="whitespace-pre-line font-sans">
                              {iq.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}
'''
