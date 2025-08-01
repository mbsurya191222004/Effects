import Card from "./Card";

type SubfolderProps = {
    product : string
    types : Array<string>
}

const Subfolder : React.FC<SubfolderProps> = (SubfolderProps) => {

    const current = SubfolderProps.product

    const list = SubfolderProps.types
    

    return ( 
        <>
        <div className="bg-primary text-5xl text-center font-semibold p-4">{current}</div>
        <div className="bg-primary flex flex-wrap min-h-[100vh] p-4 min-w-[100vw]">
                
                {
                list.map((type)=>
                    <Card heading={`${type}`} imgSrc={`/Products/${current}/${type}/1.jpg`}/>
                )

                }
            
        </div>
        </>
     );
}

export default Subfolder;