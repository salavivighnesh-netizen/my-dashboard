import { NextResponse } from "next/server";
import { findUserByEmail } from "@/lib/mock-auth-store";

export async function POST(request) {
  const body = await request.json();
  const email = String(body?.email ?? "").trim().toLowerCase();
  const password = String(body?.password ?? "");

  if (!email || !password) {
    return NextResponse.json({ ok: false, message: "Email and password are required." }, { status: 400 });
  }

  const user = findUserByEmail(email);
  if (!user || user.password !== password) {
    return NextResponse.json({ ok: false, message: "Invalid email or password." }, { status: 401 });
  }

  return NextResponse.json({
    ok: true,
    message: "Login successful.",
    user: { name: user.name, email: user.email },
  });
}
