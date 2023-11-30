import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import {Cell,  PieChart, Pie, Legend } from 'recharts';
import useBook from '../../../hooks/useBook';
import { MdMeetingRoom } from 'react-icons/md';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const AdminHome = () => {
    const { user } = useAuth();
    const [book] = useBook();
    const { flrno, block, aprtno, rent } = book[0] || {};
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['booked-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/booked-stats');
            return res.data;
        }
    })

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    // const pieChartData = chartData.map(data => {
    //     return { name: data.aprtno, value: data.revenue }
    // })

    const pieChartData = [
        { name: 'Booked Rooms', value: stats.bookedRooms },
        { name: 'Available Rooms', value: stats.availableRooms },
    ];

    return (
        <div>
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden border">
                <div className="avatar flex justify-center p-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user.photoURL} alt="Profile" />
                    </div>
                </div>
                <div className="p-6">
                    {users
                        .filter((user) => user.role === 'admin')
                        .map((user) => (
                            <div key={user._id}>
                                <h1 className="text-2xl font-bold mb-2">Name: {user.name}</h1>
                                <p className="text-gray-600 mb-4">Email: {user.email}</p>
                                <p className="text-gray-600 mb-4">Role: {user.role}</p>
                            </div>
                        ))}

                </div>
            </div>
            <div className="stats shadow">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border'>
                    {/* <div className="stat border">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className='text-3xl'></FaDollarSign>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">${stats.revenue}</div>
                    </div> */}

                    <div className="stat border">
                        <div className="stat-figure text-secondary">
                            <MdMeetingRoom className='text-3xl'></MdMeetingRoom>
                        </div>
                        <div className="stat-title">Total Rooms</div>
                        <div className="stat-value">{stats.totalRooms}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat border">
                        <div className="stat-figure text-secondary">
                            <MdMeetingRoom className='text-3xl'></MdMeetingRoom>
                        </div>
                        <div className="stat-title">Avilable Rooms</div>
                        <div className="stat-value">{stats.availableRooms}</div>
                        {/* <div className="stat-desc">{stats.availableRoomsPercentage}%</div> */}
                    </div>

                    <div className="stat border">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl'></FaUsers>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{stats.users}</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat border">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl'></FaUsers>
                        </div>
                        <div className="stat-title">Members</div>
                        <div className="stat-value">{users.filter(user => user.role === 'member').length}</div>
                    </div>


                    <div className="stat border">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Booked Room</div>
                        <div className="stat-value">{stats.bookedRooms}</div>
                        {/* <div className="stat-desc">{stats.bookedRoomsPercentage}%</div> */}

                    </div>
                </div>


            </div>
            <div className="flex">
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={renderCustomizedLabel}
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>
            </div>
            {/* <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="aprtno" />
                        <YAxis />
                        <Bar dataKey="revenue" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                   

                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div> */}
        </div>
    );
};

export default AdminHome;