import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png'
import logo from './gradient.png'

const Gradient: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Python',
    'Langchain',
    'Firebase',
    'Tornado.py',
    'React',
    'Pytest'
    ,'JavaScript',
    'Tesseract'
  ];

  return (
    <>
      <div className={`gradient-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="thriftaidrow-two" >
        <img src={logo} alt="thriftaid logo" style={{gridRow: "1", position: "relative", width: "80%", marginLeft: "50%", marginRight: "20%", top: "10%"}}/>
          <div className="gradient-name" style={{gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            Gradient
          </div>
        </div>
        <div className="firealertrow-three">
          <div className="gradient-name" style={{gridRow: "1", fontFamily: "Fira Code", position: "relative", fontWeight: "600", color: "white"}}>
          Gradient is a web application that aims to make studying more enjoyable. It has features such as a leaderboard and an AI tool that makes study notes more simple, eloquent, and better formatted.
          </div>
          <a href="https://github.com/Sugarnetes/Gradient">
          <img src={link} alt="link" className="gradient-logo" style={{gridRow: "2", position: "relative", width: "42%", marginTop: "20%"}}/>
          </a>
        </div>
        <div className="firealertrow-four">
          {skills.map((skill) => (
            <div>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gradient;