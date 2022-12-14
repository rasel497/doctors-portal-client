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
                        <div className='mx-2'>
                            <input type="email" placeholder="email address" className="input input-bordered input-primary w-full mr-2" />
                            <input type="text" placeholder="subject" className="input input-bordered input-primary w-full my-2" />
                        </div>
                        <div className='mx-2'>
                            <textarea className="w-full textarea textarea-primary" placeholder="write your message...."></textarea>
                        </div>
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