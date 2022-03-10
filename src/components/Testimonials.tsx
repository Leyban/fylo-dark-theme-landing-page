import { image } from "../images/image"
import { Testimonial, TProps } from "./Testimonial"

export const Testimonials:React.FC = () => {

    const satish:TProps = {
        name: 'Satish Patel',
        position:'Founder & CEO, Huddle',
        quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        picture: image.profile1
    }
    const bruce:TProps = {
        name: 'Bruce McKenzie',
        position:'Founder & CEO, Huddle',
        quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        picture: image.profile2
    }
    const iva:TProps = {
        name: 'Iva Boyd',
        position:'Founder & CEO, Huddle',
        quote: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
        picture: image.profile3
    }


    return(
        <div className="testimonials">
            <img src={image.bgQuotes} alt="quotation marks" />
            <div className="testimonials-container">
                <Testimonial {...satish} />
                <Testimonial {...bruce} />
                <Testimonial {...iva} />
            </div>    
        </div>
    )
}