import * as React from 'react'
import {wrapper, logoContainer,linksContainer,linksList,linksItem}from './header-component.module.css'
import logo from '../../images/logo.png'
const HeaderComponent=()=>(

    <main>
        <div className={wrapper}>
            <div className={logoContainer}>
                <img src={logo} alt="" width='120'/>
            </div>
            <div className={linksContainer}>
                <ul className={linksList}>
                    <li className={linksItem}>Projects</li>
                    <li className={linksItem}>Contact</li>
                </ul>
            </div>
        </div>
        
    </main>
)
export default HeaderComponent