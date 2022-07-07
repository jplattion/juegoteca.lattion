import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailcontainer/ItemDetailContainer";
import "./App.css";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting="Bienvenidos a Dados y Meeples" />
			<ItemDetailContainer greeting="Detalle del producto" />
		</>
	);
}
export default App;
