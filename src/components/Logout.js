import React from 'react';
import {RecipeConstant} from "../utilis/RecipeConstant";
import {removeCookie} from "../services/CookieService";

const Logout = (props) => {
    removeCookie(RecipeConstant.cuser);
    props.history.push("/");
    window.location.reload();
};
export default Logout;