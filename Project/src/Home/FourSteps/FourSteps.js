import {NavLink} from "react-router-dom";

export const FourSteps = () =>{
    return(
        <section className="home-four-steps" id="four-steps">
            <h1 className="home-four-steps-title">Wystarczą 4 proste kroki</h1>
            <div className="four-steps-container">
                <div className="four-steps-container-content">
                    <div className="four-steps-first"/>
                    <h3>Wybierz rzeczy</h3>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="four-steps-container-content">
                    <div className="four-steps-second"/>
                    <h3>Spakuj je</h3>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="four-steps-container-content">
                    <div className="four-steps-third"/>
                    <h3>Zdecyduj komu<br/>  chcesz pomóc</h3>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="four-steps-container-content">
                    <div className="four-steps-fourth"/>
                    <h3>Zamów kuriera</h3>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <NavLink to={"/form/one"} className='home-four-steps-button'>ODDAJ RZECZY</NavLink>
        </section>
    )
}