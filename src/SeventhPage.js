import Page7 from "./images//Page7.JPG";
import { Link } from "react-router-dom";

function SeventhPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page7} alt="first page"/>
    </div>
    <h2>...he didn't know he needed.</h2>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/SixthPage">last page</Link>
            </li>
            <li>
                <Link to="/EighthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default SeventhPage