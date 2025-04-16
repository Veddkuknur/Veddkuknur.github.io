import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png'

const FireAlert: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Python',
    'Twilio',
    'Scikit-Learn',
    'GCP',
    'Flask',
    'React Native'
    ,'JavaScript'
  ];

  return (
    <>
      <div className={`firealert-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="thriftaidrow-two" >
          <div className="thriftaid-logo" style={{gridRow: "1", fontFamily: "Oswald", fontSize:"300%", color: "#FF8928", position: "relative"}}>
            Fire Alert!
          </div>
          <div className="firealert-name" style={{gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            Fire Alert
          </div>
        </div>
        <div className="firealertrow-three">
          <div className="firealert-name" style={{gridRow: "1", fontFamily: "Fira Code", position: "relative", fontWeight: "600", color: "white"}}>
          Android app delivering real-time fire alerts to remote areas. Choose a location, receive SMS notifications if a fire is nearby. Ideal for farmers in isolated regions.
          </div>
          <a href="https://github.com/nopunindented/Fire-Alert">
          <img src={link} alt="link" className="firealert-logo" style={{gridRow: "2", position: "relative", width: "42%"}}/>
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

export default FireAlert;