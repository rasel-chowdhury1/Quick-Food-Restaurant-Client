import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import BossSection from '../BossSection/BossSection';
import CallSection from '../CallSection/CallSection';
import Recommends from '../Recommends/Recommends';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
              <title>Quick Food || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BossSection></BossSection>
            <PopularMenu></PopularMenu>
            <CallSection></CallSection>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;