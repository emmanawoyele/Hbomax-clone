
import { useState, useEffect } from "react";
import ShufflArray from "../../Utilities/shuffleArray";

// import axios from "axios"


function PlaceHolder(props) {
    const [loadingData, setLoadingData] = useState(true)
    const [movies, setMoviesData] = useState([])
 
    
    

    const loopComp = (comp, digit) => {
        let thumbNails=[0,1,2,3,4,5,6]
        let looped
//    let thumbNails = [<SkeletonComp key={"a"} />, <SkeletonComp key={"b"} />, <SkeletonComp key={"c"} />, <SkeletonComp key={"d"} />, <SkeletonComp key={"e"} />]

        // for (let index = 1; index <= digit; index++) {
        //     thumbNails.push(comp)
      
        // }
        thumbNails.map((thumb)=>{
            
             looped=  <SkeletonComp key={thumb}/>
             
        })
        return looped;
    }
    // 

    return (
      
    <div  className={`mediaRow-list ${props.type}`}>
        <h3 className="mediaRow-list__title"> {props.title}</h3>
        <div className="mediaRow-list__thumbnails">
            {/* loop skeleton 7 times */}
            {loopComp()}
        
        </div>
    </div>
    )
}

const SkeletonComp = (index) => {
    return (
        <div className="mediaRow-list__thumbnail-skeleton">
            <div className="mediaRow-list__thumbnail--skeleton-img"></div>
        </div>

    )
}

export default PlaceHolder
