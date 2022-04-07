import React, { useState } from 'react'
import './profile.css'
import {Link} from 'react-router-dom'
import Chart from 'react-apexcharts'
const chartOptions = {
    series: [
        {
            name: 'Sales',
            data: [40, 70, 20, 90, 36, 80, 30, 91, 60,56, 75]
        },
        {
            name:  'Buy',
            data: [40, 30, 70, 80, 40, 16, 40, 21, 50, 10, 34]
        }
    ],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oc', 'Nov', 'Dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }

}
const userInfo = {
    name: 'Berizsin',
    address: 'Hai Lang, Quang Tri',
    phone: '+09035254824',
    email: 'xyz123@gmail.com',
    wallet: '89708968083'
}
const Profile = () => {
    const [userData, setUserData] = useState(userInfo);
    const updateDataUser = (field) => e => setUserData({...userData, [field]: e.target.value})
  return (
    <div id="profile">
         <div className="propertyPage_label">
                <h3>Profile</h3>
                <p><Link to="/">Home</Link>/<a href="#">Profile</a></p>
        </div>
        <div className="section">
            <div className="profile__container">
                <div className="personal_box">
                    <h2>Personal</h2>
                    <div className={`personal_box-field ${userData.name ? 'active': ''}`}>
                        <input type="text" onChange={updateDataUser("name")} value={userData.name ? userData.name : ''} id="name"/>
                        <label htmlFor="name">Your Name</label>
                    </div>
                    <div className={`personal_box-field ${userData.email ? 'active': ''}`}>
                        <input type="email" onChange={updateDataUser("email")} value={userData.email ? userData.email: ''} id="email"/>
                        <label htmlFor="email">Your Email</label>
                    </div>
                    <div className={`personal_box-field ${userData.phone ? 'active': ''}`}>
                        <input type="text" onChange={updateDataUser("phone")} value={userData.phone ? userData.phone: ''} id="phone"/>
                        <label htmlFor="phone">Your Phone</label>
                    </div>
                    <div className={`personal_box-field ${userData.address ? 'active': ''}`}>
                        <input type="text" onChange={updateDataUser("address")} value={userData.address ? userData.address : ''} id="address"/>
                        <label htmlFor="address">Your Address</label>
                    </div>
                    <div className={`personal_box-field ${userData.wallet ? 'active': ''}`}>
                        <input type="text" onChange={updateDataUser("wallet")} value={userData.wallet ? userData.wallet : ''} id="wallet"/>
                        <label htmlFor="wallet">Your Wallet</label>
                    </div>
                    <div className='btn-updateUser'>
                    <button>Update Now</button>
                    </div>
                </div>
                <div className="personal_summery">
                    <h2>Revenou Source</h2>
                    <Chart options={chartOptions.options} type="line" series={chartOptions.series} height="100%"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile