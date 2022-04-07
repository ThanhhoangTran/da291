import './gallery_box.css'
const Gallery_Box = ({image, name, id, pro})=>{
    return (
        <a className="popular_gallery_box" href="#">
                        <img src={image} alt="" />
                        <div className="popular_overlay">
                            <div className="popular_box_content">
                                <h4>{name.split(', ')[0].replace(name.split(', ')[0].charAt(0), name.split(', ')[0].charAt(0).toUpperCase())}</h4>
                                <p>{pro} Properties</p>
                            </div>
                        </div>
        </a>
    )
}
export default Gallery_Box;