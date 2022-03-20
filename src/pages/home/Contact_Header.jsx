import Nav from "./Nav"
import './contact_header.css'
import {Link} from 'react-router-dom'
const Contact_Header = ()=>{
    return (<>
         <div className="header_title">
                <h3>Call us - 0905819612</h3>
                <div className="header_buttons">
                    <button>
                        <Link to="/property" className="header_btn btn">Add Property</Link>
                    </button>
                    <Link to="/register" className="header_register">Register</Link>
                    <Link to="/login" className="header_login">Login</Link>
                </div>
        </div>
        <Nav/>
    </>)
}
export default Contact_Header;