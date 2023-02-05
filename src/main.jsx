import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MedicalRecordPage,MedicalRecordFromPage } from './containers'
import { MedicalRecords } from './componenets'

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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
