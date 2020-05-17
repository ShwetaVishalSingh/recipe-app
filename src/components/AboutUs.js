import React from 'react'
import Header from "./Header";


const About = (props) => {
    return (
        <div>
            <Header history={props.history}/>
            <div id="about" className="banner full-screen-mode parallax">
                <div className="gallery-main pad-top-100 pad-bottom-100">
                    <div className="about-main pad-top-100 pad-bottom-100">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <h2 className="block-title"> About Us </h2>
                                        <h3>Hello and welcome to Mummy's Yummy Recipes!</h3>
                                        <p> Thank you so much for stopping by the site! If you are new to Mummy's Yummy  Recipes, the one thing you should know about us is that we are obsessed with creating scratch cooking recipes that you will love. Also we give platform for the vendors who wants to share/sell  their recipes  with large number of users. </p>
                                        <h3>Recipes that work</h3>
                                        <p> There are two things we think about when deciding if a recipe is good enough to go on the site.
                                            First, does it work? Does the dish make us smile inside and out? Do we want to eat the whole batch by ourselves?
                                            Second, if the dish tastes great, is it worth the effort? Do we want to make it again (and again and again)?
                                            This is what we strive for—recipes you can rely on our recipes  every time and be worth your time, effort, and $$ to make!
                                            Our goal is to encourage people to cook at home, as well as order our recipes  and to make the process of feeding your family and loved ones less intimidating and more enjoyable. </p>
                                        <h3>Where we get the recipes</h3>
                                        <p> We develop most of our recipes though vendors.
                                            The recipes they share use mostly whole food ingredients but who also believe there is a time and a place for healthy canned, frozen, and other prepared ingredients. We believe in a varied, healthy diet, using extra virgin olive oil, real butter and cream, eggs, lots of green vegetables, and protein from meat, fish, beans, and cheese.. </p>
                                        <h3>Recipe testing</h3>
                                        <p> We want you to love our recipes as much as we do!
                                            We do an extra round of recipe testing with a team of recipe testers who work from their home kitchens. They make and give feedback on each new recipe that goes up on Mummy's Yummy Recipes, making sure it’s perfect before it goes out the door.
                                            Please try the recipes, and if you have a question or constructive feedback, let us know about it by dropping an email to us.. </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <div className="about-images">
                                            <img src="images/about-main.jpg" alt=""/>
                                            <img src="images/about-inset.jpg" alt=""/>
                                            {/*<img className="about-main" src={logo} alt="About Main Image"/>
                                    <img className="about-inset" src={logo1} alt="About Inset Image"/>*/}
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
export default About
