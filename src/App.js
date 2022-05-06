import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Home from './pages/Home';
// import About from './pages/About';
import Navigation from "./components/Navigation";
import Products from "./pages/Products";
import Cart from "./pages/Cart"; 
import SingleProduct from './pages/SingleProduct';

const  App  = () =>
{
    return (
        <>

       <Router>
              <Navigation/>
                <Routes>
            
                    <Route path="/" element={<Home/>}></Route>
                    {/* <Route path="/about" element={<About/>}></Route> */}
                    <Route path="/products" exact element={<Products/>}></Route>
                    <Route path="/products/:_id" element={<SingleProduct/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>

                </Routes>
        </Router> 
       
    </>
    )
}



export default App;


