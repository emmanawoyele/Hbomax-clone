import PostModal from "../PostInputModal/PostInputModal";
function Backdrop(props) {
   
    const open_modal= props.openModal? <div   className="Backdrop"  >
     {props.children}
   </div>:null
    return ( 
       <>
    {open_modal}
       </>
     );
}

export default Backdrop;