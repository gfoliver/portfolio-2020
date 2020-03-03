import React from 'react';
import leaves from '../../img/leaves.png';
import './style.scss';
import Fade from 'react-reveal/Fade';
import Project from './Project';
import Slider from "react-slick";
import MouseIcon from '../MouseIcon';

export default function Projects() {
    return (
        <div className="Projects" id="projects">
            <div className="container">
                <Fade up cascade>
                    <h2 className="SectionTitle">Projects</h2>
                </Fade>
                <div className="SliderWrapper">
                    <Slider {...{
                        dots: false,
                        arrows: true,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        responsive: [
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 800,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    arrows: false,
                                    autoplay: true
                                }
                            }
                        ]
                    }}>
                        <Fade>
                            <Project 
                                title="DevRadar" 
                                description="In DevRadar i coded the Backend, Web Interface and Mobile App. 
                                            The idea behind the project is a system to find Developers based on 
                                            the technologies they work on. This project was part of “Semana Omnistack 10” 
                                            by Rocketseat."
                                github_url="https://github.com/gfoliver/semana-omnistack-10"
                            />
                        </Fade>
                        <Fade>
                            <Project 
                                title="DevRadar" 
                                description="In DevRadar i coded the Backend, Web Interface and Mobile App. 
                                            The idea behind the project is a system to find Developers based on 
                                            the technologies they work on. This project was part of “Semana Omnistack 10” 
                                            by Rocketseat."
                                github_url="https://github.com/gfoliver/semana-omnistack-10"
                            />
                        </Fade>
                        <Fade>
                            <Project 
                                title="DevRadar" 
                                description="In DevRadar i coded the Backend, Web Interface and Mobile App. 
                                            The idea behind the project is a system to find Developers based on 
                                            the technologies they work on. This project was part of “Semana Omnistack 10” 
                                            by Rocketseat."
                                github_url="https://github.com/gfoliver/semana-omnistack-10"
                            />
                        </Fade>
                        <Fade>
                            <Project 
                                title="DevRadar" 
                                description="In DevRadar i coded the Backend, Web Interface and Mobile App. 
                                            The idea behind the project is a system to find Developers based on 
                                            the technologies they work on. This project was part of “Semana Omnistack 10” 
                                            by Rocketseat."
                                github_url="https://github.com/gfoliver/semana-omnistack-10"
                            />
                        </Fade>
                    </Slider>
                </div>
            </div>
            <img src={leaves} className="leaves" />
            <MouseIcon link="contact" />
        </div>
    )
}