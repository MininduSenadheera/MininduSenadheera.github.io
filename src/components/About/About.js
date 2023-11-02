import React from 'react'
import './About.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function About() {
    Aos.init({duration:1000, once:true})

    return (
        <section id='about' className="section mb-5">
            <div className='container' align="center">
                <h1 className="title" data-aos="fade-up">Who am I?</h1>
                <div className="boxAbout my-5">
                    <div className='row'>
                        <div className='col-xl-6'>
                            <img src="/images/MininduSenadheera.jpg" className='img-fluid mb-3' alt='hologram' data-aos="zoom-out"></img>
                        </div>
                        <div className='col-xl-6 d-flex flex-column justify-content-center'>
                            <h5 data-aos="fade-up">
                                Welcome to my world of Data Science and Software Engineering!
                            </h5>
                            <br></br>
                            <p data-aos="fade-up" data-aos-delay="100">
                                🎓 I'm a final year undergraduate at the Sri Lanka Institute of Information Technology, pursuing a BSc(Hons) in Information Technology with a specialization in Data Science. My academic journey began at S. Thomas' College Mount Lavinia, where I delved into the world of Physical Sciences.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="200">
                                💼 By day, I'm a dynamic Data Scientist and Full-stack Software Engineer at Sling Mobility (PVT) Ltd, an innovative Energy-as-a-Service company for electric vehicles (EVs).
                            </p>
                            <p data-aos="fade-up" data-aos-delay="300">
                                🔍 My passions? Data Science, Artificial Intelligence, and Machine Learning! I thrive on being a fast learner with a knack for problem-solving. I love staying at the forefront of technology, continually adding new programming languages and tools to my arsenal. Keeping up with global tech trends is my jam.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="400">
                                ✈️ When I'm not crunching data or writing code, you'll find me exploring new horizons through my love for travel and photography.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="500">
                                Let's navigate the tech world together and turn data into meaningful insights!
                            </p>
                        </div>
                    </div>
                </div>            
            </div>
        </section>
    )
}

export default About