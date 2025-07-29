function Menu() {
    return (  
        
        <div className="bg-amber-900 fixed h-[30%] w-[40%] right-0 flex flex-col justify-evenly">
            <a href="/home" className="bg-amber-200 h-[30%] text-lg flex flex-col justify-evenly items-center ">
                Home
            </a>
            <a  href="/about" className="bg-amber-200 h-[30%] text-lg flex flex-col justify-evenly items-center">
                About us
            </a>
            <a  href="/contact" className="bg-amber-200 h-[30%] text-lg flex flex-col justify-evenly items-center">
                Contact
            </a>
        </div>
        
    );
}

export default Menu;