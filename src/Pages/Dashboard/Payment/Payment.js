import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigate();
    // console.log('Booking data:', booking);
    const { treatment, price, appoinmentDate, slot } = booking;

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        < div >
            <h3 className='text-3xl'>Payment for <strong className='text-pink-500'>{treatment}</strong></h3>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your appoinment on {appoinmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>

        </div >
    );
};

export default Payment;