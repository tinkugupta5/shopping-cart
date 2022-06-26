import {useState,useEffect,useContext} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import { CartContext } from '../CartContext';

    

const SingleProduct = () => {
    const [isAdding, setIsAdding] = useState(false);
    // const [isAdding, setIsAdding] = useState(false);
    const {cart , setCart} = useContext(CartContext);
    const [product , setProduct] = useState({});
    const params = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
     
        fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${params._id}`)
        .then(response => response.json())
        .then(product => {
            setProduct(product);
            // console.log(product);     
        })
    }, [params._id]);

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
    <div className="container mx-auto mt-12">
        <button className="mb-12 font-bold" onClick={() => navigate(-1)}>Back</button>
        <div className="flex">
            <img src={product.image} alt="pizza"/>
            <div className="ml-16">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <div className="text-md">{product.size}</div>
            <div className="font-bold mt-2">{product.price}</div>
            <button disabled={isAdding} onClick={(e) => {addToCart(e,product)}} className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED' : ''}</button>
            </div> 
        </div>
    </div>
  )
}

export default SingleProduct