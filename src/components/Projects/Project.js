import React from 'react';
import './Project.scss';

export default function Project({title, description, github_url, togglePreview}) {
    return (
        <>
            <div className="Project">
                <div className="Content">
                    <h3 className="title">{title}</h3>
                    <p className="description" dangerouslySetInnerHTML={{
                        __html: description
                    }}></p>
                    <button 
                        className="btn purple-gradient"
                        onClick={() => togglePreview(title, { description, github_url })}
                    >
                        See More
                    </button>
                </div>
            </div>
        </>
    )
}