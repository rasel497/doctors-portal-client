import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppoinmentOption from './AppoinmentOption';


const AvailableAppoinments = ({ selectedDate }) => {
    // const [appoinmentOptions, setAppoinmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    // using React query / tanstackQuery load data from server api basic
    // amra agee sameVabe useEffect diye data load kortam ekhon React query korsi see previous commit
    const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appoinmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-kappa-nine.vercel.app/v2/appoinmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    // 
    if (isLoading) {
        return <Loading></Loading>
    }


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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppoinments;