import React from 'react';

const AppoinmentOption = ({ appoinmentOption, setTreatment }) => {
    const { name, slots, price } = appoinmentOption;


    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary text-center">{name}</h2>

                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                <p><small>Price: ${price}</small> </p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(appoinmentOption)}
                    >Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;