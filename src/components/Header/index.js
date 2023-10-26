import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className='app-header'>
      <h3 className='website-logo'>COVID19<span className='span-text'>INDIA</span></h3>
      <ul className='nav-list-container'>
            <Link to="/" className='link'>
                  <li className='nav-item'>Home</li>
            </Link>
            <Link to="/about" className='link'>
                  <li className='nav-item'>About</li>
            </Link>
      </ul>
    </div>
  )
}


export default Header