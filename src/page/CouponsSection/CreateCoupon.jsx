import React from 'react';
import Swal from 'sweetalert2';

const CreateCoupon = () => {
    const handleCreateCoupon = (event) => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const percentage = form.percentage.value;

        const description = form.description.value;

        const couponn = { title, percentage, description };
        console.log(couponn);

        // Make the POST request with 'userEmail' as a query parameter
        fetch('https://assignment-12-server-two-opal.vercel.app/coupon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(couponn), // 'CouponData' should contain your Coupon data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Create Your Coupon",
                        showConfirmButton: false,
                        timer: 1500

                    });
                }
                else {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Create Your Coupon",
                        showConfirmButton: false,
                        timer: 1500

                    });
                }
            })

    };
    return (
        <div>
            <div className='p-4'>
                <div className="max-w-lg mx-auto p-4 bg-white border rounded-lg shadow-lg">
                    <div className=''>
                        <h2 className='text-2xl font-extrabold text-center'>Create Coupon</h2>
                    </div>
                    <form onSubmit={handleCreateCoupon}>


                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Coupon Code</label>
                            <input
                                type="text"
                                name="title"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Coupon Code"
                            />
                        </div>
                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Discount Percentage</label>
                            <input
                                type="text"
                                name="percentage"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Discount Percentage"
                            />
                        </div>

                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Short Description"
                            ></textarea>
                        </div>

                        <input
                            type="submit"
                            value="SUBMIT"
                            className="btn btn-block bg-yellow-700 hover:bg-green-700 text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateCoupon;