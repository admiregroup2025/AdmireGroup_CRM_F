import React from "react";

const Card = ({ title, icon, value, description }) => {
    return (
        <div className="w-fit rounded-md border border-gray-500 bg-[#ffffff] p-3">
            <div className="mb-6 flex w-full justify-between gap-6">
                <div className="text-black">{title}</div>
                <div className="text-gray-600">{icon}</div>
            </div>
            <div className="text-lg font-semibold text-black">{value}</div>
            <div className="text-md text-gray-500">{description}</div>
        </div>
    );
};

export default Card;
