import { image } from "../images/image"

export const Navbar: React.FC = () => {
    return(
        <div className="navbar">
            <div className="company-logo">
                <img src={image.logo} alt="product logo" />
            </div>
            <div className="nav-buttons">
                <ul>
                    <li>Features</li>
                    <li>Theme</li>
                    <li>Sign in</li>
                </ul>    
            </div>
        </div>
    )
}