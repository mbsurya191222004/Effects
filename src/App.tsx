import './App.css'
import Navbar from './components/Navbar.tsx'
import {Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Contact from './Pages/Contact.tsx'
import About from './Pages/About.tsx'
import Subfolder from './components/Subfolder.tsx'
import Catfolder from './components/Catfolder.tsx'


function App() {
  const GreetingCardTypes = ["Anniversary","Best Wishes","Birthday","Congratulations","Farewell","Love","Relations","Sorry","Thank You","Wedding Day"]

  const WrappingPaperTypes =["Diwali","Floral","Golden & Silver","Marble","Wooden","Birthday","Christmas",]

  return (
    <div>
    <Navbar></Navbar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Greeting Card" element={<Subfolder product={"Greeting Card"} types={GreetingCardTypes}/>}/>
        <>
          <Route path="/Greeting Card/Anniversary" element={<Catfolder len={8} type={"Anniversary"} baseUrl="\Products\Greeting Card\Anniversary"/>}/>
          <Route path="/Greeting Card/Birthday" element={<Catfolder len={22} type={"Birthday"} baseUrl="\Products\Greeting Card\Birthday"/>}/>
          <Route path="/Greeting Card/Best Wishes" element={<Catfolder len={5} type={"Best Wishes"} baseUrl="\Products\Greeting Card\Best Wishes"/>}/>
          <Route path="/Greeting Card/Congratulations" element={<Catfolder len={2} type={"Congratulations"} baseUrl="\Products\Greeting Card\Congratulations"/>}/>
          <Route path="/Greeting Card/Farewell" element={<Catfolder len={4} type={"Farewell"} baseUrl="\Products\Greeting Card\Farewell"/>}/>
          <Route path="/Greeting Card/Love" element={<Catfolder len={10} type={"Love"} baseUrl="\Products\Greeting Card\Love"/>}/>
          <Route path="/Greeting Card/Relations" element={<Catfolder len={6} type={"Relations"} baseUrl="\Products\Greeting Card\Relations"/>}/>
          <Route path="/Greeting Card/Sorry" element={<Catfolder len={4} type={"Sorry"} baseUrl="\Products\Greeting Card\Sorry"/>}/>
          <Route path="/Greeting Card/Thank You" element={<Catfolder len={5} type={"Thank You"} baseUrl="\Products\Greeting Card\Thank You"/>}/>
          <Route path="/Greeting Card/Wedding Day" element={<Catfolder len={4} type={"Wedding Day"} baseUrl="\Products\Greeting Card\Wedding Day"/>}/>

        </>
        <Route path="/Wrapping Paper" element={<Subfolder product={"Wrapping Paper"} types={WrappingPaperTypes}/>}/>
        <>
        <Route path="/Wrapping Paper/Diwali" element={<Catfolder len={15} type={"Diwali"} baseUrl="\Products\Wrapping Paper\Diwali"/>}/>
        <Route path="/Wrapping Paper/Birthday" element={<Catfolder len={9} type={"Birthday"} baseUrl="\Products\Wrapping Paper\Birthday"/>}/>
        <Route path="/Wrapping Paper/Christmas" element={<Catfolder len={6} type={"Christmas"} baseUrl="\Products\Wrapping Paper\Christmas"/>}/>
        <Route path="/Wrapping Paper/Golden & Silver" element={<Catfolder len={16} type={"Golden & Silver"} baseUrl="\Products\Wrapping Paper\Golden & Silver"/>}/>
        <Route path="/Wrapping Paper/Floral" element={<Catfolder len={16} type={"Floral"} baseUrl="\Products\Wrapping Paper\Floral"/>}/>
        <Route path="/Wrapping Paper/Marble" element={<Catfolder len={16} type={"Marble"} baseUrl="\Products\Wrapping Paper\Marble"/>}/>
        <Route path="/Wrapping Paper/Wooden" element={<Catfolder len={14} type={"Wooden"} baseUrl="\Products\Wrapping Paper\Wooden"/>}/>

        </>     
        <Route path="/Slam Book" element={<Catfolder len={12} type={"Slam Books"} baseUrl="\Products\Slam Book"/>}/>
        <Route path="/Shagun Envelope" element={<Catfolder len={6} type={"Shagun Envelopes"} baseUrl="\Products\Shagun Envelope"/>}/>
         <Route path="*" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
