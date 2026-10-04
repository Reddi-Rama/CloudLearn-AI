const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const exam = await prisma.exam.findUnique({
    where: {
      courseId: "cmuth810z00011w7m2pjmhbkt",
    },
  });

  if (!exam) {
    throw new Error("AI Foundations exam not found.");
  }

  const filePath = path.join(
    __dirname,
    "../../frontend/src/content/exams/aimlExamBanks.ts"
  );

  const source = fs.readFileSync(filePath, "utf8");

  // Extract only the ai-foundations array.
  const startMarker = '"ai-foundations": [';
  const start = source.indexOf(startMarker);

  if (start === -1) {
    throw new Error('Could not find "ai-foundations" question bank.');
  }

  const arrayStart = start + startMarker.length;

  // Find the next course entry instead of depending on exact whitespace.
  const endMarker = '"machine-learning": [';
  const end = source.indexOf(endMarker, arrayStart);

  if (end === -1) {
    throw new Error(
      'Could not find the end of "ai-foundations" question bank.'
    );
  }

  const questionsText = source.slice(arrayStart, end);

  // Extract each question object.
  const questionRegex =
    /\{\s*"id":\s*"([^"]+)"[\s\S]*?"topic":\s*"([^"]*)"[\s\S]*?"question":\s*"([\s\S]*?)"[\s\S]*?"options":\s*\[([\s\S]*?)\][\s\S]*?"answer":\s*(\d+)[\s\S]*?"explanation":\s*"([\s\S]*?)"\s*\}/g;

  const matches = [...questionsText.matchAll(questionRegex)];

  if (matches.length !== 45) {
    throw new Error(
      `Expected 45 AI Foundations questions, found ${matches.length}.`
    );
  }

  const questions = matches.map((match, index) => {
    const options = [...match[4].matchAll(/"((?:\\.|[^"\\])*)"/g)]
      .map((option) => option[1]);

    return {
      question: match[3],
      options,
      correctAnswer: Number(match[5]),
      explanation: match[6],
      position: index + 1,
      examId: exam.id,
    };
  });

  await prisma.examQuestion.deleteMany({
    where: {
      examId: exam.id,
    },
  });

  await prisma.examQuestion.createMany({
    data: questions,
  });

  console.log("AI Foundations questions inserted successfully.");
  console.log("Exam ID:", exam.id);
  console.log("Questions inserted:", questions.length);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());