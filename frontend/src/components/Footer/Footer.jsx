import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo repellendus, ex id nisi soluta exercitationem?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delievery</li>
                        <li>Privacy & Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <ul>
                        <li>+971 55 937 1151</li>
                        <li>luqmanrajput012@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footeer-copyright">Copyright 2024 &copy; Tomato.com - All Rights Reserved</p>
        </div>
    )
}

export default Footer