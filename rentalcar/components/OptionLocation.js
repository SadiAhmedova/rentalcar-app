import React from 'react';
import offices from "./OfficesData";

export default function Options(initialSelectedLocation) {

    const optionElements = [
        <option key="default" value="" disabled>Choose location...</option>,
        ...offices.map((office, index) => (
            <option key={index} value={`${office.city} - ${office.address}`}>
                {office.city} - {office.address}
            </option>
        ))
    ];

    return optionElements; 

}