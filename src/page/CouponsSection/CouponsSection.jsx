// Import necessary libraries and styles
import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

// Your CouponsSection component
const CouponsSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Exclusive Coupons</h2>

        {/* Coupon 1 */}
        <div className='flex justify-center'>
          <div className="bg-white text-gray-800 w-80 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">25% off using SAVE25</h3>
            <p className="text-sm">Use code: <span className="text-purple-600">SAVE25</span></p>
          </div>
        </div>
        <div className='m-2'>
        <Link to="coupon">
          <button className='btn'>See More Coupon</button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default CouponsSection;
