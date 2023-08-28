import { Button, Input } from '@mui/material';
import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext/AuthContext';

export default function VideoHome() {
    const {isAuth}= useContext(AuthContext);
    const booking = JSON.parse(localStorage.getItem("booking"))

    const [roomId,setRoomId] = useState("")
    const navigate = useNavigate();

    const handleJoin = ()=>{
        if(roomId){

            navigate(`/videoRoom/${roomId}`)
        }
    }

  return (
    <>
    <div className='text-center my-3'> 
        <h1 >Online <span className="themeColor ">Doctor</span></h1>

        <div>
            <Input className='form-control w-25 mt-4'  type="text" placeholder='Enter Session ID' value={roomId} onChange={(e)=> setRoomId(e.target.value)}/>
            <Button  className='btn ms-3' disabled={!isAuth }  onClick={handleJoin}>join</Button>
        </div>

        </div>
    </>
  )
}
