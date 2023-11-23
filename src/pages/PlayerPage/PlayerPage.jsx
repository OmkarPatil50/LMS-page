import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./PlayerPage.css";

const PlayerPage = () => {
  return (
    <div className="player-page">
      <Topbar />
      <Sidebar />
    </div>
  );
};

export default PlayerPage;
