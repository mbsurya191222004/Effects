import type { JSX } from "react";
import Card from "./Card";
import { isMobile } from "react-device-detect";

type SubfolderProps = {
    product : string
    types : Array<string>
}

const Subfolder : React.FC<SubfolderProps> = (SubfolderProps) => {

    const current = SubfolderProps.product

    const list = SubfolderProps.types

        const desktop : JSX.Element = (
        <div className="h-auto bg-primary flex flex-col items-center">
            
        <div className="bg-primary text-5xl text-center font-semibold py-8 ">{`${current}s`}</div>
        <div className=" flex flex-wrap justify-around  p-4 w-[100vw]">
                
                {
                list.map((type)=>
                    <Card width="30%" path={`/${current}/${type}`} heading={`${type}`} imgSrc={`/Products/${current}/${type}/1.jpg`}/>
                )
                }
            
        </div>
        </div>
    )
    
    const mobile : JSX.Element = (
        <div className="h-auto bg-primary">
        <div className="bg-primary text-5xl text-center font-semibold py-8">{`${current}s`}</div>
        <div className=" flex flex-wrap justify-around  p-4 w-[100vw]">
                
                {
                list.map((type)=>
                    <Card path={`/${current}/${type}`} heading={`${type}`} imgSrc={`/Products/${current}/${type}/1.jpg`}/>
                )
                }
            
        </div>
        </div>
    )

    return ( 
        <>
        {isMobile ? mobile : desktop}
        </>
     );
}

export default Subfolder;