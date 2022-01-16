import { useState,useEffect } from 'react'

 function CastInfo(props) {
 
    const [loadingdata, setloading] = useState(true)
   const [credits, setcredits] = useState([])
   const [crew, setcrew] = useState([])
    useEffect( () => {
 
        const axios = require('axios')
        // Make a request for a user with a given ID
        async function fetchCast(){
            await axios.get(`https://api.themoviedb.org/3/${props.mediaType==="movie"?"movie":"tv"}/${props.creditsId}?api_key=${process.env.PRIVATE_API_KEY}&language=en-US`)
            .then(function (response) {
          
             
            setcredits(response.data.cast)
            setcrew(response.data.crew)
                // handle success
                setloading(false)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                
            })
            .then(function () {
                // always executed

            })
        }
       fetchCast()
    }, [props])
    const showCast =()=>{
      
     return credits.map((item)=>{
    
         if(loadingdata!=true){
         return (
         <ul key={item.id} className="cast-info__crew">
         <li>{item.character}</li>
         <li>{item.name}</li>
     </ul>
         )
     }else{
         return null
     }
     })
    }

    const showCrew =()=>{
     
     return crew.map((item)=>{
     
         if(loadingdata!=true){
         return <ul key={item.credit_id }className="cast-info__crew">
         <li>{item.job}</li>
         <li>{item.name}</li>
     </ul>
         
     }else{
          <p>laoding.....</p>
     }
     })
    }
    return (<div className="cast-info">
         <div className="cast-info__group-title">
            Cast
            
        </div>
        <div className="cast-info__list">
       
            {showCast()}
           
        </div>
        <div className="cast-info__group-title">
           Crew
        </div>
        <div className="cast-info__list">
           {showCrew()}
            
           
        </div> 
    </div>
        
    )
}
export default CastInfo
