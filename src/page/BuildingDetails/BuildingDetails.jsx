// Import necessary libraries and styles
import BuildingDetailsCard from "./BuildingDetailsCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';;

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

      <div className="Allserv flex justify-center lg:mx-24 py-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="">
            {allservice?.map(service => (
              <SwiperSlide key={service.id}>
                <BuildingDetailsCard service={service} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default BuildingDetails;
