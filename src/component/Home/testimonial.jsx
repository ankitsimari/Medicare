import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Testimonial(){

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    

    return(
        <>
        <div className="container mt-5">
        <h2 className="text-center my-3">Testimonial</h2>
        <div className="row justify-content-center mt-3">
        <h4 className="text-center mb-3">Feedback by our <span className="themeColor"> old Patients</span></h4>
                    
            <div className="col-md-11 themeBg p-5 rounded m-2 text-white">
                <div className="themeBg mx-5 d-flex" >
                <img className="rounded-circle ms-5 testImg" src="https://images.tennis.com/image/private/t_q-best/tenniscom-prd/a34ajom83aptn8iwwodh.jpg" alt="" />
             <p className="themeBg m-2 ms-4" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, a beatae. Mollitia est exercitationem totam debitis facere velit deserunt rem fuga sequi cumque blanditiis eveniet illum vero, id minus adipisci!</p>

                

                </div>
            <div className="themeBg mx-5  ">

              <div className="border w-50 d-block m-auto ">    </div>
              <h3 className="themeBg float-end me-md-5 pe-5" data-aos="fade-right ">lorem</h3>
            </div>
            </div>
        </div>

        </div>
        
        </>
    )
}