import * as React from 'react'
import centralLogo from '../images/GLEDI (2).png'
import {firstCentralText, secondaryTextFont, secondCentralText, wrapper} from './home-screen.module.css'

const HomeScreen = ({reference}) => (
    <main>
        <div className={wrapper} ref={reference}>
             <span className={firstCentralText}>
             <p className={secondaryTextFont}>I Am</p>
             </span>
            <img src={centralLogo} alt="" width='900'/>
            <span className={secondCentralText}>
        <p className={secondaryTextFont}>A SENIOR</p>
        <p className={secondaryTextFont}>FULL-STACK DEVELOPER</p>
        </span>


        </div>
    </main>
)
export default HomeScreen