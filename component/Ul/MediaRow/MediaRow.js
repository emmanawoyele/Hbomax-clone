import Link from "next/link";
import { useState, useEffect } from "react";
import ShufflArray from "../../Utilities/shuffleArray";


// import axios from "axios"


function MediaRow(props) {
    console.log({media:props})
    const [loadingData, setLoadingData] = useState(true)
    const [movies, setMoviesData] = useState([])

   

    useEffect(() => {

        const axios = require('axios')

        // Make a request for a user with a given ID
        axios.get(`https://api.themoviedb.org/3/${props.endpoint}&api_key=${process.env.PRIVATE_API_KEY}`)
            .then(function (response) {
              console.log({response})
                setLoadingData(false)
                // handle success

                setMoviesData(ShufflArray(response.data.results))


            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed

            })
    }, [props.update])


    const loopComp = (comp, digit) => {
        let thumbNails = [<SkeletonComp key={"a"} />, <SkeletonComp key={"b"} />, <SkeletonComp key={"c"} />, <SkeletonComp key={"d"} />, <SkeletonComp key={"e"} />]
        // for (let index = 1; index <= digit; index++) {
        //     thumbNails.push(comp)
        // }
        return thumbNails
    }


    const showThumbNails = (props) => {
        console.log({checkpropShowThumbNail:props})
        console.log({mediaType:props.mediaType})
        return loadingData
            ? loopComp(<SkeletonComp />, 10)
            : movies.map((moviesData) => {
                
                return <ThumbNails key={moviesData.id} moviesprops={moviesData} type={props.type}
                    mediaType={props.mediaType !=='tv'?'movie':'tv'} />
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
    
    
    const ThumbSize = (type) => {
        if (type === "small-v") {
            return '185';
        }


        if (type === "small-h") {
            return '342';

        }
        if (type === "large-h") {
            return '500';

        }

        if (type === "large-v") {
            return '400';

        }






    }

    return (

        <Link href={`/${props.mediaType !='tv'?'movie':'tv'}/${props.moviesprops.id}`}>
            <a>
                <div className="mediaRow-list__thumbnail">
                    <img src={`https://image.tmdb.org/t/p/w${ThumbSize(props.type)}/${props.moviesprops.poster_path}`} alt={props.moviesprops.title} />
                    <div className="mediaRow-list__top-layer">
                        <i className="fas fa-play"></i>
                    </div>
                </div>
            </a>

        </Link>


    )
}



const SkeletonComp = (index) => {
    return (
        <div className="mediaRow-list__thumbnail-skeleton">
            <div className="mediaRow-list__thumbnail--skeleton-img"></div>
        </div>

    )
}

MediaRow.defaultProps = {
    mediaType:'tv',
    
}


export default MediaRow
