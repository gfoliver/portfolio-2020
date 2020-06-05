import React from 'react';
import './style.scss';

export default function Modal({ showPreview, content, closePreview }) {
    return(
        <div className="Modal">
            {showPreview && content && (
                <div className="overlay">
                    <div className="content">
                        <button className="close" onClick={closePreview}>
                            <div className="icon"></div>
                        </button>
                        <header>
                            <div className="title">{content.title}</div>
                            <div className="text-wrapper">
                                <div className="description">{content.description}</div>
                                <a href={content.github_url} className="github_link">View on Github</a>
                            </div>
                        </header>
                        {content.markdown && <div className="readme" dangerouslySetInnerHTML={{
                            __html: content.markdown
                        }}></div>}
                    </div>
                </div>
            )}
        </div>
    )
}