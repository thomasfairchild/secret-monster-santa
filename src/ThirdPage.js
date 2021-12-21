import Page3 from "./images//Page3.JPG";
import { Link } from "react-router-dom";

function ThirdPage() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page3} alt="first page"/>
    </div>
    <h1><span>What Gamera saw coming was truly scary!

    He knew of this creature, its battles legendary.</span> </h1>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/SecondPage">last page</Link>
            </li>
            <li>
                <Link to="/FourthPage">next page</Link>
            </li>
        </div>    
        </ul>  
    </>
    )
}

export default ThirdPage