import React, { useEffect, useState } from "react";
import projectData from "../data/projectsData"; // Adjust path based on your structure

type Project = {
  name: string;
  url: string;
  description: string;
  points: string[];
  techStack: string[];
};

const ProjectSection: React.FC = () => {
  return (
    <>
      {projectData.map((project: Project, index: number) => (
        <div className="pro-container" key={index}>
          <div className="pro-name" style={{fontStyle:"Bold"}}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </div>
          <div className="pro-position">{project.description}</div>
          <ul className={`pro-points ${true ? "visible" : ""}`}>
            {project.points.map((point: string, idx: number) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
          <div className="tech-stack-wrapper">
            {project.techStack.map((tech: string, idx: number) => (
              <div className="tech-pill" key={idx}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      ))}

    </>
  );
};

export default ProjectSection;
