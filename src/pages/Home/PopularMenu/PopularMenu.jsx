import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import FullMenu from '../../../Shared/FullMenu/FullMenu';
import useMenu from '../../../CustomHook/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular');
    // console.log(popular)
    return (
        <section className='mb-12 w-4/5 mx-auto'>
            <SectionTitle
              subHeading={"From Our Menu"}
              heading={"Popular Items"}
            ></SectionTitle>
            <FullMenu
              data = {popular}
              title={"popular"}
              btnName={"View Full Menu"}
            ></FullMenu>
            
        </section>
    );
};

export default PopularMenu;