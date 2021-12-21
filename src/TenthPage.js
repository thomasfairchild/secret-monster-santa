import Page10 from "./images//Page10.JPG";
import { Link } from "react-router-dom";

function TenthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page10} alt="first page"/>
    </div>
    <h2>...'til the next sunrise.</h2>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/NinthPage">last page</Link>
            </li>
            <li>
                <Link to="/EleventhPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default TenthPage