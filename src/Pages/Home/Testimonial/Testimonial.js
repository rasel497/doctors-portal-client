import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import pepole1 from '../../../assets/images/people1.png'
import pepole2 from '../../../assets/images/people2.png'
import pepole3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviewsData = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: pepole1
        },
        {
            _id: 2,
            name: 'Rasel Shahriar',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Germany',
            img: pepole2
        },
        {
            _id: 3,
            name: 'Zahidul Anik',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Canada',
            img: pepole3
        },
    ]

    return (
        <section className='my-16'>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <h4 className='text-md text-primary font-bold'>Testimonial</h4>
                        <h2 className='text-2xl'>What Our Patients Says</h2>
                    </div>
                    <figure>
                        <img className='w-24 lg:w-48' src={quote} alt="" />
                    </figure>
                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        reviewsData.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;