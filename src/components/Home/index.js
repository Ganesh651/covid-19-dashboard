import React, {useState,useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'
import Header from '../Header'
import './index.css'

// const apiConstraints = {
//       "initial": "INITIAL",
//       "loading": "LOADING",
//       "success": "SUCCESS",
//       "failure": "FAILURE"
// }

const Home = () => {
      const [stateWiseData,setStateWiseDate] = useState({})
      const [isLoading,setLoading] = useState(false)

      useEffect(()=>{
            const getstateWiseData = async ()=>{
                  setLoading(true)
                  const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
                  const data = await response.json()
                  setLoading(false)
                  setStateWiseDate(data)
            }
            getstateWiseData()
      },[])


      const renderCovid19Data = ()=>(
           <>
            {
             isLoading  ? 
                  <div className='loader-container'>
                        <Loader type="Oval" color="#0b69ff" height="50" width="50"/>
                  </div> :
                <div>Data</div>
            }
           </> 
           )

  return (
      <>
      <Header />
      <div className='home-container'>
            <div className='search-input-container'>
                  <BiSearch className='search-icon'/>
                  <input type="search" className='search-input' placeholder='Enter The State'/>
            </div>
            {renderCovid19Data()}
      </div>
      </>
  )
}

export default Home
