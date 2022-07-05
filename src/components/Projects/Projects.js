import React from 'react'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Projects.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function Projects() {
    Aos.init({duration:1000, once:false})

    function DWBIAirbnb(){
        window.open("https://github.com/MininduSenadheera/DWBI-Assignment1");
    }

    function DWBIShop(){
        window.open("https://github.com/MininduSenadheera/DWBI-Grocery-Shop");
    }


    function aspirusWeb(){
        window.open("https://github.com/JMAT-Technologies/Aspirus-Health-Care-WebApp");
    }

    function aspirusApp(){
        window.open("https://github.com/JMAT-Technologies/Aspirus-Health-Care-Android-App");
    }

    function orchidBureau(){
        window.open("https://github.com/MininduSenadheera/Orchid-Bureau" );
    }

    function busTicket(){
        window.open("https://github.com/MininduSenadheera/Bus-Ticket-Reservation");
    }
    
    function lms(){
        window.open("https://github.com/MininduSenadheera/Library-Management-System");
    }

    return (
        <div id="projects" class="container my-5 grid" >
            <h1 className="title" data-aos="fade-up">Check Out My Projects</h1>
            <main class="page-content-projects my-5">
                <div class="projectBox" data-aos="fade-up">
                    <img src='/images/DWBIAirbnb.png' className='img-fluid mb-4' alt='DWBI Airbnb'/>
                    <center>
                    <h4>DWBI for Airbnb Boston</h4>
                        <p class="copy">(SSIS, SSAS, SSRS) <br/> Data Warehousing and Business Intelligence project done for Airbnb hotel listings in Boston.</p>
                        <Button 
                            variant="contained" 
                            onClick={DWBIAirbnb} 
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </center>
                </div>
                <div class="projectBox" data-aos="fade-up" data-aos-delay="200">
                    <img src='/images/DWBIAirbnb.png' className='img-fluid mb-4' alt='DWBI grocery'/>
                    <center>
                    <h4>DWBI for Grocery shop</h4>
                        <p class="copy">(SSIS, SSAS, SSRS) <br/> Data Warehousing and Business Intelligence project done for a grocery shop.</p>
                        <Button 
                            variant="contained" 
                            onClick={DWBIShop} 
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </center>
                </div>
                <div class="projectBox" data-aos="fade-up" data-aos-delay="300">
                    <img src='/images/AspirusHealthCare.png' className='img-fluid mb-4' alt='aspirus webapp'/>
                    <center>
                        <h4>Aspirus Health Care Web Application</h4>
                        <p class="copy">(MERN) <br/> Website for channelling doctors, telemedicine with live video audio conference and pharmacy store.</p>
                        <Button 
                            variant="contained" 
                            onClick={aspirusWeb}
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </center>
                </div>
                <div class="projectBox" data-aos="fade-up">
                    <img src='/images/AspirusAndroid.png' className='img-fluid mb-4' alt='aspirus android app'/>
                    <center>
                        <h4>Aspirus Health Care Android App</h4>
                        <p class="copy">(Java, Firebase) <br/> Android application for channelling doctors, telemedicine with live video audio conference and pharmacy store.</p>
                        <Button 
                            variant="contained" 
                            onClick={aspirusApp}
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </center>
                </div>
                <div class="projectBox" data-aos="fade-up" data-aos-delay="200">
                    <img src='/images/AspirusHealthCare.png' className='img-fluid mb-4' alt='orchid bureau'/>
                    <center>
                        <h4>Orchid Bureau Web Application</h4>
                        <p class="copy">(MERN) <br/> E-commerce app for an orchid shop.</p>
                        <Button 
                            variant="contained" 
                            onClick={orchidBureau}
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </center>
                </div>
                <div class="projectBox" data-aos="fade-up" data-aos-delay="300">
                    <img src='/images/BusTicketReservation.png' className='img-fluid mb-4' alt='bus ticket reservation web app'/>
                    <center>
                        <h4>Bus Ticket Reservation System</h4>
                        <p class="copy">(JSP, SQL) <br/> A bus ticket reservation application where users can reserve seats online and manage their reservations.</p>
                        <Button 
                            variant="contained"
                            onClick={busTicket}
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </center>
                </div>
                <div class="projectBox" data-aos="fade-up">
                    <img src='/images/lms.png' className='img-fluid mb-4' alt='library management system'/>
                    <center>
                    <h4>Library Management System</h4>
                        <p class="copy">(PHP, SQL) <br/> Library management  website which can manage users and books and also users can reserve books.</p>
                        <Button 
                            variant="contained" 
                            onClick={lms} 
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </center>
                </div>
            </main>
        </div>
    )
}

export default Projects
