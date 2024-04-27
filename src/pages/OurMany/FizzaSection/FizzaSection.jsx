import React from 'react';
import BannerSection from '../../../Shared/BannerSection/BannerSection';
import FullMenu from '../../../Shared/FullMenu/FullMenu';
import useMenu from '../../../CustomHook/useMenu';

const FizzaSection = ({img}) => {
    const [menu] = useMenu();
    const pizza = menu.filter(item => item.category === "pizza")
    return (
        <div>
            <BannerSection
              img={img}
              heading={"PIZZA"}
              subHeading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></BannerSection>
            <FullMenu
              data = {pizza}
              title={"pizza"}
              btnName={"Order Your Fabourite Food"}
            ></FullMenu>
        </div>
    );
};

export default FizzaSection;