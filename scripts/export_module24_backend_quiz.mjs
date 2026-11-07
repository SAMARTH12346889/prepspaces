import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { quizQuestions } from '../src/Componets/aiFinalCapstoneData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backendQuiz = {
  id: "final-capstone",
  courseId: "ai-engineering",
  index: 24,
  name: "24. Final AI Engineering Capstone: Enterprise Platform & Portfolio",
  route: "/learning/ai/final-capstone",
  componentName: "AIFinalCapstone",
  quiz: quizQuestions
};

const targetPath = path.resolve(__dirname, '../backend/content/ai-engineering/modules/final-capstone.json');
fs.writeFileSync(targetPath, JSON.stringify(backendQuiz, null, 2), 'utf-8');
console.log('Successfully written', quizQuestions.length, 'quiz questions to', targetPath);
