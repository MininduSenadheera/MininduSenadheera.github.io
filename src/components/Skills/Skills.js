import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <section id='skills' className="section">
            <div className='container' align="center">
                <div className='row'>
                    <div className='col-xl-6  mb-5'>
                        <div className='boxAbout'>
                            <h3 className='subtitle mb-4'>Languages</h3>

                            <h5>HTML</h5>
                            <div class="progress mb-3">
                                <div class="progress-bar HTML" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h5>CSS</h5>
                            <div class="progress mb-3">
                                <div class="progress-bar CSS" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h5>JavaScript</h5>
                            <div class="progress mb-3">
                                <div class="progress-bar JavaScript" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            
                            <h5>Java</h5>
                            <div class="progress mb-3">
                                <div class="progress-bar Java" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h5>React</h5>
                            <div class="progress mb-3">
                                <div class="progress-bar React" role="progressbar"  aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h5>SQL</h5>
                            <div class="progress mb-3">
                                <div class="progress-bar SQL" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <h5>R</h5>
                            <div class="progress mb-3">
                                <div class="progress-bar R" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6  mb-5'>
                        {/* <h3 className='subtitle'>Skills</h3> */}
                        <div className='skillGrid'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills