import {Link} from 'react-scroll'
import {NavLink} from "react-router-dom";

export const Nav = () =>{

    return(
        <nav>
            <div className="nav-bar-buttons">
                <NavLink className="nav-bar-buttons-btn" to="/login">Zaloguj</NavLink>
                <NavLink className="nav-bar-buttons-btn" to="/register">Zaloz konto</NavLink>
            </div>
            <ul className="nav-list">
                <Link className="nav-list-item" to="start" smooth={true} duration={1000}>Start</Link>
                <Link className="nav-list-item" to="four-steps" smooth={true} duration={1000}>O co chodzi ?</Link>
                <Link className="nav-list-item" to="about-us" smooth={true} duration={1000}>O nas</Link>
                <Link className="nav-list-item" to="fundations" smooth={true} duration={1000}>Fundacje i Organizacje</Link>
                <Link className="nav-list-item" to="contact" smooth={true} duration={1000}>Kontakt</Link>
            </ul>
        </nav>
    )
}