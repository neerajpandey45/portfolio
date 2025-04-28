import React, { useState } from "react";
import classes from "./about.module.css";
import img from "../src/assets/img.jpg";
import { Link, useNavigate } from "react-router-dom";
import resume from "../src/assets/neerajresume.pdf";
// import ScrollToTop from "./scrolltoTop";
const About = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState("");
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={classes.main}>
      <div className={classes.navbar}>
        <Link>
          <h3>Home</h3>
        </Link>
        <Link to="/project">
          <h3>Project</h3>
        </Link>
        <Link>
          <h3>About</h3>
        </Link>
        <Link>
          <h3 onClick={toggle}>Contact Us</h3>
          {open && (
            <ul>
              <li>
                <i className="bi bi-whatsapp"></i>9532867700
              </li>
              <li  onClick={() => window.open("https://www.instagram.com", "_blank")}>
                <i className="bi bi-instagram"> </i>Instagram
              </li>
              <li onClick={() => window.open("https://www.linkedin.com/in/neeraj-pandey-9b49522b9/", "_blank")}>
                <i className="bi bi-linkedin"></i>Linked In
              </li>
            </ul>
          )}
        </Link>
      </div>
      <div className={classes.profile}>
        <img src={img} alt="photo" />
      </div>
      <div className={classes.about}>
        <div className={classes.pr}>
          <h3>
            <span>Profile:</span>
            <span>
              Hi, I am Neeraj Pandey, a dedicated Front-End Developer skilled in
              HTML, CSS, JavaScript, and React. I create responsive, dynamic
              user interfaces with clean, efficient code. I’m passionate about
              building seamless web experiences and continuously learning new
              technologies to stay ahead in the ever-evolving world of front-end
              development.
            </span>
          </h3>
        </div>
        <div className={classes.edu}>
          <h3>
            <span>Education:</span>
            <span>
              I am Neeraj Pandey, a passionate and dedicated learner. I
              completed my Bachelor of Science (B.Sc.) with a focus on core
              subjects, and I am currently pursuing a Master of Computer
              Applications (MCA). My academic background equips me with a solid
              foundation in technology and software development.
            </span>
          </h3>
        </div>
        <div className={classes.skill}>
          <h3>
          Technical skills:
              Html,Css,JavaScript,
               React.js,Python,Sql
            <a href={resume} download="neeraj_pandey_resume">
              Download Cv
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
