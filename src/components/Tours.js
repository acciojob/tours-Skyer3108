
import React from "react"
import Tour from "./Tour"


const Tours=({tours,removeTour})=>{


    return(
        <section>
            <div>
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>

            <div>
                {
                    tours.map((tour)=>(
                        <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Tours