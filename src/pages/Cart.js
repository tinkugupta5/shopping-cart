import { useContext, useState } from 'react';
import {CartContext } from '../CartContext';
import { useEffect } from "react";


const Cart = () => {
  const [products,setProducts] = useState([]);
  const {cart,setCart} = useContext(CartContext);
  console.log(cart);

  // we have an items list then we will call to our server through use effect | 
  // step first when the cart component load 
  // step 2 use effect call to server

  useEffect(() => { 

    // suppose if our cart is empty then will will impliment check

    if(!cart.items)
    {
      return;

    }

    // otherwise this will xcute
    
    fetch('https://ecom-rest-apis.herokuapp.com/api/products/cart-items', {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({ids:Object.keys(cart.items)})

    }).then( res => res.json())
    .then(products => {
      setProducts(products);
    } )
  
  }, [cart])

  const getQty = (productId) => 
  {
    console.log(productId);
    console.log("find product id");
    return cart.items[productId];
  }

  const increment = (productId) => {
    const existingQty = cart.items[productId];
    const _cart = {...cart};
    _cart.items[productId] = existingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
}
  
  return (
    
    <div className='container mx-auto lg:w-1/2 w-full pb-24'>
      <h1 className='my-12 font-bold'>Cart items</h1>
      <ul>

        {
          // loop products
          products.map(product => {
            return(
              <li className='mb-12 '>
          <div className='flex items-center justify-between'>
            <div className='flex item-center'>
              <img className='h-16' src={product.image} alt='' />
              <span className='font-bold ml-4 w-48'>{product.name}</span>
            </div>
            {/* increment and decrement */}
            <div>
              <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'  >-</button>
              <b className='px-2'>{getQty(product._id)}</b>
              <button onClick={()=>{increment(product._id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
            </div>
            <span>{product.price} </span>
            <button className='bg-red-500 px-4 py-2 rounded-full leading-none text-white'>Delete</button>

          </div>
        </li>
            )
          })
        }
        
        

        <hr className='my-6' />

        <div className='text-right'>
          <b>Grand Total:</b>   ₹ 1000
        </div>
        <div class="text-right mt-6">
          <button className='bg-yellow-500 px-4 py-2 rounded-full leading-none'>Order Now</button>
        </div>

      </ul>

    </div>

  )
}

export default Cart