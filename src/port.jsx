import React from "react";
import classes from "./port.module.css";
import photo from "./assets/photo.jpg";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import gmail from "./assets/gmail.png";
import whatsapp from "./assets/whatsapp.png";
import resume from "./assets/resume.pdf";
import jobimages from "./assets/jobimages.jpg";
import portfolio from "./assets/portfolio.jpg";
import html from "./assets/html.png";
import css from "./assets/css.png";
import react from "./assets/react.svg";
import js from "./assets/js.png";
import nextjs from "./assets/nextjs.jpeg";
import bootstrap from "./assets/bootstrap.png";
import tailwind from "./assets/tailwind.png";
import python from "./assets/python.png";
import csharp from "./assets/csharp.png";
import jquery from "./assets/jQuery.png";
import Sql from "./assets/Sq.png";
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
                <div className={classes.typing}>Hi I'm a .NET Developer</div>
                <div className="text-white font-extralight">
                  {/* <p>
                    Passionate Web Developer crafting responsive, user-friendly
                    websites.
                  </p> */}
                  <p>
                    Passionate .NET Developer building secure, scalable, and
                    data-driven web applications.
                  </p>

                  {/* <p>
                    Skilled in HTML, CSS, JavaScript, React, and modern web
                    technologies.
                  </p> */}
                  <p>
                    Experienced with C#, ASP.NET MVC, .Net Core, SQL Server, and
                    frontend technologies like React.js, Next.js, HTML, and
                    modern CSS.
                  </p>
                </div>
              </span>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-center">
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
            {/* <p className="text-white p-4" style={{ fontSize: "20px" }}>
              Hi, I am Neeraj Pandey--a passionate Frontend Web Developer
              specializing in React.js, creating responsive and user-friendly
              interfaces. With strong skills in CSS frameworks like Bootstrap
              and Tailwind, I build clean, modern websites that adapt across all
              devices. I focus on performance, usability, and delivering
              seamless user experiences through efficient code.
            </p> */}
            <p className="text-white p-4" style={{ fontSize: "20px" }}>
              Hi, I am Neeraj Pandey—a dedicated .NET Developer with hands-on
              experience in C#, ASP.NET MVC, .Net Core ADO.NET, Entity
              Framework, and SQL Server. I specialize in building secure,
              scalable, and data-driven web applications with clean architecture
              and efficient backend logic.
              <br />
              <br />
              Along with backend development, I also have frontend experience in
              React.js, Next.js, JavaScript, HTML, CSS, and modern CSS frameworks like
              Bootstrap and Tailwind, enabling me to create responsive and
              user-friendly interfaces.
            </p>
          </div>
        </div>
      </section>
      <section id="education" className=" bg-gray-800 text-white ">
        <div className="container mx-auto px-4 ">
          <h2>Education:</h2>
          <div className="flex flex-col lg:flex-row gap-6 py-3">
            <div className="flex-1 pl-5 border">
              <h5>Post Graduation:</h5>
              <span>Master of Computer Application(Mca)</span>
              <p>Galgotias University Greater Noida Up.</p>
            </div>
            <div className=" flex-1 pl-5 border">
              <h5>Graduation:</h5>
              <span>Bachelor of Science(Bsc.)</span>
              <p>K.N.I.P.S.S.Sultanpur Up.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-2 bg-gray-800 text-white">
        <div className="container py-3">
          <h2 className="text-white">Skills:</h2>
          <div className={classes.card}>
            <h4>.NET / Backend Skills</h4>
            <div className="row text-center text-break">
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">C Sharp</p>
                  <img src={csharp} />
                </div>
              </div>
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Javascript</p>
                  <img src={js} />
                </div>
              </div>
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">jQuery</p>
                  <img src={jquery} />
                </div>
              </div>
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Sql</p>
                  <img src={Sql} />
                </div>
              </div>
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Asp.Net</p>
                </div>
              </div>

              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Asp.Net Mvc</p>
                </div>
              </div>

              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">.Net Core</p>
                </div>
              </div>

              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Ado.Net</p>
                </div>
              </div>

              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Entity FrameWork</p>
                </div>
              </div>

              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Linq</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-2 bg-gray-800 text-white">
        <div className="container py-3">
          {/* <h2 className="text-white">Skills:</h2> */}
          <div className={classes.card}>
            <h4>Frontend Web Development</h4>
            <div className="row text-center text-break">
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Html</p>
                  <img src={html} />
                </div>
              </div>

              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Css</p>
                  <img src={css} />
                </div>
              </div>
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Javascript</p>
                  <img src={js} />
                </div>
              </div>

              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">React.js</p>
                  <img src={react} />
                </div>
              </div>
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Next.js</p>
                  <img src={nextjs} />
                </div>
              </div>
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Bootstrap</p>
                  <img src={bootstrap} />
                </div>
              </div>
              <div className="col-6 col-sm-3 mb-3">
                <div>
                  <p className="text-2xl">Tailwind</p>
                  <img src={tailwind} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-4 bg-gray-800">
        <div className="container mx-auto">
          <div className="row">
            <div className="text-amber-500">
              <h1>Projects</h1>
            </div>
            <div className="flex flex-col justify-center items-center text-white">
              <h1>Job Portal Web Application</h1>
              <div className="border rounded-4 space-y-3 px-2 p-3 mb-2">
                <div className="flex justify-center">
                  <img
                    src={jobimages}
                    style={{
                      width: "700px",
                      height: "400px",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <ul className="list-disc list-outside m-0 space-y-2 text-2xl">
                  <li>
                    Built with Next.js, React.js, Tailwind CSS, and Bootstrap.
                  </li>
                  <li>
                    Implemented JWT authentication and role-based dashboards for
                    recruiters and users.
                  </li>
                  <li>
                    Developed features like job posting, resume uploads, and
                    profile management.
                  </li>
                  <li>
                    Used MongoDB for backend integration and React Hooks for
                    state management.
                  </li>
                </ul>

                <div className="flex justify-end mr-5 pt-1">
                  <a
                    href="https://np-job-portal.vercel.app" // your hosted job portal URL
                    target="_blank" // open in new tab
                    rel="noopener noreferrer" // security best practice
                  >
                    <button className="btn btn-primary btn-lg">Veiw</button>
                  </a>
                </div>
              </div>
              <h1>Portfolio</h1>
              <div className="border rounded-4 space-y-3 px-2 p-3 mb-2">
                <div className="flex justify-center">
                  <img
                    src={portfolio}
                    style={{
                      width: "700px",
                      height: "200px",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <ul className="list-disc list-outside m-0 space-y-2 text-2xl">
                  <li>
                    Built a personal portfolio using HTML, CSS, JavaScript,
                    React.js, and Bootstrap.
                  </li>
                  <li>
                    Showcased projects and skills through a responsive,
                    interactive user interface.
                  </li>
                  <li>
                    Continuously maintained to reflect technical growth and
                    learning progress.
                  </li>
                </ul>
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
                <a
                  href=""
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/neeraj-pandey-9b49522b9/",
                      "_blank"
                    )
                  }
                >
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
                <a
                  href=""
                  onClick={() =>
                    window.open("https://github.com/neerajpandey45", "_blank")
                  }
                >
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
