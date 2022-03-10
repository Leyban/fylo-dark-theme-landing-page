import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { image } from "../images/image"

export const Footer:React.FC = () => {
    return(
        <div className="footer">
            <img src={image.logo} alt="product logo" />    
            <div className="details">
                <div className="address">
                    <img src={image.iconLocation} alt="location" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quo est quos cupiditate possimus dolores ipsam itaque dolore eum, exercitationem sunt facilis iste? Possimus at minus, quas ipsum excepturi voluptate?</p>
                </div>
                <div className="contact">
                    <div className="phone">
                        <img src={image.iconPhone} alt="phone" />    
                        <p>+1-543-123-4567</p>
                    </div>    
                    <div className="email">
                        <img src={image.iconEmail} alt="email" />    
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className="fylo-links">
                    <ul>
                        <li>About Us</li>    
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>    
                </div>
                <div className="concerns-links">
                    <ul>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>    
                </div>
                <div className="social-media">
                    <div className="circle">
                        <img src={image.facebookf} alt="facebook" className='facebook social-logo'/>
                    </div>
                    <div className="circle">
                        <img src={image.twitter} alt="twitter" className='twitter social-logo'/>
                    </div>
                    <div className="circle">
                        <img src={image.instagram} alt="instagram" className='instagram social-logo'/>
                    </div>
                </div>
            </div>
        </div>
    )
}