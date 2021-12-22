import * as React from 'react'
import {useRef} from 'react'
import HomeScreen from '../../screens/HomeScreen'
import ProjectScreen from '../../screens/ProjectScreen'
import HeaderComponent from './HeaderComponent'
import {centralContainer, contentContainer, linksContainer, wrapper} from './home-page.module.scss'
import ContactScreen from "../../screens/ContactScreen";


const HomePage = () => {
    const homeScreen = useRef()
    const projectScreen = useRef()
    const contactScreen = useRef()

    const handleClick = (ref) => {

        console.log(ref)
        if (!ref.current) return;
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <main>
            <div className={wrapper}>
                <div className="header-container">
                    <HeaderComponent onHomeClick={()=>handleClick(homeScreen)} onProjectClick={()=>handleClick(projectScreen)} onContactClick={()=>handleClick(contactScreen)}/>
                </div>
                <div className={centralContainer}>
                    <div className={linksContainer}>
                        <ul>
                            <li>
                                <a href="https://github.com/Glecel-dev" target="_blank">
                                    <img src="https://img.icons8.com/material-outlined/48/FFFFFF/github.png"
                                         width='50'/></a>
                            </li>
                            <li><a href="https://www.linkedin.com/in/gledi-%C3%A7ela-84a3021ba/" target="_blank">
                                <img src="https://img.icons8.com/ios-glyphs/48/FFFFFF/linkedin.png" width='50'/></a>
                            </li>
                            <li><a href="https://gitlab.com/glecel-dev" target="_blank">
                                <img src="https://img.icons8.com/ios-filled/50/FFFFFF/gitlab.png"/></a></li>
                        </ul>
                    </div>
                    <div className={contentContainer}>
                        <HomeScreen reference={homeScreen}/>
                        <ProjectScreen reference={projectScreen}/>
                        <ContactScreen reference={contactScreen}/>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default HomePage