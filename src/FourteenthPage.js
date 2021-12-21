import Page14 from "./images//Page14.JPG";
import { Link } from "react-router-dom";

function FourteenthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page14} alt="first page"/>
    </div>
    <h2>...that wants to play!</h2>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/ThirteenthPage">last page</Link>
            </li>
            <li>
                <Link to="/FifteenthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default FourteenthPage