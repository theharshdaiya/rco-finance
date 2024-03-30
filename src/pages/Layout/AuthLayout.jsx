import React from 'react'
import Group1 from "@image/Group-437.png"
import RcoFinance from "@image/RCO-Finance.png"
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <section id="login" className="min-vh-100 d-flex ">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-5 col-lg-6 d-flex align-items-center logo_sec justify-content-center">
                    <div className="text-center">
                        <img src={Group1} alt="" className="w-50" />
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-6 login_form_main_Box d-flex flex-column align-items-center justify-content-center">
                    <div className="login_reset_box mb-4">
                        <img src={RcoFinance} alt="" className="mb-2" />
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AuthLayout