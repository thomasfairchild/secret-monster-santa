import Page4 from "./images//Page4.JPG";
import { Link } from "react-router-dom";

function FourthPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page4} alt="first page"/>
    </div>
    <h2>Not wanting to lose without putting up a fight,

    Gamera unleashed a burning blast of light!</h2>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/ThirdPage">last page</Link>
            </li>
            <li>
                <Link to="/FifthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default FourthPage