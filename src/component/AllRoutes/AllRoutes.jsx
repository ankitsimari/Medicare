import { Route,Routes } from "react-router-dom";
import Home from "../Home/Home";
import Doctors from "../Doctors/Doctors";
import LayoutLogin from "../Login/LayoutLoging";
import Contact from "../Contact/Contact";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";



export default function AllRoutes(){

    const {isAuth} = useContext(AuthContext)

    return(
        <>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/register" element={<LayoutLogin/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/appointments" element={isAuth?<Contact/>:<LayoutLogin/>}/>

        </Routes>
        </>
    )
}