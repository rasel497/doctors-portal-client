import React from 'react';
import PrimaryButton from '../../../componants/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className='py-6' style={{ background: `url(${appointment})` }}>
            <div className='flex justify-center items-center'>
                <form>
                    <div>
                        <h4 className='text-lg text-primary font-bold text-center'>Contact Us</h4>
                        <h2 className='text-2xl text-white text-center mb-6'>Stay connected with us</h2>
                        <div>
                            <input type="email" placeholder="email address" className="input input-bordered input-sm w-full max-w-xs" />
                            <input type="text" placeholder="subject" className="input input-bordered input-sm w-full max-w-xs my-2" />
                        </div>
                        <textarea className="w-full textarea textarea-bordered" placeholder="Bio"></textarea>
                        <div className='flex justify-center my-2'>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default ContactUs;