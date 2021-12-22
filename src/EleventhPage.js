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
    <h1>But Gamera was not alone...</h1>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/TenthPage">last page</Link>
            </li>
            <li>
                <Link to="/TwelfthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default EleventhPage