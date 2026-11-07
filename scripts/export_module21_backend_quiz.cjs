const fs = require('fs');
const path = require('path');

const data = require('../src/Componets/aiFineTuningDomainData.js');
const backendQuiz = {
  id: "fine-tuning-domain",
  courseId: "ai-engineering",
  index: 21,
  name: "21. Fine-Tuning LLMs for Domain-Specific Applications",
  route: "/learning/ai/fine-tuning-domain",
  componentName: "AIFineTuningDomain",
  quiz: data.quizQuestions
};

const targetPath = path.resolve(__dirname, '../backend/content/ai-engineering/modules/fine-tuning-domain.json');
fs.writeFileSync(targetPath, JSON.stringify(backendQuiz, null, 2), 'utf-8');
console.log('Successfully written to', targetPath);
