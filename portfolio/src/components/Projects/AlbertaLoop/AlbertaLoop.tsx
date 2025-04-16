import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png'
import logo from './albertaloop.png'

const AlbertaLoop: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Python',
    'C++',
    'PyQt',
    'UDP',

  ];

  return (
    <>
      <div className={`albertaloop-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="thriftaidrow-two" >
        <img src={logo} alt="thriftaid logo" style={{gridRow: "1", position: "relative", width: "40%"}}/>
          <div className="albertaloop-name" style={{gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            AlbertaLoop
          </div>
        </div>
        <div className="firealertrow-three">
          <div className="thriftaid-name" style={{gridRow: "1", fontFamily: "Fira Code", position: "relative", fontSize: "83%", fontWeight: "600", color: "white"}}>
          Led group of 5 members in developing software for pod communication network and status systems. Implemented UDP communication between pod and computers, and developed GUI to display status.
          </div>
          <a href="https://github.com/albertaloop/T_SWE_2022_2023">
          <img src={link} alt="link" className= "alberta-logo" style={{gridRow: "2", position: "relative", width: "42%", marginTop: "20%"}}/>
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

export default AlbertaLoop;