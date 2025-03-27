import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { FaEnvelope, FaGoogleDrive,  FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "UDDY LEARNING ACADEMY",
    description: "I'm a Project Manager of our team & we made 100 posters in 8 days.",
    icons: [ FaEnvelope, FaGoogleDrive],
    
  },
  {
    title: "Tamzhi.AI Website",
    description: "Contributed as a backend developer for website designing.",
    icons: [ FaJs, FaReact, FaNodeJs, FaGithub],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>INTERNSHIP</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-icons">
              {project.icons.map((Icon, i) => (
                <Icon key={i} className="icon" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



export default Projects;
