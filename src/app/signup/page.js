"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");
  const [loading, setLoading] = useState(false);

  return (
    <div className="login-root">
      <div className="login-card">
        <h1 className="login-title">Create account</h1>
        <p className="login-sub">Start using Velora marketing workspace</p>

        <form
          className="login-form"
          onSubmit={async (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            setLoading(true);
            setMessage(null);
            setMessageType("success");

            const formData = new FormData(form);
            const password = String(formData.get("password") ?? "");
            const confirmPassword = String(formData.get("confirmPassword") ?? "");

            if (password !== confirmPassword) {
              setMessageType("error");
              setMessage("Passwords do not match.");
              setLoading(false);
              return;
            }

            const payload = {
              name: String(formData.get("name") ?? ""),
              email: String(formData.get("email") ?? ""),
              password,
            };

            try {
              const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              });

              let data = null;
              try {
                data = await response.json();
              } catch {
                data = { ok: false, message: "Unexpected server response." };
              }

              if (!response.ok || !data.ok) {
                setMessageType("error");
                setMessage(data.message || "Unable to create account.");
                return;
              }

              setMessage("Account created. Redirecting to login...");
              form.reset();
              setTimeout(() => {
                router.push("/login");
              }, 800);
            } catch (error) {
              setMessageType("error");
              setMessage(error?.message || "Network error. Please try again.");
            } finally {
              setLoading(false);
            }
          }}
        >
          <label className="login-field">
            <span>Full name</span>
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label className="login-field">
            <span>Email</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label className="login-field">
            <span>Password</span>
            <input name="password" type="password" autoComplete="new-password" required />
          </label>
          <label className="login-field">
            <span>Confirm password</span>
            <input name="confirmPassword" type="password" autoComplete="new-password" required />
          </label>
          {message ? (
            <p className={messageType === "error" ? "login-error" : "login-success"} role="status">
              {message}
            </p>
          ) : null}
          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
          </button>
          <p className="login-switch">
            Already have an account?{" "}
            <Link href="/login" className="login-switch-link">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
