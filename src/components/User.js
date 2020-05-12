import React, {useEffect, useState} from 'react';
import showNotification from "../utilis/Notifications";
import {getData, postData} from "../services/Ajax";
import Header from "./Header";

const User = (props) => {
    const [data, setData] = useState([]);
    const userId = props.match.params.userId;
    useEffect(() => {
        const fetchData = async () => {
            const response = await getData(
                '/api/user/' + userId
            );
            const result = await response;
            setData(result);
        };
        fetchData();
    }, []);


    const handleChangePassword = (props) => {
        return (
            props.history.push("/changePassword/" + userId)
        );
    };
    const handleLogout = (props) => {
        return (
            props.history.push("/logout")
        );
    };

    const handlePostData = async (event) => {
        event.preventDefault();
        const response = await postData("/api/user", data);
        if (response.status === 200) {
            const result = await response.json();
            props.history.push("/");
            showNotification("Success", result.message, "success");
        } else {
            const result = await response.json();

            showNotification("Error!", result.errorMessage, "danger");
        }
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        data[name] = value
        setData(data)
        return true;
    };


    return (
        <div>
            <Header history={props.history}/>
            <div id="signIn" className="banner full-screen-mode parallax">
                <div className="gallery-main pad-top-100 pad-bottom-100">
                    <div className="container">
                        <div className="row">
                            <div className="form-reservations-box">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                        <h2 className="block-title text-center">
                                            USER PROFILE
                                        </h2>
                                    </div>
                                    <form onSubmit={handlePostData} className="reservations-box"
                                          name="User">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-box">
                                                <input type="email" name="userName"
                                                       id="userName"
                                                       value={data.userName}
                                                       readOnly
                                                       placeholder="E-Mail ID"
                                                       required="required" data-error="E-mail id is required."/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-box">
                                                <input type="text" onChange={handleInputChange} name="firstName"
                                                       id="password"
                                                       value={data.firstName}
                                                       placeholder="firstName"
                                                       required="required" data-error="Password is required."/>
                                            </div>

                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-box">
                                                <input type="lastName" onChange={handleInputChange} name="lastName"
                                                       id="lastName"
                                                       value={data.lastName}
                                                       placeholder="lastName"
                                                       required="required" data-error="newPassword is required."/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-box">
                                                <input type="text" name="phoneNumber" id="phoneNumber"
                                                       value={data.phoneNumber}
                                                       placeholder="Phone Number"
                                                       onChange={handleInputChange}
                                                       required="required" data-error="Confirm Password is required."/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="reserve-book-btn text-center">
                                                <button className="hvr-underline-from-center" type="save"
                                                        id="register">SAVE
                                                </button>

                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="reserve-book-btn text-center">
                                                <span><a className="register-seller" href="#" onClick={() => {
                                                    handleChangePassword(props)
                                                }}>Change Password</a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default User

