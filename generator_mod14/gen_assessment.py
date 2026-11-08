# projectx/generator_mod14/gen_assessment.py
"""
Generates Knowledge Assessment for Module 14:
- 20 Multiple Choice Questions with interactive state, instant feedback, and explanations.
- 14 Senior Web3 Architect Interview Scenarios with expandable accordions, architecture breakdowns, and model answers.
"""

def get_assessment_code():
    return '''
<section id="assessment-section" className="space-y-12">
  {/* SECTION HEADER */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ea580c]/10 text-[#ea580c]">Assessment</span>
      <h2 className="text-xl sm:text-2xl font-bold text-[#18181b]">Knowledge Assessment &amp; Senior Architect Scenarios</h2>
    </div>
    <p className="text-[#27272a] text-sm sm:text-base leading-relaxed">
      Test your mastery across full-stack DApp development, React Web3 state synchronization, Viem contract calls, SIWE challenge-response authentication, The Graph indexing, and error handling. Complete the 20 conceptual questions and analyze the 14 real-world architect interview scenarios.
    </p>
  </div>

  {/* 20 MULTIPLE CHOICE QUESTIONS */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#e7e3da]">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">Part 1: Conceptual Knowledge Quiz (20 Questions)</h3>
        <p className="text-xs sm:text-sm text-[#52525b] mt-1">
          Select the correct option for each question. Instant feedback and explanations will appear immediately.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <span className="text-xs text-[#52525b] block font-medium">Your Score</span>
          <span className="text-lg font-bold text-[#ea580c]">{quizScore} / {QUIZ_QUESTIONS.length}</span>
        </div>
        <button
          onClick={resetQuiz}
          className="px-3 py-1.5 text-xs font-medium text-[#27272a] bg-[#f6f4ee] hover:bg-[#e7e3da] rounded-lg border border-[#e7e3da] transition-colors"
        >
          Reset Quiz
        </button>
      </div>
    </div>

    {/* Quiz Questions List */}
    <div className="space-y-6">
      {QUIZ_QUESTIONS.map((q, idx) => {
        const isSelected = selectedAnswers[q.id] !== undefined;
        const userAnswer = selectedAnswers[q.id];
        const isCorrect = userAnswer === q.answer;

        return (
          <div key={q.id} className="p-4 sm:p-5 rounded-xl border border-[#e7e3da] bg-[#fbfaf8]">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                Question {idx + 1} of {QUIZ_QUESTIONS.length}
              </span>
              {isSelected && (
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`}>
                  {isCorrect ? "Correct" : "Incorrect"}
                </span>
              )}
            </div>

            <p className="font-semibold text-sm sm:text-base text-[#18181b] mb-4">
              {q.question}
            </p>

            <div className="space-y-2">
              {q.options.map((opt, optIdx) => {
                let btnStyle = "border-[#e7e3da] bg-white hover:bg-[#f6f4ee] text-[#27272a]";
                if (isSelected) {
                  if (optIdx === q.answer) {
                    btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-medium";
                  } else if (optIdx === userAnswer && !isCorrect) {
                    btnStyle = "border-red-500 bg-red-50 text-red-900";
                  } else {
                    btnStyle = "border-[#e7e3da] bg-white opacity-50 text-gray-500";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectAnswer(q.id, optIdx)}
                    disabled={isSelected}
                    className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isSelected && optIdx === q.answer && (
                      <span className="text-emerald-600 font-bold ml-2">&#10003;</span>
                    )}
                    {isSelected && optIdx === userAnswer && !isCorrect && (
                      <span className="text-red-600 font-bold ml-2">&#10007;</span>
                    )}
                  </button>
                );
              })}
            </div>

            {isSelected && (
              <div className="mt-4 p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500 text-xs sm:text-sm text-blue-900">
                <span className="font-bold block mb-1">Architect Explanation:</span>
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>

  {/* 14 SENIOR WEB3 ARCHITECT INTERVIEW SCENARIOS */}
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e7e3da] shadow-sm">
    <div className="mb-6 pb-6 border-b border-[#e7e3da]">
      <h3 className="text-lg sm:text-xl font-bold text-[#18181b]">
        Part 2: Senior Web3 Full-Stack Architect Interview Scenarios (14 Real-World Case Studies)
      </h3>
      <p className="text-xs sm:text-sm text-[#52525b] mt-1">
        Categorized across Beginner, Intermediate, and Advanced full-stack DApp architecture interviews. Click each question to expand the complete technical resolution.
      </p>
    </div>

    <div className="space-y-4">
      {INTERVIEW_QUESTIONS.map((item, idx) => {
        const isOpen = expandedInterview === item.id;
        return (
          <div key={item.id} className="border border-[#e7e3da] rounded-xl overflow-hidden transition-all">
            <button
              onClick={() => toggleInterview(item.id)}
              className="w-full text-left p-4 sm:p-5 bg-[#fbfaf8] hover:bg-[#f6f4ee] flex items-center justify-between gap-4 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <span className="font-bold text-sm sm:text-base text-[#18181b]">
                  {item.q}
                </span>
              </div>
              <span className="text-[#ea580c] font-bold text-sm">
                {isOpen ? "\u2212" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="p-4 sm:p-6 bg-white border-t border-[#e7e3da] space-y-4 text-xs sm:text-sm text-[#27272a] leading-relaxed">
                <div className="p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500 text-amber-900">
                  <span className="font-bold block text-xs uppercase mb-1">Production Interview Scenario</span>
                  {item.scenario}
                </div>

                <div>
                  <h4 className="font-bold text-[#18181b] mb-2 text-sm sm:text-base">Architectural Resolution &amp; Implementation Strategy</h4>
                  <div className="whitespace-pre-line text-[#27272a]">{item.answer}</div>
                </div>

                <div>
                  <h5 className="font-bold text-[#18181b] mb-2 text-xs uppercase tracking-wider text-[#ea580c]">Key Architectural Takeaways:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    {item.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx}><strong>{takeaway}</strong></li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>

</section>
'''
