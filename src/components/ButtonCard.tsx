import { easeInOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
    path : string,
    heading : string,
    description : string,
}

const ButtonCard : React.FC<ButtonProps> = (ButtonProps) => {

    const navigate = useNavigate()

    return ( 
        <motion.div
        initial = {{
          opacity : 0,
          y : "15%"
        }}
        whileInView={{
          opacity : 1,
          y : "0%"
        }} 
        whileHover={{
          background : "var(--color-secondary)",
                color : "var(--color-tertiary)",
                scale : 1.1,
        }}
        transition={{
          duration : 0.1,
          ease : easeInOut,
        }}
        onClick={() =>navigate(ButtonProps.path)} className="bg-tertiary p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-3xl font-semibold p-8 text-center">{ButtonProps.heading}</h4>
          <p className="font-medium text-2xl text-center px-3 ">
            {ButtonProps.description}
          </p>
        </motion.div>
    );
}

export default ButtonCard;