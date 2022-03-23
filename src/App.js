import React from "react";
import Main from './components/Main'
import Info from "./components/Info";
import Footer from './components/footer'


export default function App(){
    return(
        <div className="app">
            <div className="container">
                <Info/>
                <Main/>
                <Footer/>

            </div>
        </div>
        
    )
}