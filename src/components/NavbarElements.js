import Button from "./Button"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';


function NavbarElements({ location, text }){
    return (
        <ul>
            <li>
            <a href={location}>{text}</a>
            </li>
        </ul>
    )
}

export default NavbarElements