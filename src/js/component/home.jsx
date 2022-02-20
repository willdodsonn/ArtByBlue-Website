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
		</div>
	);
};

export default StartPage;
