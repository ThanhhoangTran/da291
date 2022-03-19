import './filter_header.css';
import {KeyboardArrowDown, Search} from '@mui/icons-material'
import { useState } from 'react'
const Filter_Header = ()=>{
    const [openState, setOpenState] = useState(null);
    const onChangeState = (e)=>{
        if(e.target.name == openState){
            setOpenState(null);
            return;
        }
        setOpenState(e.target.name);
    } 
    return (
        <div className="header_filter">
                        <input type="text" name="" id="" placeholder="Enter Address, City or State"/>
                        <div className={`header_filter_form ${openState == 'type' ? 'active' : ''}`}>
                            <div className="select" >
                                <a onClick={onChangeState} name="type">Any Type <KeyboardArrowDown className="icon"/></a>
                            </div>
                            <input type="hidden" name=""/>
                            <ul className="droped-down">
                                <li>For Rent</li>
                                <li>For Sale</li>
                                <li>For Buy</li>
                            </ul>
                        </div>
                        <div className={`header_filter_form ${openState == 'minPrice' ? 'active' : ''}`}>
                            <div className="select">
                                <a  onClick={onChangeState} name="minPrice">Min Price <KeyboardArrowDown className="icon"/></a>
                            </div>
                            <input type="hidden" name=""/>
                            <ul className="droped-down">
                                <li>300 $</li>
                                <li>400$</li>
                                <li>500$</li>
                                <li>600$</li>
                            </ul>
                        </div>
                        <div className={`header_filter_form ${openState == 'maxPrice' ? 'active' : ''}`}>
                            <div className="select">
                                <a onClick={onChangeState} name="maxPrice">Max Price <KeyboardArrowDown className="icon"/></a>
                            </div>
                            <input type="hidden" name=""/>
                            <ul className="droped-down">
                                <li>2000$</li>
                                <li>7000$</li>
                                <li>3000$</li>
                                <li>4000$</li>
                                <li>5000$</li>
                                <li>6000$</li>
                            </ul>
                        </div>
                        <div className="header_filter_search">
                            <a href=""><Search className="icon"/>Search</a>
                        </div>
                    </div>
    )
}
export default Filter_Header