import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../CustomHook/useCart';

const Card = ({data,btn}) => {
    const {_id,recipe,name,image,price} = data;
    console.log(data)
    const {user} = useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const handleAddToCart = data =>{
         console.log(data);
         if(user && user.email){
            const cartItem = {menuItemId: _id, name,image,price, email: user.email}
            fetch('https://bistro-boss-restaurant-server-lovat.vercel.app/carts',{
                method: 'POST',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                refetch() //refetch cart to update the nuber of items in the cart
                if(data.insertedId){
                    swal("Successfully added in cart")
                }
            })
         }
         else{
            Swal.fire({
                title: "Please Login",
                text: "if add to cart of product",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                cancelButtonText: "No",
                confirmButtonText: "Yes"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}} )
                }
              });
         }
    }
    
    return (
        <div className="card  glass">
            <figure>
                <img src={image} alt="car!"/>
            </figure>
            <div className="card-body">
                <p>Price: {price}</p>
                <h2 className="card-title text-2xl justify-center">{name}</h2>
                <p className='text-xl justify-center'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(data)} className="btn btn-outline bg-black border-0 border-b-4 mt-4 text-yellow-600 py-4 px-6 uppercase">{btn}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;