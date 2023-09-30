import React from 'react'
import videoFl from '../assets/videoFl.mp4'
import Typewriter from 'typewriter-effect'

const Main = () => {
    return (
    <div className='main'>
        <div className='glow overlay'></div>
        <video src={videoFl} autoPlay loop muted/>
        <div className="content">
            <div className="typeEffect">
                <Typewriter
                onInit={(typewriter) => {
            typewriter.typeString("Welcome to Jayden Taylor's Professional Portfolio").pauseFor(5000)
            .deleteAll()
            typewriter.typeString('Powered By React').pauseFor(2000)
            .deleteAll()
            typewriter.typeString("Don't hesitate to explore my outstanding portfolio!")
            .start()
        }}
        />
            </div>
        </div>
    </div> 
    )
}

export default Main