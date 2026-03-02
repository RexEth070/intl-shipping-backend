import crypto from "crypto";

export function generateTrackingCode() {
  const random = crypto.randomBytes(3).toString("hex").toUpperCase();
  const time = Date.now().toString().slice(-4);
  return `INTL-${random}-${time}`;
}
