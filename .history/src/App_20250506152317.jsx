

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ''

function App() {
  
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}>

    </Route>
   </Routes>
   <Footer/> 
   </BrowserRouter>

  )
}

export default App
