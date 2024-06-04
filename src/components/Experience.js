import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-heading">Professional Journey</h1>
      <p className="experience-subheading">Contributions and Accomplishments</p>
      
      <div className="experience-section">
        <div className="experience-headings">
          <h2 className='twistedx'>Twisted X</h2>
        </div>

        <p><strong>Role:</strong> Software Engineering Intern</p>
        <p><strong>Duration:</strong> January 2024 – April 2024</p>
        <p><strong>Location:</strong> USA</p>
        <div className="responsibilities-visuals">
          <div className="responsibilities">
            <h3>Roles and Responsibilities:</h3>
            <ul>
              <li>Developed an integrated dashboard in collaboration with the IT team, enhancing system visibility and efficiency.</li>
              <li>Implemented API connections to integrate systems like Ninja and Jira, streamlining data flow.</li>
              <li>Utilized React.js to build and enhance user interfaces for the integrated dashboard.</li>
              <li>Employed Python for backend development and data processing tasks.</li>
              <li>Designed and tested API endpoints using Postman to ensure seamless data exchange.</li>
              <li>Worked with JSON to handle and manipulate data between systems.</li>
              <li>Utilized Figma for creating and collaborating on design prototypes for the dashboard.</li>
              <li>Managed source code and version control using Git.</li>
              <li>Developed and tested applications in Visual Studio Code (IDE).</li>
              <li>Conducted thorough testing and debugging to ensure the functionality and reliability of the integrated systems.</li>
              <li>Collaborated with cross-functional teams to gather requirements and deliver solutions aligned with business needs.</li>
              <li>Provided technical support and troubleshooting for the integrated dashboard and associated systems.</li>
            </ul>
          </div>
          <div className="visual-highlights">

            <div className="visual-highlight">
              <img src="/twistedx.png" alt="Twisted X Highlight" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="experience-section">
        <div className="experience-headings">
          <h2 className='dxc'>DXC Technology</h2>
        </div>

        <p><strong>Role:</strong> Software Engineer</p>
        <p><strong>Duration:</strong> August 2021 – January 2023</p>
        <p><strong>Location:</strong> India</p>
        <div className="responsibilities-visuals">
          <div className="responsibilities">
            <h3>Roles and Responsibilities:</h3>
            <ul>
              <li>Analyzed incident and supply-chain data using SQL and Python, uncovering trends and insights for strategic decision-making by stakeholders.</li>
              <li>Developed interactive dashboards and reports in Power BI, visualizing key performance metrics related to incidents and inventory.</li>
              <li>Utilized Azure Cloud services to manage and optimize cloud-based applications and services.</li>
              <li>Automated data extraction and processing tasks with Python scripts to improve efficiency.</li>
              <li>Created complex SQL queries to extract and manipulate data for comprehensive analysis.</li>
              <li>Integrated various data sources into Power BI for cohesive and real-time reporting.</li>
              <li>Collaborated with cross-functional teams to identify data requirements and deliver actionable insights.</li>
              <li>Monitored and optimized the performance of cloud services to ensure reliability and efficiency.</li>
              <li>Implemented best practices for data security and compliance in cloud environments.</li>
              <li>Provided technical support and troubleshooting for Azure-based applications and services.</li>
            </ul>
          </div>
          <div className="visual-highlights">

            <div className="visual-highlight">
              <img src="/dxc_logo.png" alt="DXC Technology Highlight" />
            </div>
          </div>
        </div>
      </div>
      <div className='copywrites'><p>© by Hari_Moram 2024 </p></div>
    </div>
  );
};

export default Experience;
