import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div id="login_form" className="d-block">
      <div className="login_head text-center text-light">
        <h2>Login to your account</h2>
        <p className="f-14">Please enter your login details</p>
      </div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label f-14">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label f-14">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 text-center">
          <div
            className="g-recaptcha"
            data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"
          ></div>
        </div>
        <button type="submit" className="btn btn-primary f-14" id="nextpage">
          Connect Wallet
        </button>
        <div className="text-center">
            <Link to="/forgot-password" className="forgot_form_btn f-14" onclick="ResetForm()">
                Forgot your password?
          </Link>
        </div>
      </form>
      <div className="another_link mt-5 text-center">
        <span className="f-14">
          Don’t have an account?{" "}
          <Link to="/login" className="f-14">
            Sign up here
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Auth;
