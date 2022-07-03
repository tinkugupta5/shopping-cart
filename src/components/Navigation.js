import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';


const Navigation = () => {

    const cartStyle = {
        background:'#f59e0d',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px'
    }


    const {cart} = useContext(CartContext);

    return (
        
        <>  
             
        <nav className="container mx-auto flex items-center justify-between py-5 ">
            
            <div>
                <Link to="/">
                    <img style={{height:45}} src="/images/logo.png" alt='logo'/>
                </Link>
            </div>

            <ul className='flex items-center '>
                <li className='ml-6'><Link to="/">Home</Link></li>
                <li className='ml-6'><Link to="/ProductsPage">Products</Link></li>
                <li className='ml-6'>
                    <Link to="/cart">
                    <div style={cartStyle}>
                        <span className='text-white'>{cart.totalItems ? cart.totalItems : 0 }</span>  
                        {/* if cart.totalItems has a value cart.totalItems upadte it other wise zero value */}
                        <img className='ml-2'  src="/images/cart.png" alt='cart-icon'/>                      
                    </div>
                     </Link>
                </li>
            </ul>
            
        </nav>
               
        </>
    )
}

export default Navigation;