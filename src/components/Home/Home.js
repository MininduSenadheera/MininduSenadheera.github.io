import React from 'react'
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Box } from '@mui/material';

function Home() {
	Aos.init({ duration: 1000 })

	return (
		<section id="home" className="container vh-100 d-flex justify-content-center align-items-center">
			<Box display={{ xs: 'none', md: 'block' }} className="floating-logos" data-aos="zoom-out">
				<img src="https://skillicons.dev/icons?i=react" className="floating-icon" alt="React" style={{ top: '10%', left: '5%' }} />
				<img src="https://skillicons.dev/icons?i=nodejs" className="floating-icon" alt="Node" style={{ top: '15%', left: '30%' }} />
				<img src="https://skillicons.dev/icons?i=typescript" className="floating-icon" alt="Typescript" style={{ top: '25%', left: '15%' }} />
				<img src="https://skillicons.dev/icons?i=python" className="floating-icon" alt="Python" style={{ top: '40%', left: '5%' }} />
				<img src="https://skillicons.dev/icons?i=java" className="floating-icon" alt="Java" style={{ bottom: '45%', left: '20%' }} />
				<img src="https://skillicons.dev/icons?i=javascript" className="floating-icon" alt="Javascript" style={{ bottom: '35%', left: '10%' }} />
				<img src="https://skillicons.dev/icons?i=flutter" className="floating-icon" alt="flutter" style={{ bottom: '5%', left: '15%' }} />
				<img src="https://skillicons.dev/icons?i=r" className="floating-icon" alt="R" style={{ bottom: '15%', left: '5%' }} />
				<img src="https://skillicons.dev/icons?i=docker" className="floating-icon" alt="Docker" style={{ top: '15%', right: '50%' }} />
				<img src="https://skillicons.dev/icons?i=aws" className="floating-icon" alt="AWS" style={{ top: '30%', right: '5%' }} />
				<img src="https://skillicons.dev/icons?i=azure" className="floating-icon" alt="Azure" style={{ top: '15%', right: '15%' }} />
				<img src="https://skillicons.dev/icons?i=vite" className="floating-icon" alt="vite" style={{ top: '10%', right: '35%' }} />
				<img src="https://skillicons.dev/icons?i=git" className="floating-icon" alt="GIT" style={{ top: '25%', right: '25%' }} />
				<img src="https://skillicons.dev/icons?i=vscode" className="floating-icon" alt="VSCODE" style={{ bottom: '45%', right: '15%' }} />
				<img src="https://skillicons.dev/icons?i=androidstudio" className="floating-icon" alt="AndroidStudio" style={{ bottom: '25%', right: '5%' }} />
				<img src="https://skillicons.dev/icons?i=figma" className="floating-icon" alt="figma" style={{ bottom: '15%', right: '20%' }} />
				<img src="https://skillicons.dev/icons?i=bootstrap" className="floating-icon" alt="bootstrap" style={{ bottom: '25%', right: '45%' }} />

				<img src="https://skillicons.dev/icons?i=materialui" className="floating-icon" alt="material ui" style={{ bottom: '5%', right: '35%' }} />
				<img src="https://skillicons.dev/icons?i=firebase" className="floating-icon" alt="firebase" style={{ bottom: '10%', left: '40%' }} />
				<img src="https://skillicons.dev/icons?i=mongodb" className="floating-icon" alt="mongodb" style={{ bottom: '20%', left: '25%' }} />
			</Box>
			<div className='d-flex align-items-center flex-wrap' style={{ backdropFilter: 'blur(10px)', borderRadius: '10px' }}>
				<div className='p-5' data-aos="zoom-out-left" align="center">
					<img src="/images/ProfilePic.png" className="home-img img-fluid" alt="profile pic" />
				</div>
				<div>
					<p data-aos="fade-up">Hi there, I'm </p>
					<h1 className="userName display-5 fw-normal">Minindu Senadheera</h1>
					<p data-aos="fade-right" data-aos-delay="200">
						<TypeAnimation
							sequence={[
								'Data Scientist',
								500,
								'Data Scientist | Software Engineer',
								500,
								'Data Scientist | Software Engineer | Traveller'
							]}
						/>
					</p>
					<div className='d-flex justify-content-between align-items-center'>
						<a href="mailto:minindusenadheera@gmail.com" data-aos="fade-right" data-aos-delay="200" data-aos-anchor="home">
							<img src="https://img.icons8.com/fluency/50/000000/apple-mail.png" alt="mail" />
						</a>
						<a href="https://www.linkedin.com/in/minindusenadheera" target="_blank" rel="noreferrer" data-aos="fade-right" data-aos-delay="300" data-aos-anchor="home">
							<img src="https://img.icons8.com/fluency/50/000000/linkedin.png" alt="linkedin" />
						</a>
						<a href="https://github.com/MininduSenadheera" target="_blank" rel="noreferrer" data-aos="fade-right" data-aos-delay="400" data-aos-anchor="home">
							<img src="https://img.icons8.com/fluency/50/000000/github.png" alt="github" />
						</a>
						<a href="https://www.instagram.com/minindu_senadheera/" target="_blank" rel="noreferrer" data-aos="fade-right" data-aos-delay="500" data-aos-anchor="home">
							<img src="https://img.icons8.com/fluency/50/000000/instagram-new.png" alt="instagram" />
						</a>
						<a href="https://www.facebook.com/minindu.senadheera/" target="_blank" rel="noreferrer" data-aos="fade-right" data-aos-delay="600" data-aos-anchor="home">
							<img src="https://img.icons8.com/fluency/50/000000/facebook-new.png" alt="facebook" />
						</a>
						<a href="https://www.tiktok.com/@minindusenadheera?_t=ZS-8wGphmsQGWt&_r=1" target="_blank" rel="noreferrer" data-aos="fade-right" data-aos-delay="700" data-aos-anchor="home">
							<img src="https://img.icons8.com/fluency/50/000000/tiktok.png" alt="tiktok" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
