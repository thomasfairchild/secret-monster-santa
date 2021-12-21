import Page13 from "./images//Page13.JPG";
import { Link } from "react-router-dom";

function ThirteenthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page13} alt="first page"/>
    </div>
    <h2>For there's more than one Secret Monster Santa...</h2>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/TwelfthPage">last page</Link>
            </li>
            <li>
                <Link to="/FourteenthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default ThirteenthPage