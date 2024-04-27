import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews,setReviews] = useState([]);

    useEffect( () =>{
        fetch('https://bistro-boss-restaurant-server-lovat.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section>
            <SectionTitle
             subHeading={"What Our Client Say"}
             heading={"Testimonials"}
            ></SectionTitle>
            <Swiper
                pagination={{
                type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper my-20"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center mx-24 my-16'>
                                <Rating
                                style={{maxWidth: 180}}
                                value={review.rating}
                                readOnly
                                ></Rating>
                                <FaQuoteLeft className='text-5xl my-7'/>
                                <p className='py-8 text-xl text-center'>{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;