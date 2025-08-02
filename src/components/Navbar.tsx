import { useState, type JSX } from "react";
import Menu from "./Menu.tsx";
import { AnimatePresence } from "motion/react";
import { Turn as Hamburger } from 'hamburger-react'
import { isMobile } from "react-device-detect";
import Navbutton from "./Navbutton.tsx";


function Navbar() {

    const [showMenu,setShowMenu] = useState(false)
    

    const handleMenuClick = () => {
        setShowMenu(!showMenu)
    }



    const desktop : JSX.Element = (

        <div className="bg-secondary relative w-[100vw] h-[7vh] flex overflow-hidden px-4">
            <div id="logo" className="w-[70%] px-2">
            <a href="/#" className="w-[30%]">
                <img src=".\LOGO-removebg.png" alt="logo" className="h-[100%]" />
            </a>
            </div>
            <div id="buttons" className="  w-[30%] flex justify-evenly  align-middle p-0 ">
                <AnimatePresence>
                <Navbutton title="Home" path="/"/>
                <Navbutton title="About Us" path="/about"/>
                <Navbutton title="Contact Us" path="/contact"/>
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {showMenu && <Menu/>}
            </AnimatePresence>    
        </div>

    )
    

    const mobile : JSX.Element = (

        <div className="bg-secondary relative w-[100vw] h-[7vh] flex ">
            <div id="logo" className="w-[80%] px-2">
            <a href="/#" className="w-[30%]">
                <img src=".\LOGO-removebg.png" alt="logo" className="h-[100%]" />
            </a>
            </div>
            <div id="buttons" className="w-[20%] flex justify-evenly p-0 ">
                <button onClick={handleMenuClick}>
                    <Hamburger duration={0.58}/>
                </button>
            </div>
            <AnimatePresence>
                {showMenu && <Menu/>}
            </AnimatePresence>    
        </div>
    

        
    )


    return ( 
    <>
        {isMobile ? mobile : desktop}
    </>

     );
}

export default Navbar;