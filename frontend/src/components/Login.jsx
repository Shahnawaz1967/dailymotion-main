import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser, selectUser } from '../features/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        console.log("Attempting to log in with email:", email);

        try {
            const response = await axios.post('http://localhost:8080/api/user/login', { email, password }, { withCredentials: true });
            console.log("Response received:", response);

            if (response.status === 200 && response.data.user) {
                Cookies.set('authToken', response.data.token, { sameSite: 'Strict' });
                dispatch(setUser(response.data.user));
                toast.success('Login successful!');
                console.log(`User logged in: ${response.data.user.email}`);
                navigate('/');
            } else {
                toast.error('Login failed. Invalid credentials.');
                console.error('Login failed response:', response.data);
            }
        } catch (error) {
            console.error('Error logging in: ', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                toast.error(`Login failed: ${error.response.data.message || 'Server error'}`);
            } else if (error.request) {
                console.error('Request data:', error.request);
                toast.error('Login failed: No response from server.');
            } else {
                console.error('Error message:', error.message);
                toast.error(`Login failed: ${error.message}`);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/api/user/logout', {}, { withCredentials: true });
            Cookies.remove('authToken');
            dispatch(clearUser());
            toast.success('Logout successful!');
            navigate('/login');
        } catch (error) {
            console.error('Error logging out: ', error);
            toast.error('Error logging out. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
                {user ? (
                    <>
                        <h2 className="text-2xl font-bold text-center text-gray-800">You are logged in</h2>
                        <button
                            onClick={handleLogout}
                            className="w-full px-4 py-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging In...' : 'Log In'}
                            </button>
                        </form>
                    </>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
