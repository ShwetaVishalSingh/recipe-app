import React from 'react'
import Header from "./Header";

const Team = (props) => {
    return (
        <div>
            <Header history={props.history}/>

            <div id="our_team" className="team-main pad-top-100 pad-bottom-100 parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                <h2 className="block-title text-center">
                                    Our Team
                                </h2>
                                {/*<p className="title-caption text-center">There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even slightly believable. </p>*/}
                            </div>
                            <div className="team-box">

                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="sf-team">
                                            <div className="thumb">
                                                <a href="#"><img src="images/staff-01.jpg" alt=""/></a>
                                            </div>
                                            <div className="text-col">
                                                <h3>Vishal Singh</h3>
                                                <p>Vishal is a people person with a passion for business and developing others! Vishal holds a Master degree in Computer Science and Engineering. He is also working as a Sr. Software Engineer within IT at several of Sweden's largest companies within tech and E-commerce.</p>
                                                <ul className="team-social">
                                                    <li><a href="#"><i className="fa fa-facebook"
                                                                       aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-linkedin"
                                                                       aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="sf-team">
                                            <div className="thumb">
                                                <a href="#"><img src="images/staff-02.jpg" alt=""/></a>
                                            </div>
                                            <div className="text-col">
                                                <h3>Vishal Singh</h3>
                                                <p>Vishal is a people person with a passion for business and developing others! Vishal holds a Master degree in Computer Science and Engineering. He is also working as a Sr. Software Engineer within IT at several of Sweden's largest companies within tech and E-commerce.</p>
                                                <ul className="team-social">
                                                    <li><a href="#"><i className="fa fa-facebook"
                                                                       aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-linkedin"
                                                                       aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="sf-team">
                                            <div className="thumb">
                                                <a href="#"><img src="images/staff-03.jpg" alt=""/></a>
                                            </div>
                                            <div className="text-col">
                                                <h3>Shweta Singh</h3>
                                                <p>Shweta is an energetic and curious person who loves all kinds of challenges and working with tech and business. Shweta holds a Bachelor's degree in Computer Science and Engineering from AKTU India, where, in addition to her studies, she was active in entrepreneurial organizations.</p>
                                                <ul className="team-social">
                                                    <li><a href="#"><i className="fa fa-facebook"
                                                                       aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-linkedin"
                                                                       aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="breakLine"/>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="sf-team">
                                            <div className="thumb">
                                                <a href="#"><img src="images/staff-01.jpg" alt=""/></a>
                                            </div>
                                            <div className="text-col">
                                                <h3>Vishal Singh</h3>
                                                <p>Vishal is a people person with a passion for business and developing others! Vishal holds a Master degree in Computer Science and Engineering. He is also working as a Sr. Software Engineer within IT at several of Sweden's largest companies within tech and E-commerce.</p>
                                                <ul className="team-social">
                                                    <li><a href="#"><i className="fa fa-facebook"
                                                                       aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-linkedin"
                                                                       aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="sf-team">
                                            <div className="thumb">
                                                <a href="#"><img src="images/staff-02.jpg" alt=""/></a>
                                            </div>
                                            <div className="text-col">
                                                <h3>Vishal Singh</h3>
                                                <p>Vishal is a people person with a passion for business and developing others! Vishal holds a Master degree in Computer Science and Engineering. He is also working as a Sr. Software Engineer within IT at several of Sweden's largest companies within tech and E-commerce.</p>
                                                <ul className="team-social">
                                                    <li><a href="#"><i className="fa fa-facebook"
                                                                       aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-linkedin"
                                                                       aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="sf-team">
                                            <div className="thumb">
                                                <a href="#"><img src="images/staff-03.jpg" alt=""/></a>
                                            </div>
                                            <div className="text-col">
                                                <h3>Shweta Singh</h3>
                                                <p>Shweta is an energetic and curious person who loves all kinds of challenges and working with tech and business. Shweta holds a Bachelor's degree in Computer Science and Engineering from AKTU India, where, in addition to her studies, she was active in entrepreneurial organizations.</p>
                                                <ul className="team-social">
                                                    <li><a href="#"><i className="fa fa-facebook"
                                                                       aria-hidden="true"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-linkedin"
                                                                       aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Team
