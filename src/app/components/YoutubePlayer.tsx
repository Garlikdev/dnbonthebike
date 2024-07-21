"use client";

import React, { useRef } from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YouTubePlayerProps {
  videoId: string;
  onReady: (event: YouTubeProps["onReady"]) => void;
  onStateChange: (event: YouTubeProps["onStateChange"]) => void;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  onReady,
  onStateChange,
}) => {
  const playerRef = useRef(null);

  const opts: YouTubeProps["opts"] = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 0,
      controls: 2,
      modestbranding: 1,
      rel: 0,
    },
  };

  const handleReady = (event) => {
    playerRef.current = event.target;
    if (onReady) {
      onReady(event);
    }
  };

  const handleStateChange = (event) => {
    if (onStateChange) {
      onStateChange(event);
    }
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={handleReady}
      onStateChange={handleStateChange}
    />
  );
};

export default YouTubePlayer;
