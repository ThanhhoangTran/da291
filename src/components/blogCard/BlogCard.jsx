import './blogcard.css'
import img from '../../images/blog3.jpg'
import {CalendarMonth} from '@mui/icons-material'
import {Link, useRouteMatch} from 'react-router-dom'
const BlogCard = ()=>{
    let {path, url} = useRouteMatch();
    return (
        <div className="blogPage_box">
            <div className="blogPage_box_img">
                <img src={img} alt="" />
                <div className="blogPage_overlay">
                    <a to="/">View Post</a>
                </div>
            </div>
            <div className="blogPage_content">
                <h3 className="blogPage_title">Duplex Appartment Latest Design</h3>
                <p className="blogPage_createAt"><CalendarMonth className="icon"/>May 10, 2018 / 10 pm</p>
                <p>Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete</p>
                <Link to={`${url}/1`}>Read More</Link>
            </div> 
        </div>
    )
}
export default BlogCard;