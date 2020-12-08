import React from "react";
import Web from "../src/images/about2.png"
import Common from "./Common";

function About() {
  return (
    <>
   <Common 
     name="Welcome to About Page"
     imgsrc={Web}
     visit="/contact"
     btname="Contact Now"
   />
    </>
  );
}

export default About;
