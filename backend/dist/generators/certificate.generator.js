"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCertificate = generateCertificate;
const pdf_lib_1 = require("pdf-lib");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function centerText(page, text, font, size, y, color, pageWidth) {
    const textWidth = font.widthOfTextAtSize(text, size);
    page.drawText(text, {
        x: (pageWidth - textWidth) / 2,
        y,
        size,
        font,
        color,
    });
}
async function generateCertificate(data) {
    const pdfDoc = await pdf_lib_1.PDFDocument.create();
    /*
     * A4 Landscape
     */
    const page = pdfDoc.addPage([
        842,
        595,
    ]);
    const { width, height } = page.getSize();
    const regular = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.Helvetica);
    const bold = await pdfDoc.embedFont(pdf_lib_1.StandardFonts.HelveticaBold);
    /*
     * Professional CloudLearn palette.
     */
    const navy = (0, pdf_lib_1.rgb)(0.035, 0.075, 0.16);
    const blue = (0, pdf_lib_1.rgb)(0.08, 0.28, 0.72);
    const cyan = (0, pdf_lib_1.rgb)(0.05, 0.68, 0.85);
    const gold = (0, pdf_lib_1.rgb)(0.82, 0.58, 0.12);
    const darkText = (0, pdf_lib_1.rgb)(0.12, 0.15, 0.22);
    const muted = (0, pdf_lib_1.rgb)(0.38, 0.42, 0.50);
    const soft = (0, pdf_lib_1.rgb)(0.96, 0.975, 0.995);
    const white = (0, pdf_lib_1.rgb)(1, 1, 1);
    /*
     * =========================================================
     * BACKGROUND
     * =========================================================
     */
    page.drawRectangle({
        x: 0,
        y: 0,
        width,
        height,
        color: white,
    });
    /*
     * Top premium band.
     */
    page.drawRectangle({
        x: 0,
        y: height - 95,
        width,
        height: 95,
        color: navy,
    });
    /*
     * Bottom premium band.
     */
    page.drawRectangle({
        x: 0,
        y: 0,
        width,
        height: 18,
        color: navy,
    });
    /*
     * Main soft content panel.
     */
    page.drawRectangle({
        x: 38,
        y: 32,
        width: width - 76,
        height: height - 64,
        borderWidth: 1,
        borderColor: (0, pdf_lib_1.rgb)(0.82, 0.85, 0.90),
        color: white,
    });
    /*
     * Inner accent frame.
     */
    page.drawRectangle({
        x: 50,
        y: 44,
        width: width - 100,
        height: height - 88,
        borderWidth: 2,
        borderColor: blue,
    });
    /*
     * =========================================================
     * BRAND
     * =========================================================
     */
    /*
     * CL monogram.
     */
    page.drawCircle({
        x: 82,
        y: height - 47,
        size: 26,
        color: blue,
    });
    centerText(page, "CL", bold, 12, height - 52, white, 164);
    page.drawText("CLOUDLEARN", {
        x: 116,
        y: height - 54,
        size: 18,
        font: bold,
        color: white,
    });
    page.drawText("LEARN  |  BUILD  |  GROW", {
        x: 116,
        y: height - 72,
        size: 8,
        font: regular,
        color: (0, pdf_lib_1.rgb)(0.72, 0.82, 0.96),
    });
    /*
     * Certificate badge.
     */
    page.drawCircle({
        x: width - 83,
        y: height - 48,
        size: 26,
        color: gold,
    });
    page.drawCircle({
        x: width - 83,
        y: height - 48,
        size: 19,
        borderWidth: 1.5,
        borderColor: white,
    });
    centerText(page, "CERTIFIED", bold, 6, height - 50, white, width - 166);
    /*
     * =========================================================
     * MAIN TITLE
     * =========================================================
     */
    centerText(page, "CERTIFICATE", bold, 31, 445, navy, width);
    centerText(page, "OF COMPLETION", regular, 15, 419, blue, width);
    /*
     * Accent divider.
     */
    page.drawLine({
        start: {
            x: 270,
            y: 399,
        },
        end: {
            x: 572,
            y: 399,
        },
        thickness: 1.5,
        color: gold,
    });
    page.drawCircle({
        x: 421,
        y: 399,
        size: 4,
        color: gold,
    });
    /*
     * =========================================================
     * RECIPIENT
     * =========================================================
     */
    centerText(page, "This certificate is proudly presented to", regular, 12, 364, muted, width);
    centerText(page, data.studentName, bold, 30, 318, navy, width);
    /*
     * Name underline.
     */
    const nameWidth = bold.widthOfTextAtSize(data.studentName, 30);
    page.drawLine({
        start: {
            x: (width - nameWidth) / 2,
            y: 306,
        },
        end: {
            x: (width + nameWidth) / 2,
            y: 306,
        },
        thickness: 1,
        color: (0, pdf_lib_1.rgb)(0.75, 0.78, 0.85),
    });
    /*
     * Completion statement.
     */
    centerText(page, "has successfully completed the", regular, 12, 272, muted, width);
    /*
     * Course title.
     */
    const courseSize = data.courseTitle.length > 34
        ? 20
        : 25;
    centerText(page, data.courseTitle, bold, courseSize, 228, blue, width);
    /*
     * =========================================================
     * COMPLETION BADGE
     * =========================================================
     */
    page.drawRectangle({
        x: 310,
        y: 171,
        width: 222,
        height: 32,
        color: soft,
        borderWidth: 1,
        borderColor: (0, pdf_lib_1.rgb)(0.82, 0.86, 0.93),
    });
    centerText(page, "FINAL ASSESSMENT COMPLETED", bold, 8, 183, navy, width);
    /*
     * =========================================================
     * FOOTER DETAILS
     * =========================================================
     */
    page.drawLine({
        start: {
            x: 72,
            y: 126,
        },
        end: {
            x: 770,
            y: 126,
        },
        thickness: 0.8,
        color: (0, pdf_lib_1.rgb)(0.84, 0.86, 0.90),
    });
    /*
     * Issue date.
     */
    page.drawText("ISSUED ON", {
        x: 78,
        y: 105,
        size: 7,
        font: bold,
        color: muted,
    });
    page.drawText(data.issueDate, {
        x: 78,
        y: 88,
        size: 11,
        font: bold,
        color: darkText,
    });
    /*
     * Certificate ID.
     */
    page.drawText("CERTIFICATE ID", {
        x: 612,
        y: 105,
        size: 7,
        font: bold,
        color: muted,
    });
    page.drawText(data.certificateId, {
        x: 612,
        y: 88,
        size: 10,
        font: bold,
        color: darkText,
    });
    /*
     * Footer brand.
     */
    centerText(page, "CloudLearn Academy", bold, 10, 57, navy, width);
    centerText(page, "Learn. Build. Grow.", regular, 7, 45, muted, width);
    /*
     * Decorative side dots.
     */
    for (let i = 0; i < 5; i++) {
        page.drawCircle({
            x: 67,
            y: 210 + i * 16,
            size: i === 2 ? 4 : 2,
            color: i === 2
                ? gold
                : cyan,
        });
        page.drawCircle({
            x: width - 67,
            y: 210 + i * 16,
            size: i === 2 ? 4 : 2,
            color: i === 2
                ? gold
                : cyan,
        });
    }
    /*
     * =========================================================
     * WRITE PDF
     * =========================================================
     */
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