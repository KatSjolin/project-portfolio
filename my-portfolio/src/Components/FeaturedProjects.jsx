import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projectsData && Array.isArray(projectsData.projects)) {
      setProjects(projectsData.projects);
    } else {
      console.error('projectsData.projects is not an array', projectsData);
    }
  }, []);

  return (
    <div>
      <h2>Featured Projects</h2>
      {projects.length === 0 ? (
        <p>No projects to display</p>
      ) : (
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Technologies used: {project.techniques.join(', ')}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
              <a href={project.netlify} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeaturedProjects;