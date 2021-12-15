import React from 'react'
import './Home.css';
import Typing from 'react-typing-animation';
import { indigo } from '@mui/material/colors';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    <div className="profile_img">
                        <img src="/images/ProfilePic.jpg" className="rounded-circle" alt="profile pic"/>
                    </div>
                </div>
                <div className="col-xl-8 mt-5">
                    <p>Hi there, I'm </p>
                    <h1 style={{ color: indigo[700] }}>Minindu Senadheera</h1>
                    <Typing>
                        <p>
                            Data Science Undergraduate | &nbsp; 
                            <Typing.Delay ms={1000} />
                            Full Stack Developer | &nbsp;
                            <Typing.Delay ms={1000} />
                            Photographer</p>
                    </Typing>

                    <div>
                        <a href="https://www.linkedin.com/in/minindusenadheera" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluency/50/000000/linkedin.png" alt="linkedin"/>
                        </a>
                        &nbsp;
                        <a href="https://github.com/MininduSenadheera" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt="github"/>
                        </a>
                        &nbsp;
                        <a href="https://www.instagram.com/minindu_senadheera/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluency/50/000000/instagram-new.png" alt="instagram"/>
                        </a>
                        &nbsp;
                        <a href="https://www.facebook.com/minindu.senadheera/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/fluency/50/000000/facebook-new.png" alt="facebook"/>
                        </a>
                        &nbsp;
                        <a href="https://www.youtube.com/c/MininduSenadheera" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="youtube"/>
                        </a>
                    </div>
                    
                    <br/>

                    <button className="btn btn-md btn-primary">Download My CV</button>
                </div>
            </div>
            
        </div>
    )
}

export default Home
