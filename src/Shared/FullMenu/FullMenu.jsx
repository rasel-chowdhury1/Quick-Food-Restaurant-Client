import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const FullMenu = ({data,title,btnName}) => {
    return (
        <section className='mb-12 w-4/5 mx-auto mt-20'>
            <div className='grid md:grid-cols-2 gap-10'>
                    {data.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)}
            </div>
            <div className="text-center">
               <Link to={`/shop/${title}`} className="btn btn-outline border-0 border-b-4 mt-4 ">{btnName}</Link>
            </div>
        </section>
    );
};

export default FullMenu;