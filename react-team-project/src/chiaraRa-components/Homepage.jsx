import { RegistrationInformation } from "../benni-component/RegistrationInformation";
import { RegistrationUser } from "../benni-component/RegistrationUser";
import { UserAccessForm } from "../alex-components/UserAccessForm"
// import "./Homepage.css";
import "../style-site/homepage-style.css"
import { Link } from "react-router-dom";
import FormAccessoPT from "../Chiarap-components/FormAccessoPT";
export function Homepage() {

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
							<img src="src/style-site/images-style/pexels-photo-3253515-removebg.png" alt="" />
						</div>
					</div>


					<div className="line-homepage">
					</div>

					<div className="container-input-access">
						<UserAccessForm/>
						{/* <Link to={"/accedi"} element={<UserAccessForm />}><button className="HomeAccedi hometwobtn">Accedi</button></Link>
						<p className="homeBtnPara">
							Sei un personal trainer?{" "}
							<Link to={"/iscriviti-pt"} element={<FormAccessoPT />}>Accedi qui</Link>
						</p>

						<Link to={"/iscriviti"} element={<RegistrationUser />}><button className="HomeIscriviti hometwobtn">Iscriviti</button></Link> */}
					</div>
				</div>
			</div>
		</>
	);
}
