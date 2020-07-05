import React from 'react';
import { useForm } from "react-hook-form";
import ErrorMessage from "./errorMessage";
import "./styles.css";

function LoginPage(props) {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // alert(JSON.stringify(data));
        console.log(data)
    };


    return (

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <label>UserName</label>
            <input name="userName" type="text" ref={register({ required: true })} />
            <ErrorMessage error={errors.userName} />

            <label>Password</label>
            <input name="password" type="text" ref={register({ required: true })} />
            <ErrorMessage error={errors.password} />


            <button type="login" onPress={handleSubmit(onSubmit)}>Login</button>

        </form>

    );
};


export default LoginPage;