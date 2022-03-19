import './mainlist.css'
import MainBox from '../../../components/main_box/MainBox'
const MainList = ()=>{
    return (
        <div id="mainFocus">
        <div className="section">
            <div className="mainFocus_container">
                <div className="mainFocus_header">
                    <div className="mainFocus_title">Our Services</div>
                    <h2>Our Main Focus</h2>
                </div>
                <div className="mainFocus_gallerys">
                   <MainBox/>
                   <MainBox/>
                   <MainBox/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default MainList