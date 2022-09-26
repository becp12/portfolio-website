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
            <div className="project-info-box">
                <h1>{project.title}</h1>
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                    <div>
                        <img src="https://i.imgur.com/VKGwL6z.png" alt="" />
                        <p>Website</p>
                    </div>
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <div>
                        <img src="https://i.imgur.com/dtDb5MQ.png" alt="" />
                        <p>Source</p>
                    </div>
                </a>
            </div>
            <img src={project.thumbnailPath} alt="" />
        </div>
    );
}