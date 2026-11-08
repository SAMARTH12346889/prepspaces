# -*- coding: utf-8 -*-
"""
Assessment Generator for Module 24 — Final Blockchain Capstone Project
Contains:
Section 29:
- 25 Senior Viva & Technical Interview Questions (5 domains with search & expandable answers)
- 20 Multiple-Choice Examination Questions (interactive selection, submission, grading, explanations, reset)
"""

def generate_assessment_sections():
    return r'''
      {/* SECTION 29: Final Viva & Technical Interview */}
      <section id="section-29" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-8">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 29
          </span>
          <span className="text-xs font-mono text-neutral-500">Oral Defense & Evaluation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          29. Final Viva & Technical Interview Defense (25 Questions)
        </h2>

        {/* 25 Viva Scenarios */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-200">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Oral Defense Questions Across 5 Engineering Domains
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Every candidate must be prepared to defend architecture, security, smart contract design, and full-stack integration.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search defense questions..."
                value={interviewSearch}
                onChange={(e) => setInterviewSearch(e.target.value)}
                className="px-3 py-1.5 border border-neutral-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-64"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredInterviews.length === 0 ? (
              <div className="p-6 text-center text-neutral-500 text-xs italic">
                No viva defense questions match your search query.
              </div>
            ) : (
              filteredInterviews.map((item, idx) => {
                const isOpen = expandedInterviews[item.id];
                return (
                  <div
                    key={item.id}
                    className="border border-[#e7e3da] rounded-xl overflow-hidden transition"
                  >
                    <button
                      onClick={() => toggleInterview(item.id)}
                      className="w-full text-left p-4 bg-[#fbfaf7] hover:bg-[#f6f4ee] flex items-center justify-between gap-4 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-orange-600">
                          #{idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-neutral-800">
                          {item.question}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-200 text-neutral-700">
                          {item.category}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-neutral-400 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white border-t border-[#e7e3da] text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-line font-sans">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* 20 Multiple-Choice Examination */}
        <div className="space-y-6 pt-6 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">
                Module 24 Capstone Examination (20 Assessment Questions)
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Comprehensive evaluation covering the entire production-style blockchain software engineering lifecycle.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-neutral-600">
                {Object.keys(userAnswers).length} / {QUIZ_QUESTIONS.length} Answered
              </span>
              {quizSubmitted && (
                <button
                  onClick={resetQuiz}
                  className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg text-xs font-bold transition"
                >
                  Reset Exam
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {QUIZ_QUESTIONS.map((q, qIdx) => {
              const selectedOpt = userAnswers[q.id];
              const isSubmitted = quizSubmitted;
              const isCorrect = selectedOpt === q.answer;

              return (
                <div
                  key={q.id}
                  className={`p-4 sm:p-5 rounded-xl border transition ${
                    isSubmitted
                      ? isCorrect
                        ? "border-emerald-300 bg-emerald-50/30"
                        : "border-rose-300 bg-rose-50/30"
                      : "border-[#e7e3da] bg-[#fbfaf7]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs sm:text-sm font-bold text-neutral-900">
                      {qIdx + 1}. {q.question}
                    </span>
                    {isSubmitted && (
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold shrink-0 ${
                          isCorrect
                            ? "bg-emerald-200 text-emerald-900"
                            : "bg-rose-200 text-rose-900"
                        }`}
                      >
                        {isCorrect ? "CORRECT" : "INCORRECT"}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, oIdx) => {
                      const isChosen = selectedOpt === oIdx;
                      let optClass = "border-neutral-200 bg-white hover:border-neutral-300";

                      if (isSubmitted) {
                        if (oIdx === q.answer) {
                          optClass = "border-emerald-500 bg-emerald-100/60 font-bold text-emerald-900";
                        } else if (isChosen) {
                          optClass = "border-rose-400 bg-rose-100/60 text-rose-900";
                        } else {
                          optClass = "border-neutral-200 bg-neutral-50 text-neutral-400";
                        }
                      } else if (isChosen) {
                        optClass = "border-orange-500 bg-orange-50 font-bold text-orange-900 ring-1 ring-orange-400";
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(q.id, oIdx)}
                          className={`p-3 rounded-lg border text-left text-xs transition flex items-center gap-2 ${optClass}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {isSubmitted && (
                    <div className="mt-3 p-3 rounded-lg bg-white border border-[#e7e3da] text-xs text-neutral-700">
                      <span className="font-bold text-neutral-900">Explanation: </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!quizSubmitted ? (
            <div className="pt-4 flex justify-end">
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(userAnswers).length === 0}
                className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-300 text-white rounded-xl text-xs font-bold transition shadow-sm"
              >
                Submit Assessment ({Object.keys(userAnswers).length}/{QUIZ_QUESTIONS.length})
              </button>
            </div>
          ) : (
            <div className="p-5 rounded-xl bg-neutral-900 text-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase text-orange-400 tracking-wider">
                  Capstone Assessment Results
                </div>
                <div className="text-xl sm:text-2xl font-bold mt-1">
                  Score: {quizScore} / {QUIZ_QUESTIONS.length} ({Math.round((quizScore / QUIZ_QUESTIONS.length) * 100)}%)
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  {quizScore >= 16
                    ? "Distinction! You have demonstrated comprehensive mastery across the entire 24-module blockchain curriculum."
                    : "Review the capstone architecture sections and retry the exam to achieve graduation mastery."}
                </div>
              </div>
              <button
                onClick={resetQuiz}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition whitespace-nowrap"
              >
                Retake Examination
              </button>
            </div>
          )}
        </div>
      </section>
'''
