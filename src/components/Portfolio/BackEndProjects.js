import React from 'react';

// project images

import readMe from './Projects/readME-Gen.gif';
import pagelGen from './Projects/pageGen.gif';
import ohSnap from './Projects/Oh-Snap.gif';
import myReact from './Projects/React App.gif';

const BackEndProjects = () => {
  return (
      <section>
        <div>
          <h1 className="project-title">Back-End Applications</h1>
        </div>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/photo-port">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Photo Port</h1>
                <p>React / hooks / props / state / jsx</p>
                </div>
              </div>
              <img 
              className="project-image"
              src={ohSnap}
               alt="displayed project" />
              </a>
          </div>
          </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/react-portfolio">
              <div className="cover-background">
              <div className="cover-text">
                <h1>React Portfolio</h1>
                <p>React / hooks / props / state / jsx</p>
                </div>
              </div>
              <img
               className="project-image"
               src={myReact}
               alt="displayed project" 
               />
              </a>
          </div>
          </article>
        <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/Professional-README-Generator">
            <div className="cover-background">
              <div className="cover-text">
                <h1>ReadME Generator</h1>
                <p>Node.js / npm / node-modules </p>
                </div>
              </div>
              <img
               className="project-image"
              src={readMe}
               alt="displayed project" />
              </a>
          </div>
          </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/portfolio-generator">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Portfolio Generator</h1>
                <p>Node.js / npm / node-modules</p>
                </div>
              </div>
              <img
               className="project-image"
              src={pagelGen}
               alt="displayed project" />
              </a>
          </div>
        </article>
    </section>
  );
};
export default BackEndProjects;
