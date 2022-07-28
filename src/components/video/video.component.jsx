import React from "react";
import "./video.style.css";

const Video = () => {
  return (
    <div className="video__container" id="video">
      <div className="wrapper">
        <video
          className="video"
          src="https://www.youtube.com/watch?v=AVV-8tRWk98"
          type="video/mp4"
          controls
          loops
          autoplay
        />
      </div>
    </div>
  );
};

//

export default Video;
