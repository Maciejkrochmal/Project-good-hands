import {Link} from 'react-router-dom'

export const FormStepTwo = ({props}) =>{
    const {userForm, setUserForm} = props

    const handleChange = e =>{
        setUserForm(prev =>({
            ...prev,
            bags:e.target.value
        }))
    }
    const handleTest = () =>{
        console.log(userForm)
    }
    return(
        <section className="form-two">
            <span>Krok 2/4</span>
            <p className="form-two-title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
            <div className="form-two-container">
                <p className="form-two-content">Liczba 60l worków:</p>
                <select className="form-two-select" onChange={handleChange} value={userForm.bags}>
                    <option className="form-two-option" value={0}>— wybierz —</option>
                    <option className="form-two-option" value={1}>1</option>
                    <option className="form-two-option" value={2}>2</option>
                    <option className="form-two-option" value={3}>3</option>
                    <option className="form-two-option" value={4}>4</option>
                    <option className="form-two-option" value={5}>5</option>
                    <option className="form-two-option" value={6}>6</option>
                </select>

            </div>
            <div className="form-buttons">
                <Link className="form-button" to="one" onClick={handleTest}>Wstecz</Link>
                <Link className="form-button" to="three" onClick={handleTest}>Dalej</Link>
            </div>
        </section>
    )
}