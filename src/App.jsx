import React, { useState } from 'react';
import './App.css'
import Product from './components/Product';
import Cart from './components/Cart';
import Head from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Fancy Product', description: '$40.00 - $80.00', inCart: false },
    { id: 2, name: 'Special Item', description: '$40.00 - $80.00', inCart: false },
    { id: 3, name: 'Sale Item', description: '$40.00 - $80.00', inCart: false },
    { id: 4, name: 'Popular Item', description: '$40.00 - $80.00', inCart: false },
    { id: 5, name: 'Sale Item', description: '$40.00 - $80.00', inCart: false },
    { id: 6, name: 'Fancy Product', description: '$40.00 - $80.00', inCart: false },
    { id: 7, name: 'Special Item', description: '$40.00 - $80.00', inCart: false },
    { id: 8, name: 'Popular Item', description: '$40.00 - $80.00', inCart: false },
    // Add more products here
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, inCart: true } : p
    );
    setProducts(updatedProducts);
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id ? { ...p, inCart: false } : p
    );
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setProducts(updatedProducts);
    setCart(updatedCart);
  };

  return (
    <div className="app">
      <Cart cartItems={cart} />
      <Head />
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
