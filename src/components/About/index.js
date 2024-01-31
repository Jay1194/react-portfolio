import React from 'react';
import {DisplayIcons, DisplayGitHubIcon} from '../Icons/DisplayIcons'
import DevIMG from '../../assets/Images/DevIMG.png'


const About = () => {
    return(
        <section>
            <h1 className="project-title">About Me</h1>
            <section className="content0">
            <div class="content00">
            <img src={DevIMG} className="Me"  alt="Developer image"/>
            </div>
            <div className='content1'>
            <h1 className="space">Jayden Taylor<a className="space" href="https://github.com/Jay1194"><span><DisplayGitHubIcon/></span></a></h1>
            <h3>Full-Stack Software Engineer</h3>
            <p>
                Hi, I'm Jayden, a versatile full-stack developer and recent SMU Bootcamp graduate. My expertise spans front-end technologies like CSS, HTML, JavaScript, and jQuery, as well as back-end skills in Node.js, Express.js, SQL, ORM, and MVC architecture. I excel in creating visually appealing web experiences and integrating third-party APIs for enhanced functionality.
                With a focus on OOP and TDD, I'm ready to bring my skills to innovative projects in the dynamic tech landscape.
            </p>
            </div>
            <div className="content2">
                <h3>
                    Technologies Mastered
                </h3>
                <article>
                    <DisplayIcons/>
                </article>
            </div>
            </section>
        </section>
    );
}

export default About;