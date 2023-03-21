import React from 'react';
import "./footer.css";
import { Link, NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { margin } from '@mui/system';


const Footer = () => {

  const year = new Date().getFullYear();


  return (
    <footer>
      <div className='footer_container'>

        <div className='footer_details_one'>
          <h3>Get to Know Us</h3>
          <p>About</p>
          <p>Carees</p>
          <p>Blog</p>
        </div>

        <div className='footer_details_one'>
          <h3> Connect with Us</h3>
          <a href='https://www.linkedin.com/in/omprakash-chetiyar-3957bb104/'
            target="_blank">
            <p>LinkedIn</p>
          </a>


          <a href='https://www.instagram.com/virom0102/'
            target="_blank">
            <p>Instagram</p>
          </a>


          <a href='https://github.com/op0102'
            target="_blank">
            <p>GitHub</p>
          </a>


          <a href='https://www.facebook.com/omprakash.chetiyar/' target="_blank">
            <p>Facebook</p>
          </a>

          <a href='https://www.naukri.com/mnjuser/homepage'
            target="_blank">
            <p>Naukri.com</p>
          </a>

        </div>

        <div className='footer_details_one forres'>
          <h3>Research</h3>
          <p>Overview</p>
          <p>Index</p>

        </div>

        <div className='footer_details_one forres' >
          <h3>Let Us Help You</h3>
          <p>Customer stories</p>
          <p>Safety standards</p>
          <p>Pricing</p>
          <p> Terms & policies</p>

        </div>
  

      </div>

      <Divider style={{width:"100%" ,backgroundColor:"black"}} />
   

      <div className='lastdetails'>
     
        <NavLink to="/">
     
          <img src='https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png' alt="" />
        </NavLink>
        <p> OpenAI ChatGpt © 2015-{year}&nbsp;&nbsp; Privacy policy&nbsp;&nbsp;  Terms of use &nbsp;&nbsp; </p>

      </div>

    </footer>
  )
}
export default Footer































