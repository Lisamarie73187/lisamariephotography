import React from 'react';
import logo from '../assets/LisaMariePhotography.gif';


interface HeaderProps {
    refs: {
        homeRef: React.RefObject<HTMLDivElement>;
        aboutRef: React.RefObject<HTMLDivElement>;
        contactRef: React.RefObject<HTMLDivElement>;
        profileRef: React.RefObject<HTMLDivElement>;
    };
    
}

const Header: React.FC<HeaderProps> = ({refs}) => {
    return (
        <header className='header'>
            <h2 onClick={
                () => refs.homeRef.current?.scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"})
            }>Home</h2>
            <h2 onClick={
                () => refs.aboutRef.current?.scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"})
            }>About me</h2>
            <img src={logo} alt="Description of image" width={'250px'}/>
            <h2 onClick={
                () => refs.profileRef.current?.scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"})
            }>Portolfio</h2>
            <h2
                onClick={
                    () => refs.contactRef.current?.scrollIntoView({behavior: 'smooth'})
                }
            >Contact</h2>
        </header>
    );
};

export default Header;