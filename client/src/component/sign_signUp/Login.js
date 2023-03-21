import React, { useState ,useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signIn_Up.css";
import MyContext from '../context/MyContext';



const Login = () => {
    const { data, updateData } = useContext(MyContext);
    const navigate = useNavigate();

    const [udata, setUdata] = useState({
        email: "",
        password: ""

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
        const { email, password } = udata;
        try {

            const res = await axios.post("/login", {
                email, password
            })

            if (res.statusCode === 422 || !res) {
                toast.error("▲ Invalid Details!", {
                    position: "top-center",
                    autoClose: 2000,
                });

            } else {
                toast.success("welcome 🙏!", {
                    position: "top-center",
                    autoClose: 2000,
                });
                setUdata({
                    email: "",
                    password: ""
                });
                navigate("/home")
                updateData(res)
                // console.log(res);
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

                            <h1>Sign-In</h1>

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

                            <button className='signin_btn' onClick={sendata}>continue</button>

                            <div className='signin_info'>
                                <p>Don't have an account? <NavLink to="/register">Sign Up</NavLink></p>

                            </div>

                        </form>

                    </div>



                </div>

            </section>
            <ToastContainer />
        </>
    )
}

export default Login;