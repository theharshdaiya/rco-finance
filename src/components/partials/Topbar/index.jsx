import React from 'react'
import Logo from "@image/logo.png"
import Flag from "@image/flag.png"
import Down from "@image/down.png"
import Chevlon from "@image/chevlon.png"
import User from "@image/user.png"
import Lock from "@image/lock.png"
import Exit from "@image/exit.png"
import Profile from "@image/profile.png"

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="container">
        <div className="topbar-content">
            <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
                <div className="topbar-left d-flex align-items-center">
                <div className="logo">
                    <a href="#">
                    <img src={Logo} alt="" className="img-fluid" />
                    </a>
                </div>
                <div className="topbar-button">
                    <div className="topbar-dropdown">
                    <a href="#" className="nav-link">
                        <span>
                        <img src={Flag} alt="" />
                        </span>
                        English{" "}
                        <span>
                        <img
                            src={Down}
                            alt=""
                            className="img-fluid"
                        />
                        </span>
                    </a>
                    <div className="submenu">
                        <ul className="submenu-item">
                        <li className="submenu-list">
                            <a href="https://google.com" target="_blank">
                            <span>
                                <img
                                src={Flag}
                                alt=""
                                className="img-fluid"
                                />
                            </span>
                            English
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <div className="topbar-right d-flex align-items-center">
                <div className="topbar-button">
                    <a href="#" className="btn btn-primary">
                    Connect Wallet
                    </a>
                </div>
                <div className="profile">
                    <a href="#">
                    <div className="profile-img">
                        <img
                        src={Profile}
                        alt=""
                        className="img-fluid"
                        />
                    </div>
                    <div className="profile-detail d-flex align-items-center">
                        <div className="profile-info me-2">
                        <span className="title">Welcome</span>
                        <p>Lisa Watson</p>
                        </div>
                        <span className="arrow-icon">
                        <img
                            src={Chevlon}
                            alt=""
                            className="img-fluid"
                        />
                        </span>
                    </div>
                    <div className="profile-dropdown">
                        <div className="pro-info">
                        <div className="pro-img">
                            <img
                            src={Profile}
                            alt=""
                            className="img-fluid"
                            />
                        </div>
                        <div className="pro-detail">
                            <h2>Lisa Watson (UD00001)</h2>
                            <p>lisawatson@gmail.com</p>
                        </div>
                        </div>
                        <ul className="pro-item">
                        <li className="pro-link">
                            <a href="#">
                            <span>
                                <img src={User} alt="" />
                            </span>
                            My profile
                            </a>
                        </li>
                        <li className="pro-link">
                            <a href="#">
                            <span>
                                <img src={Lock} alt="" />
                            </span>
                            Change password
                            </a>
                        </li>
                        <li className="pro-link">
                            <a href="#">
                            <span>
                                <img src={Exit} alt="" />
                            </span>
                            Logout
                            </a>
                        </li>
                        </ul>
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Topbar