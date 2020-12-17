import logo from './logo.svg';
import './scss/main.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import homeHero from './assets/Home-Hero-Image.jpg';

function App() {
  return (
      <Router>
          <nav>
              <div>
                  <button>zaloguj</button>
                  <button>zaloz konto</button>
              </div>
              <ul className="nav-list">
                  <li>Start</li>
                  <li>O co chodzi ?</li>
                  <li>O nas</li>
                  <li>Fundacje i Organizacje</li>
                  <li>Kontakt</li>
              </ul>
          </nav>
          <section className="home-banner">
              <div className="banner-img">
                  {/*<img src={homeHero} alt={""}/>*/}
              </div>
              <div className="banner-data">
                  <h1 className="banner-slogan">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                  <div>
                      <button className="banner-buttons">Oddaj Rzeczy</button>
                      <button className="banner-buttons">Zorganizuj Zbiorke</button>
                  </div>
              </div>
          </section>
          <section className='home-three-columns'>
              <div className="three-columns">
                  <h1>10</h1>
                  <h2>ODDANYCH WORKÓW</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
              </div>
              <div className="three-columns">
                  <h1>5</h1>
                  <h2>WSPARTYCH ORGANIZACJI</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
              </div>
              <div className="three-columns">
                  <h1>7</h1>
                  <h2>ZORGANIZOWANY ZBIÓREK</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
              </div>
          </section>
          <section className="home-four-steps">
              <h1 className="home-four-steps-title">Wystarczą 4 proste kroki</h1>
              <div className="four-steps-container">
                  <div className="four-steps-container-content">
                      <h3>Wybierz rzeczy</h3>
                      <p>ubrania, zabawki, sprzęt i inne</p>
                  </div>
                  <div className="four-steps-container-content">
                      <h3>Spakuj je</h3>
                      <p>skorzystaj z worków na śmieci</p>
                  </div>
                  <div className="four-steps-container-content">
                      <h3>Zdecyduj komu chcesz pomóc</h3>
                      <p>wybierz zaufane miejsce</p>
                  </div>
                  <div className="four-steps-container-content">
                      <h3>Zamów kuriera</h3>
                      <p>kurier przyjedzie w dogodnym terminie</p>
                  </div>
              </div>
              <button className='home-four-steps-button'>ODDAJ RZECZY</button>
          </section>
          <section className="home-about-us">
              <div className="about-us-content">
                  <h1 className="about-us-title">O Nas</h1>
                  <p className="about-us-data">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
              </div>
              <div className='about-us-img'>
                  Obrazek
              </div>
          </section>
          <section className="home-foundations">
              <h1>Komu pomagamy?</h1>
              <div>
                  <button>Fundacjom</button>
                  <button>Organizacjom pozarządowym</button>
                  <button>Lokalnym zbiórkom</button>
              </div>
              <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
              <div>
                  <ul>
                      <li className="foundations-list">
                          <div>
                              <h3>Fundacja “Dbam o Zdrowie”</h3>
                              <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                          </div>
                          <div>
                              <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                          </div>
                      </li>
                      <li className="foundations-list">
                          <div>
                              <h3>Fundacja “Dla dzieci”</h3>
                              <p>Fundacja “Dla dzieci”</p>
                          </div>
                          <div>
                              <p>ubrania, meble, zabawki</p>
                          </div>
                      </li>
                      <li className="foundations-list">
                          <div>
                              <h3>Fundacja “Bez domu”</h3>
                              <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                          </div>
                          <div>
                              <p>ubrania, jedzenie, ciepłe koce</p>
                          </div>
                      </li>
                  </ul>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
              </div>
          </section>
          <section className="home-contact-us">
              <div>Obrazek</div>
              <div className="contact-us-content">
                  <h1>Skontaktuj się z nami</h1>
                  <form className="contact-from">
                      <h4>Wpisz swoje imię</h4>
                      <input type="text" placeholder="Krzysztof"/>
                      <h4>Wpisz swój email</h4>
                      <input type="email" placeholder="abc@xyz.pl"/>
                      <h4>Wpisz swoją wiadomość</h4>
                      <input type="text-area"/>
                  </form>
              </div>
          </section>
          <footer><span>Copyright by Coders Lab</span></footer>
      </Router>

  );
}

export default App;
