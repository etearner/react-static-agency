import React from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Buttons from '../components/Buttons';
import SocialNetwork from '../components/SocialNetwork';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from 'framer-motion';

const Contact = () => {
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 250
        }
    }

    return (
        <main>
            <Mouse />
            <motion.div className="contact"
                initial='out'
                animate='in'
                exit='out'
                variants={pageTransition}
                transition={{ duration: 0.4 }}
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>12 rue du Parc</p>
                            <p>91940 Les Ulys</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="0751169554" className='hover'>
                                <p style={{ cursor: 'pointer' }} className='clipboard' onClick={() => alert('Téléphone copié !')}>07 51 16 95 54</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="sfagency@example.com" className='hover'>
                                <p style={{ cursor: 'pointer' }} className='clipboard' onClick={() => alert('Email copié !')}>sfagency@example.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>Tuto de From Scratch  - {new Date().getFullYear()}</p>
                    </div>
                </div>
                <Buttons left={'/projet-4'} />
            </motion.div>
        </main>
    );
};

export default Contact;