import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <section className="section-topbar-left">
        <div className="arrow-left">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <h1 className="page-heading">Basic Mathematics 101</h1>
      </section>
      <section className="section-topbar-right">
        <button className="btn-topbar">
          <i className="fa-solid fa-phone"></i>
          Call Teacher
        </button>
        <button className="btn-topbar support">
          <i className="fa-solid fa-headset"></i>
          Support
        </button>
      </section>
    </div>
  );
};

export default Topbar;
