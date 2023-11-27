import { FaBook, FaCalendar, FaList, FaMicrophone, FaPaypal, FaUsers, FaUtensils } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useBook from '../hooks/useBook';

const Dashboard = () => {
    const [book] = useBook();
   const [isAdmin] = useAdmin();
    // const isAdmin = true;

    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <MdAdminPanelSettings />
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <CgProfile />
                                        My Profile
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaMicrophone />
                                        Announcements
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaPaypal />
                                        PAYMENT HISTORY
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/book">
                                        <FaCalendar />
                                        MY book({book.length})
                                    </NavLink>
                                </li>

                                {/* <li>
                                    <NavLink to="/dashboard/review">
                                        <FaPaypal />
                                        ADD REVIEW
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList />
                                        MY BOOKINGS
                                    </NavLink>
                                </li> */}
                            </>
                    }

                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;