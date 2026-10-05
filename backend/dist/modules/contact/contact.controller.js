"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContact = sendContact;
const email_service_1 = require("../../services/email.service");
function clean(value) {
    return typeof value === "string" ? value.trim() : "";
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
async function sendContact(req, res) {
    try {
        const fullName = clean(req.body?.fullName);
        const email = clean(req.body?.email).toLowerCase();
        const subject = clean(req.body?.subject);
        const message = clean(req.body?.message);
        if (!fullName || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All contact form fields are required",
            });
        }
        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address",
            });
        }
        if (fullName.length > 100) {
            return res.status(400).json({
                success: false,
                message: "Name is too long",
            });
        }
        if (subject.length > 200) {
            return res.status(400).json({
                success: false,
                message: "Subject is too long",
            });
        }
        if (message.length > 5000) {
            return res.status(400).json({
                success: false,
                message: "Message is too long",
            });
        }
        await (0, email_service_1.sendContactMessage)(fullName, email, subject, message);
        return res.status(200).json({
            success: true,
            message: "Your message has been sent successfully",
        });
    }
    catch (error) {
        console.error("Contact form error:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to send your message right now. Please try again later.",
        });
    }
}
//# sourceMappingURL=contact.controller.js.map