import type { JSX } from "react";

function Navbar() {


    const mobile : JSX.Element = (
        <div className="bg-amber-500 h-[20%]">
            navbar
        </div>
    )


    return ( 
    <>
        {mobile}
    </>

     );
}

export default Navbar;