
import React, { useContext, useState, useEffect } from 'react';
import ls from 'local-storage';
import axios from 'axios';




export const StateContext = React.createContext()

export function useStateContext() {
  return useContext(StateContext)
}

export function HBOProvider({ children }) {
  let localstorageToken= ls("token")
  const defaultImage = 'https://randomuser.me/api/portraits/men/91.jpg'


  const removeStringFromDate=()=>{
  let str = "2017-02-20 15:25:56 UTC";
  const str1=str.replace("15:25:56 UTC", "")
  return str1
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
  const [InformationUser, setUser] = useState({ name:"", username:"", email:"", password:""})
  const[user_login,setUser_login]=useState({email:"",password:""})
  const [userInfo,setUserInfo]=useState({})
  const [errorMessage,setErormessage]=useState("")
  const [token,setToken]=useState("")
  const [favouriteMovies,setmovies]=useState([])


  const createUserAction = (e) => {
    const value = e.target.value;
  
    setUser({...InformationUser,[e.target.name]:value})
  
  }

  const createUserLoginAction=(e)=>{
const value=e.target.value;
setUser_login({...user_login,[e.target.name]:value})
  }
// Shuffle array and return 1 item
  function shuffle(array) {
    
    let currentIndex= array.find((array)=>{
      return array.offical!=false 
    })
    
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
    
   
    return array[0];
  }
//  The first API Generates movie "id" needed for the video API
  useEffect(() => {
    // callig API to get the wishlist of movies
  
    const data={  adult: false,
      backdrop_path: "/1xt57PFCseTBZVXqzMrb00fJwq8.jpg",
      genre_ids: (2) [10770, 99],
      id: 635293,
      media_type: "movie",
      original_language: "en",
      original_title: "Game Of Thrones",
      overview: "Across the past seven seasons of the legendary series Game of Thrones, many behind-the-scenes had happened. In this special movie, we see the cast recount their memorable moments that they lived. On another hand, the movie presents interviews with some celebrities that they are real fans for the series.",
      popularity: 13.836,
      poster_path: "/y9jXHOydIUjRo1fxUvH7UxNeFH.jpg",
      release_date: "2019-12-15",
      title: "Game Of Thrones: Greatest Moments",
      video: true,
      vote_average: 8.6,
      vote_count: 21,}
    const video={
id: "61ae8487f8aee8001a94e098",
iso_639_1: "en",
iso_3166_1: "US",
key: "KPLWWIOCOOQ",
name: "Official Trailer 2",
official: true,
published_at: "2021-12-06T17:00:29.000Z",
site: "YouTube",
size: 1080,
type: "Trailer",}

    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.PRIVATE_API_KEY}`)
      .then((response) => {
  
        let oneTreading_Movie=shuffle(response.data.results)
        let key= oneTreading_Movie.id
   
        
          setRandomId(oneTreading_Movie)
       

   axios.get(`https://api.themoviedb.org/3/movie/${key}/videos?api_key=${process.env.PRIVATE_API_KEY}&language=en-US`)
      .then(function (response) {
        
    let filtermovies= response.data.results
   

 if(!filtermovies.length>0){
  setRandomId(data)
  setkey(video)
  
  
 }else{
  setkey(shuffle(filtermovies))
 }
   
   
      }).catch((error)=>{
      if(error.response.status===404 ||error.response.status===204 ||error.response.status===500) 
      setRandomId(data)
      setkey(video)

      })
      })

  }, [favouriteMovies])
 
 


  // This Method is to add
  const WishlistHandler = async(video, id) => {
    console.log({video})
   await axios({
      
      method: "post",
      url: "https://crowded-turtleneck-eel.cyclic.app/movie",
      data:video,
  
      headers:{
          "Content-Type": "application/json",
          Authorization:"Bearer " + localstorageToken,
      
      }
    }).then((response)=>{
   setmovies(current => [...current, response.data])
     

    }).catch((e)=>{
console.log({e})
    });
    // let localstorageToken= ls("token")

    // let mylist = ls('list')
    // let itemGet;
    // if (mylist !== null) {
    //   itemGet = ls.get('list')
    //   // if (!itemGet.some(item => item.mediaId === video.mediaId)) {
    //   //   itemGet.push(video)
    //   //   ls.set('list', itemGet)
    //   //   SetWishList(itemGet)
    //   // }

    //   itemGet.push(video)
    //   ls.set('list', itemGet)
    //   SetWishList(itemGet)


    // } else {
    
    //   ls.set('list', [video])
    // }
    
    



  }



//method remove movies

  const RemoveMovieList = async(VideoId) => {
    console.log(VideoId)

  await axios({
      
    method: "delete",
    url: `https://crowded-turtleneck-eel.cyclic.app//movie/wishlist/${VideoId}`,
    

    headers:{
        "Content-Type": "application/json",
        Authorization:"Bearer " + localstorageToken,
    
    }
  }).then((response)=>{
    console.log({deleted:response})
    setmovies((prevState) => {
      console.log({prevState})
      const updatedItems = prevState.filter((item) => item !== VideoId);
      console.log({updatedItems})
      return updatedItems ;
    });
   

  }).catch((e)=>{
console.log({e})
  });
   
    // let myList = ls('list')
    // myList = myList.filter((item) => item.mediaId !== VideoId)
    // ls.set('list', myList)
    // SetWishList(myList)

  }
  return (

    <StateContext.Provider value={{
      InformationUser, createUserAction, defaultImage, sideNavOpen,
      setSideNavOpen, accountOpen, setAccountOpen,
      searchOpenAction, setsearchOpenAction,
      searchMovie, setsearchMovieAction, thumbTypes,
      WishList, WishlistHandler, RemoveMovieList, key, setkey, 
      randomid,userInfo,setUserInfo,user_login,setUser_login,
      createUserLoginAction,errorMessage,setErormessage,token,setToken,favouriteMovies,setmovies

    }}>

      {children}
    </StateContext.Provider>
  )
}