import React from 'react';
import logo from '../assets/LisaMariePhotography.gif';


interface HeaderProps {
    
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className='header'>
            <h2>Home</h2>
            <h2>About me</h2>
            <img src={logo} alt="Description of image" width={'250px'}/>
            <h2>Gallery</h2>
            <h2>Contact</h2>
        </header>
    );
};

export default Header;