import BookAppointment from "../Appointment/BookAppointment";
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function DoctorCard({name,specialty,experience,image}){


    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);


    return(

        <div className="container my-3 text-center text-md-start ">
       
        <div className="row justify-content-center ">
         
            <div className="col-md-12 shadow p-3 rounded ">
                <div className="row">
                    <div className="col-md-4" >
                        <img className="w-100 h-100 rounded object-fit-cover" src={image} alt="" />
                    </div>
                    <div className="col-md-8 p-2 ps-3">
                        <h3 className="mt-2">{name}</h3>
                        <h5>{specialty}</h5>
                        <h6>Experience : {experience}</h6>
                        <h5>Fee: 500</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolor saepe aliquid qui cum enim quas .</p>
                        <BookAppointment  name="Book Appointment"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}