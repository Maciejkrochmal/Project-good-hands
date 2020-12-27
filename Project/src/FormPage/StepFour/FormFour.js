import {Link} from "react-router-dom";

export const FormFour = () =>{

    return(
        <section className="form-four">
            <span>Krok 4/4</span>
            <h1 className="form-four-title">Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
            <form className="form-four-form">
                <div className="form-four-form-container">
                <p>Adres odbioru:</p>
                    <div className="form-four-form-container-data">
                        <p>Ulica</p>
                        <input type="text" className="form-four-form-container-input"/>
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Miasto</p>
                        <input type="text" className="form-four-form-container-input"/>
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Kod <br/>pocztowy</p>
                        <input type="text" className="form-four-form-container-input" />
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Numer <br/>telefonu</p>
                        <input type="text" className="form-four-form-container-input"/>
                    </div>
                </div>
                <div className="form-four-form-container">
                <p>Termin odbioru:</p>
                    <div className="form-four-form-container-data">
                        <p>Data</p>
                        <input type="text" className="form-four-form-container-input"/>
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Godzina</p>
                        <input type="text" className="form-four-form-container-input"/>
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Uwagi <br/>dla kuriera</p>
                        <textarea rows="4" className="form-four-form-container-ta"/>

                    </div>
                </div>
            </form>
            <div className="form-buttons">
                <Link className="form-button" to="three">Wstecz</Link>
                <Link className="form-button" to="summary">Dalej</Link>
            </div>
        </section>
    )
}