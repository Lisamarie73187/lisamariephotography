import React from 'react';
import Header from '../../components/Header';
import { CarouselComponent } from '../../components/CarouselComponent';
import { Decscription } from '../../components/Description';



const Home: React.FC = () => {
    return (
        <div>
            <Header/>
            <CarouselComponent/>
            <Decscription/>
        </div>
    );
};

export default Home;