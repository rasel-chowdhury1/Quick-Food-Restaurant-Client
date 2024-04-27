import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
             subHeading={"check it out"}
             heading={"from our menu"}
            ></SectionTitle>
            <div className='md:flex bg-slate-500 bg-opacity-60 justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Dec 25, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis animi repellendus veniam quia quo vitae illum? Possimus unde in, reiciendis vero fugit mollitia aspernatur perspiciatis dignissimos fuga, vel eum, hic nemo? Eum sint pariatur et reiciendis provident, qui autem eveniet nobis vero optio accusantium blanditiis asperiores consectetur exercitationem facere cumque!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;