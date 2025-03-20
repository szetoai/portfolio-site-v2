import React from "react";
import { useState } from "react";
import "./projects.css";

function Projects() {
    const [p1, setP1] = useState("project");

    return (
        <>
            <h1 id="projectsHead">Featured Projects</h1>
            <div id="projectsList">
                <div className={p1} id="project1" onMouseOver={() => setP1("activeProject")} onMouseLeave={() => setP1("project")}>
                    <img className="projectImg" id="projectImg1" src="https://i.ibb.co/FqKBRCHz/qbert.gif" alt="qbert"/>
                    <h2>MyQbert</h2>
                </div>
                <span />
                <div className="project" id="project2">
                    <img className="projectImg" id="projectImg2" src="https://i.ibb.co/zVCTqfF0/face-recog.gif" alt="face recognition"/>
                    <h2>AI Facial Recognition</h2>
                </div>
            </div>
        </>
    );
}

export default Projects;

/*  */