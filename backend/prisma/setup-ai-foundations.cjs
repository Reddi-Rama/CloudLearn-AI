const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const domain = await prisma.domain.findUnique({
    where: {
      slug: "artificial-intelligence",
    },
  });

  if (!domain) {
    throw new Error(
      'Domain "artificial-intelligence" was not found.'
    );
  }

  const course = await prisma.course.upsert({
    where: {
      slug: "ai-foundations",
    },
    update: {
      title: "AI Foundations",
      description:
        "Learn the foundations of Artificial Intelligence through structured lessons and assessment.",
      level: "BEGINNER",
      price: 0,
      isPublished: true,
      domainId: domain.id,
    },
    create: {
      title: "AI Foundations",
      slug: "ai-foundations",
      description:
        "Learn the foundations of Artificial Intelligence through structured lessons and assessment.",
      level: "BEGINNER",
      price: 0,
      isPublished: true,
      domainId: domain.id,
    },
  });

  console.log("AI Foundations course ready.");
  console.log("Course ID:", course.id);
  console.log("Course slug:", course.slug);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });