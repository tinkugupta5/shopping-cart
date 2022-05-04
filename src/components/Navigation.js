import {Link} from 'react-router-dom';
const Navigation = () => {

    const cartStyle = {
        background:'#f59e0d',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'50px'
    }

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
                <li className='ml-6'><Link to="/products">Products</Link></li>
                <li className='ml-6'>
                    <Link to="/cart">
                    <div style={cartStyle}>
                        <span className='text-white'>10</span> 
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