import React from 'react';
import { Portfolio } from './Portfolio';
const imageOne = "https://lisamariephotography.s3.us-west-1.amazonaws.com/Maya-1.jpg"
const imageTwo = "https://lisamariephotography.s3.us-west-1.amazonaws.com/Maya-2.jpg"
const imageThree = "https://lisamariephotography.s3.us-west-1.amazonaws.com/Maya-3.jpg"



export const PortfolioSection: React.FC = () => {
    return (
        <div className='portfolio'>
            <h1>FEATURED PHOTOS</h1>
            <div className='portfolio-section'>   
                <Portfolio image={imageOne} title="Familes"/>
                <Portfolio image={imageTwo} title="Pets"/>
                <Portfolio image={imageThree} title="Couples"/>
            </div>
        </div>

    );
};

