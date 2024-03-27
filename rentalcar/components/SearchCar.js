import React, { useState, useEffect } from 'react';
import Options from './OptionLocation';
import { useRouter } from 'next/router';

export default function SearchCar() {
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [pickupLocationError, setPickupLocationError] = useState('');
    const [pickupDateError, setPickupDateError] = useState('');
    const [returnDateError, setReturnDateError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const pickupLocationElement = document.getElementById('pickup');
        const returnLocationElement = document.getElementById('dropoff');
        const pickupDateElement = document.getElementById('pickupDate');
        const returnDateElement = document.getElementById('returnDate');

        pickupLocationElement.addEventListener('change', function() {
            returnLocationElement.value = pickupLocationElement.value;
        });

        const today = new Date().toISOString().split('T')[0];

        if (pickupDateElement && returnDateElement) {
            pickupDateElement.min = today;
            returnDateElement.min = today;
        }

        pickupDateElement.addEventListener('input', function() {
            const selectedPickupDate = new Date(pickupDateElement.value);
            const nextDay = new Date(selectedPickupDate);
            nextDay.setDate(selectedPickupDate.getDate() + 1);
            const nextDayISO = nextDay.toISOString().split('T')[0];

            returnDateElement.min = nextDayISO;
            returnDateElement.value = nextDayISO;

            if (returnDateElement.value < nextDayISO) {
                returnDateElement.value = nextDayISO;
            }
        });
    }, []);

    function searchInformation(event) {
        event.preventDefault(); 
        setPickupLocationError('');
        setPickupDateError('');
        setReturnDateError('');
    
        let hasError = false;
        if (!pickupLocation) {
            setPickupLocationError('Please choose a pick up location.');
            hasError = true;
        }
        if (!pickupDate) {
            setPickupDateError('Please choose a pick up date.');
            hasError = true;
        }
        if (!returnDate) {
            setReturnDateError('Please choose a return date.');
            hasError = true;
        }
    
        if (!hasError) {
            localStorage.setItem('searchInfo', JSON.stringify({ pickupLocation, dropoffLocation: pickupLocation, pickupDate, returnDate }));
            router.push('/our-cars');
        }
    }

    return (
        <div className="search-container">
            <div className="search-form">
                <form id="searchForm">
                    <h3>Pick up</h3>
                    <select
                        id="pickup"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                    >
                        <Options initialSelectedLocation={pickupLocation}/>
                    </select>

                    <div id="pickup-location-error-message" style={{color: '#770C0C'}}>{pickupLocationError}</div>

                    <input
                        id="pickupDate"
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                    />

                    <div id="pickup-date-error-message" style={{ color: '#770C0C' }}>{pickupDateError}</div>

                    <h3>Drop off</h3>
                    <select
                        id="dropoff"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                    >
                        <Options />
                    </select>

                    <div id="dropoff-location-error-message" style={{ color: '#770C0C' }}>{pickupLocationError}</div>

                    <input
                        id="returnDate"
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />

                    <div id="dropoff-date-error-message" style={{ color: '#770C0C' }}>{returnDateError}</div>

                    <button onClick={searchInformation} className="btn searchBtn">Search</button>
                </form>
            </div>
        </div>
    );
}
