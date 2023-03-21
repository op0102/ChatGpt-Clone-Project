import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./navbar.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyContext from '../context/MyContext';


const Navbar = () => {
  const navigate = useNavigate();
  const { data ,updateData} = useContext(MyContext);



  // const userLogin = async () => {
  //   try {
  //     const res = await axios.get("/validuser", { withCredentials: true });

  //     if (res.status !== 201) {
  //       console.log("first login");
  //     } else {
  //       // console.log("cart add ho gya hain");
  //       console.log("Hello Om i am Login");
  //       // console.log(res)
  //     }
  //   }

  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  const Logout = async () => {
    try {
      const res = await axios.get("/logout", { withCredentials: true });
      if (res.status === 201 || res.status === 401) {
        navigate("/login")

        toast.success("bye come soon 👋!", {
          position: "top-center",
          autoClose: 2000,
        });
        console.log("logout success!")
        updateData("")

      } else {
        console.log("first login");
        navigate("/login")
       

      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   userLogin()
  // }, [data]);

  return (
    <header>

      <nav>
        <div className='header_navbar'>

          <h1>OpenAI ChatGpt 3</h1>
          <div className='navbar'>
            {data ?
              <>
                <p>{data.data.username.toUpperCase()}</p>
                <p onClick={Logout} style={{ cursor: "pointer" }}>LOGOUT</p>
              </>
              :
              <>
                <p onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>SignIn</p>
                <p onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>SignUp</p>
              </>
            }

          </div>
        </div>
      </nav>
      <ToastContainer />
    </header>
  )
}

export default Navbar;























