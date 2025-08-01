import {easeInOut, motion} from "motion/react"
import { useNavigate } from "react-router-dom";

function Menu() {

    const navigate = useNavigate()

    const handleNavClick = (link : string) => {
        navigate(link)
    }
 
    return (  
        <motion.div 
        initial = {{
            opacity : 0 ,
            right : "-100%"
        }}
        animate = {{
                opacity : 1 ,
                right : 0,
            }}
        exit={{
            opacity : 0 ,
            right : "-100%"
        }}
        transition={{
            duration : 0.6 ,
            ease : easeInOut,
        }}
        className="bg-tertiary absolute h-85 w-60 top-[100%] right-0 flex flex-col justify-evenly m-0 z-50  border-secondary
         border-l-2 border-b-2 shadow-2xl font-semibold "
        >

            <div onClick={() => handleNavClick('/')} className=" h-[5%] text-2xl  flex flex-col justify-evenly items-center ">
                Home
            </div>
            <div  onClick={() =>handleNavClick('/about')} className=" h-[5%] text-2xl  flex flex-col justify-evenly items-center">
                About us
            </div>
            <div  onClick={() =>handleNavClick('/contact')} className=" h-[5%] text-2xl  flex flex-col justify-evenly items-center">
                Contact Us
            </div>
        </motion.div>
        
    );
}

export default Menu;