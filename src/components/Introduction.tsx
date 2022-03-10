import { image } from "../images/image"


export const Introduction:React.FC = () => {
    return(
        <div className="introduction">
            <img src={image.illustrationIntro} alt="soul less illustration of people putting files in a laptop" className="file-into-laptop" />
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <div className="get-started">Get Started</div>
        </div>
    )
}