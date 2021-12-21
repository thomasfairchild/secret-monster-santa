import Page9 from "./images//Page9.JPG";
import { Link } from "react-router-dom";

function NinthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page9} alt="first page"/>
    </div>
    <h2>a gift Gamera would be playing with...</h2>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/EighthPage">last page</Link>
            </li>
            <li>
                <Link to="/TenthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default NinthPage