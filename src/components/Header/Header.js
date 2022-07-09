import React from 'react';
import './Header.css';
import { Link } from "react-scroll";
import useDarkMode from 'use-dark-mode';

function Header() {
    const darkMode = useDarkMode(false);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-default navbar-light navbar-custom fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="home">
                    <img src='/images/MininduLogo.png' className='logo' alt='logo'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="nav navbar-nav ms-auto navbar-center" id="mySidenav">
                        <li className="nav-item">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="services" spy={true} smooth={true} offset={-100} duration={500}>
                                My Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="certificates" spy={true} smooth={true} offset={-100} duration={500}>
                                Certifications
                            </Link>
                        </li>
                        <li>
                            <input type="checkbox" id='mode' checked={darkMode.value} onClick={darkMode.toggle}></input>
                            <label htmlFor='mode' className='nightMode'/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header