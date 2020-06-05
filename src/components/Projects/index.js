import React, { useState, useEffect } from 'react';
import leaves from '../../img/leaves.png';
import './style.scss';
import Fade from 'react-reveal/Fade';
import Project from './Project';
import Slider from "react-slick";
import MouseIcon from '../MouseIcon';
import { getRepositories } from '../../services/github'
import Modal from '../Modal';
import { getMarkdown } from '../../services/github'

export default function Projects() {
    const [projects, setProjects] = useState([])

    const [showPreview, setShowPreview] = useState(false)
    const [modalContent, setModalContent] = useState(null)

    function togglePreview(title, content) {
        getMarkdown(title).then(response => {

        if (response.status)
            setModalContent({ title, ...content, markdown: response.data })
        else
            setModalContent({ title, ...content })

        setShowPreview(! showPreview)
        })
    }

    useEffect(() => {
        getRepositories().then(response => {
            if (response.status)
                setProjects(response.projects)
        })
    }, [])

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
                        {projects.map((project, index) => (
                            <Fade
                                key={index}
                            >
                                <Project 
                                    title={project.name} 
                                    description={project.description}
                                    github_url={project.html_url}
                                    togglePreview={togglePreview}
                                />
                            </Fade>
                        ))}
                    </Slider>
                </div>
            </div>
            <img src={leaves} className="leaves" alt="leaves" />
            <MouseIcon link="contact" />
            <Modal 
                showPreview={showPreview} 
                content={modalContent} 
                closePreview={() => setShowPreview(false)} 
            />
        </div>
    )
}