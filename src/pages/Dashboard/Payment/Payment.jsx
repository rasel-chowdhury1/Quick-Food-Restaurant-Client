import React from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../CustomHook/useCart';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_paymentgateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce( (sum,item) => sum + item.price ,0)
    // console.log(total);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle subHeading={"Please Process"} heading={"Payment"}></SectionTitle>
            <h3>Payment is loading.....</h3>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;