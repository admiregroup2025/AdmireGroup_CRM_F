import React from "react";
import { FiChevronDown, FiLogOut } from "react-icons/fi";

const Header = () => {
    return (
        <header className="flex h-16 w-[82vw] items-center justify-between bg-white px-6 shadow-sm">
            <div>
                <h1 className="text-xl font-semibold text-gray-800">Dashboard Overview</h1>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex cursor-pointer items-center gap-1 rounded-md border border-gray-300 px-3 py-2 transition-shadow duration-200 hover:shadow-md">
                    <span className="text-gray-600">Tech Corp</span>
                    <FiChevronDown className="text-gray-600" />
                </div>

                <div className="flex cursor-pointer items-center gap-3 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-bold text-white">JD</div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-700">John Doe</span>
                    </div>
                </div>

                <button className="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100">
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
