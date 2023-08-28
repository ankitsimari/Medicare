import { Route,Routes } from "react-router-dom";
import Home from "../Home/Home";
import Doctors from "../Doctors/Doctors";
import LayoutLogin from "../Login/LayoutLoging";
import Contact from "../Contact/Contact";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import VideoHome from "../VideoCall/VideoHome";
import VideoRoom from "../VideoCall/VideoRoom";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "../Login/SignUp";
import LogIn from "../Login/Login";






export default function AllRoutes(){

    const {isAuth} = useContext(AuthContext);
   

    return(
        <>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/register" element={<LayoutLogin/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={!isAuth?<LogIn/>:<Home/>}/>
        <Route path="/videoRoom/:roomId" element={<VideoRoom/>}/>
        <Route path="/appointments" element={<VideoHome/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        

        </Routes>
        </>
    )
}