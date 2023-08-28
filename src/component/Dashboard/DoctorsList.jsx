import { Button, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BookingLoading from "../Booking/BookingLoading";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DoctorsList() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search,setSearch] = useState("");
  const [select,setSelect]=useState("")

  // function fetchData(search) {
  //   setLoading(true);
  //   axios.get(`https://doctors-api-bc6x.onrender.com/doctors?q=${search}`).then((res) => {
  //     setData(res.data);
  //     setLoading(false);
  //   });
  // }
  function fetchData(search, select) {
    setLoading(true);
    axios
      .get(`https://doctors-api-bc6x.onrender.com/doctors?q=${search}&_sort=name&_order=${select}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }
  


  const handleDelete = async (doctorId) => {
    setLoading(true);
    await axios.delete(`https://doctors-api-bc6x.onrender.com/doctors/${doctorId}`).then((res)=>{
      console.log(res);
      setLoading(false)
      setFlag(!flag)
    });
    fetchData();
    // Scroll to the top of the page after deletion
    window.scrollTo(0, 0);
  };

  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  //   // fetchSort(select)
  //   let timer = setTimeout(() => {
  //     fetchData(search);
  //   }, 1500);

  //   return () => {
  //     clearTimeout(timer);
  //   };

  // }, [flag,search,select]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    
    let timer = setTimeout(() => {
      fetchData(search, select);
    }, 1500);
  
    return () => {
      clearTimeout(timer);
    };
  }, [flag, search, select]);

console.log(select)

  if (loading) {
    return <BookingLoading />;
  }

  return (
    <>
      <span className="d-flex ms-md-5 mb-3 ps-md-5" data-aos="fade-up">
        

      <TextField
        type="text"
        className="form-control w-50 ms-md-5"
        variant="outlined" 
        label="Doctor Name..."
        fullWidth
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        autoFocus
      />
   

      <select className="px-3 ms-3" onChange={(e)=> setSelect(e.target.value)}>
<option value="/">Sort</option>
<option value="asc">Ascending</option>
<option value="desc">Descending</option>
      </select>
      
   


      </span>
    <div className="container mt-2">
      <div className="row justify-content-center">
        {data.length > 0 &&
          data.map((e) => (
            <div
              className="col-md-11 m-2 shadow m-0 p-4 rounded d-flex"
              key={e.id}
              style={{ height: "190px" }} data-aos="fade-up"
            >
              <div className="w-25">
                <img className="card-img mb-2 rounded h-100" src={e.image} alt="" />
              </div>
              <div className="ms-5">
                <h3>{e.name}</h3>
                <p className="m-1">Specialty: {e.specialty} </p>
                <p className="m-1">Experience: {e.experience}</p>
                <p className="m-1">Achievement: {e.achievement}</p>
              </div>
              <div className="d-block ms-auto my-auto me-5">
                <Button
                  className="btn"
                  onClick={() => handleDelete(e.id)}
                  value={e.id}
                  key={e.id}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
  );
}
