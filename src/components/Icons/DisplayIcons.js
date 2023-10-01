import React from 'react'
import {AiOutlineHtml5, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { BiLogoCss3, BiLogoJavascript} from 'react-icons/bi'
import SMUBadge from '../../assets/Images/SMU.png'

function DisplayGitHubIcon() {
    return (
        <div>
            <AiFillGithub className="github-icon" />
        </div>
    )
}

function DisplayFooterIcons() {
    return (
        <div  className="socials">
            <a href="/"><p>
                © 2023, Jayden Taylor 
                <br/> 
            <span>Powered By React</span>
            </p></a>
            
           <a href="https://github.com/Jay1194"><AiFillGithub className="github icon-sizes" /></a>
           <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><AiFillLinkedin className="linkdn icon-sizes" /> </a>
           <a href="https://www.credly.com/badges/d06852dd-6a5d-4f0c-a90d-719362eaf075/public_url"><img src={SMUBadge}  className="SMU icon-sizes" alt="Credentials"/></a>
        </div>
    )
}

function DisplayIcons() {
    return (
        <div className='icons'>
            <AiOutlineHtml5 className="icon-html icon-size" />
            <BiLogoCss3 className ="icon-css icon-size" />
            <BiLogoJavascript className="icon-js icon-size" />
            <FaNodeJs className="icon-node icon-size" />
            <FaReact className="icon-react icon-size" />
        </div>
    )
}

export {DisplayIcons, DisplayGitHubIcon}

export default DisplayFooterIcons
