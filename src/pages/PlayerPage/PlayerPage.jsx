import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./PlayerPage.css";
import VideoCard from "../../components/VideoCard/VideoCard";

const PlayerPage = () => {
  return (
    <div className="player-page">
      <Topbar />
      <Sidebar />
      <VideoCard/>
    </div>
  );
};

export default PlayerPage;
