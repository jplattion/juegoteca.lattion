import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Spinner from "../spinner/Spinner";

const juegos = [
	{
		id: 1001,
		title: "Mansiones de la locura",
		description: "Juego de mesa con tematica Lovecraft.",
		price: 21000,
		stock: 10,
		pictureUrl:
			"https://cf.geekdo-images.com/LIooA9bTdjnE9qmhjL-UFw__imagepage/img/nhF-Ys7IOrSMNwJVZSjMV2iVjXo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3118622.jpg",
	},
	{
		id: 1002,
		title: "Love letter",
		description: "Juego de cartas competitivo.",
		price: 3500,
		stock: 6,
		pictureUrl:
			"https://cf.geekdo-images.com/40eKIHpHIDO6VBsZtHAXpA__imagepage/img/ChYiZfpevnkkvcb5lh2_qlCWvdo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3124998.jpg",
	},
	{
		id: 1003,
		title: "Oh my goods!",
		description: "Juego de cartas de gestion de recursos.",
		price: 7000,
		stock: 8,
		pictureUrl:
			"https://cf.geekdo-images.com/XeIcWbHKxdTsCOmS-1xQ-Q__imagepage/img/DDKRpMpbb9X52jnerOkzA89rNTQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3049031.jpg",
	},
	{
		id: 1004,
		title: "Polilla tramposa",
		description: "Juego de cartas donde hacer trampas es necesario.",
		price: 8000,
		stock: 12,
		pictureUrl:
			"https://cf.geekdo-images.com/8M51tLQxA7QJDrhmJWPvoQ__imagepage/img/S9-axeKJyHeDVAsNmOICBeZib7s=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2266547.jpg",
	},
];

const promesa = new Promise((res, rej) => {
	setTimeout(() => {
		res(juegos);
	}, 2000);
});

function ItemList() {
	const [juegos, setJuegos] = useState([]);
	const [show, setShow] = useState(true);

	const mapJuego = juegos.map((juego) => (
		<Item
			key={juego.id}
			id={juego.id}
			title={juego.title}
			description={juego.description}
			price={juego.price}
			pictureUrl={juego.pictureUrl}
			stock={juego.stock}
		/>
	));

	useEffect(() => {
		promesa
			.then((data) => {
				setJuegos(data);
			})
			.catch(() => {
				console.log("error");
			})
			.finally(() => {
				setShow(!show);
			});
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<div className="row">{show ? <Spinner /> : mapJuego};</div>
		</>
	);
}

export default ItemList;
