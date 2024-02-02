import React from 'react';

// project images
import readMe from './Projects/readME-Gen.gif';
import pagelGen from './Projects/pageGen.gif';
import team from './Projects/Team Profile Generator.gif';
import note from './Projects/Note Taker.gif';
import emp from './Projects/employee-tracker.gif';

const BackEndProjects = () => {
  return (
      <section>
        <div>
          <h1 className="project-title">Back-End Applications</h1>
        </div>
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
        <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/Team-Profile-Generator">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Team Profile Generator</h1>
                <p>Node / TDD / OOP / Tests </p>
                </div>
              </div>
              <img
               className="project-image"
              src={team}
               alt="displayed project" />
              </a>
          </div>
          </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/jest-another-RPG">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Jest anouther RPG</h1>
                <p>Node / TDD / OOP / Jest / npm </p>
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
            <a href="https://github.com/Jay1194/zookeepr">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Zookeeper</h1>
                <p>Node / Express / Jest / API Routes </p>
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
            <a href="https://github.com/Jay1194/Note-Taker">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Note Taker</h1>
                <p>Node / Express / Jest / API Routes </p>
                </div>
              </div>
              <img
               className="project-image"
               src={note}
               alt="displayed project" />
              </a>
          </div>
          </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/u-develop-it">
            <div className="cover-background">
              <div className="cover-text">
                <h1>U Develop It</h1>
                <p>Node / MySQL2 / Express / Jest / API Routes </p>
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
            <a href="https://github.com/Jay1194/Employee-Tracker">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Employee Tracker</h1>
                <p>Node / MySQL2 / Express / Jest / API Routes </p>
                </div>
              </div>
              <img
               className="project-image"
               src={emp}
               alt="displayed project" />
              </a>
          </div>
          </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/just-tech-news">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Just Tech News</h1>
                <p>ORM / Sequalize / MySQL2 / Express / API Routes / dotenv / bcrypt </p>
                </div>
              </div>
              <img
               className="project-image"
               src={emp}
               alt="displayed project" />
              </a>
          </div>
          </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/E-commerce-backEnd">
            <div className="cover-background">
              <div className="cover-text">
                <h1>E-commerce Backend</h1>
                <p>ORM / Sequalize / MySQL2 / Express / dontev </p>
                </div>
              </div>
              <img
               className="project-image"
               src={emp}
               alt="displayed project" />
              </a>
          </div>
          </article>
    </section>
  );
};
export default BackEndProjects;
