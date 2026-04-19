"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");
  const [loading, setLoading] = useState(false);

  return (
    <div className="login-root">
      <div className="login-card">
        <h1 className="login-title">Sign in</h1>
        <p className="login-sub">Velora marketing workspace</p>

        <form
          className="login-form"
          onSubmit={async (event) => {
            event.preventDefault();
            setLoading(true);
            setMessage(null);
            setMessageType("success");

            const formData = new FormData(event.currentTarget);
            const payload = {
              email: String(formData.get("email") ?? ""),
              password: String(formData.get("password") ?? ""),
            };

            try {
              const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });

              const data = await response.json();
              if (!response.ok || !data.ok) {
                setMessageType("error");
                setMessage(data.message || "Unable to login.");
                return;
              }

              setMessage("Login successful. Redirecting...");
              router.push("/");
            } catch {
              setMessageType("error");
              setMessage("Network error. Please try again.");
            } finally {
              setLoading(false);
            }
          }}
        >
          <label className="login-field">
            <span>Email</span>
            <input name="email" type="email" autoComplete="username" required />
          </label>
          <label className="login-field">
            <span>Password</span>
            <input name="password" type="password" autoComplete="current-password" required />
          </label>
          {message ? (
            <p className={messageType === "error" ? "login-error" : "login-success"} role="status">
              {message}
            </p>
          ) : null}
          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>
          <p className="login-switch">
            New here?{" "}
            <Link href="/signup" className="login-switch-link">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
