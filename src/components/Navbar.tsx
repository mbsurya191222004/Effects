import type { JSX } from "react";

function Navbar() {

    const mobile : JSX.Element = (
        <div className="bg-amber-500 h-15 flex justify-evenly">
            <div id="logo" className="w-[70%] ">
                <img src="public\LOGO-removebg.png" alt="logo" className="h-[100%]" />
            </div>
            <div id="buttons" className="w-[30%] flex justify-evenly">
                <button>
                    <img src="public\Search.svg" alt="logo" className="h-7.5" />
                </button>
                <button>
                    <img src="public\Menu.svg" alt="logo" className="h-7.5" />
                </button>
            </div>
        </div>
    )


    return ( 
    <>
        {mobile}
    </>

     );
}

export default Navbar;