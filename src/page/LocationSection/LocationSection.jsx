import React from 'react';
import MapContainer from 'your-map-package'; // Replace with the actual npm package for maps
import 'tailwindcss/tailwind.css';

const LocationSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Apartment's Location</h2>
        <p className="text-gray-600 mb-8">
          Discover the prime location of our apartment and find your way here easily.
        </p>
        
        {/* Map Container */}
        <div className="mb-8">
          {/* Replace 'MapContainer' with the actual component from your map package */}
          <MapContainer apiKey="your-api-key" />
        </div>

        {/* Location Details */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 px-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Main Street, Cityville</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 px-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Public Transport</h3>
              <p className="text-gray-600">Take the Metro Line 2, Station Name</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6 px-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Parking</h3>
              <p className="text-gray-600">Ample parking space available on-site.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
