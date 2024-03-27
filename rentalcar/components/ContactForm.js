import React, { useState, useRef } from 'react';

export default function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const modalRef = useRef(null);

    function submitSms() {
        const emailInput = document.getElementById('email').value;
        const nameInput = document.getElementById('name').value;
        const smsInput = document.getElementById('message').value;

        if (emailInput === '' || nameInput === '' || smsInput === '') {
            setErrorMessage('All fields are required!');
            return;
        } else if (!isValidName(nameInput)) {
            setErrorMessage('Enter a valid name!');
            return;
        } else if (!isValidEmail(emailInput)) {
            setErrorMessage('Enter a valid email!');
            return;
        }

        setSuccessMessage(`Your response will be sent to ${emailInput}`);
        showModal();
        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidName(name) {
        const nameRegex = /^[a-zA-Z]{2,}_*$/;
        return nameRegex.test(name);
    }

    function showModal() {
        modalRef.current.style.display = 'block';
    }

    function closeModal() {
        modalRef.current.style.display = 'none';
        setErrorMessage('');
        setSuccessMessage('');
        
    }

    return (
        <div>
            <div className="contact-form">
                <h2>Contact us</h2>
                <form className="contactForm">
                    <div className="form-column">
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" id="name" name="name" placeholder="Enter your name..." required /><br />
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" name="email" placeholder="Enter your email address..." required />
                        {errorMessage && <div id="error-message" style={{ color: 'red' }}>{errorMessage}</div>}
                    </div>
                    <div className="form-column">
                        <label htmlFor="message">Your Message:</label><br />
                        <textarea id="message" name="message" rows="10" placeholder="Enter your question/message..." required></textarea>
                    </div>
                    <button className="btn submit" type="button" onClick={submitSms}>Submit</button>
                </form>
            </div>

            <div className="modal" id="modal" ref={modalRef}>
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <h2>Your message is submitted!</h2>
                    <p id="sms-info">{successMessage}</p>
                </div>
            </div>
        </div>
    );
}
