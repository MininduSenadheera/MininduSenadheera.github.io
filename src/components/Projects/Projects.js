import React from 'react'
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Projects.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function Projects() {
    Aos.init({ duration: 1000, once: false })

    return (
        <div id="projects" className="container my-5 grid" >
            <h1 className="title" data-aos="fade-up">Check Out My Projects</h1>
            <main className="page-content-projects my-5">
                <div className="projectBox" data-aos="fade-up">
                    <img src='' className='img-fluid mb-4' alt='fleidr' />
                    <h4>FieldR</h4>
                    <p className="copy">(MERN Stack) <br /> Online cricket analytics and digital score sheet mobile app.</p>
                    <Button
                        href="https://indoor.fieldr.lk"
                        target='_blank'
                        variant="contained"
                        endIcon={<LanguageIcon />}>
                        View site
                    </Button>
                </div>
                <div className="projectBox" data-aos="fade-up">
                    <img src='' className='img-fluid mb-4' alt='slingmobility' />
                    <h4>slingmobility.com</h4>
                    <p className="copy">(React) <br /> Affordable and innovative 360 degree EV solutions and fleet management.</p>
                    <Button
                        href="https://slingmobility.com"
                        target='_blank'
                        variant="contained"
                        endIcon={<LanguageIcon />}>
                        View site
                    </Button>
                </div>
                <div className="projectBox" data-aos="fade-up">
                    <img src='/images/aenigme.png' className='img-fluid mb-4' alt='aenigm3labs' />
                    <h4>aenigm3labs.com</h4>
                    <p className="copy">(React) <br /> Aenigme provides digital strategies for products & small and medium enterprises.</p>
                    <Button
                        href="https://aenigm3labs.com"
                        target='_blank'
                        variant="contained"
                        endIcon={<LanguageIcon />}>
                        View site
                    </Button>
                </div>
                <div className="projectBox" data-aos="fade-up" data-aos-delay="200">
                    <img src='/images/Airbnb Price Predictor.png' className='img-fluid mb-4' alt='DWBI Airbnb' />
                    <h4>Airbnb Price predictor</h4>
                    <p className="copy">(Machine Learning, Data Mining) <br /> Predicting price of Airbnb hotel listings in Boston based on facilities provided.</p>
                    <Button
                        href='https://airbnb-price-prediction.streamlitapp.com'
                        target='_blank'
                        variant="contained"
                        endIcon={<LanguageIcon />}>
                        View Site
                    </Button>
                </div>
                <div className="projectBox" data-aos="fade-up" data-aos-delay="300">
                    <img src='/images/DWBIAirbnb.png' className='img-fluid mb-4' alt='DWBI Airbnb' />
                    <h4>DWBI for Airbnb Boston</h4>
                    <p className="copy">(SSIS, SSAS, SSRS) <br /> Data Warehousing and Business Intelligence project done for Airbnb hotel listings in Boston.</p>
                    <Button
                        href='https://github.com/MininduSenadheera/DWBI-Airbnb-Boston'
                        target='_blank'
                        variant="contained"
                        endIcon={<GitHubIcon />}>
                        View Project
                    </Button>
                </div>
                <div className="projectBox" data-aos="fade-up">
                    <img src='/images/DWBIAirbnb.png' className='img-fluid mb-4' alt='DWBI grocery' />
                    <h4>DWBI for Grocery shop</h4>
                    <p className="copy">(SSIS, SSAS, SSRS) <br /> Data Warehousing and Business Intelligence project done for a grocery shop.</p>
                    <Button
                        href='https://github.com/MininduSenadheera/DWBI-Grocery-Shop'
                        target='_blank'
                        variant="contained"
                        endIcon={<GitHubIcon />}>
                        View Project
                    </Button>
                </div>
                <div className="projectBox" data-aos="fade-up" data-aos-delay="200">
                    <img src='/images/AspirusHealthCare.png' className='img-fluid mb-4' alt='aspirus webapp' />
                    <h4>Aspirus Health Care Web Application</h4>
                    <p className="copy">(MERN Stack) <br /> Website for channelling doctors, e-prescriptions, telemedicine with live video audio conference and pharmacy store.</p>
                    <Button
                        href='https://github.com/JMAT-Technologies/Aspirus-Health-Care-WebApp'
                        target='_blank'
                        variant="contained"
                        endIcon={<GitHubIcon />}>
                        View Project
                    </Button>
                </div>
                <div className="projectBox" data-aos="fade-up" data-aos-delay="300">
                    <img src='/images/AspirusAndroid.png' className='img-fluid mb-4' alt='aspirus android app' />
                    <h4>Aspirus Health Care Android App</h4>
                    <p className="copy">(Java, Firebase) <br /> Android app for channelling doctors, e-prescriptions, telemedicine with live video audio conference and pharmacy store.</p>
                    <Button
                        href='https://github.com/JMAT-Technologies/Aspirus-Health-Care-Android-App'
                        target='_blank'
                        variant="contained"
                        endIcon={<GitHubIcon />}>
                        View Project
                    </Button>
                </div>
                <div className="projectBox" data-aos="fade-up" data-aos-delay="200">
                    <img src='/images/BusTicketReservation.png' className='img-fluid mb-4' alt='bus ticket reservation web app' />
                    <h4>Bus Ticket Reservation System</h4>
                    <p className="copy">(JSP, SQL) <br /> A bus ticket reservation application where users can reserve seats online and manage their reservations.</p>
                    <Button
                        href='https://github.com/MininduSenadheera/Bus-Ticket-Reservation'
                        target='_blank'
                        variant="contained"
                        endIcon={<GitHubIcon />}>
                        View Project
                    </Button>
                </div>
                <div className="projectBox" data-aos="fade-up" data-aos-delay="300">
                    <img src='/images/lms.png' className='img-fluid mb-4' alt='library management system' />
                    <h4>Library Management System</h4>
                    <p className="copy">(PHP, SQL) <br /> Library management  website which can manage users and books and also users can reserve books.</p>
                    <Button
                        href='https://github.com/MininduSenadheera/Library-Management-System'
                        target='_blank'
                        variant="contained"
                        endIcon={<GitHubIcon />}>
                        View Project
                    </Button>
                </div>
            </main>
        </div>
    )
}

export default Projects
