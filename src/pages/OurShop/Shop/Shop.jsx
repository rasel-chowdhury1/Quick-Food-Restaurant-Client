import React from 'react';
import ShopBannerImg from '../../../assets/shop/banner2.jpg'
import BannerSection from '../../../Shared/BannerSection/BannerSection';
import ShopList from '../ShopList/ShopList';


const Shop = () => {
    
    return (
        <div>
            <BannerSection
             img={ShopBannerImg}
             heading={"Our Shop"}
             subHeading={"Would you like to try a dish?"}
            ></BannerSection>
            <ShopList></ShopList>
        </div>
    );
};

export default Shop;