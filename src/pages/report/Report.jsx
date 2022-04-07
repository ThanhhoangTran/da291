import './report.css'
import {Link} from 'react-router-dom';
const report = ()=>{
    return (
        <div id="report">
            <div className="propertyPage_label">
                <h3>Report Page</h3>
                <p><Link to="/">Home</Link>/<a href="#">Report</a></p>
            </div>
            <div className="section">
                <div className="report_container">
                    
                </div>
            </div>
        </div>
    )
}
export default report;