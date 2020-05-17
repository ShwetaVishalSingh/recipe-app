import React from 'react'
import Header from "./Header";

const ContactUs = (props) => {
    return (
        <div>
            <Header history={props.history}/>
            <div id="footer" className="footer-main">
                <div className="footer-news pad-top-100 pad-bottom-70 parallax">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 className="ft-title color-white text-center"> Newsletter </h2>
                                    <p> Enter your email and we will send you our weekly newsletter to you.</p>
                                </div>
                                <form>
                                    <input type="email" placeholder="Enter your e-mail id"/>
                                    <a href="#" className="orange-btn"><i className="fa fa-paper-plane-o"
                                                                          aria-hidden="true"></i></a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-box pad-top-70">
                    <div className="container">
                        <div className="row">
                            <div className="footer-in-main">
                                <div className="footer-logo">
                                    <div className="text-center">
                                        {/*<img src="images/logo.png" alt=""/>*/}
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="footer-box-a">
                                        <h3>About Us</h3>
                                        <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set
                                            magnis
                                            dis parturient montes.</p>
                                        <ul className="socials-box footer-socials pull-left">
                                            <li>
                                                <a href="#">
                                                    <div className="social-circle-border"><i
                                                        className="fa  fa-facebook"></i></div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="social-circle-border"><i
                                                        className="fa fa-twitter"></i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="social-circle-border"><i
                                                        className="fa fa-google-plus"></i></div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="social-circle-border"><i
                                                        className="fa fa-pinterest"></i></div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div className="social-circle-border"><i
                                                        className="fa fa-linkedin"></i>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="footer-box-b">
                                        <h3>New Menu</h3>
                                        <ul>
                                            <li><a href="#">Mutton Korma</a></li>
                                            <li><a href="#">Gujarati Dhokla</a></li>
                                            <li><a href="#">Bhindi Fry</a></li>
                                            <li><a href="#">Hyderabadi Biryani</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="footer-box-c">
                                        <h3>Contact Us</h3>
                                        <p>
                                            <i className="fa fa-map-signs" aria-hidden="true"></i>
                                            <span>Örsvängen 9, Sundbyberg, 17451</span>
                                        </p>
                                        <p>
                                            <i className="fa fa-mobile" aria-hidden="true"></i>
                                            <span>
									+46 760390203
								</span>
                                        </p>
                                        <p>
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <span><a href="#">support@mumyumrecipes.com</a></span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="footer-box-d">
                                        <h3>Opening Hours</h3>

                                        <ul>
                                            <li>
                                                <p>Monday - Friday </p>
                                                <span> 11:00 AM - 8:00 PM</span>
                                            </li>
                                            <li>
                                                <p>Saturday - Sunday </p>
                                                <span>  11:00 AM - 10:00 PM</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="copyright" className="copyright-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h6 className="copy-title"> Copyright &copy; 2020 Mummy's Yummy Recipes is powered by <a
                                        href="#"
                                        target="_blank"></a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ContactUs
