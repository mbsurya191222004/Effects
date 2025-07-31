import Card from "./Card";

type SubfolderProps = {
    product : string
}

const Subfolder : React.FC<SubfolderProps> = (SubfolderProps) => {

    const current = "greet"

    const types = ["anniversary","bday","best wishes","congrats","farewell","love","relations","sorry","thank you","wedding"]
    

    return ( 
        <>
        <div className="bg-primary text-5xl text-center font-semibold p-4">{current}</div>
        <div className="bg-primary flex flex-wrap min-h-[100vh] p-4 min-w-[100vw]">
                
                {
                types.map((type)=>
                    <Card heading={`${type}`} imgSrc={`/products/${current}/${type}/1.jpg`}/>
                )

                }
            
        </div>
        </>
     );
}

export default Subfolder;