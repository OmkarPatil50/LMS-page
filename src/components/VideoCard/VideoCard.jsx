import React from "react";
import "./VideoCard.css";

const VideoCard = () => {
  return (
    <div className="videocard">
      <section className="section-video-card-left">
        <section className="section-students">
          <div className="student">
            <img
              className="student-image"
              src="https://media.istockphoto.com/id/1184000274/photo/teenage-girl-doing-homework.webp?b=1&s=170667a&w=0&k=20&c=CtdmrQwBBlHb3nHR4-ns3_id2vor_WxVebmeClP9lqQ="
              alt="student-1"
            />
            <div className="add-emoji">😊+</div>
            <p className="student-name">Ridha</p>
          </div>
          <div className="student">
            <img
              className="student-image"
              src="https://images.unsplash.com/photo-1615961766467-198457a6c72f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHN0dWRpb3VzJTIwYm95fGVufDB8fDB8fHww"
              alt="student-2"
            />
            <p className="student-name">Ms. Kaur</p>
            <div className="student-active">
              <i className="fa-solid fa-microphone-lines"></i>
            </div>
          </div>
        </section>
        <section className="tools">
          <div className="tool">
            <button className="tool-icon">
              <i className="fa-solid fa-video"></i>
            </button>

            <p>Cam</p>
          </div>
          <div className="tool">
            <button className="tool-icon">
              <i className="fa-solid fa-microphone"></i>
            </button>

            <p>Mic</p>
          </div>
          <div className="tool">
            <button className="tool-icon">
              <i className="fa-regular fa-share-from-square"></i>
            </button>

            <p>Share</p>
          </div>
          <div className="tool">
            <button className="tool-icon">
              <i className="fa-regular fa-comments"></i>
            </button>

            <p>Chat</p>
          </div>
          <div className="tool">
            <button className="tool-icon tool-active">
              <i className="fa-solid fa-right-from-bracket tool-active"></i>
            </button>

            <p>Leave</p>
          </div>
        </section>
      </section>

      <section className="section-video-card-right">
        <div className="yt-holder">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KGMf314LUc0?si=xaGuIKTDptWyX8RD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default VideoCard;
