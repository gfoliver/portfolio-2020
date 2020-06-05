import React from 'react';
import Eye from '../../img/Eye.svg';
import './Project.scss';

export default function Project({title, description, github_url, togglePreview}) {
    return (
        <>
            <div className="Project purple-gradient">
                <div className="Content">
                    <h3 className="title">{title}</h3>
                    <p className="description" dangerouslySetInnerHTML={{
                        __html: description
                    }}></p>
                    <a 
                        href={github_url} 
                        className="btn github"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check it on Github
                    </a>
                </div>
                <button className="PreviewButton btn" title="Preview" onClick={() => togglePreview(title, { description, github_url })}>
                    <img src={Eye} alt="Preview"/>
                </button>
            </div>
        </>
    )
}