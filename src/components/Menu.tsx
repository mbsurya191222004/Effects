import {easeInOut, motion} from "motion/react"

function Menu() {
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
        className="bg-tertiary absolute h-70 w-60 top-[100%] right-0 flex flex-col justify-evenly m-0 z-50 rounded-bl-3xl border-secondary
         border-l-2 border-b-2 shadow-2xl"
        >

            <a href="/#/" className=" h-[30%] text-lg flex flex-col justify-evenly items-center ">
                Home
            </a>
            <a  href="/#/about" className=" h-[30%] text-lg flex flex-col justify-evenly items-center">
                About us
            </a>
            <a  href="/#/contact" className=" h-[30%] text-lg flex flex-col justify-evenly items-center">
                Contact Us
            </a>
        </motion.div>
        
    );
}

export default Menu;