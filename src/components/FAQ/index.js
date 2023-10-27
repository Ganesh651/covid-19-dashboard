import React from 'react'
import './index.css'

const FAQ = props => {
      const {each} = props
      const {answer,question} = each
      
  return (
      <>
    <h6 className='question'>{question}</h6>
    <span className='answer'>{answer}</span>
    </>
  )
}



export default FAQ