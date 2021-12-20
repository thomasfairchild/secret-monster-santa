import Page6 from "./images//Page6.JPG";
import { Link } from "react-router-dom";

function SixthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page6} alt="first page"/>
    </div>
    <h2>Gamera received something...</h2>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/FifthPage">last page</Link>
            </li>
            <li>
                <Link to="/SeventhPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default SixthPage