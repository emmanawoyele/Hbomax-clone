
import React, { useContext, useState, useEffect } from 'react';
import ls from 'local-storage';
import axios from 'axios';
import ShufflArray from '../Utilities/shuffleArray';



export const StateContext = React.createContext()

export function useStateContext() {
  return useContext(StateContext)
}
export function HBOProvider({ children }) {
  const [user, setUser] = useState(null)

  const defaultImage = 'https://randomuser.me/api/portraits/men/91.jpg'

  const createUserAction = (e) => {

    setUser(e.target.value)
  }

  const data=[{adult: false,
    backdrop_path: "/m4lKVel1iHWdS3i4oaSWBcY5RgU.jpg",
    genre_ids: (2) [878, 10749],
    id: 452019,
    media_type: "movie",
    original_language: "en",
    original_title: "Needle in a Timestack",
    overview: "A devoted husband will stop at nothing to save his marriage when it's destroyed by a time-traveling rival.",
    popularity: 97.825,
    poster_path: "/rjGYOszxlaUAe6EC5yZ4Q8l3aVL.jpg",
    release_date: "2021-10-15",
    title: "Needle in a Timestack",
    video: false,
    vote_average: 6.4,
    vote_count: 5}]
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [headerbackground, setheaderbackground] = useState(false)
  const [searchOpenAction, setsearchOpenAction] = useState(false)
  const [searchMovie, setsearchMovieAction] = useState(null)
  const thumbTypes = ['large-v', 'small-v', 'large-h', 'small-h']
  const [WishList, SetWishList] = useState(ls.get('list'))
  const [key, setkey] = useState('')
  const [randomid, setRandomId] = useState([])
// Shuffle array and return 1 item
  function shuffle(array) {
    let currentIndex= array.find((array)=>{

      console.log({behind:array})
      return array.offical!=false
     
    })
    console.log({currentIndex})
     currentIndex= array.length

    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    console.log({array})
    return array[0];
  }
//  The first API Generates movie "id" needed for the video API
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=a5879fe83cace23de294d0b28bb346d5')
      .then((response) => {
        let id=shuffle(response.data.results)
        let key= id.id
        console.log(key)
        setRandomId(id)

   axios.get(`https://api.themoviedb.org/3/movie/${key}/videos?api_key=a5879fe83cace23de294d0b28bb346d5&language=en-US`)
      .then(function (response) {
    console.log({repson:response})
    let filtermovies= response.data.results
 if(filtermovies.length<=0){
   console.log(id.id)
  const video=[{id: "614259b4af85de002a28c33c",
  iso_639_1: "en",
  iso_3166_1: "US",
  key: "ZPKL9aSgbCw",
  name: "Needle in a Timestack (2021 Movie) Teaser Trailer – Leslie Odom Jr., Cynthia Erivo, Orlando Bloom",
  official: true,
  published_at: "2021-09-15 16:07:13 UTC",
  site: "YouTube",
  size: 1080,
  type: "Trailer",}]
   console.log("Your Array is empty")
   setkey(video)
 }else{
console.log({filtermovies})
    setkey(shuffle(filtermovies))}
      }).catch((error)=>{
console.log(error.response)
      })
      })
  }, [])
 
 


  // This Method is to add
  const WishlistHandler = (video, id) => {
    console.log({ video })
    console.log({ id })
    let mylist = ls('list')
    let itemGet;
    console.log({ videofrom: video })

    if (mylist !== null) {
      itemGet = ls.get('list')
      if (!itemGet.some(item => item.mediaId === video.mediaId)) {
        itemGet.push(video)
        ls.set('list', itemGet)
        SetWishList(itemGet)
      }




    } else {
      console.log("not same")
      ls.set('list', [video])
    }



  }


  const RemoveMovieList = (VideoId) => {
    console.log({ VideoId })
    let myList = ls('list')
    myList = myList.filter((item) => item.mediaId !== VideoId)
    ls.set('list', myList)
    SetWishList(myList)

  }
  return (

    <StateContext.Provider value={{
      user, createUserAction, defaultImage, sideNavOpen,
      setSideNavOpen, accountOpen, setAccountOpen,
      searchOpenAction, setsearchOpenAction,
      searchMovie, setsearchMovieAction, thumbTypes,
      WishList, WishlistHandler, RemoveMovieList, key, setkey, randomid

    }}>

      {children}
    </StateContext.Provider>
  )
}