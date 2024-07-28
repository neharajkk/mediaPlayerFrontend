import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Front from './pages/Front'
import Watchhistory from './pages/Watchhistory'
import Header from './components/Header'
import Footer from './components/Footer'







function App() {
 

  return (
    <>
     <Header />
     <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/front' element={<Front/>} />
      <Route path='/watchhistory' element={<Watchhistory/>} />
     </Routes>
     <Footer />
      
    </>
  )
}

export default App
