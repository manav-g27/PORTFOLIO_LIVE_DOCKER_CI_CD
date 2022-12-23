import React, { useEffect, useState } from "react";
import "./index.css";
import profile from '../../assets/img/header-img.svg'
import AnimatedLetters from "../AnimatedLetters";
import { Nav} from "react-bootstrap";
const Component1 = () => {

  const [letterClass,setLetterClass] = useState('text-animate')
  let name = 'Manav'
  let job = 'web developer.'
  const nameArray = name.split('')
  const jobArray = job.split('')

  useEffect(()=>
  {
    const lot = setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },4000)
    return () => {
      clearTimeout(lot)
  }
  },[])

  return (
    <>
      <div id="main-div">
        <div id="sub-div">
          <div id='text-area'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <br>
              </br>
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              &nbsp;
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}></AnimatedLetters>
            <br></br>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}></AnimatedLetters>
            </h1>
            <h2>MERN Stack Developer</h2>
            <br></br>
                <Nav.Link href='/contact'><button className="vvd"><span>Let’s Connect</span></button></Nav.Link>
          </div>
          <div id='img-com'>
            <img src = {profile} alt='#' id='pro_pic' className="floating"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
