import Page0 from './images/Page0.png';
import { Link } from "react-router-dom";


function Story() {
    return (
    <>
    <br>
    </br>
    <div className="Pages">
    <img src={Page0} alt="Page0"/>
    </div>
    <ul>
        <br>
        </br>
        <div className="PageShift">
            <li>
                <Link to="/FirstPage">START READING</Link>
            </li>
        </div>    
        </ul>
    </>   
    ) 
}

export default Story