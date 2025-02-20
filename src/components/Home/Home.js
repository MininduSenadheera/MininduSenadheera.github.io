import React from 'react'
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import "aos/dist/aos.css";

function Home() {
	Aos.init({ duration: 1000 })

	return (
		<section id="home" className="container vh-100 d-flex justify-content-center align-items-center">
			<div className='d-flex align-items-center flex-wrap'>
				<div className='p-5' data-aos="zoom-out" align="center">
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
					<br />
					<div data-aos="fade-right" data-aos-delay="200">
						<a href='tel:+94767041198'>
							<img src="https://img.icons8.com/?&id=I24lanX6Nq71&format=png&color=000000" alt="phone" width={48} />
						</a>
						<a href="mailto:minindusenadheera@gmail.com">
							<img src="https://img.icons8.com/fluency/48/000000/apple-mail.png" alt="linkedin" width={48} />
						</a>
						<a href="https://www.linkedin.com/in/minindusenadheera" target="_blank" rel="noreferrer">
							<img src="https://img.icons8.com/fluency/50/000000/linkedin.png" alt="linkedin" width={48} />
						</a>
						&nbsp;
						<a href="https://github.com/MininduSenadheera" target="_blank" rel="noreferrer">
							<img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt="github" width={48} />
						</a>
						&nbsp;
						<a href="https://www.instagram.com/minindu_senadheera/" target="_blank" rel="noreferrer">
							<img src="https://img.icons8.com/fluency/50/000000/instagram-new.png" alt="instagram" width={48} />
						</a>
						&nbsp;
						<a href="https://www.facebook.com/minindu.senadheera/" target="_blank" rel="noreferrer">
							<img src="https://img.icons8.com/fluency/50/000000/facebook-new.png" alt="facebook" width={48} />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
