import React, { useState } from 'react';
import './style.scss';
import Plane from '../../img/Plane.svg';
import Leaf from '../../img/leaf-alt.svg';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import api from '../../services/api';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [response, setResponse] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    function toggleMessage() {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 5000);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if (loading)
            return;

        setLoading(true);
        
        try {
            const response = await api.post('/send', {
                to: 'teste@teste.com',
                subject: 'Mensagem de contato',
                content: {
                    title: 'Portfolio gfoliver | Contato',
                    text: `
                        Nome: ${name}<br>
                        Email: ${email}<br>
                        <br>
                        Mensagem:<br>
                        ${message}
                        <br><br>
                        --
                    `
                }
            })
    
            console.log(response);
    
            if (response.status) {
                setResponse('Message sent successfully!')
                setMessageType('success');

                setName('');
                setEmail('');
                setMessage('');
            }
            else {
                setResponse('Error sending your message.')
                setMessageType('error');
            }
        }
        catch(e) {
            setResponse('Error sending your message.')
            setMessageType('error');
        }

        setLoading(false)
        toggleMessage();
    }

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
                                            <img src={Plane} alt="Plane" />
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
                                        <a href="https://www.linkedin.com/in/guilherme-fleck-oliveira/" target="_blank" rel="noopener noreferrer" class="btn purple-gradient">
                                            <img src={Plane} alt="Plane" />
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
                                        <a href="https://github.com/gfoliver" target="_blank" rel="noopener noreferrer" class="btn purple-gradient">
                                            <img src={Plane} alt="Plane" />
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
                                <form onSubmitCapture={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="contact-form-name">Name</label>
                                        <input  
                                            type="text" 
                                            className="form-control" 
                                            placeholder="your name here" 
                                            id="contact-form-name"
                                            required
                                            value={name}
                                            onChange={e => setName(e.target.value)}
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
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
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
                                            value={message}
                                            onChange={e => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <Bounce>
                                        <button type="submit" className="btn purple-gradient" disabled={loading}>
                                            { loading ? <span className="loader"></span> : <>Send</> }
                                        </button>
                                    </Bounce>
                                </form>
                                <div className={`message ${messageType} ${showMessage ? 'show' : ''}`}>
                                    {response}
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <img src={Leaf} class="leaf" alt="leaf" />
        </div>
    )
}