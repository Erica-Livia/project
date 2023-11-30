import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";

//Form schema

const loginFormSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Password is Required"),
});

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // 

    // Formik
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginFormSchema,
        onSubmit: (values) => {
            // Dispatch register user action
            dispatch(loginUserActionType(values));
        },
    });
    if (userAuth) {
        navigate("/profile");
        dispatch(getAllChw())
    }

    return (
        <>
            <section className="">
                <div className="">
                </div>
                <div className="">
                    <div className="">
                            

                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;