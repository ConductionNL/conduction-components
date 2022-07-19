import * as React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} />
    </div>
  );
};
