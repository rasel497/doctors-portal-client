import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../componants/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className={`hero lg:h-[500px]`} style={{ backgroundImage: "url('https://i.ibb.co/820xnrr/bg.png')" }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br />Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;