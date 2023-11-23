import React from "react";

const Topbar = () => {
  return (
    <div>
      <section className="section-topbar-left">
        <i className="fa-solid fa-chevron-left"></i>
        <h1>Basic Mathematics 101</h1>
      </section>
      <section className="section-topbar-right">
        <button className="btn-topbar">
          <i className="fa-solid fa-phone"></i>
          Call Teacher
        </button>
        <button className="btn-topbar">
          <i className="fa-solid fa-headset"></i>
          Support
        </button>
      </section>
    </div>
  );
};

export default Topbar;
