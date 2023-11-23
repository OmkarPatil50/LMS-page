import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-info">
        <section className="section-topbar-left">
          <div className="arrow-left flex-center">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <h1 className="page-heading">Basic Mathematics 101</h1>
        </section>
        <section className="section-topbar-right">
          <button className="btn-topbar flex-center">
            <i className="fa-solid fa-phone flex-center"></i>
            Call Teacher
          </button>
          <button className="btn-topbar flex-center support">
            <i className="fa-solid fa-headset flex-center"></i>
            Support
          </button>
        </section>
      </div>
      <nav className="navbar">
        <ul className="navlist">
          <li className="nav-item">
            <i className="fa-solid fa-laptop"></i> Classroom
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-chalkboard"></i> Whiteboard
          </li>
          <li className="nav-item nav-active flex-center">
            <i className="fa-brands fa-youtube"></i> Videos
          </li>
          <li className="nav-item">
            <i className="fa-brands fa-slideshare"></i> Slide Show
          </li>
          <li className="nav-item">
            <i className="fa-regular fa-file"></i> Documents
          </li>
          <li className="nav-item">
            <i className="fa-solid fa-file-lines"></i> Doc.Cam
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
