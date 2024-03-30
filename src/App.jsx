import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import AuthLayout from "@/pages/Layout/AuthLayout"
import AdminPanelLayout from "@/pages/Layout/AdminPanelLayout"

import Login from "@/pages/auth/Login"
import ForgetPassword from "@/pages/auth/ForgetPassword"
import Dashboard from "@/pages/Dashboard"
import BuyTokens from "@/pages/BuyTokens"
import Transactions from "@/pages/Transactions"
import Activity from "@/pages/ActivityLog"
import Security from "@/pages/Security"

import Error404 from "@/pages/Error404"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />

        <Route path="/" element={<AuthLayout />} >
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Login />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
        </Route>

        <Route path="/" element={<AdminPanelLayout />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="buy-tokens" element={<BuyTokens />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="activity-log" element={<Activity />} />
          <Route path="security" element={<Security />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
