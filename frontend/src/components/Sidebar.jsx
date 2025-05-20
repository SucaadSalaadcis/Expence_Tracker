
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaMoneyBillWave } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {

    const menuItems = [
        { name: 'Dashboard', icon: <MdDashboard />, path: '/dashboard' },
        { name: 'Expenses', icon: <FaMoneyBillWave />, path: '/expenses' },
        { name: 'Logout', icon: <MdLogout />, path: '/logout' },
    ];

    return (
        <>

            {/* Sidebar */}
            <div className={`fixed z-30 top-0 left-0 h-full w-64 bg-black transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:static md:z-auto`}>
                <div className="py-6 text-center text-[#517cda] text-2xl font-bold cursor-pointer">
                    💰 XTracker 
                </div>
                <nav className="flex flex-col px-4 space-y-2">
                    {menuItems.map((item, idx) => (
                        <NavLink
                            key={idx}
                            to={item.path}
                            onClick={toggleSidebar}
                            className={({ isActive }) =>
                                `my-link text-white  flex items-center gap-3 px-4 py-3 rounded-md text-left transition-colors duration-300 hover:text-gray-700 ${isActive ? 'bg-[#155DFC]' : ''
                                }`
                            }
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
