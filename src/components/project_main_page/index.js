import React from "react";
import "./index.css";
import arrow from "../../assets/img/arr.png";
import { useEffect } from "react";
import { Nav} from "react-bootstrap";
const ProjectM = () => {

    useEffect(() => {
        document.addEventListener('scroll',()=>{
            const z = document.getElementById('an')
          const zt = document.getElementsByClassName('l')
          const txt = document.getElementById('txt')
          const hov = document.getElementById('cover')
          const client_height= document.documentElement.clientHeight
          const memorySectionY = z.getBoundingClientRect().y;
            
          if(client_height>memorySectionY*95/100)
          {
            zt[0].style.animation = 'mt 4s ease forwards'
            zt[1].style.animation = 'mt 4s ease forwards'
            txt.style.animation='tx 3s forwards 2s'
            hov.style.animation='co 4s ease forwards'
          }
           else
           {
            zt[0].style.animation = ''
            zt[1].style.animation = ''
            txt.style.animation=''
            hov.style.animation=''
           } 
        })
      }, [])

  return (
    <div id="main_div_pro">
      <div>
        <div id="l1">
          <div className="l"></div>
        </div>

        <div id="an">
          <div id="txt">Projects</div>
          <div id="cover">
            <Nav.Link href='/project'><img src={arrow} id="ig" alt='arrow'/></Nav.Link>
          </div>
        </div>

        <div id="l2">
          <div className="l"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectM;
