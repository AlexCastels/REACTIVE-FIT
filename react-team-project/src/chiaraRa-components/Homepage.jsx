import { RegistrationInformation } from "../benni-component/RegistrationInformation";
import { RegistrationUser } from "../benni-component/RegistrationUser";
import { UserAccessForm } from "../alex-components/UserAccessForm"
// import "./Homepage.css";
import "../style-site/homepage-style.css"
import { Link } from "react-router-dom";
import FormAccessoPT from "../Chiarap-components/FormAccessoPT";

import { useState } from "react";
import { useEffect } from "react";

export function Homepage() {
	const [currentIndex, setCurrentIndex] = useState(0);
   

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
		</>
	);
}
