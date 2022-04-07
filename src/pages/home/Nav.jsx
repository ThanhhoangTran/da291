import './nav.css'
import {ArrowForwardIos} from '@mui/icons-material'
import {Link} from 'react-router-dom'
const Nav = ()=>{
    return (
        <div className="nav">
                <h3 className="nav_logo">H3-Home</h3>
                <div className="nav_menu">
                    <ul className="nav_menu_list">
                        <li><Link to="/" className="item">Home</Link></li>
                        {/* <li><a href="" className="item">Features</a></li> */}
                        <li>
                            <a href="" className="item">Properties</a>
                            <ul className="sub-dropdown">
                                <li><Link to="/listproperty">Properties</Link></li>
                                <li><a href="">Properties Details</a></li>
                                <li><Link to="/property">Add Properties</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="" className="item">Pages</a>
                            <ul className="sub-dropdown">
                                <li className="sub-dropdown_item">
                                    <Link to="/blog" className="drop-item">Blog Page <ArrowForwardIos className="icon"/></Link>
                                    <ul className="sub-dropdown-group">
                                        <li><Link to="/blog">Blog Page</Link></li>
                                        <li><Link to="/blog/1">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">About Page</Link></li>
                                <li><Link to="/login">Login Page</Link></li>
                                <li><Link to="/register">Register Page</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/agent" className="item">Agent</Link>
                            <ul className="sub-dropdown">
                                <li><Link to="/agent">Agent</Link></li>
                                <li><Link to="/agent/1">Agent Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/report" className="item">Report</Link></li>
                        <li><Link to="/contact" className="item">Contact</Link></li>
                    </ul>
                </div>
        </div>
    )
}
export default Nav;