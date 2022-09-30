import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        const formMessage = document.querySelector('.formMessage');
        const displaMessage = (isSuccess = true) => {
            formMessage.innerHTML = isSuccess ? '<p class="success">Message envoyé !</p>' : '<p class="failed">Une erreur s\'est produite. Veuillez réessayer !</p>'
            setTimeout(() => {
                formMessage.innerHTML = ''
            }, 2500)
        }

        emailjs
            .sendForm(
                'etearner.react_forms',
                'etearner.template1',
                form.current,
                process.env.REACT_APP_MAIL_KEY
            )
            .then((result) => {
                form.current.reset()
                displaMessage()
            }, (error) => {
                console.log(error)
                displaMessage(false)
            });
    };

    return (
        <div className="form-container">
            <h2>Contactez-nous</h2>
            <form ref={form} onSubmit={sendEmail} className='form-content'>
                <label>Nom</label>
                <input type="text" name="name" required autoComplete='off' id='name' />

                <label>Email</label>
                <input type="email" name="email" required autoComplete='off' id='email' />

                <label>Message</label>
                <textarea name="message" required id='mess' />

                <input type="submit" value="Envoyer" className='hover button' />
            </form>

            <div className="formMessage"></div>

        </div>
    );
};

export default ContactForm;