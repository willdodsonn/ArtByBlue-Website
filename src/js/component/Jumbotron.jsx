import React from "react";
const JumboTron = () => {
	return (
		<div className="jumbotron jumbotron-fluid text-center">
			<img
				className="jumbotron-img-top"
				src="https://images.squarespace-cdn.com/content/v1/604d215e22e44a51184c40bd/1622988262899-Q0DQ7RT4QMZ8VY177JFN/Blue+Dunsworth+reduced+-+Studios+of+Cocoa+Beach.jpg"
				alt="Jumbotron image cap"
			/>
			<div className="container">
				<h1 className="display-4">Full Collection of Blue Dunsworth</h1>
				<p className="lead">
					Prices may vary, contact Blue for more information
				</p>
			</div>
		</div>
	);
};
export default JumboTron;
