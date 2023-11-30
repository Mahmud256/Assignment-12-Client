import { FaBook, FaCalendar, FaHome, FaMicrophone, FaPaypal, FaUsers } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useBook from '../hooks/useBook';
import useMember from '../hooks/useMember';

const Dashboard = () => {
    const [book] = useBook();
    const [isAdmin] = useAdmin();
    const [isMember] = useMember();
    // const isAdmin = true;

    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-stone-300">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <MdAdminPanelSettings />
                                    Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Manage Members</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/agreement">
                                    <FaUsers></FaUsers>
                                    Agreement Request</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/create">
                                    <FaMicrophone></FaMicrophone>
                                    Make Announcement</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/announcement">
                                    <FaMicrophone />
                                    Announcements
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/crcoupon">
                                    <FaBook></FaBook>
                                    Manage Coupons</NavLink>
                            </li>
                        </>
                            :
                            isMember ? <>
                                <li>
                                    <NavLink to="/dashboard/memberHome">
                                        <CgProfile />
                                        My Profile
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/announcement">
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
                                        Make Payment({book.length})
                                    </NavLink>
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
                                        <NavLink to="/dashboard/announcement">
                                            <FaMicrophone />
                                            Announcements
                                        </NavLink>
                                    </li>

                                </>
                    }

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            HOME
                        </NavLink>
                    </li>

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