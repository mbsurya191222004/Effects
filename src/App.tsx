import './App.css'
import Navbar from './components/Navbar.tsx'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Contact from './Pages/Contact.tsx'
import About from './Pages/About.tsx'

function App() {

  return (
    <div>
    <Navbar></Navbar>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </HashRouter>
    
    </div>
  )
}

export default App
