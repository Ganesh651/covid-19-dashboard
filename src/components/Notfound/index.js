import React from 'react'
import {Link} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom' alternative for Link component is useNavigate Hook
import './index.css'


const Notfound = () => {

  return (
    <div className='notfound-container'>
      <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1698335850/Group_7484_j0d2w6.png"
      alt="notfound" 
      className='notfound-image' />
      <h3 className='notfound-heading'>PAGE NOT FOUND</h3>
      <p className='notfound-description'>we're sorry, the page you requested could not be found Please go back to the homepage</p>
      <Link to="/" className='link'>
            <div type="button" className='home-button'>
            Home
            </div>
      </Link>
    </div>
  )
}


export default Notfound