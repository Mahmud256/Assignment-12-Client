// Import necessary libraries and styles


// Your BuildingDetails component
const BuildingDetails = () => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-indigo-600 mb-8">About the Building</h2>
      <div className="max-w-2xl mx-auto text-lg text-gray-800">
        <p className="mb-4">
          Welcome to our <span className="font-semibold text-indigo-600">iconic</span> building,
          where modern architecture meets timeless elegance. Immerse yourself in the blend of art
          and functionality, offering a unique space that caters to both business and leisure.
        </p>
        <p className="mb-8">
          With <span className="italic">cutting-edge design</span> and state-of-the-art facilities,
          our building stands as a testament to <span className="underline">innovation</span> and
          sophistication. Discover a space that transcends the ordinary and provides an
          <span className="font-bold">unparalleled experience</span> for every visitor.
        </p>
      </div>
    </section>
  );
};

export default BuildingDetails;
