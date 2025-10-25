import { FiChevronDown, FiLogOut, FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
    navigate("/");
        console.log("User logged out");
        // navigate("/login");
    }
    return (
        <header className="flex h-[10vh] w-[82vw] items-center justify-between bg-white px-6 shadow-md">
            <div>
                <h1 className="text-[28px] font-semibold text-gray-500">Dashboard Overview</h1>
            </div>

            <div className="flex items-center gap-6">
                {/* <div className="flex cursor-pointer items-center gap-1 rounded-[12px] bg-gray-100 px-3 py-2 transition-shadow duration-200 hover:shadow-md">
                    <FiBriefcase className="text-gray-600" />
                    <span className="text-gray-600">Tech Corp</span>
                    <FiChevronDown className="text-gray-600" />
                </div> */}

                <div className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors">
                    <div className="flex size-[45px] items-center justify-center rounded-full bg-gray-200 text-[20px] font-semibold text-black">
                        JD
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[18px] font-medium text-gray-500">John Doe</span>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
                >
                    <FiLogOut
                        size={20}
                        className="text-gray-600"
                    />
                </button>
            </div>
        </header>
    );
};

export default Header;
