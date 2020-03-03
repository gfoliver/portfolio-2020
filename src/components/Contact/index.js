import React from 'react';
import './style.scss';
import Plane from '../../img/Plane.svg';
import Leaf from '../../img/leaf-alt.svg';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Fade up cascade>
                            <h2 className="SectionTitle">Contact Me</h2>
                            <div className="topics">
                                <div className="topic">
                                    <div className="label">
                                        <div className="ball"></div>
                                        <div className="text">E-mail</div>
                                    </div>
                                    <div className="bar">
                                        <div className="content">guilhermefleckoliveira@gmail.com</div>
                                        <a href="mailto:guilhermefleckoliveira@gmail.com" class="btn purple-gradient">
                                            <img src={Plane} />
                                        </a>
                                    </div>
                                </div>
                                <div className="topic">
                                    <div className="label">
                                        <div className="ball"></div>
                                        <div className="text">Linkedin</div>
                                    </div>
                                    <div className="bar">
                                        <div className="content">guilherme-fleck-oliveira</div>
                                        <a href="https://www.linkedin.com/in/guilherme-fleck-oliveira/" target="_blank" class="btn purple-gradient">
                                            <img src={Plane} />
                                        </a>
                                    </div>
                                </div>
                                <div className="topic">
                                    <div className="label">
                                        <div className="ball"></div>
                                        <div className="text">Github</div>
                                    </div>
                                    <div className="bar">
                                        <div className="content">gfoliver</div>
                                        <a href="https://github.com/gfoliver" target="_blank" class="btn purple-gradient">
                                            <img src={Plane} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-6">
                        <Fade right>
                            <div className="FormWrapper">
                                <h4>Send Me a Message</h4>
                                <form onSubmitCapture>
                                    <div className="form-group">
                                        <label htmlFor="contact-form-name">Name</label>
                                        <input  
                                            type="text" 
                                            className="form-control" 
                                            placeholder="your name here" 
                                            id="contact-form-name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-form-email">E-mail</label>
                                        <input  
                                            type="email" 
                                            className="form-control" 
                                            placeholder="example@address.com" 
                                            id="contact-form-email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-form-message">Message</label>
                                        <textarea 
                                            id="contact-form-message" 
                                            cols="30" rows="4" 
                                            className="form-control"
                                            required
                                            placeholder="your message here"
                                        ></textarea>
                                    </div>
                                    <Bounce>
                                        <button type="submit" className="btn purple-gradient">Send</button>
                                    </Bounce>
                                </form>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <img src={Leaf} class="leaf" />
        </div>
    )
}