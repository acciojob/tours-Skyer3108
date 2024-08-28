
import React from "react"
import { useState } from "react"

const Tour=({tour,removeTour})=>{
const {id,name,info,image,price}=tour
    const [readMore,setReadMore]=useState(false)
    return (
        <article>
            <img src={image} alt={name}/>
            <div>
                <h4>{name}</h4>
                <h4>${price}</h4>
            </div>

            <p>{readMore?info:`${info.substring(0,200)}...`}
                <button onClick={()=>setReadMore(!readMore)}>{readMore?'Show Less':'ShowMore'}</button>
                </p>


                <button onClick={()=>removeTour(id)}>Not Intersted</button>
        </article>

    )
}

export default Tour