import React from 'react';
import Eye from '../../img/Eye.svg';
import './Project.scss';

export default function Project({title, description, github_url}) {
    return (
        <div className="Project purple-gradient">
            <div className="Content">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <a href={github_url} className="btn github">Check it on Github</a>
            </div>
            <button className="PreviewButton btn" title="Preview">
                <img src={Eye} alt="Preview"/>
            </button>
        </div>
    )
}