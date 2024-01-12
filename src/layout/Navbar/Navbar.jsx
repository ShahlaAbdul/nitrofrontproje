import React from 'react'
import './navbar.scss'
import {  NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <div id='navbar'>
                <div className='navbar'>
                    <div className="nitro_logo">
                        <span>Nitro</span><span className='noqte'>.</span>
                    </div>
                    <div className="nitro_navbar">
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Portfolio</li>
                            <li> <NavLink to="/add" > Services</NavLink> </li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="nitro_welcome">
                    <div className='nitro_welcome_text'>
                        <h1>WELCOME</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, officia!</p>
                        <button>Get in touch</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar