import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from "@ramonak/react-progress-bar";
import './Skills.css'
import VisibilitySensor from "react-visibility-sensor";

function Skills() {

    return (
        <section id='skills' className="section">
            <div className='container' align="center">
                <div className='row'>
                    <div className='col-xl-5  mb-5'>
                        <h3 className='subtitle mb-4'>Languages</h3>
                        <div className='boxAbout'>
                            <h5>React</h5>
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 95 : 0;
                                    return (
                                        <ProgressBar
                                            className='mb-3'
                                            bgColor='linear-gradient(45deg, #5ff281, #5f86f2)'
                                            completed={percentage} 
                                            isLabelVisible={false} 
                                            animateOnRender={true} 
                                        />
                                    );
                                }}
                            </VisibilitySensor>

                            <h5>MERN Stack</h5>
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 95 : 0;
                                    return (
                                        <ProgressBar
                                            className='mb-3'
                                            bgColor='linear-gradient(45deg, #5ff281, #5f86f2)'
                                            completed={percentage} 
                                            isLabelVisible={false} 
                                            animateOnRender={true} 
                                        />
                                    );
                                }}
                            </VisibilitySensor>

                            <h5>Python</h5>
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 65 : 0;
                                    return (
                                        <ProgressBar
                                            className='mb-3'
                                            bgColor='linear-gradient(45deg, #5ff281, #5f86f2)'
                                            completed={percentage} 
                                            isLabelVisible={false} 
                                            animateOnRender={true} 
                                        />
                                    );
                                }}
                            </VisibilitySensor>
                            
                            <h5>Java</h5>
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 80 : 0;
                                    return (
                                        <ProgressBar
                                            className='mb-3'
                                            bgColor='linear-gradient(45deg, #5ff281, #5f86f2)'
                                            completed={percentage} 
                                            isLabelVisible={false} 
                                            animateOnRender={true} 
                                        />
                                    );
                                }}
                            </VisibilitySensor>

                            <h5>SQL</h5>
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 75 : 0;
                                    return (
                                        <ProgressBar
                                            className='mb-3'
                                            bgColor='linear-gradient(45deg, #5ff281, #5f86f2)'
                                            completed={percentage} 
                                            isLabelVisible={false} 
                                            animateOnRender={true} 
                                        />
                                    );
                                }}
                            </VisibilitySensor>

                            <h5>R</h5>
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 50 : 0;
                                    return (
                                        <ProgressBar
                                            className='mb-3'
                                            bgColor='linear-gradient(45deg, #5ff281, #5f86f2)'
                                            completed={percentage} 
                                            isLabelVisible={false} 
                                            animateOnRender={true} 
                                        />
                                    );
                                }}
                            </VisibilitySensor>
                            <h5>PHP</h5>
                            <VisibilitySensor>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 85 : 0;
                                    return (
                                        <ProgressBar
                                            className='mb-3'
                                            bgColor='linear-gradient(45deg, #5ff281, #5f86f2)'
                                            completed={percentage} 
                                            isLabelVisible={false} 
                                            animateOnRender={true} 
                                        />
                                    );
                                }}
                            </VisibilitySensor>
                        </div>
                    </div>
                    <div className='col-xl-7  mb-5'>
                        <h3 className='subtitle mb-3'>Soft Skills</h3>
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