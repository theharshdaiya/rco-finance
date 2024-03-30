import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div id="reset_form" className="d-block">
      <div className="login_head text-center text-light">
        <h2>Reset Password</h2>
        <p>
          if you forget your password, please enter your registered email below
          to receive your instructions.
        </p>
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
        <div className="mb-3 text-center">
          {/* <div className="g-recaptcha" data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Send me reset link
        </button>
      </form>
      <div className="another_link mt-3 text-center">
        <span className="f-14">
          Already have an account? {" "}
          <Link to="/login" className="f-14">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ForgetPassword;
