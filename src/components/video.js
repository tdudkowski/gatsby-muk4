import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <div className="video">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        maxheight="315"
        maxwidth="560"
      />
    </div>
  )
}

export default Video;
