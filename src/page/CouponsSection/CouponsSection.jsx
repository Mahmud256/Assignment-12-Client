// Import necessary libraries and styles
import React from 'react';
import 'tailwindcss/tailwind.css';

// Your CouponsSection component
const CouponsSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Exclusive Coupons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coupon 1 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">25% Off Your Next Purchase</h3>
            <p className="text-sm">Use code: <span className="text-purple-600">SAVE25</span></p>
          </div>

          {/* Coupon 2 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Free Shipping on Orders Over $50</h3>
            <p className="text-sm">Use code: <span className="text-purple-600">FREESHIP</span></p>
          </div>

          {/* Coupon 3 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Buy One, Get One 50% Off</h3>
            <p className="text-sm">Use code: <span className="text-purple-600">BOGO50</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponsSection;
