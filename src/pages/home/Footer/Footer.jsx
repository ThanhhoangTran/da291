import './footer.css'
import {LocationOnOutlined , PhoneInTalkOutlined, MailOutlineOutlined, Facebook, Twitter, LinkedIn, YouTube, ArrowRightAlt} from '@mui/icons-material';
import img from '../../../images/payment-4.png'
const Footer = ()=>{
    return (
        <div id="footer">
            <div className="footer_label">
                <div className="footer_label_title">
                    <h3>Looking for a dream home ?</h3>
                    <p>We can help you realize your dream of a new home</p>
                </div>
                <button><a>Explore Properties <ArrowRightAlt/></a></button>
            </div>
            <div className="footer_container">
                <div className="footer_box">
                    <h3 className="footer_logo">3H-Home</h3>
                    <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                    <div className='footer_link'>
                        <p><LocationOnOutlined className="icon"/>38 Bắc Đẩu, Thành phố Đà Nẵng</p>
                        <p><PhoneInTalkOutlined className="icon"/>0932581538</p>
                        <p><MailOutlineOutlined className="icon"/>thanhhoang280202@gmail.com</p>
                    </div>
                    <ul className='footer_contact'>
                        <li><a href=""><Facebook/></a></li>
                        <li><a href=""><Twitter/></a></li>
                        <li><a href=""><LinkedIn/></a></li>
                        <li><a href=""><YouTube/></a></li>
                    </ul>
                </div>
                <div className="footer_box">
                    <h3>Company</h3>
                    <ul className="box_list">
                        <li><a href=""><span>//</span>About</a></li>
                        <li><a href=""><span>//</span>Blog</a></li>
                        <li><a href=""><span>//</span>All Products</a></li>
                        <li><a href=""><span>//</span>Locations Map</a></li>
                        <li><a href=""><span>//</span>FAQ</a></li>
                        <li><a href=""><span>//</span>Contact us</a></li>
                    </ul>
                </div>
                <div className="footer_box">
                    <h3>Services</h3>
                    <ul className="box_list">
                        <li><a href=""><span>//</span>Order tracking</a></li>
                        <li><a href=""><span>//</span>Wish List</a></li>
                        <li><a href=""><span>//</span>Login</a></li>
                        <li><a href=""><span>//</span>My account</a></li>
                        <li><a href=""><span>//</span>Terms & Conditions</a></li>
                        <li><a href=""><span>//</span>Promotional Offers</a></li>
                    </ul>
                </div>
                <div className="footer_box">
                    <h3>Customer Care</h3>
                    <ul className="box_list">
                        <li><a href=""><span>//</span>Login</a></li>
                        <li><a href=""><span>//</span>My account</a></li>
                        <li><a href=""><span>//</span>Wish List</a></li>
                        <li><a href=""><span>//</span>Order tracking</a></li>
                        <li><a href=""><span>//</span>FAQ</a></li>
                        <li><a href=""><span>//</span>Contact us</a></li>
                    </ul>
                </div>
                <div className="footer_box">
                    <h3>We Accept</h3>
                    <div className="footer_img">
                        <img src={img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;