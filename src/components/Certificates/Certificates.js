import React from 'react'
import './Certificates.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function Certificates() {
    Aos.init({duration:1000, once:false})

    return (
        <div id="certificates" className="container grid">
            <h1 className="title" data-aos="fade-up">Online Achievements</h1>
            <main className="page-content-certificates mt-5">
                <div className="badge-hover-zoom"  data-aos="fade-up" align="center">
                    <img src="/certificates/microsoft-certified-azure-fundamentals.png" className='img-fluid' alt="Azure fundementals badge "/>
                </div>
                <div className="img-hover-zoom"  data-aos="fade-up" data-aos-delay="200">
                    <img src="/certificates/Azure Fundamentals.png" className='img-fluid' alt="Azure fundementals badge "/>
                </div>
                <div className="img-hover-zoom"  data-aos="fade-up" data-aos-delay="300">
                    <img src="/certificates/Python_for_Beginners_E-Certificate.jpg" className='img-fluid' alt="UOM Python"/>
                </div>
                <div className="img-hover-zoom"  data-aos="fade-up">
                    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/46213604" className='img-fluid' alt="Hacktitude 99x 2022 "/>
                </div>
                <div className="img-hover-zoom"  data-aos="fade-up" data-aos-delay="200" >
                    <img src="/certificates/Udemy Automate boring stuff with python.jpg" className='img-fluid' alt="Udemy Automate Python "/>
                </div>
                <div className="img-hover-zoom"  data-aos="fade-up" data-aos-delay="300">
                    <img src="/certificates/Great Learning Python for machine learning.jpg" className='img-fluid' alt="GL python ML "/>
                </div>
                <div className="img-hover-zoom"  data-aos="fade-up">
                    <img src="/certificates/One Month Learn JavaScript Certificate.jpg" className='img-fluid' alt="One month js "/>
                </div>
                <div className="img-hover-zoom"  data-aos="fade-up" data-aos-delay="200" >
                    <img src="/certificates/One Month Learn jQuery Certificate.jpg" className='img-fluid' alt="One month jquery"/>
                </div>
                <div className="img-hover-zoom" data-aos="fade-up" data-aos-delay="300">
                    <img src="/certificates/One Month Learn SQL Certificate.jpg" className='img-fluid' alt="One month sql"/>
                </div>
                <div className="img-hover-zoom"  data-aos="fade-up">
                    <img src="/certificates/One Month Learn WordPress  Certificate.jpg" className='img-fluid' alt="One month wordpress"/>
                </div>
            </main>
        </div>
    )
}

export default Certificates
