import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const projects = [
    {
      title: "Visualizing H1B Visa Data",
      description: "Data visualization project leveraging Pandas, Python, and Microsoft Power BI to analyze H1B visa trends over the past three years.",
      tags: ["Python", "Data Analytics"],
      image: "/H1B_card_visual.jpg",
      url: "https://github.com/harimoram/Visualizing_H1B_Visa_Data/",
      cardClass: "visa-card"
    },
    {
      title: "Los Angeles Crime Analysis",
      description: "In-depth analysis of Los Angeles crime data, identifying trends and patterns post-LAPD's transition to NIBRS, powered by Pandas, Matplotlib, and Python.",
      tags: ["Python", "Data Analytics"],
      image: "crime_card_visual.jpg",
      url: "https://github.com/harimoram/Los_Angeles_Crime_Analysis",
      cardClass: "crime-card"
    },
    {
      title: "E-Commerce Website",
      description: "Dynamic e-commerce platform developed with React.js, integrating RESTful APIs for seamless product display and real-time updates.",
      tags: ["ReactJS", "Web Design", "JavaScript"],
      image: "ecommerce_card_visual.jpg",
      url: "https://github.com/yourusername/E-Commerce-Website",
      cardClass: "ecommerce-card"
    },
    {
      title: "Modern Vacation Resort Website Design",
      description: "Modern vacation resort website design focusing on user experience and visual aesthetics, crafted with Figma and Photoshop.",
      tags: ["ReactJS", "Web Design", "JavaScript"],
      image: "beach_card_visual.jpg",
      url: "https://www.figma.com/design/rA8wGyQ9MZjAE73BeUqekS/Resort-Webpage?node-id=0-1&t=NVHLbBDd9LFLH8Xr-0",
      cardClass: "resort-card"
    },
    {
      title: "Inventory Management System",
      description: "A Python and MySQL-based Inventory Management System with a user-friendly GUI for creating, reading, updating, and deleting inventory items securely.",
      tags: ["Python", "Database management"],
      image: "inventory.jpg",
      url: "https://github.com/harimoram/Inventory_Management_System",
      cardClass: "inventory-card"
    }

  ];

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProjects = selectedFilter
    ? projects.filter(project => project.tags.includes(selectedFilter))
    : projects;

  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <p className="project-headline">
        Embark on a journey through my digital portfolio, where creativity meets functionality and innovation intertwines with design. Each project is a testament to my passion for problem-solving and my commitment to crafting solutions that not only meet objectives but exceed expectations. From dynamic e-commerce platforms to immersive data visualizations, explore a spectrum of endeavors that showcase my skills, dedication, and vision.
      </p>
      <div className="filter-buttons">
        <button className={`filter-button ${selectedFilter === null ? "active" : ""}`} onClick={() => handleFilterClick(null)}>All</button>
        <button className={`filter-button ${selectedFilter === "Python" ? "active" : ""}`} onClick={() => handleFilterClick("Python")}>Python</button>
        <button className={`filter-button ${selectedFilter === "JavaScript" ? "active" : ""}`} onClick={() => handleFilterClick("JavaScript")}>JavaScript</button>
        <button className={`filter-button ${selectedFilter === "ReactJS" ? "active" : ""}`} onClick={() => handleFilterClick("ReactJS")}>ReactJS</button>
        <button className={`filter-button ${selectedFilter === "Data Analytics" ? "active" : ""}`} onClick={() => handleFilterClick("Data Analytics")}>Data Analytics</button>
        <button className={`filter-button ${selectedFilter === "Web Design" ? "active" : ""}`} onClick={() => handleFilterClick("Web Design")}>Web Design</button>
        <button className={`filter-button ${selectedFilter === "Database management" ? "active" : ""}`} onClick={() => handleFilterClick("Database management")}>Database management</button>
        <button className={`filter-button ${selectedFilter === "Others" ? "active" : ""}`} onClick={() => handleFilterClick("Others")}>Others</button>
        {/* Add other filter buttons */}
      </div>
      <div className="project-cards">
        {filteredProjects.map(project => (
          <div key={project.title} className={`project-card ${project.cardClass}`}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button className="view-more-button">View More</button>
            </a>
          </div>
        ))}
      </div>
      <div className='copywrites'><p>© by Hari_Moram 2024 </p></div>
    </div>
  );
};

export default Projects;
