import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Dados y Meeples" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos a Dados y Meeples" />} />
          <Route path="/product/:productId" element={<ItemDetailContainer greeting="Detalle del producto" />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
