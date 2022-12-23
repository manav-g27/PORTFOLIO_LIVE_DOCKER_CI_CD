import React from "react";
import Particlebackground from "../Particlejs/particlebackground";
import "./index.css";
const Contact = () => {
  return (
    <>
      <div id="contact_main">
        <div id="ts">
          <Particlebackground />
        </div>
        <div id="content">
          <div id="subc1">
            <h1>CONTACT</h1>
          </div>
          <div id="subc2">
            <h3>
              Email: <span>201390@juitsolan.in</span>
            </h3>
            <br></br>
            <h3>
              Instagram: <span>manav-g27</span>
            </h3>
            <br></br>
            <h3>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/manav-gupta-72ab11212?jobid=1234&lipi=urn%3Ali%3Apage%3Ad_jobs_easyapply_pdfgenresume%3BMW8BnAj7RpO6t6EDnh3q6w%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_jobs_easyapply_pdfgenresume-v02_profile"
                style={{ "text-decoration": "none" }}
              >
                <span>manavgupta</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
