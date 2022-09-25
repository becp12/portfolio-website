import './Portfolio.css';
import { projects } from '../../data.js';
import ProjectCard from './ProjectCard/ProjectCard'

export default function Portfolio() {

  const projectList = projects.map(function(p) {
    return <ProjectCard project={p} />
  });

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-container">
        {projectList}
      </div>
    </div>
  );
}