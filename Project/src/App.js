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
              <div className="nav-bar-buttons">
                  <button className="nav-bar-buttons-btn">Zaloguj</button>
                  <button className="nav-bar-buttons-btn">Zaloz konto</button>
              </div>
              <ul className="nav-list">
                  <li className="nav-list-item">Start</li>
                  <li className="nav-list-item">O co chodzi ?</li>
                  <li className="nav-list-item">O nas</li>
                  <li className="nav-list-item">Fundacje i Organizacje</li>
                  <li className="nav-list-item">Kontakt</li>
              </ul>
          </nav>
          <section className="home-banner">
              <div className="banner-img">
                  {/*<img src={homeHero} alt={""}/>*/}
              </div>
              <div className="banner-data">
                  <h1 className="banner-slogan">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                  <div  className="banner-buttons">
                      <button className="banner-buttons-btn">Oddaj<br/> Rzeczy</button>
                      <button className="banner-buttons-btn">Zorganizuj Zbiorke</button>
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
              <div className='about-us-img'/>
          </section>
          <section className="home-foundations">
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
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                  </div>
              </div>
          </section>
          <section className="home-contact-us">
              <div className="home-contact-us-img"/>
              <div className="contact-us-content">
                  <h1>Skontaktuj się z nami</h1>
                  <form className="contact-form">
                      <div className="contact-form-data">
                          <div>
                              <h4>Wpisz swoje imię</h4>
                              <input type="text" placeholder="Krzysztof"/>
                          </div>
                          <div>
                            <h4>Wpisz swój email</h4>
                            <input type="email" placeholder="abc@xyz.pl"/>
                          </div>
                      </div>
                      <h4>Wpisz swoją wiadomość</h4>
                      <textarea rows="5" />
                  </form>
              </div>
          </section>
          <footer><span>Copyright by Coders Lab</span></footer>
      </Router>

  );
}

export default App;
