import React, {Suspense, useEffect, useState} from 'react';
import {Route, Router, Switch} from 'react-router';
import Home from './components/Home';
import {GetBaseRoute} from './utilis/Enviroment';
import {createBrowserHistory} from 'history';
import About from "./components/AboutUs";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import CreateRecipe from "./components/CreateRecipe";
import Register from "./components/Register";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import Menu from "./components/Menu";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Recipes from "./components/Recipes";
import RegisterBusinessUser from "./components/RegisterBusinessUser";
import {getData} from "./services/Ajax";
import {getCookie} from "./services/CookieService";
import Logout from "./components/Logout";
import ChangePassword from "./components/ChangePassword";
const cuser = "currentUser";


const history = createBrowserHistory({basename: GetBaseRoute()});
const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
    <Route {...rest} render={props => (
        <Layout history={history}>
            <Component history={history} {...props} />
        </Layout>
    )}/>
);
const App = () => {
    const [cookieCreated, setCookieCreated] = useState();

    useEffect(() => {
        const cookie = getCookie(cuser);
        setCookieCreated(cookie);
    }, []);

    return (

        <Router history={history}>
            <Suspense fallback={Home}>
                <ReactNotification />
                <Switch>
                        <AppRoute exact path="/" layout={Login} component={Login}/>
                        <AppRoute exact path="/register" layout={Register} component={Register}/>
                        <AppRoute exact path="/registerBusinessUser" layout={RegisterBusinessUser} component={RegisterBusinessUser}/>
                    {  cookieCreated !== undefined && cookieCreated && <AppRoute exact path="/home" layout={Home} component={Home}/> }
                    { cookieCreated && <AppRoute exact path="/logout" layout={Logout} component={Logout}/> }
                    { cookieCreated && <AppRoute exact path="/about" layout={About} component={About}/> }
                    { cookieCreated && <AppRoute exact path="/menu" layout={Menu} component={Menu}/> }
                    { cookieCreated && <AppRoute exact path="/team" layout={Team} component={Team}/> }
                    { cookieCreated && <AppRoute exact path="/gallery" layout={Gallery} component={Gallery}/> }
                    { cookieCreated && <AppRoute exact path="/blog" layout={Blog} component={Blog}/> }
                    { cookieCreated && <AppRoute exact path="/recipe" layout={Recipes} component={Recipes}/> }
                    { cookieCreated && <AppRoute exact path="/createRecipe" layout={CreateRecipe} component={CreateRecipe}/> }
                    { cookieCreated && <AppRoute exact path="/contactus" layout={ContactUs} component={ContactUs}/> }
                    { cookieCreated && <AppRoute exact path="/changePassword" layout={ChangePassword} component={ChangePassword}/> }

                    </Switch>
            </Suspense>
        </Router>

    );
}
export default App;
