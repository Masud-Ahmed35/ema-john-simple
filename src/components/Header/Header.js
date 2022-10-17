import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <nav className='header'>
            <NavLink to='/'><img src={logo} alt="" /></NavLink>
            <div className=''>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About Us</NavLink>
                {
                    user?.uid ?
                        <button onClick={handleSignOut} className='btn-sign-out'>Sign Out</button>
                        :
                        <>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/signup">Sign Up</NavLink>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;