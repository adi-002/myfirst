import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Web from "../src/images/contact.svg"
import Common from "./Common";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    message: "",

  })

  const InputEvent = (events) =>{
    const{name,value}=events.target;
    setData((preVal) =>{
      return{
        ...preVal,
        [name] : value,
      }
    })
  }
  const formSubmit = (e) => {
   e.preventDefault();
   alert(`My name: ${data.fullname}, Mobile number: ${data.mobile} Email-id: ${data.email} and my query is ${data.message}`)
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6  col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Enter Your Name</label>
                <input type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="write your name here" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Mobile Number</label>
                <input type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="mobile"
                  value={data.mobile}
                  onChange={InputEvent}
                  placeholder="mobile number" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                />
              </div>
              <div class="col-auto">
                <button 
                type="submit"
                 class="btn btn-outline-primary mb-2 contactbtn">
                 Submit your query
                 </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
