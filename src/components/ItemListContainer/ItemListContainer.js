import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
	const { greeting } = props;

	return (
		<>
			<main>
				<h1> {greeting} </h1>
			</main>
		</>
	);
};

export default ItemListContainer;
