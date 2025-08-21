import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <span className='navbar-title'>IN<span>DIA</span></span>
        <div className='navbar-menu'>
            <ul className='menu-links'>
                <li className='menu-link'><a>ACCUEIL</a></li>
                <li className='menu-link'><a>PROJETS</a></li>
                <li className='menu-link'><a>SKILLS</a></li>
                <li className='menu-link'><a>PARCOURS</a></li>
                <li className='menu-link'><a>A PROPOS</a></li>
            </ul>
        </div>
        <button className='navbar-btn primary-button'>CONTACT</button>
    </nav>
  )
}

export default Navbar