import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Notfound from './components/Notfound'
import './App.css'

const App = ()=>(
<div className='covid-19-app'>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<Notfound/>} />
  </Routes>
</div>
)


export default App