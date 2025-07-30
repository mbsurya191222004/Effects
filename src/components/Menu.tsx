import {motion} from "motion/react"

function Menu() {
    return (  
        
        <motion.div 
        initial = {{
            opacity : 0 ,
            top : "-100%"
        }}
        animate = {{
                opacity : 1 ,
                top : "7vh",
            }}
        transition={{
            duration : 1 ,
        }}
        className="bg-amber-900 fixed h-[30%] w-[40%] right-0 flex flex-col justify-evenly z-[-1]"
        >

            <a href="/home" className="bg-amber-200 h-[30%] text-lg flex flex-col justify-evenly items-center ">
                Home
            </a>
            <a  href="/about" className="bg-amber-200 h-[30%] text-lg flex flex-col justify-evenly items-center">
                About us
            </a>
            <a  href="/contact" className="bg-amber-200 h-[30%] text-lg flex flex-col justify-evenly items-center">
                Contact
            </a>
        </motion.div>
        
    );
}

export default Menu;