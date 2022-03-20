import './contactpage.css'
import {Link} from 'react-router-dom'
import {LocationOnOutlined, PhoneInTalkOutlined, PublicOutlined} from '@mui/icons-material'
const ContactPage = ()=>{
    return (
        <div id="contactPage">
             <div className="propertyPage_label">
                <h3>Contact</h3>
                <p><Link to="/">Home</Link>/<a href="#">Contact</a></p>
            </div>
            <div className="section">
                <div className="contactPage_container">
                    <div className="contactPage_left">
                            <h4>get in<span>touch</span></h4>
                            <p>sed do eiusmod tempor dolor sit ame tse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minim veniam, quis nostrud exercitation oris nisi</p>
                            <div className="contactPage_contact">
                                <LocationOnOutlined className="icon"/>
                                <div className="contactPage_contact_desc">
                                    <p>38 bắc đẩu</p>
                                    <p>125 , Việt Nam</p>
                                </div>
                            </div>
                            <div className="contactPage_contact">
                                <PhoneInTalkOutlined className="icon"/>
                                <div className="contactPage_contact_desc">
                                    <p>Telephone :<span>+88 (012) 356 958 45</span></p>
                                    <p>Telephone :<span>+88 (012) 356 958 45</span></p>
                                </div>
                            </div>
                            <div className="contactPage_contact">
                                <PublicOutlined className="icon"/>
                                <div className="contactPage_contact_desc">
                                    <p>Email: <span>info@gmail.com</span></p>
                                    <p>Web: <span>www.example.com</span></p>
                                </div>
                            </div>
                    </div>
                    <div className="contactPage_right">
                        <h4>Leave a Message</h4>
                        <div className="contactPage_right_input">
                            <input type="text" placeholder='Your Name'/>
                            <input type="email" placeholder='Email'/>
                        </div>
                        <textarea name="" placeholder='Message'></textarea>
                        <button>
                            <Link to="/" className="header_btn btn">Send</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactPage;