import './blogdetail.css'
import {Link} from 'react-router-dom'
import {FacebookOutlined, Google, Twitter, LinkedIn, FormatQuote} from '@mui/icons-material'
import img from '../../images/bg5.jpg'
import face from '../../images/face.jpg'
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
                        <h3>Tips And Tricks To Have Your Dream Home At A Low Cost</h3>
                        <div className="blogDetail_byUser">
                            <div className="blogDetail_byUser_img">
                                <img src={face} alt="" />
                            </div>
                            By <span>John Doe</span>,   Descember 09, 2016    In <span>Business</span>
                        </div>
                        <img src={img} alt="" />
                        <div className="blogDetail_text">
                            <p>The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.</p>
                            <p>To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.</p>
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
                                {/* <img src={face} alt="" /> */}
                            </div>
                            <div className="blogDetail_author_say">
                                <h4>Author</h4>
                                <h5>Thanh Hoang</h5>
                                <p>Hi, nice to meet you let me introduce for you, I am Thanh Hoang freelancer designer & web programmer from Vietnam, base lampung</p>
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