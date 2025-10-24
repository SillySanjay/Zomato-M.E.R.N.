
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import '../styles/home.css';
import { Link } from 'react-router';


const Home = () => {
  const [videos, setVideos] = useState([]);
  // const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(new Map());
  const containRef = useRef(null);

  // useEffect(() => {
  //   const observer = new window.IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const vid = videoRef.current.get(entry.target.dataset.id);
  //         if (vid) {
  //           if (entry.isIntersecting) {
  //             vid.play();
  //             vid.muted = isMuted;
  //           } else {
  //             vid.pause();
  //           }
  //         }
  //       });
  //     },
  //     { threshold: 0.7 }
  //   );
  //   const nodes = containRef.current.querySelectorAll('.reel-item');
  //   nodes.forEach((node) => observer.observe(node));
  //   return () => observer.disconnect();
  // }, [isMuted, videos]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/food/", { withCredentials: true })
      .then(response => {
        
        console.log(response.data.foodItems);

        setVideos(response.data.foodItems)
      })
      .catch(() => { /* noop: optionally handle error */ })
  }, [])
  return (
    <div className="reels-container" ref={containRef}>
      {videos.map((value) => (
        <div key={value._id} className="reel-item" data-id={value._id}>
          <div className="video-container">
            <video
              ref={el => videoRef.current.set(value._id, el)}
              className="reel-video"
              src={value.video}
              loop
              autoPlay
              muted
              playsInline
            />
            
            <div className="reel-actions">
              <button className="action-button">
                <span className="action-icon">❤️</span>
                <span className="action-count">1.2k</span>
              </button>
              <button className="action-button">
                <span className="action-icon">↗️</span>
                <span className="action-count">Share</span>
              </button>
            </div>
            <div className="reel-overlay">
              <p className="reel-description">{value.description}</p>
              <Link className="visit-store-btn" to={"/food-partner/" + value.foodPartner}>Visit Store</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;