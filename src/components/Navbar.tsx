import { useState, type JSX } from "react";
import Menu from "./Menu.tsx";
import { AnimatePresence } from "motion/react";
import { Turn as Hamburger } from 'hamburger-react'


function Navbar() {

    const [showMenu,setShowMenu] = useState(false)

    const handleMenuClick = () => {
        setShowMenu(!showMenu)
    }
    

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
        {mobile}
    </>

     );
}

export default Navbar;