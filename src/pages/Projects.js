import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>UDDY LEARNING ACCADENY</h3>
          <p>I'm a Project manager of our team & we makes a 100 posters in 8 days</p>
        </div>
        <div className="project-card">
          <h3>Tamzhi.AI Website</h3>
          <p>Contributed as a backend developer for website designing.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
