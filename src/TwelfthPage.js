import Page12 from "./images//Page12.JPG";
import { Link } from "react-router-dom";

function TwelfthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page12} alt="first page"/>
    </div>
    <h1><span>...in receiving glad tidings this day.</span></h1>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/EleventhPage">last page</Link>
            </li>
            <li>
                <Link to="/ThirteenthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default TwelfthPage