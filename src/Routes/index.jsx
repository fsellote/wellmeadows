import React from 'react';
import LoginPage from '../Page/Login';
import SignUpForm from '../Page/SignUp';
import Dashboard from '../Page/Dashboard';
import FormsPage from '../Page/FormsPage';
import BookAppointmentPage from '../Page/BookAppointmentPage';
import LocalDoctorsPage from '../Page/LocalDoctorsPage';

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
    element: <Dashboard />
  },
  {
    path: "/dashboard/forms",
    element: <FormsPage />
  },
  {
    path: "/dashboard/book-appointment",
    element: <BookAppointmentPage />
  },
  {
    path: "/dashboard/local-doctors",
    element: <LocalDoctorsPage />
  }
];

export default routes;
