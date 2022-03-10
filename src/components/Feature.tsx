
export interface FProps {
    image: any;
    imageAlt: string;
    featureTitle: string;
    featureDesc: string;
}

export const Feature:React.FC<FProps> = (props) => {
    return (
        <div className="feature-container">
            <div className="img-container">
                <img src={props.image} alt={props.imageAlt} />
            </div>
            
            <h4>{props.featureTitle}</h4>
            <p>{props.featureDesc}</p>
        </div>
    )
}