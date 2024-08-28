
import React from "react"
import { useState } from "react"

const Tour=({id,name,info,image,price,removeTour})=>{

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


                <buton onClick={()=>removeTour(id)}>Not Intersted</buton>
        </article>

    )
}

export default Tour