import { useStateContext } from "../../HboProvider/hboprovider";

 function SearchModal(props) {
 
    const globalState =useStateContext()
    const createUserAction=(e)=>{
console.log(e.target.value)
        globalState.setsearchMovieAction(e.target.value)
        console.log(global.searchMovie)
    }
    const loopComp=(comp,digit)=>{
      let thumbNails=[]
      for(let index =1; index<=digit;index++){
          thumbNails.push(comp)
      }
return thumbNails
    }
   return (<div className={`search-modal ${globalState.searchOpenAction ?'search-modal__active' :''}` }>
       <div className="search-modal__group">
       <input onChange={createUserAction} className="search-modal__input"  placeholder="search for movies"type="text" value={global.searchMovie}/>
<div className="search-modal__close-btn" onClick={()=>globalState.setsearchOpenAction((prev)=>!prev)}>
    <i className="fas fa-times"/>
</div>
       </div>
       <h3 className="search-modal__title">Popular Searches</h3>
       <div className="search-modal__thumbnails"> 
  
       {loopComp(     <div className="search-modal__thumbnail"> 
       <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"/>
       <div className="search-modal__top-layer">
           <i className="fas fa-play"></i>
       </div>
       </div>,10)}
       
       </div>
   </div>
   )
}
export default SearchModal