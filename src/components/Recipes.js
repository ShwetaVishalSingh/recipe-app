import React, {useEffect, useState} from 'react'
import Header from "./Header";
import {getData} from "../services/Ajax";
import  './Recipes.css'
import {getCookie} from "../services/CookieService";
import {RecipeConstant} from "../utilis/RecipeConstant";


const Recipes = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getData(
                '/api/recipe/'
            );
            const result = await response;
            setData(result.recipeList);
        };
        fetchData();
    }, []);
    const createRecipe = () => {
        const userId = getCookie(RecipeConstant.cuser);
        props.history.push("/createRecipe/" + userId)
    };
    return (
        <div>
            <Header history={props.history}/>

            <div className="team-main pad-top-100 pad-bottom-100 parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                 <div className="reserve-book-btn text-right">

                                    <button className="reserve-book-btn text-right hvr-underline-from-center" type="submit"
                                            onClick={createRecipe} id="submit">Add Recipe
                                    </button>
                                </div>
                            </div>
                            <div className="reserve-book-btn text-right">

                            </div>
                            <div className="team-box">

                                <div className="row">
                                    {data && data.map(item => (
                                        <div className="col-md-4 col-sm-6">
                                            <div className="sf-team">
                                                <div className="thumb">
                                                    <a href="#"><img src={item.image} alt=""/></a>
                                                </div>
                                                <div className="text-col">
                                                    <h3 className="single-line-truncate">{item.recipeName}</h3>
                                                    <p className="multi-line-truncate">{item.description}</p>

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Recipes
