import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CreateAnnouncement = () => {
    const [date, setDate] = useState(new Date());
    const { user } = useAuth();

    const handleCreateAnnouncement = (event) => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;

        const description = form.description.value;

        // Format the date as "YYYY-MM-DD"
        const formattedDate = date.toISOString().split('T')[0];

        const announce = { title, date: formattedDate, description };
        console.log(announce);

        // Make the POST request with 'userEmail' as a query parameter
        fetch('https://assignment-12-server-two-opal.vercel.app/announcement', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(announce), // 'AnnouncementData' should contain your Announcement data
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Create Your Announcement",
                        showConfirmButton: false,
                        timer: 1500

                    });
                }
                else {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Create Your Announcement",
                        showConfirmButton: false,
                        timer: 1500

                    });
                }
            })



        // useAxiosSecure.post('announcement', announce)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "Create Your Announcement",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //             // refetch cart to update the cart items count
        //         }
        //     })

    };

    const handleDateSelect = (date) => {
        setDate(date);
    };

    return (
        <div>
            <div className='p-4'>
                <div className="max-w-lg mx-auto p-4 bg-white border rounded-lg shadow-lg">
                    <div className=''>
                        <h2 className='text-2xl font-extrabold text-center'>Create Announcement</h2>
                    </div>
                    <form onSubmit={handleCreateAnnouncement}>


                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Announcement Title</label>
                            <input
                                type="text"
                                name="title"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Announcement Title"
                            />
                        </div>

                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Announcement Date</label>
                            <ReactDatePicker
                                selected={date}
                                onChange={handleDateSelect}
                                dateFormat='dd/MM/yyyy'
                                showTimeSelect={false}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholderText="Select Date"
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
                            value="Create Announcement"
                            className="btn btn-block bg-yellow-700 hover:bg-green-700 text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAnnouncement;