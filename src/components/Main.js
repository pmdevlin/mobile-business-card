import React from "react";
import QrCode from '../images/smallQR.png'
import info from '../utils/info'


export default function Main(){
    return(
        <div className="main">
           <h2 className="aboutTitle">About</h2>
           <p className="aboutText">{info.bio}</p>
           <h2 className="interestsTitle">Interests</h2>
           <p className="interestsText">{info.interest}</p>
           <div className="qrContainer">
               <h3 className="QRtitle">Linkedin QRcode </h3>
               <img className="qrCode" src={QrCode} alt=""/>
           </div>
        </div>
        
    )
        
}