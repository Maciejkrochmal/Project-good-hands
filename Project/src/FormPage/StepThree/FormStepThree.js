import {Link} from 'react-router-dom'

export const FormStepThree = () =>{
    return(
        <section className="form-three">
            <span>Krok 3/4</span>
            <p className="form-three-title">Lokalizacja:</p>
                <select className="form-three-select">
                   <option>--Wybierz--</option>
                   <option>Poznań</option>
                   <option>Warszawa</option>
                   <option>Kraków</option>
                   <option>Wrocław</option>
                   <option>Katowice</option>
                </select>
            <div className="form-two-container">
                <p className="form-two-who">Komu chcesz pomóc?</p>
                <div className="form-two-options">
                    <input type="checkbox" className="form-three-checkbox" id="children"/>
                    <label className="form-three-option" for="children">
                        dzieciom
                    </label>
                    <input type="checkbox" className="form-three-checkbox" id="mothers"/>
                    <label className="form-three-option" for="mothers">
                        samotnym matkom
                    </label>
                    <input type="checkbox" className="form-three-checkbox" id="homeless"/>
                    <label className="form-three-option" for="homeless" >
                        bezdomnym
                    </label>
                    <input type="checkbox" className="form-three-checkbox" id="disabled"/>
                    <label className="form-three-option" for="disabled">
                        niepełnosprawnym
                    </label>
                    <input type="checkbox" className="form-three-checkbox" id="elders"/>
                    <label className="form-three-option" for="elders">
                        osobom starszym
                    </label>
                </div>
            </div>
            <div className="form-three-organisation">
                <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                <input className="form-three-optional" type="text"/>
            </div>
            <div className="form-buttons">
                <Link className="form-button" to="two">Wstecz</Link>
                <Link className="form-button" to="four">Dalej</Link>
            </div>
        </section>
    )
}