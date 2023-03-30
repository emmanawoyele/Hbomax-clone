import { useStateContext } from "../../HboProvider/hboprovider";
import { useState, useEffect } from "react";
import axios from 'axios'
import { get, set } from "local-storage";
import Link from "next/link";
import ShufflArray from "../../Utilities/shuffleArray";



function SearchModal(props) {

    const globalState = useStateContext()
    const [DefaultData, setDefaultData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [text, setText] = useState('')



    const handleInputAction = async (e) => {

        try {
            setText(e.target.value);
            let getData = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=${process.env.PRIVATE_API_KEY}&language=en-US&page=1&include_adult=false`)
            let filterItems = getData.data.results
            filterItems.filter((items, i) => {
                items.media_type === "movie" || items.media_type === "tv"
            })
            setSearchData(filterItems)
            setShowResults(true)


        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        let shuffuleMovies
        async function ShowDefaultMovies(params) {
            try {
                let getData = await axios.get(`https://api.themoviedb.org/3/discover/movie?primany_release_year=2021&api_key=${process.env.PRIVATE_API_KEY}&language=en-US`)
                let filteredData = getData.data.results;
                filteredData.filter((item, i) => {
                    i > 14
                    shuffuleMovies = ShufflArray(filteredData)
                })
                setDefaultData(shuffuleMovies)






            }

            catch (error) {
                console.log(error)
            }
        }

       ShowDefaultMovies()

    }, [])


    useEffect(() => {
        if (globalState.searchOpenAction) {
            document.body.style.overflowY = "hidden"

        } else {
            document.body.style.overflowY = "auto"
        }
    }, [globalState.searchOpenAction])



    return (<div className={`search-modal ${globalState.searchOpenAction ? 'search-modal__active' : ''}`}>
        <div className="search-modal__group">
            <input onChange={handleInputAction} className="search-modal__input" placeholder="search for movies" type="text" value={text} />
            <div className="search-modal__close-btn" onClick={() => globalState.setsearchOpenAction((prev) => !prev)}>
                <i className="fas fa-times" />
            </div>
        </div>
        <h3 className="search-modal__title">   {showResults && searchData.length >= 1 ? `search for Results ${":"} ${text}` : 'Popular Searches'} </h3>
        <div className="search-modal__thumbnails">


            {showResults && searchData.length >= 1 ? <ShowSearchResults searchData={searchData} /> : <ShowDefaultPopular DefaultData={DefaultData} />}


        </div>
    </div>
    )
}

const ShowDefaultPopular = (props) => {
    
    const globalState = useStateContext()
    return props.DefaultData.map((item, index) => {

        return (<Link href={`/movie/${item.id}`} key={index}>
            <a>
                <div onClick={() => globalState.setsearchOpenAction((prev) => !prev)} className="search-modal__thumbnail" >
                    <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.original_title} />
                    <div className="search-modal__top-layer">
                        <i className="fas fa-play"></i>
                    </div>

                </div>
            </a>
        </Link>)
    })


}


const ShowSearchResults = (props) => {
    const globalState = useStateContext()

    console.log(props.searchData)
    const data = props.searchData.map((item, index) => {

        return <Link href={`/${item.media_type}/${item.id}`} key={index} >
            <a>
                <div className="search-modal__thumbnail" onClick={() => globalState.setsearchOpenAction((prev) => !prev)}>
                    <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.original_title} />
                    <div className="search-modal__top-layer">
                        <i className="fas fa-play"></i>
                    </div>

                </div>
            </a>
        </Link>
    })
    return data

}

export default SearchModal