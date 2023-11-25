// Import necessary libraries and styles

import BuildingDetailsCard from "./BuildingDetailsCard";

// Your BuildingDetails component
const BuildingDetails = ({ allservice }) => {


  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-indigo-600 mb-8">About the Building</h2>
      <div className="max-w-2xl mx-auto text-lg text-gray-800">
        <p className="mb-4">
          Welcome to GULSHAN DREAM NEST, where architectural elegance meets unparalleled luxury. Explore the charming details of this exquisite building that stands as a testament to innovation and sophistication, with state-of-the-art design and state-of-the-art facilities.
        </p>
      </div>

      <div className="Allserv flex justify-around py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {
            allservice?.map(service => <BuildingDetailsCard key={service.id} service={service}></BuildingDetailsCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default BuildingDetails;
