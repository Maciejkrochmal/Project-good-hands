export const Funtations = () =>{
    return(
        <section className="home-foundations" id="fundations">
            <h1 className="home-foundations-title">Komu pomagamy?</h1>
            <div className="home-foundations-organization">
                <button className="home-foundations-organization__btn">Fundacjom</button>
                <button className="home-foundations-organization__btn">Organizacjom pozarządowym</button>
                <button className="home-foundations-organization__btn">Lokalnym zbiórkom</button>
            </div>
            <h2 className="home-foundations-data">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
            <div className="home-foundations-list">
                <ul>
                    <li className="home-foundations-item">
                        <div>
                            <p className="home-foundations-item__detail">Fundacja “Dbam o Zdrowie”</p>
                            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <div>
                            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        </div>
                    </li>
                    <li className="home-foundations-item">
                        <div>
                            <p className="home-foundations-item__detail">Fundacja “Dla dzieci”</p>
                            <p>Fundacja “Dla dzieci”</p>
                        </div>
                        <div>
                            <p>ubrania, meble, zabawki</p>
                        </div>
                    </li>
                    <li className="home-foundations-item">
                        <div>
                            <p className="home-foundations-item__detail">Fundacja “Bez domu”</p>
                            <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                        <div>
                            <p>ubrania, jedzenie, ciepłe koce</p>
                        </div>
                    </li>
                </ul>
                <div className="home-foundations-buttons">
                    <button className="home-foundations-btn">1</button>
                    <button className="home-foundations-btn">2</button>
                    <button className="home-foundations-btn">3</button>
                </div>
            </div>
        </section>
    )
}