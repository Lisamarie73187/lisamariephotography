import React from 'react';
import logo from '../assets/LisaMariePhotography.gif';
import ContactForm from './ContactForm';


interface FooterProps {
    
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className='footer'>
            <p>
                Copyright © Lisa Marie Photography 2024 | All Rights Reserved
            </p>
        </div>
    );
};

export default Footer