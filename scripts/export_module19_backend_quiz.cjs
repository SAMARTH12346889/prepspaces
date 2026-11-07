const fs = require('fs');
const path = require('path');

const data = require('../src/Componets/aiMlopsDeploymentData.js');
const backendQuiz = {
  id: "mlops-deployment",
  courseId: "ai-engineering",
  index: 19,
  name: "19. AI MLOps, Deployment & CI/CD",
  route: "/learning/ai/mlops-deployment",
  componentName: "AIMlopsDeployment",
  quiz: data.quizQuestions
};

const targetPath = path.resolve(__dirname, '../backend/content/ai-engineering/modules/mlops-deployment.json');
fs.writeFileSync(targetPath, JSON.stringify(backendQuiz, null, 2), 'utf-8');
console.log('Successfully written to', targetPath);
