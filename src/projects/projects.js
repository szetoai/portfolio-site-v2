import React from "react";
import { useState } from "react";
import "./projects.css";

function Projects() {
    const [p1, setP1] = useState("project projectOff");
    const [p2, setP2] = useState("project projectOff");
    const [p3, setP3] = useState("project projectOff");

    return (
        <>
            <h1 id="projectsHead">Featured Projects</h1>
            <div id="projectsList">
                {/* All projects should be "on" when hovered, expanding, and shrink when mouse leaves */}
                <div 
                    className={p1} 
                    id="project1" 
                    onMouseOver={() => setP1("project projectOn")} 
                    onMouseLeave={() => setP1("project projectOff")}
                >
                    <div className="project-container">
                        <img className="projectImg" id="projectImg1" src="https://i.ibb.co/FqKBRCHz/qbert.gif " alt="qbert"/>
                        <h2>Multiplayer Qbert</h2>
                        <div className="overlay">
                            <h3>Multiplayer Qbert</h3>
                            <h4>Language(s): Racket (isl+)</h4>
                            <h5>Recreation of Classic 80's game Qbert using HTDP's big-bang animation software.</h5>
                            <h4>Features:<br />Server based multiplayer, Random Enemy Generation, Tick/Key/Message Handling</h4>
                        </div>
                    </div>
                </div>
                <span />
                <div 
                    className={p2} 
                    id="project2" 
                    onMouseOver={() => setP2("project projectOn")} 
                    onMouseLeave={() => setP2("project projectOff")}
                >
                    <div className="project-container">
                        <img className="projectImg" id="projectImg2" src="https://i.ibb.co/zVCTqfF0/face-recog.gif" alt="face recognition"/>
                        <h2>AI Face Recognition</h2>
                        <div className="overlay">
                            <h3>AI Face Recognition</h3>
                            <h4>Language(s): Python - face_recognition, cv2, numpy, os</h4>
                            <h5>Attendance tracker using webcam and image database to identify faces and store them into a csv attandence sheet.</h5>
                            <h4>Features:<br />Image Encoding and Identification, User Database Entry, CSV Entries + Handling</h4>
                        </div>
                    </div>
                </div>
                <span />
                <div 
                    className={p3} 
                    id="project3" 
                    onMouseOver={() => setP3("project projectOn")} 
                    onMouseLeave={() => setP3("project projectOff")}
                >
                    <div className="project-container">
                        <img className="projectImg" id="projectImg3" src="https://i.ibb.co/qMVhzGfL/sokoban.gif" alt="sokoban"/>
                        <h2>Sokoban</h2>
                        <div className="overlay">
                            <h3>Sokoban</h3>
                            <h4>Language(s): Java</h4>
                            <h5>Recreation of the puzzle game Sokoban using Object Oriented Design Principles and Java Image Rendering.</h5>
                            <h4>Features:<br />Imperative World States, Object/Floor Interfaces, Undo/Scoring/WinLose Features</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;