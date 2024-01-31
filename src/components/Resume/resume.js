import React from 'react';
import resume from "../Gallery/Jaydens_resume.png"


const Resume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1kLKldEUQdgHzBITAzu2UU4L4WKcavd4l/view?usp=sharing';
    const resumeFileName = "Jaydens_resume.png";

    return (
        <section> 
            <a href={resumeUrl} download={resumeFileName} > 
            <h1 className='project-title'>
                Download My Resume!
            </h1>
            <img src={resume} class="resume" alt='display of my resume'/>
           
            <h4 class="center">
                Download Resume Here...
                </h4>
                </a>
        </section>
    )
}

export default Resume