import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useBook from '../../hooks/useBook';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const ApartmentCard = ({ room }) => {
    const { _id, aimage, aprtno, flrno, block, rent } = room || {};
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useBook();


    const handleAddToBook  = () => {
        // console.log(food);
        if (user && user.email) {
            //console.log(user.displayName);
            //send room to the database
            const bookRoom = {
                aprtId: _id,
                email: user.email,
                name: user.displayName,
                aimage, 
                aprtno, 
                flrno, 
                block, 
                rent

            }
            axiosSecure.post('books', bookRoom)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${aprtno} added to your book`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch book to update the book rooms count
                        refetch()
                    }
                })


        }
        else {
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
                    //send the user to the login
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

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
                        <button onClick={handleAddToBook} className="btn btn-primary">Agreement</button>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;