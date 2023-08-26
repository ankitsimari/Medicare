import { Button } from "@mui/material";
import { useState } from "react";
import LogIn from "./Login";
import SignUp from "./SignUp";




export default function LayoutLogin(){
    const [login,setLogin] = useState(true);


  

    return(
        <>
        <div className="d-flex justify-content-center gap-2 mt-3">
            <div>
                <Button className="btn" variant="outlined" onClick={(e)=>setLogin(true)}>Login</Button>
            </div>
            <div>
                <Button className="btn" variant="outlined" onClick={(e)=>setLogin(false)}>SignUP</Button>
            </div>

        </div>
        <hr />
        {login?<LogIn/>:<SignUp/>}
        
        </>
    )
}