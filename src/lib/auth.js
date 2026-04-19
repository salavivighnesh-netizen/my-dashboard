export const SESSION_COOKIE_NAME = "velora_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

function utf8ToBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToUtf8(b64) {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

export function encodeSessionPayload(email) {
  const payload = JSON.stringify({ email, v: 1 });
  return utf8ToBase64(payload);
}

export function decodeSessionPayload(token) {
  try {
    const data = JSON.parse(base64ToUtf8(token));
    return typeof data.email === "string" && data.email ? data.email : null;
  } catch {
    return null;
  }
}

export function validateCredentials(email, password) {
  if (!email || !password) return false;
  const user = process.env.AUTH_DEMO_USER || "admin@example.com";
  const pass = process.env.AUTH_DEMO_PASSWORD || "demo";
  return email === user && password === pass;
}
