import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



export const Decscription: React.FC = () =>  {

    return (
       <div className='about'>
        <h3>Capturing Love, Life, and Laughter</h3>
        <h1>TREASUE VALLEY LIFESTYLE PHOTOGRAPHY</h1>
        <div className='styled-line'></div>
        <p className='bold'>Specializing in families, couples, friends, students, and pets.</p>
        <p>
        I believe in the power of capturing joyful moments and heartfelt laughter that make life special, while highlighting the unique personality and spirit of each subject. 
        
 Let me help you preserve your most cherished moments with photography that brings meaning and happiness to your memories for a lifetime.</p>

            {/* <p>
                My passion lies in capturing the smiles and laughter that make life special while
                 bringing out the unique personality and spirit of each subject.
                delivering photographs that reflect your story with vibrancy and sincerity. 
                Let me help you preserve your most cherished moments with photography that
                 brings joy and warmth to your memories for a lifetime.
            </p> */}
        </div>
    );
};

