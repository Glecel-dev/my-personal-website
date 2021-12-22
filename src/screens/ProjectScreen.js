import * as React from 'react'
import {imageProject, pictureContainer, wrapper} from './project-screen.module.css'
import Carousel from 'react-spring-3d-carousel';
import {PROJECTS} from "../images/PROJECTS";
import {config} from "react-spring";

let slides = []
PROJECTS.map((project) =>

    slides.push(
        {
            key: project.id,
            content:
                <div className={pictureContainer}>
                    <img className={imageProject} src={project.image} alt={project.id}/>
                    <p>{project.description}</p></div>
        },
    )
)


const ProjectScreen = ({reference}) => (


    <main>
        <div className={wrapper} ref={reference}>
            <div style={{width: "80%", height: "500px", margin: "0 auto", paddingTop: '25vh'}}>
                <Carousel animationConfig={config.gentle} offsetRadius={12} slides={slides} showNavigation={true}/>
            </div>
        </div>
    </main>

)
export default ProjectScreen