import React from 'react';
import Banner from "@/features/HomePage/Banner";
import Roadtrip from "@/features/HomePage/Roadtrip";

const HomePage = async () => {
    return (
        <div>
            {/* Your HomePage content here */}
            <Banner />
            <Roadtrip />
        </div>
    );
}

export default HomePage;
