import React, { useState } from 'react';
import useAnnouncement from '../../../hooks/useAnnouncement';
import Pagination from '../../Pagination/Pagination';
import AnnouncementCard from '../Announcement/AnnouncementCard';


const Announcement = () => {
    const [announcement] = useAnnouncement();
    const [currentPage, setCurrentPage] = useState(1);
    const apartmentsPerPage = 6;

    const indexOfLastApartment = currentPage * apartmentsPerPage;
    const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
    const currentApartments = announcement.slice(indexOfFirstApartment, indexOfLastApartment);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div>
            <div className='max-w-[1300px] mx-auto'>

                {/* Input field for selecting difficulty level */}
                

                {currentApartments.length > 0 ? (
                    <div className="flex justify-around py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {currentApartments.map((announcement) => (
                                <AnnouncementCard
                                key={announcement._id} 
                                announcement={announcement} 
                            />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}
            </div>
            <Pagination
                totalApartments={announcement.length}
                apartmentsPerPage={apartmentsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Announcement;