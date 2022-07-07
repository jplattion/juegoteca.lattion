import React from "react";
import { Card } from "react-bootstrap";

function Item(props) {
	return (
		<>
			<Card style={styles.card}>
				<Card.Title style={styles.cardTitle}> {props.title} </Card.Title>
				<Card.Img variant="top" src={props.pictureUrl} style={styles.cardImage} />
				<button style={styles.btn}>Detalles</button>
			</Card>
		</>
	);
}

export default Item;

const styles = {
	card: {
		width: "16rem",
		backgroundColor: "#999999",
		margin: "0 auto",
		marginTop: "1rem",
		height: "350px",
	},
	cardTitle: {
		marginTop: "0.5rem",
		backgroundColor: "#aba3f4",
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
