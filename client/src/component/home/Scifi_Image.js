import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./main.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Scifi_Image = () => {
  const [text, setText] = useState("");

  const [textvalue, setTextvalue] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {

      if (text) {

        const { data } = await axios.post("http://localhost:8006/scifi-image", { text });
        // console.log(data)
        setTextvalue(data);

      }
      else {
        console.log("Please add text");
        toast.error("▲ Add your text!", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error, {
        position: "top-center",
        autoClose: 2000,
      });
    }

  }

  return (
    <>
      <div className='main_div'>
        <div className='parent_div'>
          <div className='top_div'>

            <h1>Scifi Image</h1>

            <input type="text" placeholder='add your text...' name="summary" value={text} onChange={(e) => setText(e.target.value)} />

            <button onClick={SubmitHandler}>SUBMIT</button>

            <p style={{ paddingLeft: '4px' }}>
              not this tool? &nbsp;&nbsp;
              <NavLink to='/home'>
                <b style={{ color: "green" }}>
                  GO BACK
                </b>
              </NavLink>
            </p>

          </div>

          <div className='bottom_div'>
            <div className='textarea' placeholder='Omprakash is live' style={{maxWidth:"100%",maxHeight:"100%",padding:0}}>
              <img src={textvalue} alt="scifiimage"/>
            </div>
          </div>


        </div>
        <ToastContainer />
      </div>
    </>

  )
}



export default Scifi_Image