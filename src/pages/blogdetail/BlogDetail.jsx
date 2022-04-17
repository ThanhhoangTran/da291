import './blogdetail.css'
import {Link} from 'react-router-dom'
import {FacebookOutlined, Google, Twitter, FormatQuote, Instagram, LinkedIn, Telegram} from '@mui/icons-material'
import img from '../../images/bg5.jpg'
import face from '../../images/face.jpeg'
import BlogFilter from '../../components/blogFilter/BlogFilter'
const BlogDetail = ()=>{
    return (
        <div id="blogDetail">
            <div className="propertyPage_label">
                <h3>Blog Details</h3>
                <p><Link to="/">Home</Link>/<a href="#">Blog Details</a></p>
             </div>
            <div className="section">
                <div className="blogDetail_container">
                    <div className="blogDetail_content">
                        <h3>How To Have Dream Home At A Low Cost</h3>
                        <div className="blogDetail_byUser">
                            <div className="blogDetail_byUser_img">
                                <img src={face} alt="" />
                            </div>
                            By <span>John </span>,   Descember 09, 2016    In <span>Business</span>
                        </div>
                        <img src={img} alt="" />
                        <div className="blogDetail_text">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia..</p>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <blockquote>
                                <p><FormatQuote className="blockquote"/>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <cite>Tom Cruise</cite>
                            </blockquote>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div className="blogDetail_tag">
                            <p><strong>Tags: </strong><span>Apartment</span>, <span>Building</span>, <span>Real Estate</span></p>
                            <p class="tag_link"><strong>Share: </strong><a href=""><FacebookOutlined/></a><a href=""><Twitter/></a><a href=""><LinkedIn/></a><a href=""><Google/></a></p>
                        </div> 
                        <div className="blogDetail_author">
                            <div className="blogDetail_author_img">
                                <img src={face} alt="" />
                            </div>
                            <div className="blogDetail_author_say">
                                <h4>Author</h4>
                                <h5>Tom Cursor</h5>
                                <p>Hi, nice to meet you let me introduce for you, I am Berizsin freelancer designer & web programmer from Vietnam, base lampung</p>
                                <div className="author_link">
                                    <a href=""><FacebookOutlined/></a>
                                    <a href=""><Twitter/></a>
                                    <a href=""><Instagram/></a>
                                    <a href=""><Telegram/></a>
                                    <a href=""><LinkedIn/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blogDetail_section">
                        <BlogFilter/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogDetail