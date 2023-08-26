import SucessAlert from "../Login/SucessAlert";
import Button from '@mui/material/Button';

export default function BookAppointment({name}){

    return(
<>

<Button type="button" className="btn btn-primary fw-bold px-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  {name}
</Button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input type="text" className="form-control m-2 " placeholder="Full Name" />
        <input type="text" className="form-control m-2 " placeholder="City" />
        <input type="text" className="form-control m-2 " placeholder="Age" />
        <span className="d-flex">
        <input type="text" className="form-control m-2" placeholder="Height" />
        <input type="text" className="form-control m-2" placeholder="Weight" />
        </span>
        <label className="ms-2" htmlFor="">
          Previous data
        </label>
        <input type="file" className="form-control m-2 "  />

        {/* <span className="d-flex">
        <input class="form-check-input p-2 m-2" type="checkbox" value="" id="flexCheckDefault"/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis deleniti, debitis reprehenderit illo quo suscipit dignissimos, blanditiis accusamus esse, fugiat excepturi quasi magnam beatae officia error tempora hic non veniam.</p>
        </span> */}
  
      </div>
      <div className="modal-footer">
        <Button type="button" className="btn btn-secondary fw-bold" data-bs-dismiss="modal">Close</Button>
        {/* <button type="button" className="btn btn-primary">Book Appointment</button> */}
        <SucessAlert name="Book Appointment"/>
      </div>
    </div>
  </div>
</div>
</>
    )
}