import * as React from 'react'
import {wrapper} from './project-screen.module.css'
import {PROJECTS} from '../images/PROJECTS'
import ProjectSlideshow from "../components/projects/projects-slideshow/ProjectSlideshow";

const ProjectScreen = () => (
    <main>
        <div className={wrapper}>
            {PROJECTS.map((project) =>
                <ProjectSlideshow image={project.image} description={project.description}/>
            )}
        </div>
    </main>
)
export default ProjectScreen