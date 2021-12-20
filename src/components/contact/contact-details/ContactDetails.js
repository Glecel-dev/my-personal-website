import * as React from 'react'
import {contactText, furtherAddressDetails, furtherAddressText, wrapper} from './contact-details.module.scss'

const ContactDetails = () => (
    <main>
        <div className={wrapper}>
            <h1 className={contactText}>Contact</h1>
            <p>Well now you are at the end of the page , so that leaves us with a question. Are you interested in
                working together? Do you have any further questions? I am happy to speak about them with you. That is
                why below you will find a list of my personal contacts, where you can reach me and we can discuss it
                further. I hope to hear from you soon.</p>
            <div className={furtherAddressDetails}>
                <h2 className={furtherAddressText}>Address</h2>
                <p>Otto-Suhr-Alle 7 , 10585, Berlin, DE</p>
            </div>
            <div className={furtherAddressDetails}>
                <h2 className={furtherAddressText}>Phone</h2>
                <p>+355699463244</p>
            </div>
            <div className={furtherAddressDetails}>
                <h2 className={furtherAddressText}>E-mail</h2>
                <p>gledi.c3la@gmail.com </p>
            </div>
        </div>
    </main>
)
export default ContactDetails