import Link from 'next/link';
import React from 'react';
import '../styles/index.module.css'; 
import Navbar from '../components/navbar'
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import SearchCar from '../components/SearchCar';
import Slideshow from '../components/Slideshow';


export default function Index() {
    return (
      <div>
      <CustomHeader title="Homepage" />
      <Navbar />   
      <h1 className="welcome-text">Welcome to our rent  site!</h1>

      <div className="content">
        <div className="header">
          <SearchCar />
          <Slideshow />
        </div>

      <div className="index-info">
      <div className="first column">
      <h2>For Car Renatal</h2>
      <p>Rent a Car offers car rentals across Bulgaria and major airports in the Balkans. Our main advantages include: new cars, high service standards, and convenient locations. Our company was founded in 2003 and is currently one of the leading service providers in the country.</p>

      <p>We offer a discount program for our regular customers. We have created the MyTop program, which guarantees discounts and bonuses to our customers when they book online.</p>


      
    </div>
    <div className="second column">
      <h2>Offices in Bulgaria</h2>
      <p>Car Rental has offices at the following cities: Varna, Plovdiv, Rousse, Sofia, Burgas, Stara Zagora, Veliko Tarnovo, Pleven.</p>

      <iframe className="officesMap" src="https://www.google.com/maps/d/embed?mid=13yXz5R8sa8dShV0kmqzsqkeNJ53GbAo&ehbc=2E312F" ></iframe>
    </div>
    </div>
    </div>

    < CustomFooter />
    </div>
    );
};