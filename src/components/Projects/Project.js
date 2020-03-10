import React from 'react';
import Eye from '../../img/Eye.svg';
import './Project.scss';

export default function Project({title, description, github_url, flag}) {
    return (
        <div className="Project purple-gradient">
            <div className="Content">
                <div className={"flag " + flag}></div>
                <h3 className="title">{title}</h3>
                <p className="description" dangerouslySetInnerHTML={{
                    __html: description
                }}></p>
                <a 
                    href={'https://github.com/gfoliver/' + github_url} 
                    className="btn github"
                    target="_blank"
                >
                    Check it on Github
                </a>
            </div>
            <button className="PreviewButton btn" title="Preview">
                <img src={Eye} alt="Preview"/>
            </button>
        </div>
    )
}