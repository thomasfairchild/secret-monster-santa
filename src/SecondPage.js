import Page2 from "./images//Page2.JPG";
import { Link } from "react-router-dom";

function SecondPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page2} alt="first page"/>
    </div>
    <h2>The wind was howling like a mad siren,

    only to be drowned out by the roar of a mighty Titan.</h2>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/FirstPage">last page</Link>
            </li>
            <li>
                <Link to="/ThirdPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default SecondPage