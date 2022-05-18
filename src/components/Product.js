import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

  const Product = (props) => {
  const {cart , setCart} = useContext(CartContext);
  console.log(props);
  const {product} = props;

  const addToCart = (e,product) => {
    // this preventDefault stop redirection to detail page it not jump to detal page on button click
    e.preventDefault();
    // local cart (we) (...cart is a clone in _cart which consisiiit object )
    let _cart = {...cart}; // spread operator to clone the object of cart 
    if(!_cart.items){
      _cart.items = {}
    }

    if(_cart.items[product._id]){
      _cart.items[product._id] = _cart.items[product.id] + 1;
    } else {

       _cart.items[product.id] = 1;
    }

    _cart.totalItems +=1; //or _cart.totalItems = _cart.totalItem + 1;
    setCart(_cart);



    //const cart = {
   //   items : {
    //    '6057895455' : 2,
    //    '5464658465' : 3
    //  }


    //  totalitems : 5
    //}
    console.log(product);
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
        <button onClick={(e) => {addToCart(e,product)}} className='bg-yellow-500 py-1 px-4 rounded-full font-bold'>ADD</button>
    </div>

    </div>
</Link>
    
  )
}

export default Product