import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainComponent from "./MainComponent";
import { Outlet } from "react-router-dom";

const ScreenLayout = () => {
    return (
        <div className="flex">
            <div className="">
                <Sidebar />
            </div>
            <div className="flex flex-col">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default ScreenLayout;
