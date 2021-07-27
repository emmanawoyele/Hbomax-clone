

 function PosterView(props) {
    const loopComp=(comp,digit)=>{
      let thumbNails=[]
      for(let index =1; index<=digit;index++){
          thumbNails.push(comp)
      }
return thumbNails
    }
   return (<div className="poster-view-list">
       <h3 className="poster-view-list__title"> Movies </h3>
       <div className="poster-view-list__thumbnails"> 
  
       {loopComp(     <div className="poster-view-list__thumbnail"> 
       <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"/>
       <div className="poster-view-list__top-layer">
           <i className="fas fa-play"></i>
       </div>
       </div>,10)}
       
       </div>
   </div>
   )
}
export default PosterView