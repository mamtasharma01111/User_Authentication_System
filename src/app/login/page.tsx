"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Login Page</h1>
      <label htmlFor="email">Email:</label>
      <input
        className="p-2 border border-gray-800 "
        type="email"
        id="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">Password:</label>
      <input
        className="p-2 border border-gray-800 "
        type="password"
        id="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button className="p-2 bg-blue-500 text-white rounded" onClick={onLogin}>
        Login
      </button>
      <p>
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue-500">
          Signup
        </Link>
      </p>
    </div>
  );
}
