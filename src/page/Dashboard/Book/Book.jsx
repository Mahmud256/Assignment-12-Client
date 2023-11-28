import { useState } from 'react';
import { format } from 'date-fns';
import useBook from '../../../hooks/useBook';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Book = () => {
    const [book, refetch] = useBook();
    const { user } = useAuth();
    const [selectedMonth, setSelectedMonth] = useState(format(new Date(), 'MMMM'));
    const { flrno, block, aprtno, rent } = book[0] || {};
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);


    const totalPrice = book.reduce((total, room) => total + room.rent, 0);
    const totalPriceWithDiscount = totalPrice - totalPrice * discount;

    const handleApplyCoupon = () => {
        if (couponCode === 'SAVE25') {
            setDiscount(0.25); // 25% discount
        } else {
            // Handle invalid coupon code
            Swal.fire({
                icon: 'error',
                title: 'Invalid Coupon Code',
                text: 'Please enter a valid coupon code.',
            });
        }
    };
    // const axiosSecure = useAxiosSecure();

    // const handleDelete = (id) => {
    //     ... (previous delete code)
    // }

   

    return (
        <div>
            <div className="flex justify-evenly mb-8">
                {/* <h2 className="text-4xl">rooms: {book.length}</h2> */}
                <h2 className="text-4xl">Total Price: {totalPriceWithDiscount}</h2>
                {book.length ? (
                    <Link to="/dashboard/payment">
                        <button className="btn btn-primary">Pay</button>
                    </Link>
                ) : (
                    <button  disabled className="btn btn-primary">
                        Pay
                    </button>
                )}

                <div className="card w-64 md:w-80 bg-base-100">
                    <div className="card-body">
                        <h2 className="card-title">Have coupon?</h2>
                        <div className="coupon-code">
                            <input
                                type="text"
                                className="border bg-[#fff] text-lg md:text-xl w-32 md:w-40 py-[0.563rem] md:p-[0.563rem] rounded-l-lg outline-0"
                                placeholder="Coupon code"
                                name=""
                                id="coupon"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                            />
                            <button
                                id="apply"
                                className="py-2 px-5 btn btn-secondary text-[#fff] rounded-l-none absolute md:relative md:top-[-2px] md:left-[-6px]"
                                onClick={() => handleApplyCoupon()}
                                disabled={!couponCode}
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Floor No</th>
                            <th>Block</th>
                            <th>Apartment No</th>
                            <th>Rent</th>
                            <th>Month</th>
                            <th>Select Month</th>
                        </tr>
                    </thead>
                    <tbody>
                        {book.map((room, index) => (
                            <tr key={room._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{flrno}</td>
                                <td>{block}</td>
                                <td>{aprtno}</td>
                                <td>{totalPriceWithDiscount}</td>
                                <td>
                                    <div className="mb-4 form-control">{selectedMonth}</div>
                                </td>
                                <td>
                                    <select
                                        className="form-select"
                                        value={selectedMonth}
                                        onChange={(e) => setSelectedMonth(e.target.value)}
                                    >
                                        {/* You can dynamically generate the options based on your requirements */}
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="June">June</option>
                                        <option value="July">July</option>
                                        <option value="August">August</option>
                                        <option value="September">September</option>
                                        <option value="October">October</option>
                                        <option value="November">November</option>
                                        <option value="December">December</option>
                                    </select>
                                </td>
                                <th>
                                    {/* Include your delete button here */}
                                    {/* <button
                                        onClick={() => handleDelete(room._id)}
                                        className="btn btn-ghost btn-lg"
                                    >
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button> */}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Book;
