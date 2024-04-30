import React,{useEffect, useState} from "react";

function App(){
    const[image, setImage]= useState()
    const [beforeRender, setBeforeRender]= useState(false)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res)=>res.json())
        .then((data)=>{
            setImage(data.message)
            setBeforeRender(true)
        
        })
            }, [])


    if(!beforeRender) return <p>Loading...</p>
    return(
        <div>
             <img src={image} alt="A Random Dog"/>
        </div>



    )
}

export default App