import * as React from 'react'
import HomeScreen from '../../screens/HomeScreen'
import ProjectScreen from '../../screens/ProjectScreen'
import HeaderComponent from './HeaderComponent'
import {wrapper,contentContainer,centralContainer,linksContainer}from './home-page.module.scss'
import ContactScreen from "../../screens/ContactScreen";


const HomePage =()=>(
    <main>
        <div className={wrapper}>
            <div className="header-container">
                    <HeaderComponent/>
            </div>
            <div className={centralContainer}>
                <div className={linksContainer}>
                    <ul>
                        <li>
                        <img src="https://img.icons8.com/material-outlined/48/FFFFFF/github.png" width='50'/>
                        </li>
                        <li><img src="https://img.icons8.com/ios-glyphs/48/FFFFFF/linkedin.png" width='50'/></li>
                        <li><img src="https://img.icons8.com/ios-filled/50/FFFFFF/gitlab.png"/></li>
                    </ul>
                </div>
                <div className={contentContainer}>
                    <HomeScreen/>
                    <ProjectScreen/>
                    <ContactScreen/>
                </div>
            </div>
        </div>
    </main>
)
export default HomePage