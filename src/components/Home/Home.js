import React from 'react'
import './Home.css';
import Typing from 'react-typing-animation';
import { indigo } from '@mui/material/colors';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

function Home() {
    Aos.init({duration:1000})

    return (
        <div id="home" className="home d-flex align-items-center">
            <div className='container'>
                <div className="row">
                    <div className="col-xl-5">
                        <div data-aos="zoom-out">
                            <img src="/images/ProfilePic.jpg" className="circle-shadow img-fluid" alt="profile pic"/>
                        </div>
                    </div>
                    <div className="col-xl-7 mt-5 d-flex flex-column justify-content-center">
                        <p data-aos="fade-up">Hi there, I'm </p>
                        <h1 data-aos="fade-up" style={{ color: indigo[700] }}>Minindu Senadheera</h1>
                        <div data-aos="fade-right" data-aos-delay="200">
                        <Typing>
                                <p>
                                    Data Science Undergraduate | &nbsp; 
                                    <Typing.Delay ms={500} />
                                    Full Stack Developer | &nbsp;
                                    <Typing.Delay ms={500} />
                                    Photographer</p>
                            </Typing> 
                        </div>
                        
                        <br/>
                        <div data-aos="fade-right" data-aos-delay="200">
                            <a href="mailto:minindusenadheera@gmail.com">
                                <img className="social-icons" src="https://img.icons8.com/fluency/48/000000/apple-mail.png" alt="linkedin"/>
                            </a>
                            <a href="https://www.linkedin.com/in/minindusenadheera" target="_blank" rel="noreferrer">
                                <img className="social-icons" src="https://img.icons8.com/fluency/50/000000/linkedin.png" alt="linkedin"/>
                            </a>
                            &nbsp;
                            <a href="https://github.com/MininduSenadheera" target="_blank" rel="noreferrer">
                                <img className="social-icons" src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt="github"/>
                            </a>
                            &nbsp;
                            <a href="https://www.instagram.com/minindu_senadheera/" target="_blank" rel="noreferrer">
                                <img className="social-icons" src="https://img.icons8.com/fluency/50/000000/instagram-new.png" alt="instagram"/>
                            </a>
                            &nbsp;
                            <a href="https://www.facebook.com/minindu.senadheera/" target="_blank" rel="noreferrer">
                                <img className="social-icons" src="https://img.icons8.com/fluency/50/000000/facebook-new.png" alt="facebook"/>
                            </a>
                            <br/><br/>
                            <Link to="/pdf/Resume - Minindu Senadheera.pdf" target="_blank" download>
                                <button className="btn btn-md btn-primary">Download My CV</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home
