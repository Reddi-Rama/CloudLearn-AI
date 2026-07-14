import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

interface CertificateData {
  studentName: string;
  courseTitle: string;
  certificateId: string;
  issueDate: string;
}

export async function generateCertificate(
  data: CertificateData
) {
  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage([842, 595]); // A4 Landscape

  const { width, height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Background
  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: rgb(0.98, 0.98, 0.98),
  });

  // Border
  page.drawRectangle({
    x: 25,
    y: 25,
    width: width - 50,
    height: height - 50,
    borderWidth: 3,
    borderColor: rgb(0.1, 0.2, 0.6),
  });

  // Title
  page.drawText("CLOUDLEARN", {
    x: 280,
    y: 520,
    size: 28,
    font: bold,
    color: rgb(0.1, 0.2, 0.6),
  });

  page.drawText("Certificate of Completion", {
    x: 255,
    y: 480,
    size: 20,
    font: font,
  });

  page.drawText("This certifies that", {
    x: 330,
    y: 420,
    size: 14,
    font,
  });

  page.drawText(data.studentName, {
    x: 250,
    y: 375,
    size: 28,
    font: bold,
  });

  page.drawText("has successfully completed", {
    x: 285,
    y: 335,
    size: 14,
    font,
  });

  page.drawText(data.courseTitle, {
    x: 240,
    y: 290,
    size: 24,
    font: bold,
    color: rgb(0.1, 0.2, 0.6),
  });

  page.drawText(`Issued: ${data.issueDate}`, {
    x: 80,
    y: 100,
    size: 12,
    font,
  });

  page.drawText(`Certificate ID: ${data.certificateId}`, {
    x: 520,
    y: 100,
    size: 12,
    font,
  });

  page.drawText("CloudLearn", {
    x: 355,
    y: 60,
    size: 14,
    font: bold,
  });

  const pdfBytes = await pdfDoc.save();

  const filePath = path.join(
    process.cwd(),
    "storage",
    "certificates",
    `${data.certificateId}.pdf`
  );

  fs.writeFileSync(filePath, pdfBytes);

  return filePath;
}