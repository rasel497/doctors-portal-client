import React from 'react';

const About = () => {
    return (

        <div className="hero mt-20">
            {/* <Helmet>
                <title>About</title>
            </Helmet> */}
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/vqtmPq4/vgaed.jpg" className="w-1/2 rounded shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Hello,,, <br /> <span className='text-red-500'>I'm Rashel Hossain</span></h1>
                    <p className="py-6">I’m a software developer who is passionate about making professional websites.
                        <br />I have a passion for learning and sharing my knowledge with others as publicly as possible.
                        <br />I love to solve real-world problems.</p>
                    <button className="btn btn-primary">Hire Me...</button>
                </div>
            </div>
        </div>
    );
};

export default About;