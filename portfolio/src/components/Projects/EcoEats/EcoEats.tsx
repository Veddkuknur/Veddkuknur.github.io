import React, {useState} from "react";
import './../../../index.css';
import link from './../link.png'
import logo from './ecoeats.png'

const EcoEats: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
   };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const skills = [
    'Python',
    'Kivy',
    'BeautifulSoup',
    'NLP'
  ];

  return (
    <>
      <div className={`ecoeats-container ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <div className="thriftaidrow-two" >
        <img src={logo} alt="thriftaid logo" style={{gridRow: "1", position: "relative", width: "50%"}}/>
          <div className="ecoeats-name" style={{gridRow: "2", fontFamily: "Space Grotesk, sans-serif", position: "relative", fontSize: "200%", fontWeight: "600"}}>
            EcoEats
          </div>
        </div>
        <div className="firealertrow-three">
          <div className="thriftaid-name" style={{gridRow: "1", fontFamily: "Fira Code", position: "relative", fontSize: "83%", fontWeight: "600", color: "white"}}>
          EcoEats is an android app that measures the environmental impact of recipes. The user enters a dish to find recipes on, the app selects the top 3 recipes on google, and returns their carbon footprints.
          </div>
          <a href="https://github.com/nopunindented/EcoEats-Crack-Overflow-">
          <img src={link} alt="link" className="ecoeats-logo" style={{gridRow: "2", position: "relative", width: "42%"}}/>
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

export default EcoEats;