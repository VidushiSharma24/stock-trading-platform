import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div className="row p-3 text-muted" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <div className="col-6 p-3 text-center">
          <img src="media/images/myPhoto.png" style={{ borderRadius: "100%", width: "50%" }} alt="Founder" />
          <h4 className="mt-5">Vidushi Sharma</h4>
          <h6>Creator & Full-Stack Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Vidushi built this Stock Trading Platform from scratch as a full-stack project, inspired by Zerodha's Kite trading platform. The goal was to learn and demonstrate real-world MERN stack development, from database design to deployment.
          </p>
          <p>
            This project features a live watchlist, holdings and positions tracking, order placement, and a responsive trading dashboard.
          </p>
          <p>Always learning, always building.</p>
          <p>
            Connect on <a href="https://www.linkedin.com/in/vidushi-sharma0204/" target="_blank" rel="noreferrer">LinkedIn</a> or <a href="https://github.com/VidushiSharma24" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;