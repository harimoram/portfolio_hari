// Home.js

import React from 'react';
import TypingAnimation from './TypingAnimation'; // Assuming you have a TypingAnimation component

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Hi there 👋, it's me <span className="highlight">Hari</span></h1>
        <h2>
          I am a <span>&nbsp;</span><TypingAnimation />
        </h2>
      </div>
      <div className="content">
        <div className="image-frame">
          <img src="/landing_img.png" alt="Hari" />
        </div>
        <div className="text">
          <p>
          Welcome to my portfolio! 🌟 Explore my work and get to know more about my journey and expertise. 🚀
          </p>
          <p className="welcome-text">
          With a Master's in Information Systems and Technology, I excel at transforming data into practical insights and crafting smooth, user-friendly web experiences. From building interactive dashboards to designing sleek websites, I enjoy blending creativity with technical know-how to tackle real-world challenges. 🌐📊
          </p>
          <a href="https://drive.google.com/file/d/1Shjy0XXxfC8AnA82K9Q_ujew_xKcCj5q/view?usp=sharing" download>View my Resume</a>
        </div>
      </div>
      <div className='copywrites'><p>© by Hari_Moram 2024 </p></div>
    </div>
  );
};

export default Home;
