import React from 'react';
import './style.scss';
import Fade from 'react-reveal/Fade';
import HeroBackground from '../../img/HeroBackground.jpg';
import HeroOverlay from '../../img/HeroOverlay.svg';
import MouseIcon from '../MouseIcon';
import Bounce from 'react-reveal/Bounce'
import ReactTypingEffect from 'react-typing-effect';

export default function Hero() {
    return (
        <div className="Hero">
            <img src={HeroBackground} alt="Background" className="Background"/>
            <img src={HeroOverlay} alt="Overlay" className="overlay"/>
            <div className="container">
                <Fade bottom cascade>
                    <h2 className="HeroTitle">Web Developer</h2>
                    <ReactTypingEffect
                        className="HeroSubtitle"
                        text={["VueJS", "ReactJS", "Wordpress"]}
                        eraseDelay={3000}
                    ></ReactTypingEffect>
                    <Bounce>
                        <a href="#contact" className="btn purple-gradient">Contact Me</a>
                    </Bounce>
                </Fade>
            </div>
            <MouseIcon link="about" />
        </div>
    )
}