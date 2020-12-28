import {Link} from "react-router-dom";

export const FormFour = ({props}) =>{
    const {userForm, setUserForm} = props

    const handleChange = e =>{
        const option = e.target.id
        setUserForm(prev =>({
            ...prev,
            [option]:e.target.value
        }))
    }

    const handleTest = () =>{
        console.log(userForm)
    }
    return(
        <section className="form-four">
            <span>Krok 4/4</span>
            <h1 className="form-four-title">Podaj adres oraz termin odbioru rzecz przez kuriera</h1>
            <form className="form-four-form">
                <div className="form-four-form-container">
                <p>Adres odbioru:</p>
                    <div className="form-four-form-container-data">
                        <p>Ulica</p>
                        <input type="text" className="form-four-form-container-input" defaultValue={userForm.street} id='street' onChange={handleChange}/>
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Miasto</p>
                        <input type="text" className="form-four-form-container-input" defaultValue={userForm.city} id='city' onChange={handleChange}/>
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Kod <br/>pocztowy</p>
                        <input type="text" className="form-four-form-container-input" defaultValue={userForm.code} id='code'onChange={handleChange}/>
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Numer <br/>telefonu</p>
                        <input type="text" className="form-four-form-container-input" defaultValue={userForm.telephone} id='telephone' onChange={handleChange}/>
                    </div>
                </div>
                <div className="form-four-form-container">
                <p>Termin odbioru:</p>
                    <div className="form-four-form-container-data">
                        <p>Data</p>
                        <input type="text" className="form-four-form-container-input" defaultValue={userForm.date} id='date' onChange={handleChange}/>
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Godzina</p>
                        <input type="text" className="form-four-form-container-input" defaultValue={userForm.time} id='time' onChange={handleChange}/>
                    </div>
                    <div className="form-four-form-container-data">
                        <p>Uwagi <br/>dla kuriera</p>
                        <textarea rows="4" className="form-four-form-container-ta" defaultValue={userForm.comments} id='comments' onChange={handleChange}/>

                    </div>
                </div>
            </form>
            <div className="form-buttons">
                <Link className="form-button" to="three" onClick={handleTest}>Wstecz</Link>
                <Link className="form-button" to="summary" onClick={handleTest}>Dalej</Link>
            </div>
        </section>
    )
}