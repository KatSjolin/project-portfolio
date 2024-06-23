import projectsData from '../data/projects.json';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
    return (
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <ul>
          {projectsData.projects.map((project, index) => (
            <li key={index} className="project">
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Technologies used: {project.techniques.join(', ')}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> | 
              <a href={project.netlify} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </li>
          ))}
        </ul>
      </section>
    );
};
  
export default FeaturedProjects;
