import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <section>
                <SectionTitle
                  subHeading={"From 11:00am to 10:00pm"}
                  heading={"order online"}
                ></SectionTitle>
            </section>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                initialSlide={2}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img src={slide1} alt="slide-img" />
                    <h3 className='sm:text-2xl text-2xl  text-white -mt-20 text-center uppercase'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slide-img" />
                    <h3 className='text-4xl text-white -mt-20 text-center uppercase'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                   <img src={slide3} alt="slide-img" />
                    <h3 className='text-4xl text-white -mt-20 text-center uppercase'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slide-img" />
                    <h3 className='text-4xl text-white -mt-20 text-center uppercase'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="slide-img" />
                    <h3 className='text-4xl text-white -mt-20 text-center uppercase'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;