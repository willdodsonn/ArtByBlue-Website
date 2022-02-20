//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import StartPage from "./component/home.jsx";
// include your styles into the webpack bundle
import "../styles/index.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "./component/Card.jsx";

//import your own components

const RandomPage = () => {
	return (
		<div>
			<div>
				<StartPage />
			</div>
			<div>
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://i1.sndcdn.com/artworks-000201256683-45rbuy-t500x500.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>
								Nulla vitae elit libero, a pharetra augue mollis
								interdum.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://i1.sndcdn.com/avatars-000182957187-axj0eh-t500x500.jpg"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOXWxNrlFNtB37C05yxFXm2qTqYEWbK374rWPMukWlNsZXrAG_MHZtQJap1xB0LpSXvQ&usqp=CAU"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<div>
				<Card />
			</div>
		</div>
	);
};
export default RandomPage;

//render your react application
ReactDOM.render(<RandomPage />, document.querySelector("#app"));
