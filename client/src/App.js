import React, { useContext ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Routes, Route,Navigate  } from 'react-router-dom';
import Home from './component/home/Home';
import Navbar from './component/header/Navbar';
import Footer from './component/footer/Footer';
import Login from './component/sign_signUp/Login';
import Register from './component/sign_signUp/Register';
import Paragraph from './component/home/Paragraph';
import Summary from './component/home/Summary';
import JsConverter from './component/home/JsConverter';
import Scifi_Image from './component/home/Scifi_Image';
import Chatbot from './component/home/Chatbot';
import MyContext from './component/context/MyContext';


const App = () => {

  const navigate = useNavigate();
  const { data, updateData } = useContext(MyContext);


  return (

    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<ProtectedRoutes> <Home /></ProtectedRoutes>} />
        <Route path='/paragraph' element={<ProtectedRoutes><Paragraph /></ProtectedRoutes>} />
        <Route path='/summary' element={<ProtectedRoutes><Summary /></ProtectedRoutes>} />
        <Route path='/js-converter' element={<ProtectedRoutes><JsConverter /></ProtectedRoutes>} />
        <Route path='/scifi-image' element={<ProtectedRoutes><Scifi_Image /></ProtectedRoutes>} />
        <Route path='/chatbot' element={<ProtectedRoutes><Chatbot /></ProtectedRoutes>} />
      </Routes>

      <Footer />
    </>
  )

}







// export function ProtectedRoutes() {
//   const { data } = useContext(MyContext);
//   const navigate = useNavigate();
//   if (!data) {
//     return navigate("/");
 
// }
// }
export function ProtectedRoutes(props) {
  const { data } = useContext(MyContext);
  if (data) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}


export default App;






















