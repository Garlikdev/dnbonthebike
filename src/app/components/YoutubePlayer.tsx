"use client";

import React, { useRef } from "react";
import YouTube from "react-youtube";
import type { YouTubeProps } from "react-youtube";

const YouTubePlayer: React.FC<YouTubeProps> = ({
  videoId,
  onReady,
  onStateChange,
}) => {
  const opts: YouTubeProps["opts"] = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      onStateChange={onStateChange}
    />
  );
};

export default YouTubePlayer;
