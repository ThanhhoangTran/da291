import './registerpage.css'
import {Link} from 'react-router-dom'
import {Facebook, Twitter, Google} from  '@mui/icons-material'
const RegisterPage = ()=>{
    return (
        <div id="loginPage">
            <div className="propertyPage_label">
                <h3>Register Page</h3>
                <p><Link to="/">Home</Link>/<a href="#">Register Page</a></p>
            </div>
            <div className="section">
                <div className="loginPage_container">
                    <div className="loginPage_register">
                        <h4>Already have an Account?</h4>
                        <button>
                            <Link to="/" className="header_btn btn">Login</Link>
                        </button>
                    </div>
                    <div class="box"></div>
                    <div className="loginPage_login">
                        <h3>Register</h3>
                        <input type="text" placeholder='First Name'/>
                        <input type="text" placeholder='Last Name'/>
                        <input type="email" name="" id="" placeholder='Email'/>
                        <input type="password" placeholder='Password'/>
                        <button>
                            <Link to="/" className="header_btn btn">Create Account</Link>
                        </button>
                    </div>
                    <ul className="loginPage_method">
                        <li><a href=""><Facebook className="icon"/>Login with Facebook</a></li>
                        <li><a href=""><Twitter className="icon"/>Login with Twitter</a></li>
                        <li><a href=""><Google className="icon"/>Login with Google</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage;