import './propertydetails.css'
import {Link} from 'react-router-dom'
const PropertyDetails = ()=>{
    return (
        <div id="propertyDetails">
            <div className="propertyPage_label">
                <h3>Properties Details</h3>
                <p><Link to="/">Home</Link>/<a href="#">Properties Details</a></p>
             </div>
            <div className="section">
                <div className="propertyDetails_container">
                    <p>Property details</p>
                </div>
            </div>
        </div>
    )
}
export default PropertyDetails