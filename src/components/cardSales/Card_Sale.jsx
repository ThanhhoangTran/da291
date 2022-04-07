import './card_sale.css'
import {Link} from 'react-router-dom'
const Card_Sale = (props)=>{
    const type = ['RENT', 'SALES'][Math.floor(Math.random()*2)]
    return (
        <div className="propertySales_gallery_box">
            <Link to="/listproperty/1" className="gallery_box_image">
                {props.image ? (
                <>
                    <img src={props.image} alt=""/>
                    <h3>{props.name.split(',')[0]}</h3>
                </>)
                :"Thiếu ảnh"}
            </Link>
            {props.feature && <span className="image-label">Featured</span>}
            <span className="image-title">FOR {props.select ==='all' ? type : props.select.toUpperCase()}</span>
            <div className="gallery_box_desc">
                <p>22 First street, Ha Noi, Viet Nam 1200 Sqft, 3 Bed, 2 Bath, 1 Garage</p>
                <h3 className="gallery_box_price">Price $1,25,000</h3>
            </div>
        </div>
    )
}
export default Card_Sale;