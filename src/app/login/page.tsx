"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
   setLoading(true);
   const response = await axios.post("/Api/users/login", user);
   if (response.data.success) {
     toast.success(response.data.message);
     router.push("/profile");
   } else {
     toast.error("Login failed: " + response.data.error);
   }
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error("Login failed: " + error.message);      
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>{loading ? "Processing..." : "Login"}</h1>
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
