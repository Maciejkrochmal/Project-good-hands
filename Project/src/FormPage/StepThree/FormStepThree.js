import {Link} from 'react-router-dom'

export const FormStepThree = ({props}) =>{
    const {userForm, setUserForm} = props
    const arr = userForm.who

    const handleChange = e =>{
        const option = e.target.id
        setUserForm(prev =>({
            ...prev,
            [option]:e.target.value
        }))
    }

    const handleClick = e =>{
        const val = +e.target.id
        e.currentTarget.checked? arr[val] = e.target.value : arr[+e.target.id] = null
        console.log(arr)
    }

    const handleNext = () =>{
        setUserForm( prev =>({
            ...prev,
            who: arr
        }))
    }



    return(
        <section className="form-three">
            <span>Krok 3/4</span>
            <p className="form-three-title">Lokalizacja:</p>
                <select className="form-three-select" onChange={handleChange} value={userForm.location} id="location">
                   <option value={0}>--Wybierz--</option>
                   <option value={"Poznań"}>Poznań</option>
                   <option value={"Warszawa"}>Warszawa</option>
                   <option value={"Kraków"}>Kraków</option>
                   <option value={"Wrocław"}>Wrocław</option>
                   <option value={"Katowice"}>Katowice</option>
                </select>
            <div className="form-two-container">
                <p className="form-two-who">Komu chcesz pomóc?</p>
                <div className="form-two-options">
                    <input type="checkbox" className="form-three-checkbox" id="0" value={'dzieciom'} onClick={handleClick} defaultChecked={userForm.who[0] !== null}/>
                    <label className="form-three-option" htmlFor="0" >
                        dzieciom
                    </label>
                    <input type="checkbox" className="form-three-checkbox" id="1"  value={"samotnym matkom"} onClick={handleClick} defaultChecked={userForm.who[1] !== null}/>
                    <label className="form-three-option" htmlFor="1">
                        samotnym matkom
                    </label>
                    <input type="checkbox" className="form-three-checkbox" id="2" value={'bezdomnym'} onClick={handleClick} defaultChecked={userForm.who[2] !== null}/>
                    <label className="form-three-option" htmlFor="2" >
                        bezdomnym
                    </label>
                    <input type="checkbox" className="form-three-checkbox" id="3" value={'niepełnosprawnym'} onClick={handleClick} defaultChecked={userForm.who[3] !== null}/>
                    <label className="form-three-option" htmlFor="3">
                        niepełnosprawnym
                    </label>
                    <input type="checkbox" className="form-three-checkbox" id="4" value={'osobom starszym'} onClick={handleClick} defaultChecked={userForm.who[4] !== null}/>
                    <label className="form-three-option" htmlFor="4">
                        osobom starszym
                    </label>
                </div>
            </div>
            <div className="form-three-organisation">
                <p>Wpisz nazwę konkretnej organizacji (opcjonalnie)</p>
                <input className="form-three-optional" type="text" defaultValue={userForm.organization} id="organization" onChange={handleChange}/>
            </div>
            <div className="form-buttons">
                <Link className="form-button" to="two" onClick={handleNext}>Wstecz</Link>
                <Link className="form-button" to="four" onClick={handleNext}>Dalej</Link>
            </div>
        </section>
    )
}