import React from 'react'
import Header from "./Header";

const Home = (props) => {
    function GoToPage(props, page) {
        props.history.push(page)
    }

    return (
        <div>
            <Header history={props.history}/>
            <div id="banner" className="banner full-screen-mode parallax">
                <div className="container pr">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="banner-static">
                            <div className="banner-text">
                                <div className="banner-cell">
                                    <h1>Order Delicious recipes from us for <span className="typer" id="some-id" data-delay="200"
                                                             data-delim=":"
                                                             data-words="Friends & Family"
                                                             data-colors="red"></span><span className="cursor"
                                                                                            data-cursorDisplay="_"
                                                                                            data-owner="some-id"></span>
                                    </h1>
                                    <p>You choose... We are here to cook and deliver.</p>
                                    <div className="book-btn">
                                        <a href="#reservation" className="table-btn hvr-underline-from-center"
                                           onClick={() => {
                                               GoToPage(props,"/recipe")
                                           }}>Order Now</a>
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
export default Home;
