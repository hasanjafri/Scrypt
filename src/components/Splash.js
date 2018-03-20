import React from 'react';
import { SplashButton } from './Buttons';
import '../styles/Splash.css';

export default function Splash() {
    return(
        <div>
            <div id="hero" className="Hero">
                <div className="Hero-content">
                    <h1 style={{color: 'white'}}>Welcome to the World of E-Sports.</h1>
                    <div className="button-wrapper">
                        <SplashButton primary={true} text="Streamer? Click Here"/>
                        <SplashButton primary={true} text="How it Works"/>
                    </div>
                </div>
            </div>
            <div className="overlay"/>
        </div>
    );
}