import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BookingLoading from '../Booking/BookingLoading';

export default function Message() {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false)

    function fetchData(search) {
        setLoading(true);
        axios.get(`https://doctors-api-bc6x.onrender.com/contact`).then((res) => {
          setData(res.data);
          setLoading(false);
        });
      }

      useEffect(()=>{
          fetchData()
      },[])
      if (loading) {
        return <BookingLoading />;
      }


  return (
    <div className='container'>
        <h2 className='text-center my-3'>Message</h2>
        <div className='row gap-3 d-flex justify-content-center'>

      
{
    data.length>0 && data.map((e)=>(

<div class="card col-md-3 m-0 p-0"   key={e.id}>
  <div class="card-body">
    <h5 class="card-title">{e.firstName} {e.lastName}</h5>
    <p class="card-text">{e.email}</p>
    <p class="card-text">{e.message}</p>
   
  </div>
</div>
    ))
}
</div>      

    </div>
  )
}
