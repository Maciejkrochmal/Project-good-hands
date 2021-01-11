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
    const [userForm, setUserForm] = useState({
        items: [null,null,null,null,null],
        // items: [
        //     {name: 'zabawki', selected: false},
        //     {name: 'zabawki', selected: false},
        //     {name: 'zabawki', selected: false},
        // ],
        bags: 0,
        location: 0,
        who: [null,null,null,null,null],
        organization: '',
        street:'',
        city: '',
        code: '',
        telephone: '',
        date: '',
        time: '',
        comments: '',
        }

    )
    //polaczyc browsing router z # router

    return(
        <>
            <FormBanner/>
            <YellowBar/>
            <Router>
                <Switch>
                    <Route path={`${path}/one`}>
                        <FormStepOne props={{userForm, setUserForm}}/>
                    </Route>
                    <Route  path={`${path}/two`}>
                        <FormStepTwo props={{userForm, setUserForm}}/>
                    </Route>
                    <Route  path={`${path}/three`}>
                        <FormStepThree props={{userForm, setUserForm}}/>
                    </Route>
                    <Route path={`${path}/four`}>
                        <FormFour props={{userForm, setUserForm}}/>
                    </Route>
                    <Route path={`${path}/summary`}>
                        <FormSummary props={{userForm, setUserForm}}/>
                    </Route>
                </Switch>
                <ContactUs/>
            </Router>
        </>
    )
}