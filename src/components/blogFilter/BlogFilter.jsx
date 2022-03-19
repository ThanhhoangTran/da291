import './blogfilter.css'
import {Search} from '@mui/icons-material'
const BlogFilter = ()=>{
    return (
        <div className="blogPage_filter">
                         <div className="blogPage_filter_search">
                             <h4>Search</h4>
                             <div className="blogPage_search">
                                 <input type="text" placeholder='Search article ...'/>
                                 <button><Search/></button>
                             </div>
                         </div>
                        <div className="blogPage_filter_category">
                            <h4>Category</h4>
                            <ul className="blogPage_category">
                                <li><a href="">Apartement<span>14</span></a></li>
                                <li><a href="">Family house<span>4</span></a></li>
                                <li><a href="">Modern Villa<span>2</span></a></li>
                                <li><a href="">Office<span>10</span></a></li>
                                <li><a href="">Land<span>12</span></a></li>
                            </ul>
                        </div>
                     </div>
    )
}
export default BlogFilter;