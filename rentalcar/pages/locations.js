import React from 'react';
import Navbar from '../components/navbar';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import SearchCar from '../components/SearchCar';
import Locations from '../components/Locations';
import Slideshow from '../components/Slideshow';


export default function LocationsPage() {
    return (
        <div>
            <CustomHeader title="Locations" /> 
            <Navbar />

            <div className="content">
                <div className="header">
                    <SearchCar />
                    <Slideshow />
                </div>
            <h1>Our Offices</h1>
            <Locations />
            </div>
            <CustomFooter />
        </div>
    );
};