import React, { useState, useEffect } from "react";
import "./App.css";
import GridHeader from "./components/GridHeader";
import SlideAnimation from "./components/SlideAnimation";
import ProjectsPage from "./pages/ProjectsPage";
import ThirdPage from "./pages/ThirdPage";
import WorkEx from "./pages/WorkExperiencePage";
import NoPage from "./pages/NoPage";

function App() {
  const [currentPath, setCurrentPath] = useState(getPath());

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(getPath());
    };

    window.addEventListener("popstate", handlePathChange);

    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  function getPath() {
    return window.location.hash || "#demoProd"; // fallback if hash is missing
  }

  const isValidPath = (path: string) => {
    const validPaths = ["#demoProd", "#workexperience", "#projects", "#extracurriculars"];
    return validPaths.includes(path);
  };

  const renderPage = () => {
    if (isValidPath(currentPath)) {
      return (
        <>
          <SlideAnimation />
          <WorkEx/>
          <ProjectsPage />
          {/* <ThirdPage /> */}
          <GridHeader />
        </>
      );
    } else {
      return <NoPage />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;