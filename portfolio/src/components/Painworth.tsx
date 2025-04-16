import React, { useEffect, useState } from "react";

const Painworth: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".painworth-container");
      if (!container) return;

      const containerHeight = container.clientHeight;
      const scrollPosition = window.scrollY;
      const containerTop = container.getBoundingClientRect().top;
      const triggerPosition = containerTop + containerHeight * 3.3;

      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      } else if (containerTop > 0 || scrollPosition < containerTop) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="painworth-container">
        <div className="dayforce-name">PainWorth</div>
        <div className="subnet-date">May 2023 - August 2023</div>
        <div className="painworth-position">Software Developer Intern</div>
        <ul className={`painworth-points ${isVisible ? "visible" : ""}`}>
        <li> Developed a Docker-containerized Python Flask microservice to automate extraction of context-based keywords
from court documents, optimizing a process from over 2 hours to under 10 seconds.</li>
        <li> Devised Langchain and LLM classification pipeline with .NET preprocessing connected to MySQL database,
improving legal info extraction accuracy by 9.8% over 9000+ documents and cutting cost per document by 99.8%.</li>
<li>  Migrated entirety of the organization’s infrastructure from Azure to GCP, reducing running costs by ∼88.7%.</li>
<li>Integrated CI/CD pipelines with Terraform-provisioned Kubernetes clusters to keep infrastructure up to date.</li>
        </ul>
      </div>
    </>
  );
};

export default Painworth;
