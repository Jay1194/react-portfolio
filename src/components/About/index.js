import React from 'react';
import {DisplayIcons, DisplayGitHubIcon} from '../Icons/DisplayIcons'
import DevIMG from '../../assets/Images/DevIMG.jpg'


const About = () => {
    return(
        <section>
            <div className="aboutME">
                <h1 id="#About">About Me</h1>
            </div>
            <section className="content0">
                <div class="content00">
            <img src={DevIMG} className="Me"  alt="Developer image"/>
            </div>
            <div className='content1'>
            <h1 className="space">Jayden Taylor<a className="space" href="https://github.com/Jay1194"><span><DisplayGitHubIcon/></span></a></h1>
            <h3>Front-End Software Developer</h3>
            <p>Hello, I'm Jayden, a passionate front-end software developer who recently graduated
                from the SMU Bootcamp. With a strong foundation in CSS, HTML, JavaScript, and jQuery,
                 I thrive in creating visually appealing and interactive web experiences. My proficiency
                  extends to working with third-party APIs and server-side APIs, allowing me to harness
                   external data and services to enhance functionality. The Document Object Model (DOM)
                    is my playground, where I bring designs to life and ensure seamless user interactions.
                    I'm excited about the ever-evolving tech landscape and look forward to contributing my
                    skills to innovative projects.</p>
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