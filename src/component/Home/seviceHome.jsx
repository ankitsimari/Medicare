import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import serviceImg from "../Media/Rectangle 1.png";
import { Button } from "@mui/material";

export default function ServiceHome() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container my-4 mb-5">
        <div className="row justify-content-center">
          <h1 className="text-center">
            All Our <span className="themeColor">Services</span>
          </h1>
          <div className="col-md-11 themeBg d-flex mt-4 rounded">
            <div className="row themeBg rounded">
              <div
                className="col-md-4 card themeBg p-4 py-5 border-0 text-center"
                data-aos="fade-up"
              >
                <div className="themeBg ">
                  <img
                    className="rounded-3 mb-2"
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg"
                    alt=""
                  />
                </div>

                <div className="themeBg">
                  <h4 className="themeBg text-white my-2">Book Appointment</h4>
                  <p className="themeBg text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, totam?
                  </p>
                </div>
              </div>

              <div
                className="col-md-4 card themeBg p-4 py-5 border-0 text-center"
                data-aos="fade-up"
              >
                <div className="themeBg ">
                  <img
                    className="rounded-3 mb-2"
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg"
                    alt=""
                  />
                </div>

                <div className="themeBg">
                  <h4 className="themeBg text-white my-2">Book Health Check-Up</h4>
                  <p className="themeBg text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, totam?
                  </p>
                </div>
              </div>

              <div
                className="col-md-4 card themeBg p-4 py-5 border-0 text-center"
                data-aos="fade-up"
              >
                <div className="themeBg ">
                  <img
                    className="rounded-3 mb-2"
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg"
                    alt=""
                  />
                </div>

                <div className="themeBg">
                  <h4 className="themeBg text-white my-2">Consult Online </h4>
                  <p className="themeBg text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum, totam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5  ">
        <div className="row ">
          <div className="col-md-6 " data-aos="fade-up">
            <img className="ms-md-4 ps-2 w-100" src={serviceImg} alt="" />
          </div>
          <div
            className="col-md-6 mt-md-5 pt-md-5 ps-md-5 marginZero"
            data-aos="fade-up"
          >
            <h2 className="mt-md-3">
              Ready to be <span className="themeColor">Healthy</span>
            </h2>
            <p className="pe-5 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              voluptas perspiciatis atque aut. Quam nemo quia praesentium quod
              asperiores voluptatum excepturi. Quas eveniet expedita amet atque
              natus esse velit ipsa!
            </p>
            <Button className="btn mt-4 fw-bold px-3">Get Started</Button>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-10">
            
          </div>
        </div>
      </div>
    </>
  );
}
