import React from 'react';
import Link from 'next/link';

export default function CustomFooter() {
    return (

        <div className="footer">

      <div className="foot-column">
        <h3>Rent a Car</h3>
        <p>Car Rental offers car rentals in Bulgaria. The company's main activity is renting out light and light commercial vehicles since 2023.</p>
      </div>
      <div className="foot-column">
        <h3>Contacts</h3>
        <p className="footer-nav">If you have questions. <Link href="/qa">Click here</Link></p>
        <p className="footer-nav">You want to find us? <Link href="/locations">Click here</Link></p>
        <p className="footer-nav">Here are our contacts. <Link href="/contacts">Click</Link></p>
      </div>
      <div className="foot-column">
        <h3>Working Hours</h3>
        <p>Monday - Friday : 08:00 - 17:00</p>
        <p>Sarurday : 12:00 - 15:00 </p>
        <p>Sunday : Closed</p>
      </div>
    </div>
    );
    };
