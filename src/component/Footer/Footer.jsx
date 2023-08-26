import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Footer() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>

      <div className="container-fluid text-white themeBg mt-5">
        <div className="row justify-content-center themeBg p-5 ms-md-4">
          <div className="col-md-4 themeBg px-4" data-aos="fade-up">
          
        <h3 className="themeBg">MediCare</h3>
         <img className="w-50 rounded" src="https://static.vecteezy.com/system/resources/previews/004/335/425/non_2x/medicare-icon-illustration-healthcare-medicare-doctor-infographic-template-presentation-concept-banner-pictogram-icon-set-icons-vector.jpg" alt="" />
         {/* <p className="themeBg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum alias modi quae ipsam, animi necessitatibus recusandae consequatur est soluta tempora aspernatur magnam quos.</p>    */}
           
          </div>

          <div className="col-md-4 themeBg px-3" data-aos="fade-up">
            <h4 className="themeBg mb-3">Services</h4>
            <ul className="themeBg">
              <li className="themeBg">Book Appointment</li>
              <li className="themeBg">Book Health Check-Up</li>
              <li className="themeBg">Consult Online</li>
            </ul>
          </div>

          <div className="col-md-4 themeBg" data-aos="fade-up">
            <h4 className="themeBg">Services</h4>
            <ul className="themeBg">
              <li className="themeBg">Book Appointment</li>
              <li className="themeBg">Book Health Check-Up</li>
              <li className="themeBg">Consult Online</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
