import { easeInOut, motion } from "motion/react";
import { useNavigate } from "react-router-dom";

type CardProps = {
  imgSrc: string;
  heading: string;
  path ?: string;
  imgAlt?: string;
  width? : string;
};

const Card: React.FC<CardProps> = ({ path = "",heading ,imgSrc, imgAlt = "image",width = "40%" }) => {

  const navigate = useNavigate()

  return (
    <motion.div 
    initial={{
      opacity : 0,
      y : "5%"
    }}
    animate={{
      opacity : 1,
      y : "0%"
    }}
    transition={{
      duration : 1,
      ease : easeInOut,
    }}
    viewport={{ once: true, amount: 0 }} 
    onClick={() => path != "" ? navigate(path) : null }
    className={`bg-tertiary opacity-100 p-4 my-[5%] rounded-xl flex flex-col items-center w-[${width}] h-[30%] shadow-lg`}>
      <h1 className="">{heading}</h1>
      <motion.img 
      animate={{
        scale : "100%",
      }}
      src={imgSrc} alt={imgAlt} className="h-58 w-58 object-contain rounded-3xl" />
    </motion.div>
  );
};

export default Card;