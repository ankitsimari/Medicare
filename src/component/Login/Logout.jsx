
import { Button } from "@mui/material"
import {useContext } from "react"
import { AuthContext } from "../AuthContext/AuthContext"
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";

export default function Logout(){

    const Navigate = useNavigate()

    const {isAuth ,setIsAuth} = useContext(AuthContext)

    const handleClick = ()=>{
        Swal.fire({
            title: 'LogOut',
            text: 'You are Logged Out',
            icon: 'warning',
            confirmButtonColor: '#3167D9'
          })

        setIsAuth(false);
        localStorage.clear()
        Navigate("/")
    }

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return (
     
        <Button className="btn btn-2 fw-bold px-4 ms-4 d-block me-auto mt-3" data-aos="fade-up" onClick={handleClick}>Logout</Button>
    )
}