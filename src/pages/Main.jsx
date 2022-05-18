import React from "react";
import Navbar from "../components/Navbar";
import LeafletMap from "../components/LeafletMap";

const Main = () => {
    return (
        <div className="main">
            <Navbar />
            <LeafletMap />
        </div>
    );
};

export default Main;
