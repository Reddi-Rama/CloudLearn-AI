"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCertificateId = generateCertificateId;
const nanoid_1 = require("nanoid");
function generateCertificateId(courseSlug) {
    const prefix = courseSlug
        .substring(0, 2)
        .toUpperCase();
    return `CL-${prefix}-${(0, nanoid_1.nanoid)(6).toUpperCase()}`;
}
//# sourceMappingURL=certificateId.js.map