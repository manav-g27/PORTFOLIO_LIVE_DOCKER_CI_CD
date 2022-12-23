import React, { useEffect, useState } from "react";
import "./index.css";
import AnimatedLetters from "../AnimatedLetters";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
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
      <div id="skl"></div>
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
                  I have a good experience in HTML, CSS, React, NodeJS,
                  Express.Js, Javascript, MongoDB, C/C++, and Python. I also
                  have good communication skills,management skills along with exceptional
                  problem-solving skills. I like to deliver my best output on
                  time. 
                </p>
                <p align="LEFT">
                I also worked as a MERN developer in Eliteinfosis where
                  I developed their website(both frontend as well as the
                  backend).
                </p>
                <p>
                I was the senior member of IEEE student branch of my
                  college where I coordinated various tech activities.
                </p>
              </h2>
            </div>
          </div>
          <div>
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faPython} color="#DD0031" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills2;
