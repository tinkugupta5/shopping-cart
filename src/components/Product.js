// import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

  const Product = (props) => {
    // added green button for changing the state 
    const [isAdding, setIsAdding] = useState(false);
  const {cart , setCart} = useContext(CartContext);
  // console.log(props);
  const {product} = props;
 
  const addToCart = (e,product) => {
    // this preventDefault stop redirection to detail page it not jump to detal page on button click
    e.preventDefault();
    // local cart (we) (...cart is a clone in _cart which consisiiit object )
    let _cart = {...cart}; // spread operator to clone the object of cart 
    if(!_cart.items){
      _cart.items = {}
      // console.log(_cart.items);
      // console.log("cart item value");
    }

    if(_cart.items[product._id]){
      _cart.items[product._id] +=  1;
    } else {

       _cart.items[product._id] = 1;
    }

    if(!_cart.totalItems) {
      _cart.totalItems = 0 ;
    }

    _cart.totalItems +=1; //or _cart.totalItems = _cart.totalItem + 1;
    setCart(_cart); 
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
    },1000)

   

   



    //const cart = {
   //   items : {
    //    '6057895455' : 2,
    //    '5464658465' : 3
    //  }


    //  totalitems : 5
    //}
    // console.log(product);
  }



  return (
<Link to={`/products/${product._id}`}>
    <div>
    <img src={product.image} alt=''/>

    <div className='text-center'>
    <h2 className='text-lg font-bold py-2'>{product.name}</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{product.size}</span>
    </div>
    
    <div className='flex justify-between items-center mt-4'>
        <span>₹ {product.price}</span>
        <button disabled={isAdding} onClick={(e) => {addToCart(e,product)}} className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED' : ''}</button>
    </div>

    </div>
</Link>
    
  )
}

export default Product