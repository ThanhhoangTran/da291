import './property.css';
import {Folder} from '@mui/icons-material'
import { Link } from 'react-router-dom';
const Property = ()=>{
    return (
        <div id="propertyPage">
            <div className="propertyPage_label">
                <h3>Add Properties</h3>
                <p><Link to="/">Home</Link>/<a href="#">Add Properties</a></p>
             </div>
            <div className="section">
                <div className="propertyPage_container">
                    <div className="propertyPage_desc">
                        <div className="desc_step">
                            <h4>Step # 1</h4>
                            <h3>Description</h3>
                            <div className="desc_title">
                                <div className="desc_pro_title">
                                    <h5>Property Title</h5>
                                    <input type="text" placeholder='Enter your title here'/>
                                </div>
                                <div className="desc_pro_price">
                                    <h5>Price</h5>
                                    <input type="number" placeholder='Price $'/>
                                </div>
                            </div>
                            <div className="desc_text">
                                <h5>Property text</h5>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Write here'></textarea>
                            </div>
                        </div>
                        <div className="desc_step">
                            <h4>Step # 2</h4>
                            <h3>Information</h3>
                           <div className="desc_title">
                                <div className="desc_pro_address">
                                    <h5>Address</h5>
                                    <input type="text" placeholder='Address' />
                                </div>
                                <div className="desc_pro_subaddress">
                                    <h5>Sub-Address</h5>
                                    <input type="text" placeholder='Sub-Address here'/>
                                </div>
                           </div>
                           <div className="desc_title">
                               <div className="desc_pro_address">
                                   <h5>Latitude</h5>
                                   <input type="text" placeholder='Latitude (for Google Maps)'/>
                               </div>
                               <div className="desc_pro_subaddress">
                                   <h5>Longitude</h5>
                                   <input type="text" placeholder='Longitude (for Google Maps)'/>
                               </div>
                           </div>
                           <div className="desc_title">
                               <div className="desc_pro_address">
                                   <h5>Select Categories</h5>
                                   <select>
                                       <option>Apartment</option>
                                       <option>House</option>
                                       <option>Land</option>
                                       <option>Offices</option>
                                   </select>
                               </div>
                               <div className="desc_pro_subaddress">
                                   <h5>Status</h5>
                                   <select name="" id="">
                                       <option>Rentals</option>
                                       <option>Sales</option>
                                   </select>
                               </div>
                           </div>
                        </div>
                        <div className="desc_step">
                            <h4>Step # 3</h4>
                            <h3>Image gallery</h3>
                            <div className="desc_step_image">
                                    <label htmlFor='file'>
                                        <Folder/>Browser Images
                                    </label>
                                    <input type="file" id="file"/>
                            </div>
                            <h3>Video Presentation</h3>
                            <div className="desc_step_video">
                                    <label htmlFor='video'>
                                        Add Video
                                    </label>
                                    <input type="file" id="video"/>
                            </div>
                        </div>
                        <div className="desc_step">
                            <h4>Step # 4</h4>
                            <h3>Details</h3>
                            <div className="desc_title_details">
                                <div className="desc_pro_address">
                                    <h5>Rooms</h5>
                                    <input type="number" placeholder='Rooms' />
                                </div>
                                <div className="desc_pro_address">
                                    <h5>Bedrooms</h5>
                                    <input type="number" placeholder='Bedrooms'/>
                                </div>
                                <div className="desc_pro_address">
                                    <h5>Bathrooms</h5>
                                    <input type="number" placeholder='Bathrooms'/>
                                </div>
                                <div className="desc_pro_subaddress">
                                    <h5>Garages</h5>
                                    <input type="text" placeholder='Garages '/>
                                </div>
                                <div className="desc_pro_subaddress">
                                    <h5>Area</h5>
                                    <input type="number" placeholder='Area (quft)'/>
                                </div>
                           </div>
                        </div>
                    </div>
                    <button className='submit'>Add Property</button>
                </div>
            </div>
        </div>
    )
}
export default Property;