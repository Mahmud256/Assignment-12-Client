import React from 'react';

const ApartmentCard = ({ item }) => {
    const { aimage, aprtno, flrno, block, rent } = item || {};

    return (
        <div>
            <div className="card card-side bg-base-100 border">
                <figure><img className='w-80 h-64' src={aimage} alt="Apartment" /></figure>
                <div className="card-body p-3">
                    <h2 className="card-title">GULSHAN DREAM NEST</h2>
                    <h2 className="card-title">Apartment no: {aprtno}</h2>
                    <h2 className="card-title">Floor no: {flrno}</h2>
                    <h2 className="card-title">Block name: {block}</h2>
                    <h2 className="card-title">Rent: {rent} $</h2>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;