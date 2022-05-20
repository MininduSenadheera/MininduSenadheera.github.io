import React from 'react'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Projects.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function Projects() {
    Aos.init({duration:1000, once:false})

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

    function rentACar(){
        window.open("https://github.com/JMAT-Technologies/Rent-A-Car-SQLite");
    }

    return (
        <div id="projects" class="container my-5 grid" >
            <h1 className="title" data-aos="fade-up">Check Out My Projects</h1>
            <main class="page-content-projects my-5">
                <div class="work-card" style={{backgroundImage: `url('/images/AspirusHealthCare.png')`, backgroundSize: 'cover'}} data-aos="fade-up">
                    <div class="content">
                        <h4>Aspirus Health Care Website</h4>
                        <p class="copy">(MERN) <br/> Website for channelling doctors, telemedicine with live video audio conference and pharmacy store.</p>
                        <Button 
                            variant="contained" 
                            onClick={aspirusWeb}
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </div>
                </div>
                <div class="work-card" style={{backgroundImage: `url('/images/AspirusHealthCare.png')`, backgroundSize: 'cover'}} data-aos="fade-up" data-aos-delay="200">
                    <div class="content">
                        <h4>Aspirus Health Care Android App</h4>
                        <p class="copy">(Java, Firebase) <br/> Android application for channelling doctors, telemedicine with live video audio conference and pharmacy store.</p>
                        <Button 
                            variant="contained" 
                            onClick={aspirusApp}
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </div>
                </div>
                <div class="work-card" style={{backgroundImage: `url('/images/AspirusHealthCare.png')`, backgroundSize: 'cover'}} data-aos="fade-up" data-aos-delay="300">
                    <div class="content">
                        <h4>Orchid Bureau</h4>
                        <p class="copy">(MERN) <br/> E-commerce app for an orchid shop.</p>
                        <Button 
                            variant="contained" 
                            onClick={orchidBureau}
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </div>
                </div>
                <div class="work-card" style={{backgroundImage: `url('/images/AspirusHealthCare.png')`, backgroundSize: 'cover'}}data-aos="fade-up">
                    <div class="content">
                        <h4>Bus Ticket Reservation System</h4>
                        <p class="copy">(JSP, SQL) <br/> A bus ticket reservation application where users can reserve seats online.</p>
                        <Button 
                            variant="contained"
                            onClick={busTicket}
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </div>
                </div>
                <div class="work-card" style={{backgroundImage: `url('/images/AspirusHealthCare.png')`, backgroundSize: 'cover'}} data-aos="fade-up" data-aos-delay="200">
                    <div class="content">
                        <h4>Library Management System</h4>
                        <p class="copy">(PHP, SQL) <br/> Library management  website which can manage users and books and also users can reserve books.</p>
                        <Button 
                            variant="contained" 
                            onClick={lms} 
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </div>
                </div>
                <div class="work-card" style={{backgroundImage: `url('/images/AspirusHealthCare.png')`, backgroundSize: 'cover'}} data-aos="fade-up" data-aos-delay="300">
                    <div class="content">
                        <h4>Rent A Car Website</h4>
                        <p class="copy">(EJS, SQLite) <br/> Rent A car website where users can post advertisements to rent their vehicles and customers can get delivered their rented car to where they want.</p>
                        <Button 
                            variant="contained" 
                            onClick={rentACar} 
                            endIcon={<GitHubIcon />}>
                            View Project
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Projects
