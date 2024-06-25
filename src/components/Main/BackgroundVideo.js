import React,{useState} from 'react';
import './video.css';
import videoFile from './BSP_HomepageAbout_v7_2 (1).mp4'; // Assicurati di mettere il percorso corretto del tuo video

function BackgroundVideo({ onVideoEnd, isVisible }) {
  

  return (
    <div  className={`video-background ${!isVisible ? 'd-none' : ''}`}>
      {isVisible && (
        <video autoPlay muted loop={true} id="background-video" onEnded={onVideoEnd}>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default BackgroundVideo