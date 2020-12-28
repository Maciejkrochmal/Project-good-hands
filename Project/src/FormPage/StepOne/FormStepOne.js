import {Link} from 'react-router-dom'


export const FormStepOne = ({props}) =>{
        const {userForm, setUserForm} = props
        const arr = userForm.items

    const handleClick = e =>{
        const val = +e.target.id
        e.currentTarget.checked? arr[val] = e.target.value : arr[+e.target.id] = null
        console.log(arr)
    }
    const handleNext = () =>{
        setUserForm( prev =>({
            ...prev,
            items: arr
        }))
    }



    return(
        <section className="form-one">
            <span>Krok 1/4</span>
            <p className="form-one-title">Zaznacz co chcesz oddać:</p>
            <div className="form-one-container">
                <label className="form-one-option" >
                    ubrania, które nadają się do ponownego użycia
                    <input type="checkbox" className="form-one-checkbox" value={'ubrania w dobrym stanie'} onClick={handleClick} id='0' defaultChecked={userForm.items[0] !== null}/>
                    <div className="form-one-icon" />
                </label>
                <label className="form-one-option" >
                    ubrania, do wyrzucenia
                    <input type="checkbox" className="form-one-checkbox" value={'ubrania w złym stanie'} onClick={handleClick} id='1' defaultChecked={userForm.items[1] !== null}/>
                    <div className="form-one-icon"/>
                </label>
                <label className="form-one-option" >
                    zabawki
                    <input type="checkbox" className="form-one-checkbox" value={'zabawki'} onClick={handleClick} id='2'defaultChecked={userForm.items[2] !== null}/>
                    <div className="form-one-icon"/>
                </label>
                <label className="form-one-option" >
                    książki
                    <input type="checkbox" className="form-one-checkbox" value={'książki'} onClick={handleClick} id='3'defaultChecked={userForm.items[3] !== null}/>
                    <div className="form-one-icon"/>
                </label>
                <label className="form-one-option" >
                    Inne
                    <input type="checkbox" className="form-one-checkbox" value={'Inne'} onClick={handleClick} id='4'defaultChecked={userForm.items[4] !== null}/>
                    <div className="form-one-icon"/>
                </label>
            </div>
            <div className="form-buttons">
            <Link className="form-button" to="two" onClick={handleNext}>Dalej</Link>
            </div>
        </section>
    )
}