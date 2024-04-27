import React from 'react';
import { Parallax } from 'react-parallax';

const BannerSection = ({img,heading,subHeading}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="image"
        strength={-200}
    >
        <div className="hero h-[500px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="w-4/6  py-10 border-2 shadow-md">
                <div className="max-w-md mx-auto text-center text-white">
                <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
                <p className="mb-5">{subHeading}</p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default BannerSection;