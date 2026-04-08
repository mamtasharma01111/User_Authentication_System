'use client';

import React, { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const logout = async () => {
        try {
            const response = await axios.get("/Api/users/logout");
            if (response.data.success) {
                toast.success(response.data.message);
                router.push("/login");
            }
        } catch (error: any) {
            console.log("Logout failed", error.message);
            toast.error("Logout failed: " + error.message);
        }
    };
    const getUserData = async () => {
        try {
            const response = await axios.get("/Api/users/me");
            console.log(response.data);
            setUser(response.data.data._id);
            router.push(`/profile/${response.data.data._id}`);
        } catch (error: any) {
            console.log("Failed to fetch user data", error.message);
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1>Profile Page</h1>
            <p>Welcome to your profile!</p>
            <button
            className='p-2 bg-blue-500 text-white rounded' onClick={getUserData}>View User Details</button>
            <button
            className='p-2 bg-red-500 text-white rounded' onClick={logout}>Logout</button>
        </div>
    )
}   