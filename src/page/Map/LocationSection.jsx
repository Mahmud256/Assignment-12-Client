import React from 'react';

const LocationSection = () => {
    return (
        <div className='bg-gray-100 py-8'>
        <h2 className='text-center text-2xl font-bold mb-6'>Our Location</h2>
        <div className='flex justify-center'>
            <iframe
                className='rounded-lg shadow-lg'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.4423108993!2d90.39576483006861!3d23.796877770180224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ac5dbc446f%3A0x53944f041877848a!2sgulshan%202!5e0!3m2!1sen!2sbd!4v1700839618455!5m2!1sen!2sbd"
                width="50%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>
    );
};

export default LocationSection;

