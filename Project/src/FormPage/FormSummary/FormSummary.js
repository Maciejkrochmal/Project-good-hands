import {Link} from "react-router-dom";

export const FormSummary = ({props}) =>{
    const {userForm, setUserForm} = props


    return(
        <section className="form-summary">
            <p className="form-summary-title">Podsumowanie Twojej darowizny</p>
            <div className="form-summary-sum">
                <p>Oddajesz:</p>
                <span className="form-summary-sum-info">{userForm.bags} worki, {userForm.items.join(' ')}, {userForm.who.join(' ')}</span>
                <span className="form-summary-sum-info">dla lokalizacji: {userForm.location}</span>
            </div>
            <div className="form-summary-data">
                <div className="form-summary-data-container">
                    <p>Adres odbioru:</p>
                    <div className="form-summary-data-container-info">
                        <p>Ulica</p>
                        <p>{userForm.street}</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Miasto</p>
                        <p>{userForm.city}</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Kod<br/> pocztowy</p>
                        <p>{userForm.code}</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Numer <br/>telefonu</p>
                        <p>{userForm.telephone}</p>
                    </div>
                </div>
                <div className="form-summary-data-container">
                    <p>Termin odbioru:</p>
                    <div className="form-summary-data-container-info">
                        <p>Data</p>
                        <p>{userForm.date}</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Godzina</p>
                        <p>{userForm.time}</p>
                    </div>
                    <div className="form-summary-data-container-info">
                        <p>Uwagi <br/>dla kuriera</p>
                        <p>{userForm.comments}</p>
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