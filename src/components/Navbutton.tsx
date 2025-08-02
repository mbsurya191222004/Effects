import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

type NavbuttonProps = {
    title : string,
    path : string,
}

const Navbutton : React.FC<NavbuttonProps> = (NavbuttonProps) => {

    const navigate = useNavigate()

    const handleNavClick = (link : string) => {
        navigate(link)
    }


    return ( 
            <motion.div 
            whileHover={{
                background : "var(--color-tertiary)",
                color : "var(--color-secondary)",
                scale : 1.2,
            }}
            transition={{
                duration : 0.25,
                ease : "linear"
            }}
            exit={{
                background : "var(--color-tertiary)"
            }}
            onClick={() => handleNavClick(NavbuttonProps.path)} className="h-[100%]  font-semibold w-[100%] text-2xl  flex flex-col justify-evenly items-center ">
                {NavbuttonProps.title}
            </motion.div>
     );
}

export default Navbutton;