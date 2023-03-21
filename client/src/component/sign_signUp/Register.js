import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signIn_Up.css"

const Register = () => {
    const navigate = useNavigate();

    const [udata, setUdata] = useState({
        email: "",
        password: "",
        cpassword: "",
        username: ""

    });

    const addData = (e) => {
        const { name, value } = e.target;
        // console.log(e.target.value);
        setUdata(() => {
            return { ...udata, [name]: value }
        });
    }

    const sendata = async (e) => {
        e.preventDefault();
        const { username, email, password, cpassword } = udata;
        try {

            const res = await axios.post("/register", {
                username, email, password, cpassword
            })

            if (res.statusCode === 422 || !res) {
                toast.error("▲ Invalid Details!", {
                    position: "top-center",
                    autoClose: 2000,
                });
            } else {
                setUdata({
                    username: "", email: "",
                    password: "", cpassword: ""
                });
                toast.success("Registration Successfully done 😃!", {
                    position: "top-center",
                    autoClose: 2000,
                });
                console.log("registration success!")
                navigate("/login")
            }
        } catch (error) {

            console.log("front end ka catch error hai" + error.message);
        }
    }

    return (
        <>
            <section>
                <div className='sign_container'>


                    <div className='sign_form' >
                        <form method='POST'>

                            <h1>Sign-Up</h1>
                            <div className='form_data'>
                                <label htmlFor='username'>Your name</label>
                                <input type='text'
                                    name="username" id="username"
                                    onChange={addData}
                                    value={udata.username} />
                            </div>

                            <div className='form_data'>
                                <label htmlFor='email'>Email</label>
                                <input type='text'
                                    name="email" id="email"
                                    onChange={addData}
                                    value={udata.email} />
                            </div>

                            <div className='form_data'>
                                <label htmlFor='password'>Password</label>
                                <input type='password'
                                    name="password" id="password"
                                    placeholder='at least 6 char'
                                    onChange={addData}
                                    value={udata.password} />
                            </div>

                            <div className='form_data'>
                                <label htmlFor='cpassword'>Password Again</label>
                                <input type='password'
                                    name="cpassword" id="cpassword"
                                    onChange={addData}
                                    value={udata.cpassword} />
                            </div>

                            <button className='signin_btn' onClick={sendata}>continue</button>

                            <div className='signin_info'>
                                <p>Already have an account? <NavLink to="/login">Sign in</NavLink></p>

                            </div>

                        </form>

                    </div>

                   

                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Register;