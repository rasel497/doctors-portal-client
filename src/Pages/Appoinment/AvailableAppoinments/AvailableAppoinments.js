import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinments = ({ selectedDate }) => {
    const [appoinmentOptions, setAppoinmentOptions] = useState([]);

    useEffect(() => {
        fetch('appoinmentOptions.json')
            .then(res => res.json())
            .then(data => setAppoinmentOptions(data))
    }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appoinments on: {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appoinmentOptions.map(option => <AppoinmentOption
                        key={option._id}
                        appoinmentOption={option}
                    ></AppoinmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppoinments;