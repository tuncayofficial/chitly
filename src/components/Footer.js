import { AiFillGithub, AiFillInstagram,  } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

function Footer(){
    return (
        <footer>
          <div className="icons">
          <AiFillGithub size = {35} />
          <AiFillInstagram size = {35} />
          <FcGoogle size = {35} />
          </div>
          Chitly 2021. All rights reserved.
        </footer>
    )
}

export default Footer