import React from "react";
// import {DefaultPlayer as video} from 'react-html5video';
// import 'react-html5video/dist/styles.css';\
import Style from './Video.module.css'

const VideoComponents = () => {
  return (
    <div className={Style.videoPlay}>
     <video
     autoPlay loop
     controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
     >
      <source src="../../images/video.mp4" type="video/mp4" />
     </video>
    </div>
  );
};

export default VideoComponents;
