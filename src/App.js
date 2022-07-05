import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
