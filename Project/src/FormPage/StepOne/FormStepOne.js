import {Link} from 'react-router-dom'


export const FormStepOne = () =>{
    return(
        <section className="form-one">
            <span>Krok 1/4</span>
            <p className="form-one-title">Zaznacz co chcesz oddać:</p>
            <div className="form-one-container">
                <label className="form-one-option">
                    ubrania, które nadają się do ponownego użycia
                    <input type="checkbox" className="form-one-checkbox"/>
                    <div className="form-one-icon"/>
                </label>
                <label className="form-one-option">
                    ubrania, do wyrzucenia
                    <input type="checkbox" className="form-one-checkbox"/>
                    <div className="form-one-icon"/>
                </label>
                <label className="form-one-option">
                    zabawki
                    <input type="checkbox" className="form-one-checkbox"/>
                    <div className="form-one-icon"/>
                </label>
                <label className="form-one-option">
                    książki
                    <input type="checkbox" className="form-one-checkbox"/>
                    <div className="form-one-icon"/>
                </label>
                <label className="form-one-option">
                    Inne
                    <input type="checkbox" className="form-one-checkbox"/>
                    <div className="form-one-icon"/>
                </label>
            </div>
            <div className="form-buttons">
            <Link className="form-button" to="two">Dalej</Link>
            </div>
        </section>
    )
}