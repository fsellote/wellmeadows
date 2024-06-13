import React from 'react';
import LoginPage from '../Page/Login';
import SignUpForm from '../Page/SignUp';
import Dashboard from '../Page/Dashboard';

const routes = [
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignUpForm />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    }
];

export default routes;
