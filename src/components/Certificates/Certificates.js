import React from 'react'
import { indigo } from '@mui/material/colors';
import './Certificates.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function Certificates() {
    Aos.init({duration:1000, once:true})

    return (
        <div id="certificates" class="container grid">
            <h2 style={{ color: indigo[500], fontWeight: 700 }} data-aos="fade-up">Online Achievements</h2>
            <main class="page-content-certificates mt-5">
                <div class="img-hover-zoom"  data-aos="fade-up">
                    <img src="/certificates/Python_for_Beginners_E-Certificate.jpg" className='img-fluid' alt="UOM Python"/>
                </div>
                <div class="img-hover-zoom"  data-aos="fade-up">
                    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/46213604" className='img-fluid' alt="Hacktitude 99x 2022 "/>
                </div>
                <div class="img-hover-zoom"  data-aos="fade-up">
                    <img src="/certificates/Udemy Automate boring stuff with python.jpg" className='img-fluid' alt="Udemy Automate Python "/>
                </div>
                <div class="img-hover-zoom"  data-aos="fade-up" data-aos-delay="200">
                    <img src="/certificates/Great Learning Python for machine learning.jpg" className='img-fluid' alt="GL python ML "/>
                </div>
                <div class="img-hover-zoom"  data-aos="fade-up" data-aos-delay="300">
                    <img src="/certificates/One Month Learn JavaScript Certificate.jpg" className='img-fluid' alt="One month js "/>
                </div>
                <div class="img-hover-zoom"  data-aos="fade-up">
                    <img src="/certificates/One Month Learn jQuery Certificate.jpg" className='img-fluid' alt="One month jquery"/>
                </div>
                <div class="img-hover-zoom" data-aos="fade-up" data-aos-delay="200">
                    <img src="/certificates/One Month Learn SQL Certificate.jpg" className='img-fluid' alt="One month sql"/>
                </div>
                <div class="img-hover-zoom"  data-aos="fade-up" data-aos-delay="300">
                    <img src="/certificates/One Month Learn WordPress  Certificate.jpg" className='img-fluid' alt="One month wordpress"/>
                </div>
            </main>
        </div>
    )
}

export default Certificates
