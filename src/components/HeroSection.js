import React from 'react'
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
        { <video src='/videos/video-1.mp4' autoPlay loop muted />}
        <h1>Planning to Travel?</h1>
        <p>Let's go on an adventure!</p>
        <div className="hero-btns">
            <Button 
                className="btns" 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'
            >
                GET STARTED
            </Button>
            <Button 
                className="btns" 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'
            >
                WATCH PREVIEW <i className="fa-regular fa-play-circle"/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection