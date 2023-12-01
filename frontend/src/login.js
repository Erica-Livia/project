import React from "react";
import "./components/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
}