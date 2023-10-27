import React, {useState,useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {BiSearch} from 'react-icons/bi'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
// import {FaRegCheckCircle} from 'react-icons/fa'
// import {LuShieldCheck} from 'react-icons/lu'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

// const apiConstraints = {
//       "initial": "INITIAL",
//       "loading": "LOADING",
//       "success": "SUCCESS",
//       "failure": "FAILURE"
// }


const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

// const reversed = statesList.reverse()

const Home = () => {
      const [stateWiseData,setStateWiseDate] = useState({})
      const [isLoading,setLoading] = useState(false)
      console.log(stateWiseData)

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
                <div className='covid19-stats-container'>
                        <div className='total-count-container'>
                              <div className='confirmed-container'>
                                    <h3 className='heading'>Confirmed</h3>
                                    <img className='icon' src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/check-mark_1_e83qpy.png" alt="confirmed"/>
                                    <p className='total-count'>967844556</p>
                              </div>
                              <div className='active-container'>
                                    <h3 className='heading'>Active</h3>
                                    <img className='icon' src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/protection_1_roaazd.png" alt="active"/>
                                    <p className='total-count'>967844556</p>
                              </div>
                              <div className='recovered-container'>
                                    <h3 className='heading'>Recovered</h3>
                                    <img className='icon' src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521130/mini-project/recovered_1_pz28bz.png" alt="recovered"/>
                                    <p className='total-count'>967844556</p>
                              </div>
                              <div className='deceased-container'>
                                    <h3 className='heading'>Deceased</h3>
                                    <img className='icon' src="https://res.cloudinary.com/dnv6kesmt/image/upload/v1636521128/mini-project/breathing_1_uxmvq9.png" alt="deceased"/>
                                    <p className='total-count'>967844556</p>
                              </div>
                        </div>
                        <div className='stats-container'>
                              <div className='card-header'>
                                   <div> 
                                    <span>States/UT</span>
                                    <button type='button' >
                                          <FcGenericSortingAsc />
                                    </button>
                                     <button type='button' >
                                          <FcGenericSortingDesc />
                                    </button>
                                    </div>
                                    <h3>Confirmed</h3>
                                     <h3>Active</h3>
                                      <h3>Recovered</h3>
                                      <h3>Deceased</h3>
                                      <h3>Population</h3>
                              </div>
                              <hr />
                              <div className='card-footer'>
                                    <div>
                                          {statesList.map(state=>(
                                                <p style={{width:"120px"}} key={state.state_code}>{state.state_name}</p>
                                          ))}

                                    </div>
                              </div>
                        </div>
                </div>
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
      <Footer />
      </>
  )
}

export default Home
