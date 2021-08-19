import { useState, useEffect } from "react";
import ShufflArray from "../../Utilities/shuffleArray";

// import axios from "axios"


function MediaRow(props) {
    const [loadingData, setLoadingData] = useState(true)
    const [movies, setMoviesData] = useState([])
 
    console.log(movies)

    useEffect(() => {
       
    const axios=require('axios')
        
        // Make a request for a user with a given ID
        axios.get(`https://api.themoviedb.org/3/${props.endpoint}&api_key=a5879fe83cace23de294d0b28bb346d5`)
            .then(function (response) {
                setLoadingData(false)
                // handle success

                console.log(response.data.results);
                setMoviesData(  ShufflArray(response.data.results))
               
        
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
              
            })
    }, [])

    
    const loopComp = (comp, digit) => {
        let thumbNails = []
        for (let index = 1; index <= digit; index++) {
            thumbNails.push(comp)
        }
        return thumbNails
    }
    const showThumbNails = (props) => {
        console.log(props)
        
        return loadingData
            ? loopComp( <SkeletonComp />,10)
            : movies.map((moviesData)=>{
      return <ThumbNails key={moviesData.id} moviesprops={moviesData} type={props.type}/>
            })


    };

    return (<div className={`mediaRow-list ${props.type}`}>
        <h3 className="mediaRow-list__title"> {props.title}</h3>
        <div className="mediaRow-list__thumbnails">

            {showThumbNails(props)}
        </div>
    </div>
    )
}
const ThumbNails = (props) => {
    const ThumbSize=(type)=>{
        if(type==="small-v"){
            return '185';
        }
        
       
   if(type==="small-h"){
       return '342';

   }
   if(type==="large-h"){
    return '500';

}

if(type==="large-v"){
    return '400';

}
 

 
 
 
    
    }
    return (
        <div className="mediaRow-list__thumbnail">
            <img src={`https://image.tmdb.org/t/p/w${ThumbSize(props.type)}/${props.moviesprops.poster_path}`} alt={props.moviesprops.title} />
            <div className="mediaRow-list__top-layer">
                <i className="fas fa-play"></i>
            </div>
        </div>

    )
}
const SkeletonComp = () => {
    return (
        <div className="mediaRow-list__thumbnail-skeleton">
            <div className="mediaRow-list__thumbnail--skeleton-img"></div>
        </div>

    )
}


export default MediaRow