import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainComponent from "./MainComponent";

const ScreenLayout = () => {
    return (
        <div className="flex">
            <div className="">
                <Sidebar />
            </div>
            <div className="flex flex-col">
                <Header />
                <MainComponent />
            </div>
        </div>
    );
};

export default ScreenLayout;
