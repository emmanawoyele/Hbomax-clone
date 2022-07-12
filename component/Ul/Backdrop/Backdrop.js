import PostModal from "../PostInputModal/PostInputModal";
function Backdrop(props) {
   
    const open_modal= props.openModal? <div  className="Backdrop">
     {props.children}
     
  // </div>:null
    return ( 
       <>
    {/* <div  onClick={props.OpenAndClose} className="Backdrop" style={{ transform:props.openModal? 'translateY(0)': 'translateY(-100vh)'}}>
      {props.children
      }
    </div> */}
    {open_modal}
       </>
     );
}

export default Backdrop;