import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import styles from './styles.module.css';

const SignUp = () => {
    const [data,setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role:""
    });

    const [error,setError] = useState("");
    const [msg,setMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setData({...data,[input.name]: input.value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {firstName,lastName,email,password,role} = data
        let urole;
        if(role=="on"){
            urole = 'admin'
        }else{
            urole = 'user'
        }
        const userdata = {
            firstName,
            lastName,
            email,
            password,
            role : urole
        }
        console.log(userdata)
        try{
            const url = "http://localhost:8080/api/users";
            const {data: res} = await axios.post(url, userdata);
            navigate("/login");
            // console.log(res.message);
            StorageManager(res.message)
        }
        catch(error){
            if(error.response && error.response.status >= 400 && error.response.status <= 500){
                setError(error.response.data.message)
            }
        }
    };
    return(
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type='button' className={styles.white_btn}>
                            Sign In
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        <div className="radio-div"><input type="radio" name="role" onChange={handleChange} className="radiobtn"/>Register as a admin</div>
                        {
                            error && <div className={styles.error_msg}>{error}</div>
                        }
                        {
                            msg && <div className={styles.success_msg}>{msg}</div>
                        }
                        <button type='submit' className={styles.green_btn}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SignUp;