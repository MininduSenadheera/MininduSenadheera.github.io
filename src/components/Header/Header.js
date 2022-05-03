import React from 'react';
import './Header.css';
import { Link } from "react-scroll";


function Header() {
    
    return (
        <nav class="navbar navbar-expand-lg navbar-default navbar-light navbar-custom fixed-top">
            <div class="container">
                <a class="navbar-brand logo" href="home">
                    <img src='/images/M logo.png' className='logo' alt='logo'/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="nav navbar-nav ms-auto navbar-center" id="mySidenav">
                        <li class="nav-item">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                                About
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="certificates" spy={true} smooth={true} offset={-100} duration={500}>
                                Certifications
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header