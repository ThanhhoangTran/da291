import './agent.css';
import Agent_List from './Agent_List';
import {Link} from 'react-router-dom'
const Agent = ()=>{
    return (
        <div id="agent">
            <div className="propertyPage_label">
                <h3>Our Agent</h3>
                <p><Link to="/">Home</Link>/<a href="#">Agent</a></p>
            </div>  
            <div className="section">
                <div className="agent_container">
                    <div className="agent_header">
                        <div className="agent_title">Our Services</div>
                        <h2>Our Main Focus</h2>
                    </div>
                    <div className="agent_list_container">
                        <Agent_List/>
                        <Agent_List/>
                        <Agent_List/>
                        <Agent_List/>
                        <Agent_List/>
                        <Agent_List/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Agent;