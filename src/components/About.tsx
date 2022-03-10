import { image } from "../images/image"

export const About:React.FC = () => {
    return(
        <div className="about">
            <img src={image.illustrationStayProductive} alt='three people holding text messages' className="text-holder-people"/>    
            <div className="stay-productive">
                <h1>Stay productive, wherever you are</h1>
                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <p><a href="#Nada">See how Fylo works <img src={image.iconArrow} /></a></p>
            </div>
        </div>
    )
}