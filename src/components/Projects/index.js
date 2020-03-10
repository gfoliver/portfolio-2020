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
                        infinite: false,
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
                                description="In DevRadar i coded the Backend, Web Interface and Mobile App. The idea behind the project is a system to find Developers based on the technologies they work on. This project was part of &ldquo;Semana Omnistack 10&rdquo; by Rocketseat."
                                github_url="dev-radar"
                            />
                        </Fade>
                        <Fade>
                            <Project 
                                title="Password Generator" 
                                description="A Javascript Password Generator. Support for Web and Nodejs. In this application, you can choose the type of characters to include in your password, aswell as it's length. Regex password strength generator included."
                                github_url="password-generator"
                            />
                        </Fade>
                        <Fade>
                            <Project 
                                title="Classroom Finder" 
                                description="A Javascript Web Scraper to find my classroom in my school's website. I use puppeteer with Node js to authenticate my user and find the classroom element through it's xpath, and NodeMailer to send it to my email."
                                github_url="classroom-finder"
                            />
                        </Fade>
                        <Fade>
                            <Project 
                                title="Portfolio" 
                                description="This website, a static page created with ReactJS. I made the layout design and developed this project, you can check the design process on the preview button. <br><br>Techs Included: Bootstrap, SCSS, react-reveal."
                                github_url="portfolio-2020"
                            />
                        </Fade>
                        <Fade>
                            <Project 
                                title="Tournament Manager" 
                                description="A football tournament managing system, i made the layout design and developed the backend and frontend of the application. This project is currently in development, you can check the source code in github."
                                github_url="tournament-manager"
                                flag="dev"
                            />
                        </Fade>
                        <Fade>
                            <Project 
                                title="React Real Estate" 
                                description="A Real Estate Property Finder, i got this project idea from dribble (url in github), i designed and developed the backend and frontend with javascript. This is currently in development, check the github page for further information."
                                github_url="js-quiz"
                                flag="dev"
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