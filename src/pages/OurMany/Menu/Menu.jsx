import React from 'react';
import { Helmet } from 'react-helmet-async';
import BannerSection from '../../../Shared/BannerSection/BannerSection';
import menubannerImg from '../../../assets/menu/banner3.jpg'
import OfferSection from '../OfferSection/OfferSection';
import menuChefImg from '../../../assets/home/chef-service.jpg'
import PopularMenu from './../../Home/PopularMenu/PopularMenu';
import DessertSection from '../DessertSection/DessertSection';
import FizzaSection from '../FizzaSection/FizzaSection';
import SaladSection from '../SaladSection/SaladSection';
import SoupSection from '../SoupSection/SoupSection';

const Menu = () => {
    return (
        <>
        <Helmet>
            <title>Quick Food || Menu</title>
        </Helmet>
        <BannerSection
            img={menubannerImg}
            heading={"Our Menu"}
            subHeading={"Would you like to try a dish?"}
        ></BannerSection>
        <OfferSection></OfferSection>
        <DessertSection
          img={menuChefImg}
        ></DessertSection>
        <FizzaSection
          img={menuChefImg}
        ></FizzaSection>
        <SaladSection
          img={menuChefImg}
        ></SaladSection>
        <SoupSection
         img={menuChefImg}
        ></SoupSection>
        </>
    );
};

export default Menu;