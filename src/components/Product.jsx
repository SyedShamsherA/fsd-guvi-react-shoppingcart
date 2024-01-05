import React from "react";
import '../App.css'

const Product = ({ product, addToCart, removeFromCart }) => {
    return (
        <>
         <div className='product-container'>
          <div className="product">
          <div className='image'>
            <p>450 x 330</p>
          </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {product.inCart ? (
          <button className="remove-btn" onClick={() => removeFromCart(product)}>Remove from cart</button>
        ) : (
          <button className="add-btn" onClick={() => addToCart(product)}>Add to cart</button>
        )}
      </div>
        </div>
        </>
    );
  };

  export default Product