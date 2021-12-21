import Page16 from "./images//Page16.JPG";
import { Link } from "react-router-dom";

function SixteenthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page16} alt="first page"/>
    </div>
    <h1><span>It seemed all Godzilla wanted...</span></h1>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/FifteenthPage">last page</Link>
            </li>
            <li>
                <Link to="/LastPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default SixteenthPage