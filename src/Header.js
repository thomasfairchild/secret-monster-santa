import { Link } from "react-router-dom";

function Header () {
    return (
        <ul>
            <li>
                <Link to="/">The Story</Link>
            </li>
            <li>
                <Link to="/MonsterHistory">Monsters and History</Link>
            </li>  
            <li>
                <Link to="/About">About</Link>    
            </li>  
        </ul>
    )
}

export default Header