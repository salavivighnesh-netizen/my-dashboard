"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SESSION_COOKIE_NAME,
  SESSION_MAX_AGE,
  encodeSessionPayload,
  validateCredentials,
} from "@/lib/auth";

export async function login(formData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!validateCredentials(email, password)) {
    return { ok: false, message: "Invalid email or password." };
  }

  const jar = await cookies();
  jar.set(SESSION_COOKIE_NAME, encodeSessionPayload(email), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
    secure: process.env.NODE_ENV === "production",
  });

  redirect("/");
}

export async function logout() {
  const jar = await cookies();
  jar.delete(SESSION_COOKIE_NAME);
  redirect("/login");
}
