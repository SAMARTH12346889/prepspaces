const fs = require('fs');
const path = require('path');

const data = require('../src/Componets/aiScalabilityOptimizationData.js');
const backendQuiz = {
  id: "scalability-optimization",
  courseId: "ai-engineering",
  index: 20,
  name: "20. AI Scalability, Optimization & Observability",
  route: "/learning/ai/scalability-optimization",
  componentName: "AIScalabilityOptimization",
  quiz: data.quizQuestions
};

const targetPath = path.resolve(__dirname, '../backend/content/ai-engineering/modules/scalability-optimization.json');
fs.writeFileSync(targetPath, JSON.stringify(backendQuiz, null, 2), 'utf-8');
console.log('Successfully written to', targetPath);
