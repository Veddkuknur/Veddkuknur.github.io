import React from "react";
import TypingIntro from "./TypingIntro";
import NameIntro from "./NameIntro";
import DescriptIntro from "./DescriptIntro";
import IconMenu from "./IconMenu";

const SlideAnimation: React.FC = () => {
  return (
    <>
      <div className="bg">
      <IconMenu />
      <DescriptIntro />
        <NameIntro />
        <div id="home" className="typewriter-container">
          <TypingIntro />
        </div>
      </div>
    </>
  );
};

export default SlideAnimation;
