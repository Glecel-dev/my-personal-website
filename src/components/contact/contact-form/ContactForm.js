import * as React from "react";
import {wrapper, contactForm,formWrapper,form__field,contactFormCentralText, submitButton} from './contact-form.module.scss'

const ContactForm = () => (<main>
        <div className={wrapper}>
            <div className={contactForm}>
                <h1 className={contactFormCentralText}>CONTACT FORM</h1>

                <form action="#" className={formWrapper}>
                    <input type="text" className={form__field} placeholder={'Your name'}/>
                    <input type="text" className={form__field} placeholder={'Your phone'}/>
                    <input type="text" className={form__field} placeholder={'Your e-mail'}/>
                    <textarea type="text" className={form__field} placeholder={'Your message'}/>
                    <button type={'button'} className={submitButton}>Send Message  &nbsp;-></button>
                </form>
            </div>
        </div>
    </main>)
export default ContactForm