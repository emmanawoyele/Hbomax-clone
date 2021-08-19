import { useState, useEffect } from "react";
import ShufflArray from "../../Utilities/shuffleArray";

// import axios from "axios"


function PlaceHolder(props) {
    const [loadingData, setLoadingData] = useState(true)
    const [movies, setMoviesData] = useState([])
 
    console.log(movies)

   

    const loopComp = (comp, digit) => {
        let thumbNails = []
        for (let index = 1; index <= digit; index++) {
            thumbNails.push(comp)
        }
        return thumbNails
    }
    // 
    return (<div className={`mediaRow-list ${props.type}`}>
        <h3 className="mediaRow-list__title"> {props.title}</h3>
        <div className="mediaRow-list__thumbnails">
            {/* loop skeleton 7 times */}
            {loopComp( <div className="mediaRow-list__thumbnail-skeleton">
            <div className="mediaRow-list__thumbnail--skeleton-img"></div>
        </div>,7)}
        
        </div>
    </div>
    )
}


export default PlaceHolder