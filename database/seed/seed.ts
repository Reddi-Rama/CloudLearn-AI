// Database seeding script for system admin accounts and basic learning courses.
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // TODO: Seed demo values
  console.log("Seeding database schema demo metadata...");
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
