import React from 'react';
import './../index.css';
import ThriftAid from '../components/Projects/ThriftAid/ThriftAid';
import FireAlert from '../components/Projects/FireAlert/FireAlert';
import VoltScript from '../components/Projects/VoltScript/VoltScript';
import Gradient from '../components/Projects/Gradient/Gradient';
import AlbertaLoop from '../components/Projects/AlbertaLoop/AlbertaLoop';
import EcoEats from '../components/Projects/EcoEats/EcoEats';

const ThirdPage: React.FC = () => {
  return (
    <>
      <div id="projects" className="third-page">
        <div className="work-header">Featured Projects</div>
        <div className='project-container'>
          <VoltScript />
          <ThriftAid />
          <FireAlert />
          <Gradient />
          <AlbertaLoop />
          <EcoEats />
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
