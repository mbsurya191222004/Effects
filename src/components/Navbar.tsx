import { useState, type JSX } from "react";
import Menu from "./Menu";

function Navbar() {

    const [showMenu,setShowMenu] = useState(false)

    const handleMenuClick = () => {
        setShowMenu(!showMenu)
    }

    const mobile : JSX.Element = (
    <>
        <div className="bg-amber-500 h-[7vh] flex ">
            <div id="logo" className="w-[70%] px-2">
                <img src="\LOGO-removebg.png" alt="logo" className="h-[100%]" />
            </div>
            <div id="buttons" className="w-[30%] flex justify-evenly p-0">
                <button>
                    <img src="\Search.svg" alt="logo" className="h-7.5" />
                </button>
                <button onClick={handleMenuClick}>
                    <img src="\Menu.svg" alt="logo" className="h-7.5" />
                </button>
            </div>
        </div>
    {showMenu && <Menu/>}
    </>
        
    )


    return ( 
    <>
        {mobile}
    </>

     );
}

export default Navbar;