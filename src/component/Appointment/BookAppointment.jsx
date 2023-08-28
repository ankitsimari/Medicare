import SucessAlert from "../Login/SucessAlert";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Checkout from "../Booking/Checkout";

export default function BookAppointment({ name }) {

const {isAuth} = useContext(AuthContext)
console.log(isAuth)

  return (
    <>
      <Button
        type="button"
        className="btn btn-primary fw-bold px-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        disabled={!isAuth}
      >
        {name}
      </Button>

      <div
        className="modal fade booking"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Booking
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <Checkout/>
    
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
