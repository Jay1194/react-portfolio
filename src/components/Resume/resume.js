import React from 'react';
import resume from '../Gallery/Jayden Taylor.gif'


const Resume = () => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1VyR_LbYLvUj5bp-N0lmhPjXRLABJE0q8';
    const resumeFileName = "Jayden_Taylor's_Resume.jpg";

    return (
        <section>
            <h1 className='project-title'>
                Download My Resume!
            </h1>
            <img src={resume} class="resume"/>
            <a href={resumeUrl} download={resumeFileName} > 
            <h4 class="center">
                Download Resume
                </h4>
                </a>
        </section>
    )
}

export default Resume