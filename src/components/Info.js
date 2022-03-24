import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import profilePic from "../images/profilepic.png"



export default function Info(){
    return(
        <div className='info'>
            <img className="pic" src={profilePic} alt="" />
            <h1 className="name">Paul Devlin</h1>
            <h4 className="job">Full Stack Software Engineer</h4> 
            <div className="btnDiv">
                <button  className="btnEmail"><BsGithub size={40} className="email"/></button>
                <button className="btnLinkedin"><BsLinkedin size={40} className="linkedin"/></button>
            </div>
     
        </div>
    )
}