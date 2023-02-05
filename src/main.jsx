import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MedicalRecordPage,MedicalRecordFromPage,UserFormPage } from './containers'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
  },
  {
    path: "/medical-record",
    element: <MedicalRecordPage />,
  },
  {
    path: "/medical-record-form",
    element: <MedicalRecordFromPage />,
  },
  {
    path: "/user-form",
    element: <UserFormPage />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
