import Navigation from "./Components/Navigation";
import Signin from "./Pages/Signin/Signin";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";


// import { useEffect } from "react";


function App() {

  // useEffect(() => {
  //   fetch('http://localhost:3000')
  //     .then(Response => Response.json())
  //     .then(console.log)
  // })


  return (
    <div>
      <Routes>
        <Route path="/" element={<><Navigation/><Home /></>}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/cart" element={<><Navigation/><Cart /></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
