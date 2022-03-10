export interface TProps {
    quote: string;
    name: string;
    position: string;
    picture: any;
}

export const Testimonial:React.FC<TProps> = (props) => {
    return(
        <div className="testimonial-shadow-1">
            <div className="testimonial-shadow-2">
                <div className="testimonial">
                    <p>{props.quote}</p>
                    <div className="profile">
                    <img src={props.picture} alt="profile pic" />
                    <div className="names">
                        <h5>{props.name}</h5>    
                        <p>{props.position}</p>
                    </div>    
                    </div>    
                </div>
            </div>
        </div>
    )
}