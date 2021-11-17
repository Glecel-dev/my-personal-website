import * as React from 'react'
import centralLogo from '../images/GLEDI (2).png'
import {wrapper, firstCentralText, secondCentralText} from './home-screen.module.css'
const HomeScreen = ()=>(
    <main>
        <div className={wrapper}>
             <span className={firstCentralText}>
             <p>I Am</p>
             </span>
        <img src={centralLogo} alt=""  width='900'/>
        <span className={secondCentralText}>
        <p>A SENIOR</p>
        <p>FULL-STACK DEVELOPER</p>
        </span>


        </div>
    </main>
)
export default HomeScreen