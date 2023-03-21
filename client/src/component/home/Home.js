import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import "./home.css";
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';



const Home = () => {



  return (
    <>
      <div className='home_div'>

        {/* Text Generation */}
        <div className='child_div'>
          <h1>Text Generation</h1>
          <NavLink to='/summary'>
            <Card className='card'>
              <TextSnippetOutlinedIcon className='card_icon' />
              <div style={{ display: "flex", flexDirection: "column", width: '100%', height: "100%" }}>
                <h4 style={{ marginLeft: "5%" }}>Text Summary</h4>
                <p style={{ fontSize: "15px", marginTop: "2%", marginLeft: "5%" }}>Summarize long text into short sentences</p>
              </div>
            </Card>
          </NavLink>
        </div>

        {/* Paragraph Generation */}
        <div className='child_div'>
          <h1>Paragraph Generation</h1>
          <NavLink to='/paragraph'>
            <Card className='card'>
              <ViewHeadlineOutlinedIcon className='card_icon' />
              <div style={{ display: "flex", flexDirection: "column", width: '100%', height: "100%" }}>
                <h4 style={{ marginLeft: "5%" }}>Paragraph</h4>
                <p style={{ fontSize: "15px", marginTop: "2%", marginLeft: "5%" }}>Generate Paragraph with words</p>
              </div>
            </Card>
          </NavLink>
        </div>

        {/* AI ChatBoot  */}
        <div className='child_div'>
          <h1>AI ChatBot</h1>
          <NavLink to='/chatbot'>
          <Card className='card'>
            <MessageOutlinedIcon className='card_icon' />
            <div style={{ display: "flex", flexDirection: "column", width: '100%', height: "100%" }}>
              <h4 style={{ marginLeft: "5%" }}>ChatBot</h4>
              <p style={{ fontSize: "15px", marginTop: "2%", marginLeft: "5%" }}>Chat with AI ChatBot</p>
            </div>
          </Card>
          </NavLink>
        </div>

        {/* Javascript Converter  */}
        <div className='child_div'>
          <h1>JS Converter</h1>
          <NavLink to='/js-converter'>
          <Card className='card'>
            <JavascriptOutlinedIcon className='card_icon' />
            <div style={{ display: "flex", flexDirection: "column", width: '100%', height: "100%" }}>
              <h4 style={{ marginLeft: "5%" }}>JS CONVERTER</h4>
              <p style={{ fontSize: "15px", marginTop: "2%", marginLeft: "5%" }}>Translate english to Javascript Code</p>
            </div>
          </Card>
          </NavLink>
        </div>

        {/* AI Scifi Images  */}
        <div className='child_div'>
          <h1>AI SCIFI Images</h1>
          <NavLink to='/scifi-image'>
          <Card className='card'>
            <CenterFocusWeakIcon className='card_icon' />
            <div style={{ display: "flex", flexDirection: "column", width: '100%', height: "100%" }}>
              <h4 style={{ marginLeft: "5%" }}>Scifi Image</h4>
              <p style={{ fontSize: "15px", marginTop: "2%", marginLeft: "5%" }}>Generate Scifi Images</p>
            </div>
          </Card>
          </NavLink>
        </div>



















      </div>
    </>
  )
}

export default Home;