import Link from 'next/link';
import React from 'react';
import '../styles/index.module.css'; 
import Navbar from '../components/navbar'
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import SearchCar from '../components/SearchCar';
import Slideshow from '../components/Slideshow';



export default function AboutUs() {
    return (

      <div>
      <CustomHeader title="About Us" />
      <Navbar activeItem="AboutUs" /> 

	  <div className="content">
	  <div className="header">
	  	<SearchCar />
	  	<Slideshow />
	   </div>   


      <div className="uslugi">
				<div >
					<h2>What are the services of Car Rental</h2>
					<p>If you are a guest of the city and are looking for a comfortable and independent way to get around at low prices, rent a car is the most convenient transport for you. With personal transport, you can quickly and easily move around the city and the region. The service is suitable for tourism throughout Bulgaria, family or business trips.</p>
					<p>If you are a guest of the city and are looking for a comfortable and independent way to get around at low prices, rent a car is the most convenient transport for you. With personal transport, you can quickly and easily move around the city and the region. The service is suitable for tourism throughout Bulgaria, family or business trips.</p>
				</div>
				<div>
					<h2>Easy booking and favorable conditions</h2>
					<p>You can book a cheap car rental quickly, in just 3 steps online. No credit card is required for the reservation, you will pay upon receipt.</p>
					<p>Choose between 5 or 7 seats, with a large trunk and air conditioning. The Car Rental service includes full insurance and thorough technical inspection before delivery. You can view the available models and extras yourself on site and test before paying a deposit..</p>
					<p>If you wish to rent the vehicle for a longer period – from 1 month or more – we are ready to offer you special conditions and prices.</p>
				</div>
				<div >
					<h2>What cars we offer</h2>
					<p>Our models are carefully selected to provide comfort and practicality. They are in excellent technical condition, manufactured after 2000. You can choose between a hatchback, station wagon or minivan suitable for 7 people. We also offer a choice of cars with automatic or manual transmission. Our offers are economical, with low fuel consumption, and among the models you will find gasoline, diesel or gas models.</p>
				</div>
				<div >
					<h2>When to choose Car Rental</h2>
					<p>Car Rental is gaining more and more popularity in our country. It is a suitable choice for you if you are here for a short time, on vacation and do not have your own transport. Whenever you need to move quickly, short or long distance, you can count on our quick response and competitive car prices.</p>
					<p>Renting is an affordable and inexpensive way to travel with family or on business.</p>
				</div>
			</div>
			<h1>Customer Reviews</h1>
			<div className="otzivi">
				<div>
					<h2>Krasimir Metodiev</h2>
					<p>"I am extremely satisfied with the services of this car rental company. I travel frequently for work and their cars are always clean, maintained and ready to go."</p>
				</div>
				<div>
					<h2>Maria Ilieva</h2>
					<p>"Superb service! Car was clean, new and in excellent condition. Easy and quick to get the keys and paperwork. I recommend this dealership to anyone looking for professionalism."</p>
				</div>
				<div>
					<h2>Ema Ivanova</h2>
					<p>"Outstanding car rental company! Hassle-free booking process, no hidden fees or ambiguities. Staff were friendly and responsive. I'd be happy to use your services again!"</p>
				</div>
				<div>
					<h2>Emilian Stanevski</h2>
					<p>"I had a wonderful experience renting a car from you. Everything was organized at a professional level. The car was in excellent condition and we received it at a time convenient for us. Thank you for the excellent service!"</p>
				</div>
				<div>
					<h2>Pencho Boyanov</h2>
					<p>"Amazing selection of cars and excellent quality of service. We got exactly what we expected - a new, clean and well maintained car. I recommend them to anyone looking for a reliable car rental!"</p>
				</div>
				<div>
					<h2>Hristo Metev</h2>
					<p>"The service was outstanding! Easy to book, hassle-free handover of the car. Great choice for those who want comfort and quality. I will use your services again!"</p>
				</div>
			</div>
			</div>
			< CustomFooter />
		</div>
    );
};