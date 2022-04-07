import './about.css';
import {Link} from 'react-router-dom';
import MainList from '../home/MainList/MainList'
const About = ()=>{
    return (
        <div className="about">
             <div className="propertyPage_label">
                <h3>About Us</h3>
                <p><Link to="/">Home</Link>/<a href="#">About Us</a></p>
            </div>
            <div className="section">
                <div className="about_container">
                    <MainList/>
                </div>
            </div>
        </div>
    )
}
export default About;