import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { quizQuestions } from '../src/Componets/aiSystemDesignData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backendQuiz = {
  id: "ai-system-design",
  courseId: "ai-engineering",
  index: 23,
  name: "23. AI System Design & Real-World Architecture",
  route: "/learning/ai/system-design",
  componentName: "AISystemDesign",
  quiz: quizQuestions
};

const targetPath = path.resolve(__dirname, '../backend/content/ai-engineering/modules/ai-system-design.json');
fs.writeFileSync(targetPath, JSON.stringify(backendQuiz, null, 2), 'utf-8');
console.log('Successfully written', quizQuestions.length, 'quiz questions to', targetPath);
