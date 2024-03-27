import React, {useState} from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [showNavItems, setShowNavItems] = useState(false);

    const toggleNavbar = () => {
        setShowNavItems(!showNavItems);
    };
    return (
        <div className="nav">
            <ul className="nav-list" >
                <li className={`navitem ${showNavItems ? 'show-navitem' : ''}`}><img className="logo" src="images/logo.png" alt="logo" /></li>
                <li className={`navitem ${showNavItems ? 'show-navitem' : ''}`}><Link href="/">Homepage</Link></li>
                <li className={`navitem ${showNavItems ? 'show-navitem' : ''}`}><Link href="/locations">Locations</Link></li>
                <li className={`navitem ${showNavItems ? 'show-navitem' : ''}`}><Link href="/our-cars">Our Cars</Link></li>
                <li className={`navitem ${showNavItems ? 'show-navitem' : ''}`}><Link href="/qa">Q&A</Link></li>
                <li className={`navitem ${showNavItems ? 'show-navitem' : ''}`}><Link href="/about-us">About Us</Link></li>
                <li className={`navitem ${showNavItems ? 'show-navitem' : ''}`}><Link href="/contacts">Contacts</Link></li>
            </ul>
            <p className="menu-icon" onClick={toggleNavbar}>&#9776;</p>
            

        </div>
    );
};
