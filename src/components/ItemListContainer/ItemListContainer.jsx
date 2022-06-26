import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
	const { greeting } = props;

	const onAdd = () => {
		alert(`Gracias por tu compra`);
	};

	return (
		<>
			<main>
				<h1 className="d-flex"> {greeting} </h1>
				<ItemCount stock={11} onAdd={onAdd} />
			</main>
		</>
	);
};

export default ItemListContainer;
