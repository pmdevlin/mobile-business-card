import React from 'react'
import { SiPostgresql, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa"

export default function Footer (){
    return (
        <footer className='footer'>
            <SiPostgresql size={30}/>
            <SiExpress size={30}/>
            <FaReact size={30}/>
            <FaNodeJs size={30}/>
        </footer>
    )
}
