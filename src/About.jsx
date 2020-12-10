import React from "react";
import Web from "../src/images/about2.png"
import Common from "./Common";

function About() {
  return (
    <>
   <Common 
     name="Aditya Shrivastava - creator of"
     imgsrc={Web}
     visit="/contact"
     btname="Contact Now"
     subtitle="This website is purely based on REACT."
   />
    </>
  );
}

export default About;
