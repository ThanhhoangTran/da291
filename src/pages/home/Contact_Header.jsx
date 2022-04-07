import Nav from "./Nav"
import './contact_header.css'
import {Link} from 'react-router-dom'
import DropDown from "../../components/dropdown/DropDown"
import {Person, Settings, Logout, Palette} from '@mui/icons-material'
import {useContext} from 'react'
import {userContext} from '../../sevices/Provider'
const renderUser = (item)=>(
    <div className="dropdown__box">
        <div className="dropdown_box-image">
            <img src={item.image} alt="" />
        </div>
    </div>
)
const contentDataUser = [
    {
        content: "Profile",
        tags: <Person/>,
        link: '/profile'
    },
    {
        content: "Settings",
        tags: <Settings/>,
        link: 'settings'
    },
    {
        content: "Logout",
        tags: <Logout/>,
        link: '/login'
    }
]
const renderDataUser = (item ,index)=>(
    <Link  className="link_user" to={item.link} key={index}>
        <div className="dropdown__content-items">
            {item.tags}
            <span>{item.content}</span>
        </div>
    </Link>
)
const renderColor = ()=>(
    <Palette style={{fontSize: "40px", color: "orange"}}className="icon-color"/>
)
const Contact_Header = ()=>{
    const userData = useContext(userContext);
    return (
        <>
         <div className="header_title">
                <h3>Call us - 0905819612</h3>
                <div className="header_buttons">
                    <button>
                        <Link to="/property" className="header_btn btn">Add Property</Link>
                    </button>
                    {
                        userData.login ? (<DropDown
                            customToggle={()=>renderUser(userData)}
                            contentData={contentDataUser}
                            renderItems={(item, index)=>renderDataUser(item, index)}
                       />): (<button style={{marginLeft: "10px"}}><Link to="/login" className="header_btn btn">Login</Link></button>)
                    }
                    <DropDown customToggle={()=>renderColor()}/>
                </div>
        </div>
        <Nav/>
    </>)
}
export default Contact_Header;