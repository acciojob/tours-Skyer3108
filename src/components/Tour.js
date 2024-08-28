
import React from "react"
import { useState } from "react"

const Tour=({tour,removeTour})=>{
const {ids,name,info,image,price}=tour
    const [readMore,setReadMore]=useState(false)
    return (
        <article>
            <img src={image} alt={name}/>
            <div>
                <h4>{name}</h4>
                <h4>${price}</h4>
            </div>

            <p id={`tour-item-para-${id}`}>{readMore?info:`${info.substring(0,200)}...`}
                <button onClick={()=>setReadMore(!readMore)}>{readMore?'Show Less':'ShowMore'}</button>
                </p>


                <button id={`delete-btn-${id}`} onClick={()=>removeTour(ids)}>Not Intersted</button>
        </article>

    )
}

export default Tour