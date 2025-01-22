import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import audioSrc from "../Assets/bgAudio.mp3";

const BackgroundAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!isPlaying) {
        setIsPlaying(true);
      }
    };

    // Add event listeners for click, touch, and scroll
    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("scroll", handleInteraction);

    return () => {
      // Remove event listeners
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [isPlaying]);

  return (
    <div>
      <ReactPlayer
        url={audioSrc}
        playing={isPlaying}
        loop
        volume={0.5}
        muted={!isPlaying} // Start muted until user interacts
        width="0"
        height="0"
        onError={(error) => console.error("Error playing audio:", error)}
      />
    </div>
  );
};

export default BackgroundAudio;