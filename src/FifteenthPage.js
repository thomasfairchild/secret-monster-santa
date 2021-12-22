import Page15 from "./images//Page15.JPG";
import { Link } from "react-router-dom";

function FifteenthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page15} alt="first page"/>
    </div>
    <h1>Gamera was speechless, he didn't know what to say...</h1>

    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/FourteenthPage">last page</Link>
            </li>
            <li>
                <Link to="/SixteenthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default FifteenthPage