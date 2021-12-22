import * as React from 'react'
import {wrapper} from './contact-screen.module.scss'
import ContactDetails from "../components/contact/contact-details/ContactDetails";
import ContactForm from "../components/contact/contact-form/ContactForm";
import {forwardRef} from "react";

const ContactScreen = ({reference}) => (
    <main>
        <div className={wrapper} ref={reference}>
            <ContactDetails/>
            <ContactForm/>
        </div>
    </main>
)
export default ContactScreen