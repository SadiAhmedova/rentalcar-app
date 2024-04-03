import Link from 'next/link';
import React from 'react';
import '../styles/index.module.css'; 
import Navbar from '../components/navbar'
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import SearchCar from '../components/SearchCar';
import CarsList from '../components/CarsList';
import Slideshow from '../components/Slideshow';


export default function OurCars() {
    return (
      <div>
      <CustomHeader title="Our Cars" />
      <Navbar activeItem="OurCars" />  
      <div className="content">
        <div className="header">
          <SearchCar />
          <Slideshow />
        </div>
        <h1>Our Cars</h1>

        <CarsList />	
      </div>	
	    < CustomFooter />       
		</div>
    );
};