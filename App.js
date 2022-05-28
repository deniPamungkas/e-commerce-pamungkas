import "./App.scss";
import "./assets/scss/bootstrap.scss";
import Navbar from "./parts/Navbar/index";
import Footer from "./parts/Footer/index";
import HomePage from "../src/Pages/HomePage/index";
import LoginPage from "../src/Pages/LoginPage/index"
import Details from "../src/Pages/Details/index";
import Products from "../src/Pages/productsList/index";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const Cart = createContext(10);

  return (
    <div className="App">
      <Navbar jumlah={count} />
      <Cart.Provider value={{ count, setCount }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage keranjang={Cart}/>} />
            <Route path="/details" element={<Details keranjang={Cart}/>} />
            <Route path={`/products`} element={<Products keranjang={Cart}/>} />
            <Route path={`/login`} element={<LoginPage keranjang={Cart}/>} />
          </Routes>
        </Router>
      </Cart.Provider>
      <Footer />
    </div>
  );
}

export default App;
