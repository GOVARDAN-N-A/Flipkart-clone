import React, { useEffect } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BsFillCartFill } from 'react-icons/bs'
import LoginModel from '../LoginModel/LoginModel';
// import { useSelector } from 'react-redux';
import supabase from '../../supabase';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from '../../slices/userSlice';


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const user = useSelector((state) => state.userData.user)
    const dispatch = useDispatch();

    useEffect(() => {
        if (user){
            setIsOpen(false)
        }
    }, [user]);

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error){
            dispatch(removeUser())
        }
    }

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar'>
                    <Link to={"/"}>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" className='navbar-logo' />
                    </Link>

                    <div className='navbar-search'>
                        <input type="text" className='navbar-search-input' placeholder='Search for products, brands and more' />
                        <button className='navbar-search-button'><IoIosSearch className='navbar-search-icon' /></button>
                    </div>

                    {user ? (
                        <h3 onClick={signOut}>@{user?.email.slice(0,10)}</h3>
                    ) : (  
                    <button className='login-button' onClick={() => setIsOpen(true)}>Login</button>
                    )}
                    <div className='navbar-become-seller'>
                        <h3>Become a Seller</h3>
                    </div>
                    <div className='navbar-more'>
                        <h3>More  <i className='navbar-more-down'><MdKeyboardArrowDown /></i></h3>
                    </div>

                    <div className='navbar-cart'>
                        <div className='cart-icon'>
                            <BsFillCartFill />
                        </div>
                        <Link to={"/cart"} className='cart'>Cart</Link>
                    </div>
                </div>
                <LoginModel isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>
    )
}

export default Navbar