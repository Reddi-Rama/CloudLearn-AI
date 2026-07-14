import { generateCertificate } from "../src/generators/certificate.generator";

async function test() {
  try {
    const filePath = await generateCertificate({
      studentName: "M. Teja Akash",
      courseTitle: "Python Development",
      certificateId: "CL-PY-000001",
      issueDate: new Date().toLocaleDateString("en-IN"),
    });

    console.log("\n✅ Certificate Generated Successfully!");
    console.log("📄 File:", filePath);
  } catch (error) {
    console.error("❌ Error generating certificate:");
    console.error(error);
  }
}

test();