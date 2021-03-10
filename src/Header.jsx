import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateProvider } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [{basket,user}]=useStateProvider()
    console.log(basket);

    const login=()=>{
        if(user){
            auth.signOut()
        }
    }
    return (
        <nav className="header" >
            
          <Link to="/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            </Link>
        <div className="header_search">
            <input type="text" className="header_input"/>

            <SearchIcon className="header_searchicon"/>
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                <div onClick={login} className="header_options">
                    <span className="header_optionone">HEllo {user?.email}</span>
                    <span className="header_optiontwo">{user?"Sigh Out":"Sign in"}</span>
                </div>    
                </Link>
                <Link to="/login" className="header_link">
                <div className="header_options">
                    <span className="header_optionone">Returns</span>
                    <span className="header_optiontwo">&orders</span>
                </div>    
                </Link> 
                <Link to="/" className="header_link">
                <div className="header_options">
                    <span className="header_optionone">Your </span>
                    <span className="header_optiontwo">Prime</span>
                </div>    
                </Link>
                <Link to="/checkout" className="header_link">
                <div className="header_basket">
                   <ShoppingBasketIcon/>
                   <span className="header_optiontwo header_count" >{basket?.length}</span>
                </div>    
                </Link>
                
               
            </div>
        </nav>
    )
}

export default Header
