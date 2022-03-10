import { useEffect, useRef, useState } from "react"

export const EarlyAccess: React.FC = () => {

    // For Email Validation
    const emailInputRef = useRef<HTMLInputElement>(null);
    
    const [errorClass, setErrorClass] = useState("error-text hidden");

    function ValidateEmail(mail: string) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    }

    const handleSubmit = () => {
        if (ValidateEmail(emailInputRef.current!.value)) {
            setErrorClass("error-text hidden")
        } else { setErrorClass("error-text") }
    }

    return (
        <div className="early-access-container">
            <h1>Get early access today</h1>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className="email-form">
                <input type="email" placeholder="email@example.com" ref={emailInputRef} />

                <div className="get-started" onClick={handleSubmit}><h4>Get Started For Free</h4></div>
            </div>
            <div className="error">
                <h5 className={errorClass}>Please enter a valid email address</h5>
            </div>
        </div>
    )
}