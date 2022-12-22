import React from "react";
import "./index.css";
import pulsa from "../../assets/img/plusa.png";
import { Nav} from "react-bootstrap";
const Footer = () => {
  return (
    <div id="foot_div_main1">
      <div id="foot_div_main">
        <div class="text-wrapper">
          <h1>EATCODESLEEP-</h1>
          <h1>EATCODESLEEP-</h1>
          <h1>EATCODESLEEP-</h1>
          <h1>EATCODESLEEP-</h1>
          <h1>EATCODESLEEP-</h1>
          <h1>EATCODESLEEP-</h1>
        </div>
      </div>
      <div id="logo-set">
        <div>
          <div className="App29">
            <svg
              width="auto"
              height="30vh"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame 1">
                <path
                  id="Polygon 1"
                  d="M58 55.5L40 78.4497L40 32.5503L58 55.5Z"
                  fill="#D24545"
                />
                <path
                  id="Polygon 2"
                  d="M50 43.5L68.75 20.5503V66.4497L50 43.5Z"
                  fill="#D24545"
                />
                <path
                  id="Polygon 3"
                  d="M67 20.5L49.5 41L42.5 32L67 20.5Z"
                  fill="#223955"
                />
                <path
                  id="Polygon 4"
                  d="M41.4567 79.6683L58.8174 57.7827L66.3275 66.5599L41.4567 79.6683Z"
                  fill="#223955"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="foot-link">
        <div className="foot-link2">
        <div>
            <img src={pulsa} alt="plus" className="plus" />
          </div>
          <div>
            <Nav.Link href='/'><h3>Home</h3></Nav.Link>
          </div>
          <div>
          <Nav.Link href='#skl'><h3>Skills</h3></Nav.Link>
          </div>
          <div>
          <Nav.Link href='/project'><h3>Projects</h3></Nav.Link>
          </div>
          <div>
            <img src={pulsa} alt="plus" className="plus" />
          </div>
        </div>
      </div>
      <div className="foot-link">
        <div className="foot-link3">
          <div>
            <img src={pulsa} alt="plus" className="plus" />
          </div>
          <div id="img-setter">
            <div>
              <h3>&#169; MANAV GUPTA</h3>
            </div>
          </div>
          <div>
            <img src={pulsa} alt="plus" className="plus" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
