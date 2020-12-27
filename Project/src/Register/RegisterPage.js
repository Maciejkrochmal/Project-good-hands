import {NavLink} from "react-router-dom";

export const RegisterPage = () =>{

    return(
        <section className="register" id="register">
            <div className="register-container">
                <p className="register-title">Załóż konto</p>
                <div className="register-data">
                    <p>Email</p>
                    <input type="email" className="register-input"/>
                    <p>Hasło</p>
                    <input type="password" className="register-input"/>
                    <p>Powtórz hasło</p>
                    <input type="password" className="register-input"/>
                </div>
                <div className="register-buttons">
                    <NavLink className="register-buttons-btn" to="/login">Zaloguj się</NavLink>
                    <NavLink className="register-buttons-btn" to="/register">Załóż konto</NavLink>
                </div>
            </div>
        </section>
    )
}