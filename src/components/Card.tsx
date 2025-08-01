import { useNavigate } from "react-router-dom";

type CardProps = {
  imgSrc: string;
  heading: string;
  path ?: string;
  imgAlt?: string;
};

const Card: React.FC<CardProps> = ({ path = "",heading ,imgSrc, imgAlt = "image" }) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => path != "" ? navigate(path) : null }
    className="bg-tertiary p-4 m-[1vw] rounded-xl flex flex-col items-center justify-center w-[45vw] h-[30%] shadow-lg">
      <h1>{heading}</h1>
      <img src={imgSrc} alt={imgAlt} className="h-58 w-58 object-contain rounded-3xl" />
    </div>
  );
};

export default Card;