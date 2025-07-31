type CardProps = {
  imgSrc: string;
  heading: string;
  imgAlt?: string;
};

const Card: React.FC<CardProps> = ({ heading ,imgSrc, imgAlt = "card image" }) => {
  return (
    <div className="bg-tertiary p-4 m-[2%] rounded-xl flex flex-col items-center justify-center w-[46%] h-[30%] shadow-lg">
      <h1>{heading}</h1>
      <img src={imgSrc} alt={imgAlt} className="h-58 w-58 object-contain rounded-3xl" />
    </div>
  );
};

export default Card;