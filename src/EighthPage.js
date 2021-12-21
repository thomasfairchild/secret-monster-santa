import Page8 from "./images//Page8.JPG";
import { Link } from "react-router-dom";

function EighthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page8} alt="first page"/>
    </div>
    <h1><span>In his claws was a gift that contained a surprise...</span> </h1>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/SeventhPage">last page</Link>
            </li>
            <li>
                <Link to="/NinthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default EighthPage