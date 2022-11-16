import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';

const AvailableAppoinments = ({ selectedDate }) => {
    // const [appoinmentOptions, setAppoinmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);


    // using React query / tanstackQuery load data from server api basic
    // amra agee sameVabe useEffect diye data load kortam ekhon React query korsi see previous commit
    const { data: appoinmentOptions = [] } = useQuery({
        queryKey: ['appoinmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appoinmentOptions');
            const data = await res.send.json();
            return data;
        }
    });


    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appoinments on: {format(selectedDate, 'PP')} </p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appoinmentOptions.map(option => <AppoinmentOption
                        key={option._id}
                        appoinmentOption={option}
                        setTreatment={setTreatment}
                    ></AppoinmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppoinments;