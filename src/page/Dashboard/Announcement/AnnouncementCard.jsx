import React from 'react';
import useAuth from '../../../hooks/useAuth';


const AnnouncementCard = ({ announcement }) => {
    const { _id, title, date, description } = announcement || {};
    const { user } = useAuth();


    return (
        <div>
           <div className="card card-side bg-base-100 border">
                {/* <figure><img className='w-80 h-64' src={aimage} alt="Apartment" /></figure> */}
                <div className="card-body p-3">
                    <h2 className="card-title">{title}</h2>
                    <p>Announcement Date: {date}</p>
                    <p>{description}</p>

                    
                </div>
            </div>
        </div>
    );
};

export default AnnouncementCard;