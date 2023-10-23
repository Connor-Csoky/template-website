import Navigation from "./Components/Navigation";
import Signin from "./Pages/Signin/Signin";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import FormNav from "./Components/FormNav";
import ProductPage from "./Pages/Home/ProductPage";
// import Footer from "./Components/Footer";
import {useState } from "react";
import { Routes, Route } from "react-router-dom";


export default function App() {

  const [search, setSearch] = useState("");
  
  const onSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={ <><Navigation search={onSearchChange} /><Home search={search}/></>}></Route>
        <Route path="/signin" element={ <><FormNav /><Signin/></> }></Route>
        <Route path="/Register" element={ <><FormNav /><Register /></> }></Route>
        <Route path="/cart" element={ <><Navigation/><Cart /></> }></Route>
        <Route path="/product/:name" element={ <><Navigation/><ProductPage /></> }></Route>
      </Routes>
    </div>
  );
}


