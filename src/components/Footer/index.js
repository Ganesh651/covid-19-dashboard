import React from 'react'
import {FiGithub} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {RxTwitterLogo} from 'react-icons/rx'
import './index.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <h3 className='website-logo'>COVID19<span className='span-text'>INDIA</span></h3>
      <p className='footer-description'>we stand with everyone fighting on the front lines</p>
      <div className='social-icons-container'>
        <FiGithub className='footer-social-logo' />
        <BsInstagram className='footer-social-logo'/>
        <RxTwitterLogo className='footer-social-logo' />
      </div>
    </div>
  )
}


export default Footer