import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar-top">
        <div className="logo">
        </div>
        <button className="btn-sidebar active">
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
      </section>
      <section className="sidebar-center">
        <button className="btn-sidebar active relative">
          <i className="fa-regular fa-bell"></i>
          <div className="badge"></div>
        </button>
        <button className="btn-sidebar">
          <i className="fa-regular fa-clock"></i>
        </button>
        <button className="btn-sidebar">
          <i className="fa-solid fa-clipboard-check"></i>
        </button>
        <button className="btn-sidebar">
          <i className="fa-regular fa-eye"></i>
        </button>
        <button className="btn-sidebar">
          <i className="fa-solid fa-user-group"></i>
        </button>
        <button className="btn-sidebar">
          <i className="fa-solid fa-chart-simple"></i>
        </button>
      </section>
      <section className="sidebar-user">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KXeOUG0MPRAIhQLZkvSpMFf84vq2ZMzgLHJ_SCZ6JhXn_B2tHMkiQdZ6cnCSfB3H5tE&usqp=CAU"
          alt="user"
          className="sidebar-user-img"
        />
      </section>
    </aside>
  );
};

export default Sidebar;
