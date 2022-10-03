import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import withAuthLayout from "./HOC/withAuthLayout";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

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
