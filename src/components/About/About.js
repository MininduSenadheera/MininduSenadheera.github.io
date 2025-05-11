import React from 'react'
import './About.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Grid } from '@mui/material';

function About() {
    Aos.init({ duration: 1000, once: true })

    return (
        <section id='about' className="section mb-5">
            <div className='container' align="center">
                <h1 className="title" data-aos="fade-up">Who am I?</h1>
                <div className='boxAbout my-5 p-5'>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <img src="/images/MininduSenadheera.png" className='img-fluid' alt='minindu' data-aos="zoom-out" />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <h4 data-aos="fade-up">Welcome to my world of Data Science and Software Engineering!</h4>
                            <br></br>
                            <p data-aos="fade-up" data-aos-delay="100">
                                🎓 I graduated in 2024 with a Second Class Honours in BSc (Hons) Information Technology specializing in Data Science from the prestigious Sri Lanka Institute of Information Technology. Throughout my studies, I consistently excelled, even achieving a GPA exceeding 3.7 and landing on the Dean's List. My academic journey began at S. Thomas' College Mount Lavinia, where I delved into the world of Physical Sciences.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="200">
                                💼 By day, I'm a Full-stack Software Engineer at PSHA (Private Sector Humanitarian Alliance), an organisation at the forefront of redefining corporate engagement in in global Humanitarian efforts.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="300">
                                🔍 My passions? Full Stack Software Engineering, Web Development, App development, Data Science, Artificial Intelligence, and Machine Learning! I thrive on being a fast learner with a knack for problem-solving. I love staying at the forefront of technology, continually adding new programming languages and tools to my arsenal. Keeping up with global tech trends is my jam.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="400">
                                ✈️ When I'm not crunching data or writing code, you'll find me exploring new horizons through my love for travel and photography.
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default About