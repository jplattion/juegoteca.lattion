import React from "react";
import ItemList from "./ItemList";
import backgroundMain from "./assets/backgroundMain.svg";

const ItemListContainer = ({ greeting }) => {
	return (
		<>
			<main style={styles.main}>
				<h1 className="d-flex" style={styles.h1}>
					{greeting}
				</h1>
				<ItemList />
			</main>
		</>
	);
};

export default ItemListContainer;

const styles = {
	main: {
		backgroundImage: `url(${backgroundMain})`,
		backgroundAttachment: "fixed",
		fontFamily: '"Fredoka", Arial, Helvetica, sans-serif',
		height: "100%",
		minHeight: "100vh",
	},

	h1: {
		padding: "2rem 0 2rem 0",
		textTransform: "uppercase",
		justifyContent: "center",
	},
};
