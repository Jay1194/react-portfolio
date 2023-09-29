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
            typewriter.typeString("Welcome to Jayden Taylors Professional Portfolio").pauseFor(4000)
            .deleteAll()
            typewriter.typeString('Powered By React').pauseFor(2000)
            .deleteAll()
            .start()
        }}
        />
            </div>
        </div>
    </div>
    )
}

export default Main