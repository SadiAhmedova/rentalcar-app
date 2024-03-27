import Link from 'next/link';
import React from 'react';
import '../styles/index.module.css'; 
import Navbar from '../components/navbar';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import SearchCar from '../components/SearchCar';
import Image from 'next/image';
import ContactForm from '../components/ContactForm';
import OfficesList from '../components/OfficesList';
import Slideshow from '../components/Slideshow';


export default function Contacts() {
    return (

        <div>
            <CustomHeader title="Contacts" />
            <Navbar />   
            <div className="content">
            <div className="header">
                <SearchCar /> 
                <Slideshow />
            </div>

            <h1>Car Rental Contacts</h1>

            <div className="contacts">
                <div className="contact-column" id="our-locations">
                    <h2>Offices</h2>
                    <OfficesList />

                    
                </div>
                <div className="contact-column">
                    <h2>Telephones</h2>
                    <p>Mon – Sun: 08:00 – 22:00</p>
                    <p>/on the telephone/</p>
                    <p><Image src="/images/tel-icon.ico" alt="Телефонна иконка" width={20} height={20} />+359 99 999 9999</p>
                    <p><Image src="/images/tel-icon.ico" alt="Телефонна иконка" width={20} height={20} />+359 88 888 8888</p>
                    <p><Image src="/images/tel-icon.ico" alt="Телефонна иконка" width={20} height={20} />+359 77 777 7777</p>
                </div>
                <div className="contact-column">
                    <h2>Working Hours</h2>
                    <p><Image src="/images/clock-icon.ico" alt="Часовник иконка" width={20} height={20} />Monday - Friday : 08:00 - 17:00</p>
                    <p><Image src="/images/clock-icon.ico" alt="Часовник иконка" width={20} height={20} />Sarurday : 12:00 - 15:00</p>
                    <p><Image src="/images/clock-icon.ico" alt="Часовник иконка" width={20} height={20} />Sunday : Closed</p>
                </div>
            </div>

            <ContactForm />
            </div>

            <CustomFooter />
        </div>
    );
};
