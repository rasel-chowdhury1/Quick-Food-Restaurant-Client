import React from 'react';
import './BossSection.css'

const BossSection = () => {
    return (
        <div className="hero min-h-screen boss bg-fixed md:w-4/5 mx-auto" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-5/6 border-2 px-14 py-20 bg-white">
                    <h3 className='text-3xl text-gray'>Quick Food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste praesentium libero nobis quae corrupti culpa tempore debitis, obcaecati error eaque architecto quos, ab ea consectetur! Cupiditate ut expedita rem corrupti!</p>
                </div>
            </div>
        </div>
    );
};

export default BossSection;