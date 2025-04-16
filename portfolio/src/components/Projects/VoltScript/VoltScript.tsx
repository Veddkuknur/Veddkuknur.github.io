import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png'

const VoltScript: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Python',
    'Go',
    'Langchain',
    'TS Node'
    ,'TypeScript'
  ];

  return (
    <>
      <div className={`voltscript-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="thriftaidrow-two" >
        <div className="voltscript-name" style={{ display: "flex", flexDirection: "row", alignItems: "center", fontFamily: "Verdana", fontWeight: "50", color: "rgb(33, 181, 222)", position: "relative" }}>
          Volt<span style={{ fontWeight: "600", marginLeft: "1%" }}>Script</span>
        </div>
          <div className="voltscript-name" style={{gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            VoltScript
          </div>
        </div>
        <div className="thriftaidrow-three">
          <div className="thriftaid-name" style={{gridRow: "1", fontFamily: "Fira Code", position: "relative", fontSize: "83%", fontWeight: "600", color: "white"}}>
          VoltScript is a VS Code extension mean to calculate the cost of the electricity from running code. The ideal use case for this project would be for LLM (AI) queries run on your CPU.
          </div>
          <a href="https://github.com/nopunindented/VoltScript">
            <img src={link} alt="link" className= "voltscript-logo" style={{gridRow: "2", position: "relative", width: "42%"}}/>
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

export default VoltScript;

/*
<div className="voltscript-logo" style={{fontFamily: "Verdana", fontSize:"300%", color: "rgb(33, 181, 222)"}}>
          VoltScript
</div>
*/