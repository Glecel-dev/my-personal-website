import * as React from 'react'
import {wrapper} from './contact-screen.module.scss'
import ContactDetails from "../components/contact/contact-details/ContactDetails";
import ContactForm from "../components/contact/contact-form/ContactForm";

const ContactScreen = () => (
    <main>
        <div className={wrapper}>
            <ContactDetails/>
            <ContactForm/>
        </div>
    </main>
)
export default ContactScreen