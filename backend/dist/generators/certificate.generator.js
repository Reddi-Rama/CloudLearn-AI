"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCertificate = generateCertificate;
const pdf_lib_1 = require("pdf-lib");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const qrcode_1 = __importDefault(require("qrcode"));
/* ============================================================
   HELPERS
   ============================================================ */
function centerText(page, text, font, size, y, color, pageWidth) {
    const textWidth = font.widthOfTextAtSize(text, size);
    page.drawText(text, {
        x: (pageWidth - textWidth) /
            2,
        y,
        size,
        font,
        color,
    });
}
function centerTextInBox(page, text, font, size, y, color, x1, x2) {
    const textWidth = font.widthOfTextAtSize(text, size);
    page.drawText(text, {
        x: x1 +
            ((x2 - x1) - textWidth) /
                2,
        y,
        size,
        font,
        color,
    });
}
function fitFontSize(font, text, maxWidth, preferred, minimum) {
    let size = preferred;
    while (size > minimum &&
        font.widthOfTextAtSize(text, size) > maxWidth) {
        size -= 1;
    }
    return size;
}
function drawCloud(page, x, y, scale, color, opacity) {
    page.drawCircle({
        x,
        y,
        size: 25 * scale,
        color,
        opacity,
    });
    page.drawCircle({
        x: x + 28 * scale,
        y: y + 10 * scale,
        size: 38 * scale,
        color,
        opacity,
    });
    page.drawCircle({
        x: x + 64 * scale,
        y: y + 4 * scale,
        size: 28 * scale,
        color,
        opacity,
    });
    page.drawRectangle({
        x: x - 7 * scale,
        y: y - 18 * scale,
        width: 99 * scale,
        height: 24 * scale,
        color,
        opacity,
    });
}
/* ============================================================
   CERTIFICATE GENERATOR
   ============================================================ */
