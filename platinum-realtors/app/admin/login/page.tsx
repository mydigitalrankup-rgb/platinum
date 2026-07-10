"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/admin/blog");
    } else {
      setError("Invalid username or password.");
    }
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="brand-mark" />
        <h1>Platinum Realtors</h1>
        <p>Admin sign in</p>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Sign in</button>
      </form>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0f1115;
        }
        .login-card {
          width: 320px;
          background: #171a21;
          border: 1px solid #262b35;
          border-radius: 10px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .brand-mark {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          background: #c9a24b;
          margin-bottom: 8px;
        }
        h1 {
          font-family: Georgia, serif;
          font-size: 20px;
          color: #edeef0;
          margin: 0;
        }
        p {
          color: #8b93a1;
          font-size: 13px;
          margin: 0 0 12px;
        }
        input {
          background: #0f1115;
          border: 1px solid #262b35;
          border-radius: 6px;
          padding: 10px 12px;
          color: #edeef0;
          font-size: 14px;
          outline: none;
        }
        input:focus {
          border-color: #c9a24b;
        }
        button {
          background: #c9a24b;
          color: #0f1115;
          border: none;
          border-radius: 6px;
          padding: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          margin-top: 8px;
        }
        .error {
          color: #e0645f;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}
