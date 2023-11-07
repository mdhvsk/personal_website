
import "./Navbar.css"
import { React, useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">Madhav Asok</div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
            <div className="menu-toggle" onClick={toggleNav}>
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
        </nav>

    )
}

export default Navbar