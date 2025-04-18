import React from 'react';
import './../index.css';
import { experienceData } from '../data/experienceData'; // Update path if needed

const WorkEx: React.FC = () => {
  return (
    <div id="workexperience" className="fourth-page">
      <div className="extra-header-container">
        <div className="extra-header">Work Experience</div>
      </div>
      <div className="extracurricular-container">
        {experienceData.map((exp, idx) => (
          <React.Fragment key={idx}>
            <div className="genral-work-container" style={{ gridRow: exp.gridRow }}>
              <div className="genral-work-position">{exp.position}</div>
              <div className="genral-work-date">{exp.date}</div>
              <div className="genral-work-club">{exp.club}</div>
              <ul className="genral-work-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="parent-circle-container" style={{ gridRow: exp.gridRow }}>
              <div className="first-circle" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkEx;
