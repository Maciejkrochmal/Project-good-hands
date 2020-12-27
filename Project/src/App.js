import './scss/main.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import homeHero from './assets/Home-Hero-Image.jpg';
import {Nav} from "./Navigation/Nav";
import {Banner} from "./Home/Banner/Banner";
import {ThreeColumns} from "./Home/ThreeColumns/ThreeColumns";
import {FourSteps} from "./Home/FourSteps/FourSteps";
import {AboutUs} from "./Home/AboutUs/AboutUs";
import {Funtations} from "./Home/Fundations/Funtations";
import {ContactUs} from "./Home/ContactUs/ContactUs";
import {LoginPage} from "./LoginPage/Login";
import {RegisterPage} from "./Register/RegisterPage";
import {FormPage} from "./FormPage/FormPage";
import {YellowBar} from "./FormPage/YellowBar";
import {FormStepOne} from "./FormPage/StepOne/FormStepOne";
import {FormStepTwo} from "./FormPage/StepTwo/FormStepTwo";

function App() {
  return (
      <Router>
          <Nav/>
          <Switch>
              <Route path="/" exact>
                  <Banner/>
                  <ThreeColumns/>
                  <FourSteps/>
                  <AboutUs/>
                  <Funtations/>
                  <ContactUs/>
              </Route>
              <Route path="/login" component={LoginPage}/>
              <Route path="/register" component={RegisterPage}/>
              <Route path="/form" component={FormPage}/>
          </Switch>
      </Router>

  );
}

export default App;
