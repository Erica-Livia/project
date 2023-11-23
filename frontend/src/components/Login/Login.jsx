import React from "react";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <div className="logincard">
          <div className="text-wrapper">Login</div>
          <div className="email">
            <div className="text-wrapper-2">Email</div>
          </div>
          <div className="password">
            <div className="text-wrapper-2">Password</div>
          </div>
          <div className="google">
            <img
              className="icon-google"
              alt="Icon google"
              src="https://c.animaapp.com/zguv93KV/img/---icon--google-@2x.png"
            />
            <div className="text-wrapper-3">Login with Google</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">Login</div>
          </div>
          <div className="overlap-group">
            <div className="text-wrapper-5">Don’t have an account?</div>
            <div className="frame">
              <div className="text-wrapper-6">Signup</div>
            </div>
          </div>
          <div className="text-wrapper-7">Forgot password?</div>
          <div className="text-wrapper-8">Or</div>
        </div>
        <div className="logo">
          <div className="text-wrapper-9">Wanderlust</div>
        </div>
      </div>
    </div>
  );
};
