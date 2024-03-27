import React, { useState } from 'react';
import Link from 'next/link';

export default function QuestionAnswer() {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questionsWithAnswers = [
        {
            question: "What documents do I need to rent a car at Car Rental?",
            answer: (
                <>
                    <p><b>You need to provide:</b></p>
                    <p>Driver's license issued at least 3 years ago.</p>
                    <p>Identity document (identity card or passport)</p>
                    <p><b>We will provide you on the spot or you can fill in in advance:</b></p>
                    <p>Motor vehicle rental contract</p>
                </>
            )
        },
        {
            question: "Where can we find your office?",
            answer: (
                <>
                    You can find a Car Rental office <Link href="/locations" >here </Link>
                </>
            )
        },
        {
            question: "What are the opening hours for car pick-up/drop-off?",
            answer: "You can pick up or return the rental car every weekday from 08:00 to 17:00. Saturdays and Sundays are holidays, but we can meet you by prior arrangement."
        },
        {
            question: "Is it possible to deliver a car to an airport, hotel or other address?",
            answer: "Yes, Car Rental offers delivery to an address. You need to contact us by phone or email to request delivery."
        },
        {
            question: "How can I pay?",
            answer: "We accept payment in cash when pick up the car."
        },
        {
            question: "What is the minimum age to rent a car?",
            answer: "Rental is allowed to drivers who have held a driver's license for a minimum of 3 years."
        },
        {
            question: "Are there mileage limits?",
            answer: "No, Car Rental does not set mileage limits."
        },
        {
            question: "How can I cancel/change a booking?",
            answer: "To cancel or change a reservation, contact us by phone or email. You will receive an email confirmation when we process your request."
        },
        {
            question: "What insurances are included in the fee?",
            answer: (
                <>
                    <p><b>The following insurances are included in the car rental:</b></p>
                    <p>"Civil liability"</p>
                    <p>Green Card</p>
                    <p>Vignette about the country</p>
                </>
            )
        },
        {
            question: "Do you arrange additional extras?",
            answer: (
                <>
                    <p><b>As additional extras we offer:</b></p>
                    <p>Addition of child seats (according to the age)</p>
                    <p>Mobile Portable HOTSPOT Device</p>
                    <p>Prepaid fuel</p>
                    <p>Snow chains</p>
                    <p>Driver at your service</p>
                </>
            )
        },
        {
            question: "Can I travel outside the country?",
            answer: "Another contract is signed when using the car outside the borders of the country"
        },
        {
            question: "What are the conditions for pets in the car?",
            answer: "There are no additional conditions for pets in the vehicle."
        }
    ];

    const toggleAnswer = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <div>
            {questionsWithAnswers.map((qa, index) => (
                <div className={`question-container ${activeQuestion === index ? 'active' : ''}`} key={index}>
                    <div className="question" onClick={() => toggleAnswer(index)}>{qa.question}</div>
                    <div className="answer" style={{ display: activeQuestion === index ? 'block' : 'none' }}>{qa.answer}</div>
                </div>
            ))}
        </div>
    );
}

