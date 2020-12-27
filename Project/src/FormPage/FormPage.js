import {YellowBar} from "./YellowBar";
import {useState} from "react"
import {FormBanner} from "./FormBanner";
import {FormStepTwo} from "./StepTwo/FormStepTwo";
import {BrowserRouter as Router,Switch, Route, useRouteMatch} from "react-router-dom";
import {FormStepOne} from "./StepOne/FormStepOne";
import {FormStepThree} from "./StepThree/FormStepThree";
import {FormFour} from "./StepFour/FormFour";
import {FormSummary} from "./FormSummary/FormSummary";
import {ContactUs} from "../Home/ContactUs/ContactUs";

export const FormPage = () =>{
    const { url, path } = useRouteMatch();
    const [userForm, setUserForm] = useState(

    )

    return(
        <>
        <FormBanner/>
        <YellowBar/>
        <Router>
            <Switch>
                <Route path={`${path}/one`}>
                    <FormStepOne/>
                </Route>
                <Route  path={`${path}/two`}>
                    <FormStepTwo/>
                </Route>
                <Route  path={`${path}/three`}>
                    <FormStepThree/>
                </Route>
                <Route path={`${path}/four`}>
                    <FormFour/>
                </Route>
                <Route path={`${path}/summary`}>
                    <FormSummary/>
                </Route>
            </Switch>
            <ContactUs/>
        </Router>
        </>
    )
}