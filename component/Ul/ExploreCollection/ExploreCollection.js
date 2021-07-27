

 function ExploreCollection(props) {
    const loopComp=(comp,digit)=>{
      let thumbNails=[]
      for(let index =1; index<=digit;index++){
          thumbNails.push(comp)
      }
return thumbNails
    }
   return (<div className="ExploreCollection-list">
       <h3 className="ExploreCollection-list__title"> Explore Collections</h3>
       <div className="ExploreCollection-list__thumbnails"> 
  
       {loopComp(     <div className="ExploreCollection-list__thumbnail"> 
       <img src="https://www.al.com/resizer/uQVPmZZslOXT0e_5eAHQa1rZ9So=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/entertainment_impact/photo/20563816-standard.jpg"/>
       <div className="ExploreCollection-list__top-layer">
           <i className="fas fa-play"></i>
       </div>
       </div>,10)}
       
       </div>
   </div>
   )
}
export default ExploreCollection