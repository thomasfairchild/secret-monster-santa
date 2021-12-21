import Page11 from "./images//Page11.JPG";
import { Link } from "react-router-dom";

function EleventhPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page11} alt="first page"/>
    </div>
    <h2>But Gamera was not alone...</h2>
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

export default EleventhPage