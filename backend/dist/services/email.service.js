"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationOtp = sendVerificationOtp;
const nodemailer_1 = __importDefault(require("nodemailer"));
const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpSecure = String(process.env.SMTP_SECURE).toLowerCase() === "true";
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM ||
    `CloudLearn Academy <${smtpUser || "no-reply@example.com"}>`;
if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn("WARNING: SMTP environment variables are missing.");
}
const transporter = nodemailer_1.default.createTransport({
    host: smtpHost || "",
    port: smtpPort,
    secure: smtpSecure,
    auth: {
        user: smtpUser || "",
        pass: smtpPass || "",
    },
});
async function sendVerificationOtp(email, fullName, otp) {
    await transporter.sendMail({
        from: smtpFrom,
        to: email,
        subject: "Verify your CloudLearn Academy email",
        text: `Hi ${fullName},

Your CloudLearn Academy verification code is:

${otp}

This code will expire in 10 minutes.

If you did not create a CloudLearn Academy account, you can ignore this email.

Do not share this verification code with anyone.

CloudLearn Academy`,
        html: `
      <div style="font-family: Arial, sans-serif; background:#f8fafc; padding:32px;">
        <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:16px; padding:32px; border:1px solid #e2e8f0;">
          <h1 style="margin:0 0 12px; color:#0f172a;">
            Verify your CloudLearn Academy email
          </h1>

          <p style="margin:0 0 20px; color:#475569; font-size:16px;">
            Hi ${fullName},
          </p>

          <p style="margin:0 0 20px; color:#475569; font-size:16px;">
            Use the verification code below to verify your email address.
          </p>

          <div style="margin:24px 0; text-align:center;">
            <span style="display:inline-block; padding:16px 28px; background:#eff6ff; color:#0369a1; border-radius:12px; font-size:32px; font-weight:700; letter-spacing:8px;">
              ${otp}
            </span>
          </div>

          <p style="margin:0 0 10px; color:#64748b; font-size:14px;">
            This code expires in 10 minutes.
          </p>

          <p style="margin:0; color:#64748b; font-size:14px;">
            Do not share this code with anyone.
          </p>

          <hr style="margin:28px 0; border:none; border-top:1px solid #e2e8f0;" />

          <p style="margin:0; color:#94a3b8; font-size:12px;">
            If you did not create a CloudLearn Academy account, you can safely ignore this email.
          </p>
        </div>
      </div>
    `,
    });
}
//# sourceMappingURL=email.service.js.map