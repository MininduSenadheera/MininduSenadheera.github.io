import React, { useState, useEffect } from 'react';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from "react-scroll";

function Header() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
      
        window.addEventListener('resize', changeWidth)


        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, []);
    
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top header-bg py-4">
                {(toggleMenu || screenWidth > 500) && (
                <div className="container">
                    <div></div>
                    <div>
                        <div class="title">
                            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                                Home
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div class="title">
                            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
                                About
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div class="title">
                            <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>
                                Projects
                            </Link>
                        </div>
                    </div>
                    <div >
                        <div class="title">
                            <Link to="certificates" spy={true} smooth={true} offset={-100} duration={500}>
                                Certifications
                            </Link>
                        </div>
                    </div>
                    <div></div>
                </div>
                )}

                <span onClick={toggleNav} className="toggle"><DehazeIcon/></span>
            </nav>
        </header>
    )
}

export default Header