import {NavLink} from "react-router-dom";

export const LoginPage = () =>{

    return(
        <section className="login" id="login">
            <div className="login-container">
                <p className="login-title">Zaloguj się</p>
                <div className="login-data">
                    <p>Email</p>
                    <input type="email" className="login-input"/>
                    <p>Hasło</p>
                    <input type="password" className="login-input"/>
                </div>
                <div className="login-buttons">
                    <NavLink className="login-buttons-btn" to="/register">Załóż konto</NavLink>
                    <NavLink className="login-buttons-btn" to="/login">Zaloguj się</NavLink>
                </div>
            </div>
        </section>
    )
}