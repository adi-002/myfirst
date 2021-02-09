import React from "react";
import { Link, NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import serviceImg from '../src/images/service.svg';
import contactImg from '../src/images/contact.svg';
import aboutImg from '../src/images/aboutus.png';
import "./Home.css"

const picHeading = {
  color: "blue"
}
const picHeight = {

}
function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="d-flex">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow your business with
                    <strong className="brand-name"> @d! Technical</strong>
                  </h1>
                  <h5 className="my-3">We are the team of talented devloper.</h5>
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                                        </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={serviceImg} className="img-fluid animated" alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
