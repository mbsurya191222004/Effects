import Card from "./Card";

type SubfolderProps = {
    product : string
    types : Array<string>
}

const Subfolder : React.FC<SubfolderProps> = (SubfolderProps) => {

    const current = SubfolderProps.product

    const list = SubfolderProps.types
    

    return ( 
        <div className="min-h-[100vh] bg-primary">
        <div className="bg-primary text-5xl text-center font-semibold py-8">{`${current}s`}</div>
        <div className=" flex flex-wrap justify-around  p-4 w-[100vw]">
                
                {
                list.map((type)=>
                    <Card path={`/${current}/${type}`} heading={`${type}`} imgSrc={`/Products/${current}/${type}/1.jpg`}/>
                )
                }
            
        </div>
        </div>
     );
}

export default Subfolder;