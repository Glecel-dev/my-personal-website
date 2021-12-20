import * as React from 'react'
import {wrapper} from './project-slideshow.module.scss'
const ProjectScreen = ({image, description}) => (
    <main>
        <div className={wrapper}>
            <img src={image} alt="" width={100}/>
            <p>{description}</p>
        </div>
    </main>
)
export default ProjectScreen