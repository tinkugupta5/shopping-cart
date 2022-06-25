import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from './pages/Home';
// import About from './pages/About';
import Navigation from "./components/Navigation";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart"; 
// import About from "./pages/About"; 
import SingleProduct from './pages/SingleProduct';
import { CartContext } from "./CartContext";
import { useEffect, useState } from "react";

const  App  = () =>
{
    // for cart update its like state for the cart value change
    const [cart, setCart] = useState({}); //useState consisit empty array

    // fetch cart data from localstorage (Step First )

    useEffect(() => {

        // use local storage (12/04/2022)or {{cart:cart ===> use it like simple cart }}
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart));
        

    },[]);

    useEffect(() => {

        // 
        window.localStorage.setItem('cart' , JSON.stringify(cart));

    },[cart]);  // [cart] when the cart change then use effect call

    return (
        <>

       <Router>
            <CartContext.Provider value={{cart,setCart}}>
                    <Navigation/>
                    <Routes>               
                        <Route path="/" element={<Home/>}></Route>
                        {/* <Route path="/about" element={<About/>}></Route> */}
                        <Route path="/products" exact element={<ProductsPage/>}></Route>
                        <Route path="/products/:_id" element={<SingleProduct/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>  
                    </Routes>
            </CartContext.Provider>
        </Router> 


        
       
    </>
    )
}



export default App;


