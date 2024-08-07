import React from 'react';
import Header from '../../components/Header';
import { CarouselComponent } from '../../components/CarouselComponent';
import { Decscription } from '../../components/Description';
import { PortfolioSection } from '../../components/PortfolioSection';
import { About } from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';





const Home: React.FC = () => {
    return (
        <div>
            <Header/>
            <CarouselComponent/>
            <Decscription/>
            <PortfolioSection/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;