import {Link} from "react-router-dom";

export const FormSummary = () =>{

    return(
        <section className="form-summary">
            <p className="form-summary-title">Podsumowanie Twojej darowizny</p>
            <div className="form-summary-sum">
                <p>Oddajesz:</p>
                <span className="form-summary-sum-info">4 worki, ubrania w dobrym stanie, dzieciom</span>
                <span className="form-summary-sum-info">dla lokalizacji: Warszawa</span>
            </div>
            <div className="form-summary-data">
                <div className="form-summary-data-container">
                    <p>Adres odbioru:</p>
                    <div className="form-summary-data-container-info">
                        <p>Ulica</p>
                        <p>Prosta 51</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Miasto</p>
                        <p>Prosta 51</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Kod<br/> pocztowy</p>
                        <p>90-209</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Numer <br/>telefonu</p>
                        <p>473 839 483</p>
                    </div>
                </div>
                <div className="form-summary-data-container">
                    <p>Termin odbioru:</p>
                    <div className="form-summary-data-container-info">
                        <p>Data</p>
                        <p>17.10.2019</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Godzina</p>
                        <p>17:30</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Uwagi <br/>dla kuriera</p>
                        <p>lorem20</p>
                    </div>
                </div>
            </div>
            <div className="form-buttons">
                <Link className="form-button" to="four">Wstecz</Link>
                <Link className="form-button" >Potwierdzam</Link>
            </div>
        </section>
    )
}