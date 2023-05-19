import React, { useContext } from 'react'
import Logo from "../img/logo.png"
import {Link} from "react-router-dom"
import { AuthContext } from '../context/authContext'

const Navbar = () => {

    const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>
                <div className='nav-links'>
            <div className="links">
                    <Link className='link' to="/?cat=nature">
                        <h6>NATURE</h6>
                    </Link>
                    <Link className='link' to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
            </div>
                </div>
                <div className='user-links'>
                <span>Logged in as: {currentUser?.username }</span>
                <Link className='link' to="/write">
                    <span className='write'>
                        Write something
                    </span>
                </Link>
                {currentUser ? (<span onClick={logout}>Logout</span>) : (<Link className='link' to="/login">Login</Link>) }
                </div>
        </div>
    </div>
  )
}

export default Navbar