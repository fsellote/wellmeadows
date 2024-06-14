import React from 'react';
import LoginPage from '../Page/Login';
import SignUpForm from '../Page/SignUp';
import Dashboard from '../Page/Dashboard';
import FormsPage from '../Page/FormsPage';
import BookAppointmentPage from '../Page/BookAppointmentPage';
import LocalDoctorsPage from '../Page/LocalDoctorsPage';
import PatientRegistrationPage from '../Page/PatientRegistration';
import StaffPage from '../Page/StaffForm';
import PatientMedicationPage from '../Page/PatientMedicationForm';
import RequisitionPage from '../Page/RequisitionForm';

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
  },
  {
    path: "/patient-registration",
    element: <PatientRegistrationPage />
  },
  {
    path: "/staff-form",
    element: <StaffPage />
  },
  {
    path: "/patient-medication-form",
    element: <PatientMedicationPage />
  },
  {
    path: "/requisition-form",
    element: <RequisitionPage />
  }
];

export default routes;
