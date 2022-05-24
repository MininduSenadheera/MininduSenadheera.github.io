import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css'
import VisibilitySensor from "react-visibility-sensor";

function Skills() {

    return (
        <section id='skills' className="section">
            <div className='container' align="center">
                <div className='row'>
                    <div className='col-xl-5  mb-5'>
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

                            <h5>Python</h5>
                            <div class="progress mb-3">
                                <div class="progress-bar Python" role="progressbar"  aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-7  mb-5'>
                        <h3 className='subtitle mb-3'>Professional Skills</h3>
                        <div className='skillGrid'>
                            <div className='boxSkill' >
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const percentage = isVisible ? 90 : 0;
                                        return (
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                styles={buildStyles({
                                                    pathTransitionDuration: 1.5,
                                                    // Colors
                                                    pathColor: '#5f86f2',
                                                    trailColor: '#e9ecef',
                                                    textColor: '#5f86f2',
                                                })}
                                            />
                                        );
                                    }}
                                </VisibilitySensor>

                                <h5 className='mt-3 mb-0' align='center'>Communication</h5>
                            </div>
                            <div className='boxSkill'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const percentage = isVisible ? 80 : 0;
                                        return (
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                styles={buildStyles({
                                                    pathTransitionDuration: 1.5,
                                                    // Colors
                                                    pathColor: '#5f86f2',
                                                    trailColor: '#e9ecef',
                                                    textColor: '#5f86f2',
                                                })}
                                            />
                                        );
                                    }}
                                </VisibilitySensor>

                                <h5 className='mt-3 mb-0' align='center'>Creativity</h5>
                            </div>
                            <div className='boxSkill'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const percentage = isVisible ? 95 : 0;
                                        return (
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                styles={buildStyles({
                                                    pathTransitionDuration: 1.5,
                                                    // Colors
                                                    pathColor: '#5f86f2',
                                                    trailColor: '#e9ecef',
                                                    textColor: '#5f86f2',
                                                })}
                                            />
                                        );
                                    }}
                                </VisibilitySensor>

                                <h5 className='mt-3 mb-0' align='center'>Team Work</h5>
                            </div>
                            <div className='boxSkill'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const percentage = isVisible ? 75 : 0;
                                        return (
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                styles={buildStyles({
                                                    pathTransitionDuration: 1.5,
                                                    // Colors
                                                    pathColor: '#5f86f2',
                                                    trailColor: '#e9ecef',
                                                    textColor: '#5f86f2',
                                                })}
                                            />
                                        );
                                    }}
                                </VisibilitySensor>

                                <h5 className='mt-3 mb-0' align='center'>Leadership</h5>
                            </div>
                            <div className='boxSkill'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const percentage = isVisible ? 90 : 0;
                                        return (
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                styles={buildStyles({
                                                    pathTransitionDuration: 1.5,
                                                    // Colors
                                                    pathColor: '#5f86f2',
                                                    trailColor: '#e9ecef',
                                                    textColor: '#5f86f2',
                                                })}
                                            />
                                        );
                                    }}
                                </VisibilitySensor>

                                <h5 className='mt-3 mb-0' align='center'>Problem Solving</h5>
                            </div>
                            <div className='boxSkill'>
                                <VisibilitySensor>
                                    {({ isVisible }) => {
                                        const percentage = isVisible ? 80 : 0;
                                        return (
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                styles={buildStyles({
                                                    pathTransitionDuration: 1.5,
                                                    // Colors
                                                    pathColor: '#5f86f2',
                                                    trailColor: '#e9ecef',
                                                    textColor: '#5f86f2',
                                                })}
                                            />
                                        );
                                    }}
                                </VisibilitySensor>

                                <h5 className='mt-3 mb-0' align='center'>Positive Attitude</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills