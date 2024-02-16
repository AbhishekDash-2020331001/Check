import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Welcome</h1>
            <div className="flex space-x-4">
                <Link to="/login">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default FirstPage;