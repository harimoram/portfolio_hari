import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Me</h1>
        <p>
        <i><span style={{ color: '#FDA403' }}>Greetings!! 👋 </span></i>I am <b>Hari Sainadh Reddy Moram</b>, a seeker of insights and architect of digital experiences, journeying through the realms of data and design. With a passion for weaving stories from numbers and creating interfaces that resonate, I thrive at the intersection of data analytics and frontend development. 📊💻
        </p>
        <h3>A Prelude to Knowledge 📚</h3>
        <p>
        My academic journey took me through the halls of wisdom, where I embraced the essence of learning and innovation. 🌟
        </p>
        <ul>
          <li className="education-item">
            <em className="course-name">🎓 Master's in Information Systems and Technology <span className="duration">January 2023 – May 2024</span></em><br />
            <span className="university-name"><em>🏛️ University of North Texas</em></span><br />
            <p>Embarking on a quest for knowledge, I traversed the realms of web-based systems development, data visualization, and the art of programming with Python. Here, amidst the whispers of algorithms and the canvas of databases, I cultivated a perfect GPA of 4.0, crafting a tapestry of academic excellence.</p>
          </li>
          <li className="education-item">
            <em className="course-name">✨ Bachelor of Technology in Mechanical Engineering <span className="duration">June 2017 – July 2021</span></em><br />
            <span className="university-name"><em>🏛️ Sri Venkateswara College of Engineering</em></span><br />
            <p>In the crucible of engineering, I sharpened the tools of creativity and precision, immersing myself in the worlds of Python, CAD, and the art of project management. Fueled by an unwavering spirit and an insatiable thirst for knowledge, I emerged triumphant, carrying aloft the torch of innovation.</p>
          </li>
        </ul>
        <div className="skills-certifications-container">
          <div className="skills">
            <h2>Skills</h2>
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-buttons">
                <button className="skill-button">🐍 Python</button>
                <button className="skill-button">🔧 JavaScript</button>
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-buttons">
                <button className="skill-button">🗃️ MySQL</button>
                <button className="skill-button">💽 Microsoft SQL Server</button>
                <button className="skill-button">📊 NoSQL</button>
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Design & Development</h3>
              <div className="skill-buttons">
                <button className="skill-button">🎨 Figma</button>
                <button className="skill-button">🅱️ Bootstrap</button>
                <button className="skill-button">⚛️ ReactJS</button>
                <button className="skill-button">🔗 Webhooks</button>
                <button className="skill-button">🔄 APIs</button>
              </div>
            </div>
            <div className="skill-category">
              <h3>Data Analytics</h3>
              <div className="skill-buttons">
                <button className="skill-button">📊 Microsoft Power BI</button>
                <button className="skill-button">📉 Tableau</button>
                <button className="skill-button">🐼 Pandas</button>
                <button className="skill-button">📈 Matplotlib</button>
              </div>
            </div>
            <div className="skill-category">
              <h3>Other Skills</h3>
              <div className="skill-buttons">
                <button className="skill-button">🐙 Git/GitHub</button>
                <button className="skill-button">🛠️ Visual Studio Code</button>
                <button className="skill-button">📊 Data Structure</button>
                <button className="skill-button">🔍 Jira</button>
                <button className="skill-button">🚀 Agile</button>
              </div>
            </div>
          </div>
          <div className="certifications">
            <h2>Certifications</h2>
            <ul>
              <li>☁️ Azure Cloud: Data Fundamentals, Power BI Data Analyst Associate.</li>
              <li>👨‍💻 Simplilearn certified Front-end developer.</li>
              <li>📜 CompTIA Security+ from Udemy.</li>
              <li>📜 Agile certification – Udemy.</li>
              <li>🏅 Jira Software Fundamentals badge from Atlassian.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='copywrites'><p>© by Hari_Moram 2024 </p></div>
    </div>
  );
};

export default About;
