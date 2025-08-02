import type { JSX } from "react";
import Card from "./Card";
import { isMobile } from "react-device-detect";

type CatfolderProps = {
    baseUrl : string;
    type : string ;
    len : number;
}

const Catfolder : React.FC<CatfolderProps> = (CatfolderProps) => {
    let elements : Array<JSX.Element>= []
    const base = CatfolderProps.baseUrl


    const len = CatfolderProps.len

    for(let num=1;num<=len;num++){
        elements.push(
            <Card width={isMobile?"40%":"30%"} heading={`${CatfolderProps.type} #${num}`} imgSrc={`${base}/${num}.jpg`}/>
        )
    }
    

    return ( 
        <div className="bg-primary min-h-[100vh]">
        <div className="bg-primary text-5xl text-center font-semibold py-8">{CatfolderProps.type}</div>
        <div className="flex flex-wrap justify-around p-4 w-[100vw]">
                
                {
                
                    elements
                
                }
            
        </div>
        </div>
     );
}

export default Catfolder;