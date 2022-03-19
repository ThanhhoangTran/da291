import './card_sale.css'
import gallery from '../../images/gallery14.jpg'
const Card_Sale = ()=>{
    return (
        <div class="propertySales_gallery_box">
            <a href="" class="gallery_box_image">
                <img src={gallery} alt=""/>
                <h3>Mariyasa de Casel</h3>
            </a>
            <span class="image-label">Featured</span>
            <span class="image-title">FOR RENT</span>
            <div class="gallery_box_desc">
                <p>22 First street, Chicago, USA 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                <h3 class="gallery_box_price">Price $1,25,000</h3>
            </div>
        </div>
    )
}
export default Card_Sale;