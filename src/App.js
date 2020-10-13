import React, {Suspense, useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
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
import {getCookie} from "./services/CookieService";
import Logout from "./components/Logout";
import ChangePassword from "./components/ChangePassword";
import User from "./components/User";
import {RecipeConstant} from "./utilis/RecipeConstant";


const App = () => {
    const [cookieCreated, setCookieCreated] = useState();
    useEffect(() => {
        const cookie = getCookie(RecipeConstant.cuser);
        setCookieCreated(cookie);
    }, []);

    return (
        <BrowserRouter>
            <Suspense fallback={Home}>
                <ReactNotification />
                <Switch>
                    <Route path="/register" component={Register}/>
                    <Route path="/registerBusinessUser" component={RegisterBusinessUser}/>
                    {cookieCreated && <Route path="/home" component={Home}/>}
                    {cookieCreated && <Route path="/logout" component={Logout}/>}
                    {cookieCreated && <Route path="/about" component={About}/>}
                    {cookieCreated && <Route path="/menu" component={Menu}/>}
                    {cookieCreated && <Route path="/team" component={Team}/>}
                    {cookieCreated && <Route path="/gallery" component={Gallery}/>}
                    {cookieCreated && <Route path="/blog" component={Blog}/>}
                    {cookieCreated && <Route path="/recipe" component={Recipes}/>}
                    {cookieCreated && <Route path="/createRecipe/:userId" component={CreateRecipe}/>}
                    {cookieCreated && <Route path="/contactus" component={ContactUs}/>}
                    {cookieCreated && <Route path="/changePassword/:userId" component={ChangePassword}/>}
                    {cookieCreated && <Route path="/user/:userId" component={User}/>}
                    <Route path="/" component={Login}/>


                    </Switch>
                </Suspense>
            </BrowserRouter>
    );
};
export default App;
