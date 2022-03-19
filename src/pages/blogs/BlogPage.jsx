import { Link } from 'react-router-dom';
import BlogCard from '../../components/blogCard/BlogCard';
import './blogpage.css';
import BlogFilter from '../../components/blogFilter/BlogFilter';
const BlogPage = ()=>{
    return (
        <div id="blogPage">
             <div className="propertyPage_label">
                <h3>Blog</h3>
                <p><Link to="/">Home</Link>/<a href="#">Blog</a></p>
             </div>
             <div className="section">
                 <div className="blogPage_container">
                     <div className="blogPage_gallery">
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                     </div>
                     <BlogFilter/>
                 </div>
             </div>
        </div>
    )
}
export default BlogPage