import React from 'react';
import './Header.css';
import { Link } from "react-scroll";

function Header() {
    
    return (
        <header>
            <nav className="navbar navbar-inverse navbar-expand-lg navbar-light fixed-top header-bg">
                <div className="container">
                    <div></div>
                    <div class="hexagon-item">
                        <div class="hex-content">
                            <div class="hex-content-inner">
                                <div class="title">
                                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                                        Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hexagon-item">
                        <div class="hex-content">
                            <div class="hex-content-inner">
                                <div class="title">
                                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                                        About
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hexagon-item">
                        <div class="hex-content">
                            <div class="hex-content-inner">
                                <div class="title">
                                    <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hexagon-item">
                        <div class="hex-content">
                            <div class="hex-content-inner">
                                <div class="title">
                                    <Link to="certificates" spy={true} smooth={true} offset={-100} duration={500}>
                                        Certifications
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </nav>
        </header>
    )
}

export default Header