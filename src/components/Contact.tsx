import React from 'react';
import logo from '../assets/LisaMariePhotography.gif';
import ContactForm from './ContactForm';


interface HeaderProps {
    
}

const Contact: React.FC<HeaderProps> = () => {
    return (
        <div className='contact'>
            <h1>CONTACT</h1>
            <h3>Let's Make Some Memories</h3>
            <ContactForm/>
        </div>
    );
};

export default Contact;