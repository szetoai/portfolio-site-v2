import React from "react";
import "./projects.css";

function Projects() {
    return (
        <>
            <h1 id="projectsHead">Featured Projects</h1>
            <div id="projectsList">
                <div className="project">
                    <img className="projectImg" id="projectImg1" src="https://i.ibb.co/2145NRRg/qbert.gif" alt="qbert"/>
                    <h2>MyQbert</h2>
                </div>
                <span />
                <div className="project">
                    <img className="projectImg" id="projectImg2" src="https://i.ibb.co/qMjQTNFn/face-recog.gif" alt="face recognition"/>
                    <h2>AI Facial Recognition</h2>
                </div>
            </div>
        </>
    );
}

export default Projects;

/*  */