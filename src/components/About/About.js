import React from 'react'
import './About.css'
import { indigo } from '@mui/material/colors';
import Aos from 'aos';
import "aos/dist/aos.css";

function About() {
    Aos.init({duration:1000, once:true})

    return (
        <div id='about' className="container mb-5" align="center">
            <h2 style={{ color: indigo[500], fontWeight: 700}} data-aos="fade-up">About Me</h2>
            <main className="mt-5">
                <div className="boxAbout">
                    <div className='row'>
                        <div className='col-6'>
                            <img src="/images/hologram.gif" alt='hologram' data-aos="zoom-out"></img>
                        </div>
                        <div className='col-6'>
                            <br></br>
                            <h4 data-aos="fade-up">I am Minindu Senadheera, </h4>
                            <br></br>
                            <p data-aos="fade-up" data-aos-delay="100">
                                I'm an undergraduate at Sri Lanka Institute of Information Technology reading a BSc(Hons) Information Technology Specialised in Data Science degree. I did my G.C.E Advance Levels in Physical Science stream in S.Thomas' College Mount Lavinia.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="200">
                                I am a web developer, mobile application developer and full-stack developer, Also as a hobby, I do photography. I'm interested in areas like Data Science, Artificial Intelligence and Machine Learning. I am a fast learner with keen problem-solving abilities also I love to learn new technologies and programming languages and become updated with the current global trends.
                            </p>
                        </div>
                    </div>
                </div>    
            </main>
            <br></br><br></br>            
        </div>
    )
}

export default About