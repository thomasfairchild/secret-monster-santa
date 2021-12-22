import Page5 from "./images//Page5.JPG";
import { Link } from "react-router-dom";

function FifthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page5} alt="first page"/>
    </div>
    <h1>But when the smoke cleared and the flames receded...</h1>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/FourthPage">last page</Link>
            </li>
            <li>
                <Link to="/SixthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default FifthPage