import { image } from "../images/image"
import { Feature, FProps } from "./Feature"

export const Features:React.FC = () => {
    const access:FProps = {
        image:image.iconAccessAnywhere,
        imageAlt: 'desktop and mobile',
        featureTitle: 'Access your files, anywhere',
        featureDesc: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    }
    const secure:FProps = {
        image:image.iconSecurity,
        imageAlt: 'shield with a check',
        featureTitle: 'Security you can trust',
        featureDesc: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    }
    const collaboration:FProps = {
        image:image.iconCollaboration,
        imageAlt: 'three people, a clock and a checkmark',
        featureTitle: 'Real-time collaboration',
        featureDesc: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    }
    const store:FProps = {
        image:image.iconAnyFile,
        imageAlt: 'folder and different file types',
        featureTitle: 'Store any type of file',
        featureDesc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
    return(
        <div className="features">
            <Feature {...access} />
            <Feature {...secure} />
            <Feature {...collaboration} />
            <Feature {...store} />
        </div>
    )
}