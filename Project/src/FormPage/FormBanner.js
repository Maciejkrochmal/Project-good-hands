export const FormBanner = () =>{
    return(
        <section className="form-banner" id="form">
            <div className="form-img"/>
            <div className="form-data">
                <h1 className="form-slogan">Oddaj rzeczy, których już nie chcesz<br/> POTRZEBUJĄCYM</h1>
                <h2>Wystarczą 4 proste kroki:</h2>
                <div className="form-steps">
                    <p className="form-steps-data">1<br/>Wybierz <br/>rzeczy</p>
                    <p className="form-steps-data">2<br/>Spakuj je<br/> w worki</p>
                    <p className="form-steps-data">3<br/>Wybierz <br/>fundację</p>
                    <p className="form-steps-data">4<br/>Zamów <br/>kuriera</p>
                </div>
                <div  className="form-icons">
                    <div className="form-icon"></div>
                    <div className="form-icon"></div>
                    <div className="form-icon"></div>
                    <div className="form-icon"></div>
                </div>
            </div>
        </section>
    )
}