import Button from "./Button"

function NavbarElements({ location, text }){
    return (
        <ul>
            <li>
            <a href={location}><strong>{text}</strong></a>
            </li>
        </ul>
    )
}

export default NavbarElements