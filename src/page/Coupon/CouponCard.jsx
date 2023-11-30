import React from 'react';


const CouponCard = ({ coupon }) => {
    const { title, percentage, description } = coupon || {};


    return (
        <div>
            <div className="card card-side bg-base-100 border">
                <div className="card-body p-3">
                    <h2 className="card-title">Code: {title}</h2>
                    <h2 className="card-title">Discount: {percentage}</h2>
                    <p>{description}</p>


                </div>
            </div>
        </div>
    );
};

export default CouponCard;