async function generateCertificate(data) {
    const pdfDoc = await pdf_lib_1.PDFDocument.create();
    const page = pdfDoc.addPage([
        842,
        595,
    ]);
    const { width, height, } = page.getSize();
    /* ==========================================================
       FONTS
       ========================================================== */
    const sans = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.Helvetica);
    const sansBold = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.HelveticaBold);
    const serif = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.TimesRoman);
    const serifBold = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.TimesRomanBold);
    /* ==========================================================
       COLORS
       ========================================================== */
    const sky = (0, pdf_lib_1.rgb)(0.78, 0.92, 1);
    const paleSky = (0, pdf_lib_1.rgb)(0.94, 0.985, 1);
    const paper = (0, pdf_lib_1.rgb)(0.985, 0.995, 1);
    const navy = (0, pdf_lib_1.rgb)(0.025, 0.065, 0.15);
    const blue = (0, pdf_lib_1.rgb)(0.04, 0.30, 0.79);
    const cyan = (0, pdf_lib_1.rgb)(0.02, 0.64, 0.88);
    const gold = (0, pdf_lib_1.rgb)(0.86, 0.60, 0.10);
    const softGold = (0, pdf_lib_1.rgb)(0.95, 0.86, 0.62);
    const darkText = (0, pdf_lib_1.rgb)(0.08, 0.12, 0.20);
    const muted = (0, pdf_lib_1.rgb)(0.37, 0.44, 0.54);
    const border = (0, pdf_lib_1.rgb)(0.72, 0.80, 0.90);
    const white = (0, pdf_lib_1.rgb)(1, 1, 1);
    /* ==========================================================
       1. SKY-BLUE PAPER BACKGROUND
       ========================================================== */
    page.drawRectangle({
        x: 0,
        y: 0,
        width,
        height,
        color: sky,
    });
    /*
     * Very soft cloud atmosphere around the page.
     */
    const cloudWhite = (0, pdf_lib_1.rgb)(1, 1, 1);
    drawCloud(page, 42, 523, 1.55, cloudWhite, 0.25);
    drawCloud(page, 675, 520, 1.45, cloudWhite, 0.23);
    drawCloud(page, 45, 82, 1.25, cloudWhite, 0.20);
    drawCloud(page, 700, 78, 1.50, cloudWhite, 0.23);
    /* ==========================================================
       2. MAIN CERTIFICATE PANEL
       ========================================================== */
    page.drawRectangle({
        x: 28,
        y: 28,
        width: width - 56,
        height: height - 56,
        color: paper,
    });
    /*
     * Outer frame
     */
    page.drawRectangle({
        x: 18,
        y: 18,
        width: width - 36,
        height: height - 36,
        borderWidth: 1.2,
        borderColor: navy,
    });
    /*
     * Gold frame
     */
    page.drawRectangle({
        x: 30,
        y: 30,
        width: width - 60,
        height: height - 60,
        borderWidth: 0.9,
        borderColor: gold,
    });
    /*
     * Blue inner frame
     */
    page.drawRectangle({
        x: 44,
        y: 44,
        width: width - 88,
        height: height - 88,
        borderWidth: 1.1,
        borderColor: blue,
    });
    /* ==========================================================
       3. MAIN CLOUDLEARN LOGO WATERMARK
       ========================================================== */
    const logoPath = path_1.default.join(process.cwd(), "assets", "certificates", "cloudlearn-logo.png");
    let logoImage = null;
    if (fs_1.default.existsSync(logoPath)) {
        const logoBytes = fs_1.default.readFileSync(logoPath);
        try {
            logoImage =
                await pdfDoc.embedPng(logoBytes);
        }
        catch {
            logoImage = null;
        }
    }
    /*
     * Actual CloudLearn logo as
     * a very subtle central watermark.
     */
    if (logoImage) {
        const watermarkScale = Math.min(315 / logoImage.width, 185 / logoImage.height);
        const watermarkWidth = logoImage.width *
            watermarkScale;
        const watermarkHeight = logoImage.height *
            watermarkScale;
        page.drawImage(logoImage, {
            x: width / 2 -
                watermarkWidth / 2,
            y: 205,
            width: watermarkWidth,
            height: watermarkHeight,
            opacity: 0.10,
        });
    }
    /*
     * Soft cloud shapes behind
     * the central content.
     */
    drawCloud(page, 120, 235, 1.20, (0, pdf_lib_1.rgb)(0.70, 0.87, 0.98), 0.06);
    drawCloud(page, 630, 320, 1.30, (0, pdf_lib_1.rgb)(0.70, 0.87, 0.98), 0.055);
    /* ==========================================================
       4. REAL CLOUDLEARN HEADER
       ========================================================== */
    /*
     * ----------------------------------------------------------
     * REAL CLOUDLEARN LOGO
     * ----------------------------------------------------------
     */
    if (!logoImage) {
        throw new Error("CloudLearn logo could not be loaded.");
    }
    /*
     * Give the logo a dedicated header area.
     * This prevents clipping and keeps the tagline
     * visually attached to the brand.
     */
    const headerScale = Math.min(142 / logoImage.width, 48 / logoImage.height);
    const headerWidth = logoImage.width *
        headerScale;
    const headerHeight = logoImage.height *
        headerScale;
    page.drawImage(logoImage, {
        x: 58,
        y: 491,
        width: headerWidth,
        height: headerHeight,
    });
    page.drawText("LEARN | BUILD | GROW", {
        x: 61,
        y: 476,
        size: 7,
        font: sans,
        color: muted,
    });
    /*
     * ----------------------------------------------------------
     * TOP-RIGHT CREDENTIAL MARK
     * ----------------------------------------------------------
     */
    centerTextInBox(page, "OFFICIAL CREDENTIAL", sansBold, 6.8, 519, muted, 667, 782);
    centerTextInBox(page, "CLOUDLEARN", sansBold, 7, 506, navy, 667, 782);
    page.drawLine({
        start: {
            x: 702,
            y: 493,
        },
        end: {
            x: 762,
            y: 493,
        },
        thickness: 1.4,
        color: gold,
    });
    /* ==========================================================
         5. MAIN TITLE MAIN TITLE
         ========================================================== */
    centerText(page, "CERTIFICATE", serifBold, 37, 421, navy, width);
    centerText(page, "OF COMPLETION", sansBold, 15, 394, blue, width);
    page.drawLine({
        start: {
            x: 262,
            y: 378,
        },
        end: {
            x: 395,
            y: 378,
        },
        thickness: 1.3,
        color: gold,
    });
    page.drawCircle({
        x: width / 2,
        y: 378,
        size: 3.8,
        color: gold,
    });
    page.drawLine({
        start: {
            x: 447,
            y: 378,
        },
        end: {
            x: 580,
            y: 378,
        },
        thickness: 1.3,
        color: gold,
    });
    /* ==========================================================
       6. RECIPIENT
       ========================================================== */
    centerText(page, "THIS CERTIFICATE IS PROUDLY PRESENTED TO", sansBold, 8, 348, muted, width);
    const studentSize = fitFontSize(serifBold, data.studentName, 590, 31, 20);
    centerText(page, data.studentName, serifBold, studentSize, 308, navy, width);
    const studentWidth = serifBold.widthOfTextAtSize(data.studentName, studentSize);
    const studentLineWidth = Math.min(500, studentWidth + 90);
    page.drawLine({
        start: {
            x: (width -
                studentLineWidth) /
                2,
            y: 292,
        },
        end: {
            x: (width +
                studentLineWidth) /
                2,
            y: 292,
        },
        thickness: 0.9,
        color: softGold,
    });
    page.drawCircle({
        x: width / 2,
        y: 292,
        size: 2.8,
        color: gold,
    });
    /* ==========================================================
       7. COMPLETION MESSAGE
       ========================================================== */
    centerText(page, "has successfully completed the comprehensive learning path", sans, 10, 264, muted, width);
    centerText(page, "and final assessment for", sans, 10, 248, muted, width);
    /* ==========================================================
       8. COURSE
       ========================================================== */
    const courseSize = fitFontSize(sansBold, data.courseTitle, 540, 26, 17);
    centerText(page, data.courseTitle, sansBold, courseSize, 210, blue, width);
    const courseWidth = sansBold.widthOfTextAtSize(data.courseTitle, courseSize);
    page.drawLine({
        start: {
            x: (width -
                courseWidth) /
                2 -
                12,
            y: 199,
        },
        end: {
            x: (width +
                courseWidth) /
                2 +
                12,
            y: 199,
        },
        thickness: 0.8,
        color: (0, pdf_lib_1.rgb)(0.70, 0.83, 0.96),
    });
    /* ==========================================================
       9. ASSESSMENT STATUS
       ========================================================== */
    page.drawRectangle({
        x: 314,
        y: 163,
        width: 214,
        height: 29,
        color: paleSky,
        borderWidth: 1,
        borderColor: (0, pdf_lib_1.rgb)(0.70, 0.82, 0.96),
    });
    centerText(page, "CLOUDLEARN COURSE & FINAL TEST COMPLETED SUCCESSFULLY", sansBold, 6.7, 173, navy, width);
    /* ==========================================================
       10. LOWER INFORMATION AREA
       ========================================================== */
    page.drawLine({
        start: {
            x: 62,
            y: 139,
        },
        end: {
            x: 780,
            y: 139,
        },
        thickness: 0.8,
        color: border,
    });
    /*
     * Columns:
     *
     * 62 - 218     seal
     * 238 - 332    date
     * 350 - 520    signature
     * 538 - 662    ID
     * 684 - 780    QR
     */
    page.drawLine({
        start: {
            x: 225,
            y: 58,
        },
        end: {
            x: 225,
            y: 129,
        },
        thickness: 0.7,
        color: border,
    });
    page.drawLine({
        start: {
            x: 345,
            y: 58,
        },
        end: {
            x: 345,
            y: 129,
        },
        thickness: 0.7,
        color: border,
    });
    page.drawLine({
        start: {
            x: 532,
            y: 58,
        },
        end: {
            x: 532,
            y: 129,
        },
        thickness: 0.7,
        color: border,
    });
    page.drawLine({
        start: {
            x: 673,
            y: 58,
        },
        end: {
            x: 673,
            y: 129,
        },
        thickness: 0.7,
        color: border,
    });
    /* ==========================================================
       11. CERTIFIED SEAL
       ========================================================== */
    page.drawCircle({
        x: 137,
        y: 94,
        size: 34,
        color: gold,
    });
    page.drawCircle({
        x: 137,
        y: 94,
        size: 27,
        color: navy,
    });
    page.drawCircle({
        x: 137,
        y: 94,
        size: 22,
        borderWidth: 1,
        borderColor: gold,
    });
    centerTextInBox(page, "CLOUDLEARN", sansBold, 5.3, 103, white, 105, 169);
    centerTextInBox(page, "CERTIFIED", sansBold, 7.2, 89, white, 105, 169);
    page.drawCircle({
        x: 121,
        y: 77,
        size: 1.7,
        color: gold,
    });
    page.drawCircle({
        x: 153,
        y: 77,
        size: 1.7,
        color: gold,
    });
    /* ==========================================================
       12. ISSUE DATE
       ========================================================== */
    page.drawText("ISSUED ON", {
        x: 242,
        y: 106,
        size: 6.8,
        font: sansBold,
        color: muted,
    });
    page.drawText(data.issueDate, {
        x: 242,
        y: 89,
        size: 9.5,
        font: sansBold,
        color: darkText,
    });
    /* ==========================================================
       13. SIGNATURE BLOCK
       ========================================================== */
    const signaturePath = path_1.default.join(process.cwd(), "assets", "certificates", "sekhar-signature.png");
    if (!fs_1.default.existsSync(signaturePath)) {
        throw new Error("Sekhar signature not found at " +
            signaturePath);
    }
    const signatureBytes = fs_1.default.readFileSync(signaturePath);
    const signatureImage = await pdfDoc.embedPng(signatureBytes);
    const signatureScale = Math.min(105 / signatureImage.width, 31 / signatureImage.height);
    const signatureWidth = signatureImage.width *
        signatureScale;
    const signatureHeight = signatureImage.height *
        signatureScale;
    const signatureCenter = 438;
    page.drawImage(signatureImage, {
        x: signatureCenter -
            signatureWidth / 2,
        y: 94,
        width: signatureWidth,
        height: signatureHeight,
    });
    page.drawLine({
        start: {
            x: 368,
            y: 77,
        },
        end: {
            x: 508,
            y: 77,
        },
        thickness: 0.8,
        color: border,
    });
    centerTextInBox(page, "Sekhar.M", sansBold, 9.5, 61, navy, 350, 526);
    centerTextInBox(page, "Founder & CEO", sans, 6.8, 48, muted, 350, 526);
    /* ==========================================================
       14. CERTIFICATE ID
       ========================================================== */
    page.drawText("CERTIFICATE ID", {
        x: 548,
        y: 106,
        size: 6.7,
        font: sansBold,
        color: muted,
    });
    const idSize = fitFontSize(sansBold, data.certificateId, 114, 8.2, 6.5);
    page.drawText(data.certificateId, {
        x: 548,
        y: 89,
        size: idSize,
        font: sansBold,
        color: darkText,
    });
    /* ==========================================================
       15. QR VERIFICATION
       ========================================================== */
    const verificationBase = process.env
        .CERTIFICATE_VERIFY_BASE_URL ||
        "http://localhost:3000/verify-certificate";
    const verificationUrl = `${verificationBase}?certificateId=${encodeURIComponent(data.certificateId)}`;
    const qrDataUrl = await qrcode_1.default.toDataURL(verificationUrl, {
        errorCorrectionLevel: "H",
        margin: 1,
        width: 500,
    });
    const qrBase64 = qrDataUrl.replace(/^data:image\/png;base64,/, "");
    const qrBytes = Buffer.from(qrBase64, "base64");
    const qrImage = await pdfDoc.embedPng(qrBytes);
    /*
     * Dedicated QR card.
     * Raised slightly so the label does not touch
     * the bottom frame.
     */
    page.drawRectangle({
        x: 691,
        y: 68,
        width: 82,
        height: 67,
        color: white,
        borderWidth: 1,
        borderColor: border,
    });
    page.drawImage(qrImage, {
        x: 700,
        y: 73,
        width: 64,
        height: 55,
    });
    centerTextInBox(page, "SCAN TO VERIFY", sansBold, 6, 51, navy, 684, 780);
    /* ==========================================================
         16. FOOTER
         ========================================================== */
    centerText(page, "LEARN  |  BUILD  |  GROW", sansBold, 7, 32, navy, width);
    centerText(page, "www.cloudlearn.com", sans, 6.2, 19, muted, width);
    /* ==========================================================
       17. SAVE
       ========================================================== */
    const pdfBytes = await pdfDoc.save();
    const storageDirectory = path_1.default.join(process.cwd(), "storage", "certificates");
    fs_1.default.mkdirSync(storageDirectory, {
        recursive: true,
    });
    const filePath = path_1.default.join(storageDirectory, `${data.certificateId}.pdf`);
    fs_1.default.writeFileSync(filePath, pdfBytes);
    return filePath;
}
//# sourceMappingURL=certificate.generator.js.map