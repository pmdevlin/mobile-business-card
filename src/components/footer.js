import React from 'react'
import { BsGithub } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa"

export default function Footer (){
    return (
        <footer className='footer'>
            <BsGithub size={30}/>
            <SiJavascript size={30}/>
            <FaReact size={30}/>
            <FaPlaystation size={30}/>
        </footer>
    )
}
