import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from "@/components/partials/Topbar";
import Navbar from "@/components/partials/Navbar";

const AdminPanelLayout = () => {
    return (<>
        <Topbar />
        <Navbar />
        <Outlet />
    </>)
}

export default AdminPanelLayout