import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
	return (
		<>
			<Card style={styles.card}>
				<Card.Title style={styles.cardTitle}> {product.title} </Card.Title>
				<Card.Img variant="top" src={product.image} style={styles.cardImage} />
				<Link to={`/product/${product.id}`}>
					<button style={styles.btn}>Detalles</button>
				</Link>
			</Card>
		</>
	);
};

export default Item;

const styles = {
	card: {
		width: "16rem",
		margin: "0 auto",
		marginTop: "1rem",
		height: "350px",
	},
	cardTitle: {
		marginTop: "0.5rem",
		backgroundColor: "#999999",
		borderRadius: "10px",
		padding: "0.3rem 0 0.3rem 0",
		textTransform: "uppercase",
		textAlign: "center",
	},
	cardImage: {
		paddingTop: "0.3rem",
		height: "200px",
		width: "auto",
		maxWidth: "100%",
		margin: "auto",
	},
	cardId: {
		margin: "auto",
		textAlign: "center",
	},
	cardDescription: {
		textAlign: "center",
	},
	cardPrice: {
		textAlign: "center",
	},
	container: {
		position: "absolute",
		bottom: "0",
		paddingBottom: "1rem",
	},
	btn: {
		display: "flex",
		margin: "auto",
	},
};
