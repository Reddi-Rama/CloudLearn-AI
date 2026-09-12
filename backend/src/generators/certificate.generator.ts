import {
  PDFDocument,
  StandardFonts,
  rgb,
} from "pdf-lib";

import fs from "fs";
import path from "path";
import QRCode from "qrcode";

interface CertificateData {
  studentName: string;
  courseTitle: string;
  certificateId: string;
  issueDate: string;
}

function centerText(
  page: any,
  text: string,
  font: any,
  size: number,
  y: number,
  color: any,
  pageWidth: number
) {
  const width = font.widthOfTextAtSize(text, size);

  page.drawText(text, {
    x: (pageWidth - width) / 2,
    y,
    size,
    font,
    color,
  });
}

export async function generateCertificate(
  data: CertificateData
) {
  const pdfDoc = await PDFDocument.create();

  /*
   * A4 landscape
   */
  const page = pdfDoc.addPage([
    842,
    595,
  ]);

  const { width, height } = page.getSize();

  /*
   * Fonts
   */
  const regular =
    await pdfDoc.embedFont(
      StandardFonts.Helvetica
    );

  const bold =
    await pdfDoc.embedFont(
      StandardFonts.HelveticaBold
    );

  /*
   * CloudLearn palette
   */
  const navy = rgb(
    0.025,
    0.06,
    0.14
  );

  const blue = rgb(
    0.07,
    0.29,
    0.75
  );

  const cyan = rgb(
    0.03,
    0.68,
    0.86
  );

  const gold = rgb(
    0.84,
    0.59,
    0.12
  );

  const darkText = rgb(
    0.10,
    0.13,
    0.20
  );

  const muted = rgb(
    0.38,
    0.43,
    0.52
  );

  const softBlue = rgb(
    0.95,
    0.97,
    0.995
  );

  const white = rgb(
    1,
    1,
    1
  );

  /*
   * ==========================================================
   * BACKGROUND
   * ==========================================================
   */

  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: white,
  });

  /*
   * Top navy band
   */
  page.drawRectangle({
    x: 0,
    y: height - 92,
    width,
    height: 92,
    color: navy,
  });

  /*
   * Bottom navy accent
   */
  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height: 18,
    color: navy,
  });

  /*
   * Outer premium frame
   */
  page.drawRectangle({
    x: 30,
    y: 28,
    width: width - 60,
    height: height - 56,
    borderWidth: 1,
    borderColor: rgb(
      0.78,
      0.82,
      0.89
    ),
  });

  /*
   * Inner blue frame
   */
  page.drawRectangle({
    x: 48,
    y: 44,
    width: width - 96,
    height: height - 88,
    borderWidth: 2,
    borderColor: blue,
  });

  /*
   * ==========================================================
   * BRAND LOGO
   * ==========================================================
   */

  const logoPath = path.join(
    process.cwd(),
    "assets",
    "certificates",
    "cloudlearn-logo.png"
  );

  if (!fs.existsSync(logoPath)) {
    throw new Error(
      "CloudLearn logo not found at " +
        logoPath
    );
  }

  const logoBytes =
    fs.readFileSync(logoPath);

  const logoImage =
    logoPath.toLowerCase().endsWith(".png")
      ? await pdfDoc.embedPng(logoBytes)
      : await pdfDoc.embedJpg(logoBytes);

  const logoScale =
    Math.min(
      175 / logoImage.width,
      70 / logoImage.height
    );

  const logoWidth =
    logoImage.width * logoScale;

  const logoHeight =
    logoImage.height * logoScale;

  page.drawImage(logoImage, {
    x: 72,
    y: height - 78,
    width: logoWidth,
    height: logoHeight,
  });

  /*
   * Tagline
   */
  page.drawText(
    "LEARN  •  BUILD  •  GROW",
    {
      x: 250,
      y: height - 52,
      size: 9,
      font: regular,
      color: rgb(
        0.74,
        0.84,
        0.98
      ),
    }
  );

  /*
   * Top right certified seal
   */
  page.drawCircle({
    x: width - 80,
    y: height - 46,
    size: 27,
    color: gold,
  });

  page.drawCircle({
    x: width - 80,
    y: height - 46,
    size: 20,
    borderWidth: 1.5,
    borderColor: white,
  });

  centerText(
    page,
    "CERTIFIED",
    bold,
    5.5,
    height - 48,
    white,
    width - 160
  );

  /*
   * ==========================================================
   * TITLE
   * ==========================================================
   */

  centerText(
    page,
    "CERTIFICATE",
    bold,
    32,
    438,
    navy,
    width
  );

  centerText(
    page,
    "OF COMPLETION",
    regular,
    16,
    411,
    blue,
    width
  );

  page.drawLine({
    start: {
      x: 270,
      y: 393,
    },
    end: {
      x: 572,
      y: 393,
    },
    thickness: 1.5,
    color: gold,
  });

  page.drawCircle({
    x: width / 2,
    y: 393,
    size: 4,
    color: gold,
  });

  /*
   * ==========================================================
   * RECIPIENT
   * ==========================================================
   */

  centerText(
    page,
    "This certificate is proudly presented to",
    regular,
    12,
    360,
    muted,
    width
  );

  const studentSize =
    data.studentName.length > 24
      ? 24
      : 30;

  centerText(
    page,
    data.studentName,
    bold,
    studentSize,
    314,
    navy,
    width
  );

  const studentWidth =
    bold.widthOfTextAtSize(
      data.studentName,
      studentSize
    );

  page.drawLine({
    start: {
      x:
        (width - studentWidth) / 2 -
        8,
      y: 302,
    },
    end: {
      x:
        (width + studentWidth) / 2 +
        8,
      y: 302,
    },
    thickness: 1,
    color: gold,
  });

  centerText(
    page,
    "has successfully completed the comprehensive learning path and final assessment for",
    regular,
    10.5,
    267,
    muted,
    width
  );

  /*
   * ==========================================================
   * COURSE TITLE
   * ==========================================================
   */

  const courseSize =
    data.courseTitle.length > 32
      ? 19
      : 25;

  centerText(
    page,
    data.courseTitle,
    bold,
    courseSize,
    224,
    blue,
    width
  );

  /*
   * ==========================================================
   * COMPLETION BADGE
   * ==========================================================
   */

  page.drawRectangle({
    x: 303,
    y: 169,
    width: 236,
    height: 31,
    color: softBlue,
    borderWidth: 1,
    borderColor: rgb(
      0.78,
      0.84,
      0.93
    ),
  });

  centerText(
    page,
    "FINAL ASSESSMENT COMPLETED",
    bold,
    8,
    181,
    navy,
    width
  );

  /*
   * ==========================================================
   * SIGNATURE
   * ==========================================================
   */

  const signaturePath =
    path.join(
      process.cwd(),
      "assets",
      "certificates",
      "sekhar-signature.png"
    );

  if (!fs.existsSync(signaturePath)) {
    throw new Error(
      "Sekhar signature not found at " +
        signaturePath
    );
  }

  const signatureBytes =
    fs.readFileSync(signaturePath);

  const signatureImage =
    await pdfDoc.embedPng(
      signatureBytes
    );

  const signatureScale =
    Math.min(
      130 / signatureImage.width,
      42 / signatureImage.height
    );

  const signatureWidth =
    signatureImage.width *
    signatureScale;

  const signatureHeight =
    signatureImage.height *
    signatureScale;

  page.drawImage(signatureImage, {
    x: 344,
    y: 111,
    width: signatureWidth,
    height: signatureHeight,
  });

  page.drawLine({
    start: {
      x: 325,
      y: 105,
    },
    end: {
      x: 517,
      y: 105,
    },
    thickness: 0.8,
    color: rgb(
      0.70,
      0.74,
      0.82
    ),
  });

  centerText(
    page,
    "Sekhar.M",
    bold,
    10,
    88,
    navy,
    width
  );

  centerText(
    page,
    "Founder & CEO",
    regular,
    7.5,
    75,
    muted,
    width
  );

  /*
   * ==========================================================
   * DATE
   * ==========================================================
   */

  page.drawText(
    "ISSUED ON",
    {
      x: 72,
      y: 105,
      size: 7,
      font: bold,
      color: muted,
    }
  );

  page.drawText(
    data.issueDate,
    {
      x: 72,
      y: 89,
      size: 11,
      font: bold,
      color: darkText,
    }
  );

  /*
   * ==========================================================
   * QR CODE
   * ==========================================================
   */

  const verificationBase =
    process.env.CERTIFICATE_VERIFY_BASE_URL ||
    "http://localhost:3000/verify-certificate";

  const verificationUrl =
    `${verificationBase}?certificateId=${encodeURIComponent(
      data.certificateId
    )}`;

  const qrDataUrl =
    await QRCode.toDataURL(
      verificationUrl,
      {
        errorCorrectionLevel: "H",
        margin: 1,
        width: 400,
      }
    );

  const qrBase64 =
    qrDataUrl.replace(
      /^data:image\/png;base64,/,
      ""
    );

  const qrBytes =
    Buffer.from(
      qrBase64,
      "base64"
    );

  const qrImage =
    await pdfDoc.embedPng(qrBytes);

  page.drawRectangle({
    x: 675,
    y: 60,
    width: 82,
    height: 82,
    color: white,
    borderWidth: 1,
    borderColor: rgb(
      0.75,
      0.80,
      0.88
    ),
  });

  page.drawImage(qrImage, {
    x: 684,
    y: 69,
    width: 64,
    height: 64,
  });

  centerText(
    page,
    "SCAN TO VERIFY",
    bold,
    6.5,
    49,
    navy,
    740
  );

  /*
   * ==========================================================
   * CERTIFICATE ID
   * ==========================================================
   */

  page.drawText(
    "CERTIFICATE ID",
    {
      x: 530,
      y: 105,
      size: 7,
      font: bold,
      color: muted,
    }
  );

  page.drawText(
    data.certificateId,
    {
      x: 530,
      y: 89,
      size: 9,
      font: bold,
      color: darkText,
    }
  );

  /*
   * ==========================================================
   * DECORATIVE SIDE ELEMENTS
   * ==========================================================
   */

  for (let i = 0; i < 5; i++) {
    const dotColor =
      i === 2
        ? gold
        : cyan;

    page.drawCircle({
      x: 65,
      y: 205 + i * 15,
      size: i === 2 ? 4 : 2,
      color: dotColor,
    });

    page.drawCircle({
      x: width - 65,
      y: 205 + i * 15,
      size: i === 2 ? 4 : 2,
      color: dotColor,
    });
  }

  /*
   * ==========================================================
   * FOOTER
   * ==========================================================
   */

  centerText(
    page,
    "CloudLearn",
    bold,
    11,
    45,
    navy,
    width
  );

  centerText(
    page,
    "www.cloudlearn.com  •  LEARN • BUILD • GROW",
    regular,
    6.5,
    31,
    muted,
    width
  );

  /*
   * ==========================================================
   * WRITE FILE
   * ==========================================================
   */

  const pdfBytes =
    await pdfDoc.save();

  const storageDirectory =
    path.join(
      process.cwd(),
      "storage",
      "certificates"
    );

  fs.mkdirSync(
    storageDirectory,
    {
      recursive: true,
    }
  );

  const filePath =
    path.join(
      storageDirectory,
      `${data.certificateId}.pdf`
    );

  fs.writeFileSync(
    filePath,
    pdfBytes
  );

  return filePath;
}
