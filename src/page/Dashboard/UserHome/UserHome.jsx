import React from 'react';
import useAuth from "../../../hooks/useAuth";
import useBook from "../../../hooks/useBook";

const UserHome = () => {
    const { user } = useAuth();
    const [book] = useBook();
    //   const flrno = book.reduce(flrno);
    //   const block = book.reduce(block);
    //   const aprtname = book.reduce(aprtname);
    const { flrno, block, aprtno } = book[0] || {};
    // const axiosSecure = useAxiosSecure();

    return (
        <div className="container mx-auto mt-8">
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden border">
                <div className="avatar flex justify-center p-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} alt="Profile" />
                    </div>
                </div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-2">Name: {user.displayName}</h1>
                    <p className="text-gray-600 mb-4">Email: {user.email}</p>
                    <p className="text-gray-600 mb-4">Agreement Accept Date: {new Date().toLocaleDateString()}</p>
                    <div>
                        <h2 className="text-lg font-bold mb-2">Rented Apartment Info</h2>
                        <p>Floor No: {flrno}</p>
                        <p>Block: {block}</p>
                        <p>Room No: {aprtno}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
