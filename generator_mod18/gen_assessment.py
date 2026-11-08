# -*- coding: utf-8 -*-
"""
Module 18 Assessments: 25 Senior Security Auditor Interview Questions and 20 Multiple-Choice Questions.
Zero information loss - all technical scenarios and questions included.
"""

def generate_assessment_sections():
    return '''
      {/* ============================================================== */}
      {/* SECTION 27.A: 25 SENIOR SECURITY AUDITOR INTERVIEWS            */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3">
          <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
            Technical Assessment
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
            Senior Smart Contract Security Auditor Interview Questions
          </h2>
          <p className="text-sm text-neutral-600 mt-1">
            25 architectural interview scenarios covering reentrancy, oracle security, flash loan vectors, storage collisions, formal verification, and audit methodology.
          </p>
        </div>

        <div className="space-y-3">
          {interviewQuestions.map((iq) => {
            const isExpanded = expandedInterview[iq.id];
            return (
              <div
                key={iq.id}
                className="bg-white rounded-xl border border-[#e7e3da] overflow-hidden shadow-sm transition"
              >
                <button
                  onClick={() => toggleInterviewExpand(iq.id)}
                  className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-[#f6f4ee]/50 transition"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mt-0.5">
                      Q{iq.id < 10 ? `0${iq.id}` : iq.id}
                    </span>
                    <span className="text-sm font-bold text-neutral-900 leading-snug">
                      {iq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 shrink-0 mt-1 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="p-4 pt-0 border-t border-[#e7e3da] bg-[#f6f4ee]/30 space-y-3">
                    <div className="text-xs text-neutral-700 leading-relaxed whitespace-pre-line font-sans mt-3">
                      {iq.answer}
                    </div>
                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-950 font-medium">
                      <strong>Auditor Takeaway:</strong> {iq.takeaway}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION: 20 MULTIPLE-CHOICE QUIZ ASSESSMENT                    */}
      {/* ============================================================== */}
      <section className="space-y-6">
        <div className="border-b border-[#e7e3da] pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-amber-700 tracking-wider">
              Self-Assessment Quiz
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
              Module 18 Security & Auditing Examination
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              20 scenario-based questions evaluating Solidity vulnerabilities, static analysis, and testing methodology.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              Score: {quizScore} / {quizQuestions.length}
            </span>
            <button
              onClick={handleResetQuiz}
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 underline"
            >
              Reset Quiz
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {quizQuestions.map((q, idx) => {
            const selectedOpt = userQuizAnswers[q.id];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = isAnswered && selectedOpt === q.answer;

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl border p-5 transition shadow-sm ${
                  isAnswered
                    ? isCorrect
                      ? "border-emerald-300 bg-emerald-50/20"
                      : "border-rose-300 bg-rose-50/20"
                    : "border-[#e7e3da]"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 mt-0.5">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                    {q.question}
                  </h3>
                </div>

                <div className="mt-4 space-y-2">
                  {q.options.map((opt, oIdx) => {
                    let optStyle = "border-[#e7e3da] bg-white text-neutral-700 hover:bg-[#f6f4ee]";
                    if (isAnswered) {
                      if (oIdx === q.answer) {
                        optStyle = "border-emerald-400 bg-emerald-100/70 text-emerald-950 font-bold";
                      } else if (selectedOpt === oIdx) {
                        optStyle = "border-rose-400 bg-rose-100/70 text-rose-950 font-bold";
                      } else {
                        optStyle = "border-[#e7e3da] bg-white/50 text-neutral-400";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isAnswered}
                        onClick={() => handleQuizOptionSelect(q.id, oIdx)}
                        className={`w-full p-3 rounded-lg border text-xs text-left transition flex items-start gap-2.5 ${optStyle}`}
                      >
                        <span className="font-mono font-bold uppercase shrink-0">
                          {String.fromCharCode(65 + oIdx)}.
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className={`mt-3 p-3 rounded-lg text-xs leading-relaxed ${
                    isCorrect ? "bg-emerald-100/50 text-emerald-950" : "bg-rose-100/50 text-rose-950"
                  }`}>
                    <span className="font-bold">
                      {isCorrect ? "Correct!" : "Incorrect."}
                    </span>{" "}
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    '''
