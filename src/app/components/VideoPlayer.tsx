"use client"
// app/components/VideoPlayer.tsx
import React, { useEffect, useRef } from "react";
import videojs from "video.js";  // Default import
import Hls from "hls.js";  // Import hls.js

import "video.js/dist/video-js.css"; // Import the CSS for styling the player

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        autoplay: true,
        controls: true,
        preload: "auto",
      });

      // Check if the browser supports HLS (for .m3u8 files)
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);  // Load the .m3u8 stream URL
        hls.attachMedia(videoRef.current);  // Attach the media to the video element
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        // If the browser is Safari, it supports HLS natively
        videoRef.current.src = src;
      }

      // Cleanup when the component unmounts
      return () => {
        if (player) {
          player.dispose();
        }
      };
    }
  }, [src]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
};

export default VideoPlayer;
