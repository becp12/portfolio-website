import './ProjectCard.css';
import { useState } from 'react';

export default function ProjectCard({ project }) {
    const [webHovered, setWebHovered] = useState(true);
    const [gitHovered, setGitHovered] = useState(true);

    // const styles = {
    //     "background-image": `url(${project.thumbnailPath})`,
    //     "background-size": "100% 100%",
    //     "background-repeat": "no-repeat",
    //     "background-position": "center",
    // }
    const handleWebHover = () => setWebHovered(!webHovered);
    const handleGitHover = () => setGitHovered(!gitHovered);

    return (
        <div className="project-card">
            <div className="project-info-box">
                <h1>{project.title}</h1>
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                    <div className="website-button" onMouseEnter={handleWebHover} onMouseLeave={handleWebHover}>
                        {/* standard */}
                        <img className={webHovered ? 'web-visible' : 'web-hidden'} src="https://i.imgur.com/VKGwL6z.png" alt="" />
                        {/* on hover */}
                        <img className={webHovered ? 'web-hidden' : 'web-visible'} src="https://i.imgur.com/Js0rmcR.png" alt="" />
                        <p>Website</p>
                    </div>
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <div className="github-button" onMouseEnter={handleGitHover} onMouseLeave={handleGitHover}>
                        {/* standard */}
                        <img className={gitHovered ? 'git-visible' : 'git-hidden'} src="https://i.imgur.com/dtDb5MQ.png" alt="" />
                        {/* on hover */}
                        <img className={gitHovered ? 'git-hidden' : 'git-visible'} src="https://i.imgur.com/UJ4KZV3.png" alt="" />
                        <p>Source</p>
                    </div>
                </a>
            </div>
            <img src={project.thumbnailPath} alt="" />
        </div>
    );
}