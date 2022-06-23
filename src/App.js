import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greeting="Bienvenidos a Dados y Meeples" />
		</>
	);
}
export default App;
