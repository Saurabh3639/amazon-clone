import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import CartPage from "./pages/cart";
import ProductPage from "./pages/product";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />

      <div className="page-container">
        <Routes>
          <Route exact path="/cart" element={<CartPage />} />

          <Route exact path="/product/:productId" element={<ProductPage />} />

          <Route exact path="/login" element={<LoginPage />} />

          <Route exact path="/" element={<HomePage />} index />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
