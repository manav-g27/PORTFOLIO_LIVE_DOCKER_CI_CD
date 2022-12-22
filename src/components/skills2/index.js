import React, { useEffect, useState } from "react";
import "./index.css";
import AnimatedLetters from "../AnimatedLetters";
import TextShpere from "../TextSphere";

const Skills2 = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  let name = "Skills & Experience";
  const nameArray = name.split("");

  useEffect(() => {
    const lot = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => {
      clearTimeout(lot);
    };
  }, []);

  return (
    <>
    <div id='skl'></div>
      <div id="skill2_maindiv">
        <div id="skill2_subdiv">
          <div>
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
                  I'm a very ambitious front-end developer looking for a role in
                  an established IT company with the opportunity to work with
                  the latest technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                  I'm quiet confident, naturally curious, and perpetually
                  working on improving my chops one design problem at a time.
                </p>
                <p>
                  If I need to define myself in one sentence that would be a
                  family person, father of a beautiful daughter, a sports
                  fanatic, photography enthusiast, and tech-obsessed!!!
                </p>
              </h2>
            </div>
          </div>
          <div>
            <TextShpere/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills2;
