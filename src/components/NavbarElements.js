import Button from "./Button"

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