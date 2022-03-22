import './listproperty.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Card_Sale from '../../components/cardSales/Card_Sale'
import {ArrowBack, ArrowForward} from '@mui/icons-material'
const ListProperty = ()=>{
    const [tab, setTab] = useState("all");
    return (
        <div id="listProperty">
            <div className="propertyPage_label">
                <h3>Properties</h3>
                <p><Link to="/">Home</Link>/<a href="#">Properties</a></p>
             </div>
            <div className="section">
                <div className="listProperty_container">
                    <div className="listProperty_container_tabs">
                        <button className={tab == "all"?"active":""} name="all" onClick={(e)=>setTab(e.target.name)}>All</button>
                        <button className={tab == "buy"?"active":""} name="buy" onClick={(e)=>setTab(e.target.name)}>For Buy</button>
                        <button className={tab == "rent"?"active":""} name="rent" onClick={(e)=>setTab(e.target.name)}>For Rent</button>
                        <button className={tab == "sale"?"active":""} name="sale" onClick={(e)=>setTab(e.target.name)}>For Sale</button>
                    </div>
                    <div className="listProperty_gallery">
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                        <Card_Sale/>
                    </div>
                    <div className="listProperty_pagination">
                        <div className="pagination_box">
                            <ArrowBack className="icon"/>
                        </div>
                        <div className="pagination_box active">
                            01
                        </div>
                        <div className="pagination_box">
                            02
                        </div>
                        <div className="pagination_box">
                            03
                        </div>
                        <div className="pagination_box">
                            04
                        </div>
                        <div className="pagination_box">
                            05
                        </div>
                        <div className="pagination_box">
                            <ArrowForward className="icon"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListProperty;