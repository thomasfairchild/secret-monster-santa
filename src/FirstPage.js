import Page1 from "./images//Page1.JPG";
import { Link } from "react-router-dom";

function FirstPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page1} alt="first page"/>
    </div>
    <h2>'Twas the night before Christmas when Gamera arrived...

    In a far-off land where only the strong survived.</h2>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/">last page</Link>
            </li>
            <li>
                <Link to="/SecondPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default FirstPage