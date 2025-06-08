import React from "react";
import classes from "./port.module.css";
import photo from "./assets/photo.jpg";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import gmail from "./assets/gmail.png";
import whatsapp from "./assets/whatsapp.png";
import resume from "./assets/resume.pdf"
const Port = () => {
  return (
    <div className={classes.main}>
      <div className={classes.nav}>
        <nav className="w-100 bg-gray-800  top-0 p-3 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <h5>Neeraj Pandey</h5>

            <ul className="flex space-x-6">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="w-full bg-gray-800">
        <div className="container p-4">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
              <span className="h5 fw-semibold text-center">
                <div className={classes.typing}>Hi I'm a web developer</div>
                <div className="text-white font-extralight">
                  <p>
                    Passionate Web Developer crafting responsive, user-friendly
                    websites.
                  </p>
                  <p>
                    Skilled in HTML, CSS, JavaScript, React, and modern web
                    technologies.
                  </p>
                </div>
              </span>
            </div>
            <div className="col-12 col-md-6 d-flex  justify-content-center justify-content-md-center">
              <img
                src={photo}
                alt="Profile"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="py-5 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">About Me</h2>
          <div className="bg-gray-800 border">
            <p className="text-white p-4" style={{ fontSize: "20px" }}>
              Hi, I am Neeraj Pandey--a passionate Frontend Web Developer
              specializing in React.js, creating responsive and user-friendly
              interfaces. With strong skills in CSS frameworks like Bootstrap
              and Tailwind, I build clean, modern websites that adapt across all
              devices. I focus on performance, usability, and delivering
              seamless user experiences through efficient code.
            </p>
          </div>
        </div>
      </section>
      <section id="education" className=" bg-gray-800 text-white py-5">
        <div className="container mx-auto px-4 ">
          <h2>Education:</h2>
          <div className="flex flex-col lg:flex-row gap-6 py-3">
            <div className=" flex-1 pl-5 border">
              <h5>Graduation:</h5>
              <span>Bachelor of Science(Bsc.)</span>
              <p>K.N.I.P.S.S.Sultanpur Up.</p>
            </div>
            <div className="flex-1 pl-5 border">
              <h5>Post Graduation:</h5>
              <span>Master of Computer Application(Mca)</span>

              <p>Galgotias University Greater Noida Up.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-5 bg-gray-800 text-white">
        <div className="container py-3">
          <h2 className="text-white">Skills:</h2>
          <div className={classes.card}>
            <h4>Technical Skills:</h4>
            <div className="row text-center text-break">
              <div className="col-6 col-sm-3 mb-2">
                <p className="border py-2">Html</p>
              </div>
              <div className="col-6 col-sm-3 mb-2">
                <p className="border px-3 py-2">Css</p>
              </div>
              <div className="col-6 col-sm-3 mb-2">
                <p className="border px-3 py-2">Javascript</p>
              </div>
              <div className="col-6 col-sm-3 mb-2">
                <p className="border px-3 py-2">React.js</p>
              </div>
              <div className="col-6 col-sm-3 mb-2">
                <p className="border px-3 py-2">Bootstrap</p>
              </div>
              <div className="col-6 col-sm-3 mb-2">
                <p className="border px-3 py-2">Tailwind</p>
              </div>

              <div className="col-6 col-sm-3 mb-2">
                <p className="border px-3 py-2">Python</p>
              </div>
              <div className="col-6 col-sm-3 mb-2">
                <p className="border px-3 py-2">Sql</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="row  text-white">
            <h2>Projects</h2>
            <div className="col-12 col-sm-12 col-md-6">
              <h5>Learning Management System(Lms)</h5>
              <div className="border px-2 p-3 mb-2">
                <li>
                  Built responsive LMS using React with Bootstrap and Tailwind
                  CSS for sleek design.
                </li>
                <li>
                  Added interactive features with JavaScript for smooth user
                  experience.
                </li>
                <li>
                  Developed an exam module to handle quizzes, timers, and
                  scoring efficiently.
                </li>
                <div className="flex justify-center pt-3">
                  <button className="btn btn-primary btn-lg">Veiw</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <h5>Portfolio</h5>
              <div className="border px-2 p-3 mb-2">
                <li>
                  Developed a personal portfolio showcase projects, skills, and
                  experience.
                </li>
                <li>
                  Utilized Tailwind CSS and Bootstrap for a responsive, UI
                  across all screen sizes.
                </li>
                <li>
                  Integrated navigation and interactive sections to enhance user
                  experience.
                </li>
                <div className="flex justify-center pt-3">
                  <button className="btn btn-primary btn-lg">Veiw</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-5 bg-gray-800 text-white">
        <div className="container border py-3">
          <h3>Contact</h3>
          <div className="row text-center">
            <div className="col-12 col-md-3 mb-2">
              <h3 className="inline-flex items-center gap-2 cursor-pointer">
                Email
                <a href="">
                  <img
                    src={gmail}
                    alt="gmail"
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </h3>
              <p className="text-break">neerajpandey4578@gmail.com</p>
            </div>
            <div className="col-12 col-md-3 mb-3 text-center">
              <h3 className=" inline-flex items-center gap-2">
                Linkedin
                <a href="" onClick={()=> window.open("https://www.linkedin.com/in/neeraj-pandey-9b49522b9/", "_blank")}>
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </h3>
            </div>
            <div className="col-12 col-md-3 mb-3 text-center">
              <h3 className="inline-flex items-center gap-2">
                Github
                <a href="" onClick={()=>window.open("https://github.com/neerajpandey45","_blank")}>
                  <img
                    src={github}
                    alt="github"
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "cover",
                      backgroundColor: "white",
                    }}
                  />
                </a>
              </h3>
            </div>
            <div className="col-12 col-md-3 mb-3 text-center">
              <h3 className=" inline-flex items-center gap-2 cursor-pointer">
                Whatsapp
                <a href="">
                  <img
                    src={whatsapp}
                    alt="LinkedIn"
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "cover",
                    }}
                  />
                </a>
              </h3>
              <p>9532867700</p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="bg-gray-800 py-2 text-center">
        <div className="container mx-auto px-4">
          <a
            href={resume}
            download="neeraj_pandey_resume.pdf"
            className="font-bold text-blue-800"
            style={{ fontSize: "20px" }}
          >
            Download Cv
          </a>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 np. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Port;
