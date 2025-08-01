import './App.css'
import Navbar from './components/Navbar.tsx'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Contact from './Pages/Contact.tsx'
import About from './Pages/About.tsx'
import Subfolder from './components/Subfolder.tsx'

function App() {

  const GreetingCardTypes = ["Anniversary","Best Wishes","Birthday","Congratulations","Farewell","Love","Relations","Sorry","Thank You","Wedding Day"]

  const WrappingPaperTypes =["Diwali","Floral","Golden & Silver","Marble","Wooden","Birthday","Christmas",]

  return (
    <div>
    <Navbar></Navbar>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/GreetingCards" element={<Subfolder product={"Greeting Card"} types={GreetingCardTypes}/>}/>
        <Route path="/WrappingPaper" element={<Subfolder product={"Wrapping Paper"} types={WrappingPaperTypes}/>}/>
      </Routes>
    </HashRouter>
    
    </div>
  )
}

export default App
