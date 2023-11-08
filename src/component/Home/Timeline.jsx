import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";

export default function Timeline(){

  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);

    return (
        <>
        <div className="App">
      <div className="main">
        <h1 className="head "> Timeline</h1>
        <div className="cont" >
          <ul>
            <li >
              <h3 className="heading">Doctor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                excepturi accusamus minus totam{" "}
              </p>
              <a>Read More </a>
              <span className="date">January 2021</span>
              <span className="circle"></span>
            </li>
            <li >
              <h3 className="heading">Doctor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                excepturi accusamus minus totam{" "}
              </p>
              <a>Read More </a>
              <span className="date">February 2021</span>
              <span className="circle"></span>
            </li>
            <li >
              <h3 className="heading">Doctor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                excepturi accusamus minus totam{" "}
              </p>
              <a>Read More </a>
              <span className="date">March 2021</span>
              <span className="circle "></span>
            </li>
            <li >
              <h3 className="heading">Doctor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                excepturi accusamus minus totam{" "}
              </p>
              <a>Read More </a>
              <span className="date">April 2021</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
        </>
    )
}