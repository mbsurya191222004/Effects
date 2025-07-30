import {motion} from "motion/react"

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
        transition={{
            duration : 0.55 ,
        }}
        className="bg-tertiary absolute h-70 w-60 top-[100%] right-0 flex flex-col justify-evenly m-0 z-50 rounded-bl-3xl"
        >

            <a href="/#/" className=" h-[30%] text-lg flex flex-col justify-evenly items-center ">
                Home
            </a>
            <a  href="/#/about" className=" h-[30%] text-lg flex flex-col justify-evenly items-center">
                About us
            </a>
            <a  href="/#/contact" className=" h-[30%] text-lg flex flex-col justify-evenly items-center">
                Contact
            </a>
        </motion.div>
        
    );
}

export default Menu;