import { Link } from "react-router-dom";

function Header () {
    return (
        
        <ul>
        <div className="Header">
            <li>
                <Link to="/MonsterHistory">MONSTER HISTORY</Link>
            </li>  
            <li>
                <Link to="/">THE STORY</Link>
            </li>
            
            <li>
                <Link to="/About">ABOUT</Link>    
            </li>  
        </div>    
        </ul>
        
    )
}

export default Header