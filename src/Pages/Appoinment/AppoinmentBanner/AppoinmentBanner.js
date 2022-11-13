import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from '../../../assets/images/bg.png'

const AppoinmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <section className='' style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <header>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} alt='dentist chair' className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='lg:mr-8'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            ></DayPicker>
                            <p>You have selected date: {format(selectedDate, 'PP')}</p>
                        </div>
                    </div>
                </div>
            </header>
        </section>

    );
};

export default AppoinmentBanner;