import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    const date = format(selectedDate, 'PP');
    const { name, slots } = treatment; // treatment it's a appoinment options. just different name 


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid gap-2 grid-cols-1 mt-6'>
                        <input type="text" value={date} disabled className="input w-full input-bordered" />

                        <select className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;