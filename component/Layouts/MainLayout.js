import Header from '../Ul/Header/Header'
import SideNav from '../Ul/SideNav/side_nav'
import Backdrop from '../Ul/Backdrop/Backdrop'


 function MainLayout(props) {
    return (
        
        
        <div>
          
        <div style={{background:"linear-gradient(100deg, rgb(2, 0,1)70%, rgba(2, 11, 31, 5) 50%, rgba(0, 212, 255, 0.1) 100%)",minHeight:"100vh",backgroundAttachment:"fixed"}}>
        

        <Header/>
        <SideNav/>
       
           <section className="content-container">
       
               {props.children}
             
              
           </section>
          
        </div>
        </div>
      
    
    )
}
export default MainLayout