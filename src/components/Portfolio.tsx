import React from 'react';

interface PortfolioProps {
    image: string;
    title: string;
}


export const Portfolio: React.FC<PortfolioProps> = ({image, title}) => {
    return (
        <div className="portfolio-container">
            <div className='image-container'>
            <img src={image} className='zoom-hover'/>
        </div>
           <p>{title}</p>
        </div>
    );
};

