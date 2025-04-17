import React from "react";
import gitlogo from "./github.svg";
import linkedin from "./linkedin.svg";
import email from "./email.svg";
import cv from "./cv.svg"

const IconMenu: React.FC = () => {
  return (
    <>
      <div className="icon-menu">
        <a href="https://github.com/VeddKuknur">
          <img src={gitlogo} className="gitlogo glow-on-hover" alt="githublogo"/>
        </a>
        <a href="https://www.linkedin.com/in/veddkuknur/">
          <img src={linkedin} className="linkedinlogo glow-on-hover" alt="linkedinlogo" />
        </a>
        <a href="mailto:ved.kuknur@gmail.com">
          <img src={email} className="emaillogo glow-on-hover" alt="emaillogo" />
        </a>
        <a href="resume.pdf" target="_blank" rel="noreferrer">
          <img src={cv} className="cvlogo glow-on-hover" alt="cvlogo" />
        </a>
      </div>
    </>
  );
};

export default IconMenu;
