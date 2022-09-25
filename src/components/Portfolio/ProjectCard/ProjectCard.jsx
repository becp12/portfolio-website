import './ProjectCard.css';

export default function ProjectCard({ project }) {
  
    // const styles = {
    //     "background-image": `url(${project.thumbnailPath})`,
    //     "background-size": "100% 100%",
    //     "background-repeat": "no-repeat",
    //     "background-position": "center",
    // }

    return (
        <div className="project-card">
            <h1>{project.title}</h1>
            <button className="project">
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                    Deployed Project
                </a>
            </button>
            <button className="github">
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </button>
            <img src={project.thumbnailPath} alt="" />
        </div>
    );
}