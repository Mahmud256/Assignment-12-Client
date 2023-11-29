import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const AgreementCard = ({ agree, handleMakeMember, handleDeleteUser }) => {
    const { _id, name, email, flrno, block, aprtno, rent, agrdate, status } = agree || {};
    const { user } = useAuth();



    return (
        <div>
            <div className="card card-side bg-base-100 border">
                <div className="card-body p-3">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Email: {email}</h2>
                    <h2 className="card-title">Floor no: {flrno}</h2>
                    <h2 className="card-title">Block name: {block}</h2>
                    <h2 className="card-title">Room no: {aprtno}</h2>
                    <h2 className="card-title">Rent: {rent}</h2>
                    <h2 className="card-title">Agreement Date: {agrdate}</h2>
                    <h2 className="card-title">Status: {status}</h2>
                    <button onClick={() => handleMakeMember(_id)} className="btn bg-red-600 hover:bg-yellow-600 normal-case text-lg font-semibold text-[#fff]">Accept</button>
                    <button onClick={() => handleDeleteUser(_id)} className="btn bg-red-600 hover:bg-yellow-600 normal-case text-lg font-semibold text-[#fff]">Reject</button>
                    </div>
            </div>
        </div>
    );
};

export default AgreementCard;
