import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../../components/ItemCount/ItemCount";

function ItemDetails(props) {
	const onAdd = () => {
		alert(`Gracias por tu compra`);
	};
	return (
		<>
			<Card style={styles.card}>
				<Card.Title style={styles.cardTitle}> {props.title} </Card.Title>
				<div style={styles.row}>
					<Card.Img variant="top" src={props.pictureUrl} style={styles.cardImage} />
					<Card.Body>
						<Card.Text style={styles.cardId}> ID: {props.id}</Card.Text>
						<Card.Text style={styles.cardDescription}> {props.description} </Card.Text>
						<Card.Text style={styles.cardPrice}> $ {props.price} </Card.Text>
						<div>
							<ItemCount stock={props.stock} onAdd={onAdd} />
						</div>
					</Card.Body>
				</div>
			</Card>
		</>
	);
}

export default ItemDetails;

const styles = {
	row: {
		display: "flex",
		flexDirection: "row",
	},
	card: {
		width: "600px",
		backgroundColor: "#999999",
		margin: "auto",
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
		margin: "1rem",
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
	btn: {
		display: "flex",
		margin: "auto",
	},
};
