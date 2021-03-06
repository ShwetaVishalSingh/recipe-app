import React, {useEffect, useState} from 'react';
import {getCookie} from "../services/CookieService";
import {RecipeConstant} from "../utilis/RecipeConstant";

const GoToPage = (props, page) => {
    return (
        props.history.push(page)
    );
};
const Header = (props) => {
    const [userId, setUserId] = useState();
    useEffect(() => {
        const cookie = getCookie(RecipeConstant.cuser);
        setUserId(cookie);
    }, []);

    return (
        <div id="site-header">
            <header id="header" className="header-block-top">
                <div className="container">
                    <div className="row">
                        <div className="main-menu">
                            <nav className="navbar navbar-default" id="mainNav">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                            data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <div className="logo">
                                        <a className="navbar-brand js-scroll-trigger logo-header" href="#">
                                            <img src="images/logo.png" alt=""></img>
                                        </a>
                                    </div>
                                </div>
                                <div id="navbar" className="navbar-collapse collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li >
                                            <a  href="#" onClick={() => {GoToPage(props, "/home")}}>Home</a>
                                        </li>
                                        <li><a href="#" onClick={() => {
                                            GoToPage(props,"/recipe")
                                        }}>Recipe</a></li>
                                        <li><a href="#" onClick={() => {
                                            GoToPage(props,"/gallery")
                                        }}>Gallery</a></li>
                                        <li><a href="#" onClick={() => {
                                            GoToPage(props,"/team")
                                        }}>Team</a></li>

                                     {/*   <li><a href="#" onClick={() => {
                                            GoToPage(props,"/blog")
                                        }}>Blog</a></li>*/}
                                        <li><a href="#" onClick={() => {
                                            GoToPage(props,"/about")
                                        }}>About us</a></li>
                                        <li><a href="#" onClick={() => {
                                            GoToPage(props,"/contactus")
                                        }}>Contact us</a></li>

                                        <li>
                                            <a href="#" onClick={() => {
                                                GoToPage(props,"/user/" + userId)
                                            }}><img src={"/images/my-profile.png"} alt="My Profile"/></a>
                                        </li>
                                        <li><a href="#" onClick={() => {
                                            GoToPage(props,"/logout")
                                        }}><img src={"/images/logout.png"} alt="Logout"/></a></li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
};
export default Header;
