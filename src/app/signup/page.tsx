'use client'

import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: '',
        email: '',
        password: '',
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/Api/users/signup', user);
            router.push('/login');
            toast.success(response.data.message || 'Signup successful');

        } catch (error : any) {
            console.error('Signup error:', error);
            toast.error(error.response?.data?.error || 'An error occurred during signup');
        }
    };

    useEffect(() => { 
     if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
        setButtonDisabled(false);
     } else {
        setButtonDisabled(true);
     }
    }, [user]);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1>{loading ? 'Loading...' : 'Sign-Up'}</h1>
            <label htmlFor="username">Username:</label>
            <input className='p-2 border border-gray-800 '
                type="text"
                id="username"
                placeholder='User Name'
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
           />
            <label htmlFor="email">Email:</label>
            <input className='p-2 border border-gray-800 '
                type="email"
                id="email"
                placeholder='Email'
                value={user.email}  
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label htmlFor="password">Password:</label>
            <input className='p-2 border border-gray-800 '
                type="password"
                id="password"
                placeholder='Password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button className='p-2 bg-blue-500 text-white rounded mt-10' onClick={onSignup}> {buttonDisabled ? 'Please fill all fields' : 'Signup'}
           </button>
            <p>Already have an account? <Link href="/login" className='text-blue-500'>Login</Link></p>
        </div>
    )
}