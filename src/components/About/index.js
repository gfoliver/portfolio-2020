import React from 'react';
import './style.scss';
import Guilherme from '../../img/Guilherme.png';
import leaf from '../../img/leaf.svg';
import MouseIcon from '../MouseIcon';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

export default function About() {
    return (
        <div className="About" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Slide up cascade>
                            <h2 className="SectionTitle">About Me</h2>
                        </Slide>
                        <div className="ContentWrapper">
                            <Fade cascade>
                                <div className="name">Guilherme Fleck Oliveira</div>
                            </Fade>
                            <Fade bottom>
                                <div className="description">
                                    I’m an 18 year old Web Developer from Porto Alegre, Brasil. 
                                    I’m currently studying Computer Science at UniRitter.
                                </div>
                            </Fade>
                        </div>
                        <div className="techs">
                            <div className="code">
                                <Fade down>
                                    <div className="blue">Technologies<span className="white">: [</span></div>
                                </Fade>
                                    <Fade up>
                                        <div className="yellow">    'HTML5, CSS3, Scss'</div><span>,</span><br />
                                        <div className="yellow">    'JavaScript (ES6), jQuery'</div><span>,</span><br />
                                        <div className="yellow">    'VueJS, ReactJS'</div><span>,</span><br />
                                        <div className="yellow">    'NodeJS, Express'</div><span>,</span><br />
                                        <div className="yellow">    'PHP, Wordpress'</div><span>,</span><br />
                                        <div className="yellow">    'MySQL, MongoDB'</div><span>,</span><br />
                                        <div className="yellow">    'Git, npm, yarn'</div><br />
                                    </Fade>
                                <Fade up>
                                    <div className="white">]</div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Bounce down>
                            <img src={Guilherme} alt="Guilherme" className="Image d-none d-md-block"/>
                        </Bounce>
                    </div>
                </div>
            </div>
            <img src={leaf} className="leaf" />
            <MouseIcon link="projects" />
        </div>
    )
}