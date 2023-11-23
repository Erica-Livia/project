import React from "react";
import "./stylereg.css";

export const Register = () => {
    return (
        <div className="signup">
            <div className="div">
                <div className="signupCard">
                    <div className="text-wrapper">Sign Up</div>
                    <div className="email">
                        <div className="text-wrapper-2">Email</div>
                    </div>
                    <div className="lastname">
                        <div className="text-wrapper-2">Last Name</div>
                    </div>
                    <div className="firstname">
                        <div className="text-wrapper-2">First Name</div>
                    </div>
                    <div className="createpasswprd">
                        <div className="text-wrapper-2">Password</div>
                    </div>
                    <div className="confirmpassword">
                        <div className="text-wrapper-2">Confirm Password</div>
                    </div>

                    <div className="google">
                        <img className="icon-google" alt="Icon google" src="icon-google.png" />
                        <div className="text-wrapper-3">Login with Google</div>
                    </div>

                    <div className="signupbutton">
                        <div className="text-wrapper-4">Signup</div>
                    </div>

                    <div className="overlap-group">
                        <div className="text-wrapper-5">Already have an account?</div>
                        <div className="frame">
                            <div className="text-wrapper-6">Login</div>
                        </div>
                    </div>

                    <div className="text-wrapper-7">Or</div>
                    <div className="terms-condition">
                        <p className="">I accept the Terms of Use &amp; Privacy Policy</p>
                        {/* <img className="icon-checkbox" alt="" src="icon-checkbox-symbolic.png" /> */}
                    </div>
                </div>
                <div className="logo">
                    <div className="text-wrapper-8">Wanderlust</div>
                </div>
            </div>

        </div>
    );
};