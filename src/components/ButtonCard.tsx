import { useNavigate } from "react-router-dom";

type ButtonProps = {
    path : string,
    heading : string,
    description : string,
}

const ButtonCard : React.FC<ButtonProps> = (ButtonProps) => {

    const navigate = useNavigate()

    return ( 
        <div onClick={() =>navigate(ButtonProps.path)} className="bg-tertiary p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-3xl font-semibold p-8 text-center">{ButtonProps.heading}</h4>
          <p className="font-medium text-2xl text-center px-3 ">
            {ButtonProps.description}
          </p>
        </div>
    );
}

export default ButtonCard;