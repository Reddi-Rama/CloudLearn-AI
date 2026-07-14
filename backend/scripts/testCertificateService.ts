import { certificateService } from "../src/modules/certificate/certificate.service";

async function test() {
  try {
    // 👇 Replace this with an actual user ID from your database
    const userId = "cmrg2crjf0000wforh8hn0vie";

    const certificate = await certificateService.generate(
      userId,
      "python-development",
      "Python Development"
    );

    console.log("\n🎉 Certificate Created Successfully!\n");
    console.log(certificate);

  } catch (error) {
    console.error(error);
  }
}

test();