import React from 'react'
import Logo from '../../img/Logo.svg';
import './style.scss';

export default function Header() {
    return (
        <div className="Header">
            <div className="container">
                <div className="row">
                    <div className="LogoWrapper col-4">
                        <img src={Logo} alt="Logo" className="Logo"/>
                    </div>
                    <nav className="col-lg-5 offset-lg-3 col-md-7 offset-md-1 justify-content-between d-none d-md-flex">
                        <a href="#about" className="nav-item">About Me</a>
                        <a href="#projects" className="nav-item">Projects</a>
                        <a href="#contact" className="nav-item">Contact</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}