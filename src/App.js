import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import React, { useEffect } from 'react';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { CartProvider } from './context/CartContext';
import { db } from './Services/firebase';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
            <Routes>
            <Route path='/' element ={<ItemListContainer />} />
            <Route path='/category/:categoryId' element ={<ItemListContainer />} />
            <Route path='/item/:itemId' element ={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='checkout' element={<Checkout/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
