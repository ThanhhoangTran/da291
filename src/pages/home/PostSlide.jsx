import './postSlide.css'
import {ArrowCircleUp} from '@mui/icons-material'
import sofa from '../../images/sofa.jpg'
import thumb1 from '../../images/thumb1.jpg'
import thumb2 from '../../images/thumb2.jpg'
import thumb3 from '../../images/thumb3.jpg'
const PostSlide = () =>{
    return (
        <div id="postSlide">
            <div class="section">
                    <div class="postSlide_container">
                        <div class="postSlide_content">
                            <h2>Homes around the world</h2>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                            <button> <a href=""><ArrowCircleUp style={{transform :'rotate(90deg)', marginRight: '7px'}}/> View for rent</a></button>
                        </div>
                        <img src={sofa} class="img"/>
                        <ul class="postSlide_groups">
                            <li><a href="">
                                <img src={thumb1} alt=""/>
                                <h3>Homes</h3>
                            </a></li>
                            <li><a href="">
                                <img src={thumb2} alt=""/>
                                <h3>Appartments</h3>
                            </a></li>
                            <li><a href="">
                                <img src={thumb3} alt=""/>
                                <h3>Garages</h3>
                            </a></li>
                        </ul>
                    </div>
            </div>
       </div>
    )
}
export default PostSlide;