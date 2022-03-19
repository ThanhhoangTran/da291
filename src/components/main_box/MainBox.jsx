import './mainbox.css'
import {ArrowForward} from '@mui/icons-material'
import img from '../../images/21.png'
const MainBox = ()=>{
    return (
        <div className="mainFocus_gallery_box">
            <div className="mainFocus_box_img">
                <img src={img} alt="" />
            </div>
            <div className="mainFocus_box_content">
                <h4>Buy a home</h4>
                <p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                <a>find a home<ArrowForward className="icon"/></a>
            </div>
        </div>
    )
}
export default MainBox;