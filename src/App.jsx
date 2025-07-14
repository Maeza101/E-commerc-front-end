import React from 'react';
import Header from './static/Header';
import Footer from './static/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import OrderReview from './pages/OrderReview';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Products' element={<Product />} />
          <Route path='/products/detail' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/OrderReview' element={<OrderReview />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}






