import React from 'react';
// project images
import ohSnap from './Projects/Oh-Snap.gif';
import myReact from './Projects/React App.gif';
import openWeather from './Projects/Weather-Dashboard.gif';
import gitDone from './Projects/Git-It-Done.gif';
import passwordGenerator from './Projects/Password-Generator.gif';
import robotGladiators from './Projects/Robot-Gladiators.gif';
import codeQuiz from './Projects/code-quiz.gif';
import taskMaster from './Projects/Taskinator.gif';
import runBuddy from './Projects/Run-Buddy.gif';
import professionalPortfolio from './Projects/Pro-portfolio.gif';
import workDay from './Projects/Work-Day.gif'; 
import taskMasterPro from './Projects/Taskmaster-Pro.gif';
import horiseon from './Projects/Horiseon.gif';

const FrontEndProjects = () => {
  return (
      <section>
        <div>
          <h1 className="project-title">Front-End Applications</h1>
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
            <a href="https://github.com/Jay1194/Weather-Dashboard">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Weather Dashboard</h1>
                <p>Server-side APIs / bootstrap / jS / html / css</p>
                </div>
              </div>
              <img
               className="project-image"
              src={openWeather} alt="displayed project" />
              </a>
          </div>
        </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/git-it-done">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Git-It-Done</h1>
                <p>Server-side APIs / bootstrap / js / html / css</p>
                </div>
              </div>
              <img
               className="project-image"
              src={gitDone} alt="displayed project" />
              </a>
          </div>
        </article>
        <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/Work-Day-Scheduler">
            <div className="cover-background">
              <div className="cover-text">
                <h1>WorkDay Schedular</h1>
                <p>Third-Party APIs / jQuery / bootstrap / grid / js / html / css</p>
                </div>
              </div>
              <img
               className="project-image"
              src={workDay} 
              alt="displayed project" />
              </a>
          </div>
        </article>
        <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/Taskmaster-Pro">
            <div className="cover-background">
              <div className="cover-text">
                <h1>TaskMasterPro</h1>
                <p>Third-Party APIs / jQuery / bootstrap / js / html / css</p>
                </div>
              </div>
              <img
               className="project-image"
              src={taskMasterPro} 
              alt="displayed project" />
              </a>
          </div>
        </article>

        <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/code-quiz">
            <div className="cover-background">
              <div className="cover-text">
                <h1>Code Quiz</h1>
                <p>Web APIs / storage api / timers / dom / js / html / css</p>
               </div>
              </div>
              <img
               className="project-image"
              src={codeQuiz}
             alt="displayed project" />
             </a>
          </div>
        </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/Taskinator">
            <div className="cover-background">
              <div className="cover-text">
               <h1>TaskMaster</h1>
                <p>Web APIs / storage api / dom / js / html / css</p>
               </div>
              </div>
              <img
               className="project-image"
              src={taskMaster} 
              alt="displayed project" />
              </a>
          </div>
        </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/Password-Generator">
            <div className="cover-background">
              <div className="cover-text">
               <h1>Password Generator</h1>
                <p>JavaScript / window / math / strings / objects / data-types / functions</p>
               </div>
              </div>
              <img
               className="project-image"
              src={passwordGenerator}
             alt="displayed project" />
             </a>
          </div>
        </article>
          <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/robot-gladiators">
            <div className="cover-background">
              <div className="cover-text">
               <h1>Robot Gladiators</h1>
                <p>JavaScript / window / math / strings / objects / data-types / functions</p>
               </div>
              </div>
              <img
               className="project-image"
               src={robotGladiators} 
              alt="displayed project" />
              </a>
          </div>
        </article>
        <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/Run-Buddy">
            <div className="cover-background">
              <div className="cover-text">
               <h1>Run Buddy</h1>
                <p>Advanced CSS / html / css / forms</p>
               </div>
              </div>
              <img
               className="project-image"
              src={runBuddy} 
              alt="displayed project" />
              </a>
          </div>
        </article>
        <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/Professional-Portfolio">
            <div className="cover-background">
              <div className="cover-text">
               <h1>Professional Portfolio</h1>
                <p>Advanced CSS / html / css / forms</p>
               </div>
              </div>
              <img
              className="project-image"
              src={professionalPortfolio} 
              alt="displayed project" />
              </a>
          </div>
        </article>
        <article className="image-container">
          <div className="image-placeholder">
            <a href="https://github.com/Jay1194/Code-Refactor">
            <div className="cover-background">
              <div className="cover-text">
               <h1>Horiseon</h1>
                <p>Semantic HTML / Web accessibility / semantic structure / Git / comments / html</p>
                </div>
              </div>
              <img
              className="project-image"
              src={horiseon} 
              alt="displayed project" />
              </a>
          </div>
        </article>
      </section>
  );
};

export default FrontEndProjects;
