import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <i className="fa-solid fa-laptop"></i> Classroom
        </li>
        <li>
          <i className="fa-solid fa-chalkboard"></i> Whiteboard
        </li>
        <li>
          <i className="fa-brands fa-youtube"></i> Videos
        </li>
        <li>
          <i className="fa-brands fa-slideshare"></i> Slide Show
        </li>
        <li>
          <i className="fa-regular fa-file"></i> Documents
        </li>
        <li>
          <i className="fa-solid fa-file-lines"></i> Doc.Cam
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
