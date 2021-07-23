import NavbarElements from "./NavbarElements"
import React,{ useState } from "react"

function MultipleNavElem(props){
   const [open, setOpen] = useState(false)

   function handleOpen(){
       setOpen(prev => !prev)
   }

    return (
       <p>
        <NavbarElements onClick = {handleOpen} text = "Communities" />
        <ul className="multiple-nav-ul">
       <NavbarElements location = "/chitly/create/community" text = "Communities" />
       <NavbarElements location = "/chitly/communities" text = "Create Community" />
       </ul> 
       </p>
    )
}

export default MultipleNavElem