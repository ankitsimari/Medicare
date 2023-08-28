import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@mui/material";

export default function Testimonial() {
let page=0;

  const handleNext = () => {
 page++;
 console.log(page)
  };

  const handlePrev = () => {
  page--;
  };

let arr = [
    {
        Image:"https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png",
        name:"MUkhiya G"
    },
    {
        Image:"https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png",
        name:"MUkhiya G"
    },
]





// import { useEffect} from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// data-aos="fade-up"

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container mt-5 d-none d-lg-block">
        <h2 className="text-center my-3">Testimonial</h2>
        <div className="row justify-content-center mt-3">
          <h4 className="text-center mb-3">
            Feedback by our <span className="themeColor"> old Patients</span>
          </h4>

          <div className="col-md-11 themeBg p-5 rounded m-2 text-white">
            <div className="themeBg mx-5 d-flex">
              <img
                className="rounded-circle ms-5 testImg"
                src={arr[page].Image}
                alt=""
              />
              <p className="themeBg m-2 ms-4" data-aos="fade-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, a beatae. Mollitia est exercitationem totam debitis
                facere velit deserunt rem fuga sequi cumque blanditiis eveniet
                illum vero, id minus adipisci!
              </p>
            </div>
            <div className="themeBg mx-5  ">
              <div className="border w-50 d-block m-auto "> </div>
              <h3
                className="themeBg float-end me-md-5 pe-5"
                data-aos="fade-right "
              >
                lorem
              </h3>
            </div>
            <div className="col-6 text-right testimonialBtn float-end  mb-0">
              <a
                className="btn btn-primary mb-3 mr-1"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="prev"
                onClick={handlePrev}
              >
                <i className="fa fa-arrow-left"></i>
              </a>
              <a
                className="btn btn-primary mb-3 me-md-3"
                href="#carouselExampleIndicators2"
                role="button"
                data-slide="next"
                onClick={handleNext}
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
