import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/all-Products/all-Products";
import withAuthLayout from "./HOC/withAuthLayout";
import Cart from "./pages/cart/cart";
import Category from "./pages/category/category";
import Home from "./pages/home/home";
import Product from "./pages/productDetail/productDetail";
import ProductList from "./pages/productList/productList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={withAuthLayout(Home)} />
        <Route path="/Product/:id" element={withAuthLayout(Product)} />
        <Route path="/Cart" element={withAuthLayout(Cart)} />
        <Route path="/Category/:name/:id" element={withAuthLayout(Products)} />

        {/* <Route path="/" element={<ProductList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
