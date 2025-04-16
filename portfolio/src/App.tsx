import React, { useState, useEffect } from "react";
import "./App.css";
import GridHeader from "./components/GridHeader";
import SlideAnimation from "./components/SlideAnimation";
import ProjectsPage from "./pages/ProjectsPage";
import WorkEx from "./pages/WorkExperiencePage";
import NoPage from "./pages/NoPage";

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.hash || "#");

  useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.hash || "#");
    };

    window.addEventListener("hashchange", handlePathChange);
    return () => {
      window.removeEventListener("hashchange", handlePathChange);
    };
  }, []);

  const pageMap: Record<string, React.ReactNode> = {
    "#": (
      <>
        <SlideAnimation />
        <WorkEx />
        <ProjectsPage />
        <GridHeader />
      </>
    ),
    "#workexperience": <WorkEx />,
    "#projects": <ProjectsPage />,
    // "#extracurriculars": <ThirdPage />
  };

  return <div className="App">{pageMap[currentPath] || <NoPage />}</div>;
}

export default App;
