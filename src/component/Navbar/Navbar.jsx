import { Link, NavLink } from "react-router-dom"
import { Button } from "@mui/material"
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Logout from "../Login/Logout";
import User from "../Login/User";


export default function Navbar(){
  
  const {isAuth} = useContext(AuthContext);

  const handleTop = ()=>{
    window.scrollTo(0, 0);
  }

    return(
       <>

<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container text-black text-center text-md-start">
      <Link onClick={handleTop} className="navbar-brand fw-bolder fs-2" to="/"><img src="/img/logo.png" alt=""/> &nbsp; &nbsp;MediCare</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ps-4 ps-lg-0 text-uppercase">
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" aria-current="page" to="/">home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" to="/doctors">doctors</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" to="/appointments">Appointments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink onClick={handleTop} className="nav-link fw-bold text-black" to="/contact">contact</NavLink>
          </li>
        </ul>
        <div className="d-flex flex-column flex-lg-row">

          {/* <a href="./login.html" className="btn btn-1 fw-bold  px-4 m-3 m-lg-0 mx-lg-3">Login</a> */}
          <NavLink to="/login" >
          {/* <Button  className="btn btn-2 fw-bold px-4 mx-3 mx-lg-0  me-xl-5">{isAuth?"UserName":"Register"}</Button> */}
          

          {isAuth?<User/>:<Button  className="btn btn-2 fw-bold px-4 mx-3 mx-lg-0  me-xl-5">Register</Button>}
          </NavLink>
          

        </div>
      </div>
    </div>
  </nav>
       </>
    )
}