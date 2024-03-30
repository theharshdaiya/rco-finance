import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "@image/home.png";
import Rcof from "@image/rcof.png";
import Transactioin from "@image/transactioin.png";
import Time from "@image/time.png";
import Security from "@image/security.png";

const Navbar = () => {
  const [navigator, setNavigator] = useState(false);
  return (
    <section className="header">
      <div className="container">
        <div
          className="header-content"
          style={navigator ? { background: "#272439" } : {}}
        >
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setNavigator(!navigator)}
            >
              <span className="navbar-toggler-icons"></span>
              <span className="navbar-toggler-icons"></span>
              <span className="navbar-toggler-icons"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul
                className="d-flex align-items-center navbar-nav justify-content-between"
                style={{ width: "100%" }}
              >
                <li className="nav-item">
                  <NavLink to="/dashboard" className="nav-link" aria-current="page">
                    <span style={{ width: "18px" }}>
                      <img src={Home} alt="" className="img-fluid" />
                    </span>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/buy-tokens" className="nav-link">
                    <span style={{ width: "18px" }}>
                      <img src={Rcof} alt="" className="img-fluid" />
                    </span>
                    Buy RCOF
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/transactions" className="nav-link">
                    <span style={{ width: "18px" }}>
                      <img src={Transactioin} alt="" className="img-fluid" />
                    </span>
                    Transactions
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/activity-log" className="nav-link">
                    <span style={{ width: "18px" }}>
                      <img src={Time} alt="" className="img-fluid" />
                    </span>
                    Activity Log
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/security" className="nav-link">
                    <span style={{ width: "18px" }}>
                      <img src={Security} alt="" className="img-fluid" />
                    </span>
                    Security
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
