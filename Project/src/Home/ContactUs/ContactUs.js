export const ContactUs = () =>{
    return(
        <section className="home-contact-us" id="contact">
            <div className="home-contact-us-img"/>
            <div className="contact-us-content">
                <p className="contact-form-data-title">Skontaktuj się z nami</p>
                <form className="contact-form">
                    <div className="contact-form-data">
                        <div>
                            <p>Wpisz swoje imię</p>
                            <input type="text" placeholder="Krzysztof" className="contact-form-input"/>
                        </div>
                        <div>
                            <p>Wpisz swój email</p>
                            <input type="email" placeholder="abc@xyz.pl" className="contact-form-input"/>
                        </div>
                    </div>
                    <p className="contact-form-msg">Wpisz swoją wiadomość</p>
                    <textarea rows="4" className="contact-form-text-area" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                </form>
            </div>
            <div className="home-contact-us-footer">
                <span>Copyright by Coders Lab</span>
                <div className="home-four-steps-footer-icon"/>
                <div className="home-four-steps-footer-icon"/>
            </div>
        </section>
    )
}