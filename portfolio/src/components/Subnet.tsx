import React, { useEffect, useState } from "react";

const Subnet: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".subnet-container");
      if (!container) return;

      const containerHeight = container.clientHeight;
      const scrollPosition = window.scrollY;
      const triggerPosition = container.getBoundingClientRect().top + containerHeight * 1.1;

      setIsVisible(scrollPosition > triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="pro-container" style={{gridRow: 3}}>
        <div className="pro-name">SUBNET Solutions</div>
        <div className="pro-date">January 2024 - Present</div>
        <div className="pro-position">Software Developer Intern</div>
        <ul className={`subnet-points ${isVisible ? "visible" : ""}`}>
          <li>Devising Python AI microservice for querying data on 4 million sensory devices for 300+ companies, using Langchain and Django.</li>
          <li>Creating Typescript-based React interface for Django and .NET REST API pipeline hosted on Azure VM.</li>
          <li>Reduced API calls in TypeScript React UI by over 80% via batching them through new TypeScript Node endpoints.</li>
        </ul>
      </div>
    </>
  );
};

export default Subnet;
