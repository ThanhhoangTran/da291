import {FacebookOutlined, Twitter, Instagram} from '@mui/icons-material'
import img from '../../images/face.jpg'
import './agent_list.css'
import {Link} from 'react-router-dom'
const Agent_List = ()=>{
    return (
        <div className="agent_list">
            <div className="agent_list_box">
                <div className="box_image">
                    <img src={img} alt="" />
                </div>
                <div className="agent_box_content">
                    <h3><Link to={`/agent/1`}>Berizsin</Link></h3>
                    <p>Property Seller</p>
                    <div className="agent_contact"><FacebookOutlined className="icon"/><Twitter className="icon"/><Instagram className="icon"/></div>
                </div>
            </div>
        </div>
    )
}
export default Agent_List;