import React from 'react'

export default function 
() {
  return (
    <div>
             <div className="modal-body">
              <input
                type="text"
                className="form-control m-2 "
                placeholder="Full Name"
              />
              <input
                type="text"
                className="form-control m-2 "
                placeholder="City"
              />
              <input
                type="text"
                className="form-control m-2 "
                placeholder="Age"
              />
              <span className="d-flex">
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder="Height"
                />
                <input
                  type="text"
                  className="form-control m-2"
                  placeholder="Weight"
                />
              </span>
              <label className="ms-2" htmlFor="">
                Previous data
              </label>
              <input type="file" className="form-control m-2 " />

    
            </div>
    </div>
  )
}
