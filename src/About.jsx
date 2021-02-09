import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import back1 from "../src/images/back2.jpg";
import back2 from "../src/images/back1.jpg";
import back3 from "../src/images/back3.png";
import member1 from "../src/images/member1.jpg";
import member2 from "../src/images/member2.jpg";
import member3 from "../src/images/member3.jpg";
import member4 from "../src/images/member4.jpg";
import member5 from "../src/images/member5.jpg";
import member6 from "../src/images/member6.jpg";

import "./About.css";

function About() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000} className="box">
          <img
            height="500"
            className="d-block w-100"
            src={back1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000} className="box">
          <img
            height="500"
            className="d-block w-100"
            src={back2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000} className="box">
          <img
            height="500"
            className="d-block w-100"
            src={back3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>


      <h1 className=" my-5" style={{ marginLeft: "110px" }}><b>OUR TEAM </b></h1>


      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={member1} />
              </div>
              <div className="team-content">
                <h3 className="name">Michele Miller</h3>
                <h4 className="title">Web Developer</h4>
              </div>
              <ul className="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={member2} />
              </div>
              <div className="team-content">
                <h3 className="name">J. Watson</h3>
                <h4 className="title">Andriod Devloper</h4>
              </div>
              <ul className="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={member3} />
              </div>
              <div className="team-content">
                <h3 className="name">Sangita Kashyap</h3>
                <h4 className="title">IOS Devloper</h4>
              </div>
              <ul className="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={member4} />
              </div>
              <div className="team-content">
                <h3 className="name">Mary Huntley</h3>
                <h4 className="title">H.O.D Digital Marketing</h4>
              </div>
              <ul className="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={member5} />
              </div>
              <div className="team-content">
                <h3 className="name">Harry Miller</h3>
                <h4 className="title">IOS Devloper</h4>
              </div>
              <ul className="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={member6} />
              </div>
              <div className="team-content">
                <h3 className="name">Justin Ramos</h3>
                <h4 className="title">Software Tester</h4>
              </div>
              <ul className="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;