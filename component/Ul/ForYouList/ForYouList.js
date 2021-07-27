

 function ForYouList(props) {
     const loopComp=(comp,digit)=>{
       let thumbNails=[]
       for(let index =1; index<=digit;index++){
           thumbNails.push(comp)
       }
return thumbNails
     }
    return (<div className="foryou-list">
        <h3 className="foryou-list__title"> For You </h3>
        <div className="foryou-list__thumbnails"> 
   
        {loopComp(     <div className="foryou-list__thumbnail"> 
        <img src="https://cdn.shopify.com/s/files/1/2812/6076/products/Gof_1200x.jpg?v=1619730460"/>
        <div className="foryou-list__top-layer">
            <i className="fas fa-play"></i>
        </div>
        </div>,10)}
        
        </div>
    </div>
    )
}
export default ForYouList