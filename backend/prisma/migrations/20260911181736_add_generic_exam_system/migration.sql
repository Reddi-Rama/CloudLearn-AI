-- CreateTable
CREATE TABLE "Exam" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "passingPercentage" INTEGER NOT NULL DEFAULT 70,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "courseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamQuestion" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "options" JSONB NOT NULL,
    "correctAnswer" INTEGER NOT NULL,
    "explanation" TEXT,
    "position" INTEGER NOT NULL,
    "examId" TEXT NOT NULL,

    CONSTRAINT "ExamQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "examId" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExamAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Exam_courseId_key" ON "Exam"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "ExamQuestion_examId_position_key" ON "ExamQuestion"("examId", "position");

-- CreateIndex
CREATE INDEX "ExamAttempt_userId_examId_idx" ON "ExamAttempt"("userId", "examId");

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamQuestion" ADD CONSTRAINT "ExamQuestion_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttempt" ADD CONSTRAINT "ExamAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamAttempt" ADD CONSTRAINT "ExamAttempt_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE CASCADE ON UPDATE CASCADE;
