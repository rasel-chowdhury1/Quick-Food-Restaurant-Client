import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from './../../../CustomHook/useAxiosSecure';
import useAuth from './../../../CustomHook/useAuth';
import './CheckoutForm.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CheckoutForm = ({cart, price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError,setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')
    const navigate = useNavigate()

    useEffect( () =>{
       if(price > 0){
          axiosSecure.post('/create-payment-intent', {price})
        .then(res =>{
          // console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
       }
    },[price,axiosSecure])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
        return;
        }
        // console.log("card", card)

         // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setCardError(error.message)
      } else {
        setCardError('')
        // console.log('[PaymentMethod]', paymentMethod);
      }

      setProcessing(true)

      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
               card: card,
               billing_details: {
                email: user?.email || 'unKnown',
                name: user?.displayName || 'anonymous'
               }
            }
        }
      );

      if(confirmError){
        console.log(confirmError);
      }

      console.log('payment intent ',paymentIntent)
      
      setProcessing(false)
      if(paymentIntent.status === 'succeeded'){
        setTransactionId(paymentIntent.id)
        //save payment information to the server
        const payment = {
            email: user?.email, 
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            quantity: cart.length,
            cartItems: cart.map(item => item._id),
            menuItems: cart.map(item => item.menuItemId),
            orderStatus: 'service pending',
            itemNames: cart.map(item => item.name)
         }
         axiosSecure.post('/payments', payment)
         .then(res =>{
            // console.log(res.data)
            if(res.data.result.insertedId){
              Swal.fire({
                title: "Thank You!",
                text: "Your payment successfully done!",
                icon: "success"
              });
            }
            navigate('/dashboard/mycart');
         })
      }

    }


    return (
        <div className='w-2/3 m-8'>
            <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button 
              className="btn btn-primary mt-4" 
              type="submit" 
              disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            </form>

            {cardError && <p className='text-red-600'>{cardError}</p>}
            {transactionId && <p className='text-green-500'>Transaction complete with transaction id {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;