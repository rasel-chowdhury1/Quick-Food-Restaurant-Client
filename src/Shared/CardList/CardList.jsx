import React from 'react';
import Card from '../Card/Card';


//TODO: implement pagination here on this page
const CardList = ({data,btnName}) => {
    return (
        <div className='grid md:grid-cols-3 gap-4 my-10'>
            {
                
                data.map(item => <Card key={item._id} data={item} btn={btnName}></Card>)
            }
        </div>
    );
};

export default CardList;