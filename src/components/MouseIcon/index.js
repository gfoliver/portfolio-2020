import React from 'react'
import './style.scss';
import Fade from 'react-reveal/Fade';

export default function MouseIcon({ link }) {
    return (
        <Fade top>
            <a href={`#${link}`} className="MouseIcon"></a>
        </Fade>
    )
}