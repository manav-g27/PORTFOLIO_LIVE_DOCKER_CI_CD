import React, { useEffect, useState } from "react";
import "./index.css";
import AnimatedLetters from "../AnimatedLetters";
import aboutimg from '../../assets/img/contact-img.svg'
const Aboutme = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  let name = "About me";
  const nameArray = name.split("");

  useEffect(() => {
    const lot = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(lot);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('scroll',()=>{
        const z = document.getElementById('aboutimgset')
      const client_height= document.documentElement.clientHeight
      const memorySectionY = z.getBoundingClientRect().y;
        
      if(client_height>memorySectionY)
      {
        z.setAttribute("class","tilt-in-fwd-tr")
      }
      else
      {
        z.setAttribute("class","")
      }
    })
  }, [])

  return (
    <>
      <div id="about_main">
        <div>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <br></br>
          <h2>
            <p>
              I'm a very ambitious MERN-stack developer looking for a role in an
              established company with the opportunity to work with the
              latest technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a team
              player,a sports fanatic,photography enthusiast, and tech-obsessed!!!
            </p>
          </h2>
        </div>
        <div>
          <img src={aboutimg} id='aboutimgset' alt="#"></img>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
