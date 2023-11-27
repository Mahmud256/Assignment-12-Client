import React from 'react';

const BuildingDetailsCard = ({ service }) => {
    console.log(service);
    const { id, title, paragraph } = service || {};
    return (
        <div>

            <div className="card mx-auto allserv max-w-xl bg-base-100 shadow-xl" data-aos="fade-up">
                <div className="card-body p-4">
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {title}
                    </h2>

                    <p className='p-4'>{paragraph}</p>

                </div>
            </div>


        </div>
    );
};

export default BuildingDetailsCard;