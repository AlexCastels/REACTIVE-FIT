import { RegistrationInformation } from "../benni-component/RegistrationInformation";
import { RegistrationUser } from "../benni-component/RegistrationUser";
import { UserAccessForm } from "../alex-components/UserAccessForm"
// import "./Homepage.css";
import "../style-site/homepage-style.css"
import { Link } from "react-router-dom";
import FormAccessoPT from "../Chiarap-components/FormAccessoPT";

import { useState } from "react";
import { useEffect } from "react";
import { NavbarL } from "../giusi_components/Homepage/NavbarL";
import { useRef } from "react";


export function Homepage() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });

    observer.observe(cardRef.current);

    return () => observer.unobserve(cardRef.current);
  }, []);

	const images = ['src/style-site/images-style/imagesHome/3d-render-male-figure-boxing-pose.png',
		'src/style-site/images-style/imagesHome/3d-render-male-figure-holding-knee.png',
		'src/style-site/images-style/imagesHome/QvhJ8UDgHXFXb-qiRiijv-transformed.png'
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [images]);



	return (
		<>
			<div className="general-background">
				<div className="header-text-home">
					<h2 className="animated">Il momento giusto è <h3 className="animated bounce infinite animation-h3">ADESSO</h3></h2>
					<p>Rimani in contatto con il tuo Personal Trainer</p>
				</div>
				<div className="general-container-site">

					<div className="container-img-homepage">
						<div className="image-homepage">
							<div className="cerchioV1"></div>
							<div className="cerchioV2"></div>
							<div className="cerchioV3"></div>
							<div className="cerchioV4"></div>
							<div className="cerchioV5"></div>
							<div className="cerchioV6"></div>
							<div className="carouselHome">
								{images.map((image, idx) => (
									<img
										key={idx}
										src={image}
										alt={`Image ${idx + 1}`}
										className={`carouselImage ${idx === currentIndex ? 'active' : 'hidden'}`}
										id="carouselImagesHome"
									/>
								))}
							</div>
						</div>
					</div>


					<div className="line-homepage">
					</div>

					<div className="container-input-access">
						<UserAccessForm />
					</div>
				</div>
			</div>
			<div className="containerCardHome">
				<div className="containerSingleCardHome">
					<img src="src/style-site/images-style/imagesHome/weight_9361040.png" />
					<h2>WORKOUT</h2>
					<p>L'unico limite è la tua mente</p>
				</div>
				<div className="containerSingleCardHome">
					<img src="src/style-site/images-style/imagesHome/pulse_7302643.png" />
					<h2>HEALTHY</h2>
					<p>Un corpo sano, una mente sana</p>
				</div>
				<div className="containerSingleCardHome">
					<img src="src/style-site/images-style/imagesHome/doctor_10539836.png" />
					<h2>COACHING</h2>
					<p>Il tuo percorso, il nostro impegno</p>
				</div>
			</div>
			<div className="containerDescriptionOut">
				<div className="containerDescription">
					<div className="descriptioneLeft">
						<h2>Il nostro obiettivo</h2>
						<div className="containerParagraphsDescrip" >
							<p>
								Benvenuti nel nostro sito web dedicato al fitness e al benessere personale, dove sia gli utenti che i personal trainer possono tenere sotto controllo ogni aspetto del loro percorso di
								salute. Con una gamma completa di strumenti e funzionalità, il nostro sito offre agli utenti la possibilità di monitorare la propria alimentazione,
								il regime di allenamento, la dieta, e il consumo calorico giornaliero.
							</p>
							<p>
								Ogni utente può creare il proprio profilo personalizzato, impostare obiettivi di fitness e registrare i
								progressi nel tempo.
								Per i personal trainer, offriamo un'esperienza altrettanto completa. Attraverso il nostro sistema,
								i trainer possono seguire da vicino i progressi di ogni cliente, accedere a dati dettagliati sull'alimentazione e sull'attività fisica,
								e fornire feedback personalizzati in base agli obiettivi di salute di ciascun cliente. Inoltre, i trainer possono creare piani di allenamento su misura, programmare
								sessioni di coaching online e tenere traccia dei risultati nel tempo.
							</p>
							<p>
								Indipendentemente dal tuo livello di fitness o dai tuoi obiettivi, il nostro sito web ti offre gli strumenti e
								il supporto necessari per raggiungere il massimo potenziale. Unisciti a noi oggi e inizia il tuo viaggio verso una vita più sana e felice!
							</p>
						</div>
					</div>
					<div className="descriptionRight">
						<img className="imageTwo" src="src/style-site/images-style/imagesHome/young-athletic-woman-exercising-health-club-having-fun.jpg" />
						<img className="imageOne" src="src/style-site/images-style/imagesHome/sport-lifestyle-fitness-male-training.jpg" />
					</div>
				</div>
			</div>
			<div className="containerAbout">
				<div className="containerMeet">
					<h2>Meet Our Team</h2>
				</div>
				<div className={`containerCardHome fade-in ${isVisible ? 'visible' : ''}`} ref={cardRef} id="containerTeam">
					<div className="containerSingleCardHome">
					<div className="containerAvatarTeamAl containerImgTeam">
						</div>
						<h2>ALESSANDRO CASTELLI</h2>
						<p>Full-Stack</p>
						<span className="logoLinkedinGithub"><a href="https://www.linkedin.com/in/alessandro-f-castelli-5baa3a236/"><img src="src/style-site/images-style/imagesHome/1522007_linkedin_linked_network_social_connection_icon.png"  /></a><a href="https://github.com/AlexCastels"><img src="src/style-site/images-style/imagesHome/211904_social_github_icon.png" alt="" /></a></span>
					</div>
					<div className="containerSingleCardHome">
						<div className="containerAvatarTeamA containerImgTeam">
						</div>
						<h2>ANNAGIUSI VOLPE</h2>
						<p>FE Designer</p>
						<span className="logoLinkedinGithub"><a href="https://www.linkedin.com/in/annagiusi-volpe-7a0027177/"><img src="src/style-site/images-style/imagesHome/1522007_linkedin_linked_network_social_connection_icon.png"  /></a><a href="https://github.com/Annagiusi96"><img src="src/style-site/images-style/imagesHome/211904_social_github_icon.png" alt="" /></a></span>
					</div>
					<div className="containerSingleCardHome">
					<div className="containerAvatarTeamB containerImgTeam">
						</div>
						<h2>BENDETTO MICELI</h2>
						<p>Full-Stack</p>
						<span className="logoLinkedinGithub"><a href="https://www.linkedin.com/in/benedetto-miceli-14b8b3293/"><img src="src/style-site/images-style/imagesHome/1522007_linkedin_linked_network_social_connection_icon.png"  /></a><a href="https://github.com/benni90100"><img src="src/style-site/images-style/imagesHome/211904_social_github_icon.png" alt="" /></a></span>
					</div>
					<div className="containerSingleCardHome">
					<div className="containerAvatarTeamCp containerImgTeam">
						</div>
						<h2>CHIARA PALUZZI</h2>
						<p>Fronted</p>
						<span className="logoLinkedinGithub"><a href="https://www.linkedin.com/in/chiara-paluzzi-9856a92a9/"><img src="src/style-site/images-style/imagesHome/1522007_linkedin_linked_network_social_connection_icon.png"  /></a><a href="https://github.com/paluzz34"><img src="src/style-site/images-style/imagesHome/211904_social_github_icon.png" alt="" /></a></span>
					</div>
					<div className="containerSingleCardHome">
					<div className="containerAvatarTeamCr containerImgTeam">
						</div>
						<h2>CHIARA RAPISARDI</h2>
						<p>Fronted</p>
						<span className="logoLinkedinGithub"><a href="https://www.linkedin.com/in/chiara-rapisardi-6533a82a9/"><img src="src/style-site/images-style/imagesHome/1522007_linkedin_linked_network_social_connection_icon.png"  /></a><a href="https://github.com/chiaRapisar"><img src="src/style-site/images-style/imagesHome/211904_social_github_icon.png" alt="" /></a></span>
					</div>	
				</div>
			</div>

			<div className="containerTool">
				<div>
					<h2>Technologies used</h2>
				</div>
				<div className="containerLogosOut">
					<div className="containerSingleTool">
						<div className="containerLogoToolH containerImgLogo">
						</div>
						<h3>HTML</h3>
					</div>
					<div className="containerSingleTool">
						<div className="containerLogoToolC containerImgLogo">
						</div>
						<h3>CSS</h3>
					</div>
					<div className="containerSingleTool">
						<div className="containerLogoToolJ containerImgLogo">
						</div>
						<h3>JAVASCRIPT</h3>
					</div>
					<div className="containerSingleTool">
						<div className="containerLogoToolR containerImgLogo">
						</div>
						<h3>REACT</h3>
					</div>
					<div className="containerSingleTool">
						<div className="containerLogoToolN containerImgLogo">
						</div>
						<h3>NODE JS</h3>
					</div>
					<div className="containerSingleTool">
						<div className="containerLogoToolP containerImgLogo">
						</div>
						<h3>POSTGRESQL</h3>
					</div>

				</div>
			</div>

		</>
	);
}
