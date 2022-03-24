import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import profilePic from "../images/profilepic.png"
import linkObj from '../utils/links.js'



export default function Info(){
    return(
        <div className='info'>
            <img className="pic" src={profilePic} alt="" />
            <h1 className="name">Paul Devlin</h1>
            <h4 className="job">Full Stack Software Engineer</h4> 
            <div className="btnDiv">
                <a 
                    href={linkObj.gitHub}
                    target='_blank'
                    rel="noreferrer"
                    className="btnGithub">
                    <BsGithub size={40} className="github"/>
                </a>
                <a
                    href={linkObj.linkedin} 
                    target='_blank'
                    rel="noreferrer"
                    className="btnLinkedin">
                    <BsLinkedin size={40} className="linkedin"/>
                </a>
            </div>
     
        </div>
    )
}