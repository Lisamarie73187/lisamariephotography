import React, { useRef } from 'react';
import Header from '../../components/Header';
import { CarouselComponent } from '../../components/CarouselComponent';
import { Decscription } from '../../components/Description';
import { PortfolioSection } from '../../components/PortfolioSection';
import { About } from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';





const Home: React.FC = () => {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    return (
        <div>
            <Header refs={{homeRef, aboutRef, contactRef, profileRef}} />
            <div ref={homeRef}>
                <CarouselComponent/>
            </div>
            <Decscription/>
            <div ref={profileRef}>
                <PortfolioSection/>
            </div>
            <div ref={aboutRef}>
                <About/>
            </div>
            <div ref={contactRef}>
                <Contact/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;