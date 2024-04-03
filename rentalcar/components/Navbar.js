import React, { useState, useEffect } from 'react';

import Link from 'next/link';

export default function Navbar({activeItem}) {
    const [showNavItems, setShowNavItems] = useState(false);

    useEffect(() => {
        const activeElement = document.getElementById(activeItem.toLowerCase());
        if (activeElement) {
            activeElement.classList.add("active");
        }
    }, [activeItem]);


    function toggleNavbar(){
        setShowNavItems(!showNavItems);
    };
    return (
        <div className="nav">
            <ul className={`nav-list ${showNavItems ? 'show-navitem' : ''}`}>
                <li className="navitem"><img className="logo" src="images/logo.png" alt="logo" /></li>
                <li id="homepage" className="navitem"><Link href="/">Homepage</Link></li>
                <li className="navitem" id="locations" ><Link href="/locations">Locations</Link></li>
                <li id="ourcars" className="navitem"><Link href="/our-cars">Our Cars</Link></li>
                <li id="q&a" className="navitem"><Link href="/qa">Q&A</Link></li>
                <li id="aboutus" className="navitem"><Link href="/about-us">About Us</Link></li>
                <li id="contacts" className="navitem"><Link href="/contacts">Contacts</Link></li>
            </ul>
            <p className="menu-icon" onClick={toggleNavbar}>&#9776;</p>
            

        </div>
    );
};
