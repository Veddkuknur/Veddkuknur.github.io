import React from "react";

const MediCheck: React.FC = () => {
  return (
    <div className="project-container">
      <div className="project-title">
        <a href="https://github.com/A-D-I-T-C/medicheck" target="_blank" rel="noopener noreferrer">
          MediCheck
        </a>
      </div>
      <div className="project-desc">
        AI-powered web platform streamlining patient-clinician interactions with a voice-enabled chatbot, LLM-based transcription & secure HIPAA-compliant storage.
        <div className="project-award">🏆 Won 3rd in HackED hackathon 🏆</div>
      </div>
      <ul className="project-tech">
        <li>Next.js</li>
        <li>React</li>
        <li>Node.js</li>
        <li>OpenAI API</li>
        <li>AstraDB</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  );
};

export default MediCheck;
