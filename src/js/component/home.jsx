import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const StartPage = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<h1 className="navbar-brand">
						<a
							class="navbar-brand"
							href="https://www.instagram.com/art.by.blue/?hl=en">
							<FontAwesomeIcon icon={faPaintBrush} /> Art By Blue{" "}
						</a>
					</h1>
				</div>
			</nav>
			<div className="jumbotron jumbotron-fluid text-center">
				<img
					className="jumbotron-img-top"
					src="https://images.squarespace-cdn.com/content/v1/604d215e22e44a51184c40bd/1622988262899-Q0DQ7RT4QMZ8VY177JFN/Blue+Dunsworth+reduced+-+Studios+of+Cocoa+Beach.jpg"
					alt="Jumbotron image cap"
				/>
				<div className="container">
					<h1 className="display-4">
						Full Collection of Blue Dunsworth
					</h1>
					<p className="lead">
						Prices may vary, contact Blue for more information
					</p>
				</div>
			</div>
		</div>
	);
};

export default StartPage;
