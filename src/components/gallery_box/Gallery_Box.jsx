import './gallery_box.css'
import city from "../../images/city3.jpg"
const Gallery_Box = ()=>{
    return (
        <a class="popular_gallery_box" href="#">
                        <img src={city} alt="" />
                        <div class="popular_overlay">
                            <div class="popular_box_content">
                                <h4>Tokyo</h4>
                                <p>70 Properties</p>
                            </div>
                        </div>
        </a>
    )
}
export default Gallery_Box;