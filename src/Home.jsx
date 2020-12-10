import React from "react";
import { NavLink } from "react-router-dom";
import Web from "../src/images/img3.svg"
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
          name="Grow your business with"
     imgsrc={Web}
     visit="/service"
     btname="Get Started"
     subtitle="We are the team of talented devloper making website"
      />
    </>
  );
}

export default Home;
