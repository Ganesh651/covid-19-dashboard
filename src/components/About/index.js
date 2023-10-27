import React,{useState,useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import FAQ from '../FAQ'
import './index.css'

const About = () => {
  const [faq,setFAQ] = useState({faq:[],factoids:[]})
  const [isLoading,setLoading] = useState(false)

  useEffect(()=>{

    const getFAQData = async ()=>{
      setLoading(true)
      const response = await fetch('https://apis.ccbp.in/covid19-faqs')
      const data = await response.json()
      setLoading(false)
      setFAQ({faq:data.faq,factoids: data.factoids})
    }
    getFAQData()
  },[])

  return (
      <>
      <Header/>
      <div className='about-container'>
          <h2 className='about-heading'>About</h2>
          <span className='last-updated'>Last update on march 28th 2021.</span>
          <h4 className='vaccine-distribution'>COVID-19 vaccines be ready for distribution</h4>
          <div className='faq-container'>
            {
             isLoading  ? 
                  <div className='loader-container'>
                        <Loader type="Oval" color="#0b69ff" height="50" width="50"/>
                  </div> :
                <>
                {
                      faq.faq.map(each=>(
                        <FAQ each={each} key={each.qno} />
                      ))
                }
               </>
            }
          </div>
      </div>
      <Footer />
      </>
  )
}


export default About
