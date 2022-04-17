import './agentdetail.css'
import {Link} from 'react-router-dom'
import img from '../../../images/face.jpeg'
import {FacebookOutlined, Twitter, Instagram} from '@mui/icons-material'
const AgentDetail = ()=>{
    return (
        <div id="agentDetail">
             <div className="propertyPage_label">
                <h3>Agent Details</h3>
                <p><Link to="/">Home</Link>/<a href="#">Agent Details</a></p>
            </div>
            <div className="section">   
                <div className="agentDetail_container">
                    <div className="agentDetail_box">
                        <div className="agentDetail_img">
                            <img src={img} alt=""/>
                        </div>
                    </div>
                    <div className="agentDetail_content">
                        <h3>Name: <span>Berizsin</span></h3>
                        <p>Job: <span>Property Seller</span></p>
                        <p>Address: <span>123 Street, Da Nang, Viet Nam</span></p>
                        <p className='introduce'>Introduce: <span>I am a generous and easy-going person but when it comes to work I am a competitive perfectionist. I am also an optimistic and outgoing person so I have many friends and other social relationships.</span></p>
                        <div className="agent_contact"><FacebookOutlined className="icon"/><Twitter className="icon"/><Instagram className="icon"/></div>
                    </div>
                </div> 
                 
            </div>
        </div>
    )
}
export default AgentDetail
