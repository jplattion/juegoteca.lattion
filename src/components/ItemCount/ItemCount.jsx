import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import frontGame from "./assets/mansiones.jpg";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
	const [Count, setCount] = useState(initial);

	const addition = () => {
		Count < stock && setCount(Count + 1);
		Count >= stock && alert("No hay mas stock");
	};

	const substraction = () => {
		Count > 0 && setCount(Count - 1);
	};

	return (
		<>
			<Card style={{ width: "12rem" }} className="card">
				<Card.Img variant="top" src={frontGame} />
				<Card.Body>
					<Card.Title className="cardTitle">Mansiones de la Locura</Card.Title>
					<Card.Text className="cardSubTitle">Segunda Edición</Card.Text>
					<div className="d-flex gap-3 m-2 justify-content-center">
						<Button variant="primary" onClick={substraction}>
							-
						</Button>
						<p className="count">{Count}</p>
						<Button variant="primary" onClick={addition}>
							+
						</Button>
					</div>
					<Button className="btnBuy" variant="success" onClick={onAdd}>
						Agregar al carrito
					</Button>
				</Card.Body>
			</Card>

			{/* <div>
				<button onClick={substraction}>-</button>
				<p>{Count}</p>
				<button onClick={addition}>+</button>
			</div>
			<button onClick={onAdd}>Comprar</button> */}
		</>
	);
};

export default ItemCount;
