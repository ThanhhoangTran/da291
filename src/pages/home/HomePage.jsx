import './home.css'
import Filter_Header from '../../components/filter_header/Filter_Header'
import PostSlide from './PostSlide'
import Gallery_Box from '../../components/gallery_box/Gallery_Box'
import Card_Sale from '../../components/cardSales/Card_Sale'
import MainList from './MainList/MainList'
const HomePage = ()=>{
    return (
        <>
            <div className="header">    
                <div className="header_background"></div>
                <div className="header_content">
                    <div class="header_content_text">
                        <h2>Find Your Dream House</h2>
                        <p>Your Property, Our Priority and From as low as $10 per day with limited time offer discounts</p>
                        <Filter_Header/>
                    </div>
                </div>
            </div>
            <PostSlide/>
            <div id="popularPlaces">
                <div class="section">
                    <div class="popularPlaces_container">
                        <div class="popularPlaces_title">
                            <h2>Most Popular Places</h2>
                            <p>Find Properties In These Cities.</p>
                        </div>
                        <div class="popular_gallerys">
                            <Gallery_Box/>
                            <Gallery_Box/>
                            <Gallery_Box/>
                            <Gallery_Box/>
                            <Gallery_Box/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="propertySales">
                <div class="section">
                    <div class="propertySales_container">
                        <div class="propertySales_title">
                            <h2>Property for Sale</h2>
                            <p>one of the most popular real estate company all around USA. You can find your dream property or build property with us</p>
                        </div>
                        <div class="propertySales_gallery">
                            <Card_Sale/>
                            <Card_Sale/>
                            <Card_Sale/>
                            <Card_Sale/>
                            <Card_Sale/>
                            <Card_Sale/>
                            <Card_Sale/>
                            <Card_Sale/>
                            
                        </div>
                    </div>
                </div>
            </div>
            <MainList/>
        </>
    )
}
export default HomePage