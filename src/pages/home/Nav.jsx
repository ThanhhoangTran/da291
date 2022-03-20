import './nav.css'
import {ArrowForwardIos} from '@mui/icons-material'
import {Link} from 'react-router-dom'
const Nav = ()=>{
    return (
        <div className="nav">
                <h3 className="nav_logo">H3.Home</h3>
                <div className="nav_menu">
                    <ul className="nav_menu_list">
                        <li><Link to="/" className="item">Home</Link></li>
                        <li>
                            <a href="" className="item">Services</a>
                            <ul className="sub-dropdown">
                                <li><a href="">Servies</a></li>
                                <li><a href="">Single Servies</a></li>
                            </ul>
                        </li>
                        <li><a href="" className="item">Features</a></li>
                        <li>
                            <a href="" className="item">Properties</a>
                            <ul className="sub-dropdown">
                                <li><a href="">Properties</a></li>
                                <li><a href="">Properties Details</a></li>
                                <li><a href="">Add Properties</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="" className="item">Pages</a>
                            <ul className="sub-dropdown">
                                <li className="sub-dropdown_item">
                                    <Link to="/blog" className="drop-item">Blog Page <ArrowForwardIos className="icon"/></Link>
                                    <ul className="sub-dropdown-group">
                                        <li><Link to="/blog">Blog Page</Link></li>
                                        <li><Link>Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li><a href="" >About Page</a></li>
                                <li><a href="">Create Agency</a></li>
                                <li><Link to="/login">Login Page</Link></li>
                                <li><a href="">Register Page</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="" className="item">Agent</a>
                            <ul className="sub-dropdown">
                                <li><a href="">Agent</a></li>
                                <li><a href="">Agent Details</a></li>
                            </ul>
                        </li>
                        <li><Link to="/contact" className="item">Contact</Link></li>
                    </ul>
                </div>
        </div>
    )
}
export default Nav;