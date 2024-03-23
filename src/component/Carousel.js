import react, { useDebugValue, useEffect, useState } from "react"

const Carousel = () => {
    let [photos, setPhotos] = useState ([]);
    let [currPhoto, setCurrPhoto] = useState (0);

    let fetchData = async () => {
        let res = []

        for (let i = 0; i < 5; i++){
            const output = await fetch ("https://picsum.photos/800/500")
            res.push (output.url);
        }
        

        console.log (res);

        setPhotos (res);
    }
    useEffect (()=>{
        fetchData ();
    },[])

    console.log (currPhoto);

    if (photos.length != 0){
        return (
            <div className="carousel-div">
                <div className="carousel-arr">
                    <div>
                        <button onClick={()=>{
                            const prev = ((currPhoto-1) + 5) % 5;
                            setCurrPhoto (prev);
                        }}>
                            {"<"}
                        </button>
                    </div>
                    <div>
                        {/* <div>
                            <img src={photos[(currPhoto-1)%(5)]}>
                            </img>
                        </div> */}
                        <div>
                            <img src={photos[(currPhoto)%(5)]}>
                            </img>
    
                        </div>
                        {/* <div>
                            <img src={photos[(currPhoto+1)%(5)]}>
                            </img>
                        </div> */}
                    </div>
                    <div>
                        <button onClick={()=>{
                            const next = (currPhoto + 1)%(5);
                            setCurrPhoto (next);
                        }}>

                            {">"}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="carousel-div">
                LOADING ...
            </div>
        )
        
    }
    
}

export default Carousel