import Page17 from "./images//Page17.JPG";
import { Link } from "react-router-dom";

function LastPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page17} alt="first page"/>
    </div>
    <h1>...were friends to play with on this Winter Solstice Day!</h1>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/FifteenthPage">last page</Link>
            </li>
            <li>
                <Link to="/FirstPage">read again</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default LastPage