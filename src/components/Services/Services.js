import React from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import './Services.css'

function Services() {
    Aos.init({duration:1000, once:false})

    return (
        <section id='services' className="section mb-5">
            <div className='container' align="center">
                <h1 className="title" data-aos="fade-up">My Services</h1>
                <main className="page-content-certificates mt-5">
                    <div className="card" data-aos="fade-up">
                        <h3 className="card-title">Website Developing</h3>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="card-title">Mobile App Development</h3>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="card-title">WebApp Developing</h3>
                    </div>
                </main>        
            </div>
        </section>  
    )
}

export default Services