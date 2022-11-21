import { loadStripe } from '@stripe/stripe-js'
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    // console.log('Booking data:', booking);
    const { treatment, price, appoinmentDate, slot } = booking;


    return (
        < div >
            <h3 className='text-3xl'>Payment for <strong className='text-pink-500'>{treatment}</strong></h3>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your appoinment on {appoinmentDate} at {slot}</p>
        </div >
    );
};

export default Payment;