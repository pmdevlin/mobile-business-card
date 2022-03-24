import React from "react";
import QrCode from '../images/smallQR.png'


export default function Main(){
    return(
        <div className="main">
           <h2 className="aboutTitle">About</h2>
           <p className="aboutText">I am a full stack software engineer, my native language is JavaScript.
               I have a particular interest in game development and blockchain concepts.
               I try to improve my skills daily and I am always trying to learn new things 
               and more than willing to go down any rabbit hole with most technology's. 
           </p>
           <h2 className="interestsTitle">Interests</h2>
           <p className="interestsText"> Software Engineering. Game programing and design. Financial study. Reader. Golfing enthusiast. Anything water related.</p>
           <div className="qrContainer">
               <h3>Linkedin QRcode </h3>
               <img className="qrCode" src={QrCode} alt=""/>
           </div>
        </div>
        
    )
        
}