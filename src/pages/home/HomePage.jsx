import './home.css'
import Filter_Header from '../../components/filter_header/Filter_Header'
import PostSlide from './PostSlide'
import City from '../../components/City'
import Card_Sale from '../../components/cardSales/Card_Sale'
import MainList from './MainList/MainList'
import useFetchingData from '../../sevices/useFetchingData'
import {useMemo } from 'react'
const HomePage = ()=>{
    let params = useMemo(()=>({q: 'villa', per_page: 12}), []);
    const {gallerys, loading} = useFetchingData(params)
    return (
        <>
            <div className="header">    
                <div className="header_content">
                    <div className="header_content_text">
                        <h2>Find Your Dream House</h2>
                        <p>Your Property, Our Priority and From as low as $10 per day with limited time offer discounts</p>
                        <Filter_Header/>
                    </div>
                </div>
            </div>
            <PostSlide/>
            <div id="popularPlaces">
                <div className="section">
                    <div className="popularPlaces_container">
                        <div className="popularPlaces_title">
                            <h2>Most Popular Places</h2>
                            <p>Find Properties In These Cities.</p>
                        </div>
                        <City/>
                    </div>
                </div>
            </div>
            <div id="propertySales">
                <div className="section">
                    <div className="propertySales_container">
                        <div className="propertySales_title">
                            <h2>Property for Sale</h2>
                            <p>one of the most popular real estate company all around VietNam. You can find your dream property or build property with us</p>
                        </div>
                        <div className="propertySales_gallery">
                            {loading && <h2 className="loadingData">Loading...</h2>}
                            {gallerys.map((item, index)=>{
                                return (<Card_Sale key={index} id={item.id} image={item.webformatURL} name={item.tags} select="all" feature/>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <MainList/>
        </>
    )
}
export default HomePage