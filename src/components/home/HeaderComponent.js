import * as React from 'react'
import {linksContainer, linksItem, linksList, logoContainer, wrapper} from './header-component.module.css'
import logo from '../../images/logo.png'

const HeaderComponent = ({onHomeClick, onProjectClick, onContactClick}) => (

    <main>
        <div className={wrapper}>
            <div className={logoContainer}>
                <img src={logo} alt="" width='120'/>
            </div>
            <div className={linksContainer}>
                <ul className={linksList}>
                    <li className={linksItem} onClick={onHomeClick}>Home</li>
                    <li className={linksItem} onClick={onProjectClick}>Projects</li>
                    <li className={linksItem} onClick={onContactClick}>Contact</li>
                </ul>
            </div>
        </div>

    </main>
)
export default HeaderComponent