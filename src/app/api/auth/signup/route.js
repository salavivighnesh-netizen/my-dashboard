import { NextResponse } from "next/server";
import { createUser, findUserByEmail } from "@/lib/mock-auth-store";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const password = String(body?.password ?? "");

    if (!name || !email || !password) {
      return NextResponse.json({ ok: false, message: "All fields are required." }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json(
        { ok: false, message: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    if (findUserByEmail(email)) {
      return NextResponse.json({ ok: false, message: "Email is already registered." }, { status: 409 });
    }

    const user = createUser({ name, email, password });
    return NextResponse.json({
      ok: true,
      message: "Account created successfully.",
      user: { name: user.name, email: user.email },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to process signup request." },
      { status: 500 }
    );
  }
}
