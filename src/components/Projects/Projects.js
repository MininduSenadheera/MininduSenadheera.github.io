import React from 'react'
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import './Projects.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function Projects() {
    Aos.init({ duration: 1000, once: false })

    const projects = [{
        title: "Artigala Ayurveda",
        description: "E-commerce website for Ayurveda store. With payment gateways, pay later options, digital invoices, admin panel and order management.",
        img: "/images/ArtigalaAyurveda.png",
        link: "https://artigalaayurveda.com"
    }, {
        title: "Ashen Ravisara Portfolio",
        description: "Portfolio Website for an UI/UX Designer to showcase his talent in User interface and user experience designing",
        img: "/images/Ashen.png",
        link: "https://ashen-ravisara.github .io"
    }, {
        title: "Sumangala College OBA",
        description: "Membership management system for Sumangala College Panadura for managing members, events, dontations and etc.",
        img: "/images/Sumangala.png",
        link: "https://m.sumangalaoba.com"
    }, {
        title: "FieldR",
        description: "Online cricket analytics and digital score sheet mobile app.",
        img: "/images/fieldr.png",
        link: "https://community.fieldr.lk"
    }, {
        title: "slingmobility.com",
        description: "Affordable and innovative 360 degree EV solutions and fleet management.",
        img: "/images/sling.png",
        link: "https://slingmobility.com"
    }, {
        title: "aenigm3labs.com",
        description: "Aenigme provides digital strategies for products & small and medium enterprises.",
        img: "/images/aenigme.png",
        link: "https://aenigm3labs.com"
    }, {
        title: "Airbnb Price predictor",
        description: "Predicting price of Airbnb hotel listings in Boston based on facilities provided.",
        img: "/images/Airbnb Price Predictor.png",
        link: "https://airbnb-price-prediction.streamlitapp.com"
    }, {
        title: "DWBI for Airbnb Boston",
        description: "Data Warehousing and Business Intelligence project done for Airbnb hotel listings in Boston.",
        img: "/images/DWBIAirbnb.png",
        link: "https://github.com/MininduSenadheera/DWBI-Airbnb-Boston"
    }, {
        title: "DWBI for Grocery shop",
        description: "Data Warehousing and Business Intelligence project done for a grocery shop.",
        img: "/images/DWBIAirbnb.png",
        link: "'https://github.com/MininduSenadheera/DWBI-Grocery-Shop"
    }, {
        title: "Aspirus Health Care Web Application",
        description: "Website for channelling doctors, e-prescriptions, telemedicine with live video audio conference and pharmacy store.",
        img: "/images/AspirusHealthCare.png",
        link: "https://github.com/JMAT-Technologies/Aspirus-Health-Care-WebApp"
    }, {
        title: "Aspirus Health Care Android App",
        description: "Android app for channelling doctors, e-prescriptions, telemedicine with live video audio conference and pharmacy store.",
        img: "/images/AspirusAndroid.png",
        link: "https://github.com/JMAT-Technologies/Aspirus-Health-Care-Android-App"
    }, {
        title: "Bus Ticket Reservation System",
        description: "A bus ticket reservation application where users can reserve seats online and manage their reservations.",
        img: "/images/BusTicketReservation.png",
        link: "https://github.com/MininduSenadheera/Bus-Ticket-Reservation"
    }, {
        title: "Library Management System",
        description: "Library management  website which can manage users and books and also users can reserve books.",
        img: "/images/lms.png",
        link: "https://github.com/MininduSenadheera/Library-Management-System"
    }]

    return (
        <div id="projects" className="container my-5 grid" >
            <h1 className="title" data-aos="fade-up">Check Out My Projects</h1>
            <main className="page-content-projects my-5">
                {projects.map((project, index) =>
                    <div
                        className="projectBox" data-aos="fade-up" data-aos-delay={index * 100}
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        <img src={project.img} className='img-fluid mb-4' style={{ borderRadius: '8px', width: 340, height: 223, objectFit: 'cover' }} alt={project.title} />
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Projects
