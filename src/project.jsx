import React from "react";
import classes from "./project.module.css";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div className={classes.project}>
      <div className={classes.cards}>
        <h5>Learning Management System</h5>
        <h5>Portfolio</h5>
        <h5>Verify Password from database with voice</h5>
      </div>
      <div className={classes.back}>
        <Link to="/">
          <i className="bi bi-arrow-left-square-fill"></i>
        </Link>
      </div>
    </div>
  );
};

export default Project;
