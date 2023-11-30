import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useBook from '../../hooks/useBook';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const ApartmentCard = ({ room }) => {
    const { _id, aimage, aprtno, flrno, block, rent, role } = room || {};
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useBook();
    

    const handleAddToBook = () => {
        if (user && user.email) {
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0];
    
            const bookRoom = {
                aprtId: _id,
                email: user.email,
                name: user.displayName,
                aimage,
                aprtno,
                flrno,
                block,
                rent,
                agrdate: formattedDate,
                status: 'pending'
            };
    
            const agreement = {
                aprtId: _id,
                email: user.email,
                name: user.displayName,
                aimage,
                aprtno,
                flrno,
                block,
                rent,
                role:"",
                agrdate: formattedDate,
                status: 'pending'
            };
    
            // Make a POST request for "books"
            axiosSecure.post('books', bookRoom)
                .then(res => {
                    if (res.data.insertedId) {
                        // Success for "books" request, now make a POST request for "agreement"
                        axiosSecure.post('agree', agreement)
                            .then(agreementRes => {
                                if (agreementRes.data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: `${aprtno} added to your book`,
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    // refetch book to update the book rooms count
                                    refetch();
                                }
                            })
                            .catch(error => {
                                // Handle error for "agreement" request
                                console.error('Error making "agreement" request:', error);
                            });
                    }
                })
                .catch(error => {
                    // Handle error for "books" request
                    console.error('Error making "books" request:', error);
                });
        } else {
            // User not logged in, show login prompt
            Swal.fire({
                title: "You are not Login",
                text: "Please Login add to the book",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send the user to the login page
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };
    

    return (
        <div>
            <div className="card w-80 lg:w-auto card-side bg-base-100 border">
                <figure><img className='w-80 h-64' src={aimage} alt="Apartment" /></figure>
                <div className="card-body p-3">
                    <h2 className="card-title text-sm lg:text-lg">GULSHAN DREAM NEST</h2>
                    <h2 className="card-title text-sm lg:text-lg">Apartment no: {aprtno}</h2>
                    <h2 className="card-title text-sm lg:text-lg">Floor no: {flrno}</h2>
                    <h2 className="card-title text-sm lg:text-lg">Block name: {block}</h2>
                    <h2 className="card-title text-sm lg:text-lg">Rent: {rent} $</h2>

                    <div className="card-actions justify-end">
                        <button onClick={handleAddToBook} className="btn btn-primary">Agreement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;
