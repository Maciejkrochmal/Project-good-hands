import {Link} from 'react-router-dom'

export const FormStepTwo = () =>{
    return(
        <section className="form-two">
            <span>Krok 2/4</span>
            <p className="form-two-title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
            <div className="form-two-container">
                <p className="form-two-content">Liczba 60l worków:</p>
                <select className="form-two-select">
                    <option className="form-two-option">— wybierz —</option>
                    <option className="form-two-option">1</option>
                    <option className="form-two-option">2</option>
                    <option className="form-two-option">3</option>
                    <option className="form-two-option">4</option>
                    <option className="form-two-option">5</option>
                    <option className="form-two-option">6</option>
                </select>

            </div>
            <div className="form-buttons">
                <Link className="form-button" to="one">Wstecz</Link>
                <Link className="form-button" to="three">Dalej</Link>
            </div>
        </section>
    )
}