// src/components/common/IntroVideo.jsx
import React, { useState, useRef, useEffect } from 'react';

const IntroVideo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => {
        const progress = (video.currentTime / video.duration) * 100;
        setProgress(progress);
      };
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const closeVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
    setIsVisible(false);
    // Play close sound
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="intro-video-card-wrapper">
      <div className="background-overlay"></div>
      <div className="tmp-intro-video-card-wrapper position-right">
        <div className="tmp-video-inner">
          <div className="tmp-video-progress-container playing">
            <video 
              ref={videoRef}
              className="tmp-video-element" 
              id="tmp-video-element" 
              poster="/assets/images/video/01.webp"
              autoPlay
              muted
              loop
            >
              <source src="/assets/images/video/intro.mp4" type="video/mp4" />
            </video>
            <div className="tmp-video-controls">
              <div className="play-button" title="Play/Pause (Spacebar)" onClick={togglePlay}>
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              </div>
              <div className="sound-button sound-muted" title="Mute/Unmute (m)" onClick={toggleMute}>
                <i className={`fa-regular ${isMuted ? 'fa-volume-xmark' : 'fa-volume'}`}></i>
              </div>
              <div className="expand-icon" title="Expand" onClick={() => {
                if (videoRef.current) {
                  if (document.fullscreenElement) {
                    document.exitFullscreen();
                  } else {
                    videoRef.current.requestFullscreen();
                  }
                }
              }}>
                <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
              </div>
            </div>
            <div className="tmp-iv-top-wrapper">
              <div className="tmp-iv-progress-bar">
                <span className="buffer-bar" style={{ width: '100%' }}></span>
                <span className="time-bar" style={{ width: `${progress}%` }}></span>
              </div>
            </div>
          </div>
          <div className="card-greeting">
            <p>Hello</p>
          </div>
        </div>
        <div className="tmp-iv-close-button" onClick={closeVideo}>
          <audio ref={audioRef} preload="auto">
            <source src="/assets/images/video/intro.mp3" type="audio/mpeg" />
          </audio>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;