import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import GlobalLayout from './Layouts/GlobalLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';

function App() {

  const router =  createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      children: [
          {
            index: true,
            element:<HomePage />

          },
          {
            path: "login",
            element:<LoginPage />
          },
          {
            path: "registration",
            element: <RegistrationPage />
          }
      ]

    },
  ])

  return (
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
