import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import Home from "./Home/Home";
import Products from "./Products/Products";

import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";

function App() {
  function openMenu() {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  function closeMenu() {
    document.querySelector(".sidebar")?.classList.remove("open");
  }

  return (
    <Router>
      <div className="grid-container">
        
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Wild Piccolo</Link> 
          </div>
          
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
          </div>
          
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <Link to="/products/pants">Pants</Link>
            </li>
            <li>
              <Link to="/products/shirts">Shirts</Link>
            </li>
          </ul>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/catalog" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetail />} />
            <Route path="/" element={<Home />} /> 
          </Routes>
        </main>

        <footer className="footer">&copy; 2022 Wild Piccolo</footer>
      </div>
    </Router>
  );
}

export default App